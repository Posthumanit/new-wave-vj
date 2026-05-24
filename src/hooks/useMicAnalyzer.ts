import { useState, useRef, useCallback } from 'react'
import type { AudioData } from '../types'

const SILENT: AudioData = { bass: 0, mid: 0, treble: 0, beat: 0, isPlaying: false }

export function useMicAnalyzer() {
  const [data, setData] = useState<AudioData>(SILENT)
  const [active, setActive] = useState(false)
  const [error, setError] = useState('')

  const contextRef = useRef<AudioContext | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const rafRef = useRef<number>(0)
  const beatRef = useRef(0)
  const energyHistory = useRef<number[]>(new Array(60).fill(0))

  const stop = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    streamRef.current?.getTracks().forEach((t) => t.stop())
    void contextRef.current?.close()
    contextRef.current = null
    streamRef.current = null
    beatRef.current = 0
    energyHistory.current = new Array(60).fill(0)
    setActive(false)
    setData(SILENT)
  }, [])

  const toggle = useCallback(async () => {
    if (active) { stop(); return }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      const context = new AudioContext()
      const analyser = context.createAnalyser()
      analyser.fftSize = 2048
      analyser.smoothingTimeConstant = 0.85

      // MediaStream source — do NOT connect to destination (avoids feedback)
      context.createMediaStreamSource(stream).connect(analyser)

      contextRef.current = context
      streamRef.current = stream

      const dataArray = new Uint8Array(analyser.frequencyBinCount)
      const binHz = context.sampleRate / analyser.fftSize
      const bassEnd = Math.floor(300 / binHz)
      const midEnd = Math.floor(3000 / binHz)
      const total = dataArray.length

      const tick = () => {
        analyser.getByteFrequencyData(dataArray)

        let bassSum = 0, midSum = 0, trebleSum = 0
        for (let i = 1; i < bassEnd; i++) bassSum += dataArray[i]
        for (let i = bassEnd; i < midEnd; i++) midSum += dataArray[i]
        for (let i = midEnd; i < total; i++) trebleSum += dataArray[i]

        const bass = Math.min((bassSum / (bassEnd - 1) / 255) * 2.2, 1)
        const mid = Math.min((midSum / (midEnd - bassEnd) / 255) * 2.8, 1)
        const treble = Math.min((trebleSum / (total - midEnd) / 255) * 3.5, 1)

        const energy = bass * 1.8 + mid * 0.6
        const history = energyHistory.current
        const avg = history.reduce((a, b) => a + b, 0) / history.length

        if (energy > avg * 1.4 && energy > 0.25) {
          beatRef.current = Math.min(energy / (avg + 0.001), 1)
        }
        beatRef.current *= 0.82
        history.push(energy)
        history.shift()

        setData({ bass, mid, treble, beat: beatRef.current, isPlaying: true })
        rafRef.current = requestAnimationFrame(tick)
      }

      rafRef.current = requestAnimationFrame(tick)
      setActive(true)
      setError('')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Microphone access denied')
    }
  }, [active, stop])

  return { data, active, toggle, error, stop }
}
