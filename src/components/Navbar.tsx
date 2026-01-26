import { useEffect, useMemo, useState } from 'react'

import { ctas, navItems, profile } from '../data/portfolio'
import { cn } from '../lib/cn'
import { Container } from './Container'
import { ButtonLink } from './Button'

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-6" aria-hidden="true">
      <span
        className={cn(
          'absolute left-0 top-0 block h-0.5 w-6 rounded bg-white transition-transform',
          open ? 'translate-y-2 rotate-45' : 'translate-y-0 rotate-0',
        )}
      />
      <span
        className={cn(
          'absolute left-0 top-2 block h-0.5 w-6 rounded bg-white transition-opacity',
          open ? 'opacity-0' : 'opacity-100',
        )}
      />
      <span
        className={cn(
          'absolute left-0 top-4 block h-0.5 w-6 rounded bg-white transition-transform',
          open ? 'translate-y-[-0.5rem] -rotate-45' : 'translate-y-0 rotate-0',
        )}
      />
    </span>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<(typeof navItems)[number]['id'] | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const items = useMemo(() => navItems.map((i) => ({ ...i, href: `#${i.id}` })), [])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const ids = navItems.map((i) => i.id)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) {
          const id = visible.target.id as (typeof navItems)[number]['id']
          setActiveId(id)
        }
      },
      { root: null, rootMargin: '-20% 0px -70% 0px', threshold: [0.05, 0.15, 0.3] },
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [open])

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0
      setScrollProgress(Math.max(0, Math.min(1, progress)))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/70 backdrop-blur-lg supports-[backdrop-filter]:bg-bg/55 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-indigo/25 to-transparent" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-0 top-0 h-0.5 bg-gradient-to-r from-brand-indigo via-teal-400 to-brand-cyan"
          style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          aria-hidden="true"
        />
        <Container className="flex h-20 items-center justify-between">
          <a href="#top" className="group inline-flex items-center gap-3 font-semibold tracking-tight">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-base text-white/90 shadow-sm shadow-black/30">
              {profile.name
                .split(' ')
                .slice(0, 2)
                .map((p) => p[0])
                .join('')}
            </span>
            <span className="hidden sm:inline-block">
              {profile.name}
            </span>
            <span className="sr-only">Go to top</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  'group relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-base font-semibold transition-colors',
                  activeId === item.id
                    ? 'bg-white/10 text-white shadow-sm shadow-black/25'
                    : 'text-slate-100/75 hover:text-white hover:bg-white/8',
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'pointer-events-none absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-teal-300/0 via-teal-200/70 to-teal-300/0 transition-opacity',
                    activeId === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50',
                  )}
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ButtonLink
              href={ctas.resumeHref}
              variant="secondary"
              target={ctas.resumeHref.startsWith('http') ? '_blank' : undefined}
              rel={ctas.resumeHref.startsWith('http') ? 'noreferrer' : undefined}
              aria-label="Open resume"
            >
              {ctas.resumeLabel}
            </ButtonLink>
            <ButtonLink
              href={profile.social.find((s) => s.label === 'LinkedIn')?.href ?? '#'}
              variant="primary"
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn"
            >
              LinkedIn
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] p-2 transition hover:border-white/22 hover:bg-white/[0.08] md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} />
          </button>
        </Container>

        <div
          className={cn(
            'md:hidden',
            open ? 'pointer-events-auto' : 'pointer-events-none',
          )}
          aria-hidden={!open}
        >
          <div
            className={cn(
              'fixed inset-0 z-40 bg-black/50 transition-opacity',
              open ? 'opacity-100' : 'opacity-0',
            )}
            onClick={() => setOpen(false)}
          />
          <div
            className={cn(
              'fixed left-0 right-0 top-16 z-50 origin-top rounded-b-2xl border-b border-white/10 bg-bg/95 backdrop-blur transition',
              open ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
            )}
          >
            <Container className="py-4">
              <nav className="flex flex-col gap-2" aria-label="Mobile">
                {items.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={cn(
                      'rounded-xl px-3 py-3 text-sm font-semibold transition-colors',
                      activeId === item.id
                        ? 'bg-white/[0.12] text-white'
                        : 'text-slate-100/90 hover:bg-white/[0.08]',
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-4 grid gap-2">
                <ButtonLink
                  href={ctas.resumeHref}
                  variant="secondary"
                  target={ctas.resumeHref.startsWith('http') ? '_blank' : undefined}
                  rel={ctas.resumeHref.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label="Open resume"
                >
                  {ctas.resumeLabel}
                </ButtonLink>
                <ButtonLink
                  href={profile.social.find((s) => s.label === 'LinkedIn')?.href ?? '#'}
                  variant="primary"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open LinkedIn"
                >
                  LinkedIn
                </ButtonLink>
                <ButtonLink href="#contact" variant="ghost" aria-label="Jump to contact">
                  {ctas.primaryEmailLabel}
                </ButtonLink>
              </div>
            </Container>
          </div>
        </div>
      </header>
    </>
  )
}
