export default {
  namespaced: true,
  state: () => ({
    baseUrl: "/example/getExample",
    menuData: [
      { menuNm: "환경설정", lv: 1, pagePath: "" },
      { menuNm: "개발환경", lv: 2, pagePath: "" },
      { menuNm: "Vue", lv: 1, pagePath: "" },
      { menuNm: "디렉토리 구조", lv: 2, pagePath: "/vueFolder" },
      { menuNm: "Layout.vue", lv: 2, pagePath: "/example/layoutTest" },
      { menuNm: "Router", lv: 2, pagePath: "/example/routerTest" },
      { menuNm: "Vue 문법", lv: 1, pagePath: "" },
      { menuNm: "템플릿 문법", lv: 2, pagePath: "/example/template" },
      { menuNm: "화살표 함수", lv: 2, pagePath: "/example/functionTest" },
      { menuNm: "v-model", lv: 2, pagePath: "/example/vmodel" },
      { menuNm: "v-if", lv: 2, pagePath: "/example/vif" },
      { menuNm: "Watch", lv: 2, pagePath: "/example/watch" },
      { menuNm: "Emit", lv: 2, pagePath: "/example/emitTest" },
      { menuNm: "mapState", lv: 2, pagePath: "/example/mapState" },
      { menuNm: "Error처리 Log", lv: 1, pagePath: "" },
      { menuNm: "npm run dev", lv: 2, pagePath: "/example/runDev" },
    ],
  }),
};
