/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000068',
        disable: '#B4B4B4',
        danger: '#E23F3F',
        secondary: '#343434',
        success: '#2FA83B',
        warning: '#C0C31F',
        disable_light:'#D6D6D65E'
      },
      boxShadow: {
        shadow_primary:'0 4px 10px #00000040'
      }
    },
  },
  plugins: [],
}

