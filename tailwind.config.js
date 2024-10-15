/** @type {import('tailwindcss').Config} */
export default {
  content:
  [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        '3xl': { max: '1920px' },
        '2xl': { max: '1735px' },
        'xl': { max: '1335px' },
        'lg': { max: '1024px' }, 
        'md': { max: '768px' },
        'sm': { max: '640px' },
        'xs': { max: '500px' },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
