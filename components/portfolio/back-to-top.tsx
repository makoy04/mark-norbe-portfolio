'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#top"
      data-ripple
      aria-label="Back to top"
      className={`hexagon glow fixed bottom-6 right-6 z-40 flex size-12 items-center justify-center bg-primary text-primary-foreground transition-all duration-300 hover:-translate-y-1 active:scale-90 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </a>
  )
}
