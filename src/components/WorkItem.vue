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
      type: String
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
