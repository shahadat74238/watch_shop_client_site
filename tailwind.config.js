/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#110e1b',
        'secondary-color': '#7c162e',
      },
    },
  },
  plugins: [require("daisyui")],
}