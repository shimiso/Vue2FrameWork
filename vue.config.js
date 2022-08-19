const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const vuxLoader = require('@vux/loader')

module.exports = defineConfig({
  transpileDependencies: true,

  //configureWebpack函数形式
  configureWebpack: config => {
    vuxLoader.merge(config, {
      plugins: ['vux-ui']
    })

    // 返回一个将要合并得对象
    return {
      module: {
        rules: [
          {
            test: /\.(yaml|yml)$/,
            loader: 'js-yaml-loader'
          }
        ]
      },
      plugins: [
        new webpack.ProvidePlugin({
          'window.Quill': 'quill/dist/quill.js',
          'Quill': 'quill/dist/quill.js'
        })
      ]
    }
  }
})
