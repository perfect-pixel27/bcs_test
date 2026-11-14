/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        britec: {
          navy: '#173F78',
          'navy-dark': '#0F2B52',
          'navy-deep': '#0A1B33',
          'navy-light': '#21549C',
          'navy-soft': '#EBF2FB',
          red: '#D92735',
          'red-dark': '#B51B27',
          'red-light': '#FDF2F3',
          'red-subtle': '#FFE8EA',
          slate: '#F8FAFC',
          charcoal: '#1E293B',
          muted: '#64748B',
          surface: '#F1F5F9',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 30px -10px rgba(23, 63, 120, 0.15)',
        'brand-lg': '0 20px 40px -15px rgba(23, 63, 120, 0.25)',
        'red-sm': '0 4px 14px 0 rgba(217, 39, 53, 0.35)',
        'red-lg': '0 10px 25px -5px rgba(217, 39, 53, 0.4)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
