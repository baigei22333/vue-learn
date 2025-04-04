import { getInfo, setInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      // 个人权证相关
      userInfo: getInfo()
    }
  },
  mutations: {
    // 所有mutations 第一个参数都是state,第二个才是 payload
    setUserInfo (state, newUserInfo) {
      state.userInfo = newUserInfo
      setInfo(newUserInfo)
    }
  },
  actions: {
    logout (context) {
      // 个人信息重置
      context.commit('setUserInfo', {})

      // 购物车信息要重置(跨模块调用 mutation) cart/setCartList
      context.commit('cart/setCartList', [], { root: true })
    }
  },
  getter: {

  }
}
