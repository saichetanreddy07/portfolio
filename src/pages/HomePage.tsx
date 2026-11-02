import { Hero } from '../components/sections/Hero'
import { AboutSection } from '../components/sections/AboutSection'

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <AboutSection />
    </main>
  )
}
