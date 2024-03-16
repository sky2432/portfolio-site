[![Netlify Status](https://api.netlify.com/api/v1/badges/beddb5bc-7f1d-404c-9b98-0605b250b3f2/deploy-status)](https://app.netlify.com/sites/sora-ito-portfolio/deploys)

# SORA ITO Portfolio Site

![portfolio-site](https://user-images.githubusercontent.com/55875685/146631109-c8bab201-49d2-4e0f-aaa1-861a3d46cd40.png)

## サイトURL
https://sora-ito-portfolio.netlify.app/

## 環境構築手順
.envを作成して値を記述
```
cp .env.example .env
```
パッケージインストール
```
npm i
```
Live Server起動後、webpack実行
```
npm run watch
```
ブラウザにアクセス：http://localhost:5500/