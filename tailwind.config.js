/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '14': 'repeat(14, minmax(0, 1fr))',
        'layout': '200px minmax(900px, 1fr) 100px',
      },
      
      keyframes: {
        fadeIn: {
          '0%': {transform: 'translateX(5%)' },
          // '100%': {transform: 'translateX(0)' },
        },
      },

      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

