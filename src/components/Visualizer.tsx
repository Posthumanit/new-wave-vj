import { useEffect, useRef } from 'react'
import { ThreeScene } from '../lib/threeScene'
import type { AudioData, MoodData, VisualMode } from '../types'

interface Props {
  audioData: AudioData
  moodData: MoodData | null
  backgroundImage: string | null
  mode: VisualMode
}

export function Visualizer({ audioData, moodData, backgroundImage, mode }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<ThreeScene | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const scene = new ThreeScene(canvasRef.current)
    sceneRef.current = scene
    return () => {
      scene.dispose()
      sceneRef.current = null
    }
  }, [])

  useEffect(() => {
    sceneRef.current?.setMode(mode)
  }, [mode])

  useEffect(() => {
    if (backgroundImage) sceneRef.current?.setBackgroundImage(backgroundImage)
  }, [backgroundImage])

  useEffect(() => {
    if (moodData) sceneRef.current?.setColors(moodData.colors)
  }, [moodData])

  useEffect(() => {
    sceneRef.current?.updateAudio(audioData)
  }, [audioData])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        touchAction: 'none',
      }}
    />
  )
}
