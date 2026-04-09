/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'warp': 'warp 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        warp: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px -10px #a5b4fc' },
          'to': { boxShadow: '0 0 30px -5px #a5b4fc' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite linear',
        'slide-up': 'slide-up 0.3s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: 0.5,
            boxShadow: '0 0 20px 0px var(--tw-shadow-color)' 
          },
          '50%': { 
            opacity: 1,
            boxShadow: '0 0 40px 10px var(--tw-shadow-color)' 
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.5)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}