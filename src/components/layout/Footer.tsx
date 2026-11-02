import { contact, footerText, siteText, socialLinks } from '../../data'

export function Footer() {
  return (
    <footer id="contact" className="border-t border-ink-700 bg-ink-900">
      <div className="mx-auto w-full max-w-content px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-reading">
            <p className="font-mono text-xs font-medium uppercase tracking-eyebrow text-teal-300">{footerText.eyebrow}</p>
            <h2 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-ink-100 sm:text-2xl">
              {footerText.heading}
            </h2>
            <p className="mt-2 text-sm leading-6 text-ink-300">{contact.availability}</p>
            <a
              className="mt-4 inline-flex min-h-11 items-center rounded-control bg-amber-400 px-4 text-sm font-semibold text-ink-950 transition-[transform,opacity] duration-enter ease-enter hover:bg-amber-500 active:translate-y-px focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
              href={`mailto:${contact.email}`}
            >
              {footerText.contactAction}
            </a>
          </div>

          <nav aria-label={siteText.socialNavigationLabel}>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="inline-flex min-h-11 items-center text-sm font-medium text-ink-300 underline decoration-ink-700 underline-offset-4 hover:text-teal-300 active:opacity-80 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-ink-700 pt-4 text-xs text-ink-300 sm:flex-row sm:items-center sm:justify-between">
          <p>{footerText.copyrightSymbol} {new Date().getFullYear()} {siteText.brandName}</p>
          <a className="inline-flex min-h-11 w-fit items-center text-ink-300 hover:text-ink-100 active:opacity-80 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400" href="#home">
            {footerText.backToTop} <span className="ml-2 text-amber-400" aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
