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
        image: '/img/skills/javascript.webp',
        name: 'JavaScript',
        starCount: 5,
      },
      {
        image: '/img/skills/typescript.webp',
        name: 'TypeScript',
        starCount: 4,
      },
      {
        image: '/img/skills/php.webp',
        name: 'PHP',
        starCount: 5,
      },
      {
        image: '/img/skills/python.webp',
        name: 'Python',
        starCount: 4,
      },
      {
        image: '/img/skills/go.webp',
        name: 'Go',
        starCount: 3,
      },
      {
        image: '/img/skills/html5-css3.webp',
        name: 'HTML5/CSS3',
        starCount: 4,
      },
    ],
  },
  {
    name: 'Framework',
    skills: [
      {
        image: '/img/skills/laravel.webp',
        name: 'Laravel',
        starCount: 5,
      },
      {
        image: '/img/skills/vue-js.webp',
        name: 'Vue.js',
        starCount: 4,
      },
      {
        image: '/img/skills/nuxt-js.webp',
        name: 'Nuxt.js',
        starCount: 4,
      },
      {
        image: '/img/skills/vuetify.webp',
        name: 'Vuetify',
        starCount: 4,
      },
      {
        image: '/img/skills/next-js.webp',
        name: 'Next.js',
        starCount: 4,
      },
      {
        image: '/img/skills/react.webp',
        name: 'React',
        starCount: 3,
      },
      {
        image: '/img/skills/symfony.webp',
        name: 'Symfony',
        starCount: 3,
      },
      {
        image: '/img/skills/django.webp',
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
        image: '/img/skills/mysql.webp',
        name: 'Mysql',
        starCount: 4,
      },
      {
        image: '/img/skills/sqlite.webp',
        name: 'sqlite',
        starCount: 4,
      },
      {
        image: '/img/skills/postgresql.webp',
        name: 'postgresql',
        starCount: 3,
      },
      {
        image: '/img/skills/netlify.webp',
        name: 'Netlify',
        starCount: 4,
      },
      {
        image: '/img/skills/heroku.webp',
        name: 'Heroku',
        starCount: 2,
      },
      {
        image: '/img/skills/aws.webp',
        name: 'AWS',
        starCount: 4,
      },
      {
        image: '/img/skills/git-github.webp',
        name: 'Git/Github',
        starCount: 4,
      },
      {
        image: '/img/skills/docker.webp',
        name: 'Docker',
        starCount: 4,
      },
    ],
  },
];
