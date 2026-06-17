import { Badge } from '../components/Badge'
import { Section } from '../components/Section'
import { profile, skills } from '../data/portfolio'

const skillHighlights = Object.values(skills).flat().slice(0, 8)

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Education, focus, and practical momentum"
      className="border-t border-white/10"
    >
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card p-5 sm:p-7 lg:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-200/55">Current path</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                {profile.education.school}
              </h3>
              <p className="mt-2 text-base text-slate-200/75">
                {profile.education.degree} • {profile.education.graduation}
              </p>
            </div>

            <Badge>{profile.location}</Badge>
          </div>

          <div className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-200/55">Focus</p>
              <p className="mt-3 text-base font-semibold text-white">Full-stack foundations</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/70">
                Building interfaces, APIs, and systems that stay predictable under pressure.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-200/55">Method</p>
              <p className="mt-3 text-base font-semibold text-white">Small, polished iterations</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/70">
                I favor clean handoffs, readable architecture, and fast feedback loops.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-200/55">Next</p>
              <p className="mt-3 text-base font-semibold text-white">Internship-ready portfolio</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/70">
                Sharpening projects and presentation so the work is clear at a glance.
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200/55">Milestones</p>
            <ul className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
              <li className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-white/60" aria-hidden="true" />
                <div>
                  <p className="text-base font-semibold text-white">Computer Science degree in progress</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-200/70">
                    Building fundamentals across algorithms, databases, systems, and collaborative software design.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-white/45" aria-hidden="true" />
                <div>
                  <p className="text-base font-semibold text-white">Portfolio projects with product thinking</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-200/70">
                    Focusing on clean UX, performance, and code that’s easy to review and maintain.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-5">
          <div className="card p-5 sm:p-7 lg:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-200/55">Working style</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">Clear, calm, deliberate</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-200/75">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/55" aria-hidden="true" />
                <span>Prefer elegant interfaces and predictable interactions.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" aria-hidden="true" />
                <span>Write code that is compact, readable, and easy to extend.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" aria-hidden="true" />
                <span>Keep the product story sharp from first impression to final handoff.</span>
              </li>
            </ul>
          </div>

          <div className="card p-5 sm:p-7 lg:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-200/55">Stack snapshot</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">What I use most</h3>
            <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
              {skillHighlights.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}