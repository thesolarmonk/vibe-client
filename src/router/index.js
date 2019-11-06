import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '../store/index.js';

import Login from '../views/Login.vue';
import Feed from '../views/Feed.vue';
import Profile from '../views/Profile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/feed',
    name: 'feed',
    component: Feed,
    beforeEnter: (to, from, next) => {
      if (to.hash) {
        let hash = to.hash;
        let stringEnd = hash.indexOf('&');
        let token = hash.substring(14, stringEnd);
        console.warn(token);
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
