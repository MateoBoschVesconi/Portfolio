/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0C1618',
        card: '#0C1618',
        cardBorder: 'rgba(239, 247, 246, 0.08)',
        primary: {
          DEFAULT: '#9A031E',
          hover: '#b50424',
          glow: 'rgba(154, 3, 30, 0.35)',
        },
        crimson: {
          DEFAULT: '#9A031E',
          hover: '#b50424',
          dark: '#730216',
          light: '#c90a2c',
        },
        porcelain: {
          DEFAULT: '#EFF7F6',
          muted: 'rgba(239, 247, 246, 0.7)',
          subtle: 'rgba(239, 247, 246, 0.45)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        code: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'glow-crimson': '0 0 30px -5px rgba(154, 3, 30, 0.45)',
        'glow-cyan': '0 0 30px -5px rgba(154, 3, 30, 0.45)',
        'glow-purple': '0 0 30px -5px rgba(154, 3, 30, 0.45)',
        'glow-indigo': '0 0 30px -5px rgba(154, 3, 30, 0.45)',
        'glow-emerald': '0 0 30px -5px rgba(154, 3, 30, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        }
      }
    },
  },
  plugins: [],
}
