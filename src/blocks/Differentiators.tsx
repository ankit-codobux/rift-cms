export type DifferentiatorsBlockData = {
  sectionTag?: string | null
  title: string
  items?: {
    code: string
    tag: string
    title: string
    body: string
    dark?: boolean | null
  }[] | null
}

export const Differentiators = ({ sectionTag = '03 — DIFFERENTIATORS', title, items }: DifferentiatorsBlockData) => {
  return (
    <section data-rift-section data-rift-name="DIFFERENTIATORS" className="sec diff">
      <div className="container">
        <div className="sec-head">
          <div className="sec-tag plain">{sectionTag}</div>
          <h2 className="sec-h2 lg">{title}</h2>
        </div>
        <div className="diff-stack">
          {(items ?? []).map((item, i) => (
            <div key={i} className={`diff-card ${item.dark ? 'dark' : 'light'}`}>
              {item.dark && <div className="diff-stipple" />}
              <div className="diff-bar">
                <div className="db-l">
                  <span className="db-mono">{item.code}</span>
                  <span className="db-sep" />
                  <span className="db-mono">{item.tag}</span>
                </div>
                <div className="db-r">
                  <span className="db-pill" />
                  <span className="db-mono">VERIFIED</span>
                </div>
              </div>
              <div className="diff-body">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
