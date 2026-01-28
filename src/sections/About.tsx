import { Badge } from '../components/Badge'
import { Section } from '../components/Section'

export function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="How I work and what I optimize for"
      className="border-t border-white/10"
    >
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-5 text-base text-slate-200/80 sm:text-lg">
            <p>
              I’m a computer science student who likes shipping end-to-end: a clear UX, solid data flow, and code that’s
              easy to maintain.
            </p>
            <p>
              I care about fundamentals (performance, correctness, readable architecture) and I’m comfortable
              collaborating through PRs, code reviews, and lightweight documentation.
            </p>
            <p>
              My favorite projects are the ones where product thinking and engineering meet: making tradeoffs,
              measuring impact, and polishing the final 10%.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>Strong CS fundamentals</Badge>
            <Badge>Team-first</Badge>
            <Badge>Performance-minded</Badge>
            <Badge>Design-aware</Badge>
            <Badge>Always learning</Badge>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="card h-full p-7">
            <h3 className="text-base font-semibold">Principles</h3>
            <ul className="mt-4 space-y-3 text-base text-slate-200/75">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-indigo/70" aria-hidden="true" />
                <span>Make the happy path fast and obvious.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan/70" aria-hidden="true" />
                <span>Keep systems simple until complexity is justified.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-amber/70" aria-hidden="true" />
                <span>Write code that future-you can change safely.</span>
              </li>
            </ul>
          </div>

          <div className="card h-full p-7">
            <h3 className="text-base font-semibold">Right now</h3>
            <dl className="mt-4 space-y-3 text-base">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-slate-200/[0.65]">Learning</dt>
                <dd className="text-slate-100/90">Systems + practical ML</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-slate-200/[0.65]">Building</dt>
                <dd className="text-slate-100/90">Portfolio-grade projects</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-slate-200/[0.65]">Looking for</dt>
                <dd className="text-slate-100/90">Internship opportunities</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Section>
  )
}
