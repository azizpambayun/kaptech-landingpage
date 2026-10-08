import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* Dekorasi murni CSS — tanpa gambar eksternal agar ringan */}
      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <p className="hero-badge reveal visible">
          <span className="dot" aria-hidden="true" /> AI Consulting untuk Bisnis Modern
        </p>

        <h1 className="hero-title">
          Ubah Data Menjadi <span className="text-gradient">Keunggulan Kompetitif</span>
        </h1>

        <p className="hero-sub">
          KAPTECH.com membantu perusahaan merancang, membangun, dan skalakan solusi
          Artificial Intelligence &amp; Machine Learning — dari strategi hingga produksi,
          dengan arsitektur yang mengutamakan performa.
        </p>

        <div className="hero-actions">
          <a href="#kontak" className="btn btn-primary">
            Mulai Konsultasi
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#layanan" className="btn btn-ghost">
            Lihat Layanan
          </a>
        </div>

        <ul className="hero-tech" aria-label="Teknologi yang kami kuasai">
          <li>Machine Learning</li>
          <li>LLM &amp; GenAI</li>
          <li>Computer Vision</li>
          <li>MLOps</li>
          <li>Data Engineering</li>
        </ul>
      </div>
    </section>
  )
}
