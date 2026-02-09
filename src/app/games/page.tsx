'use client';

import { translations } from '@/lib/translations';
import Navbar from '@/components/Navbar';

export default function GamesPage() {
  const t = translations.en;  // English by default

  const games = [
    {
      title: "Typing Defense",
      icon: "⌨️",
      description: "Roguelike typing game with Game & Watch aesthetic. Defend your tower by typing words that attack from all angles. Upgrade system and progression.",
      tech: ["Vanilla JS", "Canvas", "Roguelike"],
      url: "/games/typing",
      comingSoon: false
    },
    {
      title: "Coming Soon",
      icon: "🎯",
      description: "Next game in development. Stay tuned for more updates...",
      tech: ["TBA"],
      url: "#",
      comingSoon: true
    },
    {
      title: "Coming Soon",
      icon: "🎲",
      description: "More experimental games on the way. Exploring new mechanics and styles...",
      tech: ["TBA"],
      url: "#",
      comingSoon: true
    }
  ];

  return (
    <>
      <Navbar translations={t} />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white pt-16">
        <div className="container mx-auto px-4 py-12 max-w-4xl">

          {/* Profile Section */}
          <header className="text-center mb-12 py-12">
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Animated gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 animate-pulse"></div>

                {/* Icon container */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center border-4 border-slate-800 shadow-2xl">
                  <span className="text-7xl md:text-8xl grayscale">🎮</span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Games Collection
            </h1>
            <p className="text-2xl text-slate-300 mb-2">
              Retro & Experimental Mini-games
            </p>
            <p className="text-slate-400">
              Made with ❤️ in Barcelona
            </p>
          </header>

          {/* Games Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center gap-2">
              <span>🕹️</span> Available Games
            </h2>

            <div className="grid md:grid-cols-1 gap-6">
              {games.map((game, index) => (
                <a
                  key={index}
                  href={game.comingSoon ? undefined : game.url}
                  className={`bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm transition-all ${
                    game.comingSoon
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:transform hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer'
                  } border border-slate-700`}
                  onClick={(e) => game.comingSoon && e.preventDefault()}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-5xl grayscale">{game.icon}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{game.title}</h3>
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {game.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {game.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-md text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
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
