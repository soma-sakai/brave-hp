import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#002742] text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-6 border-b border-gray-700/60">
          {/* サービス */}
          <div>
            <h3 className="text-white font-medium mb-4">サービス</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#intent" className="text-gray-300 hover:text-white">インテントセールス</Link></li>
              <li><Link href="/services#ses" className="text-gray-300 hover:text-white">SESサービス</Link></li>
              <li><Link href="/services#cloud" className="text-gray-300 hover:text-white">クラウドバックアップ</Link></li>
            </ul>
          </div>
          
          {/* 会社情報 */}
          <div>
            <h3 className="text-white font-medium mb-4">会社情報</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/company" className="text-gray-300 hover:text-white">会社概要</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-white">ニュース</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white">採用情報</Link></li>
            </ul>
          </div>
          
          {/* サポート */}
          <div>
            <h3 className="text-white font-medium mb-4">サポート</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="text-gray-300 hover:text-white">よくある質問</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">お問い合わせ</Link></li>
              <li><Link href="/support" className="text-gray-300 hover:text-white">サポートサイト</Link></li>
            </ul>
          </div>
          
          {/* 法的情報 */}
          <div>
            <h3 className="text-white font-medium mb-4">法的情報</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-gray-300 hover:text-white">プライバシーポリシー</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white">利用規約</Link></li>
              <li><Link href="/security" className="text-gray-300 hover:text-white">情報セキュリティ</Link></li>
            </ul>
          </div>
        </div>
        
        {/* ロゴ */}
        <div className="flex justify-center my-5">
          <Link href="/" className="text-white font-bold text-2xl">
            BRAVE
          </Link>
        </div>
        
        {/* コピーライト */}
        <div className="text-center text-sm text-gray-400 pt-2 border-t border-gray-700/50">
          <p>© 2025 ブレーブ株式会社 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
} 