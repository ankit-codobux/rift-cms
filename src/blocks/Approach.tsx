'use client'

import { useState } from 'react'

export type ApproachBlockData = {
  sectionTag?: string | null
  title: string
  phases?: {
    tag: string
    title: string
    body: string
    quote: string
    dark?: boolean | null
  }[] | null
  metaTitle: string
  metaBody1: string
  metaBody2: string
}

export const Approach = ({
  sectionTag = '04 — APPROACH',
  title,
  phases,
  metaTitle,
  metaBody1,
  metaBody2,
}: ApproachBlockData) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  return (
    <section data-rift-section data-rift-name="APPROACH" className="sec approach">
      <div className="stipple-bg" />
      <div className="container">
        <div className="sec-head">
          <div className="sec-tag plain">{sectionTag}</div>
          <h2 className="sec-h2 lg">{title}</h2>
        </div>
        <div className="approach-grid">
          <div className="acc-list">
            {(phases ?? []).map((a, i) => {
              const open = openAccordion === i
              return (
                <div key={i} className={`acc-item ${a.dark ? 'dark' : ''}`}>
                  <div className="acc-head" onClick={() => setOpenAccordion(open ? null : i)}>
                    <div className="ah-l">
                      <span className="ah-tag">{a.tag}</span>
                      <span className="ah-sep" />
                      <h3>{a.title}</h3>
                    </div>
                    <div className="ah-r">{open ? '−' : '+'}</div>
                  </div>
                  {open && (
                    <div className="acc-body">
                      <p>{a.body}</p>
                      <blockquote>"{a.quote}"</blockquote>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <div className="approach-rule">
            <div className="vline" />
            <span className="rule-dot" />
          </div>
          <div className="approach-meta">
            <div className="am-sticky">
              <div className="sec-tag plain">METHODOLOGY</div>
              <h3>{metaTitle}</h3>
              <p>{metaBody1}</p>
              <p>{metaBody2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
