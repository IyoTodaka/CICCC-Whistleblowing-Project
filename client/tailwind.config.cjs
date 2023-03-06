/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#283A8A",
        blueSecond: "#A1B7E4",
        textBase: "#333",
      },
      fontFamily: {
        second: ["Roboto Slab", "serif"],
      },
    },
    plugins: [],
  },
};
