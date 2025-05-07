"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/products', label: 'プロダクト' },
    { href: '/features', label: '特徴' },
    { href: '/news', label: 'ニュース' },
    { href: '/blog', label: 'ブログ' },
    { href: '/company', label: '会社情報' },
    { href: '/careers', label: '採用情報' },
    { href: '/contact', label: 'お問い合わせ' },
  ];

  return (
    <header className="fixed w-full bg-blue-950 z-50 border-b border-blue-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-white mr-2">
              <Image 
                src="/images/logo.svg"
                alt="Sales Marker"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/trial"
              className="ml-4 inline-flex items-center px-6 py-2 text-sm font-medium text-blue-950 bg-white hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              お試し申し込み
            </Link>
            <Link
              href="/login"
              className="ml-2 inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-white hover:bg-white/10 rounded-full transition-colors duration-200"
            >
              ログイン
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block w-full h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            className="md:hidden bg-blue-900"
        >
            <div className="py-2 space-y-1 border-t border-blue-800">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-800/50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
              <div className="px-4 py-3 flex flex-col space-y-2">
                <Link
                  href="/trial"
                  className="block w-full text-center px-4 py-2 text-sm font-medium text-blue-950 bg-white hover:bg-gray-100 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  お試し申し込み
                </Link>
              <Link
                  href="/login"
                  className="block w-full text-center px-4 py-2 text-sm font-medium text-white border border-white hover:bg-white/10 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                  ログイン
              </Link>
            </div>
          </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 