<template>
  <div style="display: flex">
    <Left />

    <div style="margin: 2% 0 0 5%; width: 70%">
      <h2>Router</h2>
      <br />

      <img src="~/assets/images/vsDoc/router1.png" /><br /><br />
      <span> layouts/default.vue 에 router 후 Nuxt에 바인딩 된다. <br /> </span
      ><br /><br />
      <img src="~/assets/images/vsDoc/router2.png" /><br /><br />
      <span> Nuxt의 Route는 Pages하단의 vue 파일로 설정 된다.<br /> </span
      ><br /><br />
      <img src="~/assets/images/vsDoc/router3.png" /><br /><br />
      <span>
        npm run dev시 .nuxt/routes.json 위치에 router 정보가 생성된다.</span
      ><br /><br />
      <img src="~/assets/images/vsDoc/router4.png" /><br /><br />
      <span> NuxtLink의 :to 로 Nuxt 라우터 페이지 이동울 한다.<br /> </span>
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
