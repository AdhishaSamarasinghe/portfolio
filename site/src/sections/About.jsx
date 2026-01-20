import { Section } from '../components/Section'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A student developer who ships"
      description="I build projects that are fast, readable, and easy to maintain. I'm currently looking for software engineering internships where I can learn quickly and contribute from day one."
    >
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4 text-sm leading-relaxed text-slate-300">
            <p>
              I enjoy working across the stack, with a special interest in front-end
              engineering: component design, state management, and UX details.
            </p>
            <p>
              I value clean architecture, good naming, and small reusable primitives
              that keep codebases consistent.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold text-slate-200">What I like</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Reusable components and design systems</li>
                <li>Performance and accessibility</li>
                <li>Debugging and problem solving</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold text-slate-200">What I bring</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Clear communication and ownership</li>
                <li>Strong CS fundamentals</li>
                <li>Practical project experience</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-xs font-semibold text-slate-200">Education</div>
          <div className="mt-3 text-sm text-white">
            B.S. Computer Science
          </div>
          <div className="mt-1 text-sm text-slate-300">
            Your University · 202x – 202x
          </div>

          <div className="mt-6 text-xs font-semibold text-slate-200">
            Highlights
          </div>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Coursework: DS&A, OS, Databases, Networks</li>
            <li>Clubs: ACM / Hackathons / Open-source</li>
            <li>Interests: UI engineering, developer tools</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
