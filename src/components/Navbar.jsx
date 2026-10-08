import { useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#layanan', label: 'Layanan' },
  { href: '#proses', label: 'Proses' },
  { href: '#statistik', label: 'Statistik' },
  { href: '#kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="brand" aria-label="KAPTECH.com beranda">
          <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
            <defs>
              <linearGradient id="navg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#22d3ee" />
                <stop offset="1" stopColor="#818cf8" />
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="14" fill="#101731" />
            <path
              d="M20 16v32M20 32l14-16M20 32l14 16"
              stroke="url(#navg)"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="46" cy="32" r="5" fill="url(#navg)" />
          </svg>
          <span className="brand-name">
            KAPTECH<span className="brand-tld">.com</span>
          </span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Navigasi utama">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#kontak" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Konsultasi Gratis
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
