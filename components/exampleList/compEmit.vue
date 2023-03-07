<template>
  <div>
    <h6>- 자식 Components</h6>
    <br />
    <button
      type="button"
      class="btn btn-primary btn-sm"
      @click="$emit('click')"
    >
      <slot> </slot>
    </button>
    <br />
    <br />
    <div class="input-group">
      <span class="input-group-text" id="basic-addon3">입력</span>
      <input
        type="text"
        class="form-control"
        id="basic-url"
        aria-describedby="basic-addon3"
        v-model="msg"
      />
    </div>
  </div>
</template>

<script>
export default {
  emits: ["click", "chgStr"],
  data() {
    return {
      msg: "",
    };
  },
  watch: {
    msg() {
      this.$emit("chgStr", this.msg);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/main";
</style>
