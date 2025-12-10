const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // 本地运行时使用相对路径
  publicPath: './',
  
  // 配置多页面应用
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  
  // 配置静态资源处理
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\//, to: '/index.html' },
        { from: /^\/A\//, to: '/A/' }
      ]
    },
    allowedHosts: 'all'
  }
})