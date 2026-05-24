import type { AudioData } from '../types'

const SILENT: AudioData = { bass: 0, mid: 0, treble: 0, beat: 0, isPlaying: false }

export class BpmSimulator {
  private bpm: number
  private energy: number
  private startTime: number
  private beat: number = 0
  private prevPhase: number = 0

  constructor(bpm: number, energy: number) {
    this.bpm = bpm
    this.energy = energy
    this.startTime = performance.now()
  }

  reset() {
    this.startTime = performance.now()
    this.beat = 0
    this.prevPhase = 0
  }

  getData(isActive: boolean): AudioData {
    if (!isActive) return SILENT

    const elapsed = (performance.now() - this.startTime) / 1000
    const interval = 60 / this.bpm
    const phase = (elapsed % interval) / interval // 0–1 per beat

    if (phase < this.prevPhase) this.beat = this.energy  // phase wrapped → new beat
    this.prevPhase = phase
    this.beat *= 0.82

    const bass = Math.pow(Math.max(0, 1 - phase * 2.5), 2) * this.energy
    const midPhase = (elapsed % (interval / 2)) / (interval / 2)
    const mid = Math.pow(Math.max(0, 1 - midPhase * 2.5), 1.5) * this.energy * 0.55
    const treble = (0.4 + 0.3 * Math.sin(elapsed * Math.PI * this.bpm / 30)) * this.energy * 0.45

    return {
      bass: Math.min(bass, 1),
      mid: Math.min(mid, 1),
      treble: Math.min(treble, 1),
      beat: Math.min(this.beat, 1),
      isPlaying: true,
    }
  }
}
