<template>
  <div class="feed" :class="currentSentiment">
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
    ...mapGetters(["feed", "currentFeedIndex", "currentSentiment"])
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
  /* background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 70%
  ); */

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
