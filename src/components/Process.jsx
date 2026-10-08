import { memo } from 'react'
import useReveal from '../hooks/useReveal.js'
import './Process.css'

const steps = [
  {
    no: '01',
    title: 'Discovery & Assessment',
    desc: 'Memahami tujuan bisnis, inventarisasi data, dan menentukan use case dengan ROI tertinggi.',
  },
  {
    no: '02',
    title: 'Prototyping (PoC)',
    desc: 'Membangun proof-of-concept cepat untuk memvalidasi asumsi sebelum investasi besar.',
  },
  {
    no: '03',
    title: 'Build & Integrate',
    desc: 'Pengembangan model produksi-ready dan integrasi mulus ke sistem yang sudah ada.',
  },
  {
    no: '04',
    title: 'Deploy, Monitor & Scale',
    desc: 'Peluncuran dengan MLOps, monitoring performa berkelanjutan, dan skalabilitas elastis.',
  },
]

function Step({ s }) {
  const [ref, visible] = useReveal()
  return (
    <li ref={ref} className={`step reveal ${visible ? 'visible' : ''}`}>
      <span className="step-no">{s.no}</span>
      <div>
        <h3>{s.title}</h3>
        <p>{s.desc}</p>
      </div>
    </li>
  )
}

function Process() {
  return (
    <section id="proses" className="section process-section">
      <div className="container">
        <p className="section-label">Cara Kerja</p>
        <h2 className="section-title">Proses Terstruktur, Hasil Terukur</h2>
        <p className="section-sub">
          Metodologi empat langkah yang memangkas risiko dan mempercepat time-to-value.
        </p>

        <ol className="process-grid">
          {steps.map((s) => (
            <Step key={s.no} s={s} />
          ))}
        </ol>
      </div>
    </section>
  )
}

export default memo(Process)
