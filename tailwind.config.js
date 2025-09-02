/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "brick-pattern": "url('white_brick.png')",
      },
      fontFamily: {
        Ubuntu: ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
        source: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
