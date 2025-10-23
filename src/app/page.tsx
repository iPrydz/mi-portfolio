'use client';

import { useState } from 'react';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];
  const cv = t.cv;

  return (
    <>
      <Navbar lang={lang} setLang={setLang} translations={t} />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white pt-16">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Header/Hero Section */}
          <header className="text-center mb-12 py-12">
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Animated gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 animate-pulse"></div>
                
                {/* Image container */}
                <div className="relative">
                  <img
                    src="/images/profile.jpg"
                    alt={cv.name}
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {cv.name}
            </h1>
            <p className="text-2xl text-slate-300 mb-2">{cv.role}</p>
            <p className="text-slate-400">{cv.location}</p>
            <div className="flex justify-center gap-4 mt-6">
              <a href="mailto:alex.moniz@hotmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                📧 Email
              </a>
              <span className="text-slate-500">|</span>
              <a href="tel:+34664057637" className="text-blue-400 hover:text-blue-300 transition-colors">
                📱 +34 664 057 637
              </a>
            </div>
          </header>
          {/* About Me Section */}
          <section className="mb-12 bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center gap-2">
              <span>👤</span> {cv.aboutTitle}
            </h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              {cv.aboutText1}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {cv.aboutText2}
            </p>
          </section>

          {/* Experience Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center gap-2">
              <span>💼</span> {cv.experienceTitle}
            </h2>
            
            <div className="space-y-6">
              {/* Experience 1 */}
              <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-white mb-1">{cv.exp1Company}</h3>
                <p className="text-blue-400 font-semibold mb-1">{cv.exp1Role}</p>
                <p className="text-slate-400 text-sm mb-3">{cv.exp1Period}</p>
                <p className="text-slate-300">{cv.exp1Desc}</p>
              </div>

              {/* Experience 2 */}
              <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-white mb-1">{cv.exp2Company}</h3>
                <p className="text-purple-400 font-semibold mb-1">{cv.exp2Role}</p>
                <p className="text-slate-400 text-sm mb-3">{cv.exp2Period}</p>
                <p className="text-slate-300">{cv.exp2Desc}</p>
              </div>

              {/* Experience 3 */}
              <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-white mb-1">{cv.exp3Company}</h3>
                <p className="text-green-400 font-semibold mb-1">{cv.exp3Role}</p>
                <p className="text-slate-400 text-sm mb-3">{cv.exp3Period}</p>
                <p className="text-slate-300">{cv.exp3Desc}</p>
              </div>
            </div>
          </section>

          {/* Skills & Languages Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Skills */}
            <section className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                <span>🛠️</span> {cv.skillsTitle}
              </h2>
              <ul className="space-y-2">
                {cv.skills.map((skill: string, index: number) => (
                  <li key={index} className="text-slate-300 flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▹</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Languages */}
            <section className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                <span>🌍</span> {cv.languagesTitle}
              </h2>
              <ul className="space-y-2">
                {cv.languages.map((language: string, index: number) => (
                  <li key={index} className="text-slate-300 flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▹</span>
                    <span>{language}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Footer */}
          <footer className="text-center text-slate-400 py-8 border-t border-slate-700">
            <p>© 2025 Alejandro Moñiz Mesa</p>
          </footer>
        </div>
      </main>
    </>
  );
}