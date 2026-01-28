import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

import { CustomCursor } from './components/CustomCursor'
import { Navbar } from './components/Navbar'
import { profile } from './data/portfolio'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export default function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    document.title = `${profile.name} | CS Internship Portfolio`

    const description =
      `${profile.headline} ${profile.summary}`.trim().slice(0, 155)

    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)
  }, [])

  useEffect(() => {
    function prefersReducedMotion() {
      return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    }

    if (!prefersReducedMotion()) {
      const lenis = new Lenis({
        duration: 0.65,
        easing: (t) => 1 - Math.pow(1 - t, 1.8),
        smoothWheel: true,
      })
      lenisRef.current = lenis

      let raf = 0
      const loop = (time: number) => {
        lenis.raf(time)
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)

      return () => {
        cancelAnimationFrame(raf)
        lenis.destroy()
        lenisRef.current = null
      }
    }

    return
  }, [])

  useEffect(() => {
    function prefersReducedMotion() {
      return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    }

    function scrollToHash(hash: string) {
      const id = hash.replace(/^#/, '')
      if (!id) return

      const target = document.getElementById(id)
      if (!target) return

      const lenis = lenisRef.current
      if (lenis && !prefersReducedMotion()) {
        lenis.scrollTo(target, { offset: -96 })
        return
      }

      target.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      })
    }

    function onClick(e: MouseEvent) {
      const el = e.target as Element | null
      const a = el?.closest?.('a[href^="#"]') as HTMLAnchorElement | null
      if (!a) return

      const href = a.getAttribute('href')
      if (!href || href === '#') return

      const hash = href
      if (!document.getElementById(hash.slice(1))) return

      e.preventDefault()
      history.pushState(null, '', hash)
      scrollToHash(hash)
    }

    // Smooth scroll when the page loads with a hash
    if (window.location.hash) {
      // Let layout settle before scrolling
      window.setTimeout(() => scrollToHash(window.location.hash), 0)
    }

    function onHashChange() {
      scrollToHash(window.location.hash)
    }

    document.addEventListener('click', onClick)
    window.addEventListener('hashchange', onHashChange)
    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  return (
    <div className="min-h-dvh">
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
