import { Badge } from '../components/Badge'
import { Section } from '../components/Section'
import { skills } from '../data/profile'

function SkillGroup({ title, items }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I use to build"
      description="A practical, internship-focused stack—easy to adapt based on team needs."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Frameworks" items={skills.frameworks} />
        <SkillGroup title="Tools" items={skills.tools} />
        <SkillGroup title="Concepts" items={skills.concepts} />
      </div>
    </Section>
  )
}
