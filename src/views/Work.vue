<template>
  <div>
    <article class="article">
      <div class="article-container">
        <h2 class="article-title">
          {{ work.title }}
          <span :class="`work-tag-article work-tag-${work.genre}`">
            <span v-if="work.genre == 'work'">仕事</span>
            <span v-if="work.genre == 'personal'">個人開発</span>
          </span>
        </h2>
        <div class="article-body">
          <swiper
            :modules="modules"
            navigation
            :pagination="{ clickable: true }"
            :slides-per-view="1"
            :space-between="50"
          >
            <swiper-slide v-for="image in work.images" :key="image.image.url">
              <img :src="image.image.url" alt="" />
            </swiper-slide>
          </swiper>

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
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },

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
