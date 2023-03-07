<template>
  <div style="display: flex">
    <Left />

    <div style="margin: 2% 0 0 5%; width: 70%">
      <h2>화살표 함수</h2>
      <br />

      <img src="../../assets/images/vsDoc/fnc1.png" /><br /><br />
      <span>
        function 키워드로 생성한 일반 함수와 화살표함수의 가장 큰 차이점은 this
        이다. 일반 함수는 함수를 선언할 때, this에 바인딩할 객체가 정적으로
        결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라
        this에 바인딩할 객체가 동적으로 결정된다. <br /><br />
        화살표함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다.
        동적으로 결정되는 일반 함수와 달리 화살표 함수의 this는 언제나 상위
        스코프의 this를 가리킨다.

        <br />
      </span>
      <button type="button" @click="fnc1" class="btn btn-primary btn-sm">
        click( fnc1 )
      </button>
      <button type="button" @click="fnc2" class="btn btn-secondary btn-sm">
        click( fnc2 )
      </button>
    </div>
  </div>
</template>
<script>
import Left from "~/components/exampleList/Left";
export default {
  components: {
    Left,
  },
  methods: {
    //기존 함수
    fnc1: function () {
      alert("fnc1");
      console.log(this);
    },

    //화살표 함수
    fnc2: () => {
      alert("fnc2");
      console.log(this);
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
