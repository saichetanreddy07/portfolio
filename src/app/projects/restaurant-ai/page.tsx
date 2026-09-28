import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { CaseStudyHeader } from "@/components/case-study/restaurant-ai/CaseStudyHeader";
import { ProjectSnapshot } from "@/components/case-study/restaurant-ai/ProjectSnapshot";
import { OverviewSection } from "@/components/case-study/restaurant-ai/OverviewSection";
import { SystemDesignSection } from "@/components/case-study/restaurant-ai/SystemDesignSection";
import { BusinessWorkflowsSection } from "@/components/case-study/restaurant-ai/BusinessWorkflowsSection";
import { EngineeringDecisionsSection } from "@/components/case-study/restaurant-ai/EngineeringDecisionsSection";
import { EngineeringChallengesSection } from "@/components/case-study/restaurant-ai/EngineeringChallengesSection";
import { EngineeringTakeawaysSection } from "@/components/case-study/restaurant-ai/EngineeringTakeawaysSection";
import { RoadmapSection } from "@/components/case-study/restaurant-ai/RoadmapSection";
import { DocumentationNav } from "@/components/case-study/restaurant-ai/DocumentationNav";
import { ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";
import { Button } from "@/components/common/Button";

export const metadata: Metadata = {
  title: "RestaurantAI — Engineering Case Study | Backend System Design",
  description:
    "Engineering case study of RestaurantAI: a modular backend-first restaurant operations management platform built with Python, FastAPI, SQLAlchemy, MySQL, and Alembic migrations.",
  keywords: [
    "RestaurantAI",
    "FastAPI",
    "SQLAlchemy",
    "MySQL",
    "Alembic",
    "Modular Monolith",
    "System Design",
    "Backend Engineering",
    "Database Normalization",
    "FEFO Inventory",
  ],
  openGraph: {
    title: "RestaurantAI — Engineering Case Study",
    description:
      "Detailed architectural documentation of RestaurantAI: modular monolith backend, normalized 3NF database schema, and FEFO inventory engine.",
    type: "article",
  },
};

export default function RestaurantAiCaseStudyPage() {
  const GITHUB_REPO_URL = "https://github.com/saichetanreddy07/Restaurant-AI";

  return (
    <article className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans pb-24">
      <Container>
        {/* Header Section */}
        <CaseStudyHeader githubUrl={GITHUB_REPO_URL} backUrl="/#projects" />

        {/* Project Snapshot Card */}
        <ProjectSnapshot />

        {/* Two-Column Documentation Layout (Content + Sticky Table of Contents) */}
        <div className="flex gap-12 lg:gap-16 pt-4">
          {/* Main Documentation Body */}
          <div className="flex-1 min-w-0 max-w-4xl space-y-16">
            <OverviewSection />
            <SystemDesignSection />
            <BusinessWorkflowsSection />
            <EngineeringDecisionsSection />
            <EngineeringChallengesSection />
            <EngineeringTakeawaysSection />
            <RoadmapSection />

            {/* Bottom Footer Action Area */}
            <section
              aria-label="Case study conclusion and navigation"
              className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <Button
                href="/#projects"
                variant="secondary"
                size="md"
                icon={<ArrowLeft className="w-4 h-4" />}
                iconPosition="left"
              >
                Back to Projects
              </Button>

              <div className="flex items-center gap-3">
                <Button
                  href={GITHUB_REPO_URL}
                  isExternal
                  variant="primary"
                  size="md"
                  icon={<GithubIcon className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Explore Backend on GitHub
                </Button>
              </div>
            </section>
          </div>

          {/* Right Sticky Table of Contents (Desktop) */}
          <DocumentationNav />
        </div>
      </Container>
    </article>
  );
}
