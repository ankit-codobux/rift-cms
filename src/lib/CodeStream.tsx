'use client'

import { useEffect, useRef, useState } from 'react'

type SnippetLine = string[]
type Snippet = {
  file: string
  lang: string
  title: string
  lines: SnippetLine[]
}

type RenderedToken = {
  text: string
  cls: string
}

type RenderedLine = {
  tokens: RenderedToken[]
  complete: boolean
}

const SNIPPETS: Record<string, Snippet> = {
  HERO: {
    file: 'apps/site/hero.tsx',
    lang: 'TSX',
    title: 'Generating hero animation',
    lines: [
      ['import', ' { ', 'motion', ', ', 'useScroll', ' } ', 'from ', "'framer-motion'"],
      [''],
      ['export ', 'function ', 'Hero', '() {'],
      ['  const { ', 'scrollYProgress', ' } = ', 'useScroll', '()'],
      [''],
      ['  return ('],
      ['    <', 'section', ' className=', '"hero rift-bg"', '>'],
      ['      <', 'h1', '> ', 'We build what you need.', ' </', 'h1', '>'],
      ['      <', 'RotatingWord', ' words={[', "'systems'", ', ', "'platforms'", ']} />'],
      ['    </', 'section', '>'],
      ['  )'],
      ['}'],
    ],
  },
  PROCESS: {
    file: 'lib/agent/pipeline.ts',
    lang: 'TS',
    title: 'Building agent pipeline',
    lines: [
      ['// ', 'Multi-step agent with retries & validation'],
      ['import ', '{ Agent, Tool } ', 'from ', "'@rift/core'"],
      [''],
      ['const ', 'research', ' = ', 'new ', 'Agent', '({'],
      ['  model: ', "'claude-sonnet-4'", ','],
      ['  tools: [', 'webSearch', ', ', 'scrapePage', ', ', 'summarize', '],'],
      ['  maxSteps: ', '12'],
      ['})'],
      [''],
      ['export ', 'async ', 'function ', 'process', '(input: ', 'string', ') {'],
      ['  const plan = ', 'await ', 'research.', 'plan', '(input)'],
      ['  return ', 'research.', 'execute', '(plan)'],
      ['}'],
    ],
  },
  THE_RIFT: {
    file: 'platform/rift.config.ts',
    lang: 'TS',
    title: 'Configuring THE RIFT',
    lines: [
      ['import ', '{ defineRift } ', 'from ', "'@rift/platform'"],
      [''],
      ['export ', 'default ', 'defineRift', '({'],
      ['  name: ', "'norconsult-platform'", ','],
      ['  ai: {'],
      ['    primary: ', "'anthropic/claude-sonnet'", ','],
      ['    embeddings: ', "'voyage-large-2'", ','],
      ['    rag: ', 'true'],
      ['  },'],
      ['  modules: ['],
      ['    ', "'cms'", ', ', "'dashboards'", ', ', "'agents'", ', ', "'auth'"],
      ['  ],'],
      ['  ownership: ', "'client'", '  ', '// ← you own the code'],
      ['})'],
    ],
  },
  CAPABILITIES: {
    file: 'modules/document-ai.ts',
    lang: 'TS',
    title: 'Building document AI',
    lines: [
      ['// ', 'AI-powered document processing'],
      ['import ', '{ extractStructured } ', 'from ', "'@rift/ai'"],
      ['import ', '{ z } ', 'from ', "'zod'"],
      [''],
      ['const ', 'Invoice', ' = ', 'z', '.object', '({'],
      ['  vendor: ', 'z', '.string', '(),'],
      ['  amount: ', 'z', '.number', '(),'],
      ['  dueDate: ', 'z', '.date', '(),'],
      ['  lineItems: ', 'z', '.array', '(', 'LineItem', ')'],
      ['})'],
      [''],
      ['export ', 'async ', 'function ', 'parse', '(pdf: ', 'Buffer', ') {'],
      ['  return ', 'extractStructured', '(pdf, ', 'Invoice', ')'],
      ['}'],
    ],
  },
  PHILOSOPHY: {
    file: 'docs/principles.md',
    lang: 'MD',
    title: 'Writing principles',
    lines: [
      ['# ', 'Principles'],
      [''],
      ['1. ', 'Custom > template. Always.'],
      ['2. ', 'Client owns the code. No lock-in.'],
      ['3. ', 'AI is the foundation, not an add-on.'],
      ['4. ', 'Ship fast. Iterate faster.'],
      ['5. ', 'Zero monthly licenses.'],
      [''],
      ['> ', "We don't build websites."],
      ['> ', 'We build the system you wish existed.'],
    ],
  },
  DIFFERENTIATORS: {
    file: 'platform/auth.ts',
    lang: 'TS',
    title: 'Wiring authentication',
    lines: [
      ['import ', '{ defineAuth } ', 'from ', "'@rift/auth'"],
      [''],
      ['export ', 'const ', 'auth', ' = ', 'defineAuth', '({'],
      ['  providers: ['],
      ['    ', 'google', '(), ', 'microsoft', '(), ', 'magicLink', '()'],
      ['  ],'],
      ['  roles: [', "'admin'", ', ', "'editor'", ', ', "'viewer'", '],'],
      ['  session: ', '{ duration: ', "'30d'", ' },'],
      ['  mfa: ', 'true'],
      ['})'],
    ],
  },
  APPROACH: {
    file: 'cli/scaffold.ts',
    lang: 'TS',
    title: 'Generating scaffold',
    lines: [
      ['#!/usr/bin/env ', 'node'],
      ['import ', '{ scaffold } ', 'from ', "'@rift/cli'"],
      [''],
      ['await ', 'scaffold', '({'],
      ['  template: ', "'platform'", ','],
      ['  modules: [', "'crm'", ', ', "'inventory'", ', ', "'reporting'", '],'],
      ['  database: ', "'postgres'", ','],
      ['  deploy: ', "'fly.io'"],
      ['})'],
      [''],
      ['// ', '✓ project scaffolded in 4.2s'],
      ['// ', '✓ 47 files generated'],
      ['// ', '✓ ready to deploy'],
    ],
  },
  WORK: {
    file: 'cases/loan-classifier.py',
    lang: 'PY',
    title: 'Querying loan classifier',
    lines: [
      ['# ', 'Classify loan applications'],
      ['from ', 'rift ', 'import ', 'Classifier', ', ', 'load_model'],
      [''],
      ['model = ', 'load_model', '(', "'finance/loan-v3'", ')'],
      [''],
      ['def ', 'classify', '(application):'],
      ['    features = ', 'extract_features', '(application)'],
      ['    return ', 'model.', 'predict', '({'],
      ['        ', "'income'", ': features[', "'income'", '],'],
      ['        ', "'credit_score'", ': features[', "'score'", '],'],
      ['        ', "'risk_factors'", ': features[', "'flags'", ']'],
      ['    })'],
    ],
  },
  TECH: {
    file: 'package.json',
    lang: 'JSON',
    title: 'Resolving dependencies',
    lines: [
      ['{'],
      ['  ', '"name"', ': ', '"@rift/platform"', ','],
      ['  ', '"dependencies"', ': {'],
      ['    ', '"next"', ': ', '"^15.0.0"', ','],
      ['    ', '"react"', ': ', '"^19.0.0"', ','],
      ['    ', '"@anthropic-ai/sdk"', ': ', '"^0.30.0"', ','],
      ['    ', '"drizzle-orm"', ': ', '"^0.36.0"', ','],
      ['    ', '"hono"', ': ', '"^4.6.0"'],
      ['  }'],
      ['}'],
    ],
  },
  TEAM: {
    file: 'team/whoami.ts',
    lang: 'TS',
    title: 'Loading team',
    lines: [
      ['export ', 'const ', 'team', ' = ['],
      ['  {'],
      ['    name: ', "'Joakim'", ','],
      ['    role: ', "'Co-founder · Build'", ','],
      ['    years: ', '20', ','],
      ['    obsession: ', "'turning ideas into systems'"],
      ['  },'],
      ['  {'],
      ['    name: ', "'Mikkel'", ','],
      ['    role: ', "'Co-founder · Strategy'", ','],
      ['    years: ', '18', ','],
      ['    obsession: ', "'making AI useful, not impressive'"],
      ['  }'],
      [']'],
    ],
  },
  FREMAD: {
    file: 'roadmap/2026.md',
    lang: 'MD',
    title: 'Drafting roadmap',
    lines: [
      ['# ', 'Roadmap 2026'],
      [''],
      ['## ', 'Q1'],
      ['- ', 'Launch THE RIFT v2'],
      ['- ', 'Onboard Norconsult Phase 2'],
      [''],
      ['## ', 'Q2'],
      ['- ', 'Open-source ', '@rift/core'],
      ['- ', '5 new agent templates'],
      [''],
      ['## ', 'Always'],
      ['- ', 'Ship things that matter.'],
    ],
  },
}

