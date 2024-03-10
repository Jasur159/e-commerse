/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#9d174d",
      },
      fontFamily: {
        sans: "Nova Square",
      },
      screens: {
        md: "900px",
        td: "1170px",
        xl: "1200px",
        v: "480px",
      },
    },
  },
  plugins: [],
};
