"use client";

import { useEffect } from 'react';
import Header from '@/app/components/Header';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: 'インテントセールスとは',
      description: '「意図＝インテント」を起点にAIが最適なアプローチを導き出し、営業やマーケティング活動を戦略的に自動化していく新しい成長モデルです。',
      image: '/images/feature-bg.svg',
    },
    {
      title: 'インテントデータとは',
      description: 'Web上の行動履歴から得られるインテントデータを分析することで、見込み客が抱える課題やニーズを把握できます。',
      image: '/images/feature-bg.svg',
    },
    {
      title: 'インテントマーケティングとは',
      description: '顧客インテントを基にニーズや市場トレンドを可視化し「今何が求められているか」を見極め、最適なタイミングでアプローチします。',
      image: '/images/feature-bg.svg',
    },
  ];
  
  const casesTop = [
    {
      title: '契約管理システム（クラウド化、セキュリティ強化）',
      description: '多くの企業様にご利用いただいているクラウドシステムは、安全性と使いやすさを兼ね備え、業務効率の大幅な向上に貢献しています。',
      image: '/images/feature-bg.svg',
    },
    {
      title: '保険請求自動化システム（RPA導入）',
      description: 'RPAとAIを組み合わせた自動化システムにより、請求業務の工数を80%削減。人的ミスもゼロになりました。',
      image: '/images/feature-bg.svg',
    },
    {
      title: '社内情報共有プラットフォーム構築',
      description: 'テレワーク環境下でも円滑なコミュニケーションを実現するプラットフォームを短期間で構築し、生産性の維持に貢献しました。',
      image: '/images/feature-bg.svg',
    },
  ];
  
  const casesBottom = [
    {
      title: 'DX推進コンサルティング',
      description: 'デジタル変革を成功させるためのロードマップ策定から実装まで、包括的なサポートを提供しています。',
      image: '/images/feature-bg.svg',
    },
    {
      title: 'クラウドセキュリティ強化',
      description: 'クラウド環境のセキュリティリスクを可視化し、最適な対策を実施。安全なデジタル環境を構築します。',
      image: '/images/feature-bg.svg',
    },
    {
      title: 'データ分析基盤構築',
      description: '散在する社内データを統合し、ビジネスインサイトを導き出すためのデータ分析基盤を構築します。',
      image: '/images/feature-bg.svg',
    },
  ];
  
  const services = [
    {
      title: 'SES',
      description: '多くの企業様から高い評価をいただいた専門性の高いエンジニアでご支援します。',
      href: '/services/ses',
    },
    {
      title: 'クラウドバックアップサービス',
      description: '低コストでクラウドデータのすべてを無期限にバックアップします。',
      href: '/services/backup',
    },
    {
      title: 'SaaSソリューションサービス',
      description: 'Microsoft365などの導入サポートを行います。',
      href: '/services/saas',
    },
  ];

  const blog = [
    {
      title: 'DXで実現する働き方改革',
      description: 'デジタル技術を活用した新しい働き方とその導入事例をご紹介します。',
      image: '/images/feature-bg.svg',
    },
    {
      title: '失敗しないRPA導入のポイント',
      description: 'RPAプロジェクトを成功させるための重要なステップと注意点について解説します。',
      image: '/images/feature-bg.svg',
    },
    {
      title: 'クラウド移行の最新トレンド',
      description: '2023年に注目すべきクラウド技術とビジネスへの活用方法をご紹介します。',
      image: '/images/feature-bg.svg',
    },
    {
      title: 'セキュリティ対策の基本と応用',
      description: '増加するサイバー攻撃からビジネスを守るための実践的なセキュリティ対策を解説します。',
      image: '/images/feature-bg.svg',
    },
  ];

  const partners = [
    { name: 'LINE', logo: '/images/partner-logo.svg' },
    { name: 'GMO', logo: '/images/partner-logo.svg' },
    { name: 'SmartHR', logo: '/images/partner-logo.svg' },
    { name: 'DocuSign', logo: '/images/partner-logo.svg' },
    { name: 'Zoom', logo: '/images/partner-logo.svg' },
  ];

  return (
    <main className="min-h-screen bg-blue-950 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-950/80">
          {/* Animated X patterns */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,20 L80,80 M80,20 L20,80' stroke='%230066FF' stroke-width='8'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-[12rem] font-bold leading-none text-blue-300"
          >
            IX
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Managed IX Service
            </h2>
            <p className="text-lg text-blue-200">
              インテントを起点に業務を変革し、企業の成長を加速させる新しいプロフェッショナルサービス
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards - First Row */}
      <section className="py-16 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-950">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Large Banner Section */}
      <section className="py-24 bg-blue-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                人と企業の未来を創る
              </h2>
              <p className="text-xl md:text-2xl text-blue-200 mb-8">
                三方よし、ブレーブに関わる皆が幸せに
              </p>
              <div className="flex justify-center">
                <Link
                  href="#services"
                  className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-8 py-3 rounded-full text-lg font-medium"
                >
                  サービスを見る
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-950 to-transparent"></div>
      </section>

      {/* Case Study Cards - Top Row */}
      <section className="py-16 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {casesTop.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-950">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Large Banner with INTENT */}
      <section className="py-24 bg-blue-900 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                株式会社ブレーブは、「人と企業の未来を創る」をモットーに
              </h2>
              <div className="bg-white rounded-lg p-6 text-blue-950">
                <p className="text-lg font-medium mb-4">
                  「インテントセールス」とは
                </p>
                <p className="text-gray-700">
                  「意図＝インテント」を起点にAIが最適なアプローチを導き出し、営業やマーケティング活動を戦略的に自動化していく新しい成長モデルです。顧客の行動データから真のニーズを把握し、最適なタイミングでアプローチすることで、営業効率を飛躍的に向上させます。
                </p>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/intent-image.svg"
                  alt="INTENT"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-950 to-transparent"></div>
      </section>

      {/* Case Study Cards - Bottom Row */}
      <section className="py-16 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {casesBottom.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-950">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Grid with Blueprint Background */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#4299e1" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">SERVICE</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-blue-200">
                ブレーブでは、お客様のビジネス成長をトータルでサポートする多様なサービスを提供しています
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-800/30 backdrop-blur-sm p-8 rounded-lg border border-blue-700/30">
              <h3 className="text-2xl font-bold mb-4 text-white">SES</h3>
              <p className="text-blue-200 mb-6">
                多くの企業様から高い評価をいただいた専門性の高いエンジニアでご支援します。
              </p>
              <ul className="text-blue-100 space-y-2 mb-6 list-disc pl-5">
                <li>システム開発</li>
                <li>インフラ構築</li>
                <li>プロジェクト管理</li>
              </ul>
              <Link
                href="/services/ses"
                className="text-blue-300 hover:text-blue-100 transition-colors inline-flex items-center"
              >
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-blue-800/30 backdrop-blur-sm p-8 rounded-lg border border-blue-700/30">
              <h3 className="text-2xl font-bold mb-4 text-white">クラウドバックアップ</h3>
              <p className="text-blue-200 mb-6">
                低コストでクラウドデータのすべてを無期限にバックアップします。
              </p>
              <ul className="text-blue-100 space-y-2 mb-6 list-disc pl-5">
                <li>自動バックアップ</li>
                <li>データ復旧</li>
                <li>セキュリティ対策</li>
              </ul>
              <Link
                href="/services/backup"
                className="text-blue-300 hover:text-blue-100 transition-colors inline-flex items-center"
              >
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-blue-800/30 backdrop-blur-sm p-8 rounded-lg border border-blue-700/30">
              <h3 className="text-2xl font-bold mb-4 text-white">SaaSソリューション</h3>
              <p className="text-blue-200 mb-6">
                Microsoft365などの導入サポートを行います。
              </p>
              <ul className="text-blue-100 space-y-2 mb-6 list-disc pl-5">
                <li>導入コンサルティング</li>
                <li>環境構築</li>
                <li>運用サポート</li>
              </ul>
              <Link
                href="/services/saas"
                className="text-blue-300 hover:text-blue-100 transition-colors inline-flex items-center"
              >
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partner Logos */}
      <section className="py-16 bg-white text-blue-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">導入実績</h2>
            <p className="text-gray-600 mt-2">多くの企業様にご利用いただいています</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="w-32 md:w-40">
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  width={200} 
                  height={80} 
                  className="h-auto w-full" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Grid */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {blog.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-blue-950 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{post.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors px-6 py-2 rounded"
            >
              すべての記事を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-800 relative">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-large" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#fff" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-large)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">お問い合わせ</h2>
            <p className="text-xl text-blue-100 mb-8">
              サービスについてのご質問やお見積りなど、お気軽にお問い合わせください
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-900 hover:bg-blue-50 transition-colors px-8 py-3 rounded-full font-medium"
              >
                お問い合わせ
              </Link>
              <Link
                href="/careers"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors px-8 py-3 rounded-full font-medium"
              >
                採用情報
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12 border-t border-blue-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.svg"
              alt="Sales Marker"
              width={200}
              height={50}
              className="h-8 w-auto"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div>
              <h3 className="text-sm font-semibold mb-4 text-blue-300 uppercase">サービス</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-blue-100 hover:text-white">インテントセールス</Link></li>
                <li><Link href="#" className="text-blue-100 hover:text-white">SESサービス</Link></li>
                <li><Link href="#" className="text-blue-100 hover:text-white">クラウドバックアップ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 text-blue-300 uppercase">会社情報</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-blue-100 hover:text-white">会社概要</Link></li>
                <li><Link href="#" className="text-blue-100 hover:text-white">ニュース</Link></li>
                <li><Link href="#" className="text-blue-100 hover:text-white">採用情報</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 text-blue-300 uppercase">サポート</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-blue-100 hover:text-white">よくある質問</Link></li>
                <li><Link href="#" className="text-blue-100 hover:text-white">お問い合わせ</Link></li>
                <li><Link href="#" className="text-blue-100 hover:text-white">サポートサイト</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 text-blue-300 uppercase">法的情報</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-blue-100 hover:text-white">プライバシーポリシー</Link></li>
                <li><Link href="#" className="text-blue-100 hover:text-white">利用規約</Link></li>
                <li><Link href="#" className="text-blue-100 hover:text-white">情報セキュリティ</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 text-center">
            <p className="text-blue-400 text-sm">&copy; {new Date().getFullYear()} ブレーブ株式会社 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
