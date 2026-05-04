'use client'

import { useMemo, useState } from 'react'

import { ImageCarousel, PlayIcon } from '@/lib/rift-ui'

type RecordingType = { id: string; label: string }

type CaseItem = {
  id: string
  label: string
  project: string
  sector: string
  title: string
  description: string
  challenge: string
  solution: string
  deployed: string
  duration: string
  type: string
  images?: { url: string }[] | null
}

export type CaseStudiesBlockData = {
  sectionTag?: string | null
  title?: string | null
  recordingTypes?: RecordingType[] | null
  cases?: CaseItem[] | null
}

export const CaseStudies = ({
  sectionTag = '05 — WORK',
  title = 'UDVALGTE PROJEKTER',
  recordingTypes,
  cases,
}: CaseStudiesBlockData) => {
  const caseItems = cases ?? []
  const recTypes = recordingTypes ?? []

  const [activeCaseStudy, setActiveCaseStudy] = useState(caseItems[0]?.id ?? '')
  const [activeRecording, setActiveRecording] = useState<Record<string, string>>({})

  const currentCase = useMemo(
    () => caseItems.find((c) => c.id === activeCaseStudy) ?? caseItems[0],
    [caseItems, activeCaseStudy],
  )

  if (!currentCase) return null

  const selectedRecording = activeRecording[currentCase.id] ?? recTypes[0]?.id ?? 'demo'

  return (
    <section id="work" data-rift-section data-rift-name="WORK" className="sec work">
      <div className="container">
        <div className="sec-head">
          <div className="sec-tag plain">{sectionTag}</div>
          <h2 className="sec-h2 lg">{title}</h2>
        </div>

        <div className="tabs">
          {caseItems.map((cs) => (
            <div
              key={cs.id}
              onClick={() => setActiveCaseStudy(cs.id)}
              className={`tab ${activeCaseStudy === cs.id ? 'active' : ''}`}
            >
              {cs.label}
            </div>
          ))}
        </div>

        <div className="case-card">
          <div className="case-grid-bg" />
          <div className="case-head">
            <div>
              <div className="case-meta-row">
                <span className="case-meta">{currentCase.project}</span>
                <span className="dot" />
                <span className="case-meta mono">{currentCase.sector}</span>
              </div>
              <h3 className="case-title">{currentCase.title}</h3>
            </div>
            <div className="case-status">
              <div className="cs-line">
                <span className="cs-mono">STATUS</span>
                <span className="cs-pill" />
              </div>
              <div className="cs-mono">DEPLOYED</div>
            </div>
          </div>

          <div className="case-media">
            <div className="rec-tabs">
              {recTypes.map((r) => (
                <div
                  key={r.id}
                  onClick={() => setActiveRecording((p) => ({ ...p, [activeCaseStudy]: r.id }))}
                  className={`tab small ${selectedRecording === r.id ? 'active' : ''}`}
                >
                  {r.label}
                </div>
              ))}
            </div>

            <div className="case-media-grid">
              <div className="case-video">
                <div className="play-pulse small">
                  <PlayIcon size={20} />
                </div>
                <div className="cv-meta">
                  {currentCase.project}_{selectedRecording.toUpperCase()}.mp4
                </div>
              </div>

              <ImageCarousel
                images={(currentCase.images ?? []).map((image) => image.url)}
                alt={currentCase.title}
              />
            </div>
          </div>

          <p className="case-desc">{currentCase.description}</p>

          <div className="case-cs-grid">
            <div>
              <div className="csg-label">Challenge</div>
              <p>{currentCase.challenge}</p>
            </div>
            <div className="csg-rule">
              <div className="hline" />
            </div>
            <div>
              <div className="csg-label">Solution</div>
              <p>{currentCase.solution}</p>
            </div>
          </div>

          <div className="case-foot">
            <span>DEPLOYED: {currentCase.deployed}</span>
            <span className="cf-sep" />
            <span>DURATION: {currentCase.duration}</span>
            <span className="cf-sep" />
            <span>TYPE: {currentCase.type}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
