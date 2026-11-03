import type { Project } from '../../data/projects'
import { projectsSection } from '../../data/projects'
import { Button, Chip } from '../ui'
import { ProjectPattern } from './ProjectPattern'
import { ProjectTechList } from './ProjectTechList'

const accentClasses = {
  danger: 'text-danger',
  teal: 'text-teal-300',
  warning: 'text-warning',
  amber: 'text-amber-400',
} as const

interface ProjectCardProps {
  project: Project
  expanded: boolean
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, expanded, onOpen }: ProjectCardProps) {
  return (
    <article data-project-theme={project.theme.themeKey} className="relative grid gap-5 border-t border-ink-800/80 py-8 sm:gap-6 sm:py-10 md:grid-cols-project md:gap-12 md:py-12">
      <ProjectPattern pattern={project.theme.pattern} className={accentClasses[project.theme.accent]} />
      <div className="relative">
        <p className={`font-mono text-xs font-medium tracking-detail ${accentClasses[project.theme.accent]}`}>
          <span className="text-ink-500">{project.index}</span>
          <span className="sr-only">. </span>
        </p>
        <h3 className="mt-4 max-w-reading font-display text-2xl font-semibold tracking-display text-ink-100 sm:text-3xl">
          {project.title}
        </h3>
        {project.status && (
          <Chip className="mt-4" tone={project.status.tone}>{project.status.label}</Chip>
        )}
      </div>

      <div className="relative flex flex-col items-start gap-5">
        <p className="max-w-reading text-base leading-relaxed text-ink-300 sm:text-lg">
          {project.shortDescription}
        </p>
        <ProjectTechList technologies={project.featuredTechnologies} label={`${project.title} technologies`} />
        <Button
          aria-controls="project-details"
          aria-expanded={expanded}
          className="mt-auto"
          variant="quiet"
          onClick={() => onOpen(project)}
        >
          {projectsSection.openDetails}
          <span aria-hidden="true" className="text-teal-300">↗</span>
        </Button>
      </div>
    </article>
  )
}
