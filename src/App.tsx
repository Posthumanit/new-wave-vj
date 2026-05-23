import { useState, useCallback } from 'react'
import { APIKeyInput } from './components/APIKeyInput'
import { URLInput } from './components/URLInput'
import { AudioUpload } from './components/AudioUpload'
import { Visualizer } from './components/Visualizer'
import { Controls } from './components/Controls'
import { useAudioAnalyzer } from './hooks/useAudioAnalyzer'
import type { AppState, MoodData, VisualMode } from './types'

export default function App() {
  const [apiKey, setApiKey] = useState<string>(() => localStorage.getItem('nwvj-api-key') ?? '')
  const [appState, setAppState] = useState<AppState>(() =>
    localStorage.getItem('nwvj-api-key') ? 'input' : 'api-key',
  )
  const [moodData, setMoodData] = useState<MoodData | null>(null)
  const [bgImage, setBgImage] = useState<string | null>(null)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [mode, setMode] = useState<VisualMode>(0)
  const [error, setError] = useState<string>('')

  const { data: audioData, toggle: toggleAudio } = useAudioAnalyzer(audioFile)

  const handleApiKey = (key: string) => {
    localStorage.setItem('nwvj-api-key', key)
    setApiKey(key)
    setAppState('input')
  }

  const handleAnalysisResult = useCallback((mood: MoodData, image: string | null) => {
    setMoodData(mood)
    setBgImage(image)
    setAppState('ready')
  }, [])

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
      {/* ── Visualizer canvas (always rendered when playing) ── */}
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

      {/* ── Setup UI ── */}
      {!isPlaying && (
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            padding: '32px 16px',
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h1 className="neon-title">NEW WAVE VJ</h1>
            <p className="subtitle" style={{ marginTop: 8 }}>
              AI-powered music visualizer
            </p>
          </div>

          {/* State machine */}
          {appState === 'api-key' && <APIKeyInput onSubmit={handleApiKey} />}

          {(appState === 'input' || appState === 'analyzing' || appState === 'generating') && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 480, width: '100%', margin: '0 auto' }}>
              <URLInput
                apiKey={apiKey}
                onResult={handleAnalysisResult}
                onError={handleAnalysisError}
              />
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
              style={{
                maxWidth: 480,
                width: '100%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              {/* Mood card */}
              <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                {bgImage && (
                  <img
                    src={bgImage}
                    alt="Generated visual"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.25,
                    }}
                  />
                )}
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div>
                    <p className="label">Step 2 complete — Mood analyzed</p>
                    <h2 style={{ fontSize: 20, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' }}>
                      {moodData.mood}
                    </h2>
                    <p style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 4 }}>
                      {moodData.genre} · energy {Math.round(moodData.energy * 100)}%
                    </p>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text-dim)' }}>
                    {moodData.description}
                  </p>
                  {/* Color swatches */}
                  <div style={{ display: 'flex', gap: 8 }}>
                    {moodData.colors.map((c) => (
                      <div
                        key={c}
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 4,
                          background: c,
                          boxShadow: `0 0 12px ${c}80`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: audio */}
              <div className="card">
                <p className="label" style={{ marginBottom: 16 }}>Step 3 of 3 — Load audio</p>
                <AudioUpload onFile={handleAudioFile} />
              </div>

              <button
                className="btn btn-ghost"
                onClick={() => setAppState('input')}
                style={{ width: '100%', fontSize: 11 }}
              >
                ← ANALYZE DIFFERENT SONG
              </button>
            </div>
          )}

          {/* Error */}
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
              <div>
                <p className="error" style={{ marginBottom: 4 }}>ERROR</p>
                <p style={{ fontSize: 12, color: 'var(--text-dim)' }}>{error}</p>
              </div>
              <button
                onClick={() => setError('')}
                style={{ marginLeft: 'auto', background: 'none', color: 'var(--text-dim)', fontSize: 16 }}
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
