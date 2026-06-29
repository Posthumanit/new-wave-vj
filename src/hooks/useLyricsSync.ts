import { useCallback, useEffect, useRef, useState } from 'react'
import { fetchSyncedLyrics, type LyricLine } from '../lib/lyrics'

interface Options {
  artist: string
  title: string
  isPlaying: boolean
  getPlaybackTime: () => number | null
}

export type LyricsStatus = 'idle' | 'loading' | 'found' | 'not-found'

export function useLyricsSync({ artist, title, isPlaying, getPlaybackTime }: Options) {
  const [lines, setLines] = useState<LyricLine[] | null>(null)
  const [status, setStatus] = useState<LyricsStatus>('idle')
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [offset, setOffset] = useState(0)

  const approxElapsed = useRef(0)
  const lastTick = useRef<number | null>(null)
  const idxRef = useRef(-1)
  const rafRef = useRef(0)

  useEffect(() => {
    setLines(null)
    idxRef.current = -1
    setCurrentIndex(-1)
    approxElapsed.current = 0
    lastTick.current = null
    if (!artist && !title) { setStatus('idle'); return }

    setStatus('loading')
    let cancelled = false
    fetchSyncedLyrics(artist, title).then((result) => {
      if (cancelled) return
      setLines(result)
      setStatus(result && result.length ? 'found' : 'not-found')
    })
    return () => { cancelled = true }
  }, [artist, title])

  useEffect(() => {
    const tick = () => {
      const now = performance.now()
      const real = getPlaybackTime()

      if (real == null) {
        if (isPlaying) {
          if (lastTick.current != null) approxElapsed.current += (now - lastTick.current) / 1000
          lastTick.current = now
        } else {
          lastTick.current = null
        }
      }

      if (lines && lines.length) {
        const t = (real ?? approxElapsed.current) + offset
        let idx = -1
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].time <= t) idx = i
          else break
        }
        if (idx !== idxRef.current) {
          idxRef.current = idx
          setCurrentIndex(idx)
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [lines, offset, isPlaying, getPlaybackTime])

  const nudge = useCallback((delta: number) => setOffset((o) => o + delta), [])

  return { lines, status, currentIndex, offset, nudge }
}
