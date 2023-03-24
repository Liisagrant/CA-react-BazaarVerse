/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Montserrat", "sans-serif"],
      },
      colors: {
        main: "#1A3D60",
        secondary: "#F25F5C",
        accent: "#797D7F",
        background: "#F0F1F3",
        Gray: "#A7A2A2",
        text: "#333",
      },
    },
  },
  plugins: [],
};
