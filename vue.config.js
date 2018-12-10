const path = require('path')
const QiniuPlugin = require('qiniu-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {

  baseUrl: process.env.NODE_ENV === 'production' ? 'https://static.chaodp.com/supplierAdmin/' : '/',

  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
    extract: process.env.NODE_ENV === 'production'
  },

  lintOnSave: process.env.NODE_ENV !== 'production',

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    proxy: {
      '/api/*': {
        target: 'http://t.sp.shop.chaodp.com',
        changeOrigin: true,
        secure: false,
      }
    }
  },

  configureWebpack: config => {
    let _config = {}
    _config.resolve = {
      alias: {
        utils: resolve('src/utils'),
        api: resolve('src/assets/api/index.js')
      }
    }
    if (process.env.NODE_ENV === 'production') {
      _config.plugins = [
        new QiniuPlugin({
          ACCESS_KEY: 'vmTCREvwoIH3u4if282WvCbJ8vCTVkW-kTuLuPr2',
          SECRET_KEY: '3-s3qBM1JjH6tPdTjfihP50WkGBkTx85V0CX-TyL',
          bucket: 'chao',
          path: 'supplierAdmin/'
        })
      ]
    }
    return _config
  },

  outputDir: 'dist',
  assetsDir: 'static',
  runtimeCompiler: false,
  productionSourceMap: true,
  filenameHashing: true,
  integrity: false,

}
