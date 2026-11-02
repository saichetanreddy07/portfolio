import type { HTMLAttributes, ReactNode } from 'react'

type ChipTone = 'neutral' | 'accent' | 'success' | 'warning' | 'danger'

const toneClasses: Record<ChipTone, string> = {
  neutral: 'border-ink-700 bg-ink-800 text-ink-300',
  accent: 'border-teal-300/40 bg-teal-300/10 text-teal-300',
  success: 'border-success/40 bg-success/10 text-success',
  warning: 'border-warning/40 bg-warning/10 text-warning',
  danger: 'border-danger/40 bg-danger/10 text-danger',
}

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  tone?: ChipTone
}

export function Chip({ children, tone = 'neutral', className = '', ...props }: ChipProps) {
  return (
    <span className={`inline-flex min-h-8 items-center rounded-full border px-3 font-mono text-xs ${toneClasses[tone]} ${className}`} {...props}>
      {children}
    </span>
  )
}
