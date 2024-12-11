<template>
  <div class="app">
    <div>账号: <input v-model="account" type="text" /></div>
    <div>密码: <input v-model="password" type="text" /></div>
    <div>
      <!-- <button @click="getValues">获取数据</button>
      <button @click="resetValues">重置数据</button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    // 方法1：收集表单数据，返回一个对象
    getValues() {
      return {
        account: this.account,
        password: this.password,
      };
    },
    resetValues() {
      this.account = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
.app {
  border: 2px solid #ccc;
  padding: 10px;
}
.app div {
  margin: 10px 0;
}
.app div button {
  margin-right: 8px;
}
</style>