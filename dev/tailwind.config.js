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
          error: '#f87272',

          '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '999rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '999rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem' // border radius of tabs
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
