/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'brick-pattern': "url('white_brick.png')",
      }
    },
  },
  plugins: [],
}
