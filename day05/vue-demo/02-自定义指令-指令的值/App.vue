<template>
  <div>
    <h1 v-color="color1">指令的值1</h1>
    <h1 v-color="color2">指令的值2</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: "red",
      color2: "orange",
    };
  },
  directives: {
    color: {
      // 1. inserted 提供的是元素被添加到页面中时的逻辑
      inserted(el, binding) {
        // console.log(el);
        // console.log(binding); // binding.value 就是指令的值
        el.style.color = binding.value;
      },

      // 2. update 指令的值修改的时候触发，提供值变化后，dom更新的逻辑
      update(el, binding) {
        el.style.color = binding.value;
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