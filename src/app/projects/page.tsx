'use client';

import { useState } from 'react';
import Link from 'next/link';
import { translations, Language, Project } from '../../lib/translations';
import Navbar from '../../components/Navbar';

export default function ProjectsPage() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const t = translations[lang];
  const projectsT = t.projects;

  const filteredProjects = selectedCategory === 'all' 
    ? projectsT.projectsList 
    : projectsT.projectsList.filter((p: Project) => p.category === selectedCategory);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} translations={t} />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white pt-16">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          
          <div className="mb-12">
            <Link 
              href="/" 
              className="text-blue-400 hover:text-blue-300 transition-colors mb-4 inline-block"
            >
              {projectsT.backToHome}
            </Link>
            
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

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project: Project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group"
              >
                <div className="relative h-56 bg-slate-700 overflow-hidden">
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
                    <span className="text-6xl opacity-30">🎮</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                      {project.status}
                    </span>
                    <span className="text-slate-400 text-sm">{project.year}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm text-slate-400 mb-2">{projectsT.technologies}:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    
                     <a href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      {project.category === 'published' ? projectsT.viewOnStore : 
                       project.category === 'gamejam' ? projectsT.viewOnGGJ :
                       projectsT.downloadGame} →
                    </a>
                    
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      {projectsT.viewDetails}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-xl">No projects found in this category.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}