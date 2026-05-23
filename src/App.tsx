import { useState, useCallback } from 'react'
import { APIKeyInput } from './components/APIKeyInput'
import { URLInput } from './components/URLInput'
import { AudioUpload } from './components/AudioUpload'
import { Visualizer } from './components/Visualizer'
import { Controls } from './components/Controls'
import { useAudioAnalyzer } from './hooks/useAudioAnalyzer'
import { generateImage } from './lib/gemini'
import type { AppState, MoodData, VisualMode } from './types'

export default function App() {
  const [apiKey, setApiKey] = useState<string>(() => localStorage.getItem('nwvj-api-key') ?? '')
  const [appState, setAppState] = useState<AppState>(() =>
    localStorage.getItem('nwvj-api-key') ? 'input' : 'api-key',
  )
  const [moodData, setMoodData] = useState<MoodData | null>(null)
  const [bgImage, setBgImage] = useState<string | null>(null)
  const [bgGenerating, setBgGenerating] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [mode, setMode] = useState<VisualMode>(0)
  const [error, setError] = useState<string>('')

  const { data: audioData, toggle: toggleAudio } = useAudioAnalyzer(audioFile)

  const handleApiKey = (key: string) => {
    localStorage.setItem('nwvj-api-key', key)
    setApiKey(key)
    setAppState('input')
  }

  // Called as soon as text analysis finishes — don't wait for image
  const handleMoodResult = useCallback(
    (mood: MoodData) => {
      setMoodData(mood)
      setBgImage(null)
      setBgGenerating(true)
      setAppState('ready')

      // Generate image in background — never blocks the flow
      generateImage(apiKey, mood.imagePrompt)
        .then((img) => {
          if (img) setBgImage(img)
        })
        .catch(() => undefined)
        .finally(() => setBgGenerating(false))
    },
    [apiKey],
  )

  const handleAnalysisError = useCallback((msg: string) => {
    setError(msg)
  }, [])

  const handleAudioFile = (file: File) => {
    setAudioFile(file)
    setAppState('playing')
  }

  const handleReset = () => {
    setAudioFile(null)
    setMoodData(null)
    setBgImage(null)
    setError('')
    setAppState('input')
  }

  const isPlaying = appState === 'playing'

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Visualizer (full screen while playing) */}
      {isPlaying && (
        <div style={{ position: 'absolute', inset: 0 }}>
          <Visualizer
            audioData={audioData}
            moodData={moodData}
            backgroundImage={bgImage}
            mode={mode}
          />
          <Controls
            mode={mode}
            onMode={setMode}
            isPlaying={audioData.isPlaying}
            onToggle={toggleAudio}
            onReset={handleReset}
            songName={audioFile?.name.replace(/\.[^.]+$/, '') ?? ''}
          />
        </div>
      )}

      {/* Setup screens */}
      {!isPlaying && (
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            padding: '32px 16px 48px',
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h1 className="neon-title">NEW WAVE VJ</h1>
            <p className="subtitle" style={{ marginTop: 8 }}>AI-powered music visualizer</p>
          </div>

          {appState === 'api-key' && <APIKeyInput onSubmit={handleApiKey} />}

          {appState === 'input' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 480, width: '100%', margin: '0 auto' }}>
              <URLInput apiKey={apiKey} onResult={handleMoodResult} onError={handleAnalysisError} />
              <button
                className="btn btn-ghost"
                onClick={() => {
                  localStorage.removeItem('nwvj-api-key')
                  setApiKey('')
                  setAppState('api-key')
                }}
                style={{ maxWidth: 480, margin: '0 auto', width: '100%', fontSize: 11 }}
              >
                ← CHANGE API KEY
              </button>
            </div>
          )}

          {appState === 'ready' && moodData && (
            <div
              className="fade-in"
              style={{ maxWidth: 480, width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              {/* Mood result card */}
              <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                {bgImage && (
                  <img
                    src={bgImage}
                    alt=""
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25 }}
                  />
                )}
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div>
                    <p className="label">Mood analyzed ✓</p>
                    <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' }}>
                      {moodData.mood}
                    </h2>
                    <p style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 4 }}>
                      {moodData.genre} · energy {Math.round(moodData.energy * 100)}%
                    </p>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text-dim)' }}>
                    {moodData.description}
                  </p>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    {moodData.colors.map((c) => (
                      <div key={c} style={{ width: 28, height: 28, borderRadius: 4, background: c, boxShadow: `0 0 12px ${c}80` }} />
                    ))}
                    {bgGenerating && (
                      <span style={{ fontSize: 11, color: 'var(--text-dim)', marginLeft: 8 }}>
                        generating visual…
                      </span>
                    )}
                    {bgImage && !bgGenerating && (
                      <span style={{ fontSize: 11, color: 'var(--cyan)', marginLeft: 8 }}>
                        ✓ visual ready
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 3: audio upload */}
              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <p className="label">Step 3 of 3 — Load your audio file</p>
                  <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.5 }}>
                    The YouTube audio <strong style={{ color: 'var(--text)' }}>cannot stream directly</strong> in a browser.
                    Download the song as an MP3 first, then load it below.
                  </p>
                </div>
                <AudioUpload onFile={handleAudioFile} />
              </div>

              <button
                className="btn btn-ghost"
                onClick={() => setAppState('input')}
                style={{ width: '100%', fontSize: 11 }}
              >
                ← ANALYZE A DIFFERENT SONG
              </button>
            </div>
          )}

          {/* Error banner */}
          {error && (
            <div
              style={{
                maxWidth: 480,
                margin: '16px auto 0',
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255,68,102,0.1)',
                border: '1px solid rgba(255,68,102,0.4)',
                borderRadius: 4,
                display: 'flex',
                gap: 12,
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontSize: 16 }}>⚠️</span>
              <div style={{ flex: 1 }}>
                <p className="error" style={{ marginBottom: 4 }}>ERROR</p>
                <p style={{ fontSize: 12, color: 'var(--text-dim)' }}>{error}</p>
              </div>
              <button
                onClick={() => setError('')}
                style={{ background: 'none', color: 'var(--text-dim)', fontSize: 18, lineHeight: 1 }}
              >
                ×
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
