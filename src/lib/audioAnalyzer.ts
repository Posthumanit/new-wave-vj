import type { AudioData } from '../types'

export class AudioAnalyzer {
  private context: AudioContext
  private analyser: AnalyserNode
  private source: MediaElementAudioSourceNode
  private audio: HTMLAudioElement
  private dataArray: Uint8Array<ArrayBuffer>
  private energyHistory: number[]
  private beat: number
  private objectUrl: string

  constructor(file: File) {
    this.context = new AudioContext()
    this.analyser = this.context.createAnalyser()
    this.analyser.fftSize = 2048
    this.analyser.smoothingTimeConstant = 0.85

    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount) as Uint8Array<ArrayBuffer>
    this.energyHistory = new Array(60).fill(0)
    this.beat = 0

    this.objectUrl = URL.createObjectURL(file)
    this.audio = new Audio(this.objectUrl)
    this.audio.loop = true
    this.audio.crossOrigin = 'anonymous'

    this.source = this.context.createMediaElementSource(this.audio)
    this.source.connect(this.analyser)
    this.analyser.connect(this.context.destination)
  }

  async play() {
    if (this.context.state === 'suspended') {
      await this.context.resume()
    }
    await this.audio.play()
  }

  pause() {
    this.audio.pause()
  }

  toggle() {
    if (this.audio.paused) {
      void this.play()
    } else {
      this.pause()
    }
  }

  getData(): AudioData {
    this.analyser.getByteFrequencyData(this.dataArray)

    const sampleRate = this.context.sampleRate
    const fftSize = this.analyser.fftSize
    const binHz = sampleRate / fftSize

    const bassEnd = Math.floor(300 / binHz)
    const midEnd = Math.floor(3000 / binHz)
    const total = this.dataArray.length

    let bassSum = 0
    let midSum = 0
    let trebleSum = 0

    for (let i = 1; i < bassEnd; i++) bassSum += this.dataArray[i]
    for (let i = bassEnd; i < midEnd; i++) midSum += this.dataArray[i]
    for (let i = midEnd; i < total; i++) trebleSum += this.dataArray[i]

    const bass = Math.min((bassSum / (bassEnd - 1) / 255) * 2.2, 1)
    const mid = Math.min((midSum / (midEnd - bassEnd) / 255) * 2.8, 1)
    const treble = Math.min((trebleSum / (total - midEnd) / 255) * 3.5, 1)

    // Beat detection via energy comparison
    const energy = bass * 1.8 + mid * 0.6
    const avgEnergy =
      this.energyHistory.reduce((a, b) => a + b, 0) / this.energyHistory.length

    if (energy > avgEnergy * 1.4 && energy > 0.25) {
      this.beat = Math.min(energy / (avgEnergy + 0.001), 1)
    }

    this.beat *= 0.82
    this.energyHistory.push(energy)
    this.energyHistory.shift()

    return {
      bass,
      mid,
      treble,
      beat: this.beat,
      isPlaying: !this.audio.paused,
    }
  }

  isPlaying() {
    return !this.audio.paused
  }

  dispose() {
    this.audio.pause()
    URL.revokeObjectURL(this.objectUrl)
    void this.context.close()
  }
}
