import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const companyInfo = {
  name: 'ブレーブ株式会社',
  established: '2010年4月',
  capital: '1,000万円',
  ceo: '佐藤太郎',
  employees: '50名',
  address: '〒150-0002 東京都渋谷区',
  business: [
    'SESサービス',
    'クラウドバックアップサービス',
    'SaaSソリューションサービス',
  ],
  vision: '三方よし、ブレーブに関わる皆が幸せに',
  mission: 'テクノロジーの力で、企業のDXを加速し、より良い社会の実現に貢献する。',
};

export default function AboutPage() {
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
            会社概要
          </motion.h1>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">企業理念</h2>
            <p className="text-2xl font-bold text-primary mb-8">{companyInfo.vision}</p>
            <p className="text-lg text-gray-600">{companyInfo.mission}</p>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">企業情報</h2>
          <div className="max-w-3xl mx-auto">
            <dl className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-gray-200">
                <dt className="font-semibold">会社名</dt>
                <dd className="md:col-span-2">{companyInfo.name}</dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-gray-200">
                <dt className="font-semibold">設立</dt>
                <dd className="md:col-span-2">{companyInfo.established}</dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-gray-200">
                <dt className="font-semibold">資本金</dt>
                <dd className="md:col-span-2">{companyInfo.capital}</dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-gray-200">
                <dt className="font-semibold">代表取締役</dt>
                <dd className="md:col-span-2">{companyInfo.ceo}</dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-gray-200">
                <dt className="font-semibold">従業員数</dt>
                <dd className="md:col-span-2">{companyInfo.employees}</dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-gray-200">
                <dt className="font-semibold">所在地</dt>
                <dd className="md:col-span-2">{companyInfo.address}</dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-gray-200">
                <dt className="font-semibold">事業内容</dt>
                <dd className="md:col-span-2">
                  <ul className="list-disc list-inside space-y-2">
                    {companyInfo.business.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">アクセス</h2>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.7016358!3d35.6585848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b57d1ff8cfb%3A0x91d5b0ed7e8e78f4!2z5riL6LC35Yy6!5e0!3m2!1sja!2sjp!4v1647834756812!5m2!1sja!2sjp"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-center">
              <p className="mb-4">
                〒150-0002<br />
                東京都渋谷区
              </p>
              <p className="text-gray-600">
                渋谷駅から徒歩5分
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 