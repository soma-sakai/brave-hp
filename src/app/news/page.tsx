"use client";

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import ParallaxHero from '../../components/ParallaxHero';
import ParallaxBackground from '../../components/ParallaxBackground';
import ParallaxElement from '../../components/ParallaxElement';
import ScrollFade from '../../components/ScrollFade';
import StaggerContainer from '../../components/StaggerContainer';

export default function NewsPage() {
  // News items data
  const newsItems = [
    {
      id: 1,
      date: "2025.6",
      title: "HPリニューアルしました",
      content: "ブレーブのホームページをリニューアルしました。今後ともよろしくお願いいたします。",
      link: "/news/1"
    },
    // Add more news items here in the future
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900">
      <Header />
      
      {/* Hero Section with Parallax */}
      <ParallaxHero title="お知らせ" />

      {/* News List Section with Parallax Background */}
      <ScrollFade className="py-20 relative">
        <ParallaxBackground />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollFade delay={0.2} className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg">
              <StaggerContainer staggerDelay={0.15} direction="up" className="space-y-12">
                {newsItems.map((newsItem) => (
                  <article key={newsItem.id} className="relative">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200">
                          {newsItem.date}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-white hover:text-blue-200 transition-colors">
                        <Link href={newsItem.link}>
                          {newsItem.title}
                        </Link>
                      </h2>
                      <p className="text-blue-200 leading-relaxed">
                        {newsItem.content}
                      </p>
                      <div>
                        <Link 
                          href={newsItem.link}
                          className="inline-flex items-center text-cyan-300 hover:text-cyan-200 font-medium group"
                        >
                          詳細を見る
                          <svg 
                            className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    {/* Decorative line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                  </article>
                ))}
              </StaggerContainer>
            </ScrollFade>
          </div>
        </div>
      </ScrollFade>

      {/* Decorative Parallax Elements */}
      <div className="relative">
        <ParallaxElement speed={0.15} className="absolute top-[30%] right-[10%] w-[2px] h-[200px] bg-blue-300/20 transform rotate-[30deg]" />
        <ParallaxElement speed={-0.2} className="absolute bottom-[20%] left-[15%] w-[2px] h-[150px] bg-blue-200/20 transform rotate-[-15deg]" />
        <ParallaxElement speed={0.12} className="absolute top-[20%] left-[20%] w-[80px] h-[80px] rounded-full bg-blue-400/10 blur-[40px]" />
        <ParallaxElement speed={-0.18} className="absolute bottom-[30%] right-[15%] w-[150px] h-[150px] rounded-full bg-indigo-500/10 blur-[60px]" />
      </div>

      <Footer />
    </main>
  );
} 