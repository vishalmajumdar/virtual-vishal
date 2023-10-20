/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Noto Serif", "serif"],
    },
    extend: {
      colors: {
        "theme-color": "#f9c649",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
