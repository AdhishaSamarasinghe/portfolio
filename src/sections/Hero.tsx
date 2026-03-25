import { useState } from 'react'

import { Badge } from '../components/Badge'
import { ButtonLink } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
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
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              <Badge>{profile.location}</Badge>
              <Badge>{profile.availability}</Badge>
            </div>

            <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              <span className="block text-slate-100/90">I build</span>
              <span className="block bg-gradient-to-r from-white via-teal-100 to-sky-100 bg-clip-text text-transparent">
                reliable software
              </span>
              <span className="mt-4 block text-xl font-semibold text-slate-100/[0.85] sm:text-3xl">
                {profile.name}
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200/80 sm:text-xl">
              {profile.headline}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-200/70 sm:text-lg">
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

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
                  <div className="absolute -left-12 top-0 h-40 w-40 rounded-full bg-brand-indigo/[0.14] blur-2xl" />
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
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="p-3">
              <div
                className="relative aspect-[3/4] w-full max-w-[340px] sm:max-w-[380px] lg:max-w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] mx-auto overflow-hidden rounded-[28px] shadow-[0_12px_40px_rgba(0,0,0,0.55)] border border-white/[0.08] transition-all hover:scale-[1.02] hover:shadow-[0_16px_48px_rgba(0,0,0,0.65)] hover:border-white/[0.15]"
              >
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
                  {!hasImage || !profile.photo ? (
                    <div className="relative flex h-full w-full items-center justify-center text-5xl font-semibold text-white/[0.85] sm:text-6xl">
                      {initials}
                    </div>
                  ) : null}
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-slate-200/75 sm:text-base">
                <span className="font-semibold text-white">{profile.name}</span>
                <span className="rounded-full px-3.5 py-1 text-xs font-semibold text-slate-100/[0.85] sm:text-sm">
                  {profile.location}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
