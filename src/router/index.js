import { createRouter, createWebHashHistory } from 'vue-router';
import Top from '../views/Top.vue';
import Work from '../views/Work.vue';

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

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
