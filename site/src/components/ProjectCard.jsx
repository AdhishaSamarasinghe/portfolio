import { Badge } from './Badge'
import { Button } from './Button'

export function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-white">{project.title}</h3>
        <div className="flex items-center gap-2">
          {project.links?.code && project.links.code !== '#' && (
            <Button
              as="a"
              href={project.links.code}
              variant="ghost"
              size="sm"
              target="_blank"
              rel="noreferrer"
              className="px-2"
              aria-label={`View code for ${project.title}`}
            >
              Code
            </Button>
          )}
          {project.links?.demo && project.links.demo !== '#' && (
            <Button
              as="a"
              href={project.links.demo}
              variant="ghost"
              size="sm"
              target="_blank"
              rel="noreferrer"
              className="px-2"
              aria-label={`Open demo for ${project.title}`}
            >
              Demo
            </Button>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        {project.description}
      </p>

      {project.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      ) : null}
    </div>
  )
}
