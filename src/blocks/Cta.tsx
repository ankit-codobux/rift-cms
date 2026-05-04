export type CtaBlockData = {
  sectionTag?: string | null
  title: string
  paragraphs?: { text: string }[] | null
}

export const Cta = ({ sectionTag = '08 — FREMAD', title, paragraphs }: CtaBlockData) => {
  return (
    <section data-rift-section data-rift-name="FREMAD" className="sec future">
      <div className="stipple-bg" />
      <div className="container">
        <div className="future-inner">
          <div className="sec-tag plain">{sectionTag}</div>
          <h2 className="future-h2">{title}</h2>
          {(paragraphs ?? []).map((p, i) => (
            <p key={i}>{p.text}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
