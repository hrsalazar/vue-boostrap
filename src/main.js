/* eslint-disable no-console */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';


Vue.config.productionTip = false;
Vue.use(BootstrapVue, VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
