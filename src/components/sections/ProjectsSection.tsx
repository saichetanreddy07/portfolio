import { useState } from 'react'
import { projects, projectsSection } from '../../data/projects'
import type { Project } from '../../data/projects'
import { Container, Section, SectionHeading } from '../ui'
import { ProjectCard } from '../projects/ProjectCard'
import { ProjectDetailsDialog } from '../projects/ProjectDetailsDialog'

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <Section id="projects" aria-labelledby="projects-title" className="border-t border-ink-800/80" spacing="default">
      <Container>
        <SectionHeading
          title={projectsSection.title}
          titleId="projects-title"
          description={projectsSection.introduction}
        />

        <div className="mt-12 border-b border-ink-800/80">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              expanded={selectedProject?.id === project.id}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </Container>

      <ProjectDetailsDialog project={selectedProject} onDismiss={() => setSelectedProject(null)} />
    </Section>
  )
}