const FALLBACK = SNIPPETS.HERO

function classify(token: string, lang: string) {
  if (!token) return 'plain'
  if (token.startsWith('//') || token.startsWith('# ') || token.startsWith('> ')) return 'comment'
  if (/^['"`]/.test(token.trim())) return 'string'
  if (lang === 'MD' && (token.startsWith('# ') || token.startsWith('## '))) return 'heading'
  if (lang === 'MD' && token.startsWith('- ')) return 'list'
  if (/^"[^"]+"$/.test(token.trim())) return 'string'
  const keywords = [
    'import',
    'from',
    'export',
    'const',
    'let',
    'function',
    'async',
    'await',
    'return',
    'if',
    'else',
    'for',
    'in',
    'of',
    'class',
    'new',
    'true',
    'false',
    'null',
    'undefined',
    'def',
    'from ',
    'import ',
    'export ',
    'const ',
    'let ',
    'function ',
    'async ',
    'await ',
    'return ',
    'new ',
    'def ',
  ]
  if (keywords.includes(token) || keywords.includes(token.trim())) return 'keyword'
  if (/^-?\d+(\.\d+)?$/.test(token.trim())) return 'number'
  if (/^<\/?[a-z]/i.test(token.trim())) return 'tag'
  if (/^[{}()[\];,.=>:?!&|+\-*/<>]+$/.test(token.trim())) return 'punct'
  if (/^[A-Z][A-Za-z0-9]*$/.test(token.trim())) return 'type'
  return 'plain'
}

export function CodeStream() {
  const [active, setActive] = useState('HERO')
  const [lineCursor, setLineCursor] = useState(0)
  const [tokenCursor, setTokenCursor] = useState(0)
  const [charCursor, setCharCursor] = useState(0)
  const [rendered, setRendered] = useState<RenderedLine[]>([])
  const [collapsed, setCollapsed] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [statusOn, setStatusOn] = useState(true)
  const tickRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const bodyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('[data-rift-section]')
      let best: string | null = null
      let bestDist = Infinity

      sections.forEach((section) => {
        const r = section.getBoundingClientRect()
        const dist = Math.abs(r.top - window.innerHeight * 0.3)
        if (r.top < window.innerHeight * 0.7 && r.bottom > window.innerHeight * 0.2 && dist < bestDist) {
          bestDist = dist
          best = section.getAttribute('data-rift-name')
        }
      })

      if (best && best !== active) setActive(best)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [active])

  useEffect(() => {
    setLineCursor(0)
    setTokenCursor(0)
    setCharCursor(0)
    setRendered([])
  }, [active])

  useEffect(() => {
    const snippet = SNIPPETS[active] || FALLBACK
    if (lineCursor >= snippet.lines.length) return

    const currentLine = snippet.lines[lineCursor]
    const currentToken = currentLine[tokenCursor]

    let delay = 18 + Math.random() * 28
    if (currentToken && currentToken.includes('\n')) delay = 80
    if (charCursor === 0 && tokenCursor === 0) delay = 60

    tickRef.current = setTimeout(() => {
      if (currentToken === undefined) {
        setRendered((prev) => {
          const next = [...prev]
          if (!next[lineCursor]) next[lineCursor] = { tokens: [], complete: true }
          else next[lineCursor].complete = true
          return next
        })
        setLineCursor((l) => l + 1)
        setTokenCursor(0)
        setCharCursor(0)
        return
      }

      if (charCursor < currentToken.length) {
        setRendered((prev) => {
          const next = [...prev]
          if (!next[lineCursor]) next[lineCursor] = { tokens: [], complete: false }
          const tokens = next[lineCursor].tokens
          if (tokens.length === tokenCursor) {
            tokens.push({ text: currentToken[charCursor], cls: classify(currentToken, snippet.lang) })
          } else {
            tokens[tokenCursor] = {
              text: tokens[tokenCursor].text + currentToken[charCursor],
              cls: tokens[tokenCursor].cls,
            }
          }
          return next
        })
        setCharCursor((c) => c + 1)
      } else {
        setTokenCursor((t) => t + 1)
        setCharCursor(0)
      }
    }, delay)

    return () => {
      if (tickRef.current) clearTimeout(tickRef.current)
    }
  }, [active, lineCursor, tokenCursor, charCursor])

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [rendered])

  useEffect(() => {
    const interval = setInterval(() => setStatusOn((s) => !s), 1100)
    return () => clearInterval(interval)
  }, [])

  if (hidden) {
    return (
      <button className="cs-hidden-pill" onClick={() => setHidden(false)} title="Show THE RIFT thinking">
        <span className="cs-hidden-dot" />
        <span>THE RIFT</span>
      </button>
    )
  }

  const snippet = SNIPPETS[active] || FALLBACK
  const totalLines = snippet.lines.length
  const progress = Math.min(100, Math.round((lineCursor / totalLines) * 100))

  return (
    <div className={`code-stream ${collapsed ? 'collapsed' : ''}`}>
      <div className="cs-frame">
        <div className="cs-titlebar">
          <div className="cs-traffic">
            <span className="cs-tl r" />
            <span className="cs-tl y" />
            <span className="cs-tl g" />
          </div>
          <div className="cs-title-mid">
            <span className={`cs-status ${statusOn ? 'on' : ''}`} />
            <span className="cs-thinking">{snippet.title}</span>
            <span className="cs-cursor-dots">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div className="cs-actions">
            <button className="cs-act" onClick={() => setCollapsed((c) => !c)} aria-label={collapsed ? 'expand' : 'collapse'}>
              {collapsed ? '▢' : '–'}
            </button>
            <button className="cs-act" onClick={() => setHidden(true)} aria-label="hide">
              ×
            </button>
          </div>
        </div>

        {!collapsed && (
          <>
            <div className="cs-tabbar">
              <div className="cs-tab active">
                <span className="cs-tab-icon">{snippet.lang}</span>
                <span className="cs-tab-name">{snippet.file}</span>
              </div>
              <div className="cs-progress">
                <div className="cs-progress-bar" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="cs-body" ref={bodyRef}>
              <div className="cs-gutter">
                {Array.from({ length: Math.max(rendered.length, 1) }).map((_, i) => (
                  <div key={i} className="cs-ln">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                ))}
              </div>
              <div className="cs-code">
                {rendered.map((line, i) => (
                  <div key={i} className="cs-line">
                    {line.tokens.map((token, j) => (
                      <span key={j} className={`tk tk-${token.cls}`}>
                        {token.text}
                      </span>
                    ))}
                    {i === rendered.length - 1 && lineCursor < totalLines && <span className="cs-caret" />}
                  </div>
                ))}
                {rendered.length === 0 && (
                  <div className="cs-line">
                    <span className="cs-caret" />
                  </div>
                )}
              </div>
            </div>

            <div className="cs-statusbar">
              <span className="cs-sb-mono">
                <span className="cs-sb-dot" />
                THINKING
              </span>
              <span className="cs-sb-section">// {active.replace(/_/g, ' ')}</span>
              <span className="cs-sb-mono cs-sb-r">
                {lineCursor}/{totalLines} · {progress}%
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
