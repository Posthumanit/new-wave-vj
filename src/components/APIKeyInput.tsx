import { useState } from 'react'

interface Props {
  onSubmit: (key: string) => void
}

export function APIKeyInput({ onSubmit }: Props) {
  const [key, setKey] = useState('')
  const [show, setShow] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = key.trim()
    if (trimmed) onSubmit(trimmed)
  }

  return (
    <div className="fade-in" style={{ maxWidth: 480, width: '100%', margin: '0 auto' }}>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <p className="label">Step 1 of 3</p>
          <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>
            GEMINI API KEY
          </h2>
          <p style={{ fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.6 }}>
            Your key is stored locally in the browser and never sent to any server.
            Get a free key at{' '}
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--cyan)' }}
            >
              aistudio.google.com
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <label className="label" htmlFor="api-key">API KEY</label>
          <div style={{ position: 'relative' }}>
            <input
              id="api-key"
              className="input"
              type={show ? 'text' : 'password'}
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="AIza..."
              autoComplete="off"
              spellCheck={false}
              style={{ paddingRight: 48 }}
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              style={{
                position: 'absolute',
                right: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                color: 'var(--text-dim)',
                fontSize: 16,
                padding: 4,
              }}
            >
              {show ? '🙈' : '👁️'}
            </button>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!key.trim()}
            style={{ opacity: key.trim() ? 1 : 0.5 }}
          >
            CONTINUE →
          </button>
        </form>
      </div>
    </div>
  )
}
