<template>
  <div style="display: flex">
    <Left />

    <div style="margin: 2% 0 0 5%; width: 70%">
      <h2>emit</h2>
      <br />
      <h6>- 부모 Page</h6>
      <br />
      <div class="mb-3">
        <label for="basic-url" class="form-label">
          변경 데이터 : {{ dataStr }}
        </label>
        <br />
      </div>
      <CompBtn @click="log" @chgStr="chgMsg"> Button Name </CompBtn>
      <br /><br />
      <img src="~/assets/images/vsDoc/emit1.png" /><br /><br />
      <div>
        <span>
          Emit은 최상위 컴포넌트가 하나 이상인 경우, 이벤트를 직접 컴포넌트에
          할당하는 것을 의미한다. <br />
          1. 부모 페이지에서 @click="log" @chgStr="chgMsg" 정의 <br />
          2. 자식 컴포넌트에서 emits: ["click", "chgStr"] 사용 정의 <br />
          3. 자식 컴포넌트에서 @click="$emit('click')" 으로 부모의 이벤트를
          호출. <br />
          4. 자식 컴포넌트에서 this.$emit("chgStr", this.msg); 으로 부모의
          이벤트에 데이터를 전달. <br />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Left from "~/components/exampleList/Left";
import CompBtn from "~/components/exampleList/compEmit";
export default {
  components: {
    Left,
    CompBtn,
  },
  data() {
    return {
      dataStr: "",
    };
  },
  methods: {
    log() {
      alert("부모 페이지 log!!");
    },
    chgMsg(msg) {
      this.dataStr = msg;
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
