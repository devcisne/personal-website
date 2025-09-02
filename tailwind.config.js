/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./lib/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "brick-pattern": "url('/backgrounds/white_brick.png')",
      },
      fontFamily: {
        Ubuntu: ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
        source: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
