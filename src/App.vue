<template>
  <div id="app" class="app" :class="currentSentiment">
    <!-- <keep-alive> -->
    <router-view class="app--view"></router-view>
    <!-- </keep-alive> -->
    <player v-if="isAuthenticated" class="app--nav"></player>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

import Player from './components/Player.vue';

export default {
  name: 'app',
  computed: {
    ...mapGetters(['isAuthenticated', 'isPlaying', 'currentSentiment'])
  },
  methods: {
    ...mapActions(['play', 'pause'])
  },
  components: {
    Player
  },
  mounted() {
    var that = this;
    window.addEventListener('keydown', function(event) {
      if (event.keyCode == 32) {
        event.preventDefault();
        if (that.isPlaying) {
          that.pause();
        } else {
          that.play({ feed_index: null });
        }
      }
    });
  }
};
</script>

<style lang="scss">
@import './styles/_reset.scss';

@import url('https://rsms.me/inter/inter.css');
html {
  font-family: 'Inter', sans-serif;
}
@supports (font-variation-settings: normal) {
  html {
    font-family: 'Inter var', sans-serif;
  }
}

@font-face {
  font-family: 'Marvin Visions';
  src: url('./assets/fonts/marvin-visions.woff2') format('woff2');
}

@import '~bulma/sass/utilities/_all';

// Set your colors
$scheme-main: #000;
$text: #fff;
$text-strong: #fff;
$weight-semibold: 800;

$family-primary: 'Inter', sans-serif;
$family-sans-serif: $family-primary;

$box-radius: 15px;

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';

html,
body {
  user-select: none;

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

.app {
  background-image: radial-gradient(
    100% 80% at bottom,
    transparent 0%,
    #000 75%
  );

  background-color: #000;

  transition: background-color 10000ms linear;
}

.none {
  background-color: rgb(85, 85, 85);
}

.happy {
  background-color: #ffe600;
}

.sad {
  background-color: #00aeff;
}
</style>
