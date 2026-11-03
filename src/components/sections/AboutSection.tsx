import { about } from '../../data'
import { Card, Container, Section, SectionHeading } from '../ui'

export function AboutSection() {
  return (
    <Section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-ink-800/80 bg-ink-950"
      spacing="default"
    >
      <Container className="grid items-start gap-12 lg:grid-cols-about lg:gap-20">
        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} titleId="about-title" />
          <div className="mt-8 max-w-reading space-y-5 text-base leading-relaxed text-ink-300 sm:text-lg">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {about.details.map((detail, index) => (
            <Card key={detail.label} className="relative min-h-24 p-6">
              <span className="absolute right-5 top-5 font-mono text-xs text-ink-500" aria-hidden="true">
                0{index + 1}
              </span>
              <p className="font-mono text-xs uppercase tracking-detail text-teal-300">{detail.label}</p>
              <p className="mt-2 font-display text-lg sm:text-xl font-medium leading-snug text-ink-100">{detail.value}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
