import type { VisualMode } from '../types'

const MODES: { label: string; icon: string }[] = [
  { label: 'SPHERE',  icon: '⚪' },
  { label: 'GALAXY',  icon: '🌀' },
  { label: 'TUNNEL',  icon: '⬛' },
  { label: 'WAVE',    icon: '〰️' },
  { label: 'EQ',      icon: '📊' },
  { label: 'MANDALA', icon: '✴️' },
  { label: 'PLASMA',  icon: '🔥' },
  { label: 'STARS',   icon: '✨' },
  { label: 'RING',    icon: '🎯' },
  { label: 'SCOPE',   icon: '📈' },
  { label: 'HELIX',   icon: '🧬' },
  { label: 'BURST',   icon: '🎆' },
]

interface Props {
  mode: VisualMode
  onMode: (m: VisualMode) => void
  isPlaying: boolean
  onToggle: () => void
  onReset: () => void
  songName: string
}

export function Controls({ mode, onMode, isPlaying, onToggle, onReset, songName }: Props) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '16px 16px max(16px, env(safe-area-inset-bottom))',
        background: 'linear-gradient(transparent, rgba(10,10,15,0.9))',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        pointerEvents: 'auto',
      }}
    >
      {/* Song name */}
      {songName && (
        <p
          style={{
            fontSize: 11,
            letterSpacing: 2,
            color: 'var(--text-dim)',
            textAlign: 'center',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          ♪ {songName.toUpperCase()}
        </p>
      )}

      {/* Mode buttons */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
        {MODES.map((m, idx) => (
          <button
            key={m.label}
            className={`btn btn-ghost${mode === idx ? ' active' : ''}`}
            onClick={() => onMode(idx as VisualMode)}
            style={{ flexBasis: 'calc(25% - 6px)', flexGrow: 0, padding: '8px 2px', fontSize: 10 }}
          >
            {m.icon} {m.label}
          </button>
        ))}
      </div>

      {/* Playback controls */}
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center' }}>
        <button
          className="btn btn-ghost"
          onClick={onReset}
          style={{ fontSize: 12, padding: '10px 20px' }}
        >
          ↩ RESET
        </button>
        <button
          className="btn btn-primary"
          onClick={onToggle}
          style={{ fontSize: 18, padding: '12px 32px', minWidth: 80 }}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
      </div>
    </div>
  )
}
