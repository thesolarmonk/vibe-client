<template>
  <div class="search">
    <form class="search-bar">
      <div class="field">
        <p class="control has-icons-left">
          <input
            type="text"
            class="input is-medium search-bar--input"
            placeholder="Search for songs and friends"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
          </span>
        </p>
      </div>
      <!-- <button class="search-bar--submit">Search</button> -->
    </form>
    <h3 v-if="showSearch" class="results-title title is-3">Recently Played Tracks</h3>
    <div v-if="showSearch" class="recently-played">
      <div class="recently-played--list">
        <track-item
          v-for="track in recently_played_tracks"
          :key="track.track.id"
          :track_data="track.track"
          class="track"
        ></track-item>
      </div>
    </div>
  </div>
</template>

<script>
import TrackItem from "../components/Track.vue";

import { mapGetters } from "vuex";

export default {
  name: "search",
  components: {
    TrackItem
  },
  data() {
    return {
      recently_played_tracks: 0,
      search_results: 0
    };
  },
  computed: {
    ...mapGetters(["accessToken"]),
    showSearch() {
      return this.search_results.length != 0;
    }
  },
  mounted() {
    let recently_played_limit = 12;
    let url = `${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me/player/recently-played?limit=${recently_played_limit}`;

    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${this.accessToken}`
      }
    })
      .then(response => response.json())
      .then(data => (this.recently_played_tracks = data.items))
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    postTrack(track_id) {
      // let url = `${process.env.VUE_APP_VIBE_API_URL}/api/users/${getUserId}`;
      let data = {
        user_id: this.getUserId,
        user_name: this.getUserName,
        date_posted: new Date().getTime(),
        track_id: track_id
      };

      console.log("Posting track: " + JSON.stringify(data));

      // fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json"
      //   },
      //   body: JSON.stringify(data)
      // })
      //   .then(response => console.log(response.json()))
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  }
};
</script>

<style>
.search {
  display: grid;
  grid-template-rows: [input-start] 0.5fr [input-end header-start] 0.3fr [header-end results-start] 10fr [results-end];

  overflow: hidden;

  padding: 0% 5%;

  background-image: linear-gradient(0deg, rgb(85, 85, 85) 0%, #000000 25%);
}

.search-bar {
  grid-row: input-start / input-end;
  width: 40%;
  margin: 3% 0% 2% 0%;
}

.results-title {
  grid-row: header-start / header-end;
  margin: 1% 0% 0% 0%;
}

.recently-played {
  grid-row: results-start / results-end;
  overflow-x: scroll;
}

.recently-played::-webkit-scrollbar {
  display: none;
}

.recently-played--list {
  display: grid;
  overflow-x: scroll;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;

  padding-bottom: 5%;
}

.track {
  grid-column: span 1;
  border: 1px solid #fff;
}
</style>
