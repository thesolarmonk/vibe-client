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
    }
  },
  actions: {},
  modules: {}
});
