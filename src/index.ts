import type { Preset } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import css from './style.css'

export default function(): Preset<Theme> {
  return {
    name: 'uno-shadcn',
    preflights: [{
      getCSS: () => css,
    }],
    theme: {
      colors: {
        shadcn: {
          input: 'hsl(var(--shadcn-input))',
          ring: 'hsl(var(--shadcn-ring))',
          chart: {
            1: 'hsl(var(--shadcn-chart-1))',
            2: 'hsl(var(--shadcn-chart-2))',
            3: 'hsl(var(--shadcn-chart-3))',
            4: 'hsl(var(--shadcn-chart-4))',
            5: 'hsl(var(--shadcn-chart-5))',
          },
        },
      },
      textColor: {
        shadcn: {
          DEFAULT: 'hsl(var(--shadcn-foreground))',
          card: 'hsl(var(--shadcn-card-foreground))',
          popover: 'hsl(var(--shadcn-popover-foreground))',
          primary: 'hsl(var(--shadcn-primary-foreground))',
          secondary: 'hsl(var(--shadcn-secondary-foreground))',
          muted: 'hsl(var(--shadcn-muted-foreground))',
          accent: 'hsl(var(--shadcn-accent-foreground))',
          destructive: 'hsl(var(--shadcn-destructive-foreground))',
        },
      },
      backgroundColor: {
        shadcn: {
          DEFAULT: 'hsl(var(--shadcn-background))',
          card: 'hsl(var(--shadcn-card))',
          popover: 'hsl(var(--shadcn-popover))',
          primary: 'hsl(var(--shadcn-primary))',
          secondary: 'hsl(var(--shadcn-secondary))',
          muted: 'hsl(var(--shadcn-muted))',
          accent: 'hsl(var(--shadcn-accent))',
          destructive: 'hsl(var(--shadcn-destructive))',
        },
      },
      borderColor: {
        shadcn: {
          DEFAULT: 'hsl(var(--shadcn-border))',
        },
      },
    },
  }
}
