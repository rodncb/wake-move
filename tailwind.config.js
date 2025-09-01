/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9CBE31",
        "primary-dark": "#7A9626",
        secondary: "#FFD700",
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
