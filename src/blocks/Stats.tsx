export type StatsBlockData = {
  items?: {
    key: string
    value: string
  }[] | null
}

export const Stats = ({ items }: StatsBlockData) => {
  const stats = items ?? []

  if (!stats.length) return null

  return (
    <div className="container">
      <div className="stats-row">
        {stats.map((s, i) => (
          <div key={`${s.key}-${i}`} className="stat-cell">
            <div className="stat-num">{s.value}</div>
            <div className="stat-label">{s.key}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
