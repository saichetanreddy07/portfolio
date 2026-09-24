import { ArrowDown, FileDown, Mail, User } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { SITE_CONFIG } from "@/constants/site";

export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden"
    >
      {/* Subtle background ambient gradient mesh - strictly restrained, no neon */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/5 dark:bg-sky-500/10 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Main content (col-span-8) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Status indicator badge */}
            <div>
              <Badge variant="status">
                {SITE_CONFIG.status}
              </Badge>
            </div>

            {/* Candidate Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                {SITE_CONFIG.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-sky-600 dark:text-sky-400">
                {SITE_CONFIG.role} · Machine Learning & Systems Builder
              </p>
            </div>

            {/* Factual, verified summary */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
              Recent Computer Science (Artificial Intelligence) graduate from{" "}
              <span className="text-zinc-900 dark:text-zinc-100 font-medium">
                {SITE_CONFIG.education.institution}
              </span>
              . I build end-to-end AI applications, Retrieval-Augmented Generation (RAG) pipelines,
              modular FastAPI backend systems, and data analytics platforms with an emphasis on
              software architecture, system design, and clean engineering practices.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowDown className="w-4 h-4" />}
                iconPosition="right"
              >
                View Projects
              </Button>

              <Button
                href={SITE_CONFIG.resumeUrl}
                download="Sai_Chetan_Resume.pdf"
                variant="outline"
                size="lg"
                icon={<FileDown className="w-4 h-4" />}
                iconPosition="left"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 max-w-md">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                  aria-label="Send direct email"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image Placeholder (col-span-4) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl border-2 border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-3 flex flex-col items-center justify-center text-center transition-all group hover:border-zinc-400 dark:hover:border-zinc-700">
              {/* Inner Avatar Graphic */}
              <div className="w-28 h-28 rounded-2xl bg-zinc-200/80 dark:bg-zinc-800/80 flex items-center justify-center text-zinc-400 dark:text-zinc-500 mb-4 transition-transform group-hover:scale-105">
                <User className="w-12 h-12 stroke-[1.5]" />
              </div>

              {/* Explicit placeholder text (NO stock photos) */}
              <div className="space-y-1 px-4">
                <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  Profile Photo
                </p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                  Reserved placeholder for professional headshot
                </p>
              </div>

              {/* Tag in corner */}
              <span className="absolute top-3 right-3 font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400">
                Placeholder
              </span>
            </div>
          </div>
        </div>

        {/* Engineering quick signals banner */}
        <div className="mt-16 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60">
            <span className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Flagship Project
            </span>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Restaurant AI
            </span>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
              Modular operations platform (FastAPI, MySQL)
            </p>
          </div>

          <div className="p-3 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60">
            <span className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Generative AI
            </span>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              PokéDex AI
            </span>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
              RAG & semantic search (ChromaDB, Ollama)
            </p>
          </div>

          <div className="p-3 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60">
            <span className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Data Engineering
            </span>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              SQL BI Platform
            </span>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
              ETL & analytics warehouse (PostgreSQL, Power BI)
            </p>
          </div>

          <div className="p-3 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60">
            <span className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Machine Learning
            </span>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Meta-Learning
            </span>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
              Automated model selection (Time-Series, Prophet)
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
