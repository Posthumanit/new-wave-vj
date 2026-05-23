import { useEffect, useRef, useState, useCallback } from 'react'
import { AudioAnalyzer } from '../lib/audioAnalyzer'
import type { AudioData } from '../types'

const SILENT: AudioData = { bass: 0, mid: 0, treble: 0, beat: 0, isPlaying: false }

export function useAudioAnalyzer(file: File | null) {
  const [data, setData] = useState<AudioData>(SILENT)
  const analyzerRef = useRef<AudioAnalyzer | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!file) return

    const analyzer = new AudioAnalyzer(file)
    analyzerRef.current = analyzer

    void analyzer.play()

    const tick = () => {
      setData(analyzer.getData())
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      analyzer.dispose()
      analyzerRef.current = null
    }
  }, [file])

  const toggle = useCallback(() => {
    analyzerRef.current?.toggle()
  }, [])

  return { data, toggle }
}
