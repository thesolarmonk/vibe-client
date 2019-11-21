<template>
  <div>
    <h1>Feed</h1>
    <router-link to="/add">
      <button>Add</button>
    </router-link>
    <div class="post--list">
      <post
        v-for="(post, index) in feed"
        v-bind:key="index"
        v-bind:post_data="post"
        v-bind:index="index"
        :class=" {playing : post.playing }"
      ></post>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

import Post from "../components/Post.vue";

export default {
  name: "",
  components: {
    Post
  },
  data() {
    return {
      feed: [
        {
          playing: false,
          user_id: "tanujlalwani",
          user_name: "Tanuj Lalwani",
          date_posted: 1573701139111,
          track: {
            sentiment_score: 0.8,
            album: {
              images: [
                {
                  url:
                    "https://i.scdn.co/image/ab67616d00001e022fc97d8b44d992db41922534"
                },
                {
                  url:
                    "https://i.scdn.co/image/ab67616d00001e022fc97d8b44d992db41922534"
                },
                {
                  url:
                    "https://i.scdn.co/image/ab67616d00001e022fc97d8b44d992db41922534"
                }
              ]
            },
            name: "placeholder",
            artist: "Hand Habits",
            id: "6ABQcgTtAPCUyMkVwdRNJo"
          }
        },
        {
          playing: false,
          user_id: "nikhilbhatia",
          user_name: "Nikhil Bhatia",
          date_posted: 1573708975208,
          track: {
            sentiment_score: 0.5,
            album: {
              images: [
                {
                  url:
                    "https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795"
                },
                {
                  url:
                    "https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795"
                },
                {
                  url:
                    "https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795"
                }
              ]
            },
            name: "Habits",
            artist: "Shallou",
            id: "1OCrb7dmygmJiDcjdFAPR8"
          }
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["getAccessToken", "getPlayerId", "getCurrentFeedIndex"])
  },
  methods: {
    ...mapActions(["play"]),
    ...mapMutations(["setCurrentFeedIndex"]),
    isCurrentTrack(index) {
      return index == this.getCurrentFeedIndex;
    },
    playPostTrackFromFeed(index) {
      let feed_queue = this.feed.slice(index);
      let feed_queue_uris = feed_queue.map(
        post => `spotify:track:${post.track.id}`
      );

      this.play({
        track_uris: feed_queue_uris,
        player_id: this.getPlayerId,
        access_token: this.getAccessToken,
        current_track: feed_queue[0].track,
        feed_index: index
      });

      this.feed[index].playing = true;
    }
  },
  mounted() {
    // this.feed.length = 2;
    // this.feed.fill(
    //   {
    //     user_id: "tanujlalwani",
    //     user_name: "Tanuj Lalwani",
    //     date_posted: 1573701139111,
    //     track: {
    //       sentiment_score: 0.8,
    //       album: {
    //         images: [
    //           {
    //             url:
    //               "https://i.scdn.co/image/ab67616d00001e022fc97d8b44d992db41922534"
    //           },
    //           {
    //             url:
    //               "https://i.scdn.co/image/ab67616d00001e022fc97d8b44d992db41922534"
    //           },
    //           {
    //             url:
    //               "https://i.scdn.co/image/ab67616d00001e022fc97d8b44d992db41922534"
    //           }
    //         ]
    //       },
    //       name: "placeholder",
    //       artist: "Hand Habits",
    //       id: "6ABQcgTtAPCUyMkVwdRNJo"
    //     }
    //   },
    //   0
    // );
    // console.log(this.feed);
    // let url = `https://vibe-web-api.herokuapp.com/api/users/${getUserId}/getNewsFeed`;
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
    this.setCurrentFeedLength(this.feed.length);
  }
};
</script>

<style>
.playing {
  /* background-color: cornflowerblue; */
}
</style>
