'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Translations } from '@/lib/translations';

interface NavbarProps {
  translations: Translations;
}

export default function Navbar({ translations }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}