'use client'
import { useState, useRef } from 'react'

export default function BackgroundMusic() {
  const [playing, setPlaying] = useState(false)


  const toggle = () => {
    const iframe = document.getElementById('yt-music') ;
    if (!iframe?.contentWindow) return

    if (playing) {
      iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    } else {
      iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
    }
    setPlaying(!playing)
  }
  return (
    <>
      {/* Hidden YouTube iframe */}
      <iframe
        id='yt-music'
        src="https://www.youtube.com/embed/s7h546_EPwQ?enablejsapi=1&autoplay=0&loop=1&playlist=s7h546_EPwQ&controls=0&mute=0"
        allow="autoplay"
        style={{ position: 'fixed', top: '-9999px', left: '-9999px', width: '1px', height: '1px' }}
      />

      {/* Styled button matching your design system */}
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full text-xs tracking-widest uppercase font-light transition"
        style={{
          background: 'rgba(44,24,16,0.75)',
          backdropFilter: 'blur(12px)',
          color: '#fdf9f4',
          border: '1px solid rgba(202,180,154,0.2)',
        }}
      >
        {playing ? '❚❚ Pause' : '♪ Play Music'}
      </button>
    </>
  )
}