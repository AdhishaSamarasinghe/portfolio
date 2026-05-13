import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

import { ctas, navItems } from '../data/portfolio'
import { cn } from '../lib/cn'
import { Container } from './Container'

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
  const [activeId, setActiveId] = useState<(typeof navItems)[number]['id']>('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  const items = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        href: item.id === 'home' ? '#top' : `#${item.id}`,
        targetId: item.id === 'home' ? 'top' : item.id,
      })),
    [],
  )

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const ids = items.map((i) => i.targetId)
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
          const id = visible.target.id === 'top' ? 'home' : (visible.target.id as (typeof navItems)[number]['id'])
          setActiveId(id)
        }
      },
      { root: null, rootMargin: '-18% 0px -72% 0px', threshold: [0.05, 0.12, 0.25] },
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [items])

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
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900"
      >
        Skip to content
      </a>
      <motion.header
        initial={{ opacity: 0, y: -18, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-5 z-50"
      >
        <Container className="max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-[2.15rem] border border-[#2a2a2a] bg-[#111111] px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.52)] sm:px-5 lg:px-6">
            <div className="flex items-center gap-3 lg:grid lg:grid-cols-[auto,minmax(0,1fr),auto] lg:items-center lg:gap-4">
              <motion.a
                href="#top"
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group inline-flex min-w-[9rem] flex-shrink-0 items-center justify-center rounded-[1.45rem] bg-[#f5f5f5] px-4 py-2.5 text-center text-zinc-950 shadow-[0_12px_24px_rgba(0,0,0,0.18)] ring-1 ring-white/25 transition-shadow hover:shadow-[0_16px_34px_rgba(0,0,0,0.24)] sm:min-w-[10.5rem]"
              >
                <span className="whitespace-pre-line text-[0.68rem] font-semibold leading-[1.02] tracking-[0.28em] uppercase sm:text-[0.75rem]">
                  ADHISHA
                  {'\n'}SAMARASINGHE
                </span>
              </motion.a>

              <nav className="hidden min-w-0 items-center justify-self-center gap-1 lg:flex" aria-label="Primary">
                {items.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    aria-current={activeId === item.id ? 'page' : undefined}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      'group relative rounded-full px-4 py-3 text-sm font-medium transition-colors',
                      activeId === item.id ? 'bg-[#1c1c1c] text-white' : 'text-zinc-400 hover:bg-[#1a1a1a] hover:text-white',
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        'pointer-events-none absolute inset-x-4 bottom-1.5 h-px origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100',
                        activeId === item.id ? 'scale-x-100' : '',
                      )}
                      aria-hidden="true"
                    />
                  </motion.a>
                ))}
              </nav>

              <div className="hidden items-center justify-self-end lg:flex">
                <motion.a
                  href={ctas.resumeHref}
                  target={ctas.resumeHref.startsWith('http') ? '_blank' : undefined}
                  rel={ctas.resumeHref.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label="Download CV"
                  whileHover={{ y: -2, scale: 1.02, boxShadow: '0 18px 40px rgba(0, 0, 0, 0.14)' }}
                  whileTap={{ scale: 0.985 }}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#323232] bg-[#171717] px-5 py-3 text-xs font-semibold tracking-[0.28em] text-white transition-colors duration-300 hover:bg-[#222222]"
                >
                  <span className="relative z-10">DOWNLOAD CV</span>
                </motion.a>
              </div>

              <button
                type="button"
                className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#313131] bg-[#171717] text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#222222] hover:shadow-[0_14px_28px_rgba(0,0,0,0.28)] lg:hidden"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <MenuIcon open={open} />
              </button>
            </div>

            <AnimatePresence>
              {open ? (
                <>
                  <motion.div
                    className="fixed inset-0 z-40 bg-[#050505] lg:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    onClick={() => setOpen(false)}
                  />

                  <motion.div
                    className="fixed inset-x-4 top-24 z-50 rounded-[1.75rem] border border-[#2a2a2a] bg-[#111111] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)] lg:hidden sm:inset-x-6"
                    initial={{ opacity: 0, y: -10, scale: 0.98, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -8, scale: 0.985, filter: 'blur(8px)' }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <nav className="flex flex-col gap-1" aria-label="Mobile">
                      {items.map((item) => (
                        <motion.a
                          key={item.id}
                          href={item.href}
                          aria-current={activeId === item.id ? 'page' : undefined}
                          whileTap={{ scale: 0.98 }}
                          className={cn(
                            'rounded-[1.15rem] px-4 py-3 text-sm font-medium transition-colors',
                            activeId === item.id
                              ? 'bg-[#1c1c1c] text-white'
                              : 'text-zinc-400 hover:bg-[#1a1a1a] hover:text-white',
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </motion.a>
                      ))}
                    </nav>

                    <div className="mt-4 grid gap-2">
                      <motion.a
                        href={ctas.resumeHref}
                        target={ctas.resumeHref.startsWith('http') ? '_blank' : undefined}
                        rel={ctas.resumeHref.startsWith('http') ? 'noreferrer' : undefined}
                        aria-label="Download CV"
                        whileHover={{ y: -1, scale: 1.01 }}
                        whileTap={{ scale: 0.985 }}
                        className="inline-flex items-center justify-center rounded-full border border-[#323232] bg-[#171717] px-5 py-3 text-xs font-semibold tracking-[0.26em] text-white transition-colors hover:bg-[#222222]"
                      >
                        DOWNLOAD CV
                      </motion.a>
                    </div>
                  </motion.div>
                </>
              ) : null}
            </AnimatePresence>

            <div
              className="pointer-events-none absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2e2e2e] to-transparent"
              aria-hidden="true"
            />

            <motion.div
              className="pointer-events-none absolute inset-x-3 top-0 h-0.5 rounded-full bg-gradient-to-r from-transparent via-[#5a5a5a] to-transparent"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              aria-hidden="true"
            />
          </div>
        </Container>
      </motion.header>
    </>
  )
}
