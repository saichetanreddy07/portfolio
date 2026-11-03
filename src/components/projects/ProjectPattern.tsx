import type { ProjectPattern } from '../../data/projects'

interface ProjectPatternProps {
  pattern: ProjectPattern
  className?: string
}

export function ProjectPattern({ pattern, className = '' }: ProjectPatternProps) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute right-0 top-2 hidden h-24 w-40 opacity-project-pattern sm:block ${className}`}
      fill="none"
      viewBox="0 0 160 96"
    >
      <g stroke="currentColor" strokeWidth="1">
        {pattern === 'scanlines' && (
          <>
            <circle cx="115" cy="48" r="28" />
            <circle cx="115" cy="48" r="16" />
            <path d="M85 48h60M88 32h54M88 64h54M8 12h62M8 24h62M8 36h62M8 48h62M8 60h62M8 72h62M8 84h62" />
          </>
        )}
        {pattern === 'waveform' && (
          <>
            <path d="M8 16h144M8 40h144M8 64h144M8 88h144M24 8v80M56 8v80M88 8v80M120 8v80M152 8v80" />
            <path d="m8 58 22-10 18 4 18-24 18 39 19-20 18 6 19-28 22 11" />
          </>
        )}
        {pattern === 'dashboard' && (
          <>
            <path d="M8 16h144M8 40h144M8 64h144M8 88h144M32 8v80M80 8v80M128 8v80" />
            <path d="M43 76V54h12v22M67 76V36h12v40M91 76V47h12v29M115 76V25h12v51" />
          </>
        )}
        {pattern === 'tiles' && (
          <>
            <path d="M8 16h144M8 48h144M8 80h144M24 8v80M56 8v80M88 8v80M120 8v80M152 8v80" />
            <path d="M102 38c0-8 12-8 12-16M124 38c0-8 12-8 12-16M102 68c0-8 12-8 12-16M124 68c0-8 12-8 12-16" />
          </>
        )}
      </g>
    </svg>
  )
}
