/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlack: '#0E0E0E',
        black: '#000000',
        darkWhite: '#f1f1f1',
        white: '#ffffff',
        cta: '#d87d4a',
        lightCta: '#fbaf85',
        backgroundColor: '#fafafa',
        footerText: '#979797',
        darkBgColor: '#121212',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}