/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0A09',
          900: '#0B0A09',
          800: '#141110',
          700: '#1C1815',
          600: '#262019',
          500: '#332B21',
        },
        gold: {
          DEFAULT: '#C9A45C',
          light: '#E8CC8A',
          dark: '#8A6B2F',
          deep: '#5C4517',
        },
        cream: {
          DEFAULT: '#F5EFE6',
          muted: '#C4BAB0',
          dim: '#9A9088',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
        widest3: '0.42em',
      },
      boxShadow: {
        gold: '0 24px 70px -20px rgba(201, 164, 92, 0.45)',
        soft: '0 28px 80px -30px rgba(0, 0, 0, 0.85)',
      },
      backgroundImage: {
        'gold-sheen':
          'linear-gradient(120deg, #E8CC8A 0%, #C9A45C 42%, #8A6B2F 100%)',
        'ink-fade':
          'radial-gradient(1000px 520px at 15% -10%, rgba(201,164,92,0.13), transparent 62%), radial-gradient(900px 500px at 88% 8%, rgba(201,164,92,0.07), transparent 60%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scrollHint: {
          '0%': { transform: 'translateY(-6px)', opacity: '0' },
          '40%': { opacity: '1' },
          '100%': { transform: 'translateY(10px)', opacity: '0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        scrollHint: 'scrollHint 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};