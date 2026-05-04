export type StatementBlockData = {
  sectionTag?: string | null
  quote: string
  meta?: string | null
  label?: string | null
}

export const Statement = ({ quote, meta = 'RIFT / 2026', label = 'TECHNICAL PHILOSOPHY' }: StatementBlockData) => {
  return (
    <section data-rift-section data-rift-name="PHILOSOPHY" className="sec statement">
      <div className="stipple-bg" />
      <div className="container">
        <div className="quote-block">
          <div className="quote-mark">"</div>
          <blockquote>{quote}</blockquote>
          <div className="quote-attrib">
            <span className="qa-mono">{meta}</span>
            <span className="qa-dot" />
            <span className="qa-tag">{label}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
