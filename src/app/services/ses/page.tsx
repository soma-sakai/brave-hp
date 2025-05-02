"use client";

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { motion } from 'framer-motion';

export default function SESPage() {
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
            SESサービス
          </motion.h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            多くの企業様から高い評価をいただいた専門性の高いエンジニアでご支援します。
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">サービスの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">高度な技術力</h3>
              <p className="text-gray-600">
                最新技術に精通したエンジニアが、お客様のプロジェクトを成功に導きます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">迅速な対応</h3>
              <p className="text-gray-600">
                プロジェクトのニーズに合わせて、最適なエンジニアを素早く配置します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">品質保証</h3>
              <p className="text-gray-600">
                徹底した品質管理と定期的なレビューで、高品質なサービスを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">導入の流れ</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">ヒアリング</h3>
                  <p className="text-gray-600">プロジェクトの要件や必要なスキルをお伺いします。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">エンジニアの選定</h3>
                  <p className="text-gray-600">要件に最適なエンジニアを選定し、ご提案します。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">契約・着任</h3>
                  <p className="text-gray-600">契約締結後、エンジニアが業務を開始します。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">フォローアップ</h3>
                  <p className="text-gray-600">定期的なフォローアップで、プロジェクトの成功をサポートします。</p>
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
            SESサービスについて、詳しい情報や見積もりをご希望の方は<br />
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