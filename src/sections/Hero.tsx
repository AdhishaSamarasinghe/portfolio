import { useState } from 'react'

import { Badge } from '../components/Badge'
import { ButtonLink } from '../components/Button'
import { Container } from '../components/Container'
import { contact, ctas, profile } from '../data/portfolio'

export function Hero() {
  const [hasImage, setHasImage] = useState(true)
  const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join('')

  return (
    <section id="top" className="relative overflow-hidden pb-14 pt-18 sm:pb-20 sm:pt-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-brand-indigo/18 blur-3xl motion-safe:animate-float" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-cyan/10 blur-3xl motion-safe:animate-float motion-safe:[animation-delay:800ms]" />
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-amber/10 blur-3xl motion-safe:animate-float motion-safe:[animation-delay:1400ms]" />
      </div>

      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="motion-safe:animate-fade-up">
            <div className="flex flex-wrap gap-2">
              <Badge>{profile.location}</Badge>
              <Badge>{profile.availability}</Badge>
            </div>

            <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              <span className="block text-slate-100/90">I build</span>
              <span className="block bg-gradient-to-r from-white via-teal-100 to-sky-100 bg-clip-text text-transparent">
                reliable software
              </span>
              <span className="mt-4 block text-xl font-semibold text-slate-100/85 sm:text-3xl">
                {profile.name}
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200/80 sm:text-xl">
              {profile.headline}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200/70 sm:text-lg">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="#projects">View work</ButtonLink>
              <ButtonLink href={`mailto:${contact.email}`} variant="secondary">
                Email
              </ButtonLink>
              <ButtonLink
                href={ctas.resumeHref}
                variant="ghost"
                target={ctas.resumeHref.startsWith('http') ? '_blank' : undefined}
                rel={ctas.resumeHref.startsWith('http') ? 'noreferrer' : undefined}
              >
                Resume
              </ButtonLink>

              <div className="ml-0 flex flex-wrap gap-3 sm:ml-3">
                {profile.social
                  .filter((s) => s.label !== 'Resume')
                  .map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="text-sm font-semibold text-slate-100/70 hover:text-white"
                    >
                      {s.label}
                    </a>
                  ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 motion-safe:animate-fade-up motion-safe:[animation-delay:120ms]">
            <div className="card p-3 sm:col-span-2">
              <div
                className="relative aspect-[9/16] w-full min-h-[420px] sm:min-h-[520px] md:min-h-[560px] max-h-[760px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/25 via-brand-cyan/10 to-brand-amber/18" aria-hidden="true" />
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="lazy"
                    onError={() => setHasImage(false)}
                    onLoad={() => setHasImage(true)}
                  />
                ) : null}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-black/38"
                  aria-hidden="true"
                />
                {!hasImage || !profile.photo ? (
                  <div className="relative flex h-full w-full items-center justify-center text-5xl font-semibold text-white/85 sm:text-6xl">
                    {initials}
                  </div>
                ) : null}
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-slate-200/75 sm:text-base">
                <span className="font-semibold text-white">{profile.name}</span>
                <span className="rounded-full border border-white/12 bg-white/8 px-3.5 py-1 text-xs font-semibold text-slate-100/85 sm:text-sm">
                  {profile.location}
                </span>
              </div>
            </div>

            <div className="card p-6">
              <p className="kicker">Education</p>
              <p className="mt-4 text-sm font-semibold text-white">{profile.education.school}</p>
              <p className="mt-2 text-sm text-slate-200/70">
                {profile.education.degree} • {profile.education.graduation}
              </p>
              {profile.education.highlights?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {profile.education.highlights.slice(0, 3).map((h) => (
                    <Badge key={h}>{h}</Badge>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="card p-6">
              <p className="kicker">Focus</p>
              <p className="mt-4 text-sm font-semibold text-white">Full-stack fundamentals</p>
              <p className="mt-2 text-sm text-slate-200/70">Clean UI, dependable APIs, performance-minded code.</p>
            </div>

            <div className="card p-6">
              <p className="kicker">Strengths</p>
              <p className="mt-4 text-sm font-semibold text-white">Ownership + clarity</p>
              <p className="mt-2 text-sm text-slate-200/70">I like predictable systems, good docs, and fast feedback.</p>
            </div>

            <div className="card relative overflow-hidden p-6">
              <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
                <div className="absolute -left-12 top-0 h-40 w-40 rounded-full bg-brand-indigo/14 blur-2xl" />
                <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-brand-cyan/10 blur-2xl" />
              </div>
              <div className="relative">
                <p className="kicker">Availability</p>
                <p className="mt-4 text-sm font-semibold text-white">Open to internships</p>
                <p className="mt-2 text-sm text-slate-200/70">Best way to reach me: email.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ButtonLink href="#contact" variant="secondary">
                    Contact
                  </ButtonLink>
                  <ButtonLink href="#projects" variant="ghost">
                    Projects
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
