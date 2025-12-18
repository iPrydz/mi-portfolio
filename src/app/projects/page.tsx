'use client';

import { useState } from 'react';
import Link from 'next/link';
import { translations, Project } from '../../lib/translations';
import Navbar from '../../components/Navbar';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const t = translations;
  const projectsT = t.projects;

  const filteredProjects = selectedCategory === 'all'
    ? projectsT.projectsList
    : projectsT.projectsList.filter((p: Project) => p.category === selectedCategory);

  return (
    <>
      <Navbar translations={t} />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white pt-16">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {projectsT.title}
            </h1>
            <p className="text-xl text-slate-300">
              {projectsT.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {Object.entries(projectsT.categories).map(([key, label]) => (
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
                    <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full flex-shrink-0">
                      {project.status}
                    </span>
                    <span className="text-slate-400 text-sm flex-shrink-0">{project.year}</span>
                  </div>

                  <p className="text-slate-300 text-sm line-clamp-2 mb-2">
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-2">
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