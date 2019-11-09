import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticated: false,
    access_token: '',

    player: null,
    player_id: null,
    playing: false
  },
  getters: {
    isAuthenticated: state => {
      return state.authenticated;
    },
    getAccessToken: state => {
      return state.access_token;
    },
    getPlayerId: state => {
      return state.player_id;
    },
    isPlaying: state => {
      return state.playing;
    }
  },
  mutations: {
    login(state, access_token) {
      state.authenticated = true;
      state.access_token = access_token;
    },
    logout(state) {
      state.authenticated = false;
      state.access_token = '';
    },
    play(state) {
      state.playing = true;
    },
    pause(state) {
      state.playing = false;
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
