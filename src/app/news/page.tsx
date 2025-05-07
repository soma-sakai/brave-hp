"use client";

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
            NEWS
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto text-center text-blue-100">
            ブレーブからのお知らせ
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 bg-gradient-to-b from-blue-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-news" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#4299e1" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-news)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-blue-800/40 to-blue-900/60 backdrop-blur-sm p-8 rounded-xl border border-blue-700/40 shadow-lg">
              <ul className="divide-y divide-blue-700/30">
                {newsItems.map((newsItem) => (
                  <li key={newsItem.id} className="py-8 first:pt-0 last:pb-0">
                    <article>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <span className="text-cyan-300 font-semibold">{newsItem.date}</span>
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-2xl font-bold tracking-tight text-blue-100">
                            <Link href={newsItem.link} className="hover:text-cyan-300 transition-colors">
                              {newsItem.title}
                            </Link>
                          </h2>
                          <p className="text-blue-200 leading-relaxed">
                            {newsItem.content}
                          </p>
                        </div>
                        <div>
                          <Link 
                            href={newsItem.link}
                            className="text-cyan-300 hover:text-cyan-100 font-medium inline-flex items-center"
                          >
                            詳細を見る
                            <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 