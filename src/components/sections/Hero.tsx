import { hero } from '../../data'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Hero() {
  return (
      <section
        id="home"
        aria-labelledby="hero-title"
        className="relative isolate flex min-h-hero items-center overflow-hidden py-12 sm:py-16"
      >
        <div className="hero-atmosphere" aria-hidden="true" />
        <Container className="grid items-center gap-12 lg:grid-cols-hero lg:gap-16">
          <div className="relative z-10 max-w-hero-copy">
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
                <div key={item.label} className="rounded-card border border-ink-700 bg-ink-900/80 p-3">
                  <Button
                    className="w-full justify-start"
                    variant="secondary"
                    size="sm"
                    type="button"
                    disabled
                    aria-describedby={`hero-link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                    <span className="ml-auto text-ink-300" aria-hidden="true">↗</span>
                  </Button>
                  <code
                    id={`hero-link-${item.label.toLowerCase()}`}
                    className="mt-2 block break-all font-mono text-xs leading-4 text-ink-300"
                  >
                    {item.placeholder}
                  </code>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-portrait lg:mr-0">
            <div className="hero-image-frame relative aspect-portrait overflow-hidden rounded-panel border border-ink-700 bg-ink-900">
              <div className="absolute inset-4 rounded-card border border-ink-500/60" aria-hidden="true" />
              <div
                className="relative z-10 grid h-full place-items-center p-8 text-center"
                role="img"
                aria-label={`Profile image placeholder ${hero.profileImage}`}
              >
                <span className="font-mono text-sm tracking-wide text-ink-300">{hero.profileImage}</span>
              </div>
              <span className="absolute left-6 top-6 h-2 w-2 rounded-full bg-amber-400" aria-hidden="true" />
              <span className="absolute bottom-6 right-6 h-2 w-2 rounded-full bg-teal-300" aria-hidden="true" />
            </div>
            <div className="pointer-events-none absolute -bottom-4 -left-4 -z-10 h-1/2 w-1/2 rounded-panel border border-amber-400/30" aria-hidden="true" />
          </div>
        </Container>
      </section>
  )
}
