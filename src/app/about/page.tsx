"use client";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import ParallaxHero from '../../components/ParallaxHero';
import ParallaxBackground from '../../components/ParallaxBackground';
import ParallaxElement from '../../components/ParallaxElement';
import ScrollFade from '../../components/ScrollFade';
import StaggerContainer from '../../components/StaggerContainer';

const companyInfo = {
  name: '株式会社ブレーブ',
  established: '平成11年7月',
  capital: '2,000万円',
  ceo: '代表取締役社長 持永眞一',
  employees: '37名',
  address: '〒170-0013\n東京都豊島区東池袋4-25-12 池袋今泉ビル7F',
  tel: '03-5979-5224',
  fax: '03-5391-7310',
  business: ['各種システム開発・コンサルティング'],
  clients: '金融（銀行、証券会社、信販会社）、保険（生保・損保）、運輸、流通、通信、電機（大手メーカー）、公共機関、官庁、その他',
  vision: '三方よし、ブレーブに関わる皆が幸せに',
  mission: '人と企業の未来を創る',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900">
      <Header />
      
      {/* Hero Section with Parallax */}
      <ParallaxHero title="企業情報" />

      {/* Mission Section with Parallax Effect */}
      <ScrollFade className="py-20 relative">
        <ParallaxBackground />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollFade delay={0.2} className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg mb-12">
              <ParallaxElement speed={-0.05}>
                <p className="text-xl text-white leading-relaxed mb-8">
                  株式会社ブレーブは、「人と企業の未来を創る」をモットーに、多様な人材採用とSES事業を通じて社会と企業の発展に貢献するプロフェッショナル集団です。
                </p>
                <p className="text-xl text-white leading-relaxed">
                  私たちは「人こそが企業の最も大切な資産」と捉え、適材適所の人材配置を通じて企業の競争力向上に貢献。安心して働ける環境づくりと人材の可能性を最大限に引き出すことを目指しています。
                </p>
              </ParallaxElement>
            </ScrollFade>

            <ScrollFade delay={0.4} className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-8">会社概要</h2>
              <StaggerContainer staggerDelay={0.08} direction="left">
                <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                  <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">社名</div>
                  <div className="text-white w-full md:w-3/4">{companyInfo.name}</div>
                </div>
                <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                  <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">代表者</div>
                  <div className="text-white w-full md:w-3/4">{companyInfo.ceo}</div>
                </div>
                <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                  <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">設立</div>
                  <div className="text-white w-full md:w-3/4">{companyInfo.established}</div>
                </div>
                <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                  <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">資本金</div>
                  <div className="text-white w-full md:w-3/4">{companyInfo.capital}</div>
                </div>
                <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                  <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">従業員数</div>
                  <div className="text-white w-full md:w-3/4">{companyInfo.employees}</div>
                </div>
                <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                  <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">本社所在地</div>
                  <div className="text-white w-full md:w-3/4">
                    {companyInfo.address}
                    <div className="mt-2">
                      <div>TEL. {companyInfo.tel}</div>
                      <div>FAX. {companyInfo.fax}</div>
                    </div>
                  </div>
                </div>
                <div className="py-4 px-6 flex flex-wrap md:flex-nowrap">
                  <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">事業内容</div>
                  <div className="text-white w-full md:w-3/4">{companyInfo.business[0]}</div>
                </div>
              </StaggerContainer>
            </ScrollFade>
          </div>
        </div>
      </ScrollFade>

      {/* Access Section with Parallax Elements */}
      <ScrollFade direction="up" delay={0.3} className="py-16 relative bg-gradient-to-b from-blue-900/50 to-blue-950">
        <div className="relative">
          <ParallaxElement speed={0.1} className="absolute top-[-50px] left-[10%] w-[200px] h-[200px] rounded-full bg-indigo-500/10 blur-[70px]" />
          <ParallaxElement speed={-0.15} className="absolute bottom-[-80px] right-[5%] w-[300px] h-[300px] rounded-full bg-blue-400/15 blur-[90px]" />
        </div>
        
        <div className="container mx-auto px-4">
          <ScrollFade delay={0.2} className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-200">アクセス</h2>
            <div className="bg-gradient-to-b from-blue-800/30 to-blue-900/50 p-6 rounded-xl border border-blue-700/30 shadow-md mb-8">
              <ScrollFade delay={0.4} className="aspect-w-16 aspect-h-9 mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.822344915604!2d139.7171003!3d35.7308292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6b802aaa01%3A0x58a06abb68b0bd81!2z44CSMTcwLTAwMTMg5p2x5Lqs6YO95oqA5Zyw5Yy65p2x5rGg6KKL77yU5LiB55uu77yS77yV4oiS77yR77ySIOaxoOiioOS7iOazleODk-ODqw!5e0!3m2!1sja!2sjp!4v1716302401788!5m2!1sja!2sjp"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </ScrollFade>
              <ScrollFade delay={0.6} direction="up" className="text-center">
                <p className="mb-4 text-blue-100">
                  〒170-0013<br />
                  東京都豊島区東池袋4-25-12 池袋今泉ビル7F
                </p>
                <div className="text-blue-200">
                  <p>池袋駅東口から徒歩約10分</p>
                  <p>サンシャイン通り沿い</p>
                </div>
              </ScrollFade>
            </div>
          </ScrollFade>
        </div>
      </ScrollFade>

      <Footer />
    </main>
  );
} 