module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors : {
          palegray : '#C8C8C8',
          bggray   : '#141414',
          orange   : '#D89800',
          test     : '#3C3C3B',
      },

      fontFamily : {
        rox : ['Roxborough'],
      },
      backgroundImage: theme => ({
        'logimg': "url('/hl2.png')",
      }),

      height: {
        mt: '82vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
