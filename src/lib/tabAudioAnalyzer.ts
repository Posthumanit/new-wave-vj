import type { AudioData } from '../types'
import { computeBands, computeSpectrum, newBeatState, type BeatState } from './audioMath'

export class TabAudioAnalyzer {
  private context: AudioContext
  private analyser: AnalyserNode
  private source: MediaStreamAudioSourceNode
  private stream: MediaStream
  private dataArray: Uint8Array<ArrayBuffer>
  private beatState: BeatState

  constructor(stream: MediaStream) {
    this.stream = stream
    this.context = new AudioContext()
    this.analyser = this.context.createAnalyser()
    this.analyser.fftSize = 2048
    this.analyser.smoothingTimeConstant = 0.85

    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount) as Uint8Array<ArrayBuffer>
    this.beatState = newBeatState()

    this.source = this.context.createMediaStreamSource(stream)
    this.source.connect(this.analyser)
    // Deliberately not connected to context.destination — the captured tab is
    // already producing audible sound; routing it to output again would echo it.
  }

  getData(): AudioData {
    this.analyser.getByteFrequencyData(this.dataArray)
    const { bass, mid, treble, beat } = computeBands(
      this.dataArray, this.context.sampleRate, this.analyser.fftSize, this.beatState,
    )
    const spectrum = computeSpectrum(this.dataArray)

    return { bass, mid, treble, beat, isPlaying: true, spectrum }
  }

  dispose() {
    this.stream.getTracks().forEach((t) => t.stop())
    void this.context.close()
  }
}
