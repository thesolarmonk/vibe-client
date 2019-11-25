<template>
  <div class="feed">
    <div class="post--list">
      <post
        v-for="(post, index) in feed"
        :key="index"
        :post_data="post"
        :index="index"
        :class="{ playing: index == currentFeedIndex }"
        :id="post.track.id"
      ></post>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Post from "../components/Post.vue";

export default {
  name: "",
  components: {
    Post
  },
  computed: {
    ...mapGetters(["feed", "currentFeedIndex"])
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
  margin: 6% auto 5% 10%;

  width: 29%;
}

.feed {
  background-image: linear-gradient(0deg, #ffe600 0%, #000000 50%);
}

.feed::-webkit-scrollbar {
  width: 6px;
}

.feed::-webkit-scrollbar-track {
  background-color: #000000;
}

.feed::-webkit-scrollbar-thumb {
  background-color: #ffffff;
  border-radius: 15px;
}

.feed::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(#ffd400, #c2ff00, #00ffde, #6ae2cb, #00ccff);
}

.feed::-webkit-scrollbar-corner {
  background-color: #000000;
}
</style>
