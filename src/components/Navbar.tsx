'use client';

import Link from 'next/link';
import { Language, Translations } from '@/lib/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  translations: Translations;
}

export default function Navbar({ lang, setLang, translations }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
            AM
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">
              {translations.nav.home}
            </Link>
            <Link href="/projects" className="text-slate-300 hover:text-white transition-colors">
              {translations.nav.projects}
            </Link>
            <Link href="/miniatures" className="text-slate-300 hover:text-white transition-colors">
              {translations.nav.miniatures}
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
              {translations.nav.contact}
            </Link>
          </div>

          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors border border-slate-600"
          >
            {lang === 'en' ? '🇪🇸 ES' : '🇬🇧 EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}