/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      width: {
        44: '11rem',
      },
      colors: {
        accent: '#ef5e76',
        white: '#ffffff',
        yellow: '#FFD600',
        link: {
          default: '#00B0FF',
          contrast: '#005780',
        },
        black: '#000000',
        lightgray: '#F1F6F8',
        content: {
          lighter: '#78909C',
          default: '#37474F',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
