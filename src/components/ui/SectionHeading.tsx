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
    <div className={`text-left ${className}`} {...props}>
      {eyebrow && <p className="mb-4 font-mono text-xs font-medium uppercase tracking-eyebrow text-teal-300">{eyebrow}</p>}
      <h2 id={titleId} className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-ink-100 sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 max-w-reading text-base leading-relaxed text-ink-300 sm:text-lg">{description}</p>}
      {children}
    </div>
  )
}
