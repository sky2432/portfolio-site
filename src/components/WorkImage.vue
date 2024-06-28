<template>
  <div
    :class="{
      'work-img-wrap': true,
      'sample-image': isSampleImage,
    }"
  >
    <img :src="imageUrl" alt="work画像" />
    <p class="sample-image-text">sample image</p>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
    },
    isSampleImage: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.work-img-wrap img {
  border: 1px solid #e6e6e6;
  aspect-ratio: 8 / 5;
  object-fit: cover;
}

/* サンプルイメージの場合 */
.sample-image {
  position: relative;
}

.sample-image > img {
  opacity: 0.3;
}

.sample-image-text {
  display: none;
  font-size: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-wrap: nowrap;
}

.sample-image > .sample-image-text {
  display: block;
}
/* サンプルイメージの場合 終了 */
</style>
