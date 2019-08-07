const manifestJSON = require('./public/manifest.json')
// vue.config.js
module.exports = {
  pwa: {
    themeColor: manifestJSON.theme_color,
    name: manifestJSON.short_name,
    msTileColor: manifestJSON.background_color,
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'service-worker.js'
    }
  },
  configureWebpack: {
    module: {
      rules: [

      ]
    }
  },

  productionSourceMap: false
}
