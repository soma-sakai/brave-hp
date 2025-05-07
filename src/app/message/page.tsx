"use client";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import ScrollFade from '../../components/ScrollFade';
import StaggerContainer from '../../components/StaggerContainer';
import ParallaxHero from '../../components/ParallaxHero';
import ParallaxBackground from '../../components/ParallaxBackground';
import ParallaxElement from '../../components/ParallaxElement';

export default function MessagePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900">
      <Header />
      
      {/* Hero Section with Parallax */}
      <ParallaxHero title="CEOメッセージ" />

      {/* Message Section with Parallax background */}
      <ScrollFade className="py-20 relative">
        <ParallaxBackground />
        
        {/* Additional decorative parallax elements */}
        <ParallaxElement 
          speed={0.1}
          className="absolute top-[5%] right-[15%] w-[2px] h-[150px] bg-blue-300/30 transform rotate-30"
        />
        
        <ParallaxElement 
          speed={-0.15}
          className="absolute bottom-[10%] left-[10%] w-[2px] h-[180px] bg-blue-200/20 transform rotate-[135deg]"
        />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollFade delay={0.2} className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg">
              <div className="prose prose-lg prose-invert max-w-none">
                <StaggerContainer staggerDelay={0.12} distance={50} direction="up">
                  <p className="mb-8 text-blue-100 leading-relaxed">
                    会社は社員とその家族を守り、社員一人一人が努力し、会社と共に成長する。<br />
                    これが私の根底にある基本的な考えです。
                  </p>

                  <p className="mb-8 text-blue-100 leading-relaxed">
                    会社と社員の心が一つになり、同じ方向に向かっている時、皆仲間であり家族です。<br />
                    その家族を守る為には資金も必要ですから蓄えます。しかし蓄えが多くなると経営者はそれを隠くそうとします。<br />
                    そうなると会社の風通しが悪くなり、会社と社員の心が一つになりません。<br />
                    会社と共に悩み、会社と共に苦しみ、会社と共に成長してくれる社員に、私は包み隠さず腹を割って話をします。
                  </p>

                  <p className="mb-8 text-blue-100 leading-relaxed">
                    技術者として一生懸命に仕事して、疲れたと言うなら、あなたの今後を考え話し合いましょう。<br />
                    営業に転身？　いやあなたの趣味を仕事にできないか？　他業種で面白い企画発想はないか？<br />
                    話をするだけで、疲れた技術者が元気になりそうです。<br />
                    その時の為にも、頑張ってお金も蓄え、いずれその時に運用しましょう。
                  </p>

                  <p className="mb-8 text-blue-100 leading-relaxed">
                    事業の繁栄と継続は、客先に信用される事でありますが、私は先ず社員に信用される事を大事にします。<br />
                    会社は当たり前の事を当たり前にやり続け、社員も当たり前の事を当たり前にやり続ける。<br />
                    会社も良くなり、社員も良くなり、世間も良くなり、「三方よし」。経営理念の原点です。
                  </p>

                  <p className="mb-8 text-blue-100 leading-relaxed">
                    社員が成長し、客先に信用され、社会貢献できる企業で有り続ける為に、苦しみながらも前を向いて乗り越えてまいります。
                  </p>
                </StaggerContainer>

                <ScrollFade delay={0.8} direction="left" className="text-right mt-12">
                  <ParallaxElement speed={0.06} direction="x">
                    <p className="text-blue-100">代表取締役社長</p>
                    <p className="text-blue-100 text-xl font-semibold">持永 眞一</p>
                  </ParallaxElement>
                </ScrollFade>
              </div>
            </ScrollFade>
          </div>
        </div>
      </ScrollFade>

      <Footer />
    </main>
  );
} 