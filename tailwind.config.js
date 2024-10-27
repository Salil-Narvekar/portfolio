/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '14': 'repeat(14, minmax(0, 1fr))',
        'layout': '200px minmax(900px, 1fr) 100px',
      },

      keyframes: {
        fadeFromLeft: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(0)' },
        },

        fadeFromRight: {
          '0%': { transform: 'translateX(6%)' },
          '100%': { transform: 'translateY(0)' },
        },

        fadeFromTop: {
          '0%': { transform: 'translateY(-60%)' },
          '100%': { transform: 'translateY(0)' },
        },

        fadeFromBottom: {
          '0%': { transform: 'translateY(60%)' },
          '100%': { transform: 'translateY(0)' },
        },

        zoomIn: {
          '0%': { transform: 'scale(0) translateX(20%)' },
          '100%': { transform: 'scale(1) translateY(0)' },
        },

      },

      animation: {
        fadeFromLeft: 'fadeFromLeft 0.5s ease-in-out forwards',
        fadeFromRight: 'fadeFromRight 0.5s ease-in-out forwards',
        fadeFromTop: 'fadeFromTop 0.5s ease-in-out forwards',
        fadeFromBottom: 'fadeFromBottom 0.5s ease-in-out forwards',
        zoomIn: 'zoomIn 0.8s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

