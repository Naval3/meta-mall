/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      screens: {
        md1: "930px",
      },
      colors: {
        primary: {
          light: "rgb(245,148,148)",
          default: "rgb(255,81,81)",
          dark: "rgb(248,47,47)",
        },
      },
    },
  },
  plugins: [],
};
