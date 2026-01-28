import type { Project } from '../data/portfolio'

import { Badge } from './Badge'
import { cn } from '../lib/cn'

function ActionLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-100/90 transition will-change-transform shadow-sm shadow-black/[0.15]',
        'hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white hover:shadow-black/25',
      )}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <span className="text-slate-200/60">↗</span>
    </a>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card flex h-full flex-col p-7">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
          <p className="mt-2 text-base leading-relaxed text-slate-200/75">{project.description}</p>
        </div>

        <div className="flex items-start gap-2">
          {project.links.github ? <ActionLink href={project.links.github}>GitHub</ActionLink> : null}
          {project.links.live ? <ActionLink href={project.links.live}>Live</ActionLink> : null}
        </div>
      </div>

      {project.highlights.length ? (
        <ul className="mt-5 space-y-3 text-base text-slate-200/75">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-indigo/80 to-brand-cyan/70"
                aria-hidden="true"
              />
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2.5">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </article>
  )
}
