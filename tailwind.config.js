/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkbluebg: "hsl(218, 28%, 13%)",
        darkblue: "hsl(217, 28%, 15%)",
        darkbluefooter: "hsl(216, 53%, 9%)",
        darkbluetestimonial: "hsl(219, 30%, 18%)",
        accentcyan: "hsl(176 68%, 64%)",
        accentblue: "hsl(198, 60%, 50%)",
        lightred: "hsl(0, 100%, 63%)"
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif']
      },
      
backgroundImage: (theme) => ({
  'logo-dark-mode': "url('../images/logo-dark-mode.svg')",
  'logo-light-mode': "url('../images/logo-light-mode.svg')",
  'curvy-dark-mode': "url('../images/bg-curvy-dark-mode.svg')",
  'curvy-light-mode': "url('../images/bg-curvy-light-mode.svg')",
  'curvy-dark-mode-mobile': "url('../images/bg-curvy-dark-mode-mobile.svg')",
  'curvy-light-mode-mobile': "url('../images/bg-curvy-light-mode-mobile.svg')"
})
    },
  },
  plugins: [],
}



// variants: {
//   extend: {
//     backgroundImage: ['dark']
//   }
// },


