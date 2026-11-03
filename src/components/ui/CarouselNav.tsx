/**
 * CarouselNav
 *
 * Reusable ← dots → navigation bar used across all carousels.
 * Matches the existing ProjectCarousel nav design exactly.
 */

interface CarouselNavProps {
  count: number
  currentIndex: number
  onPrev: () => void
  onNext: () => void
  onGoTo: (index: number) => void
  /** Label for the nav landmark */
  ariaLabel?: string
  /** Accessible label for each dot – receives the index (1-based) */
  dotLabel?: (index: number) => string
  prevLabel?: string
  nextLabel?: string
}

export function CarouselNav({
  count,
  currentIndex,
  onPrev,
  onNext,
  onGoTo,
  ariaLabel = 'Carousel navigation',
  dotLabel = (i) => `Go to slide ${i}`,
  prevLabel = 'Previous',
  nextLabel = 'Next',
}: CarouselNavProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className="mt-14 flex items-center justify-center gap-6 sm:gap-8 border-t border-ink-800/80 pt-10"
    >
      {/* Left Arrow */}
      <button
        type="button"
        onClick={onPrev}
        aria-label={prevLabel}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-control border border-ink-800 bg-ink-900/60 text-ink-300 transition-colors duration-enter hover:border-ink-600 hover:text-ink-100 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
      >
        <span className="text-lg leading-none" aria-hidden="true">
          ←
        </span>
      </button>

      {/* Dots */}
      <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
        {Array.from({ length: count }, (_, idx) => {
          const isActive = idx === currentIndex
          return (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={dotLabel(idx + 1)}
              onClick={() => onGoTo(idx)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
            >
              <span
                className={`h-2.5 rounded-full transition-all duration-enter ${
                  isActive ? 'w-7 bg-amber-400' : 'w-2.5 bg-ink-700 hover:bg-ink-500'
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
        onClick={onNext}
        aria-label={nextLabel}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-control border border-ink-800 bg-ink-900/60 text-ink-300 transition-colors duration-enter hover:border-ink-600 hover:text-ink-100 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
      >
        <span className="text-lg leading-none" aria-hidden="true">
          →
        </span>
      </button>
    </nav>
  )
}

