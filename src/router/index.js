import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from '../views/Top.vue';
import Work from '../views/Work.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top,
  },
  {
    path: '/works/:workId',
    name: 'Work',
    component: Work,
    props: true,
  },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
});

export default router;
