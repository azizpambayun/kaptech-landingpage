import { memo, useEffect, useRef, useState } from 'react'
import './Stats.css'

const stats = [
  { value: 120, suffix: '+', label: 'Proyek AI Selesai' },
  { value: 40, suffix: '+', label: 'Klien Enterprise & SMB' },
  { value: 98, suffix: '%', label: 'Model Akurasi Rata-rata' },
  { value: 3, suffix: 'x', label: 'ROI Median dalam 1 Tahun' },
]

/** Animasi angka dengan requestAnimationFrame, hanya jalan saat terlihat. */
function Counter({ value, suffix }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setN(value)
      return
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        io.disconnect()
        const dur = 1400
        const t0 = performance.now()
        const tick = (t) => {
          const p = Math.min((t - t0) / dur, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setN(Math.round(eased * value))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    })
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return (
    <span ref={ref} className="stat-value">
      {n}
      {suffix}
    </span>
  )
}

function Stats() {
  return (
    <section id="statistik" className="section stats-section">
      <div className="container">
        <ul className="stats-grid">
          {stats.map((s) => (
            <li key={s.label}>
              <Counter value={s.value} suffix={s.suffix} />
              <span className="stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default memo(Stats)
