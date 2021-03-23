const colors = require("tailwindcss/colors");

module.exports = {
  experimental: {
    darkModeVariant: true,
    applyComplexClasses: true,
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // false, 'media' or 'class'
  theme: {
    nightwind: {
      typography: true,
    },
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
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("nightwind"),
  ],
};
