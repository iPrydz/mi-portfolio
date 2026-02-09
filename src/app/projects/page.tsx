'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  category: string;
  technologies: string[];
  status: string;
  year: string;
  link: string;
  image: string;
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: "tap-souls",
      title: "Tap Souls",
      shortDesc: "Idle clicker RPG combining Souls-like gameplay with incremental mechanics. Published by TaleSoft Studio.",
      longDesc: "An innovative idle clicker game that merges the challenging Dark Souls aesthetic with addictive incremental gameplay. Players progress through battles, upgrade equipment, and face challenging bosses in this mobile RPG experience.",
      category: "published",
      technologies: ["Unity", "C#", "iOS", "Android", "Incremental RPG"],
      status: "Published",
      year: "2017-Present",
      link: "https://play.google.com/store/apps/details?id=com.TaleSoftStudio.TapSouls",
      image: "/images/projects/tap_souls.png"
    },
    {
      id: "battle-souls",
      title: "Battle Souls",
      shortDesc: "Turn-based tactical RPG with stunning visuals and strategic combat. Published by TaleSoft Studio.",
      longDesc: "A strategic turn-based RPG featuring epic character designs, tactical positioning, and team-building mechanics. Players praised its impressive graphics and engaging combat system.",
      category: "published",
      technologies: ["Unity", "C#", "iOS", "Android", "Tactical RPG"],
      status: "Published",
      year: "2017-Present",
      link: "https://play.google.com/store/apps/details?id=com.TaleSoftStudio.BattleSouls",
      image: "/images/projects/battle_souls.png"
    },
    {
      id: "bubblelonia",
      title: "Bubblelonia",
      shortDesc: "Global Game Jam 2025 entry with the theme 'Bubble'. Latest game jam project showcasing creative game design under time constraints.",
      longDesc: "Developed during Global Game Jam 2025 with the theme 'Bubble'. Part of the world's largest game creation event where 35,371 participants across 97 countries created 12,098 games in 48 hours.",
      category: "gamejam",
      technologies: ["Game Jam", "Rapid Prototyping", "Unity", "GGJ"],
      status: "Game Jam Entry",
      year: "2025",
      link: "https://globalgamejam.org/games/2025/bubbelonia-3",
      image: "/images/projects/bubblelonia.jpg"
    },
    {
      id: "fearless",
      title: "Fearless",
      shortDesc: "Final course project developed at EMAID (Escola Municipal d'Art i Disseny). A complete game showcasing learned skills in game development.",
      longDesc: "Comprehensive game project developed as the culmination of video game development studies at EMAID. This project demonstrates proficiency in game design, programming, and production.",
      category: "student",
      technologies: ["Unity", "C#", "Level Design", "Game Production"],
      status: "Completed",
      year: "2014-2016",
      link: "https://mega.nz/file/XUQyzRyC#sr1CjrDASd-LYUv-ePxmZSKAimCztZu2Y1JVEJj_y3k",
      image: "/images/projects/fearless.png"
    },
    {
      id: "mirror-hotel",
      title: "Mirror Hotel",
      shortDesc: "Global Game Jam 2015 entry. Created in 48 hours during the world's largest game creation event.",
      longDesc: "Developed during Global Game Jam 2015 with the theme 'What do we do now?'. Part of an event where 28,837 participants in 78 countries created 5,438 games in one weekend.",
      category: "gamejam",
      technologies: ["Unity", "C#", "Level Design", "Game Production", "GGJ"],
      status: "Game Jam Entry",
      year: "2015",
      link: "https://globalgamejam.org/2015/games/mirror-hotel",
      image: "/images/projects/mirror_hotel.jpg"
    },
    {
      id: "hitodama",
      title: "Hitodama",
      shortDesc: "Global Game Jam 2016 entry with the theme 'Ritual'. Created collaboratively in 48 hours.",
      longDesc: "Game jam project developed for Global Game Jam 2016 under the theme 'Ritual'. Part of a worldwide event with over 36,164 participants across 93 countries creating nearly 6,800 games.",
      category: "gamejam",
      technologies: ["Unity", "C#", "Level Design", "Game Production", "GGJ"],
      status: "Game Jam Entry",
      year: "2016",
      link: "https://globalgamejam.org/2016/games/hitodama",
      image: "/images/projects/hitodama.jpg"
    }
  ];

  const categories = {
    all: "All",
    published: "Published Games",
    gamejam: "Game Jam",
    student: "Student Projects"
  };

  // Sort projects by year (descending - most recent first)
  const sortedProjects = [...projects].sort((a, b) =>
    parseInt(b.year) - parseInt(a.year)
  );

  const filteredProjects = selectedCategory === 'all'
    ? sortedProjects
    : sortedProjects.filter((p: Project) => p.category === selectedCategory);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white pt-16">
        <div className="container mx-auto px-4 py-12 max-w-6xl">

          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-slate-300">
              A collection of my game development projects
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === key
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredProjects.map((project: Project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="flex items-center gap-4 bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group p-4 cursor-pointer hover:bg-slate-800/70"
              >
                <div className="relative w-32 h-24 flex-shrink-0 bg-slate-700 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = parent.querySelector('.fallback-icon');
                        if (fallback) {
                          (fallback as HTMLElement).style.display = 'flex';
                        }
                      }
                    }}
                  />
                  <div className="fallback-icon absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <span className="text-3xl opacity-30">🎮</span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                      {project.title}
                    </h3>
                    {/* Desktop: Show status and year */}
                    <span className="hidden md:inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full flex-shrink-0">
                      {project.status}
                    </span>
                    <span className="hidden md:block text-slate-400 text-sm flex-shrink-0">{project.year}</span>
                  </div>

                  <p className="text-slate-300 text-sm line-clamp-2 mb-2">
                    {project.shortDesc}
                  </p>

                  {/* Desktop: Show technologies */}
                  <div className="hidden md:flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-slate-400 text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Mobile: Show status and year instead of technologies */}
                  <div className="flex md:hidden items-center gap-2">
                    <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                      {project.status}
                    </span>
                    <span className="text-slate-400 text-sm">{project.year}</span>
                  </div>
                </div>

                <div className="flex-shrink-0 text-blue-400 group-hover:translate-x-1 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-xl">No projects found in this category.</p>
            </div>
          )}

          {/* Footer */}
          <footer className="text-center text-slate-400 py-8 mt-12 border-t border-slate-700">
            <p>© 2025 Alejandro Moñiz Mesa</p>
          </footer>
        </div>
      </main>
    </>
  );
}
