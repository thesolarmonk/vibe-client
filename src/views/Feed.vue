<template>
  <div class="feed">
    <div class="post--list">
      <post
        v-for="(post, index) in feed"
        v-bind:key="index"
        v-bind:post_data="post"
        v-bind:index="index"
        :class="{ playing: index == currentFeedIndex }"
      ></post>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Post from '../components/Post.vue';

export default {
  name: '',
  components: {
    Post
  },
  computed: {
    ...mapGetters(['feed', 'currentFeedIndex'])
  },
  mounted() {
    // let url = `${process.env.VUE_APP_VIBE_API_URL}/api/users/${getUserId}/getNewsFeed`;
    // fetch(url, {
    //   method: "GET",
    //   headers: {
    //     "content-type": "application/json"
    //   }
    // })
    //   .then(response => this.feed = response.feed)
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
};
</script>

<style>
.post--list {
  margin: 15% auto 5% 10%;

  width: 25%;
}

.feed {
  /* background: #D8D8D8; */
  background-image: linear-gradient(0deg, #ffe600 0%, #000000 50%);
  /* border: 1px solid #979797; */
}
</style>
