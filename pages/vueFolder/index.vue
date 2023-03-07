<template>
  <div style="display: flex">
    <Left />
    <div style="margin: 2% 0 0 5%; width: 70%">
      <h2>vue 디렉토리 폴더 구조</h2>
      <br />
      <div><img src="~/assets/images/folder/1.png" /><br /><br /></div>
      <div>
        <span>
          1. .nuxt/ : 넉스트프레임워크가 컴파일 등에 사용 하는 임시폴더<br />
          2. assets/ : 디렉토리는 LESS, SASS, Javascript 같은 컴파일되지 않은
          에셋들을 포함하는 디렉토.<br />
          3. layouts/ : 디렉토리는 애플리케이션의 레이아웃을 포함하는
          디렉토리<br />
          4. components/ : 컴포넌트 폴더는 페이지들에 사용되는 커스텀 컴포넌트
          모듈들을 담는다 <br />
          5. pages/ : MVC패턴의 V(템플릿),C(스크립트) 이다. 라우팅을 포함 해서
          View 단을 구성하는 코드를 담는다.(라우팅 규칙에서 index.vue 로 된
          파일명은 생략 가능<br />
          6. plugins/ : 디렉토리는 루트 vue.js 애플리케이션이 생성되기 전
          실행하고 싶은 자바스크립트 플러그인을 포함하는 디렉토리<br />
          static/ : robots.txt라던가 favicon.ico 같이 동적일 필요가 없는 파일
          모여 있는 디렉토리.<br />
          7. middleware/ : 디렉토리는 애플리케이션의 미들웨어를 포함하는
          디렉토리<br />
          입니다. 미들웨어는 페이지나 레이아웃이 렌더링되기 전에 실행할 사용자
          정의 함수를 정의할 수 있습니다.<br />
          8. store/ : 디렉토리는 Vuex Store 파일을 포함하는 디렉토리 입니다.
          Vuex Store 옵션은 Nuxt.js 프레임워크에 의해 실행되며, index.js 파일을
          생성하면 프레임워크가 자동으로 옵션을 활성화<br />
          9. nuxt.config.js : 파일은 Nuxt.js의 사용자 정의 설정을 포함하는
          파일<br />
          10. package.json : 애플리케이션의 의존성과 스크립트를 포함하는 파일<br />
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
  /* height: 200px; */
  object-fit: cover;
  width: 40%;
  float: left;
  margin-right: 20px;
}
</style>
