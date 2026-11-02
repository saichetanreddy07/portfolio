import { contact, footerText, siteText, socialLinks } from '../../data'

export function Footer() {
  return (
    <footer id="contact" className="border-t border-ink-800/80 bg-ink-950">
      <div className="mx-auto w-full max-w-content px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-reading text-left">
            <p className="font-mono text-xs font-medium uppercase tracking-eyebrow text-teal-300">{footerText.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink-100 sm:text-4xl lg:text-5xl">
              {footerText.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">{contact.availability}</p>
            <div className="mt-8">
              <a
                className="inline-flex min-h-11 items-center rounded-control bg-amber-400 px-5 text-sm font-semibold text-ink-950 transition-[background-color,transform] duration-enter ease-enter hover:bg-amber-500 active:translate-y-px focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
                href={`mailto:${contact.email}`}
              >
                {footerText.contactAction}
              </a>
            </div>
          </div>

          <nav aria-label={siteText.socialNavigationLabel}>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="inline-flex min-h-11 items-center text-sm font-medium text-ink-300 underline decoration-ink-800 underline-offset-4 transition-[color,text-decoration-color] duration-enter ease-enter hover:text-teal-300 hover:decoration-teal-300 active:opacity-80 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink-800/80 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between sm:mt-24">
          <p>{footerText.copyrightSymbol} {new Date().getFullYear()} {siteText.brandName}</p>
          <a className="inline-flex min-h-11 w-fit items-center text-ink-300 transition-colors hover:text-ink-100 active:opacity-80 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400" href="#home">
            {footerText.backToTop} <span className="ml-2 text-amber-400" aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
