import type { HTMLAttributes, ReactNode } from 'react'

type SectionSpacing = 'compact' | 'default' | 'spacious'

const spacingClasses: Record<SectionSpacing, string> = {
  compact: 'py-12 sm:py-16 lg:py-20',
  default: 'py-20 sm:py-28 lg:py-32',
  spacious: 'py-28 sm:py-36 lg:py-40',
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
