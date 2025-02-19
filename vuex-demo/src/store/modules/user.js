// user 模块
const state = {
  userInfo: {
    name: 'zs',
    age: 18
  },
  score: 80
}
const mutations = {
  setUser (state, newUserInfo) {
    state.userInfo = newUserInfo
  }
}
const actions = {
  setUserSecond (context, newUserInfo) {
    // 将异步在action中进行封装
    setTimeout(() => {
      // 去调用mutation context 是上下文，默认提交的就是自己模块的action和mutation
      context.commit('setUser', newUserInfo)
    }, 1000)
  }
}
const getters = {
  // 分模块后，state 指的是子模块的state
  UpperCaseName (state) {
    return state.userInfo.name.toUpperCase()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
