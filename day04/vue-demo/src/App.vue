<template>
  <div class="app">
    <!-- 编辑状态 -->
    <div v-if="isShowEdit">
      <input type="text" v-model="editValue" ref="inp" />
      <button>确认</button>
    </div>

    <!-- 默认状态 -->
    <div v-else>
      <span>{{ title }}</span>
      <button @click="handleEdit">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "大标题",
      isShowEdit: false,
      editValue: "",
    };
  },
  methods: {
    handleEdit() {
      // 1. 显示输入框 (异步dom 更新)
      this.isShowEdit = true;
      // 2. 让 输入框获取焦点
      console.log(this.$refs.inp);

      // this.$nextTick(() => {
      //   console.log(this.$refs.inp);
      //   this.$refs.inp.focus();
      // });

      // 这个也可以 $nextTick会更精准
      // setTimeout(() => {
      //   console.log(this.$refs.inp);
      //   this.$refs.inp.focus();
      // }, 0);
    },
  },
};
</script>

<style>
</style>