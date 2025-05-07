"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function ServicesPage() {
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
    "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", // finance
    "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", // telecom
    "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", // opensource
    "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2", // legacy
    "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4", // database
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" // team
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-blue-950 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">サービス内容</h1>
          <p className="text-xl max-w-3xl mx-auto">
            クライアントのビジョンをしっかりと見据え、設計・開発から保守・運用まで、トータルソリューションをご提供します。
          </p>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              当社では現在、請負・派遣契約によるお客様先常駐でのシステム開発・保守をメインに事業を展開しています。特に注力している業種は、大きく分けて金融系（銀行・信託・保険・クレジット等）と通信系（キャリア様向けのシステム基盤系）です。金融系については汎用系・オープン系ともほとんどの技術者が複数の職種で豊富な知識と経験を持っており、各現場で活躍しています。
            </p>
            
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              通信系の技術者は通信キャリア様に特化した専門的な職務経験を持つ者が多く、クライアントニーズが非常に高いため、長期での参画が多数を占めています。当社の最大の特徴として、１つのプロジェクトでチーム編成を数くことが挙げられます。費用のグロス化など、クライアントにコストメリットを提供するとともに、社員（技術者）にとってはリーダーの育成や若手の教育・フォローができる現場が確保でき、ダブル、トリプルのメリットを実現しております。
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              今後は一括請負による受託案件の獲得強化を目指しております。これに取り組むことにより、社歴の長い技術者のさらなる活躍、および若手技術者の効果的な活用が期待でき、クライアントへのさらに高度な技術提供が可能となります。今後も、クライアントのビジョンをしっかりと見据え、設計・開発から保守・運用まで、トータルソリューションをご提供して参ります。
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-cyan-500 mb-4">
                  <div className="w-12 h-12 text-cyan-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[index]} />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={service.href} className="text-cyan-600 hover:text-cyan-800 font-medium">
                  詳細を見る →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 