<template>
  <div class="my-tag">
    <input
      ref="inp"
      v-if="isEdit"
      v-focus
      class="input"
      type="text"
      placeholder="输入标签"
      @blur="isEdit = false"
      :value="value"
      @keyup.enter="handleEnter"
    />
    <div class="text" v-else @dblclick="handleClick">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return { isEdit: false };
  },
  methods: {
    handleClick() {
      //   双击后切换到显示状态
      this.isEdit = true;
      //   立刻获取焦点 (Vue 是异步dom 更新的)
      // 等dom更新完再获取焦点
      //   this.$nextTick(() => {
      //     this.$refs.inp.focus();
      //   });
    },
    handleEnter(e) {
      if (e.target.value.trim() === "") {
        return alert("标签内容不能为空");
      }
      // console.log('回车了');
      // 子传父,将回车时,输入框的内容提交给父组件去更新
      // 由于父组件是v-model,触发事件需要触发 input 事件
      this.$emit("input", e.target.value);
      //   提交完成,关闭输入状态
      this.isEdit = false;
    },
  },
};
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>