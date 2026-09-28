import React from "react";

export function OverviewSection() {
  return (
    <div className="space-y-16">
      {/* 01 · OVERVIEW */}
      <section id="overview" aria-labelledby="overview-heading" className="scroll-mt-24">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
            01 · SYSTEM OVERVIEW
          </span>
        </div>
        <h2 id="overview-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans mb-4">
          Core Purpose &amp; Domain Boundaries
        </h2>
        <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4">
          <p className="text-base sm:text-lg">
            <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">RestaurantAI</strong> is designed as a modular backend platform that manages restaurant operations including inventory, recipes, production planning, and operational workflows.
          </p>
          <p>
            Unlike customer ordering systems (e-commerce or customer delivery apps), RestaurantAI focuses strictly on <strong className="text-zinc-900 dark:text-zinc-100">internal operational efficiency</strong>. It addresses the backend workflows that drive commercial kitchen operations: master ingredient catalogs, standardized recipe formulation, batch-level inventory tracking with expiration dates, and automated availability calculation.
          </p>
          <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-sm">
            <p className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wide mb-1">
              Architectural Objective
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              The architecture has been designed so additional modules—such as Production Simulation, Analytics &amp; Reporting, and future AI agents—can be introduced without significant restructuring or schema breakages.
            </p>
          </div>
        </div>
      </section>

      {/* 02 · PROBLEM */}
      <section id="problem" aria-labelledby="problem-heading" className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800 pt-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
            02 · THE ENGINEERING PROBLEM
          </span>
        </div>
        <h2 id="problem-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans mb-4">
          Decoupled State &amp; Operational Inefficiencies
        </h2>
        <div className="text-zinc-600 dark:text-zinc-300 space-y-4 leading-relaxed">
          <p>
            Restaurants often rely on disconnected systems or manual spreadsheets to manage ingredients, recipes, and inventory. This fragmented operational model causes severe system inconsistencies:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                Inventory Wastage &amp; Spoilage
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                Perishable items spoil unnoticed when inventory is tracked as coarse aggregate quantities rather than discrete batches with explicit expiration dates.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                Inaccurate Stock &amp; Drift
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                Disjointed POS and inventory databases cause stock drift, where menu items remain active despite depleting essential sub-ingredients.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                Manual Calculations &amp; Error Prone Yields
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                Kitchen supervisors perform manual unit conversions (grams to kg, milliliters to liters) and hand-calculate batch yield costs.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                Opaque Operational Visibility
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                Management lacks centralized, real-time auditability over unit costs, ingredient-level consumption, and supplier batch performance.
              </p>
            </div>
          </div>
          <p>
            <strong>RestaurantAI</strong> centralizes these workflows inside a modular backend architecture designed for scalability, ACID transactional integrity, and maintainability.
          </p>
        </div>
      </section>

      {/* 03 · SOLUTION */}
      <section id="solution" aria-labelledby="solution-heading" className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800 pt-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
            03 · ARCHITECTURAL SOLUTION
          </span>
        </div>
        <h2 id="solution-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans mb-4">
          Layered, Decoupled Backend Architecture
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
          The engineering solution replaces fragmented scripts and loose spreadsheets with an enterprise-grade modular monolith adhering to clean architectural boundaries:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1">
              01 · LAYERED ARCHITECTURE
            </div>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
              Separation of Concerns
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Routers handle HTTP transport; Services encapsulate business logic; Models define database schemas. No leaking of raw SQL into API endpoints.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1">
              02 · REST APIS
            </div>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
              Standardized HTTP Endpoints
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Deterministic status codes (200, 201, 404, 409, 422), structured error representations, and fully auto-generated OpenAPI 3.1 documentation.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1">
              03 · SQLALCHEMY ORM
            </div>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
              Declarative Relational Mapping
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Explicit model relationships (1:1, 1:N, M:N junction tables), identity mapping, and query isolation ensuring zero N+1 database hazards.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1">
              04 · ALEMBIC MIGRATIONS
            </div>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
              Deterministic Database Evolution
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Version-controlled database schema migrations. Every index, table alteration, and foreign key constraint is audited and repeatable in Git.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1">
              05 · MODULAR SERVICES
            </div>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
              Domain-Isolated Modules
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Ingredients, Recipes, Menus, and Batches live in encapsulated directories. Unidirectional dependencies prevent circular coupling.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1">
              06 · PYDANTIC VALIDATION
            </div>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
              Runtime Type Safety &amp; DTOs
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Strict schema parsing eliminates malformed payloads before execution reaches domain services. Automatic serialization strips sensitive fields.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1">
              07 · CONFIGURATION MANAGEMENT
            </div>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
              Type-Safe Environment Config
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Environment variables validated at startup via Pydantic Settings. Prevents runtime boot failures due to missing credentials.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1">
              08 · DEPENDENCY INJECTION
            </div>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
              Scoped Session Management
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              FastAPI&apos;s <code className="font-mono text-[11px] bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">Depends(get_db)</code> yields isolated SQLAlchemy sessions per request, guaranteeing safe auto-close on error or completion.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1">
              09 · FUTURE FRONTEND INTEGRATION
            </div>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
              Contract-First REST Architecture
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Clean OpenAPI contracts guarantee that the planned React + TypeScript single-page application integrates seamlessly without backend modifications.
            </p>
          </div>
        </div>
      </section>

      {/* 04 · TECHNICAL STACK */}
      <section id="tech-stack" aria-labelledby="tech-stack-heading" className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800 pt-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
            04 · TECHNICAL STACK
          </span>
        </div>
        <h2 id="tech-stack-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans mb-4">
          Grouped Technology Architecture
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
          Technologies are categorized strictly by architectural responsibility rather than presented as an uncontextualized logo cloud:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Backend Stack */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100 dark:border-zinc-800/80">
              <span className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                Backend
              </span>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/50">
                Active
              </span>
            </div>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Python 3.11+</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">Primary backend language</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">FastAPI</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">High performance async web framework</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">SQLAlchemy</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">2.0 declarative relational ORM</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Pydantic</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">Data validation &amp; settings management</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Database Stack */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100 dark:border-zinc-800/80">
              <span className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                Database
              </span>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/50">
                Active
              </span>
            </div>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">MySQL 8.0</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">InnoDB relational storage engine</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Alembic</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">Version-controlled schema migrations</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">PyMySQL</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">Pure Python DBAPI database driver</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">3NF Normalization</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">Integrity-first relational schema</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Architecture Stack */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100 dark:border-zinc-800/80">
              <span className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                Architecture
              </span>
              <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 px-2 py-0.5 rounded border border-sky-200 dark:border-sky-800/50">
                Pattern
              </span>
            </div>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Modular Monolith</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">Domain encapsulation pattern</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Layered Architecture</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">Routers → Services → Models</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Dependency Injection</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">FastAPI Depends() container</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">REST Protocol</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">Strict HTTP verbs &amp; status codes</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Future Tier */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 p-5">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200/80 dark:border-zinc-800">
              <span className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                Future Frontend
              </span>
              <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800/50">
                Planned
              </span>
            </div>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300 block">React SPA</span>
                  <span className="text-zinc-400 dark:text-zinc-500 text-[11px]">Single page application interface</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300 block">TypeScript</span>
                  <span className="text-zinc-400 dark:text-zinc-500 text-[11px]">End-to-end typed contracts</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300 block">Tailwind CSS</span>
                  <span className="text-zinc-400 dark:text-zinc-500 text-[11px]">Utility-first operational UI design</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300 block">AI Agent Modules</span>
                  <span className="text-zinc-400 dark:text-zinc-500 text-[11px]">LangChain &amp; forecasting (Future)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
