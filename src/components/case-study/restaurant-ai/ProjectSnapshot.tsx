import React from "react";
import { CheckCircle2, Code2, Server, Layout, Target, Box } from "lucide-react";

export function ProjectSnapshot() {
  const specs = [
    {
      label: "Status",
      value: "Backend Foundation Complete",
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />,
      subtext: "Core REST APIs, migrations & models verified",
      statusColor: "text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      label: "Role",
      value: "Sole Developer",
      icon: <Code2 className="w-4 h-4 text-sky-500" />,
      subtext: "System design, database architecture, API implementation",
    },
    {
      label: "Architecture",
      value: "Modular Monolith",
      icon: <Box className="w-4 h-4 text-indigo-500" />,
      subtext: "Domain-isolated modules, layered separation of concerns",
    },
    {
      label: "Backend",
      value: "FastAPI · SQLAlchemy · MySQL · Alembic",
      icon: <Server className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />,
      subtext: "Python 3.11+, Pydantic V2, Declarative ORM",
    },
    {
      label: "Frontend",
      value: "Planned",
      icon: <Layout className="w-4 h-4 text-amber-500" />,
      subtext: "React + TypeScript + Tailwind CSS (Not yet implemented)",
      statusColor: "text-amber-700 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      label: "Focus",
      value: "Restaurant Operations · REST API",
      icon: <Target className="w-4 h-4 text-violet-500" />,
      subtext: "Internal operational efficiency over consumer ordering",
    },
  ];

  return (
    <section aria-labelledby="snapshot-heading" className="my-10">
      <div className="flex items-center justify-between mb-4">
        <h2 id="snapshot-heading" className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">
          ENGINEERING SNAPSHOT · SYSTEM SPECIFICATIONS
        </h2>
        <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
          DOC ID: SPEC-REST-01
        </span>
      </div>

      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">
          {specs.slice(0, 3).map((item, idx) => (
            <div key={idx} className="p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {item.label}
                  </span>
                  {item.icon}
                </div>
                <div className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  {item.value}
                </div>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-normal mt-2 leading-relaxed">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800 border-t border-zinc-200 dark:border-zinc-800">
          {specs.slice(3, 6).map((item, idx) => (
            <div key={idx} className="p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {item.label}
                  </span>
                  {item.icon}
                </div>
                <div className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  {item.value}
                </div>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-normal mt-2 leading-relaxed">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
