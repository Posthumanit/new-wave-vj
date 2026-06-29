import type { CSSProperties } from 'react'
import type { LyricLine } from '../lib/lyrics'
import type { LyricsStatus } from '../hooks/useLyricsSync'

interface Props {
  lines: LyricLine[] | null
  status: LyricsStatus
  currentIndex: number
  onNudge: (delta: number) => void
}

const WRAP_STYLE: CSSProperties = {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 215,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 6,
  padding: '0 24px',
  textAlign: 'center',
  zIndex: 4,
}

export function LyricsOverlay({ lines, status, currentIndex, onNudge }: Props) {
  if (status === 'idle') return null

  if (status === 'loading') {
    return (
      <div style={WRAP_STYLE}>
        <p style={{ fontSize: 12, color: 'var(--text-dim)', opacity: 0.6, pointerEvents: 'none' }}>
          ♪ looking for synced lyrics…
        </p>
      </div>
    )
  }

  if (status === 'not-found' || !lines || !lines.length) {
    return (
      <div style={WRAP_STYLE}>
        <p style={{ fontSize: 12, color: 'var(--text-dim)', opacity: 0.6, pointerEvents: 'none' }}>
          ♪ no synced lyrics found for this track
        </p>
      </div>
    )
  }

  const current = currentIndex >= 0 ? lines[currentIndex].text : ''
  const next = currentIndex + 1 < lines.length ? lines[currentIndex + 1].text : ''

  return (
    <div style={WRAP_STYLE}>
      <p
        style={{
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: 1,
          color: 'var(--cyan, #00ffff)',
          textShadow: '0 0 16px rgba(0,255,255,0.6)',
          maxWidth: 680,
          pointerEvents: 'none',
        }}
      >
        {current}
      </p>
      <p style={{ fontSize: 13, color: 'var(--text-dim)', opacity: 0.7, maxWidth: 680, pointerEvents: 'none' }}>
        {next}
      </p>
      <div style={{ display: 'flex', gap: 8, marginTop: 2 }}>
        <button className="btn btn-ghost" style={{ fontSize: 10, padding: '4px 10px' }} onClick={() => onNudge(-0.5)}>
          −0.5s
        </button>
        <button className="btn btn-ghost" style={{ fontSize: 10, padding: '4px 10px' }} onClick={() => onNudge(0.5)}>
          +0.5s
        </button>
      </div>
    </div>
  )
}
