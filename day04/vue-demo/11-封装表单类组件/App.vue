<template>
  <div class="app">
    <!-- <BaseSelect
      :cityId="selectId"
      @changeId="selectId = $event"
    ></BaseSelect> -->
    <!-- v-model => :value + @input -->
    <BaseSelect v-model="selectId"></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from "./components/BaseSelect.vue";
export default {
  data() {
    return {
      selectId: "102",
    };
  },
  components: {
    BaseSelect,
  },
  methods: {
    handleChange(e) {
      console.log(e);
      this.selectId = e;
    },
  },
};
</script>

<style>
</style>