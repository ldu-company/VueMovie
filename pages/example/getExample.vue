<template>
  <div style="display: flex">
    <Left />

    <div style="margin: 2% 0 0 5%; width: 70%">
      1. Git 에서 NUXT-MOVE-APP 프로젝트를 받는다.<br />
      2. 터미널을 실행한다.<br />
      <img src="../../assets/images/vsDoc/1.png" /><br /><br />
      3. npm install 을 입력 후 엔터를 눌러 프로젝트를 install.<br />
      <img src="../../assets/images/vsDoc/2.png" /><br /><br />
      4. npm run dev를 입력하여 서버 실행.<br />
      <img src="../../assets/images/vsDoc/3.png" /><br /><br />
      5. http://localhost:3000/ 을 입력하여 홈페이지 확인.<br />
      <img src="../../assets/images/vsDoc/4.png" /><br /><br />
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
      imgName: 1,
      // img1: require("~/assets/image/1.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 400px;
  /* height: 150px; */
  object-fit: cover;
}
</style>
