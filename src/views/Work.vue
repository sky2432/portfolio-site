<template>
  <div>
    <article class="article">
      <div class="article-container">
        <h2 class="article-title">
          {{ work.title }}
          <br class="sp-only" /><span v-if="work.client" class="pc-only"
            >|</span
          >
          {{ work.client }}
          <br class="sp-only" />
          <span :class="`work-tag-article work-tag-${work.genre}`">
            <span v-if="work.genre == 'work'">仕事</span>
            <span v-if="work.genre == 'private'">個人開発</span>
          </span>
        </h2>
        <div class="article-body">
          <swiper
            v-if="work.images"
            :modules="modules"
            navigation
            :pagination="swiper.pagination"
            :loop="work.images.length > 1 ? true : false"
            :breakpoints="swiper.breakpoints"
          >
            <swiper-slide v-for="image in work.images" :key="image.image.url">
              <img :src="image.image.url" alt="" />
            </swiper-slide>
          </swiper>

          <div
            class="article-content"
            v-for="(content, index) in work.contents"
            :key="index"
          >
            <h3>{{ content.title }}</h3>
            <p class="content-text" v-html="content.text"></p>
          </div>
        </div>
        <div class="home-link">
          <router-link :to="{ name: 'Top', hash: '#works' }">
            Works一覧へ
          </router-link>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useWork from '@/composables/useWork';
import { toRefs } from 'vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    workId: {
      type: String,
      require: true,
    },
  },

  setup(props) {
    const { workId } = toRefs(props)
    const { work, fetchWork } = useWork(workId);
    fetchWork();

    return {
      work,
      modules: [Navigation, Pagination],
      swiper: {
        pagination: {
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 1.3,
            spaceBetween: 40,
            centeredSlides: true,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
::v-deep(.swiper) {
  padding-bottom: 40px;
}

::v-deep(.swiper-button-next),
::v-deep(.swiper-button-prev) {
  color: #333;
}

::v-deep(.swiper-button-next::after),
::v-deep(.swiper-button-prev::after) {
  font-size: 20px;
}

::v-deep(.swiper-pagination-bullet) {
  border-radius: inherit;
  background: #333;
  width: 54px;
  height: 5px;
}

::v-deep(.swiper-slide) {
  text-align: center;
}

/*media Queries 767 smartphone
----------------------------------------------------*/
@media screen and (max-width: 767px) {
  ::v-deep(.swiper-button-next::after),
  ::v-deep(.swiper-button-prev::after) {
    display: none;
  }
}

/*--------------------------------
 下層：Worksページ
---------------------------------*/
.article {
  padding: 80px 0;
}

.article-container {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
}

.article-title {
  margin-bottom: 30px;
  text-align: center;
}

.work-tag-article {
  margin-left: 10px;
  font-size: 14px;
  font-weight: normal;
  padding: 0 20px;
  border-radius: 20px;
}

.article-body {
  max-width: 720px;
  margin: 0 auto;
  margin-bottom: 80px;
}

.article-body h3 {
  position: relative;
  font-size: 18px;
  margin-bottom: 5px;
  padding-left: 1em;
}

.article-body h3::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  content: '';
  border-radius: 3px;
  background-color: #333;
}

.article-content {
  margin-bottom: 30px;
}

.article-body p {
  font-size: 15px;
  line-height: 1.8;
}

.home-link {
  text-align: center;
}

.article-body ul {
  list-style-position: inside;
}

.content-text li {
  padding-left: 5px;
  padding-bottom: 5px;
}

.article-body h4 {
  margin-top: 10px;
  margin-bottom: 5px;
}

.aws-list {
  padding-left: 20px;
}

.github-list {
  list-style: none;
}

.github-item {
  margin-bottom: 10px;
}

.github-item p {
  margin-bottom: 3px;
}

/*media Queries 767 smartphone
----------------------------------------------------*/
@media screen and (max-width: 767px) {
  .article {
    padding: 50px 0;
  }

  .article-content {
    margin-bottom: 20px;
  }

  .article-body h3 {
    font-size: 16px;
    padding-left: 0.8em;
  }

  .article-body h3:not(:first-child) {
    margin-top: 30px;
  }

  .article-body p {
    font-size: 14px;
    line-height: 1.7;
  }

  .work-tag-article {
    margin-left: 0;
  }

  .github-item p {
    margin-bottom: 3px;
  }
}
</style>
