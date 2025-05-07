"use client";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import Link from 'next/link';

// お問い合わせ種類のオプション
const contactTypes = [
  { id: 'recruitment', label: '求人応募' },
  { id: 'partnership', label: '協業の問い合わせ' },
  { id: 'service', label: 'サービスの問い合わせ・申し込み' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'recruitment',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds and redirect to home
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  };

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
            お問い合わせ
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-blue-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-contact" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#4299e1" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-contact)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <div className="bg-gradient-to-b from-blue-800/40 to-blue-900/60 backdrop-blur-sm p-12 rounded-xl border border-blue-700/40 shadow-lg text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white">送信されました</h2>
                <p className="text-xl text-blue-100 mb-8">
                  お問い合わせありがとうございます。<br />
                  担当者より連絡させていただきます。
                </p>
                <p className="text-blue-300 mb-8">
                  3秒後にホームページに戻ります...
                </p>
              </div>
            ) : (
              <div className="bg-gradient-to-b from-blue-800/40 to-blue-900/60 backdrop-blur-sm p-8 rounded-xl border border-blue-700/40 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-200">お問い合わせフォーム</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-1">お名前 <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-blue-900/50 border border-blue-700 text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="山田 太郎"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">メールアドレス <span className="text-red-400">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-blue-900/50 border border-blue-700 text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="example@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-1">電話番号</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg bg-blue-900/50 border border-blue-700 text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="03-XXXX-XXXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-blue-100 mb-2">お問い合わせ種類 <span className="text-red-400">*</span></label>
                    <div className="space-y-2">
                      {contactTypes.map((type) => (
                        <div key={type.id} className="flex items-center">
                          <input
                            type="radio"
                            id={type.id}
                            name="type"
                            value={type.id}
                            checked={formData.type === type.id}
                            onChange={handleInputChange}
                            className="mr-2 accent-blue-500"
                          />
                          <label htmlFor={type.id} className="text-white">{type.label}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-1">お問い合わせ内容 <span className="text-red-400">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg bg-blue-900/50 border border-blue-700 text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="お問い合わせ内容を入力してください"
                    ></textarea>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg"
                    >
                      送信する
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-blue-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-blue-200">お問い合わせについて</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-b from-blue-800/30 to-blue-900/50 p-6 rounded-xl border border-blue-700/30 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-100">オフィス所在地</h3>
                <p className="text-blue-200 mb-2">〒150-0002</p>
                <p className="text-blue-200 mb-4">東京都渋谷区渋谷X-X-X XXビル 5F</p>
                <p className="text-blue-200 mb-2">営業時間: 平日 9:00-18:00</p>
                <p className="text-blue-200">最寄駅: 渋谷駅から徒歩5分</p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-800/30 to-blue-900/50 p-6 rounded-xl border border-blue-700/30 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-100">直接のお問い合わせ</h3>
                <p className="text-blue-200 mb-4">
                  <span className="block font-medium">電話番号:</span>
                  03-XXXX-XXXX
                </p>
                <p className="text-blue-200">
                  <span className="block font-medium">メールアドレス:</span>
                  info@brave-company.jp
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4 text-blue-100">よくあるご質問</h3>
              <Link href="#" className="text-blue-300 hover:text-blue-200 transition-colors underline">
                FAQページはこちら
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 