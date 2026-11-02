import { about } from '../../data'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection() {
  return (
    <Section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-ink-700 bg-ink-900"
      spacing="spacious"
    >
      <Container className="grid items-start gap-8 lg:grid-cols-about lg:gap-16">
        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} titleId="about-title" />
          <div className="mt-6 max-w-reading space-y-4 text-base leading-relaxed text-ink-300 sm:text-lg">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {about.details.map((detail, index) => (
            <Card key={detail.label} className="relative min-h-24 overflow-hidden p-6 sm:p-4 lg:p-6">
              <span className="absolute right-4 top-4 font-mono text-xs text-ink-300" aria-hidden="true">
                0{index + 1}
              </span>
              <p className="font-mono text-xs uppercase tracking-detail text-teal-300">{detail.label}</p>
              <p className="mt-3 font-display text-lg font-medium leading-snug text-ink-100">{detail.value}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
