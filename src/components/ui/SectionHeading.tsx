import type { HTMLAttributes, ReactNode } from 'react'

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string
  title: string
  titleId?: string
  description?: string
  children?: ReactNode
}

export function SectionHeading({ eyebrow, title, titleId, description, children, className = '', ...props }: SectionHeadingProps) {
  return (
    <div className={className} {...props}>
      {eyebrow && <p className="mb-3 font-mono text-xs font-medium uppercase tracking-eyebrow text-teal-300">{eyebrow}</p>}
      <h2 id={titleId} className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink-100 sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 max-w-reading text-base leading-relaxed text-ink-300">{description}</p>}
      {children}
    </div>
  )
}
