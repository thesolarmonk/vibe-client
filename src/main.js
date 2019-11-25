import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Buefy from 'buefy';
Vue.use(Buefy);

// import './../node_modules/bulma/css/bulma.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

// Remove
import vuetify from '@/plugins/vuetify';
Vue.use(vuetify);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
