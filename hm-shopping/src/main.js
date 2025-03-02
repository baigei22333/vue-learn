import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/common.less'
// import 'vant/lib/index.css'
// import Vant from 'vant'
// 插件安装初始化：内部会将所有的vant所有组件进行导入注册
// Vue.use(Vant)
import '@/utils/vant-ui'
// import { Toast } from 'vant'
// Toast('11')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
