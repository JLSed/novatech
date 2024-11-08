/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3F4E4F",
        secondary: "#FFEE96",
        thirdary: "#212121",
        background: "#F8F8F8",
        accent: "#F65A5B",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        afacad: ["Afacad"],
      },
      boxShadow: {
        cus1: "1px 3px 4px 3px rgba(94, 94, 94 , 0.25)",
        cus2: "0px 4px 9.5px 1px rgba(0, 0, 0 , 0.25)",
      },
      borderWidth: {
        '1': '1px',
      }
    },
  },
  plugins: [],
};

