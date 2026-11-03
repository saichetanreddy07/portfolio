import { useLayoutEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import type { Project } from '../../data/projects'
import { projectsSection } from '../../data/projects'
import { Button, ButtonLink } from '../ui'
import { ProjectTechList } from './ProjectTechList'

interface ProjectDetailsDialogProps {
  project: Project | null
  onDismiss: () => void
}

function DetailBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-ink-800/80 pt-5">
      <h3 className="font-mono text-xs font-medium uppercase tracking-detail text-teal-300">{title}</h3>
      <div className="mt-3 text-base leading-relaxed text-ink-300">{children}</div>
    </section>
  )
}

export function ProjectDetailsDialog({ project, onDismiss }: ProjectDetailsDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (project && !dialog.open) {
      dialog.showModal()
      closeButtonRef.current?.focus()
    } else if (!project && dialog.open) {
      dialog.close()
    }
  }, [project])

  return (
    <dialog
      ref={dialogRef}
      id="project-details"
      aria-labelledby={project ? 'project-details-title' : undefined}
      aria-describedby={project ? 'project-details-summary' : undefined}
      className={`project-dialog rounded-panel border border-ink-800 text-ink-100 shadow-overlay ${project?.theme.surface === 'ink-950' ? 'bg-ink-950' : 'bg-ink-900'}`}
      onClose={onDismiss}
      onClick={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        const isOutside = event.clientX < bounds.left || event.clientX > bounds.right ||
          event.clientY < bounds.top || event.clientY > bounds.bottom
        if (isOutside) onDismiss()
      }}
    >
      {project && (
        <div className="flex max-h-project-dialog flex-col">
          <header className="flex items-start justify-between gap-6 border-b border-ink-800/80 p-6 sm:p-8">
            <div className="min-w-0">
              <p className="font-mono text-xs font-medium uppercase tracking-detail text-teal-300">
                {projectsSection.detailsDialogLabel} <span aria-hidden="true">/ {project.index}</span>
              </p>
              <h2 id="project-details-title" className="mt-3 font-display text-2xl font-semibold tracking-display text-ink-100 sm:text-3xl">
                {project.title}
              </h2>
              <p id="project-details-summary" className="mt-3 max-w-reading text-sm leading-relaxed text-ink-300 sm:text-base">
                {project.shortDescription}
              </p>
            </div>
            <Button
              ref={closeButtonRef}
              className="shrink-0"
              variant="quiet"
              size="sm"
              onClick={onDismiss}
            >
              {projectsSection.closeDetails}
            </Button>
          </header>

          <div className="max-h-project-details space-y-6 overflow-y-auto overscroll-contain p-6 sm:p-8">
            {project.motivation && (
              <DetailBlock title={projectsSection.motivationLabel}>{project.motivation}</DetailBlock>
            )}
            <DetailBlock title={projectsSection.problemLabel}>{project.problem}</DetailBlock>
            <DetailBlock title={projectsSection.approachLabel}>{project.approach}</DetailBlock>
            <DetailBlock title={projectsSection.highlightsLabel}>
              <ul className="list-disc space-y-2 pl-5 marker:text-teal-300">
                {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </DetailBlock>
            <DetailBlock title={projectsSection.technologiesLabel}>
              <ProjectTechList technologies={project.technologies} />
            </DetailBlock>
            <DetailBlock title={projectsSection.lessonsLabel}>{project.lessonsLearned}</DetailBlock>

            {(project.liveDemoUrl || project.githubUrl) && (
              <nav aria-label={`${project.title} project actions`} className="flex flex-wrap gap-3 border-t border-ink-800/80 pt-6">
                {project.liveDemoUrl && (
                  <ButtonLink to={project.liveDemoUrl} external target="_blank" rel="noopener noreferrer" size="sm">
                    {projectsSection.liveDemoLabel}
                  </ButtonLink>
                )}
                {project.githubUrl && (
                  <ButtonLink to={project.githubUrl} external target="_blank" rel="noopener noreferrer" size="sm" variant="secondary">
                    {projectsSection.githubLabel}
                    <span aria-hidden="true">↗</span>
                  </ButtonLink>
                )}
              </nav>
            )}
          </div>
        </div>
      )}
    </dialog>
  )
}
