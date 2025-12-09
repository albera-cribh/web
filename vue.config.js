const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // GitHub Pages需要设置为仓库名称'/web/'
  publicPath: process.env.NODE_ENV === 'production' ? '/web/' : '/',
  
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
  
  // 生产环境配置 - 简化配置，避免冲突
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 移除可能导致路径冲突的配置
      // 让publicPath配置自动处理所有资源路径
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