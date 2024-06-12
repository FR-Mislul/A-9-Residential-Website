/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arvo: '"Arvo", serif',
        varela: '"Varela Round", sans-serif',
        lobster: '"Lobster Two", sans-serif'
      },
      backgroundImage : {
        'bg-img': 'linear-gradient(180deg, #1b083f 4%, rgba(163, 154, 181, 0) 100%), url("../../../public/img/3d-rendering-house-model.jpg");'
      }
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

