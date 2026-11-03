import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { hero, heroSocialLinks } from '../../data'
import { ButtonLink, Container, TextLink } from '../ui'

const HERO_WORD_INTERVAL_MS = 2800
const HERO_WORD_TRANSITION_SECONDS = 0.18
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(REDUCED_MOTION_QUERY).matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY)
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || hero.rotatingWords.length < 2) return
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % hero.rotatingWords.length)
    }, HERO_WORD_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [prefersReducedMotion])

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-hero items-center py-20 sm:py-28 lg:py-36"
    >
      <Container className="w-full">
        <div className="w-full max-w-hero-copy text-left">
          <h1
            id="hero-title"
            className="font-display text-hero-title font-bold tracking-display text-ink-100"
          >
            {hero.greeting}
          </h1>

          <h2 className="mt-4 max-w-hero-lead font-display text-hero-lead font-normal tracking-lead text-ink-300">
            <span>{hero.rotatingPrefix} </span>
            <span className="inline-block font-semibold text-amber-400">
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  key={hero.rotatingWords[wordIndex]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : HERO_WORD_TRANSITION_SECONDS, ease: 'easeOut' }}
                  className="inline-block"
                >
                  {hero.rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>

          <p className="mt-8 font-mono text-xs font-medium uppercase tracking-detail text-teal-300 sm:text-sm">
            {hero.focus}
          </p>

          <p className="mt-4 max-w-reading text-base leading-relaxed text-ink-300 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <ButtonLink to={hero.viewWorkHref} external size="lg">
              {hero.viewWorkLabel}
            </ButtonLink>

            <ButtonLink
              to={hero.resume.href}
              download={hero.resume.download}
              variant="secondary"
              external
            >
              {hero.resume.label}
            </ButtonLink>

            <div className="flex items-center gap-5 sm:ml-2">
              {heroSocialLinks.map((item) => (
                <TextLink
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="gap-1"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-ink-500" aria-hidden="true">↗</span>
                </TextLink>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
