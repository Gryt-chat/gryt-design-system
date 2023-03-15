/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}', './node_modules/@gryt/**/*.{js,ts}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        grytApp: {
          primary: '#948df5',
          secondary: '#f5948d',
          accent: '#8dbaf5',
          neutral: '#191D24',
          'base-100': '#2A303C',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272'
        }
      }
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: ''
  }
}
