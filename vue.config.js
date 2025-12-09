const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // GitHub Pages需要设置为仓库名称或'/'根路径
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  
  // 配置多页面应用
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // ... 其他页面配置保持不变
  },
  
  // 配置静态资源处理
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  
  // 生产环境配置
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 确保所有资源使用相对路径
      // 对于多页面应用，需要为每个页面的HTML插件单独配置
      Object.keys(module.exports.pages).forEach(page => {
        config.plugin(`html-${page}`).tap(args => {
          args[0].minify = {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            removeScriptTypeAttributes: true
          }
          return args
        })
      })
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