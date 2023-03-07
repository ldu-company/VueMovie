<template>
  <div style="display: flex">
    <Left />

    <div style="margin: 2% 0 0 5%; width: 70%">
      <h2>v-if</h2>
      <br />
      isShow : {{ isShow }}
      <button type="button" @click="chgData" class="btn btn-primary btn-sm">
        변경
      </button>
      <br /><br />

      <h2 v-if="isShow">v-if !!!</h2>
      <h2 v-else>v-else</h2>

      <br /><br />

      <img src="~/assets/images/vsDoc/vif1.png" /><br /><br />

      <div>
        <span>
          - isShow 값이 true 일 경우 -> v-if 를 렌더링.<br />
          - isShow 값이 false 일 경우 -> v-else 를 렌더링. <br />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Left from "~/components/exampleList/Left";
export default {
  components: {
    Left,
  },
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    chgData() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 800px;
  /* height: 150px; */
  object-fit: cover;
}
</style>
