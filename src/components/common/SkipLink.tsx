import React from "react";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-md focus:bg-zinc-900 focus:text-white dark:focus:bg-zinc-100 dark:focus:text-zinc-950 focus:font-medium focus:shadow-lg focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
    >
      Skip to main content
    </a>
  );
}

