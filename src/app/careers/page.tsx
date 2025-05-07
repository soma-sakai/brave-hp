"use client";

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-blue-950 text-white">
      <Header />
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-blue-800 to-blue-900 overflow-hidden">
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
              <div className="absolute top-[70%] w-full h-[2px] bg-gradient-to-r from-white/10 via-white/80 to-white/10"></div>
              <div className="absolute left-[85%] top-0 h-full w-[1px] bg-white/25"></div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">採用情報</h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-3"></div>
          <div className="text-xs sm:text-sm max-w-3xl mx-auto text-blue-100 pb-8">
            <p className="mb-1">ブレーブでは、以下の人材を募集しています。興味のある方は募集要項をお読みの上、エントリーしてください。</p>
            <p>皆様のご応募をお待ちしております。</p>
          </div>
        </div>
      </section>

      {/* Job Categories Section */}
      <section className="py-12 bg-gradient-to-b from-blue-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-careers" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#4299e1" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-careers)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            <Link href="#new-grad" className="bg-blue-600 text-white py-3 px-8 rounded-full font-bold shadow-md hover:bg-blue-700 transition-colors">
              正社員（未経験）
            </Link>
            <Link href="#mid-career" className="bg-blue-600 text-white py-3 px-8 rounded-full font-bold shadow-md hover:bg-blue-700 transition-colors">
              正社員（中途）
            </Link>
            <Link href="#contract" className="bg-blue-600 text-white py-3 px-8 rounded-full font-bold shadow-md hover:bg-blue-700 transition-colors">
              契約正社員
            </Link>
          </div>
        </div>
      </section>

      {/* New Graduate Section */}
      <section id="new-grad" className="py-10 bg-blue-900/50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-5 px-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">正社員（未経験）</h2>
          </div>
          
          <div className="mt-6 mb-16">
            <p className="text-lg text-blue-100 mb-10">
              実務経験の無い方でもポテンシャルを重視し積極的に採用します。
            </p>

            <h3 className="text-xl font-bold mb-6 text-blue-200">募集要項</h3>
            
            <div className="bg-gradient-to-b from-blue-800/40 to-blue-900/60 backdrop-blur-sm p-8 rounded-xl border border-blue-700/40 shadow-lg">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 w-1/4 text-blue-100">必須スキル</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">Excel/Word</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">こんな方を歓迎します</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">
                      <ul className="list-disc ml-5 space-y-2">
                        <li>前向きに取り組む姿勢のある方</li>
                        <li>積極的にコミュニケーションをとる方</li>
                        <li>協調性をお持ちの方</li>
                        <li>独学で開発言語を学んだことのある方</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">勤務地</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">本社（池袋）、首都圏(都内、神奈川、埼玉、千葉)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">勤務時間</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">9：00～18：00(プロジェクトにより変動あり)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">給与</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">月給18万円～21万5000円</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">研修・試用期間</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">試用期間3ヶ月（給与は本採用と同額）</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">待遇</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">交通費全支給・残業代別途支給・昇給年1回(4月)・賞与年2回(7月・12月)・各種社会保険完備・諸手当・退職金・保養所・社員旅行(海外・国内)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-blue-100">休日・休暇</td>
                    <td className="py-4 px-6 text-white">週休2日制(土・日)、祝日、年末年始、夏季、GW、有給休暇(入社半年後に10日間)、慶弔、(プロジェクトにより変動あり)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-blue-200">研修内容</h3>
              
              <div className="bg-gradient-to-b from-blue-800/30 to-blue-900/50 p-6 rounded-xl border border-blue-700/30 shadow-md mb-8">
                <div className="flex justify-center mb-10">
                  <img src="/images/training-flow.svg" alt="研修フロー" className="h-20" />
                </div>
                
                <h4 className="text-lg font-bold mb-4 text-blue-100">研修内容例</h4>
                <ul className="list-disc ml-5 space-y-2 text-white mb-10">
                  <li>オリエンテーション</li>
                  <li>ビジネスマナーの基本</li>
                  <li>コンピュータシステム入門</li>
                  <li>フローチャートの基礎知識</li>
                  <li>OSの基礎知識(UNIX)</li>
                  <li>C言語（入門～演習）</li>
                  <li>COBOL言語（入門～演習）</li>
                </ul>
                
                <h4 className="text-lg font-bold mb-4 text-blue-100">参画プロジェクト例</h4>
                <ul className="list-disc ml-5 space-y-2 text-white mb-12">
                  <li>銀行の統合に伴うシステム開発 Java / C(ProC) / Perl / DB2</li>
                  <li>クレジット会社のオーソリシステム開発 C / SQLServer</li>
                  <li>証券会社の次期システム開発 COBOL / SQLServer</li>
                  <li>保険会社の新個人保険システム開発 COBOL / DB2</li>
                  <li>旅行会社の予約サイトシステム開発 Java / Oracle</li>
                  <li>銀行システム開発 PL/I</li>
                  <li>携帯アプリケーション開発 Java / C / Oracle</li>
                    </ul>
                  </div>
              
              <div className="text-center">
                <Link href="/contact?job=new-grad" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  この職種にエントリーする
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mid-Career Section */}
          <div id="mid-career" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-5 px-8 rounded-lg shadow-md mt-20">
            <h2 className="text-2xl font-bold">正社員（中途）</h2>
          </div>
          
          <div className="mt-6 mb-16">
            <p className="text-lg text-blue-100 mb-10">
              汎用系からWEB系まで常時100以上のプロジェクトの中から個々のスキルや希望に合ったプロジェクトに参画していただきます。参画後は月1回の帰社日にて今後のキャリアアップを個々に話し合います。キャリアアップを希望する方大歓迎です。プロジェクトリーダー経験者は優遇いたします。
            </p>

            <h3 className="text-xl font-bold mb-6 text-blue-200">募集要項</h3>
            
            <div className="bg-gradient-to-b from-blue-800/40 to-blue-900/60 backdrop-blur-sm p-8 rounded-xl border border-blue-700/40 shadow-lg">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 w-1/4 text-blue-100">必須スキル</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">
                      <ul className="list-disc ml-5 space-y-2">
                        <li>実務経験のある方</li>
                        <li>SE：設計～開発の実務経験のある方</li>
                        <li>PG：PG開発の実務経験のある方</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">こんな方を歓迎します</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">
                      <ul className="list-disc ml-5 space-y-2">
                        <li>金融、流通、製造、通信、WEB等の実務知識と実務経験のある方</li>
                        <li>プロジェクトマネージャー経験のある方優遇します</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">勤務地</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">本社（池袋）、首都圏(都内、神奈川、埼玉、千葉)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">勤務時間</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">9：00～18：00(プロジェクトにより変動あり)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">給与</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">月給23万円～55万円</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">研修・試用期間</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">試用期間3ヶ月（給与は本採用と同額）</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">待遇</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">交通費全支給・残業代別途支給・昇給年1回(4月)・賞与年2回(7月・12月)・各種社会保険完備・諸手当・退職金・保養所・社員旅行(海外・国内)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-blue-100">休日・休暇</td>
                    <td className="py-4 px-6 text-white">週休2日制(土・日)、祝日、年末年始、夏季、GW、有給休暇(入社半年後に10日間)、慶弔、(プロジェクトにより変動あり)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-blue-200">給与例</h3>
              <div className="bg-gradient-to-b from-blue-800/30 to-blue-900/50 p-6 rounded-xl border border-blue-700/30 shadow-md mb-8">
                <ul className="list-disc ml-5 space-y-2 text-white mb-10">
                  <li>正社員25歳(経験5年、残業月20時間)年収450万円～480万円</li>
                  <li>正社員30歳(経験10年、残業月20時間)年収530万円～600万円</li>
                    </ul>
                  </div>
              
              <div className="text-center">
                <Link href="/contact?job=mid-career" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  この職種にエントリーする
                </Link>
                </div>
                </div>
          </div>
          
          {/* Contract Employee Section */}
          <div id="contract" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-5 px-8 rounded-lg shadow-md mt-20">
            <h2 className="text-2xl font-bold">契約正社員</h2>
        </div>
          
          <div className="mt-6 mb-16">
            <p className="text-lg text-blue-100 mb-10">
              プログラマーからシステムエンジニア、プロジェクトマネージャー等さまざまなポジションのプロジェクトを多数用意しております。通勤時間や給与等ご希望に合ったプロジェクトをご紹介いたします。また、個々のご事情により稼働分前払い制度やお支払日についてもご相談をお受けいたします。
            </p>

            <h3 className="text-xl font-bold mb-6 text-blue-200">募集要項</h3>
            
            <div className="bg-gradient-to-b from-blue-800/40 to-blue-900/60 backdrop-blur-sm p-8 rounded-xl border border-blue-700/40 shadow-lg">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 w-1/4 text-blue-100">必須スキル</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">
                      <ul className="list-disc ml-5 space-y-2">
                        <li>実務経験のある方</li>
                        <li>SE：設計～開発の実務経験のある方</li>
                        <li>PG：PG開発の実務経験のある方</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">こんな方を歓迎します</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">
                      <ul className="list-disc ml-5 space-y-2">
                        <li>金融、流通、製造、通信、WEB等の実務知識と実務経験のある方</li>
                        <li>プロジェクトマネージャー経験のある方優遇します</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">勤務地</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">本社（池袋）、首都圏(都内、神奈川、埼玉、千葉)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">勤務時間</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">9：00～18：00(プロジェクトにより変動あり)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold border-b border-blue-700/50 text-blue-100">給与</td>
                    <td className="py-4 px-6 border-b border-blue-700/50 text-white">月給50万円～100万円（交通費込み）</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-blue-100">休日・休暇</td>
                    <td className="py-4 px-6 text-white">週休2日制(土・日)、祝日、年末年始、(プロジェクトにより変動あり)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-blue-200">対応スキル</h3>
              
              <div className="bg-gradient-to-b from-blue-800/30 to-blue-900/50 p-6 rounded-xl border border-blue-700/30 shadow-md mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
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
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-4 text-blue-100">汎用系</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-800/50 text-white px-3 py-1 rounded-md">COBOL</span>
                      <span className="bg-blue-800/50 text-white px-3 py-1 rounded-md">PL/I</span>
                      <span className="bg-blue-800/50 text-white px-3 py-1 rounded-md">ASM</span>
                      <span className="bg-blue-800/50 text-white px-3 py-1 rounded-md">等</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-4 text-blue-100">参画プロジェクト例</h3>
                <ul className="list-disc ml-5 space-y-2 text-white mb-12">
                  <li>大手プロバイダーのWEBサイトの保守開発 PHP / Java / Oracle</li>
                  <li>携帯電話ワンセグブラウザ開発 C / BREW</li>
                  <li>証券管理システム開発 AccessVBA / SQL</li>
                  <li>鉄道ポイントカードシステム開発 COBOL / CICS / DB2</li>
                  <li>航空チェックインシステム開発 VC、等</li>
                </ul>
              </div>
              
              <div className="text-center">
                <Link href="/contact?job=contract" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  この職種にエントリーする
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 