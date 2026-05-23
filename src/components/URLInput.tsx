import { useState } from 'react'
import { analyzeMood, generateImage } from '../lib/gemini'
import type { MoodData } from '../types'

interface Props {
  apiKey: string
  onResult: (mood: MoodData, image: string | null) => void
  onError: (msg: string) => void
}

type Phase = 'idle' | 'analyzing' | 'generating'

export function URLInput({ apiKey, onResult, onError }: Props) {
  const [input, setInput] = useState('')
  const [phase, setPhase] = useState<Phase>('idle')
  const [status, setStatus] = useState('')

  const analyze = async () => {
    if (!input.trim()) return
    setPhase('analyzing')
    setStatus('Analyzing music with Gemini...')

    try {
      const mood = await analyzeMood(apiKey, input.trim())
      setPhase('generating')
      setStatus('Generating visuals with Imagen...')

      const image = await generateImage(apiKey, mood.imagePrompt)
      onResult(mood, image)
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Gemini error — check your API key')
      setPhase('idle')
    }
  }

  const isLoading = phase !== 'idle'

  return (
    <div className="fade-in" style={{ maxWidth: 480, width: '100%', margin: '0 auto' }}>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <p className="label">Step 2 of 3</p>
          <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>
            MUSIC SOURCE
          </h2>
          <p style={{ fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.6 }}>
            Paste a YouTube URL or type an artist + song name. Gemini will analyze the mood and
            generate matching visuals.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label className="label" htmlFor="url-input">
            YOUTUBE URL OR SONG NAME
          </label>
          <input
            id="url-input"
            className="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !isLoading && void analyze()}
            placeholder="https://youtube.com/watch?v=... or Daft Punk – One More Time"
            disabled={isLoading}
            spellCheck={false}
          />
        </div>

        {isLoading ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div className="spinner" />
            <span style={{ fontSize: 12, color: 'var(--text-dim)', letterSpacing: 1, animation: 'pulse 1.5s infinite' }}>
              {status}
            </span>
          </div>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => void analyze()}
            disabled={!input.trim() || isLoading}
            style={{ opacity: input.trim() ? 1 : 0.5 }}
          >
            ANALYZE + GENERATE →
          </button>
        )}

        {/* Phase indicator */}
        {isLoading && (
          <div style={{ display: 'flex', gap: 8 }}>
            {(['analyzing', 'generating'] as Phase[]).map((p) => (
              <div
                key={p}
                style={{
                  flex: 1,
                  height: 2,
                  borderRadius: 1,
                  background:
                    phase === p
                      ? 'var(--pink)'
                      : phase === 'generating' && p === 'analyzing'
                        ? 'var(--cyan)'
                        : 'var(--border)',
                  transition: 'background 0.3s',
                  boxShadow: phase === p ? 'var(--glow-pink)' : 'none',
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
