<template>
  <div id="app">
    <router-view></router-view>
    <player v-if="isAuthenticated"></player>
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
</style>
