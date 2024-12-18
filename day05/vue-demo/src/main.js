import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Find from './views/Find'
import My from './views/My'
import Friend from './views/Friend'
/**
 * 路由的使用步骤:5+2
 *  1. 下载 v3.6.5
 *  2. 引入
 *  3. 安装注册 Vue.use(Vue插件)
 *  4. 创建路由对象
 *  5. 注入到new Vue 中,建立关联
 * 
 *  两个核心步骤
 *  1. 建组件(views目录下),配规则
 *  2. 准备导航链接,配置路由出口(展示的组件展示的位置)
 */
Vue.use(VueRouter)  // VueRouter 插件初始化
Vue.config.productionTip = false

// 创建空的路由对象
const router = new VueRouter({
  // 路由规则 们
  // rote 一条路由规则 {path:路径,component:切换的组件}
  routes: [
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component: Friend },

  ]
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
