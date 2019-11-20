<template>
  <div id="app" class="app">
    <router-view class="app--view"></router-view>
    <player v-if="isAuthenticated" class="app--nav"></player>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Player from "./components/Player.vue";

export default {
  name: "app",
  computed: {
    ...mapGetters(["isAuthenticated"])
  },
  components: {
    Player
  }
};
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  margin: 0px;
}

.app {
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: [view-start] 10fr [view-end nav-start] 1fr [nav-end];
}

.app--view {
  grid-row: view-start / view-end;
  overflow-x: scroll;
}

.app--nav {
  grid-row: nav-start / nav-end;
  overflow: hidden;
}
</style>
