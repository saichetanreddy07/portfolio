import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
    isExternal?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-5 py-3 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-sm hover:shadow",
    secondary:
      "bg-zinc-100 text-zinc-900 hover:bg-zinc-200/80 dark:bg-zinc-800/80 dark:text-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60",
    outline:
      "border border-zinc-300 dark:border-zinc-700/80 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-zinc-950 dark:hover:text-white",
    ghost:
      "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
  };

  const combinedClass = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 transition-transform">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform">{icon}</span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, isExternal, ...anchorProps } = props as ButtonAsLink;
    if (isExternal || href.startsWith("http") || href.endsWith(".pdf")) {
      return (
        <a
          href={href}
          className={combinedClass}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass} {...anchorProps}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClass}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}

