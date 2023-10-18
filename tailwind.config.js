/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#161E22',
        'secondary-color': '#2EB178',
      },
    },
  },
  plugins: [require("daisyui")],
}