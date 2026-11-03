import { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { beyondTheScreen } from '../../data'
import { CarouselNav, Container, Section, SectionHeading } from '../ui'
import { useCarousel } from '../../hooks/useCarousel'

// ─── Icons ───────────────────────────────────────────────────────────────────

function PhotographyIcon() {
  return (
    <svg
      className="h-6 w-6 text-teal-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}

function WildlifeIcon() {
  return (
    <svg
      className="h-6 w-6 text-teal-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z" />
      <path d="M12 22V12" />
      <path d="M12 12c2.5-2.5 5-2 5-2s.5 2.5-2 5-3 2-3 2" />
      <path d="M12 16c-2-1.5-4-1-4-1s-.5 2 1.5 3.5 2.5 1 2.5 1" />
    </svg>
  )
}

function CricketIcon() {
  return (
    <svg
      className="h-6 w-6 text-teal-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="6" y1="4" x2="6" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="18" y1="4" x2="18" y2="20" />
      <line x1="4" y1="4" x2="20" y2="4" />
      <circle cx="12" cy="15" r="2.5" className="fill-amber-400 stroke-amber-400" />
    </svg>
  )
}

const ICONS = [PhotographyIcon, WildlifeIcon, CricketIcon]

// Footer metadata labels per item (matched by index, keeps original card copy)
const FOOTER_LEFT = ['Observation & Composition', 'Biodiversity & Neural Regeneration', 'Tactics & Composure']
const FOOTER_CUE_CLASS = [
  'font-mono text-xs text-teal-300', // photography
  'inline-flex items-center rounded-control border border-teal-300/30 bg-teal-300/10 px-2.5 py-1 font-mono text-[11px] text-teal-300', // wildlife
  'inline-flex items-center rounded-control border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 font-mono text-[11px] text-amber-400', // cricket
]

const SLIDE_DURATION = 0.28

export function BeyondTheScreenSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const items = beyondTheScreen.items

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
  const Icon = ICONS[currentIndex] ?? ICONS[0]

  return (
    <Section
      id="beyond-code"
      aria-labelledby="beyond-title"
      className="border-t border-ink-800/80"
      spacing="default"
    >
      <Container>
        {/* Section Header */}
        <SectionHeading
          eyebrow={beyondTheScreen.eyebrow}
          title={beyondTheScreen.title}
          titleId="beyond-title"
          description={beyondTheScreen.introduction}
          className="text-left"
        />

        {/* Carousel */}
        <div
          ref={containerRef}
          className="mt-14 sm:mt-16"
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
              aria-roledescription="slide"
              aria-label={`${item.title} (${currentIndex + 1} of ${items.length})`}
              className="relative overflow-hidden rounded-panel border border-ink-800/80 bg-ink-900/40 p-8 sm:p-10 lg:p-12 transition-colors duration-enter hover:border-ink-700 text-left"
            >
              <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                {/* Left: Icon, eyebrow, title */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-control border border-ink-800 bg-ink-950/80">
                      <Icon />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-teal-300">
                      {item.index} • {item.tagline}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
                    {item.title}
                  </h3>

                  {/* Photography-specific viewfinder detail */}
                  {currentIndex === 0 && (
                    <div
                      className="mt-6 hidden sm:flex items-center gap-2 text-ink-700 font-mono text-[11px]"
                      aria-hidden="true"
                    >
                      <span>[ 35mm f/1.8 ]</span>
                      <span className="h-px w-12 bg-ink-800" />
                      <span className="text-teal-300/80">ISO 100</span>
                    </div>
                  )}
                </div>

                {/* Right: description + footer cue */}
                <div className="flex flex-col justify-between gap-6 lg:col-span-7">
                  <p className="text-base sm:text-lg leading-relaxed text-ink-300 font-normal">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-ink-800/60 flex items-center justify-between">
                    <span className="font-mono text-xs text-ink-500">
                      {FOOTER_LEFT[currentIndex]}
                    </span>
                    <span className={FOOTER_CUE_CLASS[currentIndex]}>
                      {item.cue}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <CarouselNav
            count={items.length}
            currentIndex={currentIndex}
            onPrev={goToPrev}
            onNext={goToNext}
            onGoTo={goToIndex}
            ariaLabel="Beyond the Screen carousel navigation"
            dotLabel={(i) => `Go to slide ${i}: ${items[i - 1]?.title ?? ''}`}
            prevLabel="Previous interest"
            nextLabel="Next interest"
          />
        </div>
      </Container>
    </Section>
  )
}
