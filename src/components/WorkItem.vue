<template>
  <a class="works-item" href="#">
    <div class="works-img">
      <img :src="thumbnailUrl" alt="" />
    </div>
    <p class="works-name">
      {{ title }}
      <span :class="`work-tag work-tag-${genre}`">{{ genre }}</span>
    </p>
    <p class="works-info">{{ role }}</p>
  </a>
</template>

<script>
export default {
  props: {
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
    }
  },
};
</script>
