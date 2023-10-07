import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'map': "url('@/assets/map.svg')",
      },
      colors: {
        'standard-blue': '#1E3A8A',
        'background-section': '#F4F4F4',
        'dark-green': '#365314',
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: false,
    darkTheme: "none",
  }
}
