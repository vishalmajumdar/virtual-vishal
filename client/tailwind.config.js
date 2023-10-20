/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
  plugins: [],
};
