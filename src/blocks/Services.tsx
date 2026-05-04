'use client'

import { useEffect, useRef, useState } from 'react'

import { ColorCycleBox } from '@/lib/rift-ui'

type ServiceIcon = 'cpu' | 'layers' | 'database' | 'zap' | 'cloud'

export type ServiceItem = {
  id: string
  number: string
  title: string
  description: string
  icon: ServiceIcon
}

export type ServicesBlockData = {
  sectionTag?: string | null
  title?: string | null
  supportText?: string | null
  showAccentCard?: boolean | null
  services?: ServiceItem[] | null
}

const ICONS = {
  cpu: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="2" x2="9" y2="4" />
      <line x1="15" y1="2" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="22" />
      <line x1="15" y1="20" x2="15" y2="22" />
      <line x1="20" y1="9" x2="22" y2="9" />
      <line x1="20" y1="14" x2="22" y2="14" />
      <line x1="2" y1="9" x2="4" y2="9" />
      <line x1="2" y1="14" x2="4" y2="14" />
    </svg>
  ),
  layers: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12,2 2,7 12,12 22,7" />
      <polyline points="2,17 12,22 22,17" />
      <polyline points="2,12 12,17 22,12" />
    </svg>
  ),
  database: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </svg>
  ),
  zap: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  cloud: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.78 7 7 0 0 0-13.6 2.27A4 4 0 0 0 5.5 19" />
    </svg>
  ),
}

function ServiceCard({ service, active }: { service: ServiceItem; active: boolean }) {
  return (
    <div className="service-card">
      <div className="service-tag">SERVICE_{service.number}</div>
      <div className="service-body">
        <div className="service-head">
          <div className="service-num" style={{ color: active ? '#18181b' : '#d4d4d8' }}>
            {service.number}
          </div>
          <div className="service-icon">{ICONS[service.icon]}</div>
        </div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-desc">{service.description}</p>
      </div>
    </div>
  )
}

export const Services = ({
  sectionTag = '02 — CAPABILITIES',
  title = 'HVAD VI BYGGER',
  supportText = 'Fem typer løsninger. Alle på THE RIFT. AI indbygget.',
  showAccentCard = true,
  services,
}: ServicesBlockData) => {
  const [activeServices, setActiveServices] = useState<number[]>([])
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const containerTop = containerRef.current.getBoundingClientRect().top
      const wh = window.innerHeight

      if (containerTop > wh * 0.5) {
        setActiveServices([])
        return
      }

      const next: number[] = []
      serviceRefs.current.forEach((ref, i) => {
        if (!ref) return
        const r = ref.getBoundingClientRect()
        const center = r.top + r.height / 2
        if (center < wh * 0.7) next.push(i)
      })
      setActiveServices(next)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const items = services ?? []

  return (
    <section data-rift-section data-rift-name="CAPABILITIES" className="sec cap">
      <div className="container">
        <div className="cap-head">
          <div className="ch-col">
            <div className="sec-tag">{sectionTag}</div>
            <h2 className="sec-h2">{title}</h2>
          </div>
          <div className="ch-rule">
            <div className="hline" />
          </div>
          <div className="ch-col">
            <p className="muted-text small">{supportText}</p>
          </div>
        </div>

        <div ref={containerRef} className="services-grid-wrap">
          <div className="services-row">
            {showAccentCard && <ColorCycleBox />}
            {items[0] && (
              <div
                ref={(el) => {
                  serviceRefs.current[0] = el
                }}
              >
                <ServiceCard service={items[0]} active={activeServices.includes(0)} />
              </div>
            )}
          </div>
          <div className="services-row">
            {items[1] && (
              <div
                ref={(el) => {
                  serviceRefs.current[1] = el
                }}
              >
                <ServiceCard service={items[1]} active={activeServices.includes(1)} />
              </div>
            )}
            {items[2] && (
              <div
                ref={(el) => {
                  serviceRefs.current[2] = el
                }}
              >
                <ServiceCard service={items[2]} active={activeServices.includes(2)} />
              </div>
            )}
          </div>
          <div className="services-row">
            {items[3] && (
              <div
                ref={(el) => {
                  serviceRefs.current[3] = el
                }}
              >
                <ServiceCard service={items[3]} active={activeServices.includes(3)} />
              </div>
            )}
            {items[4] && (
              <div
                ref={(el) => {
                  serviceRefs.current[4] = el
                }}
              >
                <ServiceCard service={items[4]} active={activeServices.includes(4)} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
