<template>
  <div style="display: flex">
    <Left />

    <div style="margin: 2% 0 0 5%; width: 70%">
      <h2>v-model</h2>
      <br />

      <div class="mb-3">
        <label for="basic-url" class="form-label">
          변경 데이터 : {{ msg }}
        </label>
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

      <br /><br />

      <img src="~/assets/images/vsDoc/vmodel1.png" /><br /><br />
      <div>
        <span>
          - v-model로 msg 데이터 와 input을 양방향 바인딩 시켜준다.<br />
          - v-model.lazy : 입력후 엔터를 치거나 포커스 아웃일 경우 변경<br />
          - v-model.number : 입력 받은 값을 숫자형식으로 받는다.<br />
          - v-model.trim : 입력받은 값의 공백을 제거한다.<br />
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
      msg: "기본 입력 데이터",
    };
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
