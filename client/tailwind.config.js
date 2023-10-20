/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light", "dark", "luxury"],
  },
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
  plugins: [require("daisyui")],
};
