<template>
  <div class="base-count">
    <button @click="handleSub">-</button>
    <span>{{ count }}</span>
    <button @click="handleAdd">+</button>
  </div>
</template>

<script>
export default {
  // 1.自己的数据随便修改  （谁的数据 谁负责）
  // data() {
  //   return {
  //     count: 100,
  //   };
  // },
  // 2.外部传过来的数据 不能随便修改

  // 单向数据流：父组件的prop更新，会单向向下流动，影响到子组件
  props: {
    count: Number,
  },
  methods: {
    handleAdd() {
      // 子传父 this.$emit(事件名，参数)
      this.$emit("changeCount", this.count + 1);
    },
    handleSub() {
      this.$emit("changeCount", this.count - 1);
    },
  },
};
</script>

<style>
.base-count {
  margin: 20px;
}
</style>