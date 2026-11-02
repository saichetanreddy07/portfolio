import type { HTMLAttributes, ReactNode } from 'react'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Container({ children, className = '', ...props }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-content px-6 sm:px-8 lg:px-12 ${className}`} {...props}>{children}</div>
}
