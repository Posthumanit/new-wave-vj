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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* How-to note */}
      <div
        style={{
          background: 'rgba(0,255,255,0.06)',
          border: '1px solid rgba(0,255,255,0.2)',
          borderRadius: 6,
          padding: '12px 14px',
          fontSize: 12,
          color: 'var(--text-dim)',
          lineHeight: 1.7,
        }}
      >
        <span style={{ color: 'var(--cyan)', fontWeight: 700, letterSpacing: 1 }}>HOW TO GET THE SONG: </span>
        On Android, use a YouTube-to-MP3 app or
        {' '}<strong style={{ color: 'var(--text)' }}>download the audio file to your phone</strong>,
        then tap the button below to load it. The audio never leaves your device.
      </div>

      {/* Drop zone */}
      <div
        className="fade-in"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        style={{
          border: '2px dashed var(--pink)',
          borderRadius: 8,
          padding: '36px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
          cursor: 'pointer',
          background: 'rgba(255,0,128,0.04)',
          transition: 'background 0.2s',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
        onTouchStart={(e) => {
          e.currentTarget.style.background = 'rgba(255,0,128,0.1)'
        }}
        onTouchEnd={(e) => {
          e.currentTarget.style.background = 'rgba(255,0,128,0.04)'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,0,128,0.08)' }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,0,128,0.04)' }}
      >
        <input
          ref={inputRef}
          type="file"
          accept="audio/*"
          style={{ display: 'none' }}
          onChange={handleChange}
        />
        <div style={{ fontSize: 52, lineHeight: 1 }}>🎵</div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: 2, color: 'var(--pink)', marginBottom: 6 }}>
            TAP TO SELECT AUDIO FILE
          </p>
          <p style={{ fontSize: 12, color: 'var(--text-dim)' }}>
            MP3 · WAV · OGG · M4A · FLAC
          </p>
        </div>
      </div>
    </div>
  )
}
