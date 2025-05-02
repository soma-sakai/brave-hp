import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const positions = [
  {
    title: 'システムエンジニア',
    type: '正社員',
    description: 'クライアント企業のシステム開発・運用保守をお任せします。',
    requirements: [
      '実務経験3年以上',
      'Java, Python, JavaScriptいずれかの開発経験',
      'チーム開発の経験',
    ],
    benefits: [
      '昇給年1回',
      '賞与年2回',
      '各種社会保険完備',
      '交通費支給',
      '時間外手当支給',
    ],
  },
  {
    title: 'プロジェクトマネージャー',
    type: '正社員',
    description: 'プロジェクトの企画・管理・推進をお任せします。',
    requirements: [
      'IT業界でのプロジェクトマネジメント経験5年以上',
      'PMP資格保持者歓迎',
      'コミュニケーション能力',
    ],
    benefits: [
      '昇給年1回',
      '賞与年2回',
      '各種社会保険完備',
      '交通費支給',
      'マネジメント手当',
    ],
  },
  {
    title: '営業',
    type: '正社員',
    description: '新規顧客開拓・既存顧客のアカウントマネジメントをお任せします。',
    requirements: [
      'IT業界での法人営業経験3年以上',
      '目標達成志向',
      'コミュニケーション能力',
    ],
    benefits: [
      '昇給年1回',
      '賞与年2回',
      '各種社会保険完備',
      '交通費支給',
      'インセンティブ制度',
    ],
  },
];

const recruitmentFlow = [
  {
    step: 1,
    title: '書類選考',
    description: '履歴書・職務経歴書をご提出いただきます。',
  },
  {
    step: 2,
    title: '一次面接（オンライン）',
    description: 'オンラインでの面接を実施します。',
  },
  {
    step: 3,
    title: '最終面接（対面）',
    description: '対面での最終面接を実施します。',
  },
  {
    step: 4,
    title: '内定',
    description: '合格の場合、内定通知をお送りします。',
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            採用情報
          </motion.h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            私たちと一緒に、テクノロジーの力で社会に貢献しませんか？
          </p>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">メッセージ</h2>
            <p className="text-lg text-gray-600 mb-8">
              ブレーブでは、技術力の向上はもちろん、人間性の成長も大切にしています。<br />
              社員一人一人が自己実現を果たし、お客様に価値を提供できる、そんな会社を目指しています。
            </p>
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">募集職種</h2>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="mb-6">
                  <span className="inline-block bg-primary text-white px-3 py-1 rounded text-sm mb-2">
                    {position.type}
                  </span>
                  <h3 className="text-2xl font-bold">{position.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">職務内容</h4>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <h4 className="text-lg font-semibold mb-4">応募要件</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {position.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">待遇・福利厚生</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {position.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="/contact" className="btn-primary inline-block">
                    応募する
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Flow Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">採用フロー</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {recruitmentFlow.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-center">
                      <div className="z-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">エントリー</h2>
          <p className="text-xl mb-8">
            私たちと一緒に働きませんか？<br />
            まずはエントリーフォームからご連絡ください。
          </p>
          <a href="/contact" className="btn-accent inline-block">
            エントリーする
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
} 