import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Radio, 
  Cpu, 
  Layers, 
  Flame, 
  Users, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(activeTab));

  return (
    <section id="projects" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/30 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Engineering Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl text-base mt-3">
            Production builds and hardware prototypes demonstrating full-stack engineering, real-time database architecture, and embedded systems programming.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'web'
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Full-Stack Web (1)
            </button>
            <button
              onClick={() => setActiveTab('embedded')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'embedded'
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Embedded &amp; IoT (1)
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => {
            const isWeb = project.category.includes('Web');

            return (
              <div
                key={project.id}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-slate-700/80 transition-all duration-300 overflow-hidden shadow-xl group"
              >
                <div className="p-7 sm:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Project Details & Technical Breakdown */}
                    <div className="lg:col-span-7 space-y-5">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center gap-1.5">
                          {isWeb ? <Layers className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
                          {project.category}
                        </span>

                        {project.featured && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-400" /> Featured Build
                          </span>
                        )}
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white group-hover:text-sky-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-400 mt-1">
                          {project.tagline}
                        </p>
                      </div>

                      {/* High-level summary */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Technical Highlights bullets */}
                      <div className="space-y-2 pt-1">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                          Key Technical Contributions:
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                          {project.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                              <span className="leading-snug">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Pill Container */}
                      <div className="pt-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-950/80 border border-slate-800 text-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs sm:text-sm shadow-md shadow-sky-500/20 active:scale-95 transition-all"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        ) : null}

                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs sm:text-sm border border-slate-700 hover:border-slate-600 active:scale-95 transition-all"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>

                        {project.id === 'sensored-handicapped-stick' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-400 bg-slate-950/50 border border-slate-800/80">
                            <Users className="w-3.5 h-3.5 text-indigo-400" />
                            6-Member Engineering Collaboration
                          </span>
                        )}
                      </div>

                    </div>

                    {/* Right: Technical Architecture Box / Metrics */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full bg-slate-950/70 border border-slate-800/90 rounded-2xl p-6">
                      
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                            <Radio className="w-3.5 h-3.5 text-sky-400" /> Architecture Highlights
                          </span>
                          <span className="text-[11px] font-mono text-slate-500">
                            #{project.id}
                          </span>
                        </div>

                        {/* Metric cards inside project */}
                        <div className="grid grid-cols-1 gap-3 my-5">
                          {project.metrics.map((metric, mIdx) => (
                            <div
                              key={mIdx}
                              className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between"
                            >
                              <span className="text-xs text-slate-400">{metric.label}</span>
                              <span className="text-xs font-semibold text-sky-300 font-mono">
                                {metric.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Engineering Note */}
                        <div className="p-3.5 rounded-xl bg-sky-500/5 border border-sky-500/20 text-xs text-slate-300 leading-relaxed">
                          {isWeb ? (
                            <p>
                              <strong className="text-sky-300 font-medium">Real-Time Synchronization:</strong> Utilizes Firebase Firestore <code className="text-sky-300 bg-slate-900 px-1 py-0.5 rounded">onSnapshot</code> event subscribers for multi-client state reflection without manual polling.
                            </p>
                          ) : (
                            <p>
                              <strong className="text-indigo-300 font-medium">Obstacle Detection Logic:</strong> Calibrated pulse-duration ultrasonic echo logic to classify danger thresholds and trigger immediate tactile vibration &amp; audible buzzer cues.
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Repo Status */}
                      <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                        <span>Repository Status:</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active on GitHub
                        </span>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Repositories Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Explore Additional Repositories</h4>
              <p className="text-xs text-slate-400">
                Check out coursework projects like CODSOFT and S4-AJIET_AIML_NAVEEN_076 on GitHub.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/naveensg-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all flex-shrink-0"
          >
            <span>Visit @naveensg-dev</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
