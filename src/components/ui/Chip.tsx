import type { HTMLAttributes, ReactNode } from 'react'

type ChipTone = 'neutral' | 'accent' | 'success' | 'warning' | 'danger'

const toneClasses: Record<ChipTone, string> = {
  neutral: 'border-ink-800 bg-ink-900/60 text-ink-300',
  accent: 'border-teal-300/30 bg-teal-300/5 text-teal-300',
  success: 'border-success/30 bg-success/5 text-success',
  warning: 'border-warning/30 bg-warning/5 text-warning',
  danger: 'border-danger/30 bg-danger/5 text-danger',
}

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  tone?: ChipTone
}

export function Chip({ children, tone = 'neutral', className = '', ...props }: ChipProps) {
  return (
    <span className={`inline-flex min-h-8 items-center rounded-control border px-2.5 font-mono text-xs ${toneClasses[tone]} ${className}`} {...props}>
      {children}
    </span>
  )
}
