import { useState } from 'react'

interface Props {
  onSave: (token: string) => void
  onCancel: () => void
}

export function IdentifyTokenForm({ onSave, onCancel }: Props) {
  const [token, setToken] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = token.trim()
    if (trimmed) onSave(trimmed)
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <input
        className="input"
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="AudD API token"
        autoComplete="off"
        spellCheck={false}
      />
      <div style={{ display: 'flex', gap: 8 }}>
        <button type="button" className="btn btn-ghost" onClick={onCancel} style={{ flex: 1 }}>
          CANCEL
        </button>
        <button type="submit" className="btn btn-primary" disabled={!token.trim()} style={{ flex: 1, opacity: token.trim() ? 1 : 0.5 }}>
          SAVE + SCAN
        </button>
      </div>
    </form>
  )
}
