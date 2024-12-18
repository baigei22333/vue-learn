<template>
  <div>
    <h1>自定义指令</h1>
    <input v-focus ref="inp" type="text" />
  </div>
</template>

<script>
export default {
  // mounted() {
  //   this.$refs.inp.focus();
  // },

  // 2. 局部注册指令
  directives: {
    // 指令名：指令的配置项
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style>
.box {
  width: 800px;
  min-height: 500px;
  border: 3px solid orange;
  border-radius: 5px;
  position: relative;
}
.news {
  display: flex;
  height: 120px;
  width: 600px;
  margin: 0 auto;
  padding: 20px 0;
  cursor: pointer;
}
.news .left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
}
.news .left .title {
  font-size: 20px;
}
.news .left .info {
  color: #999999;
}
.news .left .info span {
  margin-right: 20px;
}
.news .right {
  width: 160px;
  height: 120px;
}
.news .right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>