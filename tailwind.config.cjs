/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      black: "900",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
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
    plugins: [],
  },
};
