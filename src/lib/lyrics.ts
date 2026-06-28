export interface LyricLine {
  time: number
  text: string
}

const LRC_TIME_RE = /\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/g

function parseLRC(lrc: string): LyricLine[] {
  const lines: LyricLine[] = []
  for (const raw of lrc.split('\n')) {
    const matches = [...raw.matchAll(LRC_TIME_RE)]
    if (!matches.length) continue
    const text = raw.replace(LRC_TIME_RE, '').trim()
    if (!text) continue
    for (const m of matches) {
      const min = parseInt(m[1], 10)
      const sec = parseInt(m[2], 10)
      const frac = m[3] ? parseInt(m[3].padEnd(3, '0'), 10) / 1000 : 0
      lines.push({ time: min * 60 + sec + frac, text })
    }
  }
  return lines.sort((a, b) => a.time - b.time)
}

async function tryGet(artist: string, title: string): Promise<LyricLine[] | null> {
  try {
    const params = new URLSearchParams({ artist_name: artist, track_name: title })
    const res = await fetch(`https://lrclib.net/api/get?${params}`)
    if (!res.ok) return null
    const json = (await res.json()) as { syncedLyrics?: string }
    return json.syncedLyrics ? parseLRC(json.syncedLyrics) : null
  } catch {
    return null
  }
}

async function trySearch(artist: string, title: string): Promise<LyricLine[] | null> {
  try {
    const params = new URLSearchParams({ q: `${artist} ${title}`.trim() })
    const res = await fetch(`https://lrclib.net/api/search?${params}`)
    if (!res.ok) return null
    const results = (await res.json()) as Array<{ syncedLyrics?: string }>
    const hit = results.find((r) => r.syncedLyrics)
    return hit?.syncedLyrics ? parseLRC(hit.syncedLyrics) : null
  } catch {
    return null
  }
}

export async function fetchSyncedLyrics(artist: string, title: string): Promise<LyricLine[] | null> {
  if (!artist && !title) return null
  const direct = await tryGet(artist, title)
  if (direct && direct.length) return direct
  const found = await trySearch(artist, title)
  return found && found.length ? found : null
}
