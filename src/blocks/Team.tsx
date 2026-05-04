export type TeamBlockData = {
  sectionTag?: string | null
  title: string
  members?: {
    role: string
    name: string
    initials: string
    paragraphs?: { text: string }[] | null
  }[] | null
}

export const Team = ({ sectionTag = '07 — TEAM', title, members }: TeamBlockData) => {
  const items = members ?? []

  return (
    <section data-rift-section data-rift-name="TEAM" className="sec team">
      <div className="container">
        <div className="sec-head">
          <div className="sec-tag plain">{sectionTag}</div>
          <h2 className="sec-h2 lg">{title}</h2>
        </div>

        {items.map((member, idx) => (
          <div key={idx} className={`founder ${idx % 2 === 1 ? 'reverse' : ''}`}>
            {idx % 2 === 0 ? (
              <div className="founder-img right">
                <div className="portrait grayscale" data-initials={member.initials}>
                  <div
                    className="portrait-bg"
                    style={{ background: 'linear-gradient(135deg, #3f3f46 0%, #71717a 100%)' }}
                  />
                  <div className="portrait-initials">{member.initials}</div>
                </div>
              </div>
            ) : null}

            <div className="founder-text">
              <div className="sec-tag plain">{member.role}</div>
              <h3 className="founder-name">[{member.name}]</h3>
              {(member.paragraphs ?? []).map((p, i) => (
                <p key={i}>{p.text}</p>
              ))}
            </div>

            {idx % 2 === 1 ? (
              <div className="founder-img left">
                <div className="portrait" data-initials={member.initials}>
                  <div
                    className="portrait-bg"
                    style={{ background: 'linear-gradient(135deg, #52525b 0%, #a1a1aa 100%)' }}
                  />
                  <div className="portrait-initials">{member.initials}</div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
