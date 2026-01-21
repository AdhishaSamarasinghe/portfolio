import { ButtonLink } from '../components/Button'
import { Container } from '../components/Container'
import { Badge } from '../components/Badge'
import { profile } from '../data/portfolio'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-14 sm:pb-14 sm:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl motion-safe:animate-float" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl motion-safe:animate-float motion-safe:[animation-delay:800ms]" />
        <div className="absolute left-1/2 top-24 h-56 w-56 -translate-x-1/2 rounded-full bg-fuchsia-400/10 blur-3xl motion-safe:animate-float motion-safe:[animation-delay:1400ms]" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-2 motion-safe:animate-fade-up">
              <Badge>{profile.location}</Badge>
              <Badge>Open to internships</Badge>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl motion-safe:animate-fade-up motion-safe:[animation-delay:90ms]">
              <span className="block text-slate-100/90">Hi, I’m</span>
              <span className="block bg-gradient-to-r from-white via-indigo-100 to-cyan-200 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-200/80 sm:text-xl motion-safe:animate-fade-up motion-safe:[animation-delay:170ms]">
              {profile.headline}
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-200/70 sm:text-base motion-safe:animate-fade-up motion-safe:[animation-delay:240ms]">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 motion-safe:animate-fade-up motion-safe:[animation-delay:320ms]">
              <ButtonLink href="#projects">View projects</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Contact
              </ButtonLink>
              <div className="ml-0 flex flex-wrap gap-3 sm:ml-3">
                {profile.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="text-sm font-semibold text-slate-100/80 hover:text-white"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="surface p-6 sm:p-8 motion-safe:animate-fade-up motion-safe:[animation-delay:220ms]">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-base font-semibold">At a glance</h2>
              <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100/80 sm:inline-flex">
                {profile.availability}
              </span>
            </div>

            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-200/70">Education</p>
                <p className="mt-2 text-sm font-semibold">{profile.education.school}</p>
                <p className="mt-1 text-sm text-slate-200/70">
                  {profile.education.degree} • {profile.education.graduation}
                </p>
                {profile.education.highlights?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {profile.education.highlights.slice(0, 3).map((h) => (
                      <Badge key={h}>{h}</Badge>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold">Frontend</p>
                  <p className="mt-1 text-sm text-slate-200/70">React, TypeScript, UI systems, accessibility.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold">Backend</p>
                  <p className="mt-1 text-sm text-slate-200/70">APIs, databases, auth, performance.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}
