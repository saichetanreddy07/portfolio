import { Outlet } from 'react-router'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { siteText } from '../data'

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-950 font-sans text-ink-100">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-amber-400 focus:px-4 focus:py-3 focus:font-semibold focus:text-ink-950 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400"
        href="#main-content"
      >
        {siteText.skipToMainLabel}
      </a>
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
