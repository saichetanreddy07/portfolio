import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, projectsSection } from '../../data/projects'
import type { Project } from '../../data/projects'
import { ProjectMockup } from './ProjectMockup'
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal'
import { CarouselNav } from '../ui'
import { useCarousel } from '../../hooks/useCarousel'

const SLIDE_DURATION = 0.28 // 280 ms — within the 250–300 ms spec

export function ProjectCarousel() {
  const [modalProject, setModalProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  const { currentIndex, direction, shouldReduceMotion, goToPrev, goToNext, goToIndex, touchHandlers } =
    useCarousel(projects.length, containerRef, isModalOpen)

  const currentProject = projects[currentIndex]

  const openModal = (project: Project) => {
    setModalProject(project)
    setIsModalOpen(true)
  }
  const closeModal = () => setIsModalOpen(false)

  // Animate only opacity + translateX, respect prefers-reduced-motion
  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? 36 : -36,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? -36 : 36,
    }),
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full text-left"
      {...touchHandlers}
    >
      {/* Active Project Slide */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.article
          key={currentProject.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: SLIDE_DURATION, ease: 'easeOut' }}
          className="w-full flex flex-col"
          aria-roledescription="slide"
          aria-label={`${currentProject.title} (${currentIndex + 1} of ${projects.length})`}
        >
          {/* 1. Large Project Preview (clickable → modal) */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => openModal(currentProject)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                openModal(currentProject)
              }
            }}
            aria-label={`Open ${currentProject.title} case study`}
            className="group relative w-full cursor-pointer overflow-hidden rounded-panel border border-ink-800/80 transition-colors duration-enter hover:border-ink-600 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
          >
            <ProjectMockup
              project={currentProject}
              className="w-full aspect-[16/10] sm:aspect-[16/9] min-h-[280px] sm:min-h-[400px] lg:min-h-[460px]"
            />
            <div className="absolute bottom-4 right-4 z-10 hidden sm:inline-flex items-center gap-1.5 rounded-control border border-ink-800/80 bg-ink-950/90 px-3 py-1.5 font-mono text-xs text-ink-300 opacity-90 transition-opacity group-hover:opacity-100">
              <span>View Case Study</span>
              <span className="text-teal-300" aria-hidden="true">↗</span>
            </div>
          </div>

          {/* 2. Project Title */}
          <h3 className="mt-8 font-display text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl lg:text-5xl leading-[1.08]">
            {currentProject.title}
          </h3>

          {/* 3. Category & Year */}
          <p className="mt-2 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal-300">
            {currentProject.category} • {currentProject.year}
          </p>

          {/* 4. Short Description */}
          <p className="mt-4 max-w-reading text-base sm:text-lg leading-relaxed text-ink-300 font-normal">
            {currentProject.shortDescription}
          </p>

          {/* 5. Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => openModal(currentProject)}
              className="inline-flex min-h-11 items-center justify-center rounded-control bg-amber-400 px-6 text-sm font-semibold text-ink-950 transition-colors duration-enter hover:bg-amber-500 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
            >
              {projectsSection.viewCaseStudy}
            </button>

            {currentProject.githubUrl && (
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control border border-ink-800 bg-ink-900/50 px-5 text-sm font-medium text-ink-100 transition-colors duration-enter hover:border-ink-600 hover:text-white focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
              >
                <span>{projectsSection.githubLabel}</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}

            {currentProject.liveDemoUrl && (
              <a
                href={currentProject.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control border border-teal-300/40 bg-teal-300/10 px-5 text-sm font-medium text-teal-300 transition-colors duration-enter hover:border-teal-300 hover:text-white focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
              >
                <span>{projectsSection.liveDemoLabel}</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </motion.article>
      </AnimatePresence>

      {/* Navigation */}
      <CarouselNav
        count={projects.length}
        currentIndex={currentIndex}
        onPrev={goToPrev}
        onNext={goToNext}
        onGoTo={goToIndex}
        ariaLabel="Project carousel navigation"
        dotLabel={(i) => `Go to project ${i}: ${projects[i - 1]?.title ?? ''}`}
        prevLabel={projectsSection.prevProjectLabel}
        nextLabel={projectsSection.nextProjectLabel}
      />

      {/* Case Study Fullscreen Modal */}
      <ProjectCaseStudyModal
        project={modalProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  )
}
