import React from "react";
import { CheckCircle2, Clock, Calendar } from "lucide-react";

export function RoadmapSection() {
  const completedItems = [
    "Repository Setup & Git Version Control",
    "Pydantic Settings Configuration Management",
    "Layered Modular Monolith Architecture",
    "SQLAlchemy 2.0 Declarative ORM & Engine",
    "Alembic Database Versioned Migrations",
    "Health Check API (Liveness & DB Connectivity)",
    "Ingredient Module (CRUD API & Unit Pricing)",
    "Menu Item Module (CRUD & Availability Tracking)",
    "Recipe Module (1:1 Menu Binding & Portion Scale)",
    "Recipe Ingredient Management (M:N Relations)",
    "Inventory Batch Management (Lot Auto-Numbering)",
  ];

  const currentItems = [
    "Inventory Transaction Ledger (Immutable Audit)",
    "FIFO / FEFO Inventory Consumption Engine",
    "Stock Adjustment & Spoilage Logging API",
    "Low Stock Threshold Notification Triggers",
    "Inventory Valuation & Variance Analytics",
  ];

  const upcomingItems = [
    {
      phase: "Phase 4",
      title: "Advanced Menu Management",
      desc: "Dynamic pricing tiers, seasonal visibility toggles, and multi-menu categorization.",
    },
    {
      phase: "Phase 5",
      title: "Production Simulation",
      desc: "Simulate ingredient depletion, capacity thresholds, and cost estimations prior to kitchen prep.",
    },
    {
      phase: "Phase 6",
      title: "Analytics & Reporting",
      desc: "Historical consumption metrics, ingredient waste analytics, and gross margin reporting.",
    },
    {
      phase: "Phase 7",
      title: "React Frontend Application",
      desc: "Single Page Application using React 19, TypeScript, and Tailwind CSS for kitchen staff and managers.",
    },
    {
      phase: "Phase 8",
      title: "AI-Powered Forecasting & Insights",
      desc: "Predictive demand forecasting, LangChain agents, OCR invoice ingestion, and smart reordering suggestions.",
    },
    {
      phase: "Operations",
      title: "Docker, CI/CD & Cloud Deployment",
      desc: "Containerized deployment pipelines, automated linting/testing, and cloud staging environments.",
    },
  ];

  return (
    <section id="roadmap" aria-labelledby="roadmap-heading" className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800 pt-12 space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
            10 · DEVELOPMENT ROADMAP &amp; MILESTONES
          </span>
        </div>
        <h2 id="roadmap-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans mb-3">
          Engineering Delivery Roadmap
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
          RestaurantAI is developed incrementally through production-oriented phases. In alignment with engineering honesty, the roadmap transparently separates verified completed deliverables from active development and future milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Column 1: Completed */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100 dark:border-zinc-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <h3 className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                  Phase 1 &amp; 2 · Completed
                </h3>
              </div>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/50">
                Verified
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-300">
              {completedItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            100% Backend Core Operational
          </div>
        </div>

        {/* Column 2: Current / In Progress */}
        <div className="rounded-xl border border-amber-300/80 dark:border-amber-700/60 bg-amber-50/20 dark:bg-amber-950/10 p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-200/60 dark:border-amber-800/60">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500" />
                <h3 className="font-mono text-xs font-bold text-amber-900 dark:text-amber-200 uppercase tracking-wider">
                  Phase 3 · In Progress
                </h3>
              </div>
              <span className="text-[10px] font-mono text-amber-700 dark:text-amber-400 bg-amber-100/60 dark:bg-amber-900/40 px-2 py-0.5 rounded border border-amber-300/50 dark:border-amber-700/60">
                Active Sprint
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300">
              {currentItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold shrink-0 mt-0.5">⏳</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-3 border-t border-amber-200/60 dark:border-amber-800/60 text-[11px] font-mono text-amber-700 dark:text-amber-400">
            Focus: FEFO Engine &amp; Stock Ledger
          </div>
        </div>

        {/* Column 3: Upcoming / Future */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                <h3 className="font-mono text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                  Phases 4–8 · Planned
                </h3>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-200/60 dark:bg-zinc-800/60 px-2 py-0.5 rounded border border-zinc-300 dark:border-zinc-700">
                Roadmap
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              {upcomingItems.map((item, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex items-center gap-1.5 font-semibold text-zinc-800 dark:text-zinc-200">
                    <span className="font-mono text-[10px] text-sky-600 dark:text-sky-400">
                      {item.phase}:
                    </span>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight pl-2 border-l border-zinc-200 dark:border-zinc-800">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-zinc-200/80 dark:border-zinc-800 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            Frontend &amp; AI Reserved for Future Sprints
          </div>
        </div>
      </div>
    </section>
  );
}
