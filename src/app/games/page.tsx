'use client';

import Navbar from '@/components/Navbar';

export default function GamesPage() {

  const games = [
    {
      title: "Typing Defense",
      icon: "⌨️",
      description: "Roguelike typing game with Game & Watch aesthetic. Defend your tower by typing words that attack from all angles. Upgrade system and progression.",
      tech: ["Vanilla JS", "Canvas", "Roguelike"],
      url: "/games/typing",
      comingSoon: false
    }
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white pt-16">
        <div className="container mx-auto px-4 py-12 max-w-6xl">

          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Games
            </h1>
            <p className="text-xl text-slate-300">
              A collection of my experimental mini-games
            </p>
          </div>

          {/* Games Section */}
          <section className="mb-12">
            <div className="space-y-4">

              {games.map((game, index) => (
                <a
                  key={index}
                  href={game.url}
                  className="flex items-center gap-4 bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group p-4 cursor-pointer hover:bg-slate-800/70"
                >
                  <div className="relative w-32 h-24 flex-shrink-0 bg-slate-700 rounded-lg overflow-hidden flex items-center justify-center">
                    <span className="text-5xl grayscale">{game.icon}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                        {game.title}
                      </h3>
                    </div>

                    <p className="text-slate-300 text-sm line-clamp-2 mb-2">
                      {game.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {game.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0 text-blue-400 group-hover:translate-x-1 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
