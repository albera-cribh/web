const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // GitHub Pages子目录部署，设置正确的publicPath
  publicPath: '/web/',
  
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