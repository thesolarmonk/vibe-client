<template>
  <div class="profile">
    <div class="profile-container profile--user-info">
      <img class="profile--user-info-picture" :src="getProfilePic" />
      <div class="profile--user-info-name container has-text-centered">
        <h5 class="title is-5 profile--user-info-name">{{ getUserName }}</h5>
        <span class="tag is-light profile--user-info-id">@{{ getUserId }}</span>
      </div>
      <div class="profile--user-info-stats">
        <div class="container has-text-centered stats">
          <h4 class="title is-4 is-uppercase">4</h4>
          <h4 class="subtitle is-4">Friends</h4>
        </div>
        <div class="container has-text-centered stats">
          <h4 class="title is-4 is-uppercase">10</h4>
          <h4 class="subtitle is-4">Posts</h4>
        </div>
        <div class="container has-text-centered stats">
          <h4 class="title is-4 is-uppercase">Mood</h4>
          <h4 class="subtitle is-4">Happy</h4>
        </div>
      </div>
    </div>
    <div class="profile-container profile--graphs">
      <chart :track_data="sentiment_dataset" :data_time_frame="time_frame_to_name[data_time_frame]"></chart>
      <b-dropdown aria-role="list" v-model="data_time_frame" id="time_range">
        <button class="button is-primary" slot="trigger">
          <span>Time range</span>
          <b-icon icon="menu-down"></b-icon>
        </button>
        <b-dropdown-item aria-role="listitem" value="short_term">Last 4 weeks</b-dropdown-item>
        <b-dropdown-item aria-role="listitem" value="medium_term">Last 6 months</b-dropdown-item>
        <b-dropdown-item aria-role="listitem" value="long_term">All time</b-dropdown-item>
      </b-dropdown>
      <table class="table profile--graphs-table">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Sentiment</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(track, index) in sentiment_dataset" :key="index">
            <td>
              <strong v-html="track.track_name"></strong>
            </td>
            <td v-html="track.artist_name"></td>
            <td>
              <span
                v-html="Math.floor(track.sentiment_score * 100)"
                class="post--sentiment tag"
                :class="{
                  'is-info':
                    track.sentiment_score < 0.15 && track.sentiment_score >= 0,
                  'is-primary':
                    track.sentiment_score < 0.3 &&
                    track.sentiment_score >= 0.15,
                  'is-warning':
                    track.sentiment_score < 0.5 && track.sentiment_score >= 0.3,
                  'is-danger': track.sentiment_score >= 0.5
                }"
              ></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="profile-container profile--posts-list">
      <track-item
        v-for="(post, index) in recently_posted_tracks"
        :key="index"
        :track_data="post.track"
        :isProfile="true"
        class="track"
      ></track-item>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Chart from "../components/Chart.vue";
import TrackItem from "../components/Track.vue";

export default {
  components: {
    Chart,
    TrackItem
  },
  data() {
    return {
      recently_posted_tracks: 0,
      sentiment_dataset: {},
      data_time_frame: "medium_term",
      time_frame_to_name: {
        short_term: "Last 4 weeks",
        medium_term: "Last 6 months",
        long_term: "All time"
      }
    };
  },
  computed: {
    ...mapGetters(["getUserId", "getUserName", "accessToken", "getProfilePic"])
  },
  methods: {
    get_chart_data: function() {
      let url = `${process.env.VUE_APP_VIBE_API_URL}/api/users/${this.getUserId}/post/history`;

      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => (this.recently_posted_tracks = data))
        .catch(err => {
          console.log(err);
        });

      let limit = 100;
      console.log(this.data_time_frame);
      url = `${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me/top/tracks?time_range=${this.data_time_frame}&limit=${limit}`;

      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${this.accessToken}`
        }
      })
        .then(response => response.json())
        .then(data => {
          url = `${process.env.VUE_APP_VIBE_API_URL}/api/sentiment/tracks`;

          fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json"
            }
          })
            .then(response => response.json())
            .then(data => (this.sentiment_dataset = data))
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.get_chart_data();
  },
  watch: {
    data_time_frame: function() {
      this.get_chart_data();
    }
  }
};
</script>

<style scoped>
.profile {
  display: grid;

  grid-template-columns: [info-start] 1fr [info-end graphs-start] 2.5fr [graphs-end posts-start] 1fr [posts-end];
  column-gap: 25px;

  padding: 2% 2% 3% 2%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
}

.profile-container {
  border-radius: 20px;
}

.profile--user-info {
  grid-column: info-start / info-end;

  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #ffffff;
}

.profile--user-info-picture {
  /* border: 2px dashed white; */
  border-radius: 250000px;

  padding: 30px 35px 10px 35px;
}

.profile--user-info-name {
  margin: 10px 0px !important;
}

.profile--user-info-id {
  margin-bottom: 15px;
}

.stats {
  width: 100%;
  padding: 25px 0 20px 0;
  border-top: 1px solid white;
}

.profile--graphs {
  grid-column: graphs-start / graphs-end;

  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #ffffff;

  overflow-x: scroll;
}

/* .profile--graphs-table {
  width: 90% !important;
  padding: 0px 5% 0px 5%;
} */

.carousel,
.carousel-list,
.carousel-item,
.graph {
  height: 100% !important;
}

.profile--posts-list {
  grid-column: posts-start / posts-end;

  overflow-x: scroll;
}

.profile--posts-list::-webkit-scrollbar {
  display: none;
}

#time_range {
  margin-left: 2em;
  margin-bottom: 2em;
}
</style>
