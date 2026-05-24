import { useEffect, useRef } from 'react'

/* Minimal YouTube IFrame API types */
interface YTPlayer {
  playVideo(): void
  pauseVideo(): void
  getPlayerState(): number
  destroy(): void
}
interface YTPlayerOptions {
  videoId: string
  playerVars?: Record<string, number>
  events?: {
    onReady?: (e: { target: YTPlayer }) => void
    onStateChange?: (e: { data: number }) => void
  }
}
declare global {
  interface Window {
    YT: { Player: new (el: HTMLElement, opts: YTPlayerOptions) => YTPlayer }
    onYouTubeIframeAPIReady: () => void
  }
}

let ytApiLoaded = false
let ytApiCallbacks: Array<() => void> = []

function loadYTApi(): Promise<void> {
  return new Promise((resolve) => {
    if (ytApiLoaded) { resolve(); return }
    ytApiCallbacks.push(resolve)
    if (!document.getElementById('yt-api')) {
      window.onYouTubeIframeAPIReady = () => {
        ytApiLoaded = true
        ytApiCallbacks.forEach((cb) => cb())
        ytApiCallbacks = []
      }
      const s = document.createElement('script')
      s.id = 'yt-api'
      s.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(s)
    }
  })
}

interface Props {
  videoId: string
  onPlayingChange?: (playing: boolean) => void
}

export function YouTubePlayer({ videoId, onPlayingChange }: Props) {
  const divRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YTPlayer | null>(null)

  useEffect(() => {
    if (!divRef.current) return
    const div = divRef.current
    let active = true

    loadYTApi().then(() => {
      if (!active || !div) return
      playerRef.current = new window.YT.Player(div, {
        videoId,
        playerVars: { autoplay: 1, rel: 0, modestbranding: 1 },
        events: {
          onStateChange: (e) => onPlayingChange?.(e.data === 1),
        },
      })
    })

    return () => {
      active = false
      playerRef.current?.destroy()
      playerRef.current = null
    }
  }, [videoId, onPlayingChange])

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 100,
        right: 12,
        width: 160,
        height: 90,
        borderRadius: 6,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.6)',
        zIndex: 15,
      }}
    >
      <div ref={divRef} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}
