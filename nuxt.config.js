import fs from 'fs'
import path from 'path'
const env = process.env.NODE_ENV

const envPath = path.resolve(process.cwd(), `.env.${env}`)
const defaultEnvPath = path.resolve(process.cwd(), '.env')

require('dotenv').config({
  path: fs.existsSync(envPath) ? envPath : defaultEnvPath
})

// ------------------------------------------------------

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Assembly',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com/',
    credentials: true
  },
  buildModules: ['@nuxtjs/dotenv'],
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL
  }
}
