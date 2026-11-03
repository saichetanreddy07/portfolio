import { projects, projectsSection } from '../../data/projects'
import { Container, SectionHeading } from '../ui'
import { ProjectView } from '../projects/ProjectView'

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-ink-800/80">
      {/* Editorial Section Introduction */}
      <div className="border-b border-ink-800/80 py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow={projectsSection.eyebrow}
            title={projectsSection.title}
            titleId="projects-title"
            description={projectsSection.introduction}
          />
        </Container>
      </div>

      {/* Immersive Viewport Projects Flow */}
      <div className="snap-y snap-proximity">
        {projects.map((project) => (
          <ProjectView key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
