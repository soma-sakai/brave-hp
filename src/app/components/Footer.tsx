import Link from 'next/link';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ブレーブ株式会社</h3>
            <address className="not-italic">
              <p>〒150-0002</p>
              <p>東京都渋谷区</p>
              <p>TEL: 03-XXXX-XXXX</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-accent">サービス</Link></li>
              <li><Link href="/cases" className="hover:text-accent">事例</Link></li>
              <li><Link href="/about" className="hover:text-accent">会社概要</Link></li>
              <li><Link href="/news" className="hover:text-accent">お知らせ</Link></li>
              <li><Link href="/careers" className="hover:text-accent">採用情報</Link></li>
              <li><Link href="/contact" className="hover:text-accent">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">ソーシャルメディア</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/brave_inc" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/brave_inc" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/brave" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ブレーブ株式会社 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 