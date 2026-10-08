import { memo } from 'react'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-name">
            KAPTECH<span className="brand-tld">.com</span>
          </span>
          <p>Konsultan AI yang berfokus pada hasil: strategi, implementasi, dan skalabilitas.</p>
        </div>

        <nav className="footer-links" aria-label="Tautan footer">
          <a href="#layanan">Layanan</a>
          <a href="#proses">Proses</a>
          <a href="#statistik">Statistik</a>
          <a href="#kontak">Kontak</a>
        </nav>

        <address className="footer-contact">
          <a href="mailto:hello@kaptech.com">hello@kaptech.com</a>
          <span>Jakarta · Singapore · Remote-first</span>
        </address>
      </div>

      <div className="container footer-bottom">
        <p>© {year} KAPTECH.com — Seluruh hak cipta dilindungi.</p>
        <p className="footer-made">Built with ⚡ Vite + React</p>
      </div>
    </footer>
  )
}

export default memo(Footer)
