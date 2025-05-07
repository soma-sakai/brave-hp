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

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900">
      <Header />
      
      {/* Hero Section with Parallax */}
      <ParallaxHero 
        title="採用情報" 
        subtitle="ブレーブでは、以下の人材を募集しています。興味のある方は募集要項をお読みの上、エントリーしてください。"
      />

      {/* Job Categories Section with Parallax */}
      <ScrollFade className="py-20 relative">
        <ParallaxBackground />
        <div className="container mx-auto px-4">
          <ScrollFade delay={0.2} className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-20">
            <Link 
              href="#new-grad" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              正社員（未経験）
            </Link>
            <Link 
              href="#mid-career" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              正社員（中途）
            </Link>
            <Link 
              href="#contract" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              契約正社員
            </Link>
          </ScrollFade>

          {/* New Graduate Section */}
          <div className="max-w-4xl mx-auto space-y-20">
            <div id="new-grad">
              <ScrollFade delay={0.3} className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">正社員（未経験）</h2>
                <p className="text-lg text-blue-100 mb-10">
                  実務経験の無い方でもポテンシャルを重視し積極的に採用します。
                </p>

                <h3 className="text-xl font-bold mb-6 text-blue-200">募集要項</h3>
                <StaggerContainer staggerDelay={0.05} direction="left">
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">必須スキル</div>
                    <div className="text-white w-full md:w-3/4">Excel/Word</div>
                  </div>
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">こんな方を歓迎します</div>
                    <div className="text-white w-full md:w-3/4">
                      <ul className="list-disc ml-5 space-y-2">
                        <li>前向きに取り組む姿勢のある方</li>
                        <li>積極的にコミュニケーションをとる方</li>
                        <li>協調性をお持ちの方</li>
                        <li>独学で開発言語を学んだことのある方</li>
                      </ul>
                    </div>
                  </div>
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">勤務地</div>
                    <div className="text-white w-full md:w-3/4">本社（池袋）、首都圏(都内、神奈川、埼玉、千葉)</div>
                  </div>
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">勤務時間</div>
                    <div className="text-white w-full md:w-3/4">9：00～18：00(プロジェクトにより変動あり)</div>
                  </div>
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">給与</div>
                    <div className="text-white w-full md:w-3/4">月給18万円～21万5000円</div>
                  </div>
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">研修・試用期間</div>
                    <div className="text-white w-full md:w-3/4">試用期間3ヶ月（給与は本採用と同額）</div>
                  </div>
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">待遇</div>
                    <div className="text-white w-full md:w-3/4">交通費全支給・残業代別途支給・昇給年1回(4月)・賞与年2回(7月・12月)・各種社会保険完備・諸手当・退職金・保養所・社員旅行(海外・国内)</div>
                  </div>
                  <div className="py-4 px-6 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">休日・休暇</div>
                    <div className="text-white w-full md:w-3/4">週休2日制(土・日)、祝日、年末年始、夏季、GW、有給休暇(入社半年後に10日間)、慶弔、(プロジェクトにより変動あり)</div>
                  </div>
                </StaggerContainer>
              </ScrollFade>

              <ScrollFade delay={0.4} className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-6 text-blue-200">研修内容</h3>
                <div className="mb-10">
                  <h4 className="text-lg font-bold mb-4 text-blue-100">研修内容例</h4>
                  <StaggerContainer staggerDelay={0.05} direction="up" className="list-disc ml-5 space-y-2 text-white">
                    <li>オリエンテーション</li>
                    <li>ビジネスマナーの基本</li>
                    <li>コンピュータシステム入門</li>
                    <li>フローチャートの基礎知識</li>
                    <li>OSの基礎知識(UNIX)</li>
                    <li>C言語（入門～演習）</li>
                    <li>COBOL言語（入門～演習）</li>
                  </StaggerContainer>
                </div>
                
                <h4 className="text-lg font-bold mb-4 text-blue-100">参画プロジェクト例</h4>
                <StaggerContainer staggerDelay={0.05} direction="up" className="list-disc ml-5 space-y-2 text-white mb-8">
                  <li>銀行の統合に伴うシステム開発 Java / C(ProC) / Perl / DB2</li>
                  <li>クレジット会社のオーソリシステム開発 C / SQLServer</li>
                  <li>証券会社の次期システム開発 COBOL / SQLServer</li>
                  <li>保険会社の新個人保険システム開発 COBOL / DB2</li>
                  <li>旅行会社の予約サイトシステム開発 Java / Oracle</li>
                  <li>銀行システム開発 PL/I</li>
                  <li>携帯アプリケーション開発 Java / C / Oracle</li>
                </StaggerContainer>

                <ScrollFade delay={0.3} className="text-center">
                  <Link 
                    href="/contact?job=new-grad" 
                    className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    この職種にエントリーする
                  </Link>
                </ScrollFade>
              </ScrollFade>
            </div>

            {/* Mid-Career Section */}
            <div id="mid-career">
              <ScrollFade className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg mb-8">
                <div className="relative">
                  <ParallaxElement speed={0.1} className="absolute top-[-50px] left-[10%] w-[150px] h-[150px] rounded-full bg-indigo-500/10 blur-[60px]" />
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-6">正社員（中途）</h2>
                <p className="text-lg text-blue-100 mb-10">
                  汎用系からWEB系まで常時100以上のプロジェクトの中から個々のスキルや希望に合ったプロジェクトに参画していただきます。参画後は月1回の帰社日にて今後のキャリアアップを個々に話し合います。キャリアアップを希望する方大歓迎です。プロジェクトリーダー経験者は優遇いたします。
                </p>

                <h3 className="text-xl font-bold mb-6 text-blue-200">募集要項</h3>
                <StaggerContainer staggerDelay={0.05} direction="left">
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">必須スキル</div>
                    <div className="text-white w-full md:w-3/4">
                      <ul className="list-disc ml-5 space-y-2">
                        <li>実務経験のある方</li>
                        <li>SE：設計～開発の実務経験のある方</li>
                        <li>PG：PG開発の実務経験のある方</li>
                      </ul>
                    </div>
                  </div>
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">こんな方を歓迎します</div>
                    <div className="text-white w-full md:w-3/4">
                      <ul className="list-disc ml-5 space-y-2">
                        <li>金融、流通、製造、通信、WEB等の実務知識と実務経験のある方</li>
                        <li>プロジェクトマネージャー経験のある方優遇します</li>
                      </ul>
                    </div>
                  </div>
                  {/* More fields */}
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">勤務地</div>
                    <div className="text-white w-full md:w-3/4">本社（池袋）、首都圏(都内、神奈川、埼玉、千葉)</div>
                  </div>
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">勤務時間</div>
                    <div className="text-white w-full md:w-3/4">9：00～18：00(プロジェクトにより変動あり)</div>
                  </div>
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">給与</div>
                    <div className="text-white w-full md:w-3/4">月給23万円～55万円</div>
                  </div>
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">研修・試用期間</div>
                    <div className="text-white w-full md:w-3/4">試用期間3ヶ月（給与は本採用と同額）</div>
                  </div>
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">待遇</div>
                    <div className="text-white w-full md:w-3/4">交通費全支給・残業代別途支給・昇給年1回(4月)・賞与年2回(7月・12月)・各種社会保険完備・諸手当・退職金・保養所・社員旅行(海外・国内)</div>
                  </div>
                  <div className="py-4 px-6 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">休日・休暇</div>
                    <div className="text-white w-full md:w-3/4">週休2日制(土・日)、祝日、年末年始、夏季、GW、有給休暇(入社半年後に10日間)、慶弔、(プロジェクトにより変動あり)</div>
                  </div>
                </StaggerContainer>
              </ScrollFade>

              <ScrollFade className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-6 text-blue-200">給与例</h3>
                <StaggerContainer staggerDelay={0.05} direction="up" className="list-disc ml-5 space-y-2 text-white mb-8">
                  <li>正社員25歳(経験5年、残業月20時間)年収450万円～480万円</li>
                  <li>正社員30歳(経験10年、残業月20時間)年収530万円～600万円</li>
                </StaggerContainer>

                <ScrollFade delay={0.3} className="text-center">
                  <Link 
                    href="/contact?job=mid-career" 
                    className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    この職種にエントリーする
                  </Link>
                </ScrollFade>
              </ScrollFade>
            </div>

            {/* Contract Employee Section */}
            <div id="contract">
              <ScrollFade className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg mb-8">
                <div className="relative">
                  <ParallaxElement speed={-0.15} className="absolute bottom-[-50px] right-[10%] w-[180px] h-[180px] rounded-full bg-blue-400/15 blur-[70px]" />
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-6">契約正社員</h2>
                <p className="text-lg text-blue-100 mb-10">
                  プログラマーからシステムエンジニア、プロジェクトマネージャー等さまざまなポジションのプロジェクトを多数用意しております。通勤時間や給与等ご希望に合ったプロジェクトをご紹介いたします。また、個々のご事情により稼働分前払い制度やお支払日についてもご相談をお受けいたします。
                </p>

                <h3 className="text-xl font-bold mb-6 text-blue-200">募集要項</h3>
                <StaggerContainer staggerDelay={0.05} direction="left">
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">必須スキル</div>
                    <div className="text-white w-full md:w-3/4">
                      <ul className="list-disc ml-5 space-y-2">
                        <li>実務経験のある方</li>
                        <li>SE：設計～開発の実務経験のある方</li>
                        <li>PG：PG開発の実務経験のある方</li>
                      </ul>
                    </div>
                  </div>
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">こんな方を歓迎します</div>
                    <div className="text-white w-full md:w-3/4">
                      <ul className="list-disc ml-5 space-y-2">
                        <li>金融、流通、製造、通信、WEB等の実務知識と実務経験のある方</li>
                        <li>プロジェクトマネージャー経験のある方優遇します</li>
                      </ul>
                    </div>
                  </div>
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">勤務地</div>
                    <div className="text-white w-full md:w-3/4">本社（池袋）、首都圏(都内、神奈川、埼玉、千葉)</div>
                  </div>
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">勤務時間</div>
                    <div className="text-white w-full md:w-3/4">9：00～18：00(プロジェクトにより変動あり)</div>
                  </div>
                  <div className="py-4 px-6 border-b border-blue-700/50 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">給与</div>
                    <div className="text-white w-full md:w-3/4">月給50万円～100万円（交通費込み）</div>
                  </div>
                  <div className="py-4 px-6 flex flex-wrap md:flex-nowrap">
                    <div className="font-semibold w-full md:w-1/4 text-blue-100 mb-2 md:mb-0">休日・休暇</div>
                    <div className="text-white w-full md:w-3/4">週休2日制(土・日)、祝日、年末年始、(プロジェクトにより変動あり)</div>
                  </div>
                </StaggerContainer>
              </ScrollFade>

              <ScrollFade className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-6 text-blue-200">対応スキル</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <ScrollFade delay={0.2} direction="right">
                    <h4 className="font-bold mb-4 text-blue-100">オープン系</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-600/50 text-white px-3 py-1 rounded-md">C</span>
                      <span className="bg-blue-600/50 text-white px-3 py-1 rounded-md">C++</span>
                      <span className="bg-blue-600/50 text-white px-3 py-1 rounded-md">ProC</span>
                      <span className="bg-blue-600/50 text-white px-3 py-1 rounded-md">VB</span>
                      <span className="bg-blue-600/50 text-white px-3 py-1 rounded-md">ASP</span>
                      <span className="bg-blue-600/50 text-white px-3 py-1 rounded-md">.net</span>
                      <span className="bg-blue-600/50 text-white px-3 py-1 rounded-md">PHP</span>
                      <span className="bg-blue-600/50 text-white px-3 py-1 rounded-md">Java</span>
                      <span className="bg-blue-600/50 text-white px-3 py-1 rounded-md">等</span>
                    </div>
                  </ScrollFade>
                  
                  <ScrollFade delay={0.3} direction="left">
                    <h4 className="font-bold mb-4 text-blue-100">汎用系</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-800/50 text-white px-3 py-1 rounded-md">COBOL</span>
                      <span className="bg-blue-800/50 text-white px-3 py-1 rounded-md">PL/I</span>
                      <span className="bg-blue-800/50 text-white px-3 py-1 rounded-md">ASM</span>
                      <span className="bg-blue-800/50 text-white px-3 py-1 rounded-md">等</span>
                    </div>
                  </ScrollFade>
                </div>
                
                <h3 className="text-lg font-bold mb-4 text-blue-100">参画プロジェクト例</h3>
                <StaggerContainer staggerDelay={0.05} direction="up" className="list-disc ml-5 space-y-2 text-white mb-8">
                  <li>大手プロバイダーのWEBサイトの保守開発 PHP / Java / Oracle</li>
                  <li>携帯電話ワンセグブラウザ開発 C / BREW</li>
                  <li>証券管理システム開発 AccessVBA / SQL</li>
                  <li>鉄道ポイントカードシステム開発 COBOL / CICS / DB2</li>
                  <li>航空チェックインシステム開発 VC、等</li>
                </StaggerContainer>

                <ScrollFade delay={0.3} className="text-center">
                  <Link 
                    href="/contact?job=contract" 
                    className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    この職種にエントリーする
                  </Link>
                </ScrollFade>
              </ScrollFade>
            </div>
          </div>
        </div>
      </ScrollFade>

      <Footer />
    </main>
  );
} 