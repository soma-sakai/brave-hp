"use client";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ParallaxHero from '../../components/ParallaxHero';
import ParallaxBackground from '../../components/ParallaxBackground';
import ParallaxElement from '../../components/ParallaxElement';
import ScrollFade from '../../components/ScrollFade';
import StaggerContainer from '../../components/StaggerContainer';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <main className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900">
      <Header />
      
      {/* Hero Section with Parallax */}
      <ParallaxHero title="お問い合わせ" />

      {/* Contact Form Section with Parallax */}
      <ScrollFade className="py-20 relative">
        <ParallaxBackground />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <ScrollFade delay={0.2} className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg text-center">
                <h2 className="text-2xl font-bold text-white mb-4">送信完了</h2>
                <p className="text-blue-100 mb-4">お問い合わせありがとうございます。<br />内容を確認次第、担当者よりご連絡させていただきます。</p>
                <p className="text-blue-200">まもなくトップページに移動します...</p>
              </ScrollFade>
            ) : (
              <ScrollFade delay={0.2} className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg">
                <StaggerContainer staggerDelay={0.08} direction="up" className="space-y-6">
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-blue-100 mb-2">お問い合わせ種類</label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full bg-blue-900/50 border border-blue-700/50 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {contactTypes.map(type => (
                        <option key={type.id} value={type.id}>{type.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">お名前</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-blue-900/50 border border-blue-700/50 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="山田 太郎"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">メールアドレス</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-blue-900/50 border border-blue-700/50 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your-email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-2">電話番号（任意）</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-blue-900/50 border border-blue-700/50 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="03-XXXX-XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">お問い合わせ内容</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-blue-900/50 border border-blue-700/50 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="お問い合わせ内容をご記入ください"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
                    >
                      送信する
                    </motion.button>
                  </div>
                </StaggerContainer>
              </ScrollFade>
            )}
          </div>
        </div>
      </ScrollFade>

      {/* Company Info Section with Parallax */}
      <ScrollFade direction="up" delay={0.3} className="py-20 relative bg-gradient-to-b from-blue-900 to-blue-950">
        <div className="relative">
          <ParallaxElement speed={0.1} className="absolute top-[-50px] left-[10%] w-[200px] h-[200px] rounded-full bg-indigo-500/10 blur-[70px]" />
          <ParallaxElement speed={-0.15} className="absolute bottom-[-80px] right-[5%] w-[300px] h-[300px] rounded-full bg-blue-400/15 blur-[90px]" />
          <ParallaxElement speed={0.05} direction="x" className="absolute top-[40%] left-[80%] w-[2px] h-[100px] bg-blue-200/30 transform rotate-45" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollFade direction="right" delay={0.4} className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-blue-100">オフィス所在地</h3>
                <div className="space-y-4 text-blue-200">
                  <p>〒170-0013</p>
                  <p>東京都豊島区東池袋4-25-12 池袋今泉ビル7F</p>
                  <p>営業時間: 平日 9:00-18:00</p>
                  <p>最寄駅: 池袋駅東口から徒歩10分</p>
                </div>
              </ScrollFade>
              
              <ScrollFade direction="left" delay={0.5} className="bg-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-blue-100">直接のお問い合わせ</h3>
                <div className="space-y-4 text-blue-200">
                  <div>
                    <span className="block font-medium mb-2">電話番号:</span>
                    03-5979-5224
                  </div>
                  <div>
                    <span className="block font-medium mb-2">FAX:</span>
                    03-5391-7310
                  </div>
                </div>
              </ScrollFade>
            </div>
          </div>
        </div>
      </ScrollFade>

      <Footer />
    </main>
  );
} 