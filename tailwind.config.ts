import type { Config } from 'tailwindcss'

export default {
  // darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#F40000',
      },
      fontFamily: {
        pressStart: 'var(--font-press-start)',
        geologica: 'var(--font-geologica)',
        pixelade: ['Pixelade', 'sans-serif'],
        ibmPlexMono: 'var(--font-ibm-plex-mono)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
