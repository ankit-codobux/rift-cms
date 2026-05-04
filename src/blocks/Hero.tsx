'use client'

import { RotatingWord } from '@/lib/rift-ui'

type RotatingWordItem = {
  word: string
}

type HeroMeta = {
  line1: string
  line2: string
  statusLabel: string
}

export type HeroBlockData = {
  name?: string | null
  headlinePrefix: string
  rotatingWords?: RotatingWordItem[] | null
  headlineSuffix: string
  subheadline: string
  meta?: HeroMeta | null
}

export const Hero = ({ headlinePrefix, rotatingWords, headlineSuffix, subheadline, meta }: HeroBlockData) => {
  const words = (rotatingWords ?? []).map((item) => item.word).filter(Boolean)

  return (
    <section data-rift-section data-rift-name="HERO" className="sec hero">
      <div className="container">
        <div className="hero-row">
          <div className="hero-main">
            <h1 className="hero-h1">
              {headlinePrefix}{' '}
              <RotatingWord words={words} />
              <br />
              <span className="muted">{headlineSuffix}</span>
            </h1>
            <p className="hero-sub">{subheadline}</p>
          </div>
          <div className="hero-divider">
            <div className="vline" />
          </div>
          <div className="hero-meta">
            <div className="meta-mono">
              {meta?.line1 && <div>{meta.line1}</div>}
              {meta?.line2 && <div>{meta.line2}</div>}
              {meta?.statusLabel && (
                <div className="meta-status">
                  <span className="meta-pill" />
                  <span>{meta.statusLabel}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
