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
  status: 'stream' | 'redirect' | 'picker' | 'error' | 'rate-limit' | 'tunnel' | string
  url?: string
  filename?: string
}

async function tryCobalt(body: Record<string, unknown>): Promise<Blob> {
  const res = await fetch('https://api.cobalt.tools/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`cobalt ${res.status}`)
  const data = (await res.json()) as CobaltResponse
  if (!data.url) throw new Error(`cobalt: no url (status=${data.status})`)
  const audio = await fetch(data.url)
  if (!audio.ok) throw new Error(`audio fetch ${audio.status}`)
  return audio.blob()
}

export async function fetchYouTubeAudioBlob(youtubeUrl: string): Promise<Blob> {
  // Try cobalt v10 format first
  try {
    return await tryCobalt({ url: youtubeUrl, downloadMode: 'audio', audioFormat: 'mp3' })
  } catch {
    // Fall back to cobalt v7 format
    return tryCobalt({ url: youtubeUrl, isAudioOnly: true, audioFormat: 'mp3', filenamePattern: 'basic' })
  }
}
