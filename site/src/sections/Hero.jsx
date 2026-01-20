import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'
import { profile } from '../data/profile'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-[-260px] right-[-200px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge>Internship-ready</Badge>
              <Badge>Open to opportunities</Badge>
              <Badge>React • Tailwind</Badge>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {profile.name}
              <span className="block mt-3 text-slate-200">{profile.role}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#projects" size="lg">
                View projects
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Contact
              </Button>
              {profile.resumeUrl && profile.resumeUrl !== '#' && (
                <Button
                  href={profile.resumeUrl}
                  variant="ghost"
                  size="lg"
                  target={profile.resumeUrl?.startsWith('http') ? '_blank' : undefined}
                  rel={profile.resumeUrl?.startsWith('http') ? 'noreferrer' : undefined}
                >
                  Resume
                </Button>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <span>{profile.location}</span>
              <a className="hover:text-white" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a
                className="hover:text-white"
                href={profile.github}
                target={profile.github?.startsWith('http') ? '_blank' : undefined}
                rel={profile.github?.startsWith('http') ? 'noreferrer' : undefined}
              >
                GitHub
              </a>
              <a
                className="hover:text-white"
                href={profile.linkedin}
                target={profile.linkedin?.startsWith('http') ? '_blank' : undefined}
                rel={profile.linkedin?.startsWith('http') ? 'noreferrer' : undefined}
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">Snapshot</div>
                  <div className="mt-1 text-sm text-slate-300">
                    What I bring to an internship
                  </div>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-500/15 text-indigo-200 ring-1 ring-indigo-400/30">
                  <span className="text-lg font-semibold">CS</span>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-indigo-400" />
                  <span>
                    Strong fundamentals (data structures, algorithms, debugging)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-indigo-400" />
                  <span>Clean, responsive UIs with accessible components</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-indigo-400" />
                  <span>Practical project experience and strong communication</span>
                </li>
              </ul>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-xs text-slate-400">Focus</div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    Web apps
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-xs text-slate-400">Style</div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    Clean UI
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-xs text-slate-400">Teamwork</div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    Collaborative
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="h-16" />
    </section>
  )
}
