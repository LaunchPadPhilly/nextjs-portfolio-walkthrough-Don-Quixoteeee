"use client"
import { useMemo, useEffect, useState } from 'react'

export default function PixelBackground({ count = 50 }) {
  const [mounted, setMounted] = useState(false)

  // Ensure we only render randomized pixels after mounting to avoid
  // server/client hydration mismatches caused by Math.random values.
  useEffect(() => {
    setMounted(true)
  }, [])

  const pixels = useMemo(() => {
    const arr = []
    for (let i = 0; i < count; i++) {
      arr.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.5,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 12,
      })
    }
    return arr
  }, [count])

  // Render nothing server-side / before mount to keep SSR output stable.
  if (!mounted) {
    return <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />
  }

  return (
    <div 
      className="pixel-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden" 
      aria-hidden="true"
      style={{ top: 0, left: 0, width: '100%', height: '100vh' }}
    >
      <div id="pixelBg" className="absolute inset-0 w-full h-full">
        {pixels.map((p, idx) => (
          <div
            key={idx}
            className="pixel"
            style={{
              left: p.left + '%',
              top: p.top + '%',
              width: p.size + 'px',
              height: p.size + 'px',
              opacity: p.opacity,
              animationDelay: p.delay + 's',
              animationDuration: p.duration + 's',
            }}
          />
        ))}
      </div>
    </div>
  )
}
