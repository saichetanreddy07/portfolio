import { projectsSection } from '../../data/projects'
import { Container, Section, SectionHeading } from '../ui'
import { ProjectCarousel } from '../projects/ProjectCarousel'

export function ProjectsSection() {
  return (
    <Section id="projects" aria-labelledby="projects-title" className="border-t border-ink-800/80" spacing="default">
      <Container>
        <SectionHeading
          title={projectsSection.title}
          titleId="projects-title"
          description={projectsSection.introduction}
          className="mb-12 sm:mb-16 text-left"
        />

        <ProjectCarousel />
      </Container>
    </Section>
  )
}
