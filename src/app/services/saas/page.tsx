"use client";

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { motion } from 'framer-motion';

export default function SaaSPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            SaaSソリューションサービス
          </motion.h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Microsoft365などの導入サポートを行います。
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">提供ソリューション</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Microsoft 365</h3>
              <p className="text-gray-600 mb-6">
                メール、ドキュメント管理、コミュニケーションツールなど、ビジネスに必要な機能を統合的に提供します。
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Exchange Online
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SharePoint Online
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Teams
                </li>
              </ul>
              <a href="/contact" className="btn-primary inline-block">詳細を見る</a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">セキュリティソリューション</h3>
              <p className="text-gray-600 mb-6">
                最新のセキュリティ脅威から企業を守るための包括的なソリューションを提供します。
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  エンドポイントセキュリティ
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  メールセキュリティ
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  アクセス管理
                </li>
              </ul>
              <a href="/contact" className="btn-primary inline-block">詳細を見る</a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">導入プロセス</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="z-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                      1
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold mb-2">現状分析</h3>
                    <p className="text-gray-600">
                      現在の業務フローやシステム環境を分析し、最適なソリューションを提案します。
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="z-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                      2
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold mb-2">導入計画</h3>
                    <p className="text-gray-600">
                      スケジュールや移行方法を含む詳細な導入計画を策定します。
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="z-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                      3
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold mb-2">導入・移行</h3>
                    <p className="text-gray-600">
                      計画に基づいて、システムの導入とデータ移行を実施します。
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="z-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                      4
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold mb-2">運用サポート</h3>
                    <p className="text-gray-600">
                      導入後も継続的な運用サポートとトレーニングを提供します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">お問い合わせ</h2>
          <p className="text-xl mb-8">
            SaaSソリューションサービスについて、詳しい情報や見積もりをご希望の方は<br />
            お気軽にお問い合わせください。
          </p>
          <a href="/contact" className="btn-accent inline-block">
            お問い合わせはこちら
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
} 