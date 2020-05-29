/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const { colors } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  important: true,
  purge: {
    enabled: process.env.ENV === 'production',
    content: ['./src/**/*.vue', './src/**/*.js', './src/**/*.ts'],
  },
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Noto Sans JP'],
    },
    extend: {
      colors: {
        custom: {
          '117fa4': '#117fa4',
          fdd118: '#fdd118',
          '434f51': '#434f51',
          eef7f7: '#eef7f7',
        },
      },
    },
  },
  variants: {
    tableLayout: ['responsive', 'focus', 'active', 'hover'],
    margin: ['responsive', 'hover', 'focus'],
    fontSize: ['responsive'],
  },
  plugins: [],
}
