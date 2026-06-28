export interface MoodData {
  mood: string
  energy: number
  bpm: number
  genre: string
  colors: [string, string, string]
  description: string
  imagePrompt: string
  title: string
  artist: string
  album: string
  year: string
}

export interface AudioData {
  bass: number
  mid: number
  treble: number
  beat: number
  isPlaying: boolean
  spectrum: number[]
}

export type AppState = 'api-key' | 'input' | 'ready' | 'playing'

export type VisualMode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
