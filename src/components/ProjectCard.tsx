import type { Project } from '../data/portfolio'

import { Badge } from './Badge'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-indigo-500/10 focus-within:ring-2 focus-within:ring-indigo-400/60"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/15 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
      </div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover:from-white group-hover:to-indigo-100">
              {project.title}
            </span>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-200/70">{project.description}</p>

          {project.highlights.length ? (
            <ul className="mt-4 space-y-2 text-sm text-slate-200/75">
              {project.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300/70" aria-hidden="true" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          {project.links.github ? (
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-100/90 transition hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60"
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span className="text-slate-200/60 transition group-hover:translate-x-0.5 group-hover:text-slate-100/80">
                →
              </span>
            </a>
          ) : null}
          {project.links.live ? (
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-100/90 transition hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60"
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
            >
              Live
              <span className="text-slate-200/60 transition group-hover:translate-x-0.5 group-hover:text-slate-100/80">
                ↗
              </span>
            </a>
          ) : null}
        </div>
      </div>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t} className="transition group-hover:border-white/20 group-hover:bg-white/10">
            {t}
          </Badge>
        ))}
      </div>
    </article>
  )
}
