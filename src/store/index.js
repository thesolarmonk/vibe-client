import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticated: false,
    access_token: '',

    user_id: '',
    user_name: '',

    player: null,
    player_id: null,
    playing: false,

    current_track_name: '',
    current_track_id: '',
    current_track_artist: '',

    current_feed_index: null,
    current_feed_length: 0
  },
  getters: {
    isAuthenticated: state => {
      return state.authenticated;
    },
    getAccessToken: state => {
      return state.access_token;
    },
    getUserId: state => {
      return state.user_id;
    },
    getUserName: state => {
      return state.user_name;
    },
    getPlayerId: state => {
      return state.player_id;
    },
    isPlaying: state => {
      return state.playing;
    },
    getCurrentTrack: state => {
      return {
        name: state.current_track_name,
        id: state.current_track_id,
        artist: state.current_track_artist
      };
    },
    getCurrentFeedIndex: state => {
      return state.current_feed_index;
    }
  },
  mutations: {
    login(state, payload) {
      state.authenticated = true;
      state.access_token = payload.access_token;
      state.user_id = payload.user_id;
      state.user_name = payload.user_name;
    },
    logout(state) {
      state.authenticated = false;
      state.access_token = '';
    },
    play(state, payload) {
      state.playing = true;
      if (payload.current_track) {
        state.current_track_id = payload.id;
        state.current_track_name = payload.name;
        state.current_track_artist = payload.artist;
        state.current_feed_index = payload.feed_index;
      }
    },
    pause(state) {
      state.playing = false;
    },
    setCurrentTrack(state, payload) {
      state.current_track_name = payload.name;
      state.current_track_id = payload.id;
      state.current_track_artist = payload.artist;
    },
    setCurrentFeedLength(state, length) {
      state.current_feed_length = length;
    }
  },
  actions: {
    play: ({ commit }, payload) => {
      let url = `https://api.spotify.com/v1/me/player/play?device_id=${payload.player_id}`;
      let body = null;

      if (payload.track_uri != null) {
        body = JSON.stringify({
          uris: [payload.track_uri]
        });
      }

      fetch(url, {
        method: 'PUT',
        body: body,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${payload.access_token}`
        }
      })
        .then(response => {
          commit('play');
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  modules: {}
});
