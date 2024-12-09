<template>
  <div class="App">
    <!-- 头部组件 -->
    <HmHeader></HmHeader>
    <!-- 主体组件 -->
    <HmMain></HmMain>
    <!-- 底部组件 -->
    <HmFooter></HmFooter>

    <!-- HmFooter 按下tab 补齐不了 需要设置 vscode 左下角 设置 搜索 trigger on table 勾选 -->
  </div>
</template>

<script>
import HmHeader from "./components/HmHeader.vue";
import HmMain from "./components/HmMain.vue";
import HmFooter from "./components/HmFooter.vue";
export default {
  components: {
    // '组件名':'组件对象'
    HmHeader: HmHeader,
    HmMain,
    HmFooter,
  },
};
</script>

<style>
.App {
  width: 600px;
  height: 700px;
  background-color: #87ceeb;
  margin: 0 auto;
  padding: 20px;
}
</style>