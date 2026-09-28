import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, Database, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";
import { Button } from "@/components/common/Button";

interface CaseStudyHeaderProps {
  githubUrl?: string;
  backUrl?: string;
}

export function CaseStudyHeader({
  githubUrl = "https://github.com/saichetanreddy07/Restaurant-AI",
  backUrl = "/#projects",
}: CaseStudyHeaderProps) {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 pb-10 pt-6">
      {/* Top Breadcrumbs & Action Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <Link
            href={backUrl}
            className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500 rounded px-1 -ml-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Projects</span>
          </Link>
          <span>/</span>
          <span className="text-zinc-700 dark:text-zinc-300 font-medium">Case Studies</span>
          <span>/</span>
          <span className="text-sky-600 dark:text-sky-400 font-semibold">RestaurantAI</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button
            href={backUrl}
            variant="secondary"
            size="sm"
            icon={<ArrowLeft className="w-3.5 h-3.5" />}
            iconPosition="left"
          >
            Back to Projects
          </Button>

          <Button
            href={githubUrl}
            isExternal
            variant="primary"
            size="sm"
            icon={<GithubIcon className="w-3.5 h-3.5" />}
            iconPosition="left"
          >
            View GitHub Repository
          </Button>
        </div>
      </div>

      {/* Main Header Information */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            Backend Foundation Complete
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60">
            <Cpu className="w-3 h-3 text-zinc-500" />
            FastAPI · Modular Monolith
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60">
            <Database className="w-3 h-3 text-zinc-500" />
            MySQL + SQLAlchemy + Alembic
          </span>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans">
            RestaurantAI
          </h1>
          <p className="text-lg sm:text-xl font-medium text-zinc-800 dark:text-zinc-200 mt-2">
            Restaurant Operations Management System
          </p>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal mt-1 max-w-3xl">
            Backend-first Restaurant Operations Management Platform
          </p>
        </div>
      </div>
    </header>
  );
}
