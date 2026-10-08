import { memo } from 'react'
import useReveal from '../hooks/useReveal.js'
import './Services.css'

const services = [
  {
    icon: 'M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5-2.1 2.1M8.6 15.4l-2.1 2.1m0-11 2.1 2.1m6.8 6.8 2.1 2.1',
    circle: true,
    title: 'Strategi & Roadmap AI',
    desc: 'Audit kesiapan data, identifikasi use case bernilai tinggi, dan susun roadmap adopsi AI yang terukur.',
  },
  {
    icon: 'M4 19V9m5 10V5m5 14v-7m5 7V8',
    title: 'Machine Learning & Predictive Analytics',
    desc: 'Model peramalan, scoring, dan optimasi untuk forecasting, churn, risiko, hingga personalisasi.',
  },
  {
    icon: 'M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 9v-3a5 5 0 0 0-5-5H5',
    title: 'LLM & Generative AI',
    desc: 'Chatbot cerdas, RAG, asistente internal, dan fine-tuning model bahasa besar yang aman & privat.',
  },
  {
    icon: 'M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    title: 'Computer Vision',
    desc: 'Deteksi objek, QC otomatis, analitik video, dan OCR untuk efisiensi operasional pabrik & retail.',
  },
  {
    icon: 'M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7Zm5 5h6m-3-3v6',
    title: 'MLOps & Infrastruktur',
    desc: 'Pipeline training, deployment containerized, monitoring drift — scalable dari MVP hingga produksi.',
  },
  {
    icon: 'M12 3 4 7v6c0 4 3.5 7 8 8 4.5-1 8-4 8-8V7l-8-4Zm-3 9 2.5 2.5L16 10',
    title: 'AI Governance & Etika',
    desc: 'Kebijakan penggunaan AI yang bertanggung jawab: transparansi, keamanan data, dan kepatuhan regulasi.',
  },
]

function ServiceCard({ s }) {
  const [ref, visible] = useReveal()
  return (
    <article ref={ref} className={`card reveal ${visible ? 'visible' : ''}`}>
      <div className="card-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d={s.icon} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
    </article>
  )
}

function Services() {
  return (
    <section id="layanan" className="section">
      <div className="container">
        <p className="section-label">Layanan</p>
        <h2 className="section-title">Solusi AI End-to-End</h2>
        <p className="section-sub">
          Dari konsultasi awal hingga sistem AI yang berjalan di produksi — satu mitra untuk seluruh journey.
        </p>

        <div className="services-grid">
          {services.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Services)
