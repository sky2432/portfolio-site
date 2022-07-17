<template>
  <div>
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/The/Header.vue';
import TheFooter from './components/The/Footer.vue';
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
