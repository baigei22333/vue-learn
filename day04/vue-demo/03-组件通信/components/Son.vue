<template>
  <div class="son" style="border: 3px solid #000; margin: 10px">
    <!-- 3.直接使用props的值 -->
    我是Son组件
    {{ title }}
    <button @click="changeFn">修改title</button>
  </div>
</template>

<script>
export default {
  name: "Son-Child",
  // 2.通过props来接受
  props: ["title"],
  methods: {
    changeFn() {
      // 1. 通过$emit，向父组件发送消息通知
      this.$emit("changeTitle", "传智教育");
    },
  },
};
</script>

<style>
</style>