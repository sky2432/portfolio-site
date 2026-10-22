'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// 旧サイト（Vue のハッシュルーティング）の URL を新しいパスへ転送する
// 例: /#/works/xxx -> /works/xxx, /#/#works -> /#works
export function LegacyHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const path = location.hash.slice(1);
    if (!path.startsWith('/')) return;
    // `#//evil.com` や `#/\evil.com` で外部サイトへ飛ばされないよう、同一オリジンのときだけ転送する
    const url = new URL(path, location.origin);
    if (url.origin !== location.origin) return;
    router.replace(url.pathname + url.search + url.hash);
  }, [router]);

  return null;
}
