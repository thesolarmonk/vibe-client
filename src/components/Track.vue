<template>
  <div class="card track" :class="{ 'is-profile': isProfile }">
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
          <a
            v-if="isFeed"
            v-show="!isProfile"
            class="button is-black track--play"
          >
            <span
              v-if="index == currentFeedIndex && isPlaying"
              class="icon is-large"
              @click="pause()"
            >
              <i class="fas fa-3x fa-pause-circle"></i>
            </span>
            <span v-else class="icon is-large" @click="playFromFeed()">
              <i class="fas fa-3x fa-play-circle"></i>
            </span>
          </a>
          <a v-else v-show="!isProfile" class="button is-black track--post-new">
            <span class="icon is-large" @click="postTrack()">
              <i v-if="added" class="fas fa-2x fa-check-circle"></i>
              <i v-else class="fas fa-2x fa-plus-circle"></i>
            </span>
          </a>
        </div>
        <div class="media-content">
          <p
            class="track--name title is-2"
            :class="{
              'is-4': isFeed,
              'is-6': !isFeed,
              'truncate-text': !isFeed
            }"
            v-html="trackName"
          ></p>
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
  props: ['track_data', 'isFeed', 'index', 'isProfile'],
  data() {
    return {
      added: false
    };
  },
  computed: {
    ...mapGetters(['currentFeedIndex', 'isPlaying', 'getUserId']),
    albumArtUrl() {
      if (this.isFeed || this.isProfile) {
        return this.track_data.album_art.url;
      } else {
        return this.track_data.album.images[0].url;
      }
    },
    trackName() {
      if (this.isFeed || this.isProfile) {
        return this.track_data.track_name;
      } else {
        return this.track_data.name;
      }
    },
    trackArtist() {
      if (this.isFeed || this.isProfile) {
        return this.track_data.artist_name;
      } else {
        return this.track_data.artists[0].name;
      }
    },
    trackId() {
      if (this.isFeed || this.isProfile) {
        return this.track_data.track_id;
      } else {
        return this.track_data.id;
      }
    }
  },
  methods: {
    ...mapActions(['play', 'pause']),
    postTrack() {
      let url = `${process.env.VUE_APP_VIBE_API_URL}/api/users/${this.getUserId}/post/${this.trackId}`;

      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => {
          if (response.status == 200) {
            console.log('Posted track successfully');
            this.added = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    playFromFeed() {
      if (this.index == this.currentFeedIndex) {
        this.play({ feed_index: null });
      } else {
        this.play({ feed_index: this.index });
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

.is-profile {
  margin-bottom: 25px;
}

.is-profile:first-child {
  margin-top: 6px;
}

.is-profile:last-child {
  margin-bottom: 6px;
}

.truncate-text {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
