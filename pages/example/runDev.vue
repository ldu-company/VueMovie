<template>
  <div style="display: flex">
    <Left />

    <div style="margin: 2% 0 0 5%; width: 70%">
      <h2>App.vue</h2>
      <br />

      <img src="../../assets/images/vsDoc/runDev1.png" /><br /><br />
      <span>
        npm run dev 입력시 서버 기동중 오류가 발생<br />
        - Error: Cannot find module 'node:fs'<br /> </span
      ><br /><br />
      <img src="../../assets/images/vsDoc/runDev2.png" /><br /><br />
      <span> nvm ls 명령어로 현재 node 의 버젼 확인<br /> </span><br /><br />
      <img src="../../assets/images/vsDoc/runDev3.png" /><br /><br />
      <span>
        nvm use v18.14.2 명령어로 현재 node 의 버젼을 18버젼으로 변경<br /> </span
      ><br /><br />
      <img src="../../assets/images/vsDoc/runDev4.png" /><br /><br />
      <span> nvm run dev로 서버 구동. 성공확인<br /> </span><br /><br />
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
