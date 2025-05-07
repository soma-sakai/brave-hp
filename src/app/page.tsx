"use client";

import { useEffect } from 'react';
import Header from '../components/Header';
// import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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

  useEffect(() => {
    // スクロールアニメーションのためのIntersection Observer
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    
    const sections = document.querySelectorAll('#services, #about, #company, #message');
    sections.forEach(section => {
      // 初期表示時にもvisibleクラスを追加して見えるようにする
      section.classList.add('visible');
      observer.observe(section);
    });
    
    // クリーンアップ関数
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []); // 空の依存配列でマウント時のみ実行

  return (
    <main className="min-h-screen bg-blue-950 text-white">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* BRAVEロゴはHeaderで表示されているため削除 */}
        
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-900">
          {/* Clean gradient wave background - inspired by reference image */}
          <div 
            className="absolute inset-0 opacity-100 delayed-animation"
            style={{
              backgroundImage: `
                radial-gradient(circle at 70% 60%, rgba(37, 99, 235, 0.7) 0%, transparent 60%),
                radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.7) 0%, transparent 50%),
                linear-gradient(to bottom right, rgba(29, 78, 216, 0.4), rgba(30, 64, 175, 0.6))
              `,
            }}
          />
          
          {/* Smooth waves with delayed animation */}
          <div className="absolute inset-0 overflow-hidden delayed-animation">
            <div className="absolute bottom-0 left-0 right-0 h-[45%] delayed-wave-animation"
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
            <div className="absolute bottom-0 left-0 right-0 h-[35%] delayed-wave-animation2"
                 style={{
                   backgroundImage: `
                     linear-gradient(to bottom right, 
                     rgba(59, 130, 246, 0.3) 0%, 
                     rgba(37, 99, 235, 0.4) 50%, 
                     rgba(30, 64, 175, 0.5) 100%)
                   `,
                   borderRadius: '100% 100% 0 0 / 100% 100% 0 0',
                   transform: 'scaleX(1.8)',
                   boxShadow: '0 -8px 25px rgba(37, 99, 235, 0.2)',
                 }}>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[25%] delayed-wave-animation3"
                 style={{
                   backgroundImage: `
                     linear-gradient(to bottom, 
                     rgba(59, 130, 246, 0.2) 0%, 
                     rgba(37, 99, 235, 0.4) 50%, 
                     rgba(30, 64, 175, 0.45) 100%)
                   `,
                   borderRadius: '100% 100% 0 0 / 80% 80% 0 0',
                   transform: 'scaleX(2.2)',
                   boxShadow: '0 -5px 20px rgba(37, 99, 235, 0.15)',
                 }}>
            </div>

            {/* 光の反射効果を追加 */}
            <div className="absolute bottom-[30%] left-[20%] w-[15%] h-[10%] bg-blue-400/30 rounded-full blur-2xl delayed-light-animation"></div>
            <div className="absolute bottom-[25%] right-[30%] w-[20%] h-[8%] bg-blue-300/40 rounded-full blur-3xl delayed-light-animation2"></div>
            
            {/* 白い直線 - 文字と波のアニメーションの後に表示 - 数を減らしました */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* 横向きの直線 - 画面下部に配置 */}
              <div className="absolute top-[75%] w-full h-[2px] bg-gradient-to-r from-white/10 via-white/80 to-white/10 delayed-line-animation line-horizontal line-opacity-1 glow-line"></div>
              
              {/* 縦向きの直線 - 右側にずらす */}
              <div className="absolute left-[85%] top-0 h-full w-[1px] bg-white/25 delayed-line-animation line-vertical line-opacity-2"></div>
              
              {/* 斜めの直線 - 1本だけに減らす */}
              <div className="absolute top-0 right-0 h-[200%] w-[1px] bg-white/20 origin-top-right -rotate-45 delayed-line-animation line-diagonal line-opacity-3"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center justify-center h-full">
          <div className="animate-fade-in flex flex-col items-center justify-center max-w-3xl">
            {/* BRAVE Logo - Removed from here */}
            
            {/* Dissolve animation for title - simplified to single stage */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300 leading-tight tracking-tight dissolve-text-simple">
              人と企業の未来を創る
            </h1>
          
            {/* Dissolve animation for subtitle - simplified to single stage */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-blue-200 tracking-wider dissolve-subtitle-simple" style={{ letterSpacing: '0.07em' }}>
              三方よし、ブレーブに関わる皆が幸せに
            </h2>
          </div>
        </div>
      </section>

      {/* Hero Sectionの終わりの後、直接SERVICE Sectionを開始 */}
      
      {/* Services Grid with Blueprint Background */}
      <section id="services" className="py-28 relative overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950">
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
        
        {/* 波状の背景を追加 */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute bottom-0 left-0 right-0 h-[35%]"
               style={{
                 backgroundImage: `
                   linear-gradient(to bottom right, 
                   rgba(59, 130, 246, 0.3) 0%, 
                   rgba(37, 99, 235, 0.4) 50%, 
                   rgba(30, 64, 175, 0.5) 100%)
                 `,
                 borderRadius: '100% 100% 0 0 / 100% 100% 0 0',
                 transform: 'scaleX(1.8)',
               }}>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white tracking-wide fade-in-up">SERVICE</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-gradient-to-b from-blue-800/40 to-blue-900/60 backdrop-blur-sm p-8 rounded-xl border border-blue-700/40 shadow-lg fade-in-up hover-card-animation">
              <h3 className="text-2xl font-bold mb-4 text-white tracking-wide">SES</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                多くの企業様から高い評価をいただいた専門性の高いエンジニアでご支援します。
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-blue-800/40 to-blue-900/60 backdrop-blur-sm p-8 rounded-xl border border-blue-700/40 shadow-lg fade-in-up-delay hover-card-animation">
              <h3 className="text-2xl font-bold mb-4 text-white tracking-wide">クラウドバックアップ<br />サービス</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                低コストでクラウドデータのすべてを無期限にバックアップします。
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-blue-800/40 to-blue-900/60 backdrop-blur-sm p-8 rounded-xl border border-blue-700/40 shadow-lg fade-in-up-delay-2 hover-card-animation">
              <h3 className="text-2xl font-bold mb-4 text-white tracking-wide">SaaSソリューション<br />サービス</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                Microsoft365などの導入サポートを行います。
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT Section with Lens Flare Animation */}
      <section id="about" className="py-28 bg-gradient-to-br from-blue-950 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900 opacity-90"></div>
        
        {/* Lens Flare Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[30%] w-[300px] h-[300px] rounded-full bg-blue-400/20 blur-[100px] lens-flare-animation"></div>
          <div className="absolute bottom-[20%] right-[20%] w-[200px] h-[200px] rounded-full bg-cyan-300/30 blur-[80px] lens-flare-animation-delay"></div>
          <div className="absolute top-[40%] right-[10%] w-[150px] h-[150px] rounded-full bg-indigo-400/20 blur-[50px] lens-flare-animation-long"></div>
        </div>
        
        {/* 波状の背景を追加 */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute bottom-0 left-0 right-0 h-[25%]"
               style={{
                 backgroundImage: `
                   linear-gradient(to bottom, 
                   rgba(59, 130, 246, 0.2) 0%, 
                   rgba(37, 99, 235, 0.4) 50%, 
                   rgba(30, 64, 175, 0.45) 100%)
                 `,
                 borderRadius: '100% 100% 0 0 / 80% 80% 0 0',
                 transform: 'scaleX(2.2)',
               }}>
          </div>
                </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-wide fade-in-up">ABOUT</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-12"></div>
            <div className="max-w-4xl mx-auto bg-blue-800/30 backdrop-blur-sm p-8 rounded-xl border border-blue-700/30 shadow-xl">
              <p className="text-xl text-white leading-relaxed mb-8 fade-in-up-delay">
                株式会社ブレーブは、「人と企業の未来を創る」をモットーに、多様な人材採用とSES事業を通じて社会と企業の発展に貢献するプロフェッショナル集団です。
              </p>
              <p className="text-xl text-white leading-relaxed fade-in-up-delay-2">
                私たちは「人こそが企業の最も大切な資産」と捉え、適材適所の人材配置を通じて企業の競争力向上に貢献。安心して働ける環境づくりと人材の可能性を最大限に引き出すことを目指しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY Section */}
      <section id="company" className="py-24 bg-gradient-to-t from-blue-950 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-company" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#4299e1" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-company)" />
          </svg>
        </div>
        
        {/* 光の反射効果を追加 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[15%] w-[200px] h-[200px] rounded-full bg-blue-400/10 blur-[80px] lens-flare-animation-slow"></div>
          <div className="absolute bottom-[30%] right-[10%] w-[150px] h-[150px] rounded-full bg-blue-300/15 blur-[60px] lens-flare-animation-delay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">COMPANY</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-900/40 backdrop-blur-sm rounded-lg border border-blue-800/50 overflow-hidden shadow-xl">
                <dl className="divide-y divide-blue-800/50">
                  <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-base font-medium text-blue-200">社名</dt>
                    <dd className="mt-1 text-lg text-white sm:col-span-2 sm:mt-0">株式会社ブレーブ</dd>
                  </div>
                  <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-base font-medium text-blue-200">代表者</dt>
                    <dd className="mt-1 text-lg text-white sm:col-span-2 sm:mt-0">代表取締役社長　 持永眞一</dd>
                  </div>
                  <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-base font-medium text-blue-200">本社所在地</dt>
                    <dd className="mt-1 text-white sm:col-span-2 sm:mt-0">
                      〒170-0013<br />
                      東京都豊島区東池袋4-25-12 池袋今泉ビル7F<br />
                      <Link href="#" className="text-blue-300 hover:text-blue-100 mt-2 inline-block">→アクセス</Link>
                    </dd>
                  </div>
                  <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-base font-medium text-blue-200">TEL</dt>
                    <dd className="mt-1 text-lg text-white sm:col-span-2 sm:mt-0">03-5979-5224</dd>
                  </div>
                  <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-base font-medium text-blue-200">FAX</dt>
                    <dd className="mt-1 text-lg text-white sm:col-span-2 sm:mt-0">03-5391-7310</dd>
                  </div>
                  <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-base font-medium text-blue-200">資本金</dt>
                    <dd className="mt-1 text-lg text-white sm:col-span-2 sm:mt-0">2,000万円</dd>
                  </div>
                  <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-base font-medium text-blue-200">設立</dt>
                    <dd className="mt-1 text-lg text-white sm:col-span-2 sm:mt-0">平成11年7月</dd>
                  </div>
                  <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-base font-medium text-blue-200">従業員数</dt>
                    <dd className="mt-1 text-lg text-white sm:col-span-2 sm:mt-0">37名</dd>
                  </div>
                  <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-base font-medium text-blue-200">事業内容</dt>
                    <dd className="mt-1 text-lg text-white sm:col-span-2 sm:mt-0">各種システム開発・コンサルティング</dd>
                  </div>
                  <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-base font-medium text-blue-200">顧客先</dt>
                    <dd className="mt-1 text-base text-white sm:col-span-2 sm:mt-0 leading-relaxed">
                      金融（銀行、証券会社、信販会社）、 保険（生保・損保）、 運輸、流通、 通信、電機（大手メーカ）、公共機関、官庁 、その他
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MESSAGE Section with Lens Flare Animation */}
      <section id="message" className="py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900"></div>
        
        {/* Lens Flare Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[5%] left-[20%] w-[250px] h-[250px] rounded-full bg-blue-400/15 blur-[80px] lens-flare-animation-slow"></div>
          <div className="absolute bottom-[10%] right-[30%] w-[300px] h-[300px] rounded-full bg-indigo-500/20 blur-[100px] lens-flare-animation-delay-long"></div>
          <div className="absolute bottom-[40%] left-[10%] w-[200px] h-[200px] rounded-full bg-cyan-300/10 blur-[60px] lens-flare-animation"></div>
        </div>
        
        {/* 波状の背景を追加 */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          <div className="absolute bottom-0 left-0 right-0 h-[30%]"
               style={{
                 backgroundImage: `
                   linear-gradient(to bottom right, 
                   rgba(59, 130, 246, 0.2) 0%, 
                   rgba(37, 99, 235, 0.3) 40%, 
                   rgba(30, 64, 175, 0.4) 80%)
                 `,
                 borderRadius: '100% 100% 0 0 / 80% 80% 0 0',
                 transform: 'scaleX(1.5)',
               }}>
          </div>
                </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 fade-in-up">MESSAGE</h2>
            <div className="max-w-4xl mx-auto text-left">
              <div className="bg-blue-800/30 backdrop-blur-sm p-8 rounded-xl border border-blue-700/30 shadow-xl fade-in">
                <h3 className="text-2xl font-bold text-blue-100 mb-8 text-center">CEOからのメッセージ</h3>
                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-8">
                  会社は社員とその家族を守り、社員一人一人が努力し、会社と共に成長する。<br />
                  これが私の根底にある基本的な考えです。
                </p>
                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-8">
                  会社と社員の心が一つになり、同じ方向に向かっている時、皆仲間であり家族です。<br />
                  その家族を守る為には資金も必要ですから蓄えます。しかし蓄えが多くなると経営者はそれを隠くそうとします。<br />
                  そうなると会社の風通しが悪くなり、会社と社員の心が一つになりません。<br />
                  会社と共に悩み、会社と共に苦しみ、会社と共に成長してくれる社員に、私は包み隠さず腹を割って話をします。
                </p>
                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-8">
                  技術者として一生懸命に仕事して、疲れたと言うなら、あなたの今後を考え話し合いましょう。<br />
                  営業に転身？　いやあなたの趣味を仕事にできないか？　他業種で面白い企画発想はないか？<br />
                  話をするだけで、疲れた技術者が元気になりそうです。<br />
                  その時の為にも、頑張ってお金も蓄え、いずれその時に運用しましょう。
                </p>
                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-8">
                  事業の繁栄と継続は、客先に信用される事でありますが、私は先ず社員に信用される事を大事にします。<br />
                  会社は当たり前の事を当たり前にやり続け、社員も当たり前の事を当たり前にやり続ける。<br />
                  会社も良くなり、社員も良くなり、世間も良くなり、「三方よし」。経営理念の原点です。
                </p>
                <p className="text-base md:text-lg text-blue-100 leading-relaxed">
                  社員が成長し、客先に信用され、社会貢献できる企業で有り続ける為に、苦しみながらも前を向いて乗り越えてまいります。
                </p>
              </div>
                </div>
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
        
        {/* 光の反射効果を追加 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[30%] right-[20%] w-[150px] h-[150px] rounded-full bg-blue-400/20 blur-[70px] lens-flare-animation"></div>
          <div className="absolute bottom-[20%] left-[25%] w-[120px] h-[120px] rounded-full bg-cyan-300/15 blur-[50px] lens-flare-animation-delay"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-5">お問い合わせ</h2>
            <p className="text-lg text-blue-100 mb-6">
              サービスについてのご質問やお見積りなど、お気軽にお問い合わせください
            </p>
            <div className="flex justify-center gap-4">
            <Link
              href="/contact"
                className="bg-white text-blue-900 hover:bg-blue-50 transition-colors px-7 py-3 rounded-full font-medium"
            >
              お問い合わせ
            </Link>
              <Link
                href="/careers"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors px-7 py-3 rounded-full font-medium"
              >
                採用情報
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12 border-t border-blue-800/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.svg"
              alt="BRAVE"
              width={200}
              height={50}
              className="h-8 w-auto"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
            <div>
              <h3 className="text-xs font-semibold mb-3 text-blue-300 uppercase tracking-wider">サービス</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-blue-100 hover:text-white">インテントセールス</Link></li>
                <li><Link href="#" className="text-blue-100 hover:text-white">SESサービス</Link></li>
                <li><Link href="#" className="text-blue-100 hover:text-white">クラウドバックアップ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold mb-3 text-blue-300 uppercase tracking-wider">会社情報</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-blue-100 hover:text-white">会社概要</Link></li>
                <li><Link href="#" className="text-blue-100 hover:text-white">ニュース</Link></li>
                <li><Link href="#" className="text-blue-100 hover:text-white">採用情報</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold mb-3 text-blue-300 uppercase tracking-wider">サポート</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-blue-100 hover:text-white">よくある質問</Link></li>
                <li><Link href="#" className="text-blue-100 hover:text-white">お問い合わせ</Link></li>
                <li><Link href="#" className="text-blue-100 hover:text-white">サポートサイト</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold mb-3 text-blue-300 uppercase tracking-wider">法的情報</h3>
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

      {/* Add custom keyframes for animations */}
      <style jsx global>{`
        @keyframes slideHorizontal {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes slideVertical {
          0% { background-position: 0 0%; }
          100% { background-position: 0 200%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Delay all background animations until text appears */
        .delayed-animation {
          opacity: 0;
          animation: fadeIn 1.5s ease-in-out forwards;
          animation-delay: 2s; /* Wait for text to appear */
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        /* Smooth wave animations with delay */
        .delayed-wave-animation {
          animation: gentleWave 15s ease-in-out infinite;
          animation-delay: 2.1s; /* Starts after text appears */
        }
        
        .delayed-wave-animation2 {
          animation: gentleWave 18s ease-in-out infinite;
          animation-delay: 2.3s; /* Slightly staggered start */
        }
        
        .delayed-wave-animation3 {
          animation: gentleWave 20s ease-in-out infinite;
          animation-delay: 2.5s; /* Slightly more staggered start */
        }

        /* 反射光アニメーション */
        .delayed-light-animation {
          opacity: 0;
          animation: lightPulse 10s ease-in-out infinite;
          animation-delay: 2.8s;
        }

        .delayed-light-animation2 {
          opacity: 0;
          animation: lightPulse 12s ease-in-out infinite;
          animation-delay: 3s;
        }
        
        /* 白い直線アニメーション - 文字と波の後に表示 */
        .delayed-line-animation {
          opacity: 0;
          animation-fill-mode: forwards;
          animation-duration: 1.5s;
          animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
          animation-delay: 3.5s; /* 波のアニメーション後に表示 */
        }
        
        /* 横線だけをさらに遅れて表示し、輝くアニメーションを追加 */
        .glow-line {
          animation: lineAppearHorizontal 1.5s cubic-bezier(0.23, 1, 0.32, 1) 4.5s forwards, 
                     glowPulse 3s ease-in-out 6s infinite;
          box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.7);
          animation-delay: 4.5s; /* さらに遅らせる */
        }
        
        /* 直線の方向別のアニメーション */
        .line-horizontal {
          transform: scaleX(0);
          animation-name: lineAppearHorizontal;
          transform-origin: left;
        }
        
        .line-vertical {
          transform: scaleY(0);
          animation-name: lineAppearVertical;
          transform-origin: top;
        }
        
        .line-diagonal {
          transform: scaleY(0);
          animation-name: lineAppearDiagonal;
          transform-origin: top;
        }
        
        /* 直線の表示タイミングをずらす - 数を減らしました */
        .line-opacity-1 { animation-delay: 4.5s; } /* 横線のタイミングを変更 */
        .line-opacity-2 { animation-delay: 3.7s; }
        .line-opacity-3 { animation-delay: 3.9s; }
        
        @keyframes gentleWave {
          0%, 100% { transform: scaleX(1.5) translateY(0); }
          50% { transform: scaleX(1.5) translateY(-15px); }
        }

        @keyframes lightPulse {
          0% { opacity: 0; transform: scale(0.8); }
          30% { opacity: 0.8; transform: scale(1.05); }
          70% { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.9); }
        }
        
        @keyframes lineAppearHorizontal {
          0% { 
            opacity: 0; 
            transform: scaleX(0); 
          }
          50% {
            opacity: 1;
          }
          100% { 
            opacity: 1; 
            transform: scaleX(1); 
          }
        }
        
        @keyframes lineAppearVertical {
          0% { 
            opacity: 0; 
            transform: scaleY(0); 
          }
          100% { 
            opacity: 1; 
            transform: scaleY(1); 
          }
        }
        
        @keyframes lineAppearDiagonal {
          0% { 
            opacity: 0; 
            transform: scaleY(0); 
          }
          100% { 
            opacity: 1; 
            transform: scaleY(1); 
          }
        }
        
        /* Single-stage dissolve text animations */
        .dissolve-text-simple {
          animation: dissolveInSimple 1.8s ease-out forwards;
          opacity: 0;
          text-shadow: 0 0 20px rgba(79, 209, 255, 0.3);
        }
        
        .dissolve-subtitle-simple {
          animation: dissolveInSimple 1.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        @keyframes dissolveInSimple {
          0% {
            opacity: 0;
            filter: blur(10px);
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: scale(1);
          }
        }

        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.7);
            opacity: 0.8;
          }
          50% {
            box-shadow: 0 0 20px 3px rgba(255, 255, 255, 0.9);
            opacity: 1;
          }
          100% {
            box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.7);
            opacity: 0.8;
          }
        }

        /* ロゴ用のアニメーション */
        .dissolve-logo {
          opacity: 0;
          animation: logoAppear 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }
        
        @keyframes logoAppear {
          0% {
            opacity: 0;
            transform: translateY(-10px);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        
        /* Lens Flare Animations for About and Message sections */
        .lens-flare-animation {
          opacity: 0;
          animation: lensFlare 8s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .lens-flare-animation-delay {
          opacity: 0;
          animation: lensFlare 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .lens-flare-animation-long {
          opacity: 0;
          animation: lensFlare 12s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .lens-flare-animation-slow {
          opacity: 0;
          animation: lensFlare 15s ease-in-out infinite;
          animation-delay: 0.2s;
        }
        
        .lens-flare-animation-delay-long {
          opacity: 0;
          animation: lensFlare 10s ease-in-out infinite;
          animation-delay: 3s;
        }
        
        @keyframes lensFlare {
          0% {
            opacity: 0;
            transform: scale(0.8) translate(10px, 10px);
          }
          20% {
            opacity: 0.6;
            transform: scale(1.05) translate(0px, 0px);
          }
          40% {
            opacity: 0.4;
            transform: scale(0.9) translate(-10px, 5px);
          }
          60% {
            opacity: 0.7;
            transform: scale(1.1) translate(5px, -5px);
          }
          80% {
            opacity: 0.5;
            transform: scale(0.95) translate(0px, 0px);
          }
          100% {
            opacity: 0;
            transform: scale(0.8) translate(10px, 10px);
          }
        }
        
        /* Fade-in Animations for About and Message sections */
        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 1.2s ease-out forwards;
        }
        
        .fade-in-up-delay {
          opacity: 0;
          animation: fadeInUp 1.2s ease-out 0.3s forwards;
        }
        
        .fade-in-up-delay-2 {
          opacity: 0;
          animation: fadeInUp 1.2s ease-out 0.6s forwards;
        }
        
        .fade-in {
          opacity: 0;
          animation: fadeIn 1.5s ease-out 0.3s forwards;
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* ホバーアニメーション */
        .hover-card-animation {
          transition: all 0.3s ease-in-out;
        }
        
        .hover-card-animation:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: rgba(59, 130, 246, 0.5);
        }
        
        /* スクロールアニメーション */
        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth;
          }
          
          #services, #about, #company, #message {
            opacity: 1; /* 0から1に変更 */
            transform: translateY(0); /* 初期表示時に既に正しい位置にする */
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
          
          #services.visible, #about.visible, #company.visible, #message.visible {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
