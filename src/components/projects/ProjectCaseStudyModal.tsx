import { useEffect, useLayoutEffect, useRef } from 'react'
import type { Project } from '../../data/projects'
import { projectsSection } from '../../data/projects'
import { Chip } from '../ui'
import { ProjectMockup } from './ProjectMockup'

interface ProjectCaseStudyModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectCaseStudyModal({ project, isOpen, onClose }: ProjectCaseStudyModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen && project) {
      previousActiveElement.current = document.activeElement as HTMLElement
      if (!dialog.open) {
        dialog.showModal()
      }
      document.body.style.overflow = 'hidden'
      closeButtonRef.current?.focus()
    } else if (!isOpen && dialog.open) {
      dialog.close()
      document.body.style.overflow = ''
      previousActiveElement.current?.focus()
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, project])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleCancel = (e: Event) => {
      e.preventDefault()
      onClose()
    }

    dialog.addEventListener('cancel', handleCancel)
    return () => dialog.removeEventListener('cancel', handleCancel)
  }, [onClose])

  if (!project) return null

  return (
    <dialog
      ref={dialogRef}
      id="case-study-modal"
      aria-labelledby="case-study-title"
      aria-modal="true"
      className="fixed inset-0 m-0 h-screen w-screen max-h-none max-w-none border-0 bg-ink-950 p-0 text-ink-100 overflow-y-auto overscroll-contain backdrop:bg-ink-950/80 backdrop:backdrop-blur-sm z-50"
      onClick={(event) => {
        // Light-dismiss click outside check
        const dialog = dialogRef.current
        if (!dialog) return
        if (event.target === dialog) {
          onClose()
        }
      }}
    >
      <div className="min-h-screen w-full flex flex-col bg-ink-950">
        {/* Sticky Header Bar */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-ink-800/80 bg-ink-950/95 px-6 py-4 backdrop-blur-md sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-teal-300">
              {project.index} • {project.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-ink-700" aria-hidden="true" />
            <span className="font-mono text-xs text-ink-500">{project.year}</span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={projectsSection.closeModalLabel}
            className="inline-flex min-h-11 items-center gap-2 rounded-control border border-ink-800 bg-ink-900/60 px-4 text-xs font-mono text-ink-300 transition-colors duration-enter hover:border-ink-600 hover:text-ink-100 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
          >
            <span>Esc</span>
            <span aria-hidden="true">✕</span>
          </button>
        </header>

        {/* Modal Body */}
        <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-10 sm:px-8 sm:py-16">
          {/* Title and Eyebrow */}
          <div className="mb-10 text-left">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-300">
              Case Study
            </p>
            <h2
              id="case-study-title"
              className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-100 sm:text-5xl lg:text-6xl leading-[1.05]"
            >
              {project.title}
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-ink-300 leading-relaxed font-normal">
              {project.shortDescription}
            </p>
          </div>

          {/* Hero Image / Mockup */}
          <div className="mb-16">
            <ProjectMockup project={project} className="w-full aspect-[16/10] min-h-[300px] sm:min-h-[420px]" />
          </div>

          {/* Case Study Details Grid */}
          <div className="space-y-12">
            {/* Overview */}
            <section className="border-t border-ink-800/80 pt-8">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-300">
                {projectsSection.overviewLabel}
              </h3>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-ink-100 font-normal">
                {project.overview}
              </p>
            </section>

            {/* Problem & Solution */}
            <div className="grid gap-10 sm:grid-cols-2 border-t border-ink-800/80 pt-8">
              <section>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-300">
                  {projectsSection.problemLabel}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-300">
                  {project.problem}
                </p>
              </section>

              <section>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-300">
                  {projectsSection.solutionLabel}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-300">
                  {project.approach}
                </p>
              </section>
            </div>

            {/* Features */}
            <section className="border-t border-ink-800/80 pt-8">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-300">
                {projectsSection.featuresLabel}
              </h3>
              <ul className="mt-4 space-y-2.5 list-disc pl-5 marker:text-teal-300 text-base leading-relaxed text-ink-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </section>

            {/* Technologies */}
            <section className="border-t border-ink-800/80 pt-8">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-300">
                {projectsSection.technologiesLabel}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Chip key={tech} className="px-3 py-1 text-xs">
                    {tech}
                  </Chip>
                ))}
              </div>
            </section>

            {/* Challenges & Key Learnings */}
            <div className="grid gap-10 sm:grid-cols-2 border-t border-ink-800/80 pt-8">
              <section>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-300">
                  {projectsSection.challengesLabel}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-300">
                  {project.challenges}
                </p>
              </section>

              <section>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-300">
                  {projectsSection.whatItTaughtMeLabel}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-300">
                  {project.lessonsLearned}
                </p>
              </section>
            </div>

            {/* Additional Screenshots (if available) */}
            {project.additionalScreenshots && project.additionalScreenshots.length > 0 && (
              <section className="border-t border-ink-800/80 pt-8">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-300">
                  {projectsSection.additionalScreenshotsLabel}
                </h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {project.additionalScreenshots.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-panel border border-ink-800/80 bg-ink-900/50 p-5 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-ink-800/60 font-mono text-xs text-teal-300">
                        <span>{item.label}</span>
                        <span className="text-ink-500">Diagram / Spec</span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-ink-300">
                        {item.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Action Buttons */}
            <section className="border-t border-ink-800/80 pt-10 pb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control bg-amber-400 px-6 text-sm font-semibold text-ink-950 transition-colors duration-enter hover:bg-amber-500 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
                  >
                    <span>{projectsSection.githubLabel}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control border border-teal-300/40 bg-teal-300/10 px-6 text-sm font-medium text-teal-300 transition-colors duration-enter hover:border-teal-300 hover:text-white focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
                  >
                    <span>{projectsSection.liveDemoLabel}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-11 items-center justify-center rounded-control border border-ink-800 bg-ink-900/60 px-6 text-sm font-medium text-ink-300 transition-colors duration-enter hover:border-ink-600 hover:text-ink-100 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
              >
                {projectsSection.closeModalLabel}
              </button>
            </section>
          </div>
        </main>
      </div>
    </dialog>
  )
}

