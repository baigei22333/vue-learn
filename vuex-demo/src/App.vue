<template>
  <div id="app">
    <h1>根组件
      -
      {{title}}
      -
      {{count}}</h1>
    <input type="text" :value="count" @input="handleInput" />
    <Son1></Son1>
    <hr>
    <Son2></Son2>
  </div>
</template>

<script>
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'
import { mapState } from 'vuex'
// console.log(mapState(['count', 'title']))

export default {
  name: 'app',
  created () {
    // console.log(this.$router) // 没配
    // console.log(this.$store) // 打印出来了表明仓库创建成功
  },
  computed: {
    ...mapState(['count', 'title'])
  },
  data: function () {
    return {}
  },
  methods: {
    handleInput (e) {
      // 1. 实时获取输入框的值
      // console.log(+e.target.value)
      const num = +e.target.value

      this.$store.commit('changeCount', num)

      // 2. 提交mutation,调用commit 函数
    }
  },
  components: {
    Son1,
    Son2
  }
}
</script>

<style lang="less" scoped>
#app{
  border: 1px solid #000;
  margin: 20px auto;
  width: 800px;
}
</style>
