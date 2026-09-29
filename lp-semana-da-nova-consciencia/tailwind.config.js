/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1a1025',
          gold: '#cda13c',
          violet: '#3b0b59',
          light: '#f5f0f6'
        }
      }
    },
  },
  plugins: [],
}