<template>
  <div>
    <h1 class="page-title--h1">Search</h1>
    <form class="search-bar">
      <input
        type="text"
        class="search-bar--input"
        placeholder="Search for songs and friends"
      />
      <button class="search-bar--submit">Search</button>
    </form>
    <div v-if="showSearch" class="recently-played">
      <h3 class="page-title--h3">Recently Played Tracks</h3>
      <div class="recently-played--list">
        <track-item
          v-for="track in recently_played_tracks"
          v-bind:key="track.track.id"
          v-bind:track_data="track.track"
        ></track-item>
      </div>
    </div>
  </div>
</template>

<script>
import TrackItem from '../components/Track.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'search',
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
    ...mapGetters(['getAccessToken', 'getPlayerId']),
    showSearch() {
      return this.search_results.length != 0;
    }
  },
  mounted() {
    let recently_played_limit = 10;
    let url = `${process.env.VUE_APP_HOST}/v1/me/player/recently-played?limit=${recently_played_limit}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${this.getAccessToken}`
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
      // let url = `${process.env.VUE_APP_HOST}/api/users/${getUserId}`;
      let data = {
        user_id: this.getUserId,
        user_name: this.getUserName,
        date_posted: new Date().getTime(),
        track_id: track_id
      };

      console.log('Posting track: ' + JSON.stringify(data));

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

<style></style>
