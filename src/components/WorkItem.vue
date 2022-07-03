<template>
  <router-link
    class="works-item"
    :to="{ name: 'Work', params: { workId: contentId } }"
  >
    <div class="works-img">
      <img :src="thumbnailUrl" alt="" />
    </div>
    <p class="works-name">
      {{ title }}
      <span :class="`work-tag work-tag-${genre}`">{{ genre }}</span>
    </p>
    <p class="works-info">{{ role }}</p>
  </router-link>
</template>

<script>
export default {
  props: {
    contentId: {
      type: String,
    },
    title: {
      type: String,
    },
    genre: {
      type: String,
    },
    thumbnailUrl: {
      type: String,
    },
    role: {
      type: String,
    },
  },
};
</script>

<style scoped>


.works-item {
  width: 31.74603%;
  margin-right: 1.58730%;
  margin-bottom: 40px;
  color: #333;
}

.works-item:hover {
  opacity: .5;
}

.works-item:nth-of-type(3n) {
  margin-right: 0;
}

.works-img {
  text-align: center;
}

.works-img img {
  border: 1px solid #e6e6e6;
  object-fit: contain;
}

.works-name {
  font-size: 12px;
  font-weight: bold;
  margin-top: 8px;
}

.work-tag {
  margin-left: 10px;
  font-size: 10px;
  font-weight: normal;
  padding: 0 10px;
  border-radius: 20px;
}

.works-info {
  font-size: 10px;
  margin-top: 5px;
}

/*media Queries 1440 tablet & pc
----------------------------------------------------*/
@media screen and (max-width: 1439px) {
  .works-item {
    flex: 0 0 48%;
    margin-right: 0;
    margin-bottom: 30px;
  }
}

/*media Queries 767 smartphone
----------------------------------------------------*/
@media screen and (max-width: 767px) {
  /* Works */
  .works-name {
    font-size: 12px;
  }

  .works-info {
    margin-top: 3px;
  }

  .works-item {
    flex: 0 0 100%;
  }
}
</style>
