<template>
  <div class="base-count">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
  // data 必须是一个函数 -> 保证每个组件实例，维护独立的组件
  data() {
    console.log("data 函数执行了", this);

    return {
      count: 999,
    };
  },
};
</script>

<style>
.base-count {
  margin: 20px;
}
</style>