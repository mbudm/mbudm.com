module.exports = {
  theme: {
    fontFamily: {
      display: ['Source Sans Pro', 'Open Sans', 'Helvetica', 'sans-serif'],
      body: ['Open Sans', 'Helvetica', 'sans-serif'],
    },
    extend: {
      colors:{
        gray: { // warmer
          100: '#fbfaf9',
          200: '#f2f1ef',
          300: '#e9e8e7',
          400: '#d6d5d4',
          500: '#afaead',
          600: '#81807f',
          700: '#575553',
          800: '#3a3733',
          900: '#26201a',
        }
      }
    }
  },
  variants: {
    opacity: ['hover'],
  },
  plugins: []
}
