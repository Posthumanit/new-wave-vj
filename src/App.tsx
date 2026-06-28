import { useState, useCallback, useEffect, useRef } from 'react'
import { APIKeyInput } from './components/APIKeyInput'
import { URLInput } from './components/URLInput'
import { AudioUpload } from './components/AudioUpload'
import { Visualizer } from './components/Visualizer'
import { Controls } from './components/Controls'
import { YouTubePlayer, type YouTubePlayerHandle } from './components/YouTubePlayer'
import { NowPlayingHeader } from './components/NowPlayingHeader'
import { LyricsOverlay } from './components/LyricsOverlay'
import { useAudioAnalyzer } from './hooks/useAudioAnalyzer'
import { useTabAudio } from './hooks/useTabAudio'
import { useLyricsSync } from './hooks/useLyricsSync'
import { generateImage } from './lib/gemini'
import { BpmSimulator } from './lib/bpmSimulator'
import { SILENT_AUDIO } from './lib/audioMath'
import type { AppState, AudioData, MoodData, VisualMode } from './types'

export default function App() {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('nwvj-api-key') ?? '')
  const [appState, setAppState] = useState<AppState>(() =>
    localStorage.getItem('nwvj-api-key') ? 'input' : 'api-key',
  )
  const [moodData, setMoodData] = useState<MoodData | null>(null)
  const [bgImage, setBgImage] = useState<string | null>(null)
  const [bgGenerating, setBgGenerating] = useState(false)

  const [audioSource, setAudioSource] = useState<Blob | null>(null)
  const [videoId, setVideoId] = useState<string | null>(null)
  const [useBpm, setUseBpm] = useState(false)
  const [bpmData, setBpmData] = useState<AudioData>(SILENT_AUDIO)
  const bpmRef = useRef<BpmSimulator | null>(null)
  const bpmRafRef = useRef<number>(0)

  const [mode, setMode] = useState<VisualMode>(0)
  const [error, setError] = useState('')
  const ytRef = useRef<YouTubePlayerHandle | null>(null)

  const { data: realAudioData, toggle: toggleAudio, getCurrentTime: getFileCurrentTime } = useAudioAnalyzer(audioSource)
  const tabAudio = useTabAudio()

  useEffect(() => {
    if (!useBpm || !moodData) return
    bpmRef.current = new BpmSimulator(moodData.bpm, moodData.energy)
    const tick = () => {
      setBpmData(bpmRef.current!.getData(true))
      bpmRafRef.current = requestAnimationFrame(tick)
    }
    bpmRafRef.current = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(bpmRafRef.current); bpmRef.current = null }
  }, [useBpm, moodData])

  useEffect(() => {
    if (tabAudio.active) setAppState('playing')
  }, [tabAudio.active])

  const audioData = tabAudio.active ? tabAudio.data : audioSource ? realAudioData : useBpm ? bpmData : SILENT_AUDIO

  const getPlaybackTime = useCallback((): number | null => {
    if (audioSource && !tabAudio.active) return getFileCurrentTime()
    if (!tabAudio.active && !audioSource && useBpm && videoId) return ytRef.current?.getCurrentTime() ?? null
    return null
  }, [audioSource, tabAudio.active, useBpm, videoId, getFileCurrentTime])

  const lyrics = useLyricsSync({
    artist: moodData?.artist ?? '',
    title: moodData?.title ?? '',
    isPlaying: audioData.isPlaying,
    getPlaybackTime,
  })

  const handleApiKey = (key: string) => {
    localStorage.setItem('nwvj-api-key', key)
    setApiKey(key)
    setAppState('input')
  }

  const handleResult = useCallback(
    (mood: MoodData, audioBlob: Blob | null, vid: string | null) => {
      setMoodData(mood)
      setBgImage(null)
      setAudioSource(null)
      setVideoId(vid)
      setUseBpm(false)

      if (audioBlob) {
        setAudioSource(audioBlob)
        setAppState('playing')
      } else {
        // No downloaded audio — let the user pick tab capture, upload, or BPM fallback
        setAppState('ready')
      }

      setBgGenerating(true)
      generateImage(apiKey, mood.imagePrompt)
        .then((img) => { if (img) setBgImage(img) })
        .catch(() => undefined)
        .finally(() => setBgGenerating(false))
    },
    [apiKey],
  )

  const handleAnalysisError = useCallback((msg: string) => setError(msg), [])
  const handleAudioFile = (file: File) => { setAudioSource(file); setUseBpm(false); setAppState('playing') }
  const handlePlayBpmOnly = () => { setUseBpm(true); setAppState('playing') }
  const handleReset = () => {
    tabAudio.stop()
    setAudioSource(null); setUseBpm(false); setMoodData(null)
    setBgImage(null); setError(''); setVideoId(null); setAppState('input')
  }

  const isPlaying = appState === 'playing'
  const songName = audioSource instanceof File
    ? audioSource.name.replace(/\.[^.]+$/, '')
    : (moodData?.description ?? '')

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      {isPlaying && (
        <div style={{ position: 'absolute', inset: 0 }}>
          <Visualizer audioData={audioData} moodData={moodData} backgroundImage={bgImage} mode={mode} />
          {moodData && <NowPlayingHeader mood={moodData} />}
          <LyricsOverlay lines={lyrics.lines} currentIndex={lyrics.currentIndex} onNudge={lyrics.nudge} />
          <Controls
            mode={mode} onMode={setMode}
            isPlaying={audioData.isPlaying}
            onToggle={
              tabAudio.active ? tabAudio.toggle
                : audioSource ? toggleAudio
                : () => {
                  setUseBpm((v) => {
                    if (v) ytRef.current?.pause()
                    else ytRef.current?.play()
                    return !v
                  })
                }
            }
            onReset={handleReset} songName={songName}
          />
          {!tabAudio.active && !audioSource && useBpm && videoId && (
            <YouTubePlayer ref={ytRef} videoId={videoId} />
          )}
        </div>
      )}

      {!isPlaying && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', padding: '32px 16px 48px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h1 className="neon-title">NEW WAVE VJ</h1>
            <p className="subtitle" style={{ marginTop: 8 }}>AI-powered music visualizer</p>
          </div>

          {appState === 'api-key' && <APIKeyInput onSubmit={handleApiKey} />}

          {appState === 'input' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 480, width: '100%', margin: '0 auto' }}>
              <URLInput apiKey={apiKey} onResult={handleResult} onError={handleAnalysisError} />
              <button className="btn btn-ghost"
                onClick={() => { localStorage.removeItem('nwvj-api-key'); setApiKey(''); setAppState('api-key') }}
                style={{ maxWidth: 480, margin: '0 auto', width: '100%', fontSize: 11 }}>
                ← CHANGE API KEY
              </button>
            </div>
          )}

          {appState === 'ready' && moodData && (
            <div className="fade-in" style={{ maxWidth: 480, width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                {bgImage && <img src={bgImage} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25 }} />}
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div>
                    <p className="label">Mood analyzed ✓</p>
                    <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' }}>{moodData.mood}</h2>
                    <p style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 4 }}>{moodData.genre} · {moodData.bpm} BPM · energy {Math.round(moodData.energy * 100)}%</p>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text-dim)' }}>{moodData.description}</p>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    {moodData.colors.map((c) => <div key={c} style={{ width: 28, height: 28, borderRadius: 4, background: c, boxShadow: `0 0 12px ${c}80` }} />)}
                    {bgGenerating && <span style={{ fontSize: 11, color: 'var(--text-dim)', marginLeft: 8 }}>generating visual…</span>}
                    {bgImage && !bgGenerating && <span style={{ fontSize: 11, color: 'var(--cyan)', marginLeft: 8 }}>✓ visual ready</span>}
                  </div>
                </div>
              </div>

              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div>
                  <p className="label">Capture tab audio (recommended)</p>
                  <p style={{ fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.5 }}>
                    Open the video in a new tab, play it there, then share that tab's audio for
                    real, perfectly-synced visuals. Desktop Chrome or Edge only.
                  </p>
                </div>
                {videoId && (
                  <button
                    className="btn btn-ghost"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
                  >
                    ↗ OPEN YOUTUBE IN NEW TAB
                  </button>
                )}
                <button className="btn btn-primary" onClick={tabAudio.start}>
                  🎙 CAPTURE TAB AUDIO
                </button>
                {tabAudio.error && (
                  <p style={{ fontSize: 12, color: 'var(--error, #ff4466)' }}>{tabAudio.error}</p>
                )}
              </div>

              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <p className="label">Or upload an audio file</p>
                  <p style={{ fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.5 }}>
                    Upload the audio file for real-time beat detection, or launch with approximate
                    BPM-synced visuals only.
                  </p>
                </div>
                <AudioUpload onFile={handleAudioFile} />
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                  <span style={{ fontSize: 11, color: 'var(--text-dim)' }}>OR</span>
                  <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                </div>
                <button className="btn btn-secondary" onClick={handlePlayBpmOnly}>
                  ▶ LAUNCH WITH BPM VISUALS ({moodData.bpm} BPM, approximate sync)
                </button>
              </div>

              <button className="btn btn-ghost" onClick={() => setAppState('input')} style={{ width: '100%', fontSize: 11 }}>
                ← TRY DIFFERENT SONG
              </button>
            </div>
          )}

          {error && (
            <div style={{ maxWidth: 480, margin: '16px auto 0', width: '100%', padding: '12px 16px', background: 'rgba(255,68,102,0.1)', border: '1px solid rgba(255,68,102,0.4)', borderRadius: 4, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 16 }}>⚠️</span>
              <div style={{ flex: 1 }}>
                <p className="error" style={{ marginBottom: 4 }}>ERROR</p>
                <p style={{ fontSize: 12, color: 'var(--text-dim)' }}>{error}</p>
              </div>
              <button onClick={() => setError('')} style={{ background: 'none', color: 'var(--text-dim)', fontSize: 18, lineHeight: 1 }}>×</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
