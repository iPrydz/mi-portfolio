'use client';

import Navbar from '@/components/Navbar';

export default function Home() {
  const skills = [
    "PowerShell, C#, Python Development",
    "eQMS Administration (Qumas, Trackwise)",
    "SQL Server & Database Management",
    "Active Directory & VMWare",
    "Google Cloud Platform (GCP)",
    "Unity Game Development",
    "Quick learner and problem-solving"
  ];

  const languages = [
    "Spanish & Catalan (Native)",
    "English (Full Professional)",
    "French (A2)"
  ];

  return (
    <>
      <Navbar />

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
                    alt="Alejandro Moñiz Mesa"
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alejandro Moñiz Mesa
            </h1>
            <p className="text-2xl text-slate-300 mb-2">IT Technician - SysAdmin</p>
            <p className="text-slate-400">Barcelona, Spain</p>
            <div className="flex justify-center gap-4 mt-6">
            </div>
          </header>

          {/* About Me Section */}
          <section className="mb-12 bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center gap-2">
              <span>👤</span> About Me
            </h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              I began my career as a Level 1 to Level 3 IT support technician and computer configurator. I have now progressed to the position of applications and systems administrator, managing users, applications, and GxP systems.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I also develop low-code applications and scripts in PowerShell, C#, and Python. As a hobby, I am a video game programmer and owner of a video game company. I am passionate about computers and tend to learn new concepts quickly.
            </p>
          </section>

          {/* Experience Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center gap-2">
              <span>💼</span> Experience
            </h2>

            <div className="space-y-6">
              {/* Experience 1 */}
              <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-white mb-1">Laboratories Reig Jofré S.A.</h3>
                <p className="text-blue-400 font-semibold mb-1">IT Technician - SysAdmin</p>
                <p className="text-slate-400 text-sm mb-3">July 2023 - Present</p>
                <p className="text-slate-300">
                  eQMS application administration (Qumas and Trackwise), general SQL Server administration, GxP software administration, user and permission management in AD, virtual machine administration in VMWare, backup management in Commvault, PowerShell/C#/Python development.
                </p>
              </div>

              {/* Experience 2 */}
              <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-white mb-1">Galenicum Health S.L.U.</h3>
                <p className="text-purple-400 font-semibold mb-1">IT Technician - SysAdmin</p>
                <p className="text-slate-400 text-sm mb-3">June 2020 - July 2023</p>
                <p className="text-slate-300">
                  Windows Server administration, AD administration, Google Workspace expert, eQMS (Quality Forward) application administration, GxP software administration, low-code development, and scripting.
                </p>
              </div>

              {/* Experience 3 */}
              <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-white mb-1">TaleSoft Studio SCP</h3>
                <p className="text-green-400 font-semibold mb-1">Partner, Videogames Developer</p>
                <p className="text-slate-400 text-sm mb-3">June 2017 - Present</p>
                <p className="text-slate-300">
                  Administrator and budget management, level design, AI programming with C#, image and video editing, Community Manager.
                </p>
              </div>
            </div>
          </section>

          {/* Skills & Languages Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Skills */}
            <section className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                <span>🛠️</span> Skills
              </h2>
              <ul className="space-y-2">
                {skills.map((skill: string, index: number) => (
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
                <span>🌍</span> Languages
              </h2>
              <ul className="space-y-2">
                {languages.map((language: string, index: number) => (
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
