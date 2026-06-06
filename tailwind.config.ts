import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '5rem',
      },
    },
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#1A1410',
          deep: '#0C0907',
        },
        cream: {
          DEFAULT: '#F5F1EA',
          bone: '#E8E0D0',
        },
        brass: {
          DEFAULT: '#C9A961',
          deep: '#9B7E3F',
        },
        terracotta: '#B8543A',
        stone: {
          700: '#3D352E',
          500: '#6B5F52',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.2em' }],
        hero: ['clamp(2.75rem, 7vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        display: ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        tightest: '-0.02em',
        eyebrow: '0.2em',
      },
      maxWidth: {
        prose: '65ch',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.22, 1, 0.36, 1)',
        smooth: 'cubic-bezier(0.65, 0, 0.35, 1)',
        snap: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        cinematic: '1000ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
