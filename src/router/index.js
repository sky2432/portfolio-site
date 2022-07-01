import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from '../views/top.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top,
  },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
});

export default router;
