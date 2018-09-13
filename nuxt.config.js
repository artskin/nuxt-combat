module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    website: '智人admin-UI',
    title: '智人',
    titleTemplate: '%s - 数据管理后台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css:[
    // { src: 'muse-ui/dist/muse-ui.css'}
    { src: 'element-ui/lib/theme-chalk/index.css'}
  ],
  plugins: [
    //{ src: '~plugins/iview.js', ssr: false },
    { src: '~plugins/element-ui.js', ssr: true }
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extractCSS:{
      allChunks: true
    },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
