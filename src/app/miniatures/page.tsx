'use client';

import Navbar from '@/components/Navbar';

export default function MiniaturesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white pt-16">
        <div className="container mx-auto px-4 py-12 max-w-4xl">

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              3D Printing Miniatures
            </h1>
            <p className="text-xl text-slate-300 mb-2">
              Custom & Pre-Made Miniatures
            </p>
            <p className="text-slate-400 text-sm">
              Based in Barcelona, Spain 🇪🇸
            </p>
          </div>

          {/* Design Your Own Miniature */}
          <section className="mb-12 bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-3 text-purple-400 flex items-center gap-2">
              <span>🎨</span> Design Your Own Miniature
            </h2>
            <p className="text-slate-300 mb-6">Create a unique miniature using Hero Forge and I'll print it for you</p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-purple-500 rounded-full text-sm font-bold">1</span>
                  Design Your Character
                </h3>
                <p className="text-slate-300 ml-10">Use Hero Forge to create your custom miniature with thousands of customization options</p>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full text-sm font-bold">2</span>
                  Export & Send STL Files
                </h3>
                <p className="text-slate-300 ml-10 mb-3">Download your STL files and send them to me via email or contact form</p>

                {/* Notes */}
                <div className="ml-10 space-y-2">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                    <p className="text-slate-300 text-sm">
                      <span className="text-blue-400 font-semibold">ℹ️ Note:</span> Make sure to download the STL files (not screenshots or other formats)
                    </p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <p className="text-slate-300 text-sm">
                      <span className="text-green-400 font-semibold">💡 Tip:</span> Hero Forge provides both supported and unsupported STL versions - I recommend sending both
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full text-sm font-bold">3</span>
                  I'll Print & Ship It
                </h3>
                <p className="text-slate-300 ml-10">I'll print your miniature with high-quality resin, clean it, prime it, and ship it to you ready to paint</p>
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
                Design on Hero Forge
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </section>

          {/* Use Pre-Made Miniature */}
          <section className="mb-12 bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-3 text-green-400 flex items-center gap-2">
              <span>📦</span> Use Pre-Made Miniature
            </h2>
            <p className="text-slate-300 mb-4">Prefer a pre-designed miniature? Choose from thousands of ready-to-print models</p>

            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
              <p className="text-slate-300 mb-3">I recommend these creators for high-quality STL files:</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://fleshofgods.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    <span className="text-blue-400">▹</span>
                    Flesh of Gods - Epic fantasy characters
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
                    Loot Studios - Monthly miniature packs
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
                    Bestiarum Games - Creatures & monsters
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
              <span>💰</span> Pricing
            </h2>
            <p className="text-slate-300 mb-6">Transparent pricing based on size and complexity</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Miniatures Pricing */}
              <div className="bg-slate-900/50 rounded-lg p-6 border border-amber-500/30">
                <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <span>🗿</span> Miniatures (by size)
                </h3>
                <ul className="space-y-2">
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-amber-400">▹</span>
                    <span>4-5cm (Small) - €5</span>
                  </li>
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-amber-400">▹</span>
                    <span>5-5.5cm (Medium) - €6</span>
                  </li>
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-amber-400">▹</span>
                    <span>Larger sizes - Ask for quote</span>
                  </li>
                </ul>
              </div>

              {/* Bases Pricing */}
              <div className="bg-slate-900/50 rounded-lg p-6 border border-amber-500/30">
                <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <span>⬢</span> Bases
                </h3>
                <ul className="space-y-2">
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-amber-400">▹</span>
                    <span>Simple base (32mm) - Free</span>
                  </li>
                  <li className="text-slate-300 flex items-center gap-2">
                    <span className="text-amber-400">▹</span>
                    <span>Detailed/custom base - +€2</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What's included */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                <span>✓</span> What's included
              </h3>
              <ul className="space-y-2 mb-4">
                <li className="text-slate-300 flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Cleaned and cured resin print</span>
                </li>
                <li className="text-slate-300 flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Primed with gray primer (ready to paint)</span>
                </li>
              </ul>
              <p className="text-slate-400 text-sm italic">Prices are estimates - no commitment required until we discuss your specific miniature</p>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="mb-12 bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-400 flex items-center gap-2">
              <span>📏</span> Technical Specifications
            </h2>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="text-slate-300 mb-2 font-semibold">Max build volume:</p>
              <p className="text-lg text-white">16.5cm (H) x 8cm (W) x 8cm (D)</p>
            </div>
          </section>

          {/* Contact Button */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 backdrop-blur-sm border border-blue-500/30 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to get started?</h3>
              <p className="text-slate-300 mb-6">Send me your STL files and let's bring your miniature to life!</p>
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
                  Contact Form
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-slate-400 py-8 border-t border-slate-700">
            <p>© 2025 Alejandro Moñiz Mesa</p>
          </footer>
        </div>
      </main>
    </>
  );
}
