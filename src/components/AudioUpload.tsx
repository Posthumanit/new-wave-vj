import { useRef } from 'react'

interface Props {
  onFile: (file: File) => void
}

export function AudioUpload({ onFile }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) onFile(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('audio/')) onFile(file)
  }

  return (
    <div
      className="fade-in"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={() => inputRef.current?.click()}
      style={{
        border: '2px dashed var(--pink)',
        borderRadius: 8,
        padding: '32px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        cursor: 'pointer',
        background: 'rgba(255,0,128,0.03)',
        transition: 'background 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255,0,128,0.08)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,0,128,0.03)'
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="audio/*"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      <div style={{ fontSize: 48, lineHeight: 1 }}>🎵</div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: 2, marginBottom: 6 }}>
          TAP TO LOAD AUDIO
        </p>
        <p style={{ fontSize: 12, color: 'var(--text-dim)' }}>
          MP3 · WAV · OGG · M4A · FLAC
        </p>
      </div>
      <p style={{ fontSize: 11, color: 'var(--text-dim)', letterSpacing: 1 }}>
        Audio plays locally — no uploads
      </p>
    </div>
  )
}
