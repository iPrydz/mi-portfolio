'use client';

import { useParams, useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';

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

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();

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

  const project = sortedProjects.find((p: Project) => p.id === params.id);

  // Find current project index and get previous/next projects
  const currentIndex = sortedProjects.findIndex((p: Project) => p.id === params.id);
  const previousProject = currentIndex > 0 ? sortedProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < sortedProjects.length - 1 ? sortedProjects[currentIndex + 1] : null;

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white pt-16">
          <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="text-center py-20">
              <h1 className="text-4xl font-bold mb-4">Project not found</h1>
              <button
                onClick={() => router.push('/projects')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                ← Back to Projects
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  const getLinkText = () => {
    if (project.link.includes('play.google.com')) return "View on Google Play";
    if (project.link.includes('globalgamejam.org')) return "View on Global Game Jam";
    return "Download Game";
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white pt-16">
        <div className="container mx-auto px-4 py-12 max-w-6xl">

          {/* Navigation header */}
          <div className="mb-8 flex items-center justify-between">
            {/* Back button */}
            <button
              onClick={() => router.push('/projects')}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ← Back to Projects
            </button>

            {/* Project navigation arrows */}
            <div className="flex items-center gap-4">
              {/* Previous project */}
              {previousProject ? (
                <button
                  onClick={() => router.push(`/projects/${previousProject.id}`)}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all group"
                  title={previousProject.title}
                >
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm text-slate-300 group-hover:text-white">Previous</span>
                </button>
              ) : (
                <div className="w-24"></div>
              )}

              {/* Next project */}
              {nextProject ? (
                <button
                  onClick={() => router.push(`/projects/${nextProject.id}`)}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all group"
                  title={nextProject.title}
                >
                  <span className="text-sm text-slate-300 group-hover:text-white">Next</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <div className="w-24"></div>
              )}
            </div>
          </div>

          {/* Hero Section */}
          <div className="relative mb-12 rounded-2xl overflow-hidden bg-slate-800 shadow-2xl">
            <div className="relative h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
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
              <div className="fallback-icon absolute inset-0 hidden items-center justify-center">
                <span className="text-9xl opacity-30">🎮</span>
              </div>
            </div>

            {/* Gradient overlay - stronger for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

            {/* Project title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-4 py-2 bg-green-500/40 backdrop-blur-md text-green-200 text-sm font-semibold rounded-full border border-green-400/60 shadow-lg">
                  {project.status}
                </span>
                <span className="text-white font-semibold text-lg bg-slate-800/60 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">{project.year}</span>
              </div>
              <h1 className="text-6xl font-bold text-white drop-shadow-2xl">
                {project.title}
              </h1>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">

            {/* Main Content - 2 columns */}
            <div className="md:col-span-2 space-y-8">

              {/* Description Card */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">About this project</h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {project.longDesc}
                </p>
              </div>

              {/* Technologies Section */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Technologies</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 font-medium rounded-lg hover:border-blue-400/50 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">

              {/* Info Card */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Project Info</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Category</p>
                    <p className="text-white font-medium capitalize">
                      {categories[project.category as keyof typeof categories] || project.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm mb-1">Status</p>
                    <p className="text-white font-medium">{project.status}</p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm mb-1">Year</p>
                    <p className="text-white font-medium">{project.year}</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 text-center"
              >
                {getLinkText()} →
              </a>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center text-slate-400 py-8 mt-12 border-t border-slate-700">
            <p>© 2025 Alejandro Moñiz Mesa</p>
          </footer>
        </div>
      </main>
    </>
  );
}
