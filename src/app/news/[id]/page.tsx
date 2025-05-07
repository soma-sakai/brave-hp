"use client";

import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useParams } from 'next/navigation';

// News items data - This should match the data in the news list page
const newsItems = [
  {
    id: "1",
    date: "2025.6",
    title: "HPリニューアルしました",
    content: `
      ブレーブのホームページをリニューアルしました。
      
      当社のビジョンや提供するサービス、採用情報などをより分かりやすくお伝えできるよう、
      デザインと機能性を重視したホームページに生まれ変わりました。
      
      今後もお客様により良いサービスを提供できるよう、
      コンテンツの充実を図ってまいります。
      
      引き続きブレーブをよろしくお願いいたします。
    `
  },
  // Add more news items here in the future
];

export default function NewsDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  // Find the news item that matches the ID in the URL
  const newsItem = newsItems.find(item => item.id === id);
  
  // If no matching news item is found, show an error message
  if (!newsItem) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900">
        <Header />
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            {/* Gradient wave background */}
            <div 
              className="absolute inset-0 opacity-100"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 70% 60%, rgba(37, 99, 235, 0.4) 0%, transparent 70%),
                  radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.4) 0%, transparent 60%)
                `
              }}
            />
            
            {/* Smooth waves */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-[45%]"
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
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">お知らせ</h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg text-center">
                <h2 className="text-2xl font-bold text-white mb-6">お探しのお知らせが見つかりませんでした</h2>
                <Link 
                  href="/news" 
                  className="inline-flex items-center text-cyan-300 hover:text-cyan-200 font-medium group"
                >
                  <svg 
                    className="mr-2 w-4 h-4 transform rotate-180" 
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
                  お知らせ一覧に戻る
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          {/* Gradient wave background */}
          <div 
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage: `
                radial-gradient(circle at 70% 60%, rgba(37, 99, 235, 0.4) 0%, transparent 70%),
                radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.4) 0%, transparent 60%)
              `
            }}
          />
          
          {/* Smooth waves */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-[45%]"
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
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">お知らせ</h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>
      </section>

      {/* News Detail Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link 
                href="/news" 
                className="inline-flex items-center text-cyan-300 hover:text-cyan-200 font-medium group"
              >
                <svg 
                  className="mr-2 w-4 h-4 transform rotate-180" 
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
                お知らせ一覧に戻る
              </Link>
            </div>
            
            <article className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg">
              <div className="mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200">
                  {newsItem.date}
                </span>
                <h2 className="text-3xl font-bold text-white mt-4">{newsItem.title}</h2>
              </div>
              
              <div className="prose prose-lg prose-invert max-w-none">
                {newsItem.content.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="text-blue-200 leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 