/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {

      colors: {
        'black': '#000000',
        'white': '#FFFFFF',
        purple: {
          600: '#800080',
        },
        pink: {
          500: '#FF1493',
        },
        blue: {
          900: '#1E3A8A',
        },
        lime: {
          500: '#32CD32',
        },
        orange: {
          500: '#FF4500',
        },
        gray: {
          100: '#f0f0f0',
          800: '#333333', // Puedes ajustar este color para un gris oscuro personalizado
        },
      },
    },
  },
  plugins: [],
}

