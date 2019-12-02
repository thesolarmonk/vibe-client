<template>
  <div class="box post">
    <h6 class="post--user_name title is-6">Shared by {{ user_name }}</h6>
    <h6 class="post--divider">&nbsp;•&nbsp;</h6>
    <h6 class="post--time title is-6">{{ date_posted }}</h6>
    <span v-if="sentiment_score >= 0.35" class="post--sentiment tag is-warning"
      >happy</span
    >
    <span v-else class="post--sentiment tag is-info">sad</span>
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
      return this.post_data.user.user_name;
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

<style lang="scss">
.post {
  /* border: 3px solid white; */
  margin: 40px 0;

  background-color: rgba(0, 0, 0, 0.6);
  // border: 1px solid #ffffff;
}

.playing {
  .track {
    border: 3px dashed #fff;
  }
}

.post--user_name {
  // float: left;
  display: inline;
  margin-bottom: 20px;
}

.post--time {
  // float: right;
  display: inline;
  margin-bottom: 20px;

  color: #888 !important;
}

.post--sentiment {
  float: right;
  margin-bottom: 20px;
}

.post--divider {
  display: inline;
  letter-spacing: 5px;

  // color: #555;
}
</style>
