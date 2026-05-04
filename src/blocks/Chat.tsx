'use client'

import { useEffect, useRef, useState } from 'react'

export type ChatBlockData = {
  sectionTag?: string | null
  title: string
  paragraphs?: { text: string }[] | null
}

export const Chat = ({ sectionTag = '01.5 — THE RIFT', title, paragraphs }: ChatBlockData) => {
  const ref = useRef<HTMLElement | null>(null)
  const triggered = useRef(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Jeg er THE RIFT. Spørg mig hvad du vil.' },
    { role: 'user', text: 'Hvorfor ikke bare bruge Wordpress?' },
    {
      role: 'bot',
      text: 'Fordi det er langsomt, dyrt og kræver konstant vedligehold. Vi bygger præcis hvad du skal bruge. Hurtigere. Billigere. Ingen månedlige licenser.',
    },
  ])
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || triggered.current) return
        triggered.current = true

        window.setTimeout(() => {
          setMessages((prev) => [...prev, { role: 'user', text: 'Hvad gør jer anderledes?' }])
          setTyping(true)

          window.setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                role: 'bot',
                text: 'AI er ikke et add-on. Det er fundamentet. Du får et system der lærer, optimerer og udvider sig selv.',
              },
            ])
            setTyping(false)
          }, 1800)
        }, 1500)
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} data-rift-section data-rift-name="THE_RIFT" className="sec chat-sec">
      <div className="stipple-bg" />
      <div className="container">
        <div className="chat-grid">
          <div>
            <div className="sec-tag">{sectionTag}</div>
            <h2 className="sec-h2 lg">{title}</h2>
            {(paragraphs ?? []).map((p, i) => (
              <p key={i} className="muted-text">
                {p.text}
              </p>
            ))}
          </div>
          <div className="chat-window">
            <div className="chat-head">
              <div className="chat-status" />
              <span className="chat-title">THE RIFT</span>
              <span className="chat-spacer" />
              <span className="chat-meta-mono">CONNECTED</span>
            </div>
            <div className="chat-body">
              {messages.map((m, i) => (
                <div key={i} className={`msg ${m.role === 'user' ? 'msg-user' : 'msg-bot'}`}>
                  {m.role === 'bot' && (
                    <div className="avatar">
                      <span>TR</span>
                    </div>
                  )}
                  <div className="bubble">{m.text}</div>
                </div>
              ))}
              {typing && (
                <div className="msg msg-bot">
                  <div className="avatar">
                    <span>TR</span>
                  </div>
                  <div className="bubble typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}
            </div>
            <div className="chat-input">
              <input type="text" placeholder="Ask THE RIFT anything..." disabled />
              <button disabled>▶</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
