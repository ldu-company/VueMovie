<template>
  <div style="display: flex">
    <Left />

    <div style="margin: 2% 0 0 5%; width: 70%">
      <h2>vue template</h2>
      <br />

      <img src="../../assets/images/vsDoc/template1.png" /><br /><br />
      <div>
        <span>
          - template : html 태그 영역 <br />
          - script : template, data, methods 등 뷰 컴포넌트의 내용을 정의하는
          영역<br />
          - components : import한 컴포넌트를 사용 선언 하는 영역<br />
          - created : 인스턴스가 작성된 후 동기적으로 호출됩니다. 이 단계에서
          인스턴스는 데이터 처리, 계산된 속성, 메서드, 감시/이벤트 콜백 등과
          같은 옵션 처리를 완료<br />
          - data : 사용할 데이터를 선언 하는 영역<br />
          - methods : 사용할 이벤트를 선언하는 영역<br />
          - style : 템플릿에 추가한 HTML 태그의 CSS 스타일을 정의하는 영역<br />
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
