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
    login: ({ commit }, payload) => {
      fetch(`${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${payload.access_token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          payload.user_id = data.id;
          payload.user_name = data.display_name;
          commit('login', payload);
        })
        .catch(err => {
          console.log(err);
        });
    },
    play: ({ commit }, payload) => {
      let url = `${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me/player/play?device_id=${payload.player_id}`;
      let body = null;

      if (payload.track_uris) {
        body = JSON.stringify({
          uris: payload.track_uris
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
          if (typeof payload.current_track !== 'undefined') {
            payload.current_track.index = payload.feed_index;
          }
          commit('play', payload.current_track);
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    },
    pause: ({ commit }, payload) => {
      let url = `${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me/player/pause?device_id=${payload.player_id}`;

      fetch(url, {
        method: 'PUT',
        body: null,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${payload.access_token}`
        }
      })
        .then(response => {
          commit('pause');
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    },
    skip: ({ commit }, payload) => {
      let url = `${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me/player/${payload.skip}?device_id=${payload.player_id}`;

      fetch(url, {
        method: 'POST',
        body: null,
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
