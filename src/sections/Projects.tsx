import { Section } from '../components/Section'
import { ProjectCard } from '../components/ProjectCard'
import { projects, profile } from '../data/portfolio'

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Impact-first work (what I shipped and why it matters)"
      className="border-t border-white/10"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <div className="mt-8 surface flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-200/75">
          Want to see more? I’m happy to share additional work and code samples.
        </p>
        <a
          href={profile.social.find((s) => s.label === 'GitHub')?.href ?? '#'}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
        >
          Browse GitHub
        </a>
      </div>
    </Section>
  )
}
