import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index.js';
import { setCookie, getCookie } from '../js/helper.js';

import Login from '../views/Login.vue';
import Feed from '../views/Feed.vue';
import Profile from '../views/Profile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      var vibe_auth_cookie = getCookie('vibe_auth');

      if (vibe_auth_cookie) {
        store.dispatch('login', {
          access_token: vibe_auth_cookie,
          user_id: '',
          user_name: ''
        });
        next('/feed');
      }

      next();
    }
  },
  {
    path: '/feed',
    name: 'feed',
    component: Feed,
    beforeEnter: (to, from, next) => {
      if (to.hash) {
        let hash = to.hash;
        let stringEnd = hash.indexOf('&');
        let access_token = hash.substring(14, stringEnd);

        store.commit('login', access_token);

        setCookie('vibe_auth', access_token, 0.041666667);

        to.hash = '';
      }
      next();
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
