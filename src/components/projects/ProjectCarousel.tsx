import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { projects, projectsSection } from '../../data/projects'
import type { Project } from '../../data/projects'
import { ProjectMockup } from './ProjectMockup'
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal'

const SLIDE_TRANSITION_DURATION = 0.28 // 280ms (strictly within 250–300ms)

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for prev, 1 for next
  const [modalProject, setModalProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const containerRef = useRef<HTMLDivElement>(null)

  // Trackpad / Wheel gesture locks and accumulators
  const isWheelLocked = useRef(false)
  const accumulatedDeltaX = useRef(0)
  const wheelEndTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const wheelCooldownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Touch gesture refs
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const touchEndY = useRef<number | null>(null)
  const minSwipeDistance = 45

  // Keyboard throttle
  const lastKeyTime = useRef<number>(0)

  const currentProject = projects[currentIndex]

  const goToPrev = () => {
    setCurrentIndex((prev) => {
      if (prev > 0) {
        setDirection(-1)
        return prev - 1
      }
      return prev
    })
  }

  const goToNext = () => {
    setCurrentIndex((prev) => {
      if (prev < projects.length - 1) {
        setDirection(1)
        return prev + 1
      }
      return prev
    })
  }

  const goToIndex = (index: number) => {
    if (index === currentIndex) return
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const openModal = (project: Project) => {
    setModalProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Trackpad support: two-finger horizontal swipe with rapid navigation prevention
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const SWIPE_THRESHOLD = 35
    const COOLDOWN_DURATION = 400 // ms

    const handleWheel = (e: WheelEvent) => {
      if (isModalOpen) return

      const absX = Math.abs(e.deltaX)
      const absY = Math.abs(e.deltaY)

      // Only trigger when horizontal movement is dominant
      if (absX <= absY) {
        // Allow normal vertical page scrolling unhindered
        return
      }

      // Prevent browser horizontal back/forward history navigation
      if (e.cancelable) {
        e.preventDefault()
      }

      // Reset the inactivity debounce timer on every wheel event
      if (wheelEndTimeout.current) {
        clearTimeout(wheelEndTimeout.current)
      }
      wheelEndTimeout.current = setTimeout(() => {
        // Trackpad momentum has stopped
        isWheelLocked.current = false
        accumulatedDeltaX.current = 0
      }, 150)

      // If currently locked during cooldown from a project change, ignore
      if (isWheelLocked.current) {
        return
      }

      accumulatedDeltaX.current += e.deltaX

      if (accumulatedDeltaX.current >= SWIPE_THRESHOLD) {
        isWheelLocked.current = true
        accumulatedDeltaX.current = 0
        goToNext()

        if (wheelCooldownTimeout.current) {
          clearTimeout(wheelCooldownTimeout.current)
        }
        wheelCooldownTimeout.current = setTimeout(() => {
          isWheelLocked.current = false
        }, COOLDOWN_DURATION)
      } else if (accumulatedDeltaX.current <= -SWIPE_THRESHOLD) {
        isWheelLocked.current = true
        accumulatedDeltaX.current = 0
        goToPrev()

        if (wheelCooldownTimeout.current) {
          clearTimeout(wheelCooldownTimeout.current)
        }
        wheelCooldownTimeout.current = setTimeout(() => {
          isWheelLocked.current = false
        }, COOLDOWN_DURATION)
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
      if (wheelEndTimeout.current) clearTimeout(wheelEndTimeout.current)
      if (wheelCooldownTimeout.current) clearTimeout(wheelCooldownTimeout.current)
    }
  }, [isModalOpen])

  // Keyboard navigation (← and →) with throttle to prevent rapid skipping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) return // Let modal handle ESC and interior keys

      const now = Date.now()
      if (e.key === 'ArrowLeft') {
        if (now - lastKeyTime.current > 300) {
          lastKeyTime.current = now
          goToPrev()
        }
      } else if (e.key === 'ArrowRight') {
        if (now - lastKeyTime.current > 300) {
          lastKeyTime.current = now
          goToNext()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  // Mobile Touch handlers (verifying horizontal dominance)
  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null
    touchEndY.current = null
    touchStartX.current = e.targetTouches[0].clientX
    touchStartY.current = e.targetTouches[0].clientY
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
    touchEndY.current = e.targetTouches[0].clientY
  }

  const onTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null ||
      touchStartY.current === null ||
      touchEndY.current === null
    ) {
      return
    }

    const diffX = touchStartX.current - touchEndX.current
    const diffY = touchStartY.current - touchEndY.current

    // Only trigger if horizontal movement was dominant over vertical movement
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > minSwipeDistance) {
        goToNext()
      } else if (diffX < -minSwipeDistance) {
        goToPrev()
      }
    }
  }

  // Animation variants (strictly opacity and translateX, 250–300ms)
  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? 36 : -36,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? -36 : 36,
    }),
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full text-left"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
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
          transition={{
            duration: SLIDE_TRANSITION_DURATION,
            ease: 'easeOut',
          }}
          className="w-full flex flex-col"
          aria-roledescription="slide"
          aria-label={`${currentProject.title} (${currentIndex + 1} of ${projects.length})`}
        >
          {/* 1. Large Project Preview (clickable to open modal) */}
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

      {/* 6. Navigation (centered below: ←   ● ● ● ●   →) */}
      <nav
        aria-label="Project carousel navigation"
        className="mt-14 flex items-center justify-center gap-6 sm:gap-8 border-t border-ink-800/80 pt-10"
      >
        {/* Left Arrow */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label={projectsSection.prevProjectLabel}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-control border border-ink-800 bg-ink-900/60 text-ink-300 transition-colors duration-enter hover:border-ink-600 hover:text-ink-100 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ink-800 disabled:hover:text-ink-300 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
        >
          <span className="text-lg leading-none" aria-hidden="true">←</span>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Project slides">
          {projects.map((project, idx) => {
            const isActive = idx === currentIndex
            return (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${idx + 1}: ${project.title}`}
                onClick={() => goToIndex(idx)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
              >
                <span
                  className={`h-2.5 rounded-full transition-all duration-enter ${isActive
                      ? 'w-7 bg-amber-400'
                      : 'w-2.5 bg-ink-700 hover:bg-ink-500'
                    }`}
                  aria-hidden="true"
                />
              </button>
            )
          })}
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={goToNext}
          aria-label={projectsSection.nextProjectLabel}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-control border border-ink-800 bg-ink-900/60 text-ink-300 transition-colors duration-enter hover:border-ink-600 hover:text-ink-100 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ink-800 disabled:hover:text-ink-300 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
        >
          <span className="text-lg leading-none" aria-hidden="true">→</span>
        </button>
      </nav>

      {/* Case Study Fullscreen Modal */}
      <ProjectCaseStudyModal
        project={modalProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  )
}

