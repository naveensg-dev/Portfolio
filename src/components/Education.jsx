import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Education Timeline
          </h2>
          <p className="text-slate-400 max-w-2xl text-base mt-3">
            Rigorous undergraduate studies in Computer Science &amp; Artificial Intelligence combined with strong foundational sciences.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Timeline Rule */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {education.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-emerald-500/50 items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/10 z-10">
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="p-6 sm:p-7 rounded-2xl border border-slate-800 bg-slate-900/80 hover:border-slate-700/80 transition-all duration-200 shadow-xl group">
                      
                      {/* Period & Status */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {item.status}
                        </span>
                      </div>

                      {/* Degree */}
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-sm font-medium text-slate-300 mt-1 flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-slate-400" />
                        {item.institution}
                      </p>

                      {/* Score Highlight Pill */}
                      <div className="mt-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                        <span className="text-xs text-slate-400 flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-amber-400" /> Academic Score
                        </span>
                        <span className="text-sm font-bold text-emerald-400 font-mono">
                          {item.score}
                        </span>
                      </div>

                      {/* Focus Description */}
                      <p className="text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed">
                        {item.focus}
                      </p>

                      {/* Location footnote */}
                      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.location}</span>
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer Column for alternating layout */}
                  <div className="hidden sm:block w-[calc(50%-2rem)]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
