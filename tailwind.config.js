/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          100: '#F5DACA',
          200: '#ECC3A9',
          300: '#FFC9BA',
          400: '#FFB5A0',
          500: '#FF9B7D',
        },
      },
    },
  },
  plugins: [],
}