import { useState } from 'react'
import { analyzeMood } from '../lib/gemini'
import type { MoodData } from '../types'

interface Props {
  apiKey: string
  onResult: (mood: MoodData) => void
  onError: (msg: string) => void
}

export function URLInput({ apiKey, onResult, onError }: Props) {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const analyze = async () => {
    if (!input.trim()) return
    setLoading(true)
    try {
      const mood = await analyzeMood(apiKey, input.trim())
      onResult(mood)
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Gemini error — check your API key')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fade-in" style={{ maxWidth: 480, width: '100%', margin: '0 auto' }}>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <p className="label">Step 2 of 3</p>
          <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>
            MUSIC SOURCE
          </h2>
          <p style={{ fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.6 }}>
            Paste a YouTube URL or type an artist + song name. Gemini analyzes the mood and
            generates a matching visual palette.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label className="label" htmlFor="url-input">YOUTUBE URL OR SONG TITLE</label>
          <input
            id="url-input"
            className="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !loading && void analyze()}
            placeholder="https://youtube.com/watch?v=… or Daft Punk – One More Time"
            disabled={loading}
            spellCheck={false}
          />
        </div>

        {loading ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div className="spinner" />
            <span style={{ fontSize: 12, color: 'var(--text-dim)', letterSpacing: 1 }}>
              Analyzing mood with Gemini…
            </span>
          </div>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => void analyze()}
            disabled={!input.trim()}
            style={{ opacity: input.trim() ? 1 : 0.5 }}
          >
            ANALYZE →
          </button>
        )}
      </div>
    </div>
  )
}
