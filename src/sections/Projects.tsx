import { Section } from '../components/Section'
import { ProjectCard } from '../components/ProjectCard'
import { projects, profile } from '../data/portfolio'
import { ButtonLink } from '../components/Button'

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work (impact-first, clearly explained)"
      className="border-t border-white/10"
    >
      <div className="grid items-stretch gap-4 sm:gap-5 lg:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <div className="mt-8 card flex flex-col gap-3 p-5 sm:mt-10 sm:gap-4 sm:p-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-white">More projects + code</p>
          <p className="mt-2 text-base text-slate-200/70">
            Want to see more? I’m happy to share additional work and code samples.
          </p>
        </div>
        <ButtonLink
          href={profile.social.find((s) => s.label === 'GitHub')?.href ?? '#'}
          variant="secondary"
          target="_blank"
          rel="noreferrer"
        >
          Browse GitHub
        </ButtonLink>
      </div>
    </Section>
  )
}
