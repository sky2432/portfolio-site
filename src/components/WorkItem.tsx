import './WorkItem.css';

import Link from 'next/link';

import { WorkImage } from '@/components/WorkImage';
import type { Work } from '@/data/works';

type Props = {
  work: Work;
};

export function WorkItem({ work }: Props) {
  return (
    <Link className="works-item" href={`/works/${work.id}`}>
      <WorkImage imageUrl={work.thumbnail} isSampleImage={work.isSampleImage} />
      <p className="works-name">
        {work.title} <span className={`work-tag work-tag-${work.genre}`}>{work.genre}</span>
        {!work.endDate && <span className="work-tag work-tag-ongoing">ongoing</span>}
      </p>
      <p className="works-info">{work.roles.join(' / ')}</p>
    </Link>
  );
}
