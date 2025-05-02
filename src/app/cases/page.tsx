import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const cases = [
  {
    title: '契約管理システム',
    industry: '製造業',
    challenge: '紙ベースの契約書管理による非効率性と、セキュリティリスクの課題がありました。',
    solution: 'クラウドベースの契約管理システムを導入し、承認フローのデジタル化とセキュリティ強化を実現。',
    result: '契約書の検索時間を90%削減し、リモートワーク環境でも安全に契約書の管理・共有が可能になりました。',
  },
  {
    title: '保険請求自動化システム',
    industry: '保険業',
    challenge: '手作業による保険請求処理に多大な時間と人的リソースを要していました。',
    solution: 'RPAを活用した請求処理の自動化システムを構築。データ入力から承認までの一連の流れを自動化。',
    result: '処理時間を75%削減し、人的ミスも大幅に減少。社員はより付加価値の高い業務に注力できるようになりました。',
  },
  {
    title: '社内情報共有プラットフォーム',
    industry: 'サービス業',
    challenge: '部門間の情報共有が円滑でなく、ナレッジの蓄積・活用が不十分でした。',
    solution: 'Microsoft 365を活用した統合的な情報共有プラットフォームを構築。',
    result: '社内コミュニケーションが活性化し、プロジェクトの進行スピードが30%向上しました。',
  },
];

export default function CasesPage() {
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
            導入事例
          </motion.h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            お客様の課題解決に向けた取り組みをご紹介します。
          </p>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-16">
            {cases.map((case_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="md:col-span-1">
                    <div className="text-sm text-primary font-semibold mb-2">{case_.industry}</div>
                    <h2 className="text-2xl font-bold mb-4">{case_.title}</h2>
                  </div>
                  <div className="md:col-span-3 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">課題</h3>
                      <p className="text-gray-600">{case_.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">ソリューション</h3>
                      <p className="text-gray-600">{case_.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">導入効果</h3>
                      <p className="text-gray-600">{case_.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">お問い合わせ</h2>
          <p className="text-xl mb-8">
            貴社の課題解決に向けて、<br />
            私たちがお手伝いさせていただきます。
          </p>
          <a href="/contact" className="btn-accent inline-block">
            お問い合わせはこちら
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
} 