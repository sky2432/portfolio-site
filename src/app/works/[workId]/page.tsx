import './work.css';

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { WorkSlider } from '@/components/WorkSlider';
import { type Work, works } from '@/data/works';
import { dayjs } from '@/lib/dayjs';

type Props = {
  params: Promise<{ workId: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return works.map((work) => ({ workId: work.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { workId } = await params;
  const work = works.find((w) => w.id === workId);
  if (!work) return {};
  return {
    openGraph: {
      images: work.thumbnail,
      title: work.title,
      type: 'website',
      url: `/works/${workId}`,
    },
    title: work.title,
  };
}

// 継続中の作品の「継続中（N年Nヶ月）」はビルド時点で計算される
function getPeriod(work: Work) {
  const format = 'YYYY/MM';
  const startMonth = dayjs(work.startDate).format(format);

  // 継続中の場合
  if (!work.endDate) {
    const diff = getDiffMonth(work.startDate, dayjs());
    return `${startMonth} ～ 継続中（${getDiffText(diff)}）`;
  }

  const diff = getDiffMonth(work.startDate, work.endDate);

  // 1ヶ月の場合
  if (diff === 1) {
    return `${startMonth}（${getDiffText(diff)}）`;
  }

  // 2ヶ月以上の場合
  const endMonth = dayjs(work.endDate).format(format);
  return `${startMonth} 〜 ${endMonth}（${getDiffText(diff)}）`;
}

function getDiffText(diff: number) {
  if (diff < 12) {
    return `${diff}ヶ月`;
  }
  const year = Math.floor(diff / 12);
  const month = diff % 12;
  return month ? `${year}年${month}ヶ月` : `${year}年`;
}

function getDiffMonth(startDate: string, targetDate: Parameters<typeof dayjs>[0]) {
  // 2021/01/01 〜 2021/01/01の場合は1ヶ月とする
  // 2021/01/01 〜 2021/02/01の場合は2ヶ月とする
  return dayjs(targetDate).diff(dayjs(startDate), 'month') + 1;
}

export default async function WorkPage({ params }: Props) {
  const { workId } = await params;
  const work = works.find((w) => w.id === workId);
  if (!work) notFound();
  const { genre } = work;

  return (
    <div>
      <article className="article">
        <div className="article-container">
          <h2 className="article-title">
            {work.title} <br className="sp-only" />
            {work.client && <span className="pc-only">|</span>} {work.client}{' '}
            <br className="sp-only" />
            <span className={`work-tag-article work-tag-${genre}`}>
              {genre === 'work' && <span>仕事</span>}
              {genre === 'private' && <span>個人開発</span>}
            </span>
          </h2>
          <div className="article-body">
            <WorkSlider
              imageUrls={work.images}
              isSampleImage={work.isSampleImage}
              thumbnailUrl={work.thumbnail}
            />

            <div className="article-content">
              <h3>期間</h3>
              <p className="content-text">{getPeriod(work)}</p>
            </div>

            {work.contents.map((content, index) => (
              <div className="article-content" key={index}>
                <h3>{content.title}</h3>
                <div className="content-text" dangerouslySetInnerHTML={{ __html: content.text }} />
              </div>
            ))}
          </div>
          <div className="home-link">
            <Link href="/#works">Works一覧へ</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
