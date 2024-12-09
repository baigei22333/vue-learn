<template>
  <div class="App">
    <div class="box" @click="fn"></div>
  </div>
</template>


<script>
// 导出的是当前组件的配置项
// 里面可以提供 data methods computed watch 生命周期八大钩子
export default {
  created() {
    console.log("我是created");
  },
  methods: {
    fn() {
      alert("你好");
    },
  },
};
</script>


<style lang="less">
/* 
  让style 支持less
  1. 给style 加上 lang="less"
  2. 安装依赖包 less less-loader
    npm i less less-loader -D (开发依赖)
*/
.App {
  width: 400px;
  height: 400px;
  background: pink;
  .box {
    width: 100px;
    height: 100px;
    background-color: skyblue;
  }
}
</style>