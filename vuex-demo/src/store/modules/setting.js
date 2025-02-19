import { setTimeout } from 'core-js'

// setting 模块
const state = {
  theme: 'light', // 主题色
  desc: '测试demo'
}
const mutations = {
  setTheme (state, newTheme) {
    state.theme = newTheme
  }
}
const actions = {
  setThemeSecond (context, newTheme) {
    setTimeout(() => {
      context.commit('setTheme', newTheme)
    }, 1000)
  }
}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
