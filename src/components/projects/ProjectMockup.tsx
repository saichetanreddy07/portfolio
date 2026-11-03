import type { Project } from '../../data/projects'

interface ProjectMockupProps {
  project: Project
  className?: string
}

export function ProjectMockup({ project, className = '' }: ProjectMockupProps) {
  if (project.imageUrl) {
    return (
      <div className={`relative overflow-hidden rounded-panel border border-ink-800/80 bg-ink-900/60 shadow-sm ${className}`}>
        <img
          src={project.imageUrl}
          alt={`${project.title} interface preview`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-panel border border-ink-800/80 bg-ink-900/70 font-mono text-xs text-ink-300 shadow-sm ${className}`}
      aria-label={`${project.title} interactive interface preview`}
      role="img"
    >
      {/* Browser/Window Header */}
      <div className="flex items-center justify-between border-b border-ink-800/80 bg-ink-950/80 px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-700/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-700/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-700/80" />
        </div>
        <div className="flex items-center gap-2 rounded-control border border-ink-800/60 bg-ink-900/80 px-3 py-1 text-[11px] text-ink-300">
          <span className="text-teal-300" aria-hidden="true">🔒</span>
          <span>{project.id}.local</span>
        </div>
        <span className="text-[11px] text-ink-500">{project.index}</span>
      </div>

      {/* Mockup Canvas */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        {project.id === 'pokedex-ai' && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-ink-800/60 pb-3">
              <span className="text-ink-100 font-semibold font-display text-sm tracking-tight">Gradio UI • 4 Tabs</span>
              <span className="text-teal-300 text-[11px] font-mono">ChromaDB • Phi-3 (Ollama)</span>
            </div>
            <div className="rounded-control border border-ink-800/60 bg-ink-950/60 p-3">
              <span className="text-ink-500 text-[11px]">Query Input &gt;</span>
              <p className="mt-1 text-ink-100 text-xs font-mono font-medium">"Optimal counters and evolution path for Dragonite?"</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-control border border-ink-800/40 bg-ink-950/40 p-2.5">
                <span className="text-[10px] uppercase text-ink-500">Vector Sim.</span>
                <p className="mt-1 text-sm font-semibold text-amber-400 font-display">0.942</p>
              </div>
              <div className="rounded-control border border-ink-800/40 bg-ink-950/40 p-2.5">
                <span className="text-[10px] uppercase text-ink-500">Docs Indexed</span>
                <p className="mt-1 text-sm font-semibold text-ink-100 font-display">1,576</p>
              </div>
              <div className="rounded-control border border-ink-800/40 bg-ink-950/40 p-2.5 col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase text-ink-500">Inference</span>
                <p className="mt-1 text-sm font-semibold text-teal-300 font-display">340ms</p>
              </div>
            </div>
            <div className="rounded-control border border-ink-800/60 bg-ink-950/50 p-3 text-[11px] leading-relaxed text-ink-300">
              <span className="text-teal-300 font-medium">Phi-3 RAG Output:</span> Ice Beam (4x weakness) via Cloyster / Lapras. Evolution tier: Dratini → Dragonair (Lv 30) → Dragonite (Lv 55).
            </div>
          </div>
        )}

        {project.id === 'meta-learning-time-series' && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-ink-800/60 pb-3">
              <span className="text-ink-100 font-semibold font-display text-sm tracking-tight">Streamlit • Meta-Model</span>
              <span className="text-teal-300 text-[11px] font-mono">Random Forest Meta-Classifier</span>
            </div>
            {/* Waveform Visualization */}
            <div className="rounded-control border border-ink-800/60 bg-ink-950/60 p-3">
              <div className="flex justify-between text-[10px] text-ink-500 mb-2">
                <span>M4 Benchmark Series #1359</span>
                <span className="text-teal-300">ARIMA vs Prophet Forecast</span>
              </div>
              <svg className="h-16 w-full" viewBox="0 0 300 60" fill="none" aria-hidden="true">
                <path d="M0 30 Q 30 10, 60 30 T 120 30 T 180 30 T 240 20 T 300 35" stroke="currentColor" strokeWidth="1.5" className="text-ink-700" />
                <path d="M0 35 Q 35 15, 70 35 T 140 25 T 210 38 T 280 18 L 300 24" stroke="currentColor" strokeWidth="1.5" className="text-teal-300" strokeDasharray="3 3" />
                <path d="M0 25 Q 40 40, 80 20 T 160 32 T 230 15 T 300 28" stroke="currentColor" strokeWidth="2" className="text-amber-400" />
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-control border border-ink-800/40 bg-ink-950/40 p-2.5">
                <span className="text-[10px] uppercase text-ink-500">Holdout Acc.</span>
                <p className="mt-1 text-sm font-semibold text-amber-400 font-display">69.12%</p>
              </div>
              <div className="rounded-control border border-ink-800/40 bg-ink-950/40 p-2.5">
                <span className="text-[10px] uppercase text-ink-500">Meta-Features</span>
                <p className="mt-1 text-sm font-semibold text-ink-100 font-display">10 Feats</p>
              </div>
              <div className="rounded-control border border-ink-800/40 bg-ink-950/40 p-2.5">
                <span className="text-[10px] uppercase text-ink-500">Selected</span>
                <p className="mt-1 text-sm font-semibold text-teal-300 font-display">Prophet</p>
              </div>
            </div>
          </div>
        )}

        {project.id === 'enterprise-sql-analytics' && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-ink-800/60 pb-3">
              <span className="text-ink-100 font-semibold font-display text-sm tracking-tight">PostgreSQL & Power BI</span>
              <span className="text-teal-300 text-[11px] font-mono">309K+ Records • 39 Queries</span>
            </div>
            <div className="rounded-control border border-ink-800/60 bg-ink-950/60 p-3 font-mono text-[11px] leading-relaxed">
              <span className="text-amber-400">SELECT</span> customer_id, category,<br />
              &nbsp;&nbsp;<span className="text-teal-300">DENSE_RANK() OVER</span> (PARTITION BY category ORDER BY gmv DESC)<br />
              <span className="text-amber-400">FROM</span> customer_sales_mart;
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-control border border-ink-800/40 bg-ink-950/40 p-2.5">
                <span className="text-[10px] uppercase text-ink-500">Dataset</span>
                <p className="mt-1 text-sm font-semibold text-ink-100 font-display">5+ GB</p>
              </div>
              <div className="rounded-control border border-ink-800/40 bg-ink-950/40 p-2.5">
                <span className="text-[10px] uppercase text-ink-500">Schema</span>
                <p className="mt-1 text-sm font-semibold text-teal-300 font-display">4 Tables</p>
              </div>
              <div className="rounded-control border border-ink-800/40 bg-ink-950/40 p-2.5">
                <span className="text-[10px] uppercase text-ink-500">BI Dashboards</span>
                <p className="mt-1 text-sm font-semibold text-amber-400 font-display">4 Pages</p>
              </div>
            </div>
          </div>
        )}

        {project.id === 'restaurant-ai' && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-ink-800/60 pb-3">
              <span className="text-ink-100 font-semibold font-display text-sm tracking-tight">FastAPI & MySQL • Kitchen Engine</span>
              <span className="text-warning text-[11px] font-mono">FEFO Stock Logic</span>
            </div>
            <div className="rounded-control border border-ink-800/60 bg-ink-950/60 p-3 flex flex-col gap-2">
              <div className="flex justify-between text-[11px]">
                <span className="text-ink-100 font-mono">Avocado Batch #410</span>
                <span className="text-warning">Expiring in 2 days</span>
              </div>
              <div className="h-1.5 w-full bg-ink-800 rounded-full overflow-hidden">
                <div className="h-full bg-warning w-3/4" />
              </div>
              <div className="flex justify-between text-[10px] text-ink-500 mt-1">
                <span>Priority: FEFO Consumed</span>
                <span className="text-teal-300">Audit Hash: #a7f29c</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-control border border-ink-800/40 bg-ink-950/40 p-2.5">
                <span className="text-[10px] uppercase text-ink-500">Menu Dish</span>
                <p className="mt-1 text-xs font-semibold text-ink-100">Guacamole Bowl</p>
                <span className="text-[10px] text-success">AVAILABLE</span>
              </div>
              <div className="rounded-control border border-ink-800/40 bg-ink-950/40 p-2.5">
                <span className="text-[10px] uppercase text-ink-500">Ledger</span>
                <p className="mt-1 text-xs font-semibold text-teal-300">Immutable</p>
                <span className="text-[10px] text-ink-500">Append-Only</span>
              </div>
              <div className="rounded-control border border-ink-800/40 bg-ink-950/40 p-2.5 col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase text-ink-500">Frontend</span>
                <p className="mt-1 text-xs font-semibold text-amber-400">React 19 + TS</p>
                <span className="text-[10px] text-warning">IN PROGRESS</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

