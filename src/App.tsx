import { useEffect } from 'react'

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

    function scrollToHash(hash: string) {
      const id = hash.replace(/^#/, '')
      if (!id) return

      const target = document.getElementById(id)
      if (!target) return

      target.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
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
