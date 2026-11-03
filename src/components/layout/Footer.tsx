import { footerText, siteText } from '../../data'
import { Container } from '../ui'

export function Footer() {
  return (
    <footer className="border-t border-ink-800/80 bg-ink-950 py-8 sm:py-10">
      <Container>
        <div className="flex flex-col gap-4 text-xs text-ink-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {footerText.copyrightSymbol} {new Date().getFullYear()} {siteText.brandName}
          </p>
          <a
            className="inline-flex min-h-11 w-fit items-center text-ink-300 transition-opacity hover:text-ink-100 hover:opacity-90 active:opacity-70 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
            href="#home"
          >
            <span>{footerText.backToTop}</span>
            <span className="ml-2 text-amber-400" aria-hidden="true">↑</span>
          </a>
        </div>
      </Container>
    </footer>
  )
}
