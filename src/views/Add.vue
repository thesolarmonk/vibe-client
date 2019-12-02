<template>
  <div class="search">
    <div class="search-bar">
      <div class="field">
        <p class="control has-icons-left">
          <input
            v-on:keyup.enter="search()"
            v-model="query"
            type="text"
            placeholder="Search for songs and friends"
            class="input is-medium search-bar--input"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
          </span>
        </p>
      </div>
      <!-- <button class="search-bar--submit">Search</button> -->
    </div>
    <h3 v-if="showSearch" class="results-title title is-3">
      Recently Played Tracks
    </h3>
    <h3 v-else class="results-title title is-3">
      Search Results
    </h3>
    <div v-if="showSearch" class="recently-played">
      <div class="recently-played--list">
        <track-item
          v-for="(track, index) in recently_played_tracks"
          :key="index"
          :track_data="track.track"
          class="track"
        ></track-item>
      </div>
    </div>
    <div v-else class="search-results">
      <h4 class="results-subtitle subtitle is-4">
        Tracks
      </h4>
      <div class="search-results--list-tracks">
        <track-item
          v-for="(track, index) in search_results.tracks.items"
          :key="index"
          :track_data="track"
          class="track"
        ></track-item>
      </div>
      <h4 class="results-subtitle subtitle is-4">
        Users
      </h4>
      <div class="search-results--list-users">
        <user-item
          v-for="(user, index) in search_results.users"
          :key="index"
          :user_data="user"
          class="user"
        ></user-item>
      </div>
    </div>
  </div>
</template>

<script>
import TrackItem from '../components/Track.vue';
import UserItem from '../components/User.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'search',
  components: {
    TrackItem,
    UserItem
  },
  data() {
    return {
      recently_played_tracks: 0,
      search_results: null,
      query: ''
    };
  },
  computed: {
    ...mapGetters(['accessToken', 'getUserId']),
    showSearch() {
      return this.search_results === null;
    }
  },
  mounted() {
    this.search_results = null;

    let recently_played_limit = 12;
    let url = `${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me/player/recently-played?limit=${recently_played_limit}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
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
    search() {
      if (this.query == '') {
        this.search_results = null;
      } else {
        let url = `${process.env.VUE_APP_VIBE_API_URL}/api/search?q=${this.query}`;

        fetch(url, {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(data => (this.search_results = data))
          .catch(err => {
            console.log(err);
          });
      }
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

  /* background-image: linear-gradient(0deg, rgb(85, 85, 85) 0%, #000000 25%); */
  background-color: rgba(0, 0, 0, 0.4);
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

.recently-played,
.search-results {
  grid-row: results-start / results-end;
  overflow-x: scroll;
}

.recently-played::-webkit-scrollbar,
.search-results::-webkit-scrollbar {
  display: none;
}

.recently-played--list,
.search-results--list-tracks,
.search-results--list-users {
  display: grid;
  overflow-x: scroll;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;

  padding-bottom: 5%;
}

.results-subtitle {
  grid-column: 4fr;
}

.track {
  grid-column: span 1;
  border: 1px solid #fff;
}
</style>
