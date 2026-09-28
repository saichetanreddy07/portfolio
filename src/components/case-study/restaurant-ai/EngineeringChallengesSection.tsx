import React from "react";

export function EngineeringChallengesSection() {
  const challenges = [
    {
      title: "Modeling Many-to-Many Recipe Ingredients with Quantitative Properties",
      category: "Database Modeling",
      problem: "Standard M:N junction tables typically only store pairs of foreign keys. In a restaurant recipe engine, each association between a recipe and an ingredient must carry continuous quantity floats and unit measurement types (e.g. 150 grams vs 2 units).",
      solution: "Engineered an explicit associative entity (`RecipeIngredient`) with its own primary key, foreign keys, and numeric decimal quantity columns. Wrapped this with bidirectional SQLAlchemy relationship mappings allowing recipe serialization to directly output structured ingredient ingredient lists with portion calculations.",
    },
    {
      title: "Batch Expiration Tracking vs. Monolithic Aggregate Counters",
      category: "State Management",
      problem: "Conventional inventory systems store a single scalar column like `total_stock = 500`. This completely obscures perishable spoilage dates, lot traceability for safety recalls, and unit price fluctuations across supplier shipments.",
      solution: "Designed the `InventoryBatch` model to track stock at the discrete delivery lot level. Each batch maintains an immutable batch number, received timestamp, supplier metadata, and indexed expiration date. Aggregate stock is dynamically computed via indexed queries (`WHERE expiry_date > NOW()`), ensuring real-world food safety compliance.",
    },
    {
      title: "Maintaining Loose Coupling in a Modular Monolith",
      category: "Architecture & Coupling",
      problem: "In monolithic Python backends, developers frequently introduce circular imports when modules need data from one another (e.g. Menu router importing Recipe service, which imports Ingredient service, which imports Core DB).",
      solution: "Enforced strict hierarchical dependency flow (Core DB → Ingredients → Recipes → Menus). Cross-module lookups occur through cleanly defined service methods rather than direct model queries. Circular imports are completely prevented at design time.",
    },
    {
      title: "Measurement Unit Normalization in Business Workflows",
      category: "Business Logic",
      problem: "Ingredients are frequently purchased in bulk units (e.g., 25 kg bags of flour) but consumed in granular recipe increments (e.g., 250 grams). Calculating inventory availability and deductions without unit normalization causes severe stock drift.",
      solution: "Standardized all internal domain computations around canonical base units (e.g. grams for mass, milliliters for volume) in the Master Ingredient catalog, while storing user-friendly display units in the API presentation layer.",
    },
    {
      title: "Planning Future Frontend Integration Without an Implemented UI",
      category: "API Contract Design",
      problem: "Building a backend before the frontend often risks creating mismatched APIs that require massive refactoring once UI state requirements (e.g. pagination, sorting, nested relations) emerge.",
      solution: "Adopted a contract-first approach leveraging Pydantic schemas and auto-generated OpenAPI 3.1 documentation. Tested all endpoint payloads thoroughly using Swagger UI to ensure JSON shapes provide predictable, frontend-ready structures for the planned React + TypeScript application.",
    },
  ];

  return (
    <section id="engineering-challenges" aria-labelledby="challenges-heading" className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800 pt-12 space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
            08 · TECHNICAL CHALLENGES &amp; MITIGATIONS
          </span>
        </div>
        <h2 id="challenges-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans mb-3">
          Real Engineering Hurdles
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
          Building production-grade backend software requires solving complex real-world edge cases. Below are the primary architectural and database hurdles encountered during development and the engineering strategies used to resolve them:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((c, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 px-2 py-0.5 rounded border border-sky-200 dark:border-sky-800/60 font-semibold">
                  {c.category}
                </span>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  CHL-0{idx + 1}
                </span>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 font-sans mb-3">
                {c.title}
              </h3>

              <div className="space-y-3 text-xs leading-relaxed">
                <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80">
                  <span className="font-mono text-[10px] uppercase font-semibold text-red-600 dark:text-red-400 block mb-1">
                    Constraint / Problem:
                  </span>
                  <p className="text-zinc-600 dark:text-zinc-400">{c.problem}</p>
                </div>

                <div className="p-3 rounded-lg bg-sky-50/40 dark:bg-sky-950/20 border border-sky-200/60 dark:border-sky-800/40">
                  <span className="font-mono text-[10px] uppercase font-semibold text-sky-700 dark:text-sky-300 block mb-1">
                    Engineering Resolution:
                  </span>
                  <p className="text-zinc-700 dark:text-zinc-300">{c.solution}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
