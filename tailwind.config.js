/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#000000',
          2: '#050505',
          3: '#0B0B0B',
        },
        brand: {
          indigo: '#6B7280',
          cyan: '#9CA3AF',
          amber: '#D1D5DB',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-60%)' },
          '100%': { transform: 'translateX(60%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms cubic-bezier(0.21, 0.9, 0.2, 1) both',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

