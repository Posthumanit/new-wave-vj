import type { AudioData } from '../types'

export const SPECTRUM_SIZE = 32

export const SILENT_AUDIO: AudioData = {
  bass: 0, mid: 0, treble: 0, beat: 0, isPlaying: false,
  spectrum: new Array(SPECTRUM_SIZE).fill(0),
}

export interface BeatState {
  energyHistory: number[]
  beat: number
}

export function newBeatState(): BeatState {
  return { energyHistory: new Array(60).fill(0), beat: 0 }
}

export function computeBands(dataArray: Uint8Array, sampleRate: number, fftSize: number, state: BeatState) {
  const binHz = sampleRate / fftSize
  const bassEnd = Math.floor(300 / binHz)
  const midEnd = Math.floor(3000 / binHz)
  const total = dataArray.length

  let bassSum = 0
  let midSum = 0
  let trebleSum = 0
  for (let i = 1; i < bassEnd; i++) bassSum += dataArray[i]
  for (let i = bassEnd; i < midEnd; i++) midSum += dataArray[i]
  for (let i = midEnd; i < total; i++) trebleSum += dataArray[i]

  const bass = Math.min((bassSum / (bassEnd - 1) / 255) * 2.2, 1)
  const mid = Math.min((midSum / (midEnd - bassEnd) / 255) * 2.8, 1)
  const treble = Math.min((trebleSum / (total - midEnd) / 255) * 3.5, 1)

  const energy = bass * 1.8 + mid * 0.6
  const avgEnergy = state.energyHistory.reduce((a, b) => a + b, 0) / state.energyHistory.length
  if (energy > avgEnergy * 1.4 && energy > 0.25) {
    state.beat = Math.min(energy / (avgEnergy + 0.001), 1)
  }
  state.beat *= 0.82
  state.energyHistory.push(energy)
  state.energyHistory.shift()

  return { bass, mid, treble, beat: state.beat }
}

export function computeSpectrum(dataArray: Uint8Array): number[] {
  const out = new Array(SPECTRUM_SIZE).fill(0)
  const usable = dataArray.length * 0.6 // skip the near-silent top end for a nicer visual range
  const binsPerBucket = usable / SPECTRUM_SIZE
  for (let b = 0; b < SPECTRUM_SIZE; b++) {
    const start = Math.floor(b * binsPerBucket)
    const end = Math.max(start + 1, Math.floor((b + 1) * binsPerBucket))
    let sum = 0
    for (let i = start; i < end; i++) sum += dataArray[i]
    out[b] = Math.min((sum / (end - start) / 255) * 1.8, 1)
  }
  return out
}
