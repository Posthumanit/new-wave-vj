export function extractVideoId(input: string): string | null {
  const patterns = [
    /[?&]v=([A-Za-z0-9_-]{11})/,
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
    /youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,
    /youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,
  ]
  for (const p of patterns) {
    const m = input.match(p)
    if (m) return m[1]
  }
  return null
}

interface CobaltResponse {
  status: 'stream' | 'redirect' | 'picker' | 'error' | 'rate-limit' | string
  url?: string
  filename?: string
}

export async function fetchYouTubeAudioBlob(youtubeUrl: string): Promise<Blob> {
  // 1. Ask cobalt for an audio stream URL
  const apiRes = await fetch('https://api.cobalt.tools/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      url: youtubeUrl,
      isAudioOnly: true,
      audioFormat: 'mp3',
      filenamePattern: 'basic',
    }),
  })

  if (!apiRes.ok) {
    throw new Error(`Cobalt API ${apiRes.status}: ${apiRes.statusText}`)
  }

  const data = (await apiRes.json()) as CobaltResponse

  if (data.status === 'error' || data.status === 'rate-limit') {
    throw new Error(`Cobalt: ${data.status}`)
  }

  if (!data.url) {
    throw new Error('Cobalt returned no download URL')
  }

  // 2. Fetch the audio bytes — cobalt proxy has CORS headers
  const audioRes = await fetch(data.url)
  if (!audioRes.ok) {
    throw new Error(`Audio fetch failed: ${audioRes.status}`)
  }

  return audioRes.blob()
}
