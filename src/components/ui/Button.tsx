import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, Ref } from 'react'
import { Link } from 'react-router'

type Variant = 'primary' | 'secondary' | 'quiet'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary: 'border border-amber-400 bg-amber-400 text-ink-950 hover:border-amber-500 hover:bg-amber-500 active:border-amber-500 active:bg-amber-500',
  secondary: 'border border-ink-800 bg-ink-900/50 text-ink-100 hover:border-ink-500 active:bg-ink-800',
  quiet: 'border border-transparent bg-transparent text-ink-300 hover:bg-ink-900/60 hover:text-ink-100 active:bg-ink-800',
}

const sizeClasses: Record<Size, string> = {
  sm: 'min-h-11 px-3 text-sm',
  md: 'min-h-11 px-4 text-sm',
  lg: 'min-h-12 px-6 text-base',
}

const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[transform,opacity] duration-enter ease-enter active:translate-y-px focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-amber-400'
const disabledClasses = 'disabled:cursor-not-allowed disabled:border-ink-800 disabled:bg-ink-900/30 disabled:text-ink-300 disabled:opacity-60'
const linkClasses = 'hover:opacity-95'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: Ref<HTMLButtonElement>
  variant?: Variant
  size?: Size
  children: ReactNode
}

export function Button({ variant = 'primary', size = 'md', type = 'button', className = '', ref, ...props }: ButtonProps) {
  return <button ref={ref} className={`${baseClasses} ${disabledClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} type={type} {...props} />
}

export interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string
  variant?: Variant
  size?: Size
  children: ReactNode
  external?: boolean
}

export function ButtonLink({ variant = 'primary', size = 'md', className = '', to, external = false, ...props }: ButtonLinkProps) {
  const classes = `${baseClasses} ${linkClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  if (external) return <a className={classes} href={to} {...props} />
  return <Link className={classes} to={to} {...props} />
}
