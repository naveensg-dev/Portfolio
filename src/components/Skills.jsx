import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Layers, 
  Database, 
  Wrench, 
  FileSpreadsheet, 
  Sparkles, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [filter, setFilter] = useState('all'); // 'all', 'resume', 'project'

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <Terminal className="w-5 h-5 text-sky-400" />;
      case 'Frontend & Web Technologies':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Databases & Cloud Storage':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Developer & AI Tools':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Productivity & Documentation':
        return <FileSpreadsheet className="w-5 h-5 text-pink-400" />;
      default:
        return <Code className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 mb-3">
            <Code className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Skills &amp; Technology Stack
          </h2>
          <p className="text-slate-400 max-w-2xl text-base mt-3">
            Transparently organized by domain, highlighting both core curriculum proficiencies from my resume and technologies applied across hands-on projects.
          </p>

          {/* Filter Bar & Legend */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === 'all'
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              All Skills ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>
            <button
              onClick={() => setFilter('resume')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                filter === 'resume'
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Resume Core Skills
            </button>
            <button
              onClick={() => setFilter('project')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                filter === 'project'
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Project Stack &amp; Technologies
            </button>
          </div>

          {/* Note Banner */}
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 bg-slate-900/60 border border-slate-800/80 px-4 py-2 rounded-lg">
            <Info className="w-4 h-4 text-sky-400 flex-shrink-0" />
            <span>
              Explicit distinction: Green tags signify skills listed in my primary resume; amber/violet tags represent production frameworks applied in project builds.
            </span>
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            // Filter skills inside category
            const filteredSkills = cat.skills.filter((skill) => {
              if (filter === 'all') return true;
              if (filter === 'resume') return skill.type.includes('Resume');
              if (filter === 'project') return skill.type.includes('Project') || skill.type.includes('Web');
              return true;
            });

            if (filteredSkills.length === 0) return null;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 hover:border-slate-700/80 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                      {getCategoryIcon(cat.category)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-base">
                        {cat.category}
                      </h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="space-y-2.5 mt-5">
                    {filteredSkills.map((skill, sIdx) => {
                      const isResume = skill.type.includes('Resume');
                      return (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm text-slate-200">
                              {skill.name}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">
                              &bull; {skill.highlight}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            {isResume ? (
                              <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                                Resume
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                                Project Stack
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card footer summary count */}
                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Domain Category</span>
                  <span>{filteredSkills.length} competencies</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
