<template>
  <div>
    <!-- mv -->
    <div class="mv">
      <div class="mv-container">
        <p class="mv-title">SORA ITO</p>
        <p class="mv-subtitle">web engineer</p>
        <p class="mv-text">
          ユーザーとお客様が心から満足できる<br
            class="sp-only"
          />アプリを開発致します<br />
          アプリの開発は<br class="sp-only" />おまかせください<br />
        </p>
      </div>
    </div>
    <!-- /mv -->

    <!-- works -->
    <section class="works section" id="works">
      <div class="container">
        <h2 class="title">WORKS</h2>
        <div class="works-list">
          <WorkItem
            v-for="work in works"
            :key="work.id"
            :contentId="work.id"
            :title="work.title"
            :genre="work.genre[0]"
            :thumbnailUrl="work.thumbnail.url"
            :roles="work.roles"
            :isSampleImage="work.isSampleImage"
          ></WorkItem>
        </div>
      </div>
    </section>
    <!-- /works -->

    <!-- skill -->
    <section class="skill section" id="skill">
      <div class="container">
        <h2 class="title">SKILL</h2>
        <div v-for="skillItem in skillList" :key="skillItem.item_name">
          <h3 class="skill-genre">{{ skillItem.item_name }}</h3>
          <div class="skill-list">
            <SkillItem
              v-for="skill in skillItem.skills"
              :key="skill.name"
              :imageUrl="skill.image.url"
              :name="skill.name"
              :starCount="skill.starCount"
            ></SkillItem>
          </div>
        </div>

        <div>
          <p>
            <i v-for="n of 5" :key="n" class="fas fa-star"></i>
            ：実務経験があり特に熟知している
          </p>
          <p>
            <i v-for="n of 4" :key="n" class="fas fa-star"></i>
            ：実務経験あり
          </p>
          <p>
            <i v-for="n of 3" :key="n" class="fas fa-star"></i>
            ：実務経験はあるが使用期間が短い
          </p>
          <p>
            <i v-for="n of 2" :key="n" class="fas fa-star"></i>
            ：個人開発の経験あり
          </p>
          <p>
            <i v-for="n of 1" :key="n" class="fas fa-star"></i>
            ：基本的な学習を終えた
          </p>
        </div>
      </div>
    </section>
    <!-- /skill -->

    <!-- about -->
    <section class="about section" id="about">
      <div class="container">
        <h2 class="title">ABOUT</h2>
        <div class="profile">
          <p class="profile-img">
            <img v-if="another.image" :src="another.image.url" alt="" />
          </p>
          <div class="profile-body">
            <h3>{{ another.name }}</h3>
            <p v-html="another.description"></p>
            <ul class="sns-list">
              <!-- あとで戻すかもしれないのでコメントアウト -->
              <!-- <li class="sns-item">
                <a :href="another.twitter_url" target="_blank" rel="noopener"
                  ><i class="fab fa-twitter icon"></i>Twitter</a
                >
              </li> -->
              <li class="sns-item">
                <a
                  class="github-link"
                  :href="another.github_url"
                  target="_blank"
                  rel="noopener"
                  ><i class="fab fa-github icon"></i>Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- /about -->

    <!-- contact -->
    <section class="contact section" id="contact">
      <div class="container">
        <h2 class="title">CONTACT</h2>
        <p class="lead">
          お問い合わせは、<br class="sp-only" />メールにてお願いいたします。
        </p>
        <div class="contact-list">
          <p><i class="far fa-envelope icon"></i>{{ another.email }}</p>
        </div>
      </div>
    </section>
    <!-- /contact -->
  </div>
</template>

<script>
import SkillItem from '@/components/SkillItem.vue';
import WorkItem from '@/components/WorkItem.vue';
import useWorks from '@/composables/useWorks';
import useSkillList from '@/composables/useSkillList';
import useAnother from '@/composables/useAnother';

export default {
  components: {
    SkillItem,
    WorkItem,
  },

  setup() {
    const { works, fetchWorks } = useWorks();
    fetchWorks();

    const { skillList, fetchSkillList } = useSkillList();
    fetchSkillList();

    const { another, fetchAnother } = useAnother();
    fetchAnother();

    return {
      works,
      skillList,
      another
    };
  },
};
</script>

<style scoped>
/*--------------------------------
 見出し
---------------------------------*/
.title {
  font-size: 34px;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 40px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #333;
}

.lead {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 30px;
}

/*--------------------------------
 メインビジュアル
---------------------------------*/
.mv {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  text-align: center;
  background-image: url(../../img/mv.jpg);
  background-position: center center;
  background-size: cover;
  color: #fff;
}

.mv-container {
  padding: 0 40px;
}

.mv-title,
.mv-subtitle,
.mv-text {
  text-shadow: 1px 2px 3px #808080;
}

.mv-title {
  font-size: 60px;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 5px;
  letter-spacing: 0.1em;
}

.mv-subtitle {
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 40px;
  letter-spacing: 0.08em;
}

.mv-text {
  font-size: 16px;
  line-height: 1.8;
}

/*--------------------------------
 Skill
---------------------------------*/
.skill-genre {
  font-size: 20px;
  margin-bottom: 20px;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
}

/*--------------------------------
 About
---------------------------------*/
.profile {
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
}

.profile-img {
  width: 20%;
  margin-right: 30px;
  border-radius: 50%;
}

.profile-img img {
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.profile-body {
  flex: 1;
}

.profile-body h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.profile-body p {
  font-size: 15px;
  line-height: 1.8;
}

.profile-body p:not(:last-child) {
  margin-bottom: 30px;
}

/*--------------------------------
 Contact
---------------------------------*/
.contact {
  text-align: center;
}

.contact-text {
  margin-top: 10px;
}

.sns-item {
  list-style-type: none;
  margin-bottom: 5px;
}

.github-link {
  color: #333;
}

/*media Queries 1440 tablet & pc
----------------------------------------------------*/
@media screen and (max-width: 1439px) {
  .works-list {
    justify-content: space-between;
  }
}

/*media Queries 767 smartphone
----------------------------------------------------*/
@media screen and (max-width: 767px) {
  /* 見出し */
  .title {
    font-size: 26px;
    margin-bottom: 20px;
  }

  .lead {
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 20px;
  }

  /*  メインビジュアル */
  .mv {
    height: 75vh;
  }

  .mv-container {
    padding: 0 20px;
  }

  .mv-title {
    font-size: 30px;
  }
  .mv-subtitle {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .mv-text {
    font-size: 14px;
    line-height: 1.7;
  }

  /* Skill */
  .skill-genre {
    font-size: 18px;
  }

  .skill-list {
    margin-bottom: 0;
  }

  /* About */
  .profile {
    display: block;
  }

  .profile-img {
    width: 150px;
    margin: 0 auto;
    margin-bottom: 25px;
  }

  .profile-body h3 {
    font-size: 18px;
  }

  .profile-body p {
    font-size: 14px;
    line-height: 1.7;
  }

  .profile-body p:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
