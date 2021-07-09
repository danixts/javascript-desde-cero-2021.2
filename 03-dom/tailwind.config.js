const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/*.html", "./src/**/*.{js}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: {
          100: "#000814",
          200: "#001d3d",
          300: "#003566",
          400: "#ffc300",
          500: "#ffd60a",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
