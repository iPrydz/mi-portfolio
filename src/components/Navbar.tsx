'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Language } from '@/lib/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  translations: any;
}

export default function Navbar({ lang, setLang, translations }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const t = translations;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'es' : 'en';
    setLang(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Left side: Mobile hamburger + Logo + Desktop menu */}
          <div className="flex items-center gap-6">
            {/* Mobile Menu Button - LEFT */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-slate-300 hover:text-white transition-colors -ml-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // Close icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all"
              onClick={closeMenu}
            >
              AM
            </Link>

            {/* Desktop Menu - After Logo */}
            <div className="hidden md:flex items-center gap-6">
              <Link 
                href="/" 
                className="text-slate-300 hover:text-white transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link 
                href="/projects" 
                className="text-slate-300 hover:text-white transition-colors"
              >
                {t.nav.projects}
              </Link>
              <Link 
                href="/miniatures" 
                className="text-slate-300 hover:text-white transition-colors"
              >
                {t.nav.miniatures}
              </Link>
              <Link 
                href="/contact" 
                className="text-slate-300 hover:text-white transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>

          {/* Right side: Language Switcher - Desktop */}
          <div className="relative">
            <button
              onClick={toggleLangMenu}
              className={`p-2 transition-colors ${
                isLangMenuOpen ? 'text-blue-400' : 'text-slate-300 hover:text-white'
              }`}
              aria-label="Toggle language"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" 
                />
              </svg>
            </button>

            {/* Dropdown Menu - Desktop */}
            {isLangMenuOpen && (
              <div className="absolute right-0 top-full mt-2 bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-4 min-w-[220px] animate-fade-in">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-slate-300 text-sm">
                    {lang === 'en' ? 'Translate to Spanish' : 'Traducir al Español'}
                  </span>
                  
                  {/* Toggle Switch */}
                  <button
                    onClick={toggleLanguage}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      lang === 'es' ? 'bg-blue-600' : 'bg-slate-600'
                    }`}
                  >
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      lang === 'es' ? 'translate-x-7' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-800 animate-fade-in bg-slate-900/98">
            <div className="py-6 px-2">
              {/* Logo repetido en el menú móvil */}
              <Link 
                href="/" 
                className="block text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 text-center"
                onClick={closeMenu}
              >
                AM
              </Link>

              {/* Menu items */}
              <div className="flex flex-col gap-2">
                <Link 
                  href="/" 
                  className="text-slate-300 hover:text-white hover:bg-slate-800 transition-all py-3 px-4 rounded-lg text-center"
                  onClick={closeMenu}
                >
                  {t.nav.home}
                </Link>
                <Link 
                  href="/projects" 
                  className="text-slate-300 hover:text-white hover:bg-slate-800 transition-all py-3 px-4 rounded-lg text-center"
                  onClick={closeMenu}
                >
                  {t.nav.projects}
                </Link>
                <Link 
                  href="/miniatures" 
                  className="text-slate-300 hover:text-white hover:bg-slate-800 transition-all py-3 px-4 rounded-lg text-center"
                  onClick={closeMenu}
                >
                  {t.nav.miniatures}
                </Link>
                <Link 
                  href="/contact" 
                  className="text-slate-300 hover:text-white hover:bg-slate-800 transition-all py-3 px-4 rounded-lg text-center"
                  onClick={closeMenu}
                >
                  {t.nav.contact}
                </Link>

                {/* Language Toggle - Mobile */}
                <div className="mt-4 bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <svg 
                        className="w-5 h-5 text-slate-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" 
                        />
                      </svg>
                      <span className="text-slate-300 text-sm">
                        {lang === 'en' ? 'Translate to Spanish' : 'Traducir al Español'}
                      </span>
                    </div>
                    
                    {/* Toggle Switch */}
                    <button
                      onClick={toggleLanguage}
                      className={`relative w-12 h-6 rounded-full transition-colors flex-shrink-0 ${
                        lang === 'es' ? 'bg-blue-600' : 'bg-slate-600'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        lang === 'es' ? 'translate-x-7' : 'translate-x-1'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay para cerrar el menú de idioma al hacer click fuera - Desktop */}
      {isLangMenuOpen && (
        <div 
          className="hidden md:block fixed inset-0 z-[-1]" 
          onClick={() => setIsLangMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}