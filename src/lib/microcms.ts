import { env } from '@/env';

type Image = { url: string };

export type Work = {
  id: string;
  title: string;
  client?: string;
  genre: string[];
  thumbnail: Image;
  isSampleImage: boolean;
  images?: { image: Image }[];
  roles: string[];
  startDate: string;
  endDate?: string;
  contents?: { title: string; text: string }[];
};

export type SkillCategory = {
  item_name: string;
  skills: { name: string; image: Image; starCount: number }[];
};

export type Another = {
  name: string;
  image?: Image;
  description: string;
  email: string;
  sns_list?: { name: string; url: string; color: string; icon: Image }[];
  used_links?: { name: string; url: string }[];
};

// ビルド時にだけ呼ばれるので、APIキーはブラウザに配信されない
async function fetchMicroCMS<T>(path: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(env.MICROCMS_API_URL + path);
  if (params) url.search = new URLSearchParams(params).toString();
  const res = await fetch(url, {
    headers: { 'X-MICROCMS-API-KEY': env.MICROCMS_API_KEY },
  });
  if (!res.ok) throw new Error(`microCMS ${path} の取得に失敗しました: ${res.status}`);
  return res.json();
}

export async function getWorks() {
  // デフォルトが10
  // 全て表示したいので大きい値を指定している
  const res = await fetchMicroCMS<{ contents: Work[] }>('/works', { limit: '1000' });
  return res.contents;
}

export function getWork(workId: string) {
  return fetchMicroCMS<Work>(`/works/${workId}`);
}

export async function getSkillList() {
  const res = await fetchMicroCMS<{ contents: SkillCategory[] }>('/skills');
  return res.contents;
}

export function getAnother() {
  return fetchMicroCMS<Another>('/another');
}
