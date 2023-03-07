<template>
  <div style="display: flex">
    <Left />

    <div style="margin: 2% 0 0 5%; width: 70%">
      <h2>layout</h2>
      <br />

      <img src="~/assets/images/vsDoc/layout1.png" /><br /><br />
      <span>
        화면 레이아웃을 구성한다.<br />
        - default.vue 명칭으로 기본 구성 할수있다.<br />
        - error.uve 명칠을 사용하면 라우트시 오류 페이지로 자동 전환 된다.<br />
      </span>
    </div>
  </div>
</template>
<script>
import Left from "~/components/exampleList/Left";
export default {
  components: {
    Left,
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
