export type SkillCategory = {
  name: string;
  // starCount は 1〜5（トップページの SKILL 欄に凡例あり）
  skills: { name: string; image: string; starCount: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Language',
    skills: [
      {
        image: '/img/skills/javascript.png',
        name: 'JavaScript',
        starCount: 5,
      },
      {
        image: '/img/skills/typescript.png',
        name: 'TypeScript',
        starCount: 4,
      },
      {
        image: '/img/skills/php.png',
        name: 'PHP',
        starCount: 5,
      },
      {
        image: '/img/skills/python.png',
        name: 'Python',
        starCount: 4,
      },
      {
        image: '/img/skills/go.png',
        name: 'Go',
        starCount: 3,
      },
      {
        image: '/img/skills/html5-css3.png',
        name: 'HTML5/CSS3',
        starCount: 4,
      },
    ],
  },
  {
    name: 'Framework',
    skills: [
      {
        image: '/img/skills/laravel.png',
        name: 'Laravel',
        starCount: 5,
      },
      {
        image: '/img/skills/vue-js.png',
        name: 'Vue.js',
        starCount: 4,
      },
      {
        image: '/img/skills/nuxt-js.png',
        name: 'Nuxt.js',
        starCount: 4,
      },
      {
        image: '/img/skills/vuetify.png',
        name: 'Vuetify',
        starCount: 4,
      },
      {
        image: '/img/skills/next-js.png',
        name: 'Next.js',
        starCount: 4,
      },
      {
        image: '/img/skills/react.png',
        name: 'React',
        starCount: 3,
      },
      {
        image: '/img/skills/symfony.png',
        name: 'Symfony',
        starCount: 3,
      },
      {
        image: '/img/skills/django.png',
        name: 'django',
        starCount: 2,
      },
      {
        image: '/img/skills/flutter.svg',
        name: 'Flutter',
        starCount: 4,
      },
    ],
  },
  {
    name: 'DB・Tool',
    skills: [
      {
        image: '/img/skills/mysql.png',
        name: 'Mysql',
        starCount: 4,
      },
      {
        image: '/img/skills/sqlite.png',
        name: 'sqlite',
        starCount: 4,
      },
      {
        image: '/img/skills/postgresql.png',
        name: 'postgresql',
        starCount: 3,
      },
      {
        image: '/img/skills/netlify.png',
        name: 'Netlify',
        starCount: 4,
      },
      {
        image: '/img/skills/heroku.png',
        name: 'Heroku',
        starCount: 2,
      },
      {
        image: '/img/skills/aws.png',
        name: 'AWS',
        starCount: 4,
      },
      {
        image: '/img/skills/git-github.png',
        name: 'Git/Github',
        starCount: 4,
      },
      {
        image: '/img/skills/docker.png',
        name: 'Docker',
        starCount: 4,
      },
    ],
  },
];
