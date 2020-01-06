module.exports = {
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#3490dc',
     'secondary': '#ffed4a',
     'danger': '#e3342f',
    })
  },
  variants: {},
  plugins: [
    require('tailwindcss-animatecss')({
        settings: {
          animatedSpeed: 1000,
          heartBeatSpeed: 1000,
          hingeSpeed: 2000,
          bounceInSpeed: 750,
          bounceOutSpeed: 750,
          animationDelaySpeed: 1000
        },
        variants: ['responsive'],
    }),
  ]
}
