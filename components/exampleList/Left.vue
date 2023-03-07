<template>
  <main class="d-flex flex-nowrap" style="float: left; padding: 10px">
    <h1 class="visually-hidden">Sidebars examples</h1>

    <div class="flex-shrink-0 p-3 bg-white" style="width: 280px">
      <a
        class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
      >
        <svg class="bi pe-none me-2" width="30" height="24">
          <use xlink:href="#bootstrap" />
        </svg>
        <NuxtLink :to="baseUrl" class="fs-5 fw-semibold"> Movie Docs </NuxtLink>
      </a>
      <ul class="list-unstyled ps-0">
        <!--  -->
        <li v-for="menuData in menuData" class="mb-1">
          <button
            class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
            aria-expanded="true"
            v-if="menuData.lv === 1"
          >
            {{ menuData.menuNm }}
          </button>
          <div
            class="collapse show"
            id="home-collapse"
            v-if="menuData.lv === 2"
          >
            <!-- -->
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <NuxtLink :to="menuData.pagePath" class="nav-link">
                  {{ menuData.menuNm }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </li>
        <!--  -->
      </ul>
    </div>
    <div class="b-example-divider b-example-vr"></div>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    // vuex mapState 로 데이터 가져오기
    ...mapState("docMenu", ["baseUrl", "menuData"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>

<style scoped>
@import "~/assets/css/sidebars.css";
</style>
