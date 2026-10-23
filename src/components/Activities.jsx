import React from 'react';
import { Users, Sparkles, MapPin, MessageSquare, Terminal, CheckCircle2 } from 'lucide-react';
import { extracurriculars } from '../data/portfolioData';

export default function Activities() {
  return (
    <section id="activities" className="py-24 border-t border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
            <Users className="w-3.5 h-3.5" />
            Community &amp; Growth
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Technical Community Participation
          </h2>
          <p className="text-slate-400 max-w-2xl text-base mt-3">
            Active engagement with developers, researchers, and open-source practitioners in technical workshops and discussions.
          </p>
        </div>

        {/* Activity Card */}
        <div className="max-w-4xl mx-auto">
          {extracurriculars.map((activity, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-9 rounded-3xl border border-slate-800 bg-slate-900/70 hover:border-slate-700/80 transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      {activity.type}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      DevDays Mangaluru
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    {activity.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-950/60 px-3 py-1.5 rounded-xl border border-slate-800/80 self-start sm:self-center">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Hackerspace Mangaluru</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 mt-6 leading-relaxed">
                {activity.description}
              </p>

              {/* Takeaways */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-amber-400" /> Key Insights &amp; Engagement:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activity.takeaways.map((item, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-300 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
