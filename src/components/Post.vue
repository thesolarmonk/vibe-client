<template>
  <div class="box post">
    <h6 class="post--user_name title is-6">
      Shared by {{ user_name }} • {{ date_posted }}
    </h6>
    <!-- • Sentiment: {{ sentiment_score }} -->
    <track-item
      class="post--track"
      v-bind:track_data="post_data.track"
      v-bind:isFeed="true"
      v-bind:index="index"
    ></track-item>
  </div>
</template>

<script>
import TrackItem from './Track.vue';

export default {
  name: 'post',
  components: {
    TrackItem
  },
  props: ['post_data', 'index'],
  data() {
    return {};
  },
  computed: {
    user_name() {
      return this.post_data.user_name;
    },
    sentiment_score() {
      return this.post_data.track.sentiment_score;
    },
    date_posted() {
      let datePosted = this.post_data.date_posted;
      let dateNow = new Date().getTime();
      let timeDifferenceDays = Math.abs(dateNow - datePosted) / 864e5;

      if (timeDifferenceDays < 1) {
        return 'Today';
      } else if (Math.floor(timeDifferenceDays) == 1) {
        return 'Yesterday';
      } else {
        return `${Math.floor(timeDifferenceDays)} days ago`;
      }
    }
  }
};
</script>

<style>
.post {
  /* border: 3px solid white; */
  margin: 40px 0;
}

.playing {
  border: 3px dashed #fff;
}
</style>
