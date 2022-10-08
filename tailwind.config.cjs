/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Space Mono', 'Sans-serif']
    },
    extend: {
      screens: {
        'sm': '376px',
      }
    },
  },
  plugins: [],
}
