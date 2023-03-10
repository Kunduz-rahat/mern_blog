/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'gloock': ['"Gloock"', 'cursive'],
        'roboto': ['"Roboto"', 'cursive'],
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
