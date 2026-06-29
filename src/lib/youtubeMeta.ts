export interface YoutubeMeta {
  title: string
  artist: string
}

const NOISE_RE = /\s*[([][^)\]]*(official|video|audio|lyrics?|hd|hq|remaster\w*|visualizer|mv)[^)\]]*[)\]]\s*/gi
const SEPARATOR_RE = / [-–—] /

function clean(s: string): string {
  return s.replace(NOISE_RE, ' ').replace(/\s{2,}/g, ' ').trim()
}

export async function fetchYoutubeOEmbed(videoId: string): Promise<{ title: string; author: string } | null> {
  try {
    const url = `https://www.youtube.com/watch?v=${videoId}`
    const res = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`)
    if (!res.ok) return null
    const json = (await res.json()) as { title?: string; author_name?: string }
    if (!json.title) return null
    return { title: json.title, author: json.author_name ?? '' }
  } catch {
    return null
  }
}

// YouTube music titles are often "Artist - Song (Official Video)" — split on the
// dash when present, otherwise fall back to the channel name as the artist.
export function deriveArtistTitle(oembed: { title: string; author: string }): YoutubeMeta {
  const cleaned = clean(oembed.title)
  if (SEPARATOR_RE.test(cleaned)) {
    const [artist, ...rest] = cleaned.split(SEPARATOR_RE)
    return { artist: artist.trim(), title: rest.join(' - ').trim() }
  }
  return { artist: oembed.author, title: cleaned }
}
