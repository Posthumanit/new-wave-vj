import { useCallback, useRef, useState } from 'react'
import { captureTabAudio } from '../lib/tabAudioCapture'
import { TabAudioAnalyzer } from '../lib/tabAudioAnalyzer'
import { SILENT_AUDIO } from '../lib/audioMath'
import type { AudioData } from '../types'

export function useTabAudio() {
  const [data, setData] = useState<AudioData>(SILENT_AUDIO)
  const [active, setActive] = useState(false)
  const [error, setError] = useState('')
  const analyzerRef = useRef<TabAudioAnalyzer | null>(null)
  const rafRef = useRef<number>(0)
  const pausedRef = useRef(false)

  const stop = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    analyzerRef.current?.dispose()
    analyzerRef.current = null
    pausedRef.current = false
    setActive(false)
    setData(SILENT_AUDIO)
  }, [])

  const start = useCallback(async () => {
    setError('')
    try {
      const stream = await captureTabAudio()
      const analyzer = new TabAudioAnalyzer(stream)
      analyzerRef.current = analyzer
      pausedRef.current = false
      setActive(true)

      stream.getTracks().forEach((t) => t.addEventListener('ended', stop))

      const tick = () => {
        setData(pausedRef.current ? SILENT_AUDIO : analyzer.getData())
        rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Tab audio capture was cancelled or blocked')
    }
  }, [stop])

  const toggle = useCallback(() => {
    pausedRef.current = !pausedRef.current
  }, [])

  return { data, active, error, start, stop, toggle }
}
