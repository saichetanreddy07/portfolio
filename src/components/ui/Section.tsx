import type { HTMLAttributes, ReactNode } from 'react'

type SectionSpacing = 'compact' | 'default' | 'spacious'

const spacingClasses: Record<SectionSpacing, string> = {
  compact: 'py-12 sm:py-16',
  default: 'py-16 sm:py-16 lg:py-24',
  spacious: 'py-24',
}

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  spacing?: SectionSpacing
}

export function Section({ children, spacing = 'default', className = '', ...props }: SectionProps) {
  return (
    <section className={`${spacingClasses[spacing]} ${className}`} {...props}>
      {children}
    </section>
  )
}
