<template>
  <div class="feed">
    <div class="post--list">
      <post
        v-for="(post, index) in feed"
        :key="index"
        :post_data="post"
        :index="index"
        :class="{ playing: index == currentFeedIndex }"
        :id="post.track.track_id"
      ></post>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

import Post from '../components/Post.vue';

export default {
  name: '',
  components: {
    Post
  },
  computed: {
    ...mapGetters(['feed', 'currentFeedIndex', 'currentSentiment', 'getUserId'])
  },
  methods: {
    ...mapMutations(['setFeed'])
  },
  mounted() {
    let url = `${process.env.VUE_APP_VIBE_API_URL}/api/users/${this.getUserId}/feed`;
    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => this.setFeed(data))
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.post--list {
  margin: 6% auto 5% 10%;

  width: 29%;
}

/* .feed {
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
} */

.feed::-webkit-scrollbar {
  width: 6px;
}

.feed::-webkit-scrollbar-track {
  background-color: #000000;
}

.feed::-webkit-scrollbar-thumb {
  background-color: #888888;
  border-radius: 15px;
}

.feed::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(#ffd400, #c2ff00, #00ffde, #6ae2cb, #00ccff);
}

.feed::-webkit-scrollbar-corner {
  background-color: #000000;
}
</style>
