import type { AudioData } from '../types'
import { computeBands, computeSpectrum, newBeatState, type BeatState } from './audioMath'

export class AudioAnalyzer {
  private context: AudioContext
  private analyser: AnalyserNode
  private source: MediaElementAudioSourceNode
  private audio: HTMLAudioElement
  private dataArray: Uint8Array<ArrayBuffer>
  private beatState: BeatState
  private objectUrl: string

  constructor(file: File) {
    this.context = new AudioContext()
    this.analyser = this.context.createAnalyser()
    this.analyser.fftSize = 2048
    this.analyser.smoothingTimeConstant = 0.85

    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount) as Uint8Array<ArrayBuffer>
    this.beatState = newBeatState()

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
    const { bass, mid, treble, beat } = computeBands(
      this.dataArray, this.context.sampleRate, this.analyser.fftSize, this.beatState,
    )
    const spectrum = computeSpectrum(this.dataArray)

    return { bass, mid, treble, beat, isPlaying: !this.audio.paused, spectrum }
  }

  isPlaying() {
    return !this.audio.paused
  }

  getCurrentTime(): number {
    return this.audio.currentTime
  }

  dispose() {
    this.audio.pause()
    URL.revokeObjectURL(this.objectUrl)
    void this.context.close()
  }
}
