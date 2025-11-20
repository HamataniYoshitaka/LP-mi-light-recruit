/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        'sahara': {
          '50': '#fbfbeb',
          '100': '#f5f5cc',
          '200': '#ecea9c',
          '300': '#e0d864',
          '400': '#d6c539',
          '500': '#b9a429', //指定カラー
          '600': '#ab8c23',
          '700': '#89681f',
          '800': '#725421',
          '900': '#624621',
          '950': '#382510',
        },
      }
    },
  },
  plugins: [],
}

