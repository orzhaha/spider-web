const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',

  chainWebpack: (config) => {
    // NOTE: alias
    config.resolve.alias.set('@', path.join(__dirname, 'src'))
    config.resolve.alias.set('vue', 'vue/dist/vue.esm.js')

    // NOTE: 设置 bundle-analyzer
    if (process.env.NODE_ENV !== 'production') {
      config.plugin('bundle-analyzer').use(BundleAnalyzerPlugin)
    }
  }
}
