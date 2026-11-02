import { hero } from '../../data'
import { Container } from '../ui/Container'

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-hero items-center py-20 sm:py-28 lg:py-36"
    >
      <Container className="w-full">
        <div className="w-full max-w-hero-copy text-left">
          <p className="mb-6 font-mono text-xs font-medium uppercase tracking-hud text-teal-300 sm:text-sm">
            <span className="mr-3 inline-block h-px w-6 align-middle bg-teal-300/80" aria-hidden="true" />
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
          <p className="mt-6 max-w-reading text-base leading-relaxed text-ink-300 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            {hero.links.map((item) => (
              <a
                key={item.label}
                className="inline-flex min-h-11 items-center gap-2 rounded-control border border-ink-800 bg-ink-900/40 px-4 text-sm font-medium text-ink-100 transition-[border-color,background-color,color] duration-enter ease-enter hover:border-ink-600 hover:text-white active:translate-y-px focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                download={item.download}
              >
                <span>{item.label}</span>
                <span className="text-ink-500" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
