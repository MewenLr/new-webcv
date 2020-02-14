import i18n from './assets/scripts/modules/i18n'

export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' },
    ],
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/style/main.css',
    '@/assets/style/classes.css',
  ],
  styleResources: {
    sass: [
      '@/assets/style/**/*.sass',
    ],
  },
  plugins: [
    '~/assets/scripts/directives/scroll.js',
    '~/assets/scripts/directives/pointers.js',
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
  ],
  modules: [
    '@nuxtjs/style-resources',
    [ 'nuxt-i18n', i18n ],
  ],
  build: { // webpack
    extend (config, ctx) {
    },
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
}
