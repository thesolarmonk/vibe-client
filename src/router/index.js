import Vue from 'vue';
import VueRouter from 'vue-router';
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
    component: Feed
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
