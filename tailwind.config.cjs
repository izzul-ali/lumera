/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Noto Sans', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
