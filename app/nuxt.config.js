module.exports = {
  mode: 'universal',
  server: {
    host: '0.0.0.0',
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/global.css',
    '@fortawesome/fontawesome/styles.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/composition-api',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    'nuxt-typed-vuex',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  build: {
    transpile: [
      /typed-vuex/,
    ],
  },

  fontawesome: {
    component: 'fa',
    icons: {
      brands: [
        'faGithub',
        'faTwitter',
        'faLinkedin',
        'faInstagram',
      ],
      solid: [
        'faStar',
        'faLink',
      ],
    },
  },
};
