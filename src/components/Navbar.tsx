import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

import { contact, ctas, navItems, profile } from '../data/portfolio'
import { cn } from '../lib/cn'
import { Container } from './Container'

function CloseIcon() {
  return (
    <span className="relative block h-4 w-4" aria-hidden="true">
      <span className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-black" />
      <span className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-black" />
    </span>
  )
}

function SocialIcon({ label }: { label: 'LinkedIn' | 'GitHub' | 'Email' }) {
  if (label === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4.5 w-4.5">
        <path d="M6.5 9.5V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6.5 6.5v.2" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
        <path d="M11 18v-4.2c0-1.9 1.2-3.3 3-3.3s2.9 1.1 2.9 3.2V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 11.2c.8-1.2 2-1.9 3.3-1.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (label === 'GitHub') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4.5 w-4.5">
        <path
          d="M12 4.5a7.5 7.5 0 0 0-2.4 14.6c.38.07.52-.16.52-.37v-1.28c-2.12.46-2.56-.9-2.56-.9-.34-.86-.82-1.08-.82-1.08-.67-.46.05-.45.05-.45.74.05 1.12.76 1.12.76.66 1.13 1.74.81 2.16.62.07-.48.26-.8.47-.98-1.68-.19-3.45-.84-3.45-3.74 0-.83.3-1.5.8-2.02-.08-.2-.35-1 .08-2.08 0 0 .65-.2 2.12.77a7.3 7.3 0 0 1 3.85 0c1.47-.97 2.12-.77 2.12-.77.43 1.08.16 1.88.08 2.08.5.52.8 1.19.8 2.02 0 2.91-1.78 3.55-3.47 3.74.27.24.52.7.52 1.42v2.1c0 .21.14.44.53.37A7.5 7.5 0 0 0 12 4.5Z"
          stroke="currentColor"
          strokeWidth="0.45"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4.5 w-4.5">
      <path d="M12 7.2c1.3 0 1.45.01 1.96.03.49.02.8.1.99.17.25.1.43.22.62.4s.31.37.4.62c.07.19.15.5.17.99.02.51.03.66.03 1.96s-.01 1.45-.03 1.96c-.02.49-.1.8-.17.99a1.61 1.61 0 0 1-.4.62 1.62 1.62 0 0 1-.62.4c-.19.07-.5.15-.99.17-.51.02-.66.03-1.96.03s-1.45-.01-1.96-.03c-.49-.02-.8-.1-.99-.17a1.62 1.62 0 0 1-.62-.4 1.61 1.61 0 0 1-.4-.62c-.07-.19-.15-.5-.17-.99C7.21 13.45 7.2 13.3 7.2 12s.01-1.45.03-1.96c.02-.49.1-.8.17-.99.09-.25.22-.43.4-.62s.37-.31.62-.4c.19-.07.5-.15.99-.17.51-.02.66-.03 1.96-.03Zm0-1.2c-1.32 0-1.49.01-2.01.03-.51.02-.86.1-1.17.22-.32.13-.59.3-.85.56-.26.26-.43.53-.56.85-.12.31-.2.66-.22 1.17C7.21 9.01 7.2 9.18 7.2 10.5v2.99c0 1.32.01 1.49.03 2.01.02.51.1.86.22 1.17.13.32.3.59.56.85.26.26.53.43.85.56.31.12.66.2 1.17.22.52.02.69.03 2.01.03s1.49-.01 2.01-.03c.51-.02.86-.1 1.17-.22.32-.13.59-.3.85-.56.26-.26.43-.53.56-.85.12-.31.2-.66.22-1.17.02-.52.03-.69.03-2.01V10.5c0-1.32-.01-1.49-.03-2.01-.02-.51-.1-.86-.22-1.17a2.35 2.35 0 0 0-.56-.85 2.35 2.35 0 0 0-.85-.56c-.31-.12-.66-.2-1.17-.22C13.49 6.01 13.32 6 12 6Zm0 3.27a2.73 2.73 0 1 0 0 5.46 2.73 2.73 0 0 0 0-5.46Zm0 4.5a1.77 1.77 0 1 1 0-3.54 1.77 1.77 0 0 1 0 3.54Zm3.28-5.49a.64.64 0 1 0 0-1.28.64.64 0 0 0 0 1.28Z" fill="currentColor" />
    </svg>
  )
}

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

  const mobileSocialLinks = useMemo(
    () => [
      { label: 'LinkedIn' as const, href: profile.social.find((item) => item.label === 'LinkedIn')?.href ?? '#' },
      { label: 'GitHub' as const, href: profile.social.find((item) => item.label === 'GitHub')?.href ?? '#' },
      { label: 'Email' as const, href: `mailto:${contact.email}` },
    ],
    [],
  )

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

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900"
      >
        Skip to content
      </a>
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed inset-x-0 top-0 z-40 h-28 sm:h-24"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,4,0.92)_0%,rgba(7,7,7,0.66)_34%,rgba(12,12,12,0.28)_64%,rgba(12,12,12,0.0)_100%)] backdrop-blur-[28px] sm:bg-[linear-gradient(180deg,rgba(4,4,4,0.96)_0%,rgba(7,7,7,0.9)_38%,rgba(12,12,12,0.78)_70%,rgba(12,12,12,0.0)_100%)] sm:backdrop-blur-[34px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.045),transparent_58%)] opacity-70 sm:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)] sm:opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,transparent_58%)] opacity-25 sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,transparent_52%)] sm:opacity-40" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22%3E%3Cfilter id=%22n%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n%22 opacity=%220.18%22/%3E%3C/svg%3E')] opacity-[0.035] mix-blend-soft-light" />
      </motion.div>
      <motion.header
        initial={{ opacity: 0, y: -18, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-3 z-50 sm:top-5"
      >
        <Container className="max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-[2.15rem] border border-[#2a2a2a] bg-[#111111] px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.52)] sm:px-5 lg:px-6">
            <div className="flex items-center gap-3 lg:grid lg:grid-cols-[auto,minmax(0,1fr),auto] lg:items-center lg:gap-4">
              <motion.a
                href="#top"
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group inline-flex min-w-[9rem] flex-shrink-0 items-center justify-center rounded-[1.45rem] border border-[#2f2f2f] bg-[#181818] px-4 py-2.5 text-center text-white shadow-[0_12px_24px_rgba(0,0,0,0.24)] transition-shadow hover:bg-[#202020] hover:shadow-[0_16px_34px_rgba(0,0,0,0.28)] sm:min-w-[10.5rem]"
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
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open CV"
                  whileHover={{ y: -2, scale: 1.02, boxShadow: '0 18px 40px rgba(0, 0, 0, 0.14)' }}
                  whileTap={{ scale: 0.985 }}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#323232] bg-[#171717] px-5 py-3 text-xs font-semibold tracking-[0.28em] text-white transition-colors duration-300 hover:bg-[#222222]"
                >
                  <span className="relative z-10">OPEN CV</span>
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

            <div
              className="pointer-events-none absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2e2e2e] to-transparent"
              aria-hidden="true"
            />

          </div>
        </Container>
      </motion.header>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[90] overflow-hidden bg-[#0a0a0a] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#111111_0%,#0a0a0a_48%,#060606_100%)] opacity-100" aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_32%)] opacity-100" aria-hidden="true" />

            <div className="absolute inset-x-0 top-0 h-[5.1rem] border-b border-white/10 bg-[linear-gradient(180deg,#181818_0%,#111111_100%)] shadow-[0_12px_34px_rgba(0,0,0,0.38)]" aria-hidden="true" />

            <motion.div
              className="relative flex h-full flex-col px-5 pb-6 pt-[5.1rem] text-white sm:px-6"
              initial={{ y: -10, opacity: 0.98 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0.98 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 px-0 pb-4">
                <a
                  href="#top"
                  className="pt-1 text-[0.9rem] font-semibold uppercase tracking-[0.28em] text-white"
                  onClick={() => setOpen(false)}
                >
                  {profile.name.split(' ')[0].toUpperCase()}.
                </a>

                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center border border-[#c9ab52] bg-white shadow-[0_10px_22px_rgba(0,0,0,0.32)] transition-transform hover:scale-[1.02]"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="mt-12 flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.48em] text-slate-500">Navigation</p>
                  <div className="mt-5 h-px bg-white/10" />

                  <nav className="mt-6 flex flex-col gap-5" aria-label="Mobile">
                    {items.map((item) => (
                      <motion.a
                        key={item.id}
                        href={item.href}
                        aria-current={activeId === item.id ? 'page' : undefined}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          'w-fit text-[2.1rem] font-light uppercase leading-none tracking-[-0.03em] transition-colors sm:text-[2.35rem]',
                          activeId === item.id ? 'text-white' : 'text-white/88 hover:text-white',
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </nav>
                </div>

                <div className="pt-10">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Follow me on social media</p>
                  <div className="mt-4 flex items-center gap-4">
                    {mobileSocialLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        aria-label={item.label}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-white/10 text-white transition-colors hover:bg-white/6 hover:text-white"
                      >
                        <SocialIcon label={item.label} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
