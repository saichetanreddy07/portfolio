/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: 'rgb(var(--color-ink-950) / <alpha-value>)',
          900: 'rgb(var(--color-ink-900) / <alpha-value>)',
          800: 'rgb(var(--color-ink-800) / <alpha-value>)',
          700: 'rgb(var(--color-ink-700) / <alpha-value>)',
          500: 'rgb(var(--color-ink-500) / <alpha-value>)',
          300: 'rgb(var(--color-ink-300) / <alpha-value>)',
          100: 'rgb(var(--color-ink-100) / <alpha-value>)',
        },
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        amber: {
          400: 'rgb(var(--color-amber-400) / <alpha-value>)',
          500: 'rgb(var(--color-amber-500) / <alpha-value>)',
        },
        teal: { 300: 'rgb(var(--color-teal-300) / <alpha-value>)' },
        success: 'rgb(var(--color-success) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Arial', 'sans-serif'],
        sans: ['var(--font-body)', 'Arial', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '26px' }],
        lg: ['20px', { lineHeight: '28px' }],
        xl: ['24px', { lineHeight: '32px' }],
        '2xl': ['32px', { lineHeight: '40px' }],
        '3xl': ['48px', { lineHeight: '1.05' }],
        '4xl': ['64px', { lineHeight: '1' }],
        'hero-title': ['var(--hero-title-size)', { lineHeight: '0.98' }],
        'hero-lead': ['var(--hero-lead-size)', { lineHeight: '1.15' }],
      },
      spacing: {
        1: '4px', 2: '8px', 3: '12px', 4: '16px', 6: '24px',
        8: '32px', 12: '48px', 16: '64px', 24: '96px',
      },
      maxWidth: {
        content: 'var(--content-width)',
        reading: 'var(--reading-width)',
        'hero-copy': 'var(--hero-copy-width)',
        'hero-lead': 'var(--hero-lead-width)',
        'hero-links': 'var(--hero-links-width)',
      },
      minHeight: { hero: 'var(--hero-min-height)' },
      gridTemplateColumns: {
        about: 'var(--about-columns)',
      },
      letterSpacing: {
        hud: 'var(--tracking-hud)',
        display: 'var(--tracking-display)',
        lead: 'var(--tracking-lead)',
        detail: 'var(--tracking-detail)',
        eyebrow: 'var(--tracking-eyebrow)',
      },
      borderRadius: {
        control: 'var(--radius-control)',
        card: 'var(--radius-card)',
        panel: 'var(--radius-panel)',
      },
      outlineWidth: { focus: 'var(--focus-ring-width)' },
      outlineOffset: { focus: 'var(--focus-ring-offset)' },
      boxShadow: { overlay: 'var(--shadow-overlay)' },
      transitionDuration: {
        enter: 'var(--motion-enter)',
        leave: 'var(--motion-leave)',
      },
      transitionTimingFunction: {
        enter: 'var(--ease-enter)',
        leave: 'var(--ease-leave)',
      },
    },
  },
}
