import { useEffect, useRef, useState } from 'react'
import { navigation, siteText } from '../../data'

const ACTIVE_SECTION_ROOT_MARGIN = '-20% 0px -60% 0px'

function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const syncHash = () => {
      const id = window.location.hash.slice(1)
      if (id && navigation.some((item) => item.href === `#${id}`)) setActiveSection(id)
      else if (!id) setActiveSection('home')
    }

    const sections = navigation
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => section !== null)

    if (typeof window.IntersectionObserver === 'undefined') {
      let animationFrame = 0
      const syncOnScroll = () => {
        cancelAnimationFrame(animationFrame)
        animationFrame = requestAnimationFrame(() => {
          const scanLine = window.scrollY + window.innerHeight * 0.3
          const current = sections.filter((section) => section.offsetTop <= scanLine).at(-1)
          setActiveSection(current?.id ?? 'home')
        })
      }

      window.addEventListener('scroll', syncOnScroll, { passive: true })
      window.addEventListener('resize', syncOnScroll)
      window.addEventListener('hashchange', syncOnScroll)
      syncOnScroll()
      return () => {
        cancelAnimationFrame(animationFrame)
        window.removeEventListener('scroll', syncOnScroll)
        window.removeEventListener('resize', syncOnScroll)
        window.removeEventListener('hashchange', syncOnScroll)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]?.target.id) setActiveSection(visible[0].target.id)
      },
      { rootMargin: ACTIVE_SECTION_ROOT_MARGIN, threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('hashchange', syncHash)
    syncHash()

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', syncHash)
    }
  }, [])

  return activeSection
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection()
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMobileMenu = () => {
    if (!mobileOpen) return
    setMobileOpen(false)
    menuButtonRef.current?.focus()
  }

  useEffect(() => {
    if (!mobileOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-40 border-b border-ink-700 bg-ink-950">
      <div className="mx-auto flex w-full max-w-content flex-wrap items-center justify-between gap-x-6 px-4 sm:px-6 lg:px-8">
        <a
          className="flex min-h-16 shrink-0 items-center rounded-control font-display text-base font-semibold tracking-tight text-ink-100 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400 sm:text-lg"
          href="#home"
          aria-label={siteText.brandHomeLabel}
          onClick={closeMobileMenu}
        >
          {siteText.brandName}<span className="text-amber-400">.</span>
        </a>

        <button
          ref={menuButtonRef}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-control border border-ink-700 text-ink-100 transition-[transform,opacity] duration-enter ease-enter active:translate-y-px hover:border-ink-300 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400 lg:hidden"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? siteText.closeMenuLabel : siteText.openMenuLabel}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="flex w-4 flex-col gap-1" aria-hidden="true">
            <span className={`h-px w-full bg-current transition-transform duration-enter ${mobileOpen ? 'translate-y-1 rotate-45' : ''}`} />
            <span className={`h-px w-full bg-current transition-transform duration-enter ${mobileOpen ? '-translate-y-1 -rotate-45' : ''}`} />
          </span>
        </button>

        <nav
          id="primary-navigation"
          aria-label={siteText.primaryNavigationLabel}
          className={`${mobileOpen ? 'block' : 'hidden'} order-3 w-full border-t border-ink-700 py-3 lg:order-none lg:block lg:w-auto lg:border-0 lg:py-0`}
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-2">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              const isContact = item.href === '#contact'
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`flex min-h-11 items-center gap-2 rounded-control px-3 text-sm font-medium transition-opacity duration-enter ease-enter hover:opacity-90 active:opacity-80 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400 ${
                      isContact && isActive
                        ? 'border border-amber-400 bg-amber-400 text-ink-950'
                        : isContact
                          ? 'border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-ink-950'
                          : isActive
                            ? 'bg-ink-800 text-amber-400'
                            : 'text-ink-300 hover:bg-ink-900 hover:text-ink-100'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <span className="font-mono text-xs text-teal-300" aria-hidden="true">{item.index}</span>
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

      </div>
    </header>
  )
}
