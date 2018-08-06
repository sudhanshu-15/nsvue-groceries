import Vue from 'nativescript-vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Login from './components/Login/Login';

import store from './store';

import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
Vue.config.silent = false;
Vue.use(VueAxios, axios)

new Vue({

  render: h => h(Login),

  store,

}).$start();
