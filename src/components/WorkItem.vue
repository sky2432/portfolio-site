<template>
  <router-link
    class="works-item"
    :to="{ name: 'Work', params: { workId: contentId } }"
  >
    <WorkImage :imageUrl="thumbnailUrl" :isSampleImage="isSampleImage" />
    <p class="works-name">
      {{ title }}
      <span :class="`work-tag work-tag-${genre}`">{{ genre }}</span>
      <span v-if="!endDate" :class="`work-tag work-tag-ongoing`">ongoing</span>
    </p>
    <p class="works-info">{{ roleText }}</p>
  </router-link>
</template>

<script>
import { computed } from 'vue';
import WorkImage from '@/components/WorkImage.vue';

export default {
  components: {
    WorkImage,
  },

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
    endDate: {
      type: String,
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

.work-tag-work {
  background-color: rgb(153, 153, 255);
}

.work-tag-private {
  background-color: rgb(251, 163, 155);
}

.work-tag-ongoing {
  background-color: rgb(255, 204, 153);
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
