/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#283A8A",
        blueSecond: "#8B9BB8",
        textBase: "#333",
      },
    },
  },
  plugins: [],
};
