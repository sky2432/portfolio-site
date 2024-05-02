<template>
  <router-link
    class="works-item"
    :to="{ name: 'Work', params: { workId: contentId } }"
  >
    <div
      :class="{
        'works-img': true,
        'sample-image': isSampleImage,
      }"
    >
      <img :src="thumbnailUrl" alt="" />
      <p class="sample-image-text">sample image</p>
    </div>
    <p class="works-name">
      {{ title }}
      <span :class="`work-tag work-tag-${genre}`">{{ genre }}</span>
    </p>
    <p class="works-info">{{ roleText }}</p>
  </router-link>
</template>

<script>
import { computed } from 'vue';

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
    roles: {
      type: Array,
    },
    isSampleImage: {
      type: Boolean,
    },
  },

  setup(props) {
    const roleText = computed(() => {
      if (props.roles.length === 1) {
        return props.roles[0];
      }
      let roleList = props.roles[0];
      props.roles.forEach((role, index) => {
        if (index > 0) {
          roleList += ` / ${role}`;
        }
      });
      return roleList;
    });

    return {
      roleText,
    };
  },
};
</script>

<style scoped>
.works-item {
  width: 31.74603%;
  margin-right: 1.5873%;
  margin-bottom: 40px;
  color: #333;
}

.works-item:hover {
  opacity: 0.5;
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

/* サンプルイメージの場合 */
.sample-image {
  position: relative;
}

.sample-image > img {
  opacity: 0.3;
}

.sample-image-text {
  display: none;
  font-size: 21px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.sample-image > .sample-image-text {
  display: block;
}
/* サンプルイメージの場合 終了 */

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
