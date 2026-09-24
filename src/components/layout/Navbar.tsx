"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, FileDown } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";
import { Container } from "@/components/common/Container";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = NAV_ITEMS.filter((item) => !item.isExternal).map((item) =>
    item.href.replace("#", "")
  );
  const activeSection = useScrollSpy(sectionIds, 100);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors">
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Brand / Logo */}
            <div className="flex items-center gap-3">
              <Link
                href="#home"
                className="group flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none rounded-md px-1 py-0.5"
                aria-label="Sai Chetan Reddy - Back to home"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-mono text-xs font-semibold tracking-tighter shadow-sm transition-transform group-hover:scale-105">
                  SC
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {SITE_CONFIG.name}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                    {SITE_CONFIG.role}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Primary Navigation"
            >
              {NAV_ITEMS.map((item) => {
                const isSectionActive =
                  !item.isExternal && activeSection === item.href.replace("#", "");

                if (item.isExternal) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                    >
                      <span>{item.name}</span>
                      <FileDown className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative px-3 py-1.5 text-xs font-medium rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none",
                      isSectionActive
                        ? "text-zinc-950 dark:text-white font-semibold"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                    )}
                  >
                    {item.name}
                    {isSectionActive && (
                      <span className="absolute inset-x-2 -bottom-[17px] h-0.5 bg-sky-600 dark:bg-sky-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Area */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none cursor-pointer"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={NAV_ITEMS}
        activeId={activeSection}
      />
    </>
  );
}

