export interface RecognizedTrack {
  artist: string
  title: string
  album: string
  year: string
}

interface AuddResult {
  artist?: string
  title?: string
  album?: string
  release_date?: string
}

interface AuddResponse {
  status: 'success' | 'error'
  result?: AuddResult | null
  error?: { error_message?: string }
}

const AUDD_ENDPOINT = 'https://api.audd.io/'
const CLIP_SECONDS = 12

// Decodes the source audio and slices out a short clip from the middle of the
// track, re-encoded as a small WAV — we only need to send a representative
// snippet for fingerprinting, not the whole (possibly very large) file.
async function extractClip(blob: Blob): Promise<Blob> {
  const arrayBuffer = await blob.arrayBuffer()
  const ctx = new AudioContext()
  try {
    const audioBuffer = await ctx.decodeAudioData(arrayBuffer)
    const sampleRate = audioBuffer.sampleRate
    const clipSamples = Math.min(audioBuffer.length, Math.floor(CLIP_SECONDS * sampleRate))
    const start = Math.max(0, Math.floor((audioBuffer.length - clipSamples) / 2))
    const channels = audioBuffer.numberOfChannels

    const clip = new Float32Array(clipSamples)
    for (let c = 0; c < channels; c++) {
      const data = audioBuffer.getChannelData(c)
      for (let i = 0; i < clipSamples; i++) clip[i] += data[start + i] / channels
    }
    return encodeWav(clip, sampleRate)
  } finally {
    void ctx.close()
  }
}

function encodeWav(samples: Float32Array, sampleRate: number): Blob {
  const buffer = new ArrayBuffer(44 + samples.length * 2)
  const view = new DataView(buffer)
  const writeStr = (offset: number, s: string) => {
    for (let i = 0; i < s.length; i++) view.setUint8(offset + i, s.charCodeAt(i))
  }

  writeStr(0, 'RIFF')
  view.setUint32(4, 36 + samples.length * 2, true)
  writeStr(8, 'WAVE')
  writeStr(12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, 1, true)
  view.setUint16(22, 1, true)
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, sampleRate * 2, true)
  view.setUint16(32, 2, true)
  view.setUint16(34, 16, true)
  writeStr(36, 'data')
  view.setUint32(40, samples.length * 2, true)

  let offset = 44
  for (let i = 0; i < samples.length; i++, offset += 2) {
    const s = Math.max(-1, Math.min(1, samples[i]))
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true)
  }
  return new Blob([buffer], { type: 'audio/wav' })
}

function recordStream(stream: MediaStream, seconds: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus') ? 'audio/webm;codecs=opus' : 'audio/webm'
    const recorder = new MediaRecorder(stream, { mimeType })
    const chunks: Blob[] = []
    recorder.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data) }
    recorder.onerror = () => reject(new Error('Recording tab audio failed'))
    recorder.onstop = () => resolve(new Blob(chunks, { type: mimeType }))
    recorder.start()
    setTimeout(() => recorder.stop(), seconds * 1000)
  })
}

function parseResult(json: AuddResponse): RecognizedTrack | null {
  const r = json.result
  if (!r) return null
  return {
    artist: r.artist ?? '',
    title: r.title ?? '',
    album: r.album ?? '',
    year: r.release_date ? r.release_date.slice(0, 4) : '',
  }
}

async function postToAudd(clip: Blob, apiToken: string): Promise<RecognizedTrack | null> {
  const form = new FormData()
  form.append('file', clip, 'clip')
  form.append('api_token', apiToken)

  const res = await fetch(AUDD_ENDPOINT, { method: 'POST', body: form })
  if (!res.ok) throw new Error(`Recognition request failed (${res.status})`)

  const json = (await res.json()) as AuddResponse
  if (json.status === 'error') throw new Error(json.error?.error_message ?? 'Recognition failed')
  return parseResult(json)
}

// For an already-fetched/uploaded full track — slice a clip from the middle and scan it.
export async function recognizeBlob(source: Blob, apiToken: string): Promise<RecognizedTrack | null> {
  const clip = await extractClip(source)
  return postToAudd(clip, apiToken)
}

// For a live tab-capture stream — record a short audio-only snippet and scan it.
export async function recognizeStream(stream: MediaStream, apiToken: string, seconds = 10): Promise<RecognizedTrack | null> {
  const audioOnly = new MediaStream(stream.getAudioTracks())
  const clip = await recordStream(audioOnly, seconds)
  return postToAudd(clip, apiToken)
}
