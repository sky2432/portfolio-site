<template>
  <div>
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
    <div class="page-top" id="js-page-top" @click="moveTop">
      <span class="material-icons-outlined">expand_less</span>
    </div>
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

  methods: {
    moveTop() {
      $('body,html').animate({ scrollTop: 0 }, 300);
      return false;
    },
  },
};
</script>

<style>
body {
  font-family: 'Montserrat', 'Helvetica Neue', Arial,
    'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
  font-size: 15px;
  letter-spacing: 0.05em;
  color: #333;
}

a {
  transition: opacity 0.3s;
  text-decoration: none;
  color: #1ca9e3;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
  border-style: none;
}

.pc-only {
  display: inline;
}

.sp-only {
  display: none;
}

.icon {
  padding-right: 5px;
}

/*--------------------------------
 レイアウト
---------------------------------*/
.wrapper {
  padding-top: 73px;
}

.section {
  padding: 90px 0;
}

.section:nth-of-type(odd) {
  background-color: #f7f7f7;
}

.container {
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 40px;
}

/*--------------------------------
 Works
---------------------------------*/
.works-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -40px;
}

.work-tag-work {
  background-color: rgb(153, 153, 255);
}

.work-tag-private {
  background-color: rgb(251, 163, 155);
}

/*--------------------------------
 ページトップ
---------------------------------*/
.page-top {
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  background-color: #4c4c4c;
}

.page-top .material-icons-outlined {
  vertical-align: bottom;
  color: #fff;
}

/*media Queries 767 smartphone
----------------------------------------------------*/
@media screen and (max-width: 767px) {
  body {
    font-size: 14px;
  }

  .pc-only {
    display: none;
  }

  .sp-only {
    display: block;
  }

  /* レイアウト */
  .wrapper {
    padding-top: 57px;
  }

  .section {
    padding: 60px 0;
  }

  .container {
    padding: 0 20px;
  }
}
</style>
