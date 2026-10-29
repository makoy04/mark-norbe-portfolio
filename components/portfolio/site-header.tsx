'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Logo } from './logo'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#testimonials', label: 'Testimonials' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#top')
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`
      setScrolled(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const sections = [...links.map((l) => l.href), '#contact']
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border bg-background/85 shadow-lg shadow-black/20 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const isActive = active === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={`relative py-1 text-sm transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-primary after:transition-transform after:duration-300 ${
                  isActive
                    ? 'text-primary after:scale-x-100'
                    : 'text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-100'
                }`}
              >
                {link.label}
              </a>
            )
          })}
          <a
            href="#contact"
            data-ripple
            className="glow rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 active:scale-95"
          >
            {"Let's Talk"}
          </a>
        </nav>

        <button
          type="button"
          data-ripple
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground active:scale-90 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      <div
        ref={progressRef}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary"
      />

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="animate-in fade-in slide-in-from-top-2 border-t border-border bg-background/95 px-5 py-4 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {[...links, { href: '#contact', label: 'Contact' }].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-2 py-2.5 text-base hover:bg-secondary ${
                    active === link.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
