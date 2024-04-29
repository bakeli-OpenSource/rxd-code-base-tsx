/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#05059B",
        white: "#FFFFFF",
        contentBg: "#F2F5FA"
      }
    },
  },
  plugins: [],
}