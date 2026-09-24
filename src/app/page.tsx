import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section (Phase 1 Deliverable) */}
      <HeroSection />

      {/* 
        Phase 1 Foundation Anchors:
        These anchor points support the navigation hierarchy while keeping
        Phase 1 strictly focused on the foundation, layout, and hero.
      */}
      <div id="about" tabIndex={-1} aria-hidden="true" className="sr-only" />
      <div id="projects" tabIndex={-1} aria-hidden="true" className="sr-only" />
      <div id="skills" tabIndex={-1} aria-hidden="true" className="sr-only" />
      <div id="education" tabIndex={-1} aria-hidden="true" className="sr-only" />
      <div id="contact" tabIndex={-1} aria-hidden="true" className="sr-only" />
    </div>
  );
}

