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

<style scoped>
.skill-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 33.333%;
  margin-bottom: 50px;
}

.skill-img {
  width: 60px;
  height: auto;
  margin-right: 20px;
}

.skill-body {
  flex: 1;
}

.skill-name {
  margin-bottom: 10px;
}

.skill-text {
  font-size: 14px;
  line-height: 1.8;
}

.fa-star {
  color: rgb(253, 187, 65);
}

.credit {
  padding-top: 20px;
  padding-bottom: 20px;
}

.icon-credit {
  text-align: center;
}

/*media Queries 767 smartphone
----------------------------------------------------*/
@media screen and (max-width: 767px) {
  .skill-item {
    width: 50%;
    align-items: center;
    margin-bottom: 35px;
  }

  .skill-img {
    width: 45px;
    margin-right: 10px;
  }

  .skill-name {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .skill-text {
    font-size: 13px;
    line-height: 1.7;
  }
}

/*media Queries 374 smartphone
----------------------------------------------------*/
@media screen and (max-width: 374px) {
  .skill-item {
    margin-bottom: 20px;
  }

  .skill-img {
    width: 30px;
  }

  .skill-name {
    font-size: 12px;
  }

  .skill-text {
    font-size: 10px;
  }
}
</style>
