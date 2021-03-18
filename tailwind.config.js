const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // false, 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        green: colors.lime,
        rose: colors.rose,
        teal: colors.teal,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
