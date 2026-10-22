export type Work = {
  id: string;
  title: string;
  client?: string;
  genre: 'work' | 'private';
  thumbnail: string;
  // true ならサムネイルを薄くして「sample image」と表示する
  isSampleImage: boolean;
  images: string[];
  roles: string[];
  // 日本時間の日付（YYYY-MM-DD）。endDate がなければ継続中
  startDate: string;
  endDate?: string;
  // text は HTML
  contents: { title: string; text: string }[];
};

// 配列の順番がトップページの表示順
export const works: Work[] = [
  {
    contents: [
      {
        text: '<p>スマホゲーム「アークナイツ」のコーデ専門サイトです。あなたのお気に入りコーデ・オペレーターを見つけましょう。</p>',
        title: '概要',
      },
      {
        text: '<p><a href="https://rhodes-style.com/" target="_blank" rel="noopener noreferrer">https://rhodes-style.com/</a></p>',
        title: 'URL',
      },
      {
        text: '<p><span style="color:#333333">言語</span><br>・TypeScript<br><span style="color:#333333">フレームワーク</span><br>・Next.js<br>・NextUI（UIフレームワーク）<br><span style="color:#000000">DB・ツール</span><br>・postgresql<br>・tailwindcss（cssライブラリ）<br>インフラ<br>・supabase（DB含めたバックエンドサービス）<br>・vercel（ホスティングサービス）</p>',
        title: '使用技術',
      },
    ],
    genre: 'private',
    id: 'g28fa31mrkh',
    images: [],
    isSampleImage: false,
    roles: ['Coding', 'Coding(Responsive)', 'Design'],
    startDate: '2024-09-21',
    thumbnail: '/img/works/g28fa31mrkh/thumbnail.png',
    title: 'ロドス・スタイル',
  },
  {
    contents: [
      {
        text: '<p><span style="color:#000000">サービス運用中のプロジェクトに実装者として参画。本案件にてNext.js、Go、GraphQLといった経験のない技術を使用することになりましたが、業務時間外に学習することでタスクを問題なくこなすことができております。また知見の共有のために、学習した内容や実装する上でわかったことを資料として積極的に作成している点を高く評価いただいています。2年目からプルリクレビューも一部任せていただき、質の担保に努めています。</span></p>',
        title: '概要',
      },
      {
        text: '<p><span style="color:#000000">・Webディレクター・リードエンジニア：1名</span><br><span style="color:#000000">・実装者：約5名</span></p>',
        title: '開発体制',
      },
      {
        text: '<p><span style="color:#000000">・実装者</span></p>',
        title: '役割',
      },
      {
        text: '<p><span style="color:#000000">・フロントエンド・バックエンドの実装</span><br><span style="color:#000000">・テストコードの記述</span><br><span style="color:#000000">・プルリクレビュー（動作確認・コードレビュー）</span><br><span style="color:#000000">・開発資料の作成（環境構築手順書など）</span></p>',
        title: '業務内容',
      },
      {
        text: '<p>言語<br><span style="color:#000000">・JavaScript</span><br><span style="color:#000000">・TypeScript</span><br><span style="color:#000000">・PHP</span><br><span style="color:#000000">・Go</span><br><span style="color:#000000">・HTML / CSS</span><br>フレームワーク<br>・<span style="color:#000000">Laravel</span><br><span style="color:#000000">・Vue.js</span><br><span style="color:#000000">・Next.js</span><br><span style="color:#000000">DB・ツール</span><br>・MySQL<br><span style="color:#000000">・Docker</span><br><span style="color:#000000">・Bootstrap</span><br><span style="color:#000000">・Emotion CSS</span><br>・<span style="color:#000000">vanilla-extract CSS</span><br><span style="color:#000000">・Panda CSS</span><br><span style="color:#000000">・GraphQL</span><br><span style="color:#000000">・ent go</span></p>',
        title: '使用技術',
      },
    ],
    genre: 'work',
    id: '6nqorgybi5',
    images: [],
    isSampleImage: true,
    roles: ['Coding(Responsive)'],
    startDate: '2023-03-01',
    thumbnail: '/img/works/6nqorgybi5/thumbnail.jpg',
    title: '歯科医師向け情報サイトの開発',
  },
  {
    contents: [
      {
        text: '<p><span style="color:#000000">サービス運用中のプロジェクトに実装者として参画。主に新機能の実装と不具合の修正を行いました。1ファイル・1関数のコード量が多いため、コード理解に苦労する場面が多くありましたが、根気強くコードを追っていき実装していました。仕様が不明確なこともあるため、気になった点は積極的に質問や提案をしていき認識の齟齬がないようにしました。</span></p>',
        title: '概要',
      },
      {
        text: '<p><span style="color:#000000">・PM：1名</span><br><span style="color:#000000">・実装者：約3名</span><br><span style="color:#000000">・テスター：約2名</span></p>',
        title: '開発体制',
      },
      {
        text: '<p>・実装者</p>',
        title: '役割',
      },
      {
        text: '<p>・フロントエンド・バックエンドの実装</p>',
        title: '業務内容',
      },
      {
        text: '<p>言語<br>・JavaScript<br>・PHP<br>・HTML/CSS<br>フレームワーク<br>・<span style="color:#000000">cakePHP</span><br>・<span style="color:#333333">jQuery</span><br>DB・ツール<br>・MySQL<br>・Docker</p>',
        title: '使用技術',
      },
    ],
    endDate: '2024-07-01',
    genre: 'work',
    id: 'e_hb56ts5jm',
    images: [],
    isSampleImage: true,
    roles: ['Coding'],
    startDate: '2023-12-01',
    thumbnail: '/img/works/e_hb56ts5jm/thumbnail.jpg',
    title: 'シフト管理システムの開発',
  },
  {
    contents: [
      {
        text: '<p><span style="color:#000000">既存サービスLPを新デザインにリニューアルするにあたって実装者として参画。約10ページの実装を自分1人で担当しました。心がけた点としては、納期も考慮しつつ保守性の高いコードに改善していくことです。具体的には既存コードだと1ファイルに全ページのcssが記述されており、あるページ用のcssが別ページに影響している状況でした。これを改善するためにページとコンポーネント単位でcssが適用されるようにコード設計を変更しました。</span></p>',
        title: '概要',
      },
      {
        text: '<p><span style="color:#000000">・PM：1名</span><br><span style="color:#000000">・実装者：1名</span><br><span style="color:#000000">・実装補佐：1名</span></p>',
        title: '開発体制',
      },
      {
        text: '<p><span style="color:#000000">・実装者</span></p>',
        title: '役割',
      },
      {
        text: '<p>・フロントエンドのデザイン変更<br>・一部バックエンドの修正</p>',
        title: '業務内容',
      },
      {
        text: '<p>言語<br>・JavaScript<br>・PHP<br>・HTML/CSS<br>フレームワーク<br>・<span style="color:#000000">Laravel</span><br>・<span style="color:#333333">jQuery</span><br>DB・ツール<br>・MySQL</p>',
        title: '使用技術',
      },
    ],
    endDate: '2024-04-01',
    genre: 'work',
    id: 'jgwdkp6s8cr',
    images: [],
    isSampleImage: true,
    roles: ['Coding(Responsive)'],
    startDate: '2024-04-01',
    thumbnail: '/img/works/jgwdkp6s8cr/thumbnail.jpg',
    title: '商談サービスLPのデザインリニューアル業務',
  },
  {
    contents: [
      {
        text: '<p><span style="color:#000000">古くなった既存システムのリニューアルとして新規開発中のプロジェクトに参画。既存システムの画面イメージから画面仕様書を作成し実装まで行いました。</span><br><span style="color:#000000">以下積極的に行った点です。</span><br><span style="color:#000000">・仕様の不明確な点は確認していき認識を合わせる</span><br><span style="color:#000000">・作成済みだったテーブル定義では見つけた改善点を提案していく</span><br><span style="color:#000000">また新しく判明した仕様などは資料に残すようにしていたので、後任の方へスムーズに引き継ぐことができました。</span></p>',
        title: '概要',
      },
      {
        text: '<p>・PM：1名<br>・実装者：2名</p>',
        title: '開発体制',
      },
      {
        text: '<p>・実装者</p>',
        title: '役割',
      },
      {
        text: '<p>・画面仕様書作成<br>・フロントエンド・バックエンドの実装</p>',
        title: '業務内容',
      },
      {
        text: '<p>言語<br>・JavaScript<br>・PHP<br>・HTML/CSS<br>フレームワーク<br>・Laravel<br>・jQuery<br>・AdminLTE<br>・Bootstrap<br>DB・ツール<br>・MySQL<br>・Docker<br></p>',
        title: '使用技術',
      },
    ],
    endDate: '2023-11-01',
    genre: 'work',
    id: 'ozcqve4-9b',
    images: [],
    isSampleImage: true,
    roles: ['Coding'],
    startDate: '2023-11-01',
    thumbnail: '/img/works/ozcqve4-9b/thumbnail.jpg',
    title: 'ETCマイレージ管理システムのリニューアル',
  },
  {
    contents: [
      {
        text: '<p><span style="color:#000000">サービス運用中のプロジェクトに実装者として参画。前任者からの引き継ぎタスクを担当しました。プロジェクトの方針からタスクに関連する既存コードもより保守性の高いコードに見直すことを心がけました。</span></p>',
        title: '概要',
      },
      {
        text: '<p>・リードエンジニア：1名<br>・実装者：約4名</p>',
        title: '開発体制',
      },
      {
        text: '<p>・実装者</p>',
        title: '役割',
      },
      {
        text: '<p>・フロントエンドの実装</p>',
        title: '業務内容',
      },
      {
        text: '<p>言語<br>・TypeScript<br>・HTML/CSS<br><span style="color:#333333">フレームワーク</span><br><span style="color:#333333">・</span>React<br>・GraphQL<br>・AWS amplify</p>',
        title: '使用技術',
      },
    ],
    endDate: '2023-10-01',
    genre: 'work',
    id: 'au8zddzve5',
    images: [],
    isSampleImage: true,
    roles: ['Coding'],
    startDate: '2023-10-01',
    thumbnail: '/img/works/au8zddzve5/thumbnail.jpg',
    title: 'ビジネス系マッチングサービスの開発',
  },
  {
    contents: [
      {
        text: '<p><span style="color:#000000">新規開発のプロジェクトに実装者として参画。開発スタート後に仕様書の内容が足りないことが判明し、どう実装すればいいのか不明確な中、クライアント様に積極的に確認・提案していくことで実装を進めていきました。</span></p>',
        title: '概要',
      },
      {
        text: '<p><span style="color:#000000">webディレクター：4名</span><br><span style="color:#000000">実装者：約20名</span></p>',
        title: '開発体制',
      },
      {
        text: '<p>・実装者</p>',
        title: '役割',
      },
      {
        text: '<p><span style="color:#000000">・実装</span><br>・コードレビュワー<br><span style="color:#000000">・画面仕様書の作成</span></p>',
        title: '業務内容',
      },
      {
        text: '<p>言語<br><span style="color:#000000">・JavaScript</span><br><span style="color:#000000">・PHP</span><br><span style="color:#000000">・HTML/CSS</span><br>フレームワーク<br><span style="color:#000000">・Laravel</span><br><span style="color:#000000">・jQuery</span><br><span style="color:#000000">・Tailwind CSS</span><br><span style="color:#000000">DB・ツール</span><br><span style="color:#000000">・MySQL</span><br><span style="color:#000000">・Docker</span></p>',
        title: '使用技術',
      },
    ],
    endDate: '2023-03-01',
    genre: 'work',
    id: '41tn6xcy5',
    images: [],
    isSampleImage: true,
    roles: ['Coding'],
    startDate: '2023-01-01',
    thumbnail: '/img/works/41tn6xcy5/thumbnail.jpg',
    title: 'パティシエ向け求人サイトの開発',
  },
  {
    contents: [
      {
        text: '<p><span style="color:#202124">ラジオ番組「内山昂輝の1クール！」検索サービス。もう一度聞きたいあの場面をキーワードから検索できます。</span>入力したキーワードが発話された時間からラジオを再生することが可能です。<br></p>',
        title: '概要',
      },
      {
        text: '<p><a href="https://one-joqr.com/" target="_blank" rel="noopener noreferrer">https://one-joqr.com/</a><br>※現在は停止中です。</p>',
        title: 'アプリURL',
      },
      {
        text: '<p>デザイン・コーディング</p>',
        title: '担当',
      },
      {
        text: '<p><strong>ユーザー側</strong><br>・キーワードからラジオの回を検索<br>・回の中でキーワードが発話された時間からラジオを再生<br><strong>管理者側</strong><br>・ラジオ音声を自動文字起こし（Google Speech-to-Text）<br>・文字起こし文章からキーワードを抽出（mecab）</p>',
        title: '機能一覧',
      },
      {
        text: '<p><strong>言語</strong><br>・python<br>・html/css<br><strong>フレームワーク</strong><br>・Django<br>・Tailwind CSS<br>・jQuery<br><strong>DB・ツール</strong><br>・<span style="color:#202124">PostgreSQL</span><br><span style="color:#202124">・</span>Google Speech-to-Text<br>・Google Cloud Storage<br>・mecab<br>・github actions<br>・conoha VPS</p>',
        title: '主な使用技術',
      },
      {
        text: '<p><a href="https://github.com/sky2432/one-uchiyama" target="_blank" rel="noopener noreferrer">https://github.com/sky2432/one-uchiyama</a></p>',
        title: 'githubリポジトリ',
      },
    ],
    endDate: '2023-03-01',
    genre: 'private',
    id: 'eolu0-n9je90',
    images: [
      '/img/works/eolu0-n9je90/1.png',
      '/img/works/eolu0-n9je90/2.png',
      '/img/works/eolu0-n9je90/3.png',
    ],
    isSampleImage: false,
    roles: ['Coding(Responsive)', 'Design'],
    startDate: '2022-04-01',
    thumbnail: '/img/works/eolu0-n9je90/thumbnail.png',
    title: '内山昂輝の1クール！のあの場面',
  },
  {
    contents: [
      {
        text: '<p><span style="color:#000000">新規開発の案件にて合計3社が関わる中、その内の1社である合同会社プログラム・キッチンのメンバーとして参画。プログラム・キッチン内の私の役割はWebディレクター・リードエンジニアになります。資料作成による情報共有を徹底し、無事予定期日までに開発完了することができました。</span></p>',
        title: '概要',
      },
      {
        text: '<p>私が所属する合同会社プログラム・キッチン内部の体制になります。<br><br>・内部Webディレクター・リードエンジニア：1名<br>・外部交渉者：1名<br>・フロントエンド実装者：約4名<br>・バックエンド実装者：約7名<br><span style="color:#000000">・動作確認者：1名</span></p>',
        title: '開発体制',
      },
      {
        text: '<p>・内部Webディレクター<br>・リードエンジニア（フロント・バック両方）<br>・実装者</p>',
        title: '役割',
      },
      {
        text: '<p>・タスク管理<br>・コードレビュー<br>・仕様書レビュー<br>・開発環境の整備<br><span style="color:#000000">・各種資料の作成</span><br><span style="color:#000000">・バックエンドの実装</span><br></p>',
        title: '業務内容',
      },
      {
        text: '<p><strong>フロントエンド</strong><br>言語<br>・HTML/CSS<br>・JavaScript<br>フレームワーク<br>・Vue2<br>・Vuetify<br><strong>バックエンド</strong><br>言語：python<br>フレームワーク：AWS Chalice<br>DB：Mysql<br>ツール：<br>・Docker<br>・aws cocdecommit</p>',
        title: '使用技術',
      },
    ],
    endDate: '2022-12-01',
    genre: 'work',
    id: 'mnucp6a-x',
    images: [],
    isSampleImage: true,
    roles: ['Direction', 'Coding'],
    startDate: '2022-08-01',
    thumbnail: '/img/works/mnucp6a-x/thumbnail.jpg',
    title: '電力シミュレーションシステム開発',
  },
  {
    contents: [
      {
        text: '<p><span style="color:#000000">開発中のプロジェクトに実装者として参画。実装する上で既存仕様書の不明確な点を見つけたときは積極的に自身で調べ、最後にPMに確認いただく形でタスクを進めていきました。この丁寧な仕事ぶりをPMの方から評価いただきました。</span></p>',
        title: '概要',
      },
      {
        text: '<p>PM：1名<br><span style="color:#000000">設計者：約3名</span><br><span style="color:#000000">実装者：約5名</span></p>',
        title: '開発体制',
      },
      {
        text: '<p><span style="color:#000000">・設計者（一部）</span><br><span style="color:#000000">・実装者</span></p>',
        title: '役割',
      },
      {
        text: '<p>フロントエンド・バックエンドの開発</p>',
        title: '業務内容',
      },
      {
        text: '<p>言語<br>・HTML/CSS<br>・JavaScript<br>・PHP<br>フレームワーク<br>・jQuery<br>・Boostrap<br>・Laravel<br>DB・ツール等<br>・MySQL<br>・AWS<br>・Docker</p>',
        title: '使用技術',
      },
    ],
    endDate: '2022-12-01',
    genre: 'work',
    id: 'r9nst6o_74',
    images: [],
    isSampleImage: true,
    roles: ['Coding'],
    startDate: '2022-06-01',
    thumbnail: '/img/works/r9nst6o_74/thumbnail.jpg',
    title: '販売物流管理システム開発',
  },
  {
    contents: [
      {
        text: '<p><span style="color:#000000">サービス運用中のプロジェクトに設計者・実装者として参画。仕様書とコードのわかりやすさを評価頂き途中からWebディレクター補佐を任されました</span></p>',
        title: '概要',
      },
      {
        text: '<p><span style="color:#000000">・Webディレクター：1名</span><br><span style="color:#000000">・Webディレクター補佐：1名</span><br><span style="color:#000000">・実装者：約3名</span><br><span style="color:#000000">・テスター：約3名</span></p>',
        title: '開発体制',
      },
      {
        text: '<p>・Webディレクション補佐<br>・設計者<br>・実装者<br>・テスター</p>',
        title: '役割',
      },
      {
        text: '<p>・一部のタスク管理<br>・仕様書レビュー<br>・コードレビュー<br>・仕様書作成<br>・フロントエンド・バックエンドの実装<br>・<span style="color:#000000">不具合・要望の発見と報告</span></p>',
        title: '業務内容',
      },
      {
        text: '<p><strong>言語</strong><br>・HTML/CSS<br>・JavaScript<br>・PHP<br><strong>フレームワーク</strong><br>・jQuery<br>・Tailwind CSS<br>・Laravel<br><strong>DB・ツール等</strong><br>・MySQL<br>・Docker</p>',
        title: '使用技術',
      },
    ],
    endDate: '2023-03-01',
    genre: 'work',
    id: 'jplhkb2_b46r',
    images: [],
    isSampleImage: true,
    roles: ['Coding(Responsive)', 'Direction'],
    startDate: '2022-04-01',
    thumbnail: '/img/works/jplhkb2_b46r/thumbnail.jpg',
    title: '動画配信サービス開発',
  },
  {
    client: '株式会社Porro様',
    contents: [
      {
        text: '<p><span style="color:#333333;font-size: 0.75em">※α版の画像になります。</span><br><span style="color:#000000">新規開発のプロジェクトに実装者として参画。私1人にてフロントエンド・バックエンドの実装を担当し、</span>2022/01に<span style="color:#000000">ベンチャーキャピタルに見せるための</span>α版を開発。β版の途中まで開発を担当致しました。プロジェクトがうまく進むようにタスクの優先度やクライアントへの提案の仕方などを日々考え取り組みました。<br></p>',
        title: '概要',
      },
      {
        text: '<p>Discovery Gallery（仮）は、日常的に誰もがかんたんにアートライフを楽しむための作品展示場所を予約できるスペースシェアサービスです。誰でもかんたんに、アートライフ楽しむための作品や場所を予約・登録することができます。（公式サイトより引用）</p>',
        title: 'サービス概要',
      },
      {
        text: '<p>PM：1名<br>実装者：1名</p>',
        title: '開発体制',
      },
      {
        text: '<p>実装者</p>',
        title: '役割',
      },
      {
        text: '<p>フロントエンド・バックエンドの実装</p>',
        title: '業務内容',
      },
      {
        text: '<p>アジャイル開発</p>',
        title: '開発手法',
      },
      {
        text: '<p>・注目・人気のスペースの表示<br>・外部メディアの表示（RSS）<br>・スペース検索機能「エリア・日付・金額・広さ」<br>・スペース予約機能<br>・スペースお気に入り機能<br>・お知らせ機能（RSS）<br>・ログイン機能（nuxt/auth・laravel/sanctum）<br>・アカウント登録機能<br>・スペース登録機能<br>・決済機能（Stripe）<br>・アカウント切り替え機能「一般ユーザ ⇄ オーナー」<br>・スペース管理機能</p>',
        title: '機能一覧',
      },
      {
        text: '<p><strong>言語</strong><br>・HTML/CSS<br>・JavaScript<br>・PHP<br><strong>フレームワーク</strong><br>・Nuxt.js<br>・Laravel<br><strong>DB・ツール等</strong><br>・SQLite<br>・Netlify<br>・X-server<br>・Stripe</p>',
        title: '使用技術',
      },
    ],
    endDate: '2022-04-01',
    genre: 'work',
    id: '0b0gi2x90',
    images: [
      '/img/works/0b0gi2x90/1.jpg',
      '/img/works/0b0gi2x90/2.jpg',
      '/img/works/0b0gi2x90/3.jpg',
      '/img/works/0b0gi2x90/4.jpg',
      '/img/works/0b0gi2x90/5.jpg',
      '/img/works/0b0gi2x90/6.jpg',
      '/img/works/0b0gi2x90/7.jpg',
    ],
    isSampleImage: false,
    roles: ['Coding'],
    startDate: '2021-12-01',
    thumbnail: '/img/works/0b0gi2x90/thumbnail.jpg',
    title: 'Discovery Gallery(仮)',
  },
  {
    contents: [
      {
        text: '<p><span style="color:#000000">開発中のプロジェクトに実装者として参画。経験のない技術、仕様の不明確さで苦労しました。しかし業務時間外に学習を行い、また自身である程度調べてもわからなかった点は積極的に相談していくことで業務をこなすことができました。</span></p>',
        title: '概要',
      },
      {
        text: '<p><span style="color:#000000">Webディレクター</span>：1名 <br>実装者：約4名&nbsp;</p>',
        title: '開発体制',
      },
      {
        text: '<p>実装者</p>',
        title: '役割',
      },
      {
        text: '<p>ネットショップ構築システムである<a href="https://www.ec-cube.net/" target="_blank" rel="noopener noreferrer">ECCUBE</a><br>こちらで作成されたECサイトのECCUBEのバージョンを2から4へアップグレードする業務<br>開発者として旧環境のページを新環境にて作成（フロントエンド・バックエンドの開発）</p>',
        title: '業務内容',
      },
      {
        text: '<p><strong>言語</strong><br>・HTML/CSS<br>・PHP<br><strong>フレームワーク</strong><br>・ECCUBE4.0<br>・Symfony3.4<br>・Boostrap<br><strong>DB・ツール等</strong><br><strong>・</strong>PostgreSQL<br>・Docker</p>',
        title: '使用技術',
      },
    ],
    endDate: '2022-02-01',
    genre: 'work',
    id: 'u76o6662sym',
    images: [],
    isSampleImage: true,
    roles: ['Coding'],
    startDate: '2022-01-01',
    thumbnail: '/img/works/u76o6662sym/thumbnail.jpg',
    title: 'ECサイトリニューアル業務',
  },
  {
    client: 'ファンサ合同会社様',
    contents: [
      {
        text: '<p><span style="color:#333333;font-size: 0.75em">※α版の画像になります。</span><br><span style="color:#333333">お仕事として初めて開発を担当させていただいたアプリになります。</span><span style="color:#000000">新規開発のプロジェクトに実装者として参画。既存で運営しているサービスのUI改善・マニュアルで行なっている作業の自動化を目的としてwebアプリ版の開発をさせていただきました。PMの元、私1人にてフロントエンド・バックエンドの実装、インフラの構築まで行い無事納品致しました。こちらの開発を評価いただき追加案件の依頼も頂くことができました。</span></p>',
        title: '概要',
      },
      {
        text: '<p>fansa(ファンサ)は有名人からアナタだけに宛てた動画メッセージが届くサービスです。誕生日のお祝いや、結婚式でのサプライズメッセージなど、依頼内容は自由に設定できます。（公式サイトより引用）<br></p>',
        title: 'サービス概要',
      },
      {
        text: '<p><a href="https://fansa.jp/" target="_blank" rel="noopener noreferrer">https://fansa.jp/</a></p>',
        title: '既存サービスURL',
      },
      {
        text: '<p>PM：1名<br>実装者：1名</p>',
        title: '開発体制',
      },
      {
        text: '<p>実装者</p>',
        title: '役割',
      },
      {
        text: '<p>フロントエンド・バックエンドの実装<br>AWSによるインフラ構築</p>',
        title: '業務内容',
      },
      {
        text: '<p>ウォーターフォール開発</p>',
        title: '開発手法',
      },
      {
        text: '<p>・レスポンシブ対応<br>・ログイン機能（nuxt/auth, tymon/jwt-auth）<br>・ユーザー管理<br>・メッセージ依頼管理<br>・タレントの評価<br>・動画管理（AWS S3）<br>・動画の期限付きリンク(AWS S3)<br>・動画加工（AWS Lambda）<br>・決済機能（Stripe）<br>・メール・LINE・Slack通知（AWS SES, line-bot-sdk, slack-notification-channel）<br>・タレント・管理者・カテゴリ・フッターページの管理（microCMS）<br>・自動デプロイ（github actions）<br></p>',
        title: '機能一覧',
      },
      {
        text: '<h4 id="hb53ed23aed">言語</h4><p>・HTML/CSS<br>・JavaScript<br>・PHP<br>・Python</p><h4 id="h13c3fb5a8b">フレームワーク</h4><p>・Nuxt.js<br>・Vuetify<br>・Laravel</p><h4 id="h03af4a50af">DB・ツール等</h4><p>・Mysql<br>・AWS</p><p style="padding-left:3em">Route53</p><p style="padding-left:3em">CloudFront</p><p style="padding-left:3em">S3</p><p style="padding-left:3em">ALB</p><p style="padding-left:3em">EC2</p><p style="padding-left:3em">RDS</p><p style="padding-left:3em">Lambda</p><p style="padding-left:3em">SES</p><p>・microCMS<br>・Stripe<br>・github actions<br></p>',
        title: '使用技術',
      },
    ],
    endDate: '2021-11-01',
    genre: 'work',
    id: 'ymhub7ps55',
    images: [
      '/img/works/ymhub7ps55/1.png',
      '/img/works/ymhub7ps55/2.png',
      '/img/works/ymhub7ps55/3.png',
    ],
    isSampleImage: false,
    roles: ['Coding(Responsive)'],
    startDate: '2021-09-01',
    thumbnail: '/img/works/ymhub7ps55/thumbnail.png',
    title: 'fansa',
  },
  {
    contents: [
      {
        text: '<p>ゲーム的要素を取り入れた習慣化アプリケーションです。習慣の登録・習慣達成の記録ができます。連続日数・累計日数・最高連続日数・リカバリー回数の表示とランクアップ機能により習慣化を促します。</p>',
        title: '概要',
      },
      {
        text: '<p><a href="https://routine-quest.netlify.app/" target="_blank" rel="noopener noreferrer">https://routine-quest.netlify.app/</a><br>「試してみる」ボタンからアプリを体験することができます。<br>※現在は停止中です。</p>',
        title: 'アプリURL',
      },
      {
        text: '<p>デザイン・コーディング</p>',
        title: '担当',
      },
      {
        text: '<p>・レスポンシブ対応<br>・ログイン機能（<span style="color:#24292f">nuxt/auth・tymon/jwt-auth</span>）<br>・フォームバリデーション（<span style="color:#24292f">VeeValidate</span>）<br>・ユーザー・習慣のCRUD<br>・習慣の達成を記録<br>・習慣の連続日数・累計日数・最高連続日数・リカバリー回数の表示<br>・習慣のランク機能<br>・習慣のアーカイブ<br>・習慣達成日をカレンダーで表示<br>・獲得ランク数の累計を表示<br>・自動テスト・自動デプロイ</p>',
        title: '機能一覧',
      },
      {
        text: '<p><strong>言語</strong><br>・HTML/CSS<br>・TypeScript<br>・PHP<br><strong>フレームワーク</strong><br>・Nuxt.js<br>・Vuetify<br>・Laravel<br><strong>DB・ツール等</strong><br>・Mysql<br>・Netlify<br>・Heroku</p>',
        title: '主な使用技術',
      },
      {
        text: '<p>・フロントエンド<br><a href="https://github.com/sky2432/routine-nuxt" target="_blank" rel="noopener noreferrer">https://github.com/sky2432/routine-nuxt</a><br>・バックエンドエンド<br><a href="https://github.com/sky2432/routine-laravel" target="_blank" rel="noopener noreferrer">https://github.com/sky2432/routine-laravel</a></p>',
        title: 'githubリポジトリ',
      },
    ],
    endDate: '2021-08-01',
    genre: 'private',
    id: '57wtb0ii4',
    images: [
      '/img/works/57wtb0ii4/1.png',
      '/img/works/57wtb0ii4/2.png',
      '/img/works/57wtb0ii4/3.png',
      '/img/works/57wtb0ii4/4.png',
      '/img/works/57wtb0ii4/5.png',
    ],
    isSampleImage: false,
    roles: ['Coding(Responsive)', 'Design'],
    startDate: '2021-07-01',
    thumbnail: '/img/works/57wtb0ii4/thumbnail.png',
    title: 'RoutineQuest',
  },
  {
    contents: [
      {
        text: '<p>プログラミングスクールでの演習課題として作成しました。飲食店予約アプリケーションです。飲食店の検索・お気に入り・予約をすることができます。ユーザーの他に飲食店の「オーナー」、このアプリを管理する「管理者」のアカウントがあります。</p>',
        title: '概要',
      },
      {
        text: '<p><a href="https://rese-vue.netlify.app/login" target="_blank" rel="noopener noreferrer">https://rese-vue.netlify.app/login</a><br>「ゲストログイン」ボタンからアプリを体験することができます。<br>ユーザー・オーナー・管理者それぞれでゲストログインすることができます。<br>※現在は停止中です。</p>',
        title: 'アプリURL',
      },
      {
        text: '<p>・レスポンシブ対応<br>・ログイン機能<br>・フォームバリデーション（<span style="color:#24292f">VeeValidate</span>）<br>・アカウント（ユーザー・オーナー・管理者）のCRUD<br>・予約・店舗のCRUD<br>・店舗のお気に入り<br>・店舗の検索（エリア・ジャンル・店舗名）<br>・店舗の評価<br>・店舗地図の表示（Google Maps API）<br>・店舗画像の設定とダウンロード<br>・ユーザーとオーナーに対してのメール送信<br>・予約リマインドメール通知<br>・郵便番号から住所を自動入力（PostcodeJP API）</p>',
        title: '機能一覧',
      },
      {
        text: '<p><strong>言語</strong><br>・HTML/CSS<br>・JavaScript<br>・PHP<br><strong>フレームワーク</strong><br>・Vue.js<br>・Vuetify<br>・Laravel<br><strong>DB・ツール等</strong><br>・Mysql<br>・Netlify<br>・Heroku<br>・AWS S3</p>',
        title: '使用技術',
      },
      {
        text: '<p>・フロントエンド<br><a href="https://github.com/sky2432/rese-vue" target="_blank" rel="noopener noreferrer">https://github.com/sky2432/rese-vue</a><br>・バックエンドエンド<br><a href="https://github.com/sky2432/rese-laravel" target="_blank" rel="noopener noreferrer">https://github.com/sky2432/rese-laravel</a></p>',
        title: 'githubリポジトリ',
      },
    ],
    endDate: '2021-06-01',
    genre: 'private',
    id: '44y0_905i5e',
    images: [
      '/img/works/44y0_905i5e/1.png',
      '/img/works/44y0_905i5e/2.png',
      '/img/works/44y0_905i5e/3.png',
      '/img/works/44y0_905i5e/4.png',
    ],
    isSampleImage: false,
    roles: ['Coding(Responsive)'],
    startDate: '2021-05-01',
    thumbnail: '/img/works/44y0_905i5e/thumbnail.png',
    title: 'Rese',
  },
  {
    contents: [
      {
        text: '<p>Todoリストアプリケーションです。Todoの管理をすることができます。グラフやカレンダーによる視覚的な表示からTodo管理の継続化を促します。</p>',
        title: '概要',
      },
      {
        text: '<p><a href="https://my-simple-todolist.netlify.app/login" target="_blank" rel="noopener noreferrer">https://my-simple-todolist.netlify.app/login</a><br>「ゲストログイン」ボタンからアプリを体験することができます。<br><span style="font-size: 0.75em">※現在は停止中です。</span></p>',
        title: 'アプリURL',
      },
      {
        text: '<p>デザイン・コーディング</p>',
        title: '担当',
      },
      {
        text: '<p>・レスポンシブ対応<br>・ログイン機能<br>・ユーザー・TodoのCRUD<br>・Todoの期限・リマインド日時の設定<br>・カレンダー上でのTodoの確認<br>・継続日数をカレンダーで確認<br>・Todo完了数の推移グラフ表示（日別・週別・月別）<br>・メール通知（会員登録時・ログイン時・Todoのリマインド時・Todoの期限超過時）<br>・管理者画面でのユーザーアカウント一覧とTodo一覧の確認</p>',
        title: '機能一覧',
      },
      {
        text: '<p><strong>言語</strong><br>・HTML/CSS<br>・JavaScript<br>・PHP<br><strong>フレームワーク</strong><br>・Vue.js<br>・Laravel<br>・<span style="color:#24292f">BootstrapVue</span><br><strong>DB・ツール等</strong><br>・Mysql<br>・Netlify<br>・Heroku<br>・AWS S3</p>',
        title: '使用技術',
      },
      {
        text: '<p>・フロントエンド<br><a href="https://github.com/sky2432/todo-vue" target="_blank" rel="noopener noreferrer">https://github.com/sky2432/todo-vue</a><br>・バックエンドエンド<br><a href="https://github.com/sky2432/todo-laravel" target="_blank" rel="noopener noreferrer">https://github.com/sky2432/todo-laravel</a></p>',
        title: 'githubリポジトリ',
      },
    ],
    endDate: '2021-05-01',
    genre: 'private',
    id: 'lwjw0mer2',
    images: [
      '/img/works/lwjw0mer2/1.png',
      '/img/works/lwjw0mer2/2.png',
      '/img/works/lwjw0mer2/3.png',
      '/img/works/lwjw0mer2/4.png',
    ],
    isSampleImage: false,
    roles: ['Coding(Responsive)', 'Design'],
    startDate: '2021-04-01',
    thumbnail: '/img/works/lwjw0mer2/thumbnail.png',
    title: 'TodoList',
  },
  {
    contents: [
      {
        text: '<p>こちらのサイトです。私のポートフォリオサイトになります。<br>デザインのテンプレートとしてこちらを使用させていただきました。<br><a href="https://webdesigner-go.com/template/portfolio-02/" target="_blank" rel="noopener noreferrer">https://webdesigner-go.com/template/portfolio-02/</a><br><br>更新の手間を減らすためにコンテンツ管理システムのmicroCMSを導入しました。<br>こちらから本サイトのWORKS・SKILLの内容を変更できるようになっています。</p>',
        title: '概要',
      },
      {
        text: '<p>・HTML/CSS<br>・JavaScript<br>・Vue.js<br>・Netlify<br>・Swiper<br>・mircoCMS</p>',
        title: '使用技術',
      },
      {
        text: '<p><a href="https://github.com/sky2432/portfolio-site" target="_blank" rel="noopener noreferrer">https://github.com/sky2432/portfolio-site</a></p>',
        title: 'githubリポジトリ',
      },
    ],
    genre: 'private',
    id: 'v7clcfm_4',
    images: [],
    isSampleImage: false,
    roles: ['Coding(Responsive)'],
    startDate: '2021-12-01',
    thumbnail: '/img/works/v7clcfm_4/thumbnail.jpg',
    title: 'SORA ITO Portfolio Site',
  },
];
