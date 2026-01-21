import { Badge } from '../components/Badge'
import { Section } from '../components/Section'

export function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="Curious builder with a focus on fundamentals"
      className="border-t border-white/10"
    >
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4 text-sm text-slate-200/75">
            <p>
              I’m a computer science student who enjoys building end-to-end products: clean interfaces, dependable APIs,
              and the small details that make an app feel polished.
            </p>
            <p>
              I care about readable code, performance, and developer experience. I’m comfortable collaborating via PRs,
              code reviews, and writing docs that make future changes safer.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>Strong CS fundamentals</Badge>
            <Badge>Team-first</Badge>
            <Badge>Mobile-first UI</Badge>
            <Badge>Always learning</Badge>
          </div>
        </div>

        <div className="surface p-6">
          <h3 className="text-sm font-semibold">Quick facts</h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-200/70">Interests</dt>
              <dd className="text-slate-100/90">Full-stack, systems, ML</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-200/70">Strengths</dt>
              <dd className="text-slate-100/90">Ownership, clarity, speed</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-200/70">Currently</dt>
              <dd className="text-slate-100/90">Building projects + prepping</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  )
}
