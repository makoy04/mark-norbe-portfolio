'use client'

import { useEffect } from 'react'

export function MotionEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const root = document.documentElement
    const pending = new Set(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    const reveal = (el: Element) => {
      el.setAttribute('data-revealed', 'true')
      pending.delete(el as HTMLElement)
      observer.unobserve(el)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target)
        }
      },
      { threshold: 0 },
    )

    // IntersectionObserver can be unreliable inside embedded previews/iframes,
    // so also reveal anything that has entered or passed the viewport on scroll.
    let frame = 0
    const checkPositions = () => {
      frame = 0
      const limit = window.innerHeight * 0.95
      for (const el of pending) {
        if (el.getBoundingClientRect().top < limit) reveal(el)
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(checkPositions)
    }

    pending.forEach((el) => observer.observe(el))
    root.classList.add('reveal-ready')
    checkPositions()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const onPointerDown = (e: PointerEvent) => {
      if (reduceMotion) return

      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-ripple]')
      if (target) {
        const rect = target.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height) * 2
        const ripple = document.createElement('span')
        ripple.className = 'ripple'
        ripple.style.width = `${size}px`
        ripple.style.height = `${size}px`
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`
        target.appendChild(ripple)
        ripple.addEventListener('animationend', () => ripple.remove())
      }

      const burst = document.createElement('span')
      burst.className = 'click-burst'
      burst.style.left = `${e.clientX}px`
      burst.style.top = `${e.clientY}px`
      document.body.appendChild(burst)
      burst.addEventListener('animationend', () => burst.remove())
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [])

  return null
}
