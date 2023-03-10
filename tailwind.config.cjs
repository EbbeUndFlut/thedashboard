/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        opa_bg: '#ffb4a2',
        opa_light: '#ffcdb2',
        opa_dark: '#6d6875',
        opa_main: '#5e989b',
        opa_brown: '#b5838d'
      }
    },
  },
  plugins: [],
}