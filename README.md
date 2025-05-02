# ブレーブ株式会社 コーポレートサイト

Next.js + Supabaseで構築されたブレーブ株式会社のコーポレートサイトです。

## 技術スタック

- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase
- Framer Motion

## 開発環境のセットアップ

1. リポジトリをクローン
```bash
git clone [repository-url]
cd brave_hp
```

2. 依存関係のインストール
```bash
npm install
```

3. 開発サーバーの起動
```bash
npm run dev
```

4. ブラウザで http://localhost:3000 を開く

## 環境変数の設定

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## ディレクトリ構造

```
brave_hp/
├── src/
│   ├── app/              # App Router pages
│   ├── components/       # 共通コンポーネント
│   ├── lib/             # ユーティリティ関数
│   └── types/           # TypeScript型定義
├── public/              # 静的ファイル
└── ...
```

## 機能

- レスポンシブデザイン
- アニメーション効果
- サービス紹介
- 事例紹介
- お問い合わせフォーム
- 採用情報

## デプロイ

Vercelを使用してデプロイすることを推奨します：

1. [Vercel](https://vercel.com)でアカウントを作成
2. このリポジトリを連携
3. 環境変数を設定
4. デプロイ

## ライセンス

All rights reserved.
