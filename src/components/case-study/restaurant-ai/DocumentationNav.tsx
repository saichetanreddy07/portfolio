"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ListTree } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavSection {
  id: string;
  title: string;
  subsections?: { id: string; title: string }[];
}

const SECTIONS: NavSection[] = [
  { id: "overview", title: "01 · Overview" },
  { id: "problem", title: "02 · The Problem" },
  { id: "solution", title: "03 · Solution" },
  { id: "tech-stack", title: "04 · Technical Stack" },
  {
    id: "system-design",
    title: "05 · System Design",
    subsections: [
      { id: "overall-architecture", title: "Overall Architecture" },
      { id: "backend-architecture", title: "Backend Architecture" },
      { id: "database-design", title: "Database Design (ERD)" },
      { id: "module-dependencies", title: "Module Dependencies" },
      { id: "project-structure", title: "Project Structure" },
    ],
  },
  {
    id: "business-workflows",
    title: "06 · Business Workflows",
    subsections: [
      { id: "inventory-management-workflow", title: "Inventory Lifecycle" },
      { id: "order-processing-workflow", title: "Order Consumption" },
      { id: "availability-engine-workflow", title: "Availability Engine" },
      { id: "fefo-consumption-workflow", title: "FEFO Strategy" },
      { id: "request-lifecycle", title: "Request Lifecycle" },
    ],
  },
  { id: "engineering-decisions", title: "07 · Architectural Decisions" },
  { id: "engineering-challenges", title: "08 · Technical Challenges" },
  { id: "engineering-takeaways", title: "09 · Takeaways" },
  { id: "roadmap", title: "10 · Roadmap & Delivery" },
];

export function DocumentationNav() {
  const [activeId, setActiveId] = useState<string>("overview");

  useEffect(() => {
    const handleScroll = () => {
      const allIds = SECTIONS.flatMap((s) => [s.id, ...(s.subsections?.map((sub) => sub.id) || [])]);
      const scrollPos = window.scrollY + 120;

      for (let i = allIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(allIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(allIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Table of contents"
      className="hidden xl:block w-64 shrink-0 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-4 text-xs font-mono"
    >
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500 font-semibold uppercase tracking-wider text-[11px]">
        <ListTree className="w-3.5 h-3.5" />
        <span>Document Index</span>
      </div>

      <nav className="space-y-1">
        {SECTIONS.map((section) => {
          const isActive =
            activeId === section.id ||
            section.subsections?.some((sub) => sub.id === activeId);

          return (
            <div key={section.id} className="space-y-1">
              <Link
                href={`#${section.id}`}
                className={cn(
                  "block py-1 px-2 rounded transition-colors truncate",
                  activeId === section.id
                    ? "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900/60"
                )}
              >
                {section.title}
              </Link>

              {section.subsections && isActive && (
                <div className="pl-3.5 ml-2 border-l border-zinc-200 dark:border-zinc-800 space-y-1">
                  {section.subsections.map((sub) => (
                    <Link
                      key={sub.id}
                      href={`#${sub.id}`}
                      className={cn(
                        "block py-0.5 px-1.5 rounded text-[11px] transition-colors truncate",
                        activeId === sub.id
                          ? "text-sky-600 dark:text-sky-400 font-semibold"
                          : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                      )}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* GitHub Repository Reference Quick Box */}
      <div className="mt-8 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 text-[11px] text-zinc-500 dark:text-zinc-400 space-y-2">
        <p className="font-semibold text-zinc-700 dark:text-zinc-300">
          Source Repository
        </p>
        <p className="text-[10px] leading-relaxed">
          Python 3.11+, FastAPI, SQLAlchemy, Alembic, MySQL 8.0.
        </p>
        <a
          href="https://github.com/saichetanreddy07/Restaurant-AI"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 dark:text-sky-400 hover:underline block pt-1"
        >
          github.com/saichetanreddy07/Restaurant-AI →
        </a>
      </div>
    </aside>
  );
}
