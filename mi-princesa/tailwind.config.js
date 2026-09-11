/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        space: {
          black: '#020408',
          deep: '#030810',
          navy: '#060d1a',
          blue: '#0a1628',
          mid: '#0d1f3c',
        },
        star: {
          white: '#f8f4ff',
          warm: '#ffd9a0',
          gold: '#ffc56a',
          blue: '#a8c8ff',
        },
        nebula: {
          purple: '#6b3fa0',
          pink: '#c0456b',
          blue: '#1a3a6b',
        }
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shooting-star': 'shootingStar 1.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'ripple': 'ripple 4s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255,197,106,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255,197,106,0.8)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ripple: {
          '0%': { transform: 'scaleX(1)', opacity: '0.6' },
          '50%': { transform: 'scaleX(1.05)', opacity: '0.3' },
          '100%': { transform: 'scaleX(1)', opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}
