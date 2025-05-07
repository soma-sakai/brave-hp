"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navigation = [
  { name: 'SERVICE', href: '/services' },
  { name: 'ABOUT', href: '/about' },
  { name: 'COMPANY', href: '/company' },
  { name: 'MESSAGE', href: '/message' },
  { name: 'NEWS', href: '/news' },
  { name: '採用情報', href: '/careers' },
  { name: 'お問い合わせ', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-transparent z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/#hero" className="text-xl font-bold text-white flex items-center">
              <img 
                src="data:image/png;base64,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"
                alt="BRAVE"
                className="w-[120px] h-auto"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">メニューを開く</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-white hover:text-white/80 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
        
        {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 z-50 bg-blue-900/90 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-900/90 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/#hero" className="-m-1.5 p-1.5 text-white" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-bold">BRAVE</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">メニューを閉じる</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-blue-800/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 