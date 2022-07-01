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
          <a class="works-item" href="works/porro.html">
            <div class="works-img">
              <img src="img/works/porro/top.jpg" alt="" />
            </div>
            <p class="works-name">
              Discovery Gallery
              <span class="work-tag work-tag-work">work</span>
            </p>
            <p class="works-info">Coding</p>
          </a>
          <a class="works-item" href="works/ecsite.html">
            <div class="works-img">
              <img src="img/works/ecsite-sample.jpg" alt="" />
            </div>
            <p class="works-name">
              ECサイトリニューアル業務
              <span class="work-tag work-tag-work">work</span>
            </p>
            <p class="works-info">Coding</p>
          </a>
          <a class="works-item" href="works/fansa.html">
            <div class="works-img">
              <img src="img/works/fansa/top.png" alt="" />
            </div>
            <p class="works-name">
              fansa
              <span class="work-tag work-tag-work">work</span>
            </p>
            <p class="works-info">Coding(Responsive)</p>
          </a>
          <a class="works-item" href="works/routine.html">
            <div class="works-img">
              <img src="img/works/routine/top.png" alt="" />
            </div>
            <p class="works-name">
              RoutineQuest
              <span class="work-tag work-tag-personal">personal</span>
            </p>
            <p class="works-info">Design / Coding(Responsive)</p>
          </a>
          <a class="works-item" href="works/rese.html">
            <div class="works-img">
              <img src="img/works/rese/top.png" alt="" />
            </div>
            <p class="works-name">
              Rese
              <span class="work-tag work-tag-personal">personal</span>
            </p>
            <p class="works-info">Coding(Responsive)</p>
          </a>
          <a class="works-item" href="works/todo.html">
            <div class="works-img">
              <img src="img/works/todo/top.png" alt="" />
            </div>
            <p class="works-name">
              TodoList
              <span class="work-tag work-tag-personal">personal</span>
            </p>
            <p class="works-info">Design / Coding(Responsive)</p>
          </a>
          <a class="works-item" href="works/portfolio-site.html">
            <div class="works-img">
              <img src="img/works/portfolio-site.png" alt="" />
            </div>
            <p class="works-name">
              SORA ITO Portfolio Site
              <span class="work-tag work-tag-personal">personal</span>
            </p>
            <p class="works-info">Coding(Responsive)</p>
          </a>
        </div>
      </div>
    </section>
    <!-- /works -->

    <!-- skill -->
    <section class="skill section" id="skill">
      <div class="container">
        <h2 class="title">SKILL</h2>
        <div v-for="skillItem in skillList" :key="skillItem.genre">
          <h3 class="skill-genre">{{ skillItem.genre }}</h3>
          <div class="skill-list">
            <SkillItem
              v-for="skill in skillItem.skills"
              :key="skill.name"
              :imgName="skill.imgName"
              :name="skill.name"
              :experience="skill.experience"
            ></SkillItem>
          </div>
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
            <img src="img/illust-profile.jpg" alt="" />
          </p>
          <div class="profile-body">
            <h3>SORA ITO</h3>
            <p>
              webアプリ開発エンジニア。2021年3月よりプログラミング学習を開始。現在はフリーランスエンジニアとして活動しております。
            </p>
            <p>
              フロントエンド・バックエンドを開発。主な使用言語はJavaScript・PHPであり、フレームワークはNuxt.js・Laravelになります。
            </p>
            <ul class="sns-list">
              <li class="sns-item">
                <a
                  href="https://twitter.com/skyway2432"
                  target="_blank"
                  rel="noopener"
                  ><i class="fab fa-twitter icon"></i>Twitter</a
                >
              </li>
              <li class="sns-item">
                <a
                  class="github-link"
                  href="https://github.com/sky2432"
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
          <p><i class="far fa-envelope icon"></i>soraito20@gmail.com</p>
        </div>
      </div>
    </section>
    <section class="credit section">
      <p class="icon-credit">
        このサイトのアイコンには<a href="https://icons8.com" target="_blank"
          >icons8</a
        >,
        <a href="https://fontawesome.com/license" target="_blank"
          >Font Awesome</a
        >を使用させて頂いております
      </p>
    </section>
    <!-- /contact -->
  </div>
</template>

<script>
import SkillItem from '../components/SkillItem.vue';
export default {
  components: {
    SkillItem,
  },

  data() {
    return {
      skillList: [
        {
          genre: 'Frontend',
          skills: [
            { imgName: 'html', name: 'HTML5/CSS3', experience: '1 year' },
            { imgName: 'javascript', name: 'JavaScript', experience: '1 year' },
            {
              imgName: 'typescript',
              name: 'TypeScript',
              experience: '2 month',
            },
            { imgName: 'vuejs', name: 'Vue.js', experience: '1 year' },
            { imgName: 'nuxtjs', name: 'Nuxt.js', experience: '10 Month' },
            { imgName: 'vuetify', name: 'Vuetify', experience: '6 month' },
          ],
        },
        {
          genre: 'Backend',
          skills: [
            { imgName: 'php', name: 'PHP', experience: '1 year' },
            { imgName: 'laravel', name: 'Laravel', experience: '1 year' },
            { imgName: 'symfony', name: 'Symfony', experience: '2 month' },
            { imgName: 'mysql', name: 'Mysql', experience: '1 year' },
          ],
        },
        {
          genre: 'Infrastructure',
          skills: [
            { imgName: 'netlify', name: 'Netlify', experience: '1 year' },
            { imgName: 'heroku', name: 'Heroku', experience: '1 year' },
            { imgName: 'aws', name: 'AWS', experience: '1 year' },
            { imgName: 'github', name: 'Git/Github', experience: '1 year' },
            { imgName: 'docker', name: 'Docker', experience: '8 month' },
          ],
        },
      ],
    };
  },
};
</script>
