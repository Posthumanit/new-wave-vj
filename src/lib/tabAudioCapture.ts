export async function captureTabAudio(): Promise<MediaStream> {
  if (!navigator.mediaDevices?.getDisplayMedia) {
    throw new Error("Tab audio capture isn't supported in this browser. Use desktop Chrome or Edge.")
  }

  const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
  const audioTracks = stream.getAudioTracks()
  stream.getVideoTracks().forEach((t) => t.stop())

  if (audioTracks.length === 0) {
    stream.getTracks().forEach((t) => t.stop())
    throw new Error('No audio was shared — pick "Chrome Tab", select the YouTube tab, and check "Share tab audio".')
  }

  return stream
}
