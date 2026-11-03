import { contact, footerText, siteText, socialLinks } from '../../data'
import { ButtonLink, TextLink } from '../ui'

export function Footer() {
  return (
    <footer id="contact" className="border-t border-ink-800/80 bg-ink-950">
      <div className="mx-auto w-full max-w-content px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-reading text-left">
            <p className="font-mono text-xs font-medium uppercase tracking-eyebrow text-teal-300">{footerText.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-display text-ink-100 sm:text-4xl lg:text-5xl">
              {footerText.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">{contact.availability}</p>
            <div className="mt-8">
              <ButtonLink to={`mailto:${contact.email}`} external>
                {footerText.contactAction}
              </ButtonLink>
            </div>
          </div>

          <nav aria-label={siteText.socialNavigationLabel}>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <TextLink href={link.href}>
                    {link.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink-800/80 pt-6 text-xs text-ink-300 sm:mt-24 sm:flex-row sm:items-center sm:justify-between">
          <p>{footerText.copyrightSymbol} {new Date().getFullYear()} {siteText.brandName}</p>
          <a className="inline-flex min-h-11 w-fit items-center text-ink-300 transition-opacity hover:text-ink-100 hover:opacity-90 active:opacity-70 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400" href="#home">
            {footerText.backToTop} <span className="ml-2 text-amber-400" aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
