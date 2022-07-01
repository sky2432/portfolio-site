import Vue from 'vue';
import router from './router/index';
import App from './App.vue'
import Example from './components/example.vue';

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
