"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxHero from '../../components/ParallaxHero';
import ParallaxBackground from '../../components/ParallaxBackground';
import ParallaxElement from '../../components/ParallaxElement';
import ScrollFade from '../../components/ScrollFade';
import StaggerContainer from '../../components/StaggerContainer';

export default function ServicesPage() {
  const [showMessage, setShowMessage] = useState(false);

  const newsItems = [
    {
      date: "2024.03.01",
      title: "新卒採用情報を更新しました",
      link: "/news/1"
    },
    {
      date: "2024.02.15",
      title: "新しいプロジェクトが始動しました",
      link: "/news/2"
    },
    {
      date: "2024.02.01",
      title: "会社説明会の日程が決定しました",
      link: "/news/3"
    }
  ];

  // Service cards data without icon paths
  const serviceCards = [
    {
      title: "金融系システム開発",
      description: "銀行・信託・保険・クレジット等の金融系システムの開発・保守を行っています。汎用系・オープン系ともに対応可能です。",
      href: "/services/finance"
    },
    {
      title: "通信系システム開発",
      description: "通信キャリア様向けのシステム基盤系の開発・保守を行っています。専門的な知識と経験を持つ技術者が対応します。",
      href: "/services/telecom"
    },
    {
      title: "オープン系開発",
      description: "Java、C/C++、.NET、PHPなど、様々な言語・フレームワークを用いたオープン系システムの開発を行っています。",
      href: "/services/opensource"
    },
    {
      title: "汎用系開発",
      description: "COBOL、PL/I、ASMなどを用いた汎用系システムの開発・保守を行っています。",
      href: "/services/legacy"
    },
    {
      title: "データベース構築",
      description: "Oracle、DB2、SQLServerなど、様々なデータベースの設計・構築・運用を行っています。",
      href: "/services/database"
    },
    {
      title: "チーム編成",
      description: "プロジェクトに最適なチーム編成で、効率的な開発を実現します。リーダーの育成や若手の教育・フォローも行っています。",
      href: "/services/team"
    }
  ];

  // SVG paths for each icon
  const iconPaths = [
    "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
    "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900">
      <Header />
      
      {/* Hero Section with Parallax */}
      <ParallaxHero title="サービス内容" />

      {/* Service Description Section with Parallax Elements */}
      <ScrollFade className="py-20 relative">
        <ParallaxBackground />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollFade delay={0.2} className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg">
              <div className="space-y-6 text-blue-100">
                <p className="text-lg leading-relaxed">
                  当社は主に請負・派遣契約によるお客様先常駐でのシステム開発・保守を手がけ、特に金融系（銀行・信託・保険・クレジット等）と通信系（キャリア向け基盤系）に強みを持っています。
                </p>
                <p className="text-lg leading-relaxed">
                  チーム編成によるプロジェクト運営で、クライアントにはコストメリットを、技術者にはリーダー育成や若手フォローの機会を同時に提供。
                </p>
                <p className="text-lg leading-relaxed">
                  今後は一括請負による受託案件を拡大し、ベテラン・若手技術者の活躍を促進しつつ、設計・開発から保守・運用までのトータルソリューションを一層強化してまいります。
                </p>
              </div>
            </ScrollFade>
          </div>
        </div>
      </ScrollFade>

      {/* Service Cards Section with Parallax Effects */}
      <ScrollFade direction="up" delay={0.3} className="py-20 relative bg-blue-900/90">
        <div className="relative">
          <ParallaxElement speed={0.1} className="absolute top-[-50px] left-[10%] w-[200px] h-[200px] rounded-full bg-indigo-500/10 blur-[70px]" />
          <ParallaxElement speed={-0.15} className="absolute bottom-[-80px] right-[5%] w-[300px] h-[300px] rounded-full bg-blue-400/15 blur-[90px]" />
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl">
          <StaggerContainer staggerDelay={0.08} direction="up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:translate-y-[-10px]">
                <div className="text-blue-200 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPaths[index]} />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-4 text-blue-100">{service.title}</h3>
                <p className="text-sm text-blue-200 mb-6 leading-relaxed">{service.description}</p>
                <Link 
                  href={service.href} 
                  className="inline-flex items-center text-sm text-blue-200 hover:text-blue-100 transition-colors duration-300"
                >
                  詳細を見る
                  <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </ScrollFade>

      <Footer />
    </main>
  );
} 