module.exports = {
  theme: {
    fontFamily: {
      display: ["Source Sans Pro", "Open Sans", "Helvetica", "sans-serif"],
      body: ["Open Sans", "Helvetica", "sans-serif"],
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
      fontSize: {
        "7xl": "5rem",
      },
      width: {
        '1/8': '12.5%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '7/8': '87.5%',
      },
    },
  },
  variants: {
    opacity: ["hover"],
  },
  plugins: [],
}
