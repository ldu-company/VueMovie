<template>
  <div style="display: flex">
    <Left />

    <div style="margin: 2% 0 0 5%; width: 70%">
      <h2>Watch</h2>
      <br />
      text : {{ msg }}
      <button type="button" @click="chgData" class="btn btn-primary btn-sm">
        변경
      </button>
      <br /><br />
      <img src="~/assets/images/vsDoc/watch1.png" /><br /><br />
      <div>
        <span>
          - Watch : 특정한 데이터가 변경되는 것을 감지하여 추가 로직을 만들수
          있다. <br />
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
      msg: "Test1",
    };
  },
  watch: {
    msg() {
      alert(this.msg);
    },
  },
  methods: {
    chgData() {
      this.msg = "chg Data Test2";
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
