export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        primary: "#FBBF24", // yellow button color
        lightgreen: "#3AA940", // light green button color
      }
    },
  },
  plugins: [],
}
