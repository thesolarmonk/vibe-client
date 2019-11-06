import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Feed from '../views/Feed.vue';

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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
