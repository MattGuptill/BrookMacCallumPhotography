/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'titles': "'Satisfy'",
      'header': "'Courgette'",
      'normal': "'Amatic'"
    },
    colors: {
      'steel-blue': '#90AEB2',
      'cranberry': '#B6594C',
      'mug': '#DD8E75',
      'knit-sweater': '#EEE6DE',
      'midnight' : '#37514D',
      'camel-coat': '#BE845E',
      'black' : '#191919'
    }
  },
  plugins: [],
}