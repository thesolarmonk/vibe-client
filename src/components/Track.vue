<template>
  <div class="card track">
    <div class="card-image">
      <figure class="image is-3by3">
        <img
          class="track--album-art"
          :src="albumArtUrl"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <a v-if="isFeed" class="button is-black track--play">
            <span
              v-if="index == currentFeedIndex && isPlaying"
              class="icon is-large"
              @click="pause()"
            >
              <i class="fas fa-3x fa-pause-circle"></i>
            </span>
            <span
              v-else
              class="icon is-large"
              @click="play({ feed_index: index })"
            >
              <i class="fas fa-3x fa-play-circle"></i>
            </span>
          </a>
          <a v-else class="button is-black track--post-new">
            <span class="icon is-large" @click="postTrack(trackId)">
              <i class="fas fa-3x fa-plus-circle"></i>
            </span>
          </a>
        </div>
        <div class="media-content">
          <p class="track--name title is-4" v-html="trackName"></p>
          <p class="track--artist subtitle is-6" v-html="trackArtist"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  props: ['track_data', 'isFeed', 'index'],
  computed: {
    ...mapGetters(['currentFeedIndex', 'isPlaying']),
    albumArtUrl() {
      return this.track_data.album.images[2].url;
    },
    trackName() {
      return this.track_data.name;
    },
    trackArtist() {
      return this.track_data.artist;
    },
    trackId() {
      return this.track_data.id;
    }
  },
  methods: {
    ...mapActions(['play', 'pause']),
    postTrack(track_id) {
      if (!this.isFeed) {
        this.$parent.postTrack(track_id);
      }
    }
  }
};
</script>

<style lang="scss">
.track {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
}
</style>
