import { createApp } from 'vue';
import router from './router/index';
import App from './App.vue';
import 'ress';
import VueGtag from 'vue-gtag';

const app = createApp(App);
app.use(router);
app.use(
  VueGtag,
  {
    config: { id: process.env.VUE_APP_GA_MEASUREMENT_ID },
  },
  router
);
app.mount('#app');
