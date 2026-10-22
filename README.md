# SORA ITO Portfolio Site

![portfolio-site](https://user-images.githubusercontent.com/55875685/146631109-c8bab201-49d2-4e0f-aaa1-861a3d46cd40.png)

## サイトURL

https://sora-ito-portfolio.pages.dev/

## 環境構築手順

.envを作成して値を記述

```
cp .env.example .env
```

パッケージインストール

```
pnpm install
```

開発サーバー起動

```
pnpm dev
```

ブラウザにアクセス：http://localhost:4005/

## デプロイ

- Cloudflare Pages（Git 連携。`main` が本番）。ビルドコマンド `pnpm build`、出力ディレクトリ `out`
- 環境変数は Cloudflare Pages の設定に `.env.example` と同じものを登録する
- 作品・スキル・プロフィールのデータは `src/data/`、画像は `public/img/` で管理している（push すれば反映される）
- 旧 URL（https://sora-ito-portfolio.netlify.app/）は、Netlify に手動デプロイした `_redirects` で 301 転送している（リポジトリとは連携していない）
