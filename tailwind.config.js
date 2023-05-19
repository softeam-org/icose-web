/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'montserrat' : ['Montserrat', 'sans-serif'],
      'inter': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'standard-blue' : '#1E3A8A'
      }
    },
  },
  plugins: [],
}

