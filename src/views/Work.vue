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
            <!-- 1枚目だけサンプル画像にする -->
            <swiper-slide>
              <WorkImage
                :imageUrl="work.thumbnail.url"
                :isSampleImage="work.isSampleImage"
              ></WorkImage>
            </swiper-slide>
            <swiper-slide v-for="image in work.images" :key="image.image.url">
              <WorkImage :imageUrl="image.image.url"></WorkImage>
            </swiper-slide>
          </swiper>

          <div v-if="period" class="article-content">
            <h3>期間</h3>
            <p class="content-text">
              {{ period }}
            </p>
          </div>

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
import { computed, toRefs } from 'vue';
import WorkImage from '@/components/WorkImage.vue';
import { dayjs } from '@/libs/dayjs';

export default {
  components: {
    Swiper,
    SwiperSlide,
    WorkImage,
  },

  props: {
    workId: {
      type: String,
      require: true,
    },
  },

  setup(props) {
    const { workId } = toRefs(props);
    const { work, fetchWork } = useWork(workId);
    fetchWork();

    const period = computed(() => {
      // データ取得前は空文字を返す
      if (!work.value) return '';

      const startDate = work.value.startDate;
      const format = 'YYYY/MM';
      const starMonth = dayjs(startDate).format(format);
      const endDate = work.value.endDate;

      // 継続中の場合
      if (!endDate) {
        const diff = getDiffMonth(startDate, dayjs());
        const diffText = getDiffText(diff);
        return `${starMonth} ～ 継続中（${diffText}）`;
      }

      const diff = getDiffMonth(startDate, endDate);
      const diffText = getDiffText(diff);

      // 1ヶ月の場合
      if (diff === 1) {
        return `${starMonth}（${diffText}）`;
      }

      // 2ヶ月以上の場合
      const endMonth = dayjs(endDate).format(format);
      return `${starMonth} 〜 ${endMonth}（${diffText}）`;
    });

    const getDiffText = (diff) => {
      if (diff < 12) {
        return `${diff}ヶ月`;
      } else {
        const year = Math.floor(diff / 12);
        const month = diff % 12;
        return month ? `${year}年${month}ヶ月` : `${year}年`;
      }
    };

    const getDiffMonth = (startDate, targetDate) => {
      // 2021/01/01 〜 2021/01/01の場合は1ヶ月とする
      // 2021/01/01 〜 2021/02/01の場合は2ヶ月とする
      return dayjs(targetDate).diff(dayjs(startDate), 'month') + 1;
    };

    return {
      work,
      period,
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
.work-tag-work {
  background-color: rgb(153, 153, 255);
}

.work-tag-private {
  background-color: rgb(251, 163, 155);
}

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
