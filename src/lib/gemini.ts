import { GoogleGenAI } from '@google/genai'
import type { MoodData } from '../types'

const DEFAULT_MOOD: MoodData = {
  mood: 'energetic',
  energy: 0.7,
  bpm: 120,
  genre: 'electronic',
  colors: ['#ff0080', '#00ffff', '#8000ff'],
  description: 'High-energy electronic music with pulsing synthesizers',
  imagePrompt:
    'Abstract psychedelic digital art, neon pink and cyan laser beams, fractal geometry, music visualizer aesthetic, dark background, 80s synthwave',
  title: '',
  artist: '',
  album: '',
  year: '',
}

export async function analyzeMood(apiKey: string, input: string): Promise<MoodData> {
  const ai = new GoogleGenAI({ apiKey })

  const prompt = `You are a music mood analyzer. Analyze this music reference: "${input}"

This could be a YouTube URL, song title, artist name, or description. Use your knowledge to determine musical characteristics.

Respond with ONLY a valid JSON object — no markdown, no explanation:
{
  "mood": "one of: euphoric|melancholic|aggressive|dreamy|energetic|dark|uplifting|hypnotic",
  "energy": 0.85,
  "bpm": 128,
  "genre": "one of: electronic|rock|pop|jazz|classical|hip-hop|ambient|metal|synthwave|house|techno",
  "colors": ["#hex1", "#hex2", "#hex3"],
  "description": "One sentence describing the musical atmosphere",
  "imagePrompt": "Detailed visual description for abstract psychedelic background art matching this music",
  "title": "Best-guess song title, or empty string if you can't identify the specific track",
  "artist": "Best-guess artist/band name, or empty string if unknown",
  "album": "Best-guess album name, or empty string if unknown",
  "year": "Best-guess release year as a string, or empty string if unknown"
}

bpm must be a realistic integer tempo for this genre/song. colors must be 3 hex values evoking the mood. imagePrompt describes surreal abstract VJ visuals — no text, no people. Only fill title/artist/album/year when you actually recognize the specific track — never invent plausible-sounding metadata for a track you don't recognize.`

  try {
    const result = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
    })

    const text = result.text ?? ''
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) throw new Error('No JSON in response')

    const parsed = JSON.parse(jsonMatch[0]) as Partial<MoodData>
    return {
      mood: parsed.mood ?? DEFAULT_MOOD.mood,
      energy: typeof parsed.energy === 'number' ? parsed.energy : DEFAULT_MOOD.energy,
      bpm: typeof parsed.bpm === 'number' && parsed.bpm > 0 ? Math.round(parsed.bpm) : DEFAULT_MOOD.bpm,
      genre: parsed.genre ?? DEFAULT_MOOD.genre,
      colors: Array.isArray(parsed.colors) && parsed.colors.length >= 3
        ? [parsed.colors[0] as string, parsed.colors[1] as string, parsed.colors[2] as string]
        : DEFAULT_MOOD.colors,
      description: parsed.description ?? DEFAULT_MOOD.description,
      imagePrompt: parsed.imagePrompt ?? DEFAULT_MOOD.imagePrompt,
      title: typeof parsed.title === 'string' ? parsed.title : '',
      artist: typeof parsed.artist === 'string' ? parsed.artist : '',
      album: typeof parsed.album === 'string' ? parsed.album : '',
      year: typeof parsed.year === 'string' ? parsed.year : '',
    }
  } catch {
    return DEFAULT_MOOD
  }
}

export async function generateImage(apiKey: string, prompt: string): Promise<string | null> {
  const ai = new GoogleGenAI({ apiKey })
  try {
    const result = await ai.models.generateImages({
      model: 'imagen-3.0-generate-002',
      prompt: `${prompt}. Abstract art, no text, no people, psychedelic music visualizer background, high quality`,
      config: { numberOfImages: 1, aspectRatio: '16:9', outputMimeType: 'image/jpeg' },
    })

    const imageBytes = result.generatedImages?.[0]?.image?.imageBytes
    if (!imageBytes) return null

    if (typeof imageBytes === 'string') return `data:image/jpeg;base64,${imageBytes}`

    const bytes = new Uint8Array(imageBytes as unknown as ArrayBuffer)
    let binary = ''
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i])
    return `data:image/jpeg;base64,${btoa(binary)}`
  } catch {
    return null
  }
}
