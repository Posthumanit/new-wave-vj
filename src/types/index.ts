export interface MoodData {
  mood: string;
  energy: number;
  genre: string;
  colors: [string, string, string];
  description: string;
  imagePrompt: string;
}

export interface AudioData {
  bass: number;
  mid: number;
  treble: number;
  beat: number;
  isPlaying: boolean;
}

export type AppState =
  | 'api-key'
  | 'input'
  | 'analyzing'
  | 'generating'
  | 'ready'
  | 'playing';

export type VisualMode = 0 | 1 | 2 | 3;
