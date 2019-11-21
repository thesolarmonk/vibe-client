<template>
  <div class="track">
    <img class="track--album-art" :src="albumArtUrl" />
    <p class="track--name" v-html="trackName"></p>
    <button v-if="isFeed" class="track--play" @click="play(index)">Play</button>
    <button v-else class="track--post-new" @click="postTrack(trackId)">Post track</button>
    <!-- <p class="post--poster-name"></p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["track_data", "isFeed", "index"],
  computed: {
    ...mapGetters(["getUserId", "getUserName"]),
    albumArtUrl() {
      return this.track_data.album.images[2].url;
    },
    trackName() {
      return this.track_data.name;
    },
    trackId() {
      return this.track_data.id;
    }
  },
  methods: {
    postTrack(track_id) {
      if (!this.isFeed) {
        this.$parent.postTrack(track_id);
      }
    },
    play(track_id) {
      if (this.isFeed) {
        this.$parent.playPostTrack(track_id);
      }
    }
  }
};
</script>

<style>
.track {
  border: 1px solid #999;
  margin: 10px;
}
</style>
