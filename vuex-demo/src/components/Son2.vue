<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值：<label>{{ count }}</label>
    <br />
    <button @click="subCount(1)">值 - 1</button>
    <button @click="subCount(5)">值 - 5</button>
    <button @click="handleSub(10)">值 - 10</button>
    <button @click="changeCountAction(888)">一秒后修改成888</button>
    <button @click="changeTitle('前端程序员')">修改标题</button>

    <hr />
    <div>{{ filterList }}</div>
    <hr />
    <!-- 访问模块中的state -->
    <div>{{ user.userInfo.name }}</div>
    <button @click="setUser({name:'xiaoli',age:80})">更新个人信息</button>
    <div>{{ setting.theme }}</div>
    <button @click="setTheme('dark')">更新主题</button>
    <button @click="setThemeSecond('dark')">一秒后更新主题</button>

    <div>{{ userInfo.name }}</div>
    <div>{{ theme }}</div>
    <div>{{ desc }}</div>

    <hr>
    <!-- 访问模块中的getters -->
    <div>{{UpperCaseName}}</div>
    <div></div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    // mapState 和 mapGetters 都是映射属性
    ...mapState(['count', 'user', 'setting']),
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme', 'desc']),
    ...mapGetters(['filterList']),
    ...mapGetters('user', ['UpperCaseName'])
  },
  methods: {
    // mapActions 和 map Mutations 都是映射方法
    // 全局级别的映射
    ...mapActions(['changeCountAction']),
    ...mapActions('setting', ['setThemeSecond']),
    ...mapMutations(['subCount', 'changeTitle']),
    handleSub (n) {
      this.subCount(n)
    },

    // 分模块的映射
    ...mapMutations('setting', ['setTheme']),
    ...mapMutations('user', ['setUser'])
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
