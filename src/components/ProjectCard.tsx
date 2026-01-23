import type { Project } from '../data/portfolio'

import { Badge } from './Badge'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl p-px bg-gradient-to-br from-indigo-500/35 via-white/10 to-cyan-400/25 transition hover:from-indigo-400/55 hover:to-cyan-300/35">
      <article className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6 shadow-sm backdrop-blur focus-within:ring-2 focus-within:ring-indigo-400/60">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-indigo-500/18 blur-2xl" />
          <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-cyan-400/12 blur-2xl" />
          <div className="absolute -top-8 right-10 h-32 w-32 rounded-full bg-fuchsia-400/10 blur-2xl" />
        </div>

        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent group-hover:to-indigo-100">
                {project.title}
              </span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-200/70">{project.description}</p>

            {project.highlights.length ? (
              <ul className="mt-4 space-y-2 text-sm text-slate-200/75">
                {project.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-300/80 to-cyan-200/70" aria-hidden="true" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="flex items-center gap-2">
            {project.links.github ? (
              <a
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.06] px-3 py-2 text-sm font-semibold text-slate-100/90 transition hover:border-white/25 hover:bg-white/[0.10] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60"
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
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.06] px-3 py-2 text-sm font-semibold text-slate-100/90 transition hover:border-white/25 hover:bg-white/[0.10] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60"
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
            <Badge key={t} className="transition group-hover:border-white/20 group-hover:from-white/[0.12] group-hover:to-white/[0.06]">
              {t}
            </Badge>
          ))}
        </div>
      </article>
    </div>
  )
}
