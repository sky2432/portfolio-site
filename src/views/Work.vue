<template>
  <div>
    <article class="article">
      <div class="article-container">
        <h2 class="article-title">
          {{ work.title }}
          <br class="sp-only" />
          <span :class="`work-tag-article work-tag-${work.genre}`">
            <span v-if="work.genre == 'work'">仕事</span>
            <span v-if="work.genre == 'personal'">個人開発</span>
          </span>
        </h2>
        <div class="article-body">
          <div class="swiper">
            <div class="swiper-wrapper porro-swiper-wrapper">
              <div class="swiper-slide">
                <img src="/img/works/porro/top.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="/img/works/porro/media.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="/img/works/porro/detail.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="/img/works/porro/reservation.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="/img/works/porro/payment.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="/img/works/porro/payment_success.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="/img/works/porro/search.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="/img/works/porro/search_result.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="/img/works/porro/favorite.jpg" alt="" />
              </div>
            </div>
            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <small>※α版の画像になります。</small>
          <div v-for="(content, index) in work.contents" :key="index">
            <h3>{{ content.title }}</h3>
            <p v-html="content.text"></p>
          </div>
        </div>
        <div class="home-link">
          <a href="/#works">Works一覧へ</a>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    workId: {
      type: String,
      require: true,
    },
  },

  data() {
    return {
      work: '',
    };
  },

  created() {
    this.fetchWork();
  },

  methods: {
    async fetchWork() {
      try {
        const res = await axios.get(
          'https://portfolio-site.microcms.io/api/v1/works/' + this.workId,
          {
            headers: {
              'X-MICROCMS-API-KEY': process.env.VUE_APP_MICROCMS_API_KEY,
            },
          }
        );
        console.log(res);
        this.work = res.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
