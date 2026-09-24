"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, ExternalLink } from "lucide-react";
import { NavItem } from "@/types";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  activeId: string;
}

export function MobileNav({
  isOpen,
  onClose,
  items,
  activeId,
}: MobileNavProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in drawer */}
      <div className="relative ml-auto flex h-full w-full max-w-xs flex-col bg-white dark:bg-zinc-950 p-6 shadow-2xl border-l border-zinc-200 dark:border-zinc-800 z-10">
        <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Navigation
          </span>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6">
          <ul className="flex flex-col space-y-1">
            {items.map((item) => {
              const isSectionActive =
                !item.isExternal && activeId === item.href.replace("#", "");

              if (item.isExternal) {
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className="flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                    >
                      <span>{item.name}</span>
                      <ExternalLink className="w-4 h-4 text-zinc-400" />
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center px-3 py-2.5 rounded-md text-base font-medium transition-colors",
                      isSectionActive
                        ? "bg-zinc-100 dark:bg-zinc-900 text-sky-600 dark:text-sky-400 font-semibold"
                        : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Sai Chetan Reddy · AI Engineer
          </p>
        </div>
      </div>
    </div>
  );
}

