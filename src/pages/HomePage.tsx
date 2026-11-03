import { Hero } from '../components/sections/Hero'
import { AboutSection } from '../components/sections/AboutSection'
import { SkillsSection } from '../components/sections/SkillsSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { BeyondTheScreenSection } from '../components/sections/BeyondTheScreenSection'

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <BeyondTheScreenSection />
    </main>
  )
}
