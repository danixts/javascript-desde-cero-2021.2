const colors = require('tailwindcss/colors')
module.exports = {
  purge: ["./src/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        primary: colors.red,
        secondary: colors.emerald
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
