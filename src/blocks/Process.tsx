'use client'

import { useState } from 'react'

import { PlayIcon } from '@/lib/rift-ui'

export type ProcessBlockData = {
  sectionTag?: string | null
  title: string
  tabs?: { id: string; label: string }[] | null
  caption?: string | null
  leftText: string
  rightText: string
}

export const Process = ({
  sectionTag = '01 — PROCESS',
  title,
  tabs,
  caption = 'AI system demonstration / Live processing example',
  leftText,
  rightText,
}: ProcessBlockData) => {
  const tabItems = tabs ?? []
  const [activeVideo, setActiveVideo] = useState(tabItems[0]?.id ?? 'training')

  return (
    <section data-rift-section data-rift-name="PROCESS" className="sec proc">
      <div className="container">
        <div className="sec-head">
          <div className="sec-tag">{sectionTag}</div>
          <h2 className="sec-h2">{title}</h2>
        </div>
        <div className="tabs">
          {tabItems.map((v) => (
            <div key={v.id} onClick={() => setActiveVideo(v.id)} className={`tab ${activeVideo === v.id ? 'active' : ''}`}>
              {v.label}
            </div>
          ))}
        </div>
        <div className="video-frame">
          <div className="vf-coord tl">[0,0]</div>
          <div className="vf-coord tr">[1376,0]</div>
          <div className="vf-coord bl">[0,720]</div>
          <div className="vf-coord br">[1376,720]</div>
          <div className="vf-grid" />
          <div className="vf-stage">
            <div className="vf-content">
              <div className="play-pulse">
                <PlayIcon size={28} />
              </div>
              <div className="vf-meta">
                <span className="vf-dot" />
                <span>{(tabItems.find((v) => v.id === activeVideo)?.label ?? 'Training').toUpperCase()}_PROCESS.mp4</span>
              </div>
              <p className="vf-cap">{caption}</p>
            </div>
          </div>
        </div>
        <div className="proc-foot">
          <div className="pf-col">
            <p>{leftText}</p>
          </div>
          <div className="pf-rule">
            <div className="hline" />
          </div>
          <div className="pf-col">
            <p>{rightText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
