import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { Container } from "@/components/common/Container";
import { SITE_CONFIG } from "@/constants/site";
import { NAV_ITEMS } from "@/constants/navigation";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950 transition-colors">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1: Identity & Summary */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-mono text-xs font-semibold">
                  SC
                </div>
                <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                  / {SITE_CONFIG.role}
                </span>
              </div>

              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-md">
                Recent Computer Science (AI) graduate building production-oriented
                AI systems, RAG workflows, modular backends, and data analytics pipelines.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-8 w-8 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-8 w-8 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center justify-center h-8 w-8 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Navigation
              </h3>
              <ul className="space-y-2 text-xs">
                {NAV_ITEMS.map((item) => (
                  <li key={item.name}>
                    {item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        {item.name}
                        <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Status */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Direct Contact
              </h3>
              <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                <div>
                  <span className="block text-zinc-400 dark:text-zinc-500 font-mono text-[11px]">
                    Email
                  </span>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div>
                  <span className="block text-zinc-400 dark:text-zinc-500 font-mono text-[11px]">
                    Location
                  </span>
                  <span>{SITE_CONFIG.education.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 dark:text-zinc-400">
            <p>
              © {currentYear} {SITE_CONFIG.name}. Built with Next.js 15, TypeScript & Tailwind CSS.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>All documentation strictly verified from source code & resume</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
