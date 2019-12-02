import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index.js';
import { getCookie } from '../js/helper.js';

import Login from '../views/Login.vue';
import Feed from '../views/Feed.vue';
import Profile from '../views/Profile.vue';
import Add from '../views/Add.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (to.hash) {
        let hash = to.hash;
        let stringEnd = hash.indexOf('&');
        let access_token = hash.substring(14, stringEnd);

        store.dispatch('login', {
          access_token: access_token,
          user_id: '',
          user_name: '',
          profile_pic_url: ''
        });

        next('/');
      } else if (store.state.user_id == null) {
        var vibe_auth_cookie = getCookie('vibe_auth');

        if (vibe_auth_cookie) {
          let cookie = JSON.parse(vibe_auth_cookie);

          store.state.access_token = cookie.access_token;
          store.state.user_id = cookie.user_id;
          store.state.user_name = cookie.user_name;
          store.state.profile_pic_url = cookie.profile_pic_url;

          store.state.authenticated = true;

          next('/feed');
        } else {
          next('/feed');
        }
      }
      next();
    }
  },
  {
    path: '/feed',
    name: 'feed',
    component: Feed
    // beforeEnter: (to, from, next) => {
    //   var vibe_auth_cookie = getCookie('vibe_auth');

    //   if (vibe_auth_cookie) {
    //     let cookie = JSON.parse(vibe_auth_cookie);

    //     store.commit('login', {
    //       access_token: cookie.access_token,
    //       user_id: cookie.user_id,
    //       user_name: cookie.user_name,
    //       profile_pic_url: cookie.profile_pic_url
    //     });

    //     next();
    //   }
    // }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/add',
    name: 'add',
    component: Add
  },
  { path: '*', redirect: '/feed' }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_HOST,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
