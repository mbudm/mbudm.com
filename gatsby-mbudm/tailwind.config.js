module.exports = {
  theme: {
    fontFamily: {
      display: ["Source Sans Pro", "Open Sans", "Helvetica", "sans-serif"],
      body: ["Open Sans", "Helvetica", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        gray: {
          // warmer
          100: "#fbfaf9",
          200: "#f2f1ef",
          300: "#e9e8e7",
          400: "#d6d5d4",
          500: "#afaead",
          600: "#81807f",
          700: "#575553",
          800: "#3a3733",
          900: "#26201a",
        },
      },
    },
  },
  variants: {
    opacity: ["hover"],
  },
  plugins: [],
}
