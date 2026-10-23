import React from 'react';
import { Award, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/30 mb-3">
            <Award className="w-3.5 h-3.5" />
            Verified Knowledge
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Industry Certifications
          </h2>
          <p className="text-slate-400 max-w-2xl text-base mt-3">
            Recognized certifications in Artificial Intelligence literacy, data science methodologies, and analytical problem-solving.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const isHP = cert.issuer.includes('HP');

            return (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-slate-700/90 transition-all duration-200 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Top Bar with Issuer Pill */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        isHP
                          ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                          : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {cert.issuer}
                    </span>

                    <span className="text-[11px] font-mono text-slate-400">
                      {cert.category}
                    </span>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-sky-300 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Tag Chips */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] bg-slate-950/70 border border-slate-800 text-slate-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Completed
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
