import { useEffect, useMemo, useState } from 'react'
import { cn } from '../utils/cn'
import { Container } from './Container'
import { Button } from './Button'
import { profile } from '../data/profile'

export function Navbar() {
  const links = useMemo(
    () => [
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    [],
  )

  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60',
        scrolled ? 'bg-slate-950/70' : 'bg-slate-950/40',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-semibold tracking-tight text-white"
          aria-label="Go to top"
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button
            href={profile.resumeUrl}
            variant="secondary"
            size="sm"
            target={profile.resumeUrl?.startsWith('http') ? '_blank' : undefined}
            rel={profile.resumeUrl?.startsWith('http') ? 'noreferrer' : undefined}
          >
            Resume
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2 text-slate-200 hover:bg-white/10 hover:text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-x-4 top-20 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-xl shadow-black/30">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2">
                <Button
                  href={profile.resumeUrl}
                  variant="secondary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Resume
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
