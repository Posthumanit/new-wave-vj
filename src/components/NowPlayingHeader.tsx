import type { MoodData } from '../types'

interface Props {
  mood: MoodData
}

export function NowPlayingHeader({ mood }: Props) {
  if (!mood.title) return null
  const meta = [mood.artist, mood.album, mood.year].filter(Boolean).join(' · ')

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '14px 180px 10px 16px',
        background: 'linear-gradient(rgba(10,10,15,0.85), transparent)',
        textAlign: 'center',
        pointerEvents: 'none',
        zIndex: 5,
      }}
    >
      <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
        {mood.title}
      </p>
      {meta && (
        <p style={{ fontSize: 11, color: 'var(--text-dim)', marginTop: 2 }}>{meta}</p>
      )}
    </div>
  )
}
