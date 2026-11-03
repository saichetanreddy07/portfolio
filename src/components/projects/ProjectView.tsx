import { motion, useReducedMotion } from 'framer-motion'
import type { Project } from '../../data/projects'
import { projectsSection } from '../../data/projects'
import { Chip, Container } from '../ui'
import { ProjectMockup } from './ProjectMockup'

interface ProjectViewProps {
  project: Project
}

export function ProjectView({ project }: ProjectViewProps) {
  const shouldReduceMotion = useReducedMotion()

  const motionProps = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.2 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.45, ease: 'easeOut' as const },
      }

  return (
    <article
      id={project.id}
      aria-labelledby={`project-title-${project.id}`}
      className="relative flex min-h-screen w-full flex-col justify-center border-t border-ink-800/80 py-16 sm:py-20 lg:py-24 snap-start"
    >
      <Container className="flex w-full flex-1 flex-col justify-between gap-12 lg:gap-16">
        {/* Top: Left typography, Right mockup */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left: Large typography */}
          <div className="flex flex-col items-start lg:col-span-6 xl:col-span-5">
            {/* Project Category & Year */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-300">
                {project.index} • {project.category}
              </span>
              <span className="h-1 w-1 rounded-full bg-ink-700" aria-hidden="true" />
              <span className="font-mono text-xs text-ink-500">{project.year}</span>
              {project.status && (
                <span className="ml-1 inline-flex items-center rounded-control border border-warning/40 bg-warning/10 px-2 py-0.5 font-mono text-[11px] text-warning">
                  {project.status.label}
                </span>
              )}
            </div>

            {/* Large Project Title */}
            <h3
              id={`project-title-${project.id}`}
              className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-100 sm:text-5xl lg:text-5xl xl:text-6xl"
            >
              {project.title}
            </h3>

            {/* One-Line Hook */}
            <p className="mt-5 max-w-xl text-base font-normal leading-relaxed text-ink-300 sm:text-lg">
              {project.shortDescription}
            </p>

            {/* Actions: GitHub & Live Demo */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control bg-amber-400 px-5 text-sm font-semibold text-ink-950 transition-colors duration-enter hover:bg-amber-500 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
                >
                  <span>{projectsSection.githubLabel}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}

              {project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control border border-ink-800 bg-ink-900/50 px-5 text-sm font-medium text-ink-100 transition-colors duration-enter hover:border-ink-600 hover:text-white focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
                >
                  <span>{projectsSection.liveDemoLabel}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span
                  className="inline-flex min-h-11 select-none items-center justify-center rounded-control border border-ink-800/80 bg-ink-900/30 px-4 font-mono text-xs text-ink-500"
                  aria-disabled="true"
                >
                  {projectsSection.liveDemoComingSoon}
                </span>
              )}
            </div>
          </div>

          {/* Right: Large Project Mockup */}
          <motion.div {...motionProps} className="w-full lg:col-span-6 xl:col-span-7">
            <ProjectMockup project={project} className="min-h-[300px] w-full sm:min-h-[340px]" />
          </motion.div>
        </div>

        {/* Below: Project Details */}
        <div className="border-t border-ink-800/80 pt-8 lg:pt-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {/* Problem */}
            <div>
              <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-teal-300">
                {projectsSection.problemLabel}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-teal-300">
                {projectsSection.solutionLabel}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {project.approach}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-teal-300">
                {projectsSection.technologiesLabel}
              </h4>
              <ul aria-label={`${project.title} technologies`} className="mt-2.5 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    <Chip className="px-2 py-0.5 text-[11px]">{tech}</Chip>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Learnings */}
            <div>
              <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-teal-300">
                {projectsSection.lessonsLabel}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {project.lessonsLearned}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </article>
  )
}
