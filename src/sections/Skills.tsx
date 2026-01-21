import { Badge } from '../components/Badge'
import { Section } from '../components/Section'
import { skills } from '../data/portfolio'

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Tools I use to ship" className="border-t border-white/10">
      <div className="grid gap-6 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="surface p-6">
            <h3 className="text-sm font-semibold">{category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
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
