import './SkillItem.css';

type Props = {
  imageUrl: string;
  name: string;
  starCount: number;
};

export function SkillItem({ imageUrl, name, starCount }: Props) {
  return (
    <div className="skill-item">
      <p className="skill-img">
        <img alt="スキルアイコン" src={imageUrl} />
      </p>
      <div className="skill-body">
        <h3 className="skill-name">{name}</h3>
        <p className="skill-text">
          {Array.from({ length: starCount }, (_, i) => (
            <i className="fas fa-star" key={i} />
          ))}
        </p>
      </div>
    </div>
  );
}
