import { Configuration as NuxtConfiguration } from '@nuxt/types'
import router from './routes'

const envPath = `config/.env.${process.env.ENV || 'local'}`
require('dotenv').config({ path: `src/${envPath}` })

const nuxtConfig: NuxtConfiguration = {
  mode: 'spa',
  srcDir: 'src/',

  env: {},
  dotenv: {
    filename: envPath,
  },

  server: {
    port: 8000,
    host: '0.0.0.0',
  },

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Tailwind Samples',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: '@/components/common/loading.vue',

  /*
   ** Global CSS
   */
  css: ['@/assets/css/root.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    [
      '@nuxt/typescript-build',
      {
        typescript: {
          typeCheck: true,
          ignoreNotFoundWarnings: true,
        },
      },
    ],
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    configPath: '@/config/tailwind.config.js',
    cssPath: '@/assets/css/tailwind.css',
    purgeCSSInDev: false,
  },

  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-webfontloader', '@nuxtjs/svg'],

  webfontloader: {
    google: {
      families: ['Noto+Sans+JP'],
    },
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isClient }) {},
    extractCSS: true,
  },

  router: { ...router },
}

export default nuxtConfig
