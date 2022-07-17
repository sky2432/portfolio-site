import { createRouter, createWebHashHistory } from 'vue-router';
import Top from '../views/Top.vue';
import Work from '../views/Work.vue';

const routes = [
  {
    path: '/',
    name: 'Top',
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
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash };
    } else {
      return { top: 0 };
    }
  }
});

export default router;
