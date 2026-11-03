import { skills } from '../../data'
import { Chip, Container, Section, SectionHeading } from '../ui'

export function SkillsSection() {
  return (
    <Section
      id="skills"
      aria-labelledby="skills-title"
      className="border-t border-ink-800/80"
      spacing="compact"
    >
      <Container>
        <SectionHeading eyebrow={skills.eyebrow} title={skills.title} titleId="skills-title" />

        <div className="mt-12 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((category) => (
            <div key={category.name} className="border-t border-ink-800 py-6">
              <h3 className="font-mono text-xs font-medium uppercase tracking-detail text-teal-300">
                {category.name}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li key={item}>
                    <Chip>{item}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
