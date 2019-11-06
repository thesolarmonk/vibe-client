import Vue from 'vue';
import Vuex from 'vuex';
// import { stat } from 'fs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticated: false,
    access_token: ''
  },
  getters: {
    isAuthenticated: state => {
      return state.authenticated;
    },
    getAccessToken: state => {
      return state.access_token;
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
