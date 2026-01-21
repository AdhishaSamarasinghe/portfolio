import { useEffect } from 'react'

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

  return (
    <div className="min-h-dvh">
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
