// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#FFF9D2',
        customOrange: '#FF8473',
        customblue: '#64E9FF'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif', 'Oswald'],
      },
    },
  },
  plugins: [],
}
