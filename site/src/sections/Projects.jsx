import { Section } from '../components/Section'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/profile'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="A few projects that highlight front-end fundamentals, UI polish, and practical engineering decisions."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-indigo-500/10 p-6">
        <div className="text-sm font-semibold text-white">Want more?</div>
        <p className="mt-2 text-sm text-slate-300">
          I can share additional coursework, hackathon projects, or code samples
          tailored to the role.
        </p>
      </div>
    </Section>
  )
}
