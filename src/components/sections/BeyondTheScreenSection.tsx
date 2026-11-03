import { motion, useReducedMotion } from 'framer-motion'
import { beyondTheScreen } from '../../data'
import { Container, Section, SectionHeading } from '../ui'

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

export function BeyondTheScreenSection() {
  const shouldReduceMotion = useReducedMotion()

  const motionProps = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.25 },
      }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.45, ease: 'easeOut' as const },
      }

  const [photography, wildlife, cricket] = beyondTheScreen.items

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

        {/* Engaging Editorial Layout with Varied Spacing */}
        <div className="mt-14 space-y-8 sm:mt-16 sm:space-y-10">
          {/* 1. Featured Spotlight: Photography */}
          {photography && (
            <motion.article
              {...motionProps}
              className="relative overflow-hidden rounded-panel border border-ink-800/80 bg-ink-900/40 p-8 sm:p-10 lg:p-12 transition-colors duration-enter hover:border-ink-700 text-left"
            >
              <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                {/* Left Metadata & Title */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-control border border-ink-800 bg-ink-950/80">
                      <PhotographyIcon />
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-teal-300">
                        {photography.index} • {photography.tagline}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
                    {photography.title}
                  </h3>

                  {/* Viewfinder Framing Graphic */}
                  <div className="mt-6 hidden sm:flex items-center gap-2 text-ink-700 font-mono text-[11px]" aria-hidden="true">
                    <span>[ 35mm f/1.8 ]</span>
                    <span className="h-px w-12 bg-ink-800" />
                    <span className="text-teal-300/80">ISO 100</span>
                  </div>
                </div>

                {/* Right Description & Quote */}
                <div className="flex flex-col justify-between gap-6 lg:col-span-7">
                  <p className="text-base sm:text-lg leading-relaxed text-ink-300 font-normal">
                    {photography.description}
                  </p>

                  <div className="pt-4 border-t border-ink-800/60 flex items-center justify-between">
                    <span className="font-mono text-xs text-ink-500">
                      Observation & Composition
                    </span>
                    <span className="font-mono text-xs text-teal-300">
                      {photography.cue}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          {/* 2 & 3. Asymmetric Editorial Grid: Wildlife Conservation & Cricket */}
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Wildlife Conservation (Wider column: 7 cols) */}
            {wildlife && (
              <motion.article
                {...motionProps}
                className="flex flex-col justify-between rounded-panel border border-ink-800/80 bg-ink-900/40 p-8 sm:p-10 transition-colors duration-enter hover:border-ink-700 lg:col-span-7 text-left"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-ink-800/60 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-control border border-ink-800 bg-ink-950/80">
                        <WildlifeIcon />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-teal-300">
                        {wildlife.index} • {wildlife.tagline}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-ink-500">Curiosity</span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink-100 sm:text-3xl">
                    {wildlife.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-ink-300 font-normal">
                    {wildlife.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-ink-800/60 flex items-center justify-between">
                  <span className="font-mono text-xs text-ink-500">
                    Biodiversity & Neural Regeneration
                  </span>
                  <span className="inline-flex items-center rounded-control border border-teal-300/30 bg-teal-300/10 px-2.5 py-1 font-mono text-[11px] text-teal-300">
                    {wildlife.cue}
                  </span>
                </div>
              </motion.article>
            )}

            {/* Cricket (5 cols) */}
            {cricket && (
              <motion.article
                {...motionProps}
                className="flex flex-col justify-between rounded-panel border border-ink-800/80 bg-ink-900/40 p-8 sm:p-10 transition-colors duration-enter hover:border-ink-700 lg:col-span-5 text-left"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-ink-800/60 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-control border border-ink-800 bg-ink-950/80">
                        <CricketIcon />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-teal-300">
                        {cricket.index} • {cricket.tagline}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-ink-500">Patience</span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink-100 sm:text-3xl">
                    {cricket.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-ink-300 font-normal">
                    {cricket.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-ink-800/60 flex items-center justify-between">
                  <span className="font-mono text-xs text-ink-500">
                    Tactics & Composure
                  </span>
                  <span className="inline-flex items-center rounded-control border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 font-mono text-[11px] text-amber-400">
                    {cricket.cue}
                  </span>
                </div>
              </motion.article>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}
