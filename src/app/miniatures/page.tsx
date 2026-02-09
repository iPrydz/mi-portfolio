'use client';

import { translations } from '@/lib/translations';
import Navbar from '@/components/Navbar';

export default function MiniaturesPage() {
  const t = translations.en;
  const minT = t.miniatures;

  return (
    <>
      <Navbar translations={t} />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white pt-16">
        <div className="container mx-auto px-4 py-12 max-w-5xl">

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {minT.title}
            </h1>
            <p className="text-xl text-slate-300 mb-2">
              {minT.subtitle}
            </p>
            <p className="text-slate-400 text-sm">
              {minT.location}
            </p>
          </div>

          {/* Design Your Own Miniature */}
          <section className="mb-12 bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-3 text-purple-400 flex items-center gap-2">
              <span>🎨</span> {minT.designOwnTitle}
            </h2>
            <p className="text-slate-300 mb-6">{minT.designOwnSubtitle}</p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-purple-500 rounded-full text-sm font-bold">1</span>
                  {minT.step1Title}
                </h3>
                <p className="text-slate-300 ml-10">{minT.step1Desc}</p>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full text-sm font-bold">2</span>
                  {minT.step2Title}
                </h3>
                <p className="text-slate-300 ml-10 mb-3">{minT.step2Desc}</p>

                {/* Notes */}
                <div className="ml-10 space-y-2">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                    <p className="text-slate-300 text-sm">
                      <span className="text-blue-400 font-semibold">ℹ️ Note:</span> {minT.step2Note}
                    </p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <p className="text-slate-300 text-sm">
                      <span className="text-green-400 font-semibold">💡 Tip:</span> {minT.step2Tip}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full text-sm font-bold">3</span>
                  {minT.step3Title}
                </h3>
                <p className="text-slate-300 ml-10">{minT.step3Desc}</p>
              </div>
            </div>

            {/* Hero Forge Button */}
            <div className="mt-8 flex justify-center">
              <a
                href="https://www.heroforge.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg font-bold text-lg transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
              >
                {minT.heroForgeButton}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </section>

          {/* Use Pre-Made Miniature */}
          <section className="mb-12 bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-3 text-green-400 flex items-center gap-2">
              <span>📦</span> {minT.preMadeTitle}
            </h2>
            <p className="text-slate-300 mb-4">{minT.preMadeDesc}</p>

            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
              <p className="text-slate-300 mb-3">{minT.preMadeRecommendation}</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://fleshofgods.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    <span className="text-blue-400">▹</span>
                    {minT.preMadeLinks.fleshOfGods}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.lootstudios.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    <span className="text-blue-400">▹</span>
                    {minT.preMadeLinks.lootStudios}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://bestiarumgames.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    <span className="text-blue-400">▹</span>
                    {minT.preMadeLinks.bestiarumGames}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-12 bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-3 text-amber-400 flex items-center gap-2">
              <span>💰</span> {minT.pricingTitle}
            </h2>
            <p className="text-slate-300 mb-6">{minT.pricingSubtitle}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Miniatures Pricing */}
              <div className="bg-slate-900/50 rounded-lg p-6 border border-amber-500/30">
                <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <span>🗿</span> {minT.miniaturesSizeTitle}
                </h3>
                <ul className="space-y-2">
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-amber-400">▹</span>
                    <span>{minT.price4_5cm}</span>
                  </li>
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-amber-400">▹</span>
                    <span>{minT.price5_5_5cm}</span>
                  </li>
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-amber-400">▹</span>
                    <span>{minT.priceLarger}</span>
                  </li>
                </ul>
              </div>

              {/* Bases Pricing */}
              <div className="bg-slate-900/50 rounded-lg p-6 border border-amber-500/30">
                <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <span>⬢</span> {minT.basesTitle}
                </h3>
                <ul className="space-y-2">
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-amber-400">▹</span>
                    <span>{minT.priceSimpleBase}</span>
                  </li>
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-amber-400">▹</span>
                    <span>{minT.priceDetailedBase}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What's included */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                <span>✓</span> {minT.includedTitle}
              </h3>
              <ul className="space-y-2 mb-4">
                <li className="text-slate-300 flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{minT.includedClean}</span>
                </li>
                <li className="text-slate-300 flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{minT.includedPrimer}</span>
                </li>
              </ul>
              <p className="text-slate-400 text-sm italic">{minT.noCommitment}</p>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="mb-12 bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-400 flex items-center gap-2">
              <span>📏</span> {minT.specsTitle}
            </h2>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="text-slate-300 mb-2 font-semibold">{minT.maxSize}:</p>
              <p className="text-lg text-white">{minT.maxSizeValue}</p>
            </div>
          </section>

          {/* Contact Button */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 backdrop-blur-sm border border-blue-500/30 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">{minT.readyToStart}</h3>
              <p className="text-slate-300 mb-6">{minT.readyToStartDesc}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@amoniz.dev"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all"
                >
                  <span>📧</span> hello@amoniz.dev
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-all"
                >
                  {minT.contactButton}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Gallery Placeholder - Ready for future implementation */}
          {/* Uncomment and implement when ready:
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center gap-2">
              <span>🖼️</span> Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Gallery items will go here
            </div>
          </section>
          */}

          {/* Footer */}
          <footer className="text-center text-slate-400 py-8 border-t border-slate-700">
            <p>© 2025 Alejandro Moñiz Mesa</p>
          </footer>
        </div>
      </main>
    </>
  );
}
