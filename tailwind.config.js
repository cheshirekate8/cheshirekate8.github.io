/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'federal-blue': '#03045e',
        'marian-blue': '#023e8a',
        'honolulu-blue': '#0077b6',
        'blue-green': '#0096c7',
        'pacific-cyan': '#00b4d8',
        'vivid-sky': '#48cae4',
        'non-photo': '#90e0ef',
        'light-cyan': '#caf0f8',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

