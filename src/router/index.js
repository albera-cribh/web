import { createRouter, createWebHashHistory } from 'vue-router'

// 由于使用HTML跳转方式，移除对xhgk.vue的引用
const routes = [
  // 可以保留其他路由配置，或者清空routes数组
  // 如果不需要其他路由，可以保持空数组
]

// 使用try-catch处理可能的API不兼容问题
let router;
try {
  // Vue Router 4.x 语法
  router = createRouter({
    history: createWebHashHistory(),
    routes
  })
} catch (error) {
  // 降级处理
  console.warn('Vue Router初始化失败，使用备用配置:', error)
  // 简单的备用对象
  router = {
    install: function(app) {
      app.config.globalProperties.$router = this
      app.config.globalProperties.$route = { path: '' }
    },
    push: function(location) {
      console.log('导航到:', location)
      // 简单的页面跳转
      window.location.hash = location
    }
  }
}

export default router