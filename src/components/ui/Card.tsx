import type { HTMLAttributes, ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`rounded-card border border-ink-800/80 bg-ink-900/40 ${className}`} {...props}>
      {children}
    </div>
  )
}
