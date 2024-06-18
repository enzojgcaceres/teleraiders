/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundSize: {
        '400%': '400%', 
      },
      keyframes: {
        iridescentAnimation: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        iridescent: 'iridescentAnimation 10s ease infinite',
      },
    },
  },
  plugins: [],
}

