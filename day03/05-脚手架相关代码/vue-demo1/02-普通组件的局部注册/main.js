// 此文件核心作用：导入App.vue，基于App.vue 创建结构渲染index.html
// 1. 导入 Vue 核心包
import Vue from 'vue'

// 2. 导入 App.vue 根组件
import App from './App.vue'

// 提示文本:当前处于什么环境 (生产环境 / 开发环境)
Vue.config.productionTip = false


// 3. Vue 实例化,提供render 方法 -> 基于 App.vue 创建结构渲染 index.html
new Vue({
  // el: '#app', // 作用: 和 %mount('选择器') 作用一致,用于指定vue 所管理的容器
  // render: h => h(App),
  render: (createElement) => {
    // 基于App 创建元素结构
    return createElement(App)
  }
}).$mount('#app')
