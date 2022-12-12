/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '4/5': '80%',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
