<template>
  <div style="display: flex">
    <Left />

    <div style="margin: 2% 0 0 5%; width: 70%">
      <h2>App.vue</h2>
      <br />

      <img src="../../assets/images/vsDoc/appTest1.png" /><br /><br />
      <span>
        1. App.vue 는 Vue 애플리케이션의 최상위 컴포넌트<br />
        2. template : <br />
        - 화면 상에 표시할 요소 작성 실시<br />
        - 컴포넌트의 모든 마크업 구조와 디스플레이 로직 작성<br />
        - RouterView는 vue-router 에서 지원하는 기능으로 Router로 이동하는
        페이지가 디스플레이<br />
        3. script : <br />
        - import 구문을 사용해 template에서 사용할 컴포넌트 불러온다<br />
        - export default 구문은 해당 App 컴포넌트가 main.js 파일에서 호출.<br />
        4. style : - 스타일 지정 실시</span
      >
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
