import { useState } from 'react'
import { analyzeMood } from '../lib/gemini'
import { fetchYouTubeAudioBlob, extractVideoId } from '../lib/cobalt'
import type { MoodData } from '../types'

interface Props {
  apiKey: string
  onResult: (mood: MoodData, audioBlob: Blob | null, videoId: string | null) => void
  onError: (msg: string) => void
}

type Phase = 'idle' | 'analyzing' | 'downloading'

const LABELS: Record<Phase, string> = {
  idle: '',
  analyzing: 'Analyzing mood with Gemini…',
  downloading: 'Fetching audio from YouTube…',
}

export function URLInput({ apiKey, onResult, onError }: Props) {
  const [input, setInput] = useState('https://youtu.be/HNqyA0zC894?si=KVOyElLI3IEh49di')
  const [phase, setPhase] = useState<Phase>('idle')

  const run = async () => {
    const val = input.trim()
    if (!val) return

    const videoId = extractVideoId(val)
    const isYtUrl = val.startsWith('http') && videoId !== null

    setPhase('analyzing')
    try {
      // Mood analysis always runs; audio fetch runs in parallel for YouTube URLs
      const moodPromise = analyzeMood(apiKey, val)
      const audioPromise: Promise<Blob | null> = isYtUrl
        ? fetchYouTubeAudioBlob(val).catch((e: unknown) => {
            console.warn('Audio fetch failed:', e)
            return null
          })
        : Promise.resolve(null)

      if (isYtUrl) setPhase('downloading')

      const [mood, audioBlob] = await Promise.all([moodPromise, audioPromise])
      onResult(mood, audioBlob, videoId)
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setPhase('idle')
    }
  }

  const loading = phase !== 'idle'

  return (
    <div className="fade-in" style={{ maxWidth: 480, width: '100%', margin: '0 auto' }}>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <p className="label">Step 2 of 2</p>
          <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>
            PASTE A YOUTUBE LINK
          </h2>
          <p style={{ fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.6 }}>
            Paste a YouTube URL — Gemini analyzes the mood and the audio downloads automatically.
            Or type an artist + song name to get visuals only.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label className="label" htmlFor="url-input">YOUTUBE URL OR SONG NAME</label>
          <input
            id="url-input"
            className="input"
            type="url"
            inputMode="url"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !loading && void run()}
            placeholder="https://youtube.com/watch?v=…"
            disabled={loading}
            spellCheck={false}
            autoCapitalize="none"
            autoCorrect="off"
          />
        </div>

        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div className="spinner" />
              <span style={{ fontSize: 12, color: 'var(--text-dim)', letterSpacing: 1 }}>
                {LABELS[phase]}
              </span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {(['analyzing', 'downloading'] as Phase[]).map((p) => (
                <div key={p} style={{
                  flex: 1, height: 2, borderRadius: 1,
                  background: phase === p ? 'var(--pink)' : 'var(--border)',
                  transition: 'background 0.3s',
                  boxShadow: phase === p ? 'var(--glow-pink)' : 'none',
                }} />
              ))}
            </div>
          </div>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => void run()}
            disabled={!input.trim()}
            style={{ opacity: input.trim() ? 1 : 0.5 }}
          >
            ANALYZE + FETCH AUDIO →
          </button>
        )}
      </div>
    </div>
  )
}
