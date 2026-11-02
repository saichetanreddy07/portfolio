import type { HTMLAttributes, ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`rounded-card border border-ink-700 bg-ink-900 ${className}`} {...props}>
      {children}
    </div>
  )
}
