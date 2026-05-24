/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        dark: {
          DEFAULT: '#0f0f1a',
          card:    '#1e1e2e',
          surface: '#181825',
          navy:    '#0f172a',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'card':    '0 4px 20px rgba(0, 0, 0, 0.06)',
        'card-md': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'card-lg': '0 20px 50px rgba(0, 0, 0, 0.10)',
        'card-xl': '0 30px 70px rgba(0, 0, 0, 0.14)',
        'blue':    '0 8px 28px rgba(59, 130, 246, 0.30)',
        'purple':  '0 8px 28px rgba(139, 92, 246, 0.30)',
        'pink':    '0 8px 28px rgba(236, 72, 153, 0.30)',
        'glow-sm': '0 0 12px rgba(59, 130, 246, 0.25)',
      },
      animation: {
        'fade-in':     'fadeIn 0.5s ease forwards',
        'slide-up':    'slideUp 0.5s ease forwards',
        'slide-right': 'slideRight 0.5s ease forwards',
        'blink':       'blink 1s steps(1) infinite',
        'spin-slow':   'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-24px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-brand':    'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'gradient-fire':     'linear-gradient(135deg, #3b82f6 0%, #ec4899 100%)',
        'gradient-dark':     'linear-gradient(135deg, #0f0f1a 0%, #3b82f6 100%)',
        'gradient-hero':     'radial-gradient(ellipse 80% 60% at 70% 40%, #eff6ff 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 10% 70%, #fdf4ff 0%, transparent 55%), #f9fafb',
        'gradient-about':    'radial-gradient(ellipse 70% 50% at 20% 80%, #f5f3ff 0%, transparent 55%), #fafafa',
        'gradient-skills':   'radial-gradient(ellipse 60% 50% at 80% 20%, #fdf4ff 0%, transparent 55%), #fafafa',
        'gradient-certs':    'radial-gradient(ellipse 60% 50% at 10% 30%, #f0f9ff 0%, transparent 55%), #fafafa',
        'gradient-contact':  'radial-gradient(ellipse 70% 60% at 50% 100%, #eff6ff 0%, transparent 60%), #f9fafb',
      },
    },
  },
  plugins: [],
}
