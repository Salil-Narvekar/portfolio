/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      width: {
        '628': '72rem',
        '428': '42rem',
      }
    },
  },
  plugins: [],
}

