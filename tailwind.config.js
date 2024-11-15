/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{htmlñ,jsx}"], // Asegúrate de que sea esta la sintaxis correcta
  theme: {
    extend: {
      colors: {
        customeRed: 'rgb(218, 19, 19)', // Asegúrate de que el nombre "customeRed" sea el que deseas
      },
    },
  },
  plugins: [],
}
