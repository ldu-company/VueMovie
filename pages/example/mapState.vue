<template>
  <div style="display: flex">
    <Left />

    <div style="margin: 2% 0 0 5%; width: 70%">
      <h2>mapState</h2>
      <br />

      <img src="~/assets/images/vsDoc/mapState1.png" /><br /><br />
      <div>
        <span>
          - mapState를 vuex에서 import 해온 뒤 ...mapState를 이용하면 된다.
          <br />
          - mapState(['state명'])으로 computed 함수에 기록한 뒤 {{ "name" }}과
          같이 출력할 수 있다.<br />
          그리고 오브젝트 자료도 입력이 가능하며, ({작명: 'name',})와 같이
          사용한다.<br />
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
};
</script>
<style lang="scss" scoped>
img {
  width: 800px;
  /* height: 150px; */
  object-fit: cover;
}
</style>
