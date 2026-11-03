import type { AnchorHTMLAttributes, ReactNode } from 'react'

export interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export function TextLink({ children, className = '', ...props }: TextLinkProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center rounded-control text-sm font-medium text-ink-300 underline decoration-ink-800 underline-offset-4 transition-opacity duration-enter ease-enter hover:text-teal-300 hover:decoration-teal-300 hover:opacity-90 active:opacity-70 focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400 ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
