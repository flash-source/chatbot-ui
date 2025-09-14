/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        botBlue: '#2596BE',
        userBlue: '#E6F0FF',
        lightBlue: '#5B7DB3',
      },
    },
  },
  plugins: [],
};
