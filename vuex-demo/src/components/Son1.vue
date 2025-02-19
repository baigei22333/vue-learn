<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值：<label>{{ count }}</label>
    <br />
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="handleAdd(10)">值 + 10</button>
    <button @click="changeCountAction(666)">一秒后修改成666</button>
    <button @click="changeFn">修改标题</button>

    <hr />
    <div>{{ $store.state.list }}</div>
    <div>{{ $store.getters.filterList }}</div>
    <hr />
    <!-- 测试访问模块中的state - 原生 -->
    <div>{{ $store.state.user.userInfo.name }}</div>
    <button @click="updateUser">更新个人信息</button>
    <button @click="updateUser2">一秒后更新信息</button>
    <div>{{ $store.state.setting.theme }}</div>
    <button @click="updateTheme">更新主题</button>

    <hr>
    <!-- 测试访问模块中的getters - 原生 -->
    <div>{{$store.getters['user/UpperCaseName']}}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Son1Com',
  created () {
    // console.log(this.$store.getters)
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    handleAdd (n) {
      // 错误代码(vue 默认不会监测，监测需要成本)
      // this.$store.state.count++
      // console.log(this.$store.state.count)
      // 应该通过 mutation 核心概念，进行数据修改
      // 需要提交调用mutation
      this.$store.commit('addCount', {
        count: n,
        msg: '哈哈'
      }) // 载荷 也就是 这个 n 有且只能有1个参数 如果需要多个参数，可以包装成一个对象
    },
    changeFn () {
      this.$store.commit('changeTitle', '黑马程序员')
    },
    ...mapActions(['changeCountAction']),
    handleChange () {
      // 调用action
      // this.$store.dispatch('action名字',额外参数)
      this.$store.dispatch('changeCountAction', 666)
    },
    updateUser () {
      // $store.commit('模块名/mutation名',额外传参)
      this.$store.commit('user/setUser', {
        name: 'xiaowang',
        age: 25
      })
    },
    updateUser2 () {
      // 调用action dispatch
      this.$store.dispatch('user/setUserSecond', {
        name: 'xiaowang',
        age: 25
      })
    },
    updateTheme () {
      this.$store.commit('setting/setTheme', 'pink')
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
