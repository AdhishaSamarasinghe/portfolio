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

            <h1 className="mt-7 text-[clamp(2.6rem,11vw,4rem)] font-semibold leading-[0.96] tracking-tight sm:text-5xl lg:text-7xl">
              <span className="block text-slate-100/90">I build</span>
              <span className="block bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
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
              <ButtonLink
                href="#projects"
                variant="ghost"
                className="rounded-full bg-white px-6 text-slate-900 shadow-[0_12px_26px_rgba(0,0,0,0.35)] hover:bg-white/90 hover:text-slate-900"
              >
                View work
              </ButtonLink>
              <ButtonLink href={`mailto:${contact.email}`} variant="secondary">
                Email
              </ButtonLink>
              <ButtonLink
                href={ctas.resumeHref}
                variant="ghost"
                target="_blank"
                rel="noreferrer"
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
                  <div className="absolute -left-12 top-0 h-40 w-40 rounded-full bg-white/[0.08] blur-2xl" />
                  <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-zinc-500/10 blur-2xl" />
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
                className="group relative aspect-[3/4] w-full max-w-[340px] min-h-[340px] sm:max-w-[380px] sm:min-h-[500px] lg:max-w-full lg:min-h-[560px] mx-auto overflow-hidden rounded-[30px] border border-white/[0.14] bg-zinc-950/75 p-[6px] shadow-[0_16px_46px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(0,0,0,0.72)]"
              >
                  <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-white/20" aria-hidden="true" />
                  <div
                    className="pointer-events-none absolute inset-[6px] rounded-[24px] bg-gradient-to-br from-white/16 via-transparent to-zinc-400/14 opacity-70 transition-opacity duration-300 group-hover:opacity-95"
                    aria-hidden="true"
                  />
                  {profile.photo ? (
                    <img
                      src={profile.photo}
                      alt={profile.name}
                      className="absolute inset-[6px] h-[calc(100%-12px)] w-[calc(100%-12px)] rounded-[24px] object-cover object-center"
                      loading="lazy"
                      onError={() => setHasImage(false)}
                      onLoad={() => setHasImage(true)}
                    />
                  ) : null}
                  {!hasImage || !profile.photo ? (
                    <div className="relative m-[6px] flex h-[calc(100%-12px)] w-[calc(100%-12px)] items-center justify-center rounded-[24px] border border-white/20 bg-zinc-900/90 text-5xl font-semibold text-white/[0.85] sm:text-6xl">
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
