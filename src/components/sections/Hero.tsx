import { hero } from '../../data'
import { Container } from '../ui/Container'

export function Hero() {
  return (
      <section
        id="home"
        aria-labelledby="hero-title"
        className="relative isolate flex min-h-hero items-center overflow-hidden py-12 sm:py-16"
      >
        <div className="hero-atmosphere" aria-hidden="true" />
        <Container className="w-full">
          <div className="relative z-10 mx-auto w-full max-w-hero-copy">
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-hud text-teal-300 sm:text-sm">
              <span className="mr-3 inline-block h-px w-6 align-middle bg-teal-300" aria-hidden="true" />
              {hero.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="break-words font-display text-hero-title font-bold tracking-display text-ink-100"
            >
              {hero.name}
            </h1>
            <p className="mt-6 max-w-hero-lead font-display text-hero-lead font-medium tracking-lead text-ink-100">
              {hero.tagline}
            </p>
            <p className="mt-4 max-w-reading text-base leading-relaxed text-ink-300 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-8 grid max-w-hero-links gap-3 sm:grid-cols-3">
              {hero.links.map((item) => (
                <a
                  key={item.label}
                  className="group block rounded-card border border-ink-700 bg-ink-900/80 p-3 transition-[transform,opacity] duration-enter ease-enter hover:opacity-90 active:translate-y-px focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  download={item.download}
                >
                  <span className="flex min-h-11 w-full items-center justify-between rounded-control border border-ink-700 bg-ink-900 px-3 text-sm font-semibold text-ink-100 transition-[transform,opacity] duration-enter ease-enter group-hover:border-ink-300 group-active:translate-y-px group-active:bg-ink-800">
                    {item.label}
                    <span className="text-ink-300" aria-hidden="true">↗</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
  )
}
