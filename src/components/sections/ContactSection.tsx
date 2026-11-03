import { motion, useReducedMotion } from 'framer-motion'
import { contact, contactSection, socialLinks } from '../../data'
import { Container, Section } from '../ui'

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion()

  const motionProps = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.25 },
      }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.45, ease: 'easeOut' as const },
      }

  return (
    <Section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-ink-800/80"
      spacing="spacious"
    >
      <Container>
        <motion.div
          {...motionProps}
          className="mx-auto max-w-2xl text-center flex flex-col items-center"
        >
          {/* Eyebrow */}
          <p className="font-mono text-xs font-semibold uppercase tracking-eyebrow text-teal-300">
            {contactSection.eyebrow}
          </p>

          {/* Large Display Heading */}
          <h2
            id="contact-title"
            className="mt-4 font-display text-4xl font-bold tracking-tight text-ink-100 sm:text-5xl lg:text-6xl leading-[1.08]"
          >
            {contactSection.title}
          </h2>

          {/* Introduction Paragraph */}
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-300 font-normal max-w-xl">
            {contactSection.introduction}
          </p>

          {/* Availability note */}
          <p className="mt-4 font-mono text-xs text-teal-300/80">
            {contact.availability}
          </p>

          {/* Clean Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* Email Primary Button */}
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control bg-amber-400 px-7 text-sm font-semibold text-ink-950 transition-colors duration-enter hover:bg-amber-500 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
            >
              <span>{contactSection.contactAction}</span>
              <span aria-hidden="true">→</span>
            </a>

            {/* Resume Button */}
            <a
              href={contactSection.resumeUrl}
              download={contactSection.resumeDownload}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control border border-ink-800 bg-ink-900/50 px-6 text-sm font-medium text-ink-100 transition-colors duration-enter hover:border-ink-600 hover:text-white focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
            >
              <span>{contactSection.resumeAction}</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Clean Social Text Links */}
          <nav aria-label="Social and direct contact links" className="mt-12">
            <ul className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target={link.id !== 'email' ? '_blank' : undefined}
                    rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 font-medium text-ink-300 underline decoration-ink-800 underline-offset-4 transition-colors duration-enter hover:text-teal-300 hover:decoration-teal-300 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
                  >
                    <span>{link.label}</span>
                    {link.id !== 'email' && (
                      <span className="text-xs text-ink-500" aria-hidden="true">
                        ↗
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </Container>
    </Section>
  )
}

