/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-inset': 'inset 0 1.2rem 1rem rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}