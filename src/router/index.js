import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '../components/Login/Login.vue';
import List from '../components/List/List.vue';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/login',
      component: Login,
      meta: {
        title: 'Login',
      },
    },
    {
      path: '/list',
      component: List,
      meta: {
        title: 'List',
      },
    },
    {path: '*', redirect: '/login'},
  ],
});

router.replace('/login');

module.exports = router;
