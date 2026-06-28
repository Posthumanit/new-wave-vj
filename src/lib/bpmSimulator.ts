import type { AudioData } from '../types'
import { SILENT_AUDIO, SPECTRUM_SIZE } from './audioMath'

export class BpmSimulator {
  private bpm: number
  private energy: number
  private startTime: number
  private beat: number = 0
  private prevPhase: number = 0
  private spectrum: number[] = new Array(SPECTRUM_SIZE).fill(0)

  constructor(bpm: number, energy: number) {
    this.bpm = bpm
    this.energy = energy
    this.startTime = performance.now()
  }

  getData(isActive: boolean): AudioData {
    if (!isActive) return SILENT_AUDIO

    const elapsed = (performance.now() - this.startTime) / 1000
    const interval = 60 / this.bpm
    const phase = (elapsed % interval) / interval // 0–1 per beat

    if (phase < this.prevPhase) this.beat = this.energy  // phase wrapped → new beat
    this.prevPhase = phase
    this.beat *= 0.87

    const bass = Math.min(Math.pow(Math.max(0, 1 - phase * 2.5), 2) * this.energy, 1)
    const midPhase = (elapsed % (interval / 2)) / (interval / 2)
    const mid = Math.min(Math.pow(Math.max(0, 1 - midPhase * 2.5), 1.5) * this.energy * 0.55, 1)
    const treble = Math.min((0.4 + 0.3 * Math.sin(elapsed * Math.PI * this.bpm / 30)) * this.energy * 0.45, 1)
    const beat = Math.min(this.beat, 1)

    for (let b = 0; b < SPECTRUM_SIZE; b++) {
      const t = b / SPECTRUM_SIZE
      const band = t < 0.33 ? bass : t < 0.66 ? mid : treble
      const wobble = 0.5 + 0.5 * Math.sin(elapsed * 6 + b * 0.7)
      this.spectrum[b] = Math.min(band * (0.5 + wobble * 0.6), 1)
    }

    return { bass, mid, treble, beat, isPlaying: true, spectrum: this.spectrum }
  }
}
