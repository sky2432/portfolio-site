import './top.css';

import { LegacyHashRedirect } from '@/components/LegacyHashRedirect';
import { SkillItem } from '@/components/SkillItem';
import { WorkItem } from '@/components/WorkItem';
import { profile } from '@/data/profile';
import { skillCategories } from '@/data/skills';
import { works } from '@/data/works';

const starLegends = [
  { count: 5, text: '実務経験があり特に熟知している' },
  { count: 4, text: '実務経験あり' },
  { count: 3, text: '実務経験はあるが使用期間が短い' },
  { count: 2, text: '個人開発の経験あり' },
  { count: 1, text: '基本的な学習を終えた' },
];

export default function Top() {
  return (
    <div>
      <LegacyHashRedirect />

      {/* mv */}
      <div className="mv">
        <div className="mv-container">
          <p className="mv-title">SORA ITO</p>
          <p className="mv-subtitle">web engineer</p>
          <p className="mv-text">
            ユーザーとお客様が心から満足できる
            <br className="sp-only" />
            アプリを開発致します
            <br />
            アプリの開発は
            <br className="sp-only" />
            おまかせください
            <br />
          </p>
        </div>
      </div>
      {/* /mv */}

      {/* works */}
      <section className="works section" id="works">
        <div className="container">
          <h2 className="title">WORKS</h2>
          <div className="works-list">
            {works.map((work) => (
              <WorkItem key={work.id} work={work} />
            ))}
          </div>
        </div>
      </section>
      {/* /works */}

      {/* skill */}
      <section className="skill section" id="skill">
        <div className="container">
          <h2 className="title">SKILL</h2>
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="skill-genre">{category.name}</h3>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <SkillItem
                    imageUrl={skill.image}
                    key={skill.name}
                    name={skill.name}
                    starCount={skill.starCount}
                  />
                ))}
              </div>
            </div>
          ))}

          <div>
            {starLegends.map((legend) => (
              <p key={legend.count}>
                {Array.from({ length: legend.count }, (_, i) => (
                  <i className="fas fa-star" key={i} />
                ))}{' '}
                ：{legend.text}
              </p>
            ))}
          </div>
        </div>
      </section>
      {/* /skill */}

      {/* about */}
      <section className="about section" id="about">
        <div className="container">
          <h2 className="title">ABOUT</h2>
          <div className="profile">
            <p className="profile-img">
              <img alt="" src={profile.image} />
            </p>
            <div className="profile-body">
              <h3>{profile.name}</h3>
              <div
                className="profile-description"
                dangerouslySetInnerHTML={{ __html: profile.description }}
              />
              <ul className="sns-list">
                {profile.snsList.map((sns) => (
                  <a
                    className="sns-item"
                    href={sns.url}
                    key={sns.url}
                    rel="noopener"
                    target="_blank"
                  >
                    <img alt={sns.name} className="sns-icon" src={sns.icon} />
                    <span>{sns.name}</span>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* /about */}

      {/* contact */}
      <section className="contact section" id="contact">
        <div className="container">
          <h2 className="title">CONTACT</h2>
          <p className="lead">
            お問い合わせは、
            <br className="sp-only" />
            メールにてお願いいたします。
          </p>
          <div className="contact-list">
            <p>
              <i className="far fa-envelope icon" />
              {profile.email}
            </p>
          </div>
        </div>
      </section>
      {/* /contact */}
    </div>
  );
}
