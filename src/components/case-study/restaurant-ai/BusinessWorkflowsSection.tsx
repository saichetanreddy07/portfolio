import React from "react";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { PackageCheck, ShoppingCart, CheckCircle, Flame, ArrowRightLeft } from "lucide-react";

export function BusinessWorkflowsSection() {
  const workflows = [
    {
      id: "inventory-management-workflow",
      title: "Inventory Management Workflow",
      imageFileName: "inventory-management-workflow.png",
      purpose: "Track physical ingredient batches from supplier intake to expiration, guaranteeing food safety and accurate Cost of Goods Sold (COGS).",
      caption: "Lifecycle workflow of an inventory batch from intake and automatic batch numbering through active storage and FEFO depletion.",
      explanation: "Models the end-to-end lifecycle of restaurant stock. Upon arrival, an intake event generates an immutable, collision-free batch identifier (e.g. BATCH-2026-ING04-09), associates unit cost, supplier metadata, and indexed expiration dates, and registers the batch in the MySQL persistence layer under ACTIVE status.",
      badge: "Lifecycle Flow",
      icon: <PackageCheck className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    },
    {
      id: "order-processing-workflow",
      title: "Order Processing & Kitchen Consumption",
      imageFileName: "order-processing-workflow.png",
      purpose: "Coordinate kitchen production requests with backend recipe decomposition and atomic ingredient depletion.",
      caption: "Internal operational request flow through FastAPI routers, recipe decomposition, stock audit, and atomic database commits.",
      explanation: "Unlike customer checkout flows, this operational order flow represents kitchen fulfillment. When a dish is ordered, the system queries the associated 1:1 recipe, expands the Bill of Materials (BOM) for the ordered portions, locks the required inventory batches within an ACID transaction, and records an immutable stock ledger deduction.",
      badge: "Request Flow",
      icon: <ShoppingCart className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    },
    {
      id: "availability-engine-workflow",
      title: "Dynamic Availability Engine",
      imageFileName: "availability-engine-workflow.png",
      purpose: "Calculate real-time menu item availability by evaluating non-expired batch inventory against recipe requirements.",
      caption: "Mathematical validation algorithm evaluating ingredient batch stocks to compute maximum producible servings.",
      explanation: "Prevents tickets from being accepted for depleted items. The engine retrieves recipe ingredients, sums active non-expired batch quantities, normalizes measurement units, and computes the limiting ingredient bottleneck via MaxServings = MIN(FLOOR(Available / RecipeQty)). If zero, the item is instantly marked unavailable.",
      badge: "Logic Engine",
      icon: <CheckCircle className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    },
    {
      id: "fefo-consumption-workflow",
      title: "FEFO (First Expire, First Out) Consumption Strategy",
      imageFileName: "fefo-consumption-workflow.png",
      purpose: "Minimize kitchen spoilage by prioritizing ingredient batches closest to their expiration date.",
      caption: "Expiry-first batch prioritization algorithm depleting earliest expiring stock prior to newer inventory.",
      explanation: "Conventional FIFO assumes arrival order equals freshness, which fails in commercial kitchens with multi-supplier shipments. FEFO sorts batches by (expiry_date ASC, created_at ASC), allocating deductions across earliest expiring lots first, reducing food waste by up to 25–40% while preserving audit compliance.",
      badge: "Depletion Strategy",
      icon: <Flame className="w-5 h-5 text-amber-500" />,
    },
    {
      id: "request-lifecycle",
      title: "FastAPI Request / Response Lifecycle",
      imageFileName: "request-lifecycle.png",
      purpose: "Trace the strict unidirectional flow of an HTTP transaction across all architectural layers.",
      caption: "Full lifecycle trace: Client → CORSMiddleware → Router → Service Layer → SQLAlchemy ORM → MySQL DB → Response Serializer.",
      explanation: "Illustrates runtime separation of concerns. Inbound JSON is validated against Pydantic schemas, dependency-injected sessions are provided to isolated service handlers, business constraints are enforced, queries execute via the SQLAlchemy identity map, and transactions commit or cleanly roll back with deterministic HTTP status codes.",
      badge: "Runtime Lifecycle",
      icon: <ArrowRightLeft className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    },
  ];

  return (
    <section id="business-workflows" aria-labelledby="workflows-heading" className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800 pt-12 space-y-16">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
            06 · BUSINESS WORKFLOWS &amp; LOGIC ENGINES
          </span>
        </div>
        <h2 id="workflows-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans mb-3">
          Operational Restaurant Workflows
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
          Rather than static UI mockups, these diagrams document the core engineering logic powering restaurant operations: batch traceability, availability verification, FEFO spoilage prevention, and transactional safety.
        </p>
      </div>

      {/* Workflows List */}
      <div className="space-y-16">
        {workflows.map((wf, idx) => (
          <div key={wf.id} id={wf.id} className={`scroll-mt-24 space-y-4 ${idx > 0 ? "border-t border-zinc-200/80 dark:border-zinc-800/80 pt-12" : ""}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                {wf.icon}
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 font-sans">
                  {wf.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                06.{idx + 1}
              </span>
            </div>

            {/* Purpose Callout Box */}
            <div className="p-3.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2.5">
              <span className="font-mono text-[11px] font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider shrink-0 mt-0.5">
                Purpose:
              </span>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-normal">
                {wf.purpose}
              </p>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {wf.explanation}
            </p>

            {/* Expandable Architecture Diagram */}
            <ArchitectureDiagram
              id={wf.id}
              title={wf.title}
              imageFileName={wf.imageFileName}
              caption={wf.caption}
              explanation={wf.explanation}
              badge={wf.badge}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
