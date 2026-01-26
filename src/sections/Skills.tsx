import { Badge } from '../components/Badge'
import { Section } from '../components/Section'
import { skills } from '../data/portfolio'

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Tools I use to ship" className="border-t border-white/10">
      <div className="grid gap-5 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="card h-full p-7">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base font-semibold text-white">{category}</h3>
              <span className="text-sm text-slate-200/55">{items.length}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {items.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
