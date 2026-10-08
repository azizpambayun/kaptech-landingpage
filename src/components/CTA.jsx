import { memo, useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import './CTA.css'

function CTA() {
  const [ref, visible] = useReveal()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: integrasikan dengan endpoint CRM / email service (mis. POST /api/leads)
    setSent(true)
  }

  return (
    <section id="kontak" className="section cta-section">
      <div className="container">
        <div ref={ref} className={`cta-card reveal ${visible ? 'visible' : ''}`}>
          <div className="cta-text">
            <p className="section-label">Kontak</p>
            <h2 className="section-title">Siap Memulai Journey AI Anda?</h2>
            <p className="section-sub">
              Konsultasi awal 30 menit — gratis, tanpa komitmen. Ceritakan tantangan bisnis
              Anda, kami tunjukkan potensi solusinya.
            </p>
            <ul className="cta-points">
              <li>✔ Respons dalam 1x24 jam kerja</li>
              <li>✔ NDA tersedia atas permintaan</li>
              <li>✔ Rekomendasi use case &amp; estimasi ROI</li>
            </ul>
          </div>

          {sent ? (
            <div className="cta-success" role="status">
              <span className="cta-success-icon" aria-hidden="true">✓</span>
              <h3>Terima kasih, {form.name || 'Sahabat KAPTECH'}!</h3>
              <p>Tim kami akan segera menghubungi Anda di {form.email}.</p>
            </div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <label>
                Nama
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nama lengkap"
                  required
                  autoComplete="name"
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="nama@perusahaan.com"
                  required
                  autoComplete="email"
                />
              </label>
              <label>
                Pesan
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tantangan atau tujuan bisnis Anda…"
                  required
                />
              </label>
              <button type="submit" className="btn btn-primary cta-submit">
                Jadwalkan Konsultasi
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default memo(CTA)
