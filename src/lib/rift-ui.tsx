'use client'

import { useEffect, useRef, useState } from 'react'

export function PlayIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="6,4 20,12 6,20" />
    </svg>
  )
}

export function RiftLogo({ isAnimating = false }: { isAnimating?: boolean }) {
  return (
    <div className="rift-logo">
      <div className="rift-mark">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="2"
            y="2"
            width="12"
            height="28"
            fill="#52525b"
            className={isAnimating ? 'bar-left animating' : 'bar-left'}
          />
          <rect
            x="18"
            y="2"
            width="12"
            height="28"
            fill="#a1a1aa"
            className={isAnimating ? 'bar-right animating' : 'bar-right'}
          />
          <line x1="14" y1="16" x2="18" y2="16" stroke="#e4e4e7" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>
      <span className="rift-wordmark">RIFT</span>
    </div>
  )
}

export function RotatingWord({ words, interval = 2200 }: { words: string[]; interval?: number }) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (!words.length) return
    const t = window.setInterval(() => setIdx((i) => (i + 1) % words.length), interval)
    return () => window.clearInterval(t)
  }, [words.length, interval])

  if (!words.length) return null

  return (
    <span className="rotating-word-wrap">
      {words.map((word, i) => (
        <span key={word} className={`rotating-word ${i === idx ? 'active' : ''}`}>
          {word}
        </span>
      ))}
    </span>
  )
}

const PALETTE_COLORS = [
  { color: '#fafafa', code: 'background: #fafafa;' },
  { color: '#e4e4e7', code: 'border-color: #e4e4e7;' },
  { color: '#d4d4d8', code: 'const divider = "#d4d4d8";' },
  { color: '#a1a1aa', code: '<div className="text-[#a1a1aa]">' },
  { color: '#71717a', code: 'backgroundColor: "#71717a"' },
  { color: '#52525b', code: '--primary: #52525b;' },
  { color: '#3f3f46', code: 'fill="#3f3f46" opacity="1"' },
  { color: '#27272a', code: 'color: var(--dark, #27272a);' },
  { color: '#18181b', code: 'bg-[#18181b] transition-all' },
]

export function ColorCycleBox() {
  const [colorIndex, setColorIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState('#fafafa')

  const currentColor = PALETTE_COLORS[colorIndex]

  useEffect(() => {
    if (isTypingComplete) {
      const t = window.setTimeout(() => {
        setColorIndex((p) => (p + 1) % PALETTE_COLORS.length)
        setDisplayedText('')
        setCurrentCharIndex(0)
        setIsTypingComplete(false)
      }, 3000)
      return () => window.clearTimeout(t)
    }

    if (currentCharIndex < currentColor.code.length) {
      const t = window.setTimeout(() => {
        setDisplayedText((p) => p + currentColor.code[currentCharIndex])
        setCurrentCharIndex((p) => p + 1)
      }, 100)
      return () => window.clearTimeout(t)
    }

    if (!isTypingComplete) {
      setIsTypingComplete(true)
      setBackgroundColor(currentColor.color)
    }
  }, [currentCharIndex, currentColor, isTypingComplete])

  const hex = backgroundColor.replace('#', '')
  const r = Number.parseInt(hex.substring(0, 2), 16)
  const g = Number.parseInt(hex.substring(2, 4), 16)
  const b = Number.parseInt(hex.substring(4, 6), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  const textColor = brightness > 128 ? '#52525b' : '#d4d4d8'

  return (
    <div className="color-cycle-box" style={{ backgroundColor }}>
      <div style={{ textAlign: 'center' }}>
        <div className="ccb-label" style={{ color: textColor }}>
          RESERVED_SPACE
        </div>
        <div className="ccb-code" style={{ color: textColor }}>
          {displayedText}
          {!isTypingComplete && <span className="cursor-blink">_</span>}
        </div>
      </div>
    </div>
  )
}

export function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => Math.max(0, i - 1))
  const next = () => setIdx((i) => Math.min(images.length - 1, i + 1))

  if (!images.length) return null

  return (
    <div className="image-carousel">
      <div className="ic-track">
        <img src={images[idx]} alt={`${alt} - ${idx + 1}`} />
      </div>
      {images.length > 1 && (
        <>
          <button className="ic-btn ic-prev" onClick={prev} disabled={idx === 0} aria-label="Previous">
            ‹
          </button>
          <button className="ic-btn ic-next" onClick={next} disabled={idx === images.length - 1} aria-label="Next">
            ›
          </button>
          <div className="ic-dots">
            {images.map((_, i) => (
              <span key={i} className={i === idx ? 'ic-dot active' : 'ic-dot'} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export function RiftLogoFooter() {
  const [openProgress, setOpenProgress] = useState(0)
  const logoRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rawProgress = entry.intersectionRatio
          const mappedProgress = Math.max(0, (rawProgress - 0.5) * 2)
          setOpenProgress(mappedProgress)
        })
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) },
    )

    if (logoRef.current) observer.observe(logoRef.current)
    return () => observer.disconnect()
  }, [])

  const moveAmount = openProgress * 8

  return (
    <div ref={logoRef} className="rift-logo footer-logo">
      <div className="rift-mark">
        <svg viewBox="0 0 32 32" fill="none">
          <text x="16" y="14" textAnchor="middle" fill="#18181b" fontSize="2.2" fontWeight="600" opacity={openProgress}>
            Its fucking
          </text>
          <text x="16" y="18" textAnchor="middle" fill="#18181b" fontSize="2.2" fontWeight="600" opacity={openProgress}>
            Awesome
          </text>
          <rect x={2 - moveAmount} y="2" width="12" height="28" fill="#52525b" opacity="0.85" />
          <rect x={18 + moveAmount} y="2" width="12" height="28" fill="#a1a1aa" opacity="0.85" />
          <line
            x1="14"
            y1="16"
            x2="18"
            y2="16"
            stroke="#e4e4e7"
            strokeWidth="1"
            opacity={Math.max(0.5 - openProgress * 0.5, 0)}
          />
        </svg>
      </div>
      <span className="rift-wordmark" style={{ opacity: 0.7 }}>
        RIFT
      </span>
    </div>
  )
}
