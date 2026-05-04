'use client'

import { useEffect, useRef, useState } from 'react'

export type TechBlockData = {
  sectionTag?: string | null
  title: string
  items?:
    | {
        name: string
      }[]
    | null
}

export const Tech = ({ sectionTag = '06 — TECH', title, items }: TechBlockData) => {
  const [hiddenTiles, setHiddenTiles] = useState<number[]>([])
  const lastTileRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = () => {
      const getAdjacent = (index: number) => {
        const adjacent: number[] = []
        const row = Math.floor(index / 4)
        const col = index % 4
        if (col > 0) adjacent.push(index - 1)
        if (col < 3) adjacent.push(index + 1)
        if (row > 0) adjacent.push(index - 4)
        if (row < 2) adjacent.push(index + 4)
        return adjacent
      }

      const total = (items ?? []).length || 12
      let valid = Array.from({ length: total }, (_, i) => i)

      if (lastTileRef.current !== null) {
        const adjacent = getAdjacent(lastTileRef.current)
        valid = valid.filter((i) => i !== lastTileRef.current && !adjacent.includes(i))
      }

      const random = valid[Math.floor(Math.random() * valid.length)]
      lastTileRef.current = random
      setHiddenTiles([random])
      window.setTimeout(() => setHiddenTiles([]), 2000 + Math.random() * 1000)
    }

    const interval = window.setInterval(animate, 4000)
    animate()
    return () => window.clearInterval(interval)
  }, [items])

  return (
    <section data-rift-section data-rift-name="TECH" className="sec tech">
      <div className="stipple-bg" />
      <div className="container">
        <div className="sec-head">
          <div className="sec-tag plain">{sectionTag}</div>
          <h2 className="sec-h2 lg">{title}</h2>
        </div>
        <div className="tech-grid">
          {(items ?? []).map((item, i) => {
            const isHidden = hiddenTiles.includes(i)
            return (
              <div key={i} className="tech-tile">
                <div className={`tech-content ${isHidden ? 'hidden' : ''}`}>
                  <div className="tech-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="4" y="4" width="16" height="16" rx="1" />
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <line x1="12" y1="4" x2="12" y2="20" />
                    </svg>
                  </div>
                  <div className="tech-name">{item.name}</div>
                </div>
                <div className={`tech-overlay ${isHidden ? 'visible' : ''}`}>
                  <div className="tech-overlay-stipple" />
                  <div className="tech-overlay-text">Fremtiden er RIFT</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
