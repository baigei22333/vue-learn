// 这里面存放的就是vuex 相关的核心代码
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'
// 插件安装
Vue.use(Vuex)

// 创建仓库(空仓库)
const store = new Vuex.Store(
  // state 状态，即数据，类似于Vue 组件中的data
  // 区别：
  // 1. data 是组件自己的数据
  // 2. state 是所有组件共享的数据
  {
    // 开启严格模式(有利于初学者，检测不规范代码 => 上线时需要移除)
    strict: true, // 上线时候不需要开启这个
    // 1. 通过 state 可以提供数据 （所有组件共享的数据）
    state: {
      title: '大标题',
      count: 100,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    // 定义mutations
    // 2. 通过 mutations 可以提供修改数据的方法
    mutations: {
      // 第一个参数是当前store的state属性
      addCount (state, obj) {
        // console.log(obj)

        state.count += obj.count
      },
      changeCount (state, newCount) {
        state.count = newCount
      },
      subCount (state, n) {
        state.count -= n
      },
      changeTitle (state, newTitle) {
        state.title = newTitle
      }
    },
    // 3. actions 处理异步,注意: 不能直接操作 state, 还是需要 commit mutation
    actions: {
      // context 上下文 (此处未分模块,可以当成store 仓库)
      // context.commit('mutation名字',额外参数)
      changeCountAction (context, num) {
        // 这里是setTimeout 模拟异步, 以后大部分场景是发请求
        setTimeout(() => {
          context.commit('changeCount', num)
        }, 1000)
      }
    },
    // 4. getters 类似于计算属性
    getters: {
      // 注意点
      // 1. 形参第一个参数,就是state
      // 2. 必须有返回值，返回值就是getters的值
      filterList (state) {
        return state.list.filter(item => item > 5)
      }
    },
    // 5. 模块
    modules: {
      user,
      setting
    }
  }
)

// 导出给main.js 使用
export default store
