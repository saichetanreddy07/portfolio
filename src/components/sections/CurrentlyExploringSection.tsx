import { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { currentlyExploring } from '../../data'
import { CarouselNav, Chip, Container, Section, SectionHeading } from '../ui'
import { useCarousel } from '../../hooks/useCarousel'

const SLIDE_DURATION = 0.28

export function CurrentlyExploringSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const items = currentlyExploring.items

  const { currentIndex, direction, shouldReduceMotion, goToPrev, goToNext, goToIndex, touchHandlers } =
    useCarousel(items.length, containerRef)

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

  const item = items[currentIndex]

  return (
    <Section
      id="exploring"
      aria-labelledby="exploring-title"
      className="border-t border-ink-800/80"
      spacing="default"
    >
      <Container>
        {/* Section Header */}
        <SectionHeading
          eyebrow={currentlyExploring.eyebrow}
          title={currentlyExploring.title}
          titleId="exploring-title"
          description={currentlyExploring.introduction}
          className="text-left"
        />

        {/* Carousel */}
        <div
          ref={containerRef}
          className="mt-12 sm:mt-16"
          {...touchHandlers}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={item.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: SLIDE_DURATION, ease: 'easeOut' }}
              tabIndex={0}
              aria-roledescription="slide"
              aria-label={`${item.title} (${currentIndex + 1} of ${items.length})`}
              aria-labelledby={`exploring-${item.id}`}
              className="group relative flex flex-col justify-between rounded-panel border border-ink-800/80 bg-ink-900/40 p-6 sm:p-7 text-left transition-[border-color,background-color] duration-enter hover:border-ink-600 hover:bg-ink-900/60 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
            >
              <div>
                {/* Top Header: Category Tag & Status Dot */}
                <div className="flex items-center justify-between gap-3">
                  <Chip className="border-teal-300/30 bg-teal-300/5 text-[11px] text-teal-300 font-mono">
                    {item.tag}
                  </Chip>
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                    <span className="font-mono text-[11px] text-ink-500">
                      0{currentIndex + 1}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  id={`exploring-${item.id}`}
                  className="mt-5 font-display text-xl font-bold tracking-tight text-ink-100 sm:text-2xl transition-colors duration-enter group-hover:text-amber-400"
                >
                  {item.title}
                </h3>

                {/* One Concise Sentence */}
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-300 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Status Cue */}
              <div className="mt-6 pt-4 border-t border-ink-800/60 flex items-center justify-between text-xs font-mono text-ink-500">
                <span className="text-[11px] uppercase tracking-wider text-ink-500 group-hover:text-ink-300 transition-colors">
                  Active Curiosity
                </span>
                <span
                  className="text-ink-500 transition-transform duration-enter group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            </motion.article>
          </AnimatePresence>

          <CarouselNav
            count={items.length}
            currentIndex={currentIndex}
            onPrev={goToPrev}
            onNext={goToNext}
            onGoTo={goToIndex}
            ariaLabel="Currently Exploring carousel navigation"
            dotLabel={(i) => `Go to slide ${i}: ${items[i - 1]?.title ?? ''}`}
            prevLabel="Previous topic"
            nextLabel="Next topic"
          />
        </div>
      </Container>
    </Section>
  )
}
