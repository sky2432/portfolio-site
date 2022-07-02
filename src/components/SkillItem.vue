<template>
  <div class="skill-item">
    <p class="skill-img">
      <img :src="`img/skills/${imgName}-icon.png`" alt="" />
    </p>
    <div class="skill-body">
      <h3 class="skill-name">{{ name }}</h3>
      <p class="skill-text">{{ experience }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgName: {
      type: String,
    },
    name: {
      type: String,
    },
    experience: {
      type: String,
    },
  },
};
</script>
