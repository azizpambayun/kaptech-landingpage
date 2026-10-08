import { useEffect, useRef, useState } from 'react'

/**
 * Hook reveal-on-scroll berbasis IntersectionObserver.
 * Performa: hanya satu observer per komponen, langsung disconnect setelah tampil.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return

    // Fallback untuk browser tanpa IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  return [ref, visible]
}
