import { useEffect, useRef, useState, useCallback } from 'react'
import { AudioAnalyzer } from '../lib/audioAnalyzer'
import { SILENT_AUDIO } from '../lib/audioMath'
import type { AudioData } from '../types'

export function useAudioAnalyzer(source: File | Blob | null) {
  const [data, setData] = useState<AudioData>(SILENT_AUDIO)
  const analyzerRef = useRef<AudioAnalyzer | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!source) return
    const analyzer = new AudioAnalyzer(source as File)
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
  }, [source])

  const toggle = useCallback(() => analyzerRef.current?.toggle(), [])
  const getCurrentTime = useCallback(() => analyzerRef.current?.getCurrentTime() ?? null, [])
  return { data, toggle, getCurrentTime }
}
