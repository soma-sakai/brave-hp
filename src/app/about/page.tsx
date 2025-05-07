"use client";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import { motion } from 'framer-motion';

const companyInfo = {
  name: 'ブレーブ株式会社',
  established: '2010年4月',
  capital: '1,000万円',
  ceo: '佐藤太郎',
  employees: '50名',
  address: '〒150-0002 東京都渋谷区',
  business: [
    'SESサービス',
    'クラウドバックアップサービス',
    'SaaSソリューションサービス',
  ],
  vision: '三方よし、ブレーブに関わる皆が幸せに',
  mission: 'テクノロジーの力で、企業のDXを加速し、より良い社会の実現に貢献する。',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-blue-950 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-900">
          {/* Gradient wave background */}
          <div 
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage: `
                radial-gradient(circle at 70% 60%, rgba(37, 99, 235, 0.7) 0%, transparent 60%),
                radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.7) 0%, transparent 50%),
                linear-gradient(to bottom right, rgba(29, 78, 216, 0.4), rgba(30, 64, 175, 0.6))
              `,
            }}
          />
          
          {/* Smooth waves */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-[45%]"
                 style={{
                   backgroundImage: `
                     linear-gradient(to bottom right, 
                     rgba(59, 130, 246, 0.2) 0%, 
                     rgba(37, 99, 235, 0.4) 40%, 
                     rgba(30, 64, 175, 0.5) 80%)
                   `,
                   borderRadius: '100% 100% 0 0 / 80% 80% 0 0',
                   transform: 'scaleX(1.5)',
                   boxShadow: '0 -10px 30px rgba(37, 99, 235, 0.3)',
                 }}>
            </div>
            
            {/* 光の反射効果 */}
            <div className="absolute bottom-[30%] left-[20%] w-[15%] h-[10%] bg-blue-400/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-[25%] right-[30%] w-[20%] h-[8%] bg-blue-300/40 rounded-full blur-3xl"></div>
            
            {/* 白い直線 */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[75%] w-full h-[2px] bg-gradient-to-r from-white/10 via-white/80 to-white/10"></div>
              <div className="absolute left-[85%] top-0 h-full w-[1px] bg-white/25"></div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">
            会社概要
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-b from-blue-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-vision" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#4299e1" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-vision)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-200">企業理念</h2>
            <div className="bg-gradient-to-b from-blue-800/40 to-blue-900/60 backdrop-blur-sm p-8 rounded-xl border border-blue-700/40 shadow-lg mb-8">
              <p className="text-2xl font-bold text-white mb-8">{companyInfo.vision}</p>
              <p className="text-lg text-blue-100">{companyInfo.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-blue-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-200">企業情報</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-b from-blue-800/40 to-blue-900/60 backdrop-blur-sm p-8 rounded-xl border border-blue-700/40 shadow-lg">
              <dl className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-blue-700/50">
                  <dt className="font-semibold text-blue-100">会社名</dt>
                  <dd className="md:col-span-2 text-white">{companyInfo.name}</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-blue-700/50">
                  <dt className="font-semibold text-blue-100">設立</dt>
                  <dd className="md:col-span-2 text-white">{companyInfo.established}</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-blue-700/50">
                  <dt className="font-semibold text-blue-100">資本金</dt>
                  <dd className="md:col-span-2 text-white">{companyInfo.capital}</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-blue-700/50">
                  <dt className="font-semibold text-blue-100">代表取締役</dt>
                  <dd className="md:col-span-2 text-white">{companyInfo.ceo}</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-blue-700/50">
                  <dt className="font-semibold text-blue-100">従業員数</dt>
                  <dd className="md:col-span-2 text-white">{companyInfo.employees}</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-blue-700/50">
                  <dt className="font-semibold text-blue-100">所在地</dt>
                  <dd className="md:col-span-2 text-white">{companyInfo.address}</dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                  <dt className="font-semibold text-blue-100">事業内容</dt>
                  <dd className="md:col-span-2 text-white">
                    <ul className="list-disc list-inside space-y-2">
                      {companyInfo.business.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-16 bg-gradient-to-b from-blue-900/50 to-blue-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-200">アクセス</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-b from-blue-800/30 to-blue-900/50 p-6 rounded-xl border border-blue-700/30 shadow-md mb-8">
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.7016358!3d35.6585848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b57d1ff8cfb%3A0x91d5b0ed7e8e78f4!2z5riL6LC35Yy6!5e0!3m2!1sja!2sjp!4v1647834756812!5m2!1sja!2sjp"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="text-center">
                <p className="mb-4 text-blue-100">
                  〒150-0002<br />
                  東京都渋谷区
                </p>
                <p className="text-blue-200">
                  渋谷駅から徒歩5分
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 