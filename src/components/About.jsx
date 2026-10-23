import React from 'react';
import { User, Brain, Code, Cpu, Globe, Award, Sparkles, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5 text-sky-400" />,
      title: "AI & Machine Learning Focus",
      desc: "Specializing in AI & ML engineering at AJIET (VTU). Certified across HP LIFE and Intel AI for All curricula, building analytical thinking with Python, Jupyter Notebooks, and Google Colab."
    },
    {
      icon: <Code className="w-5 h-5 text-indigo-400" />,
      title: "Full-Stack Web Engineering",
      desc: "Creating responsive, reactive interfaces with React.js. Experienced in designing Firestore NoSQL schemas, real-time onSnapshot listeners, and deploying modern applications via Vercel."
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: "Embedded Systems & IoT",
      desc: "Hands-on experience developing microcontroller-based assistive devices in C with the Arduino Uno, programming threshold range detection logic and integrating haptic/buzzer alerts."
    }
  ];

  return (
    <section id="about" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/30 mb-3">
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Engineering Mindset &bull; AI &amp; Software Focus
          </h2>
          <p className="text-slate-400 max-w-2xl text-base mt-3">
            A disciplined computer science undergraduate driven to engineer clean software solutions, from intelligent algorithms to intuitive user interfaces.
          </p>
        </div>

        {/* Narrative & Profile Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl" />
              <h3 className="text-xl font-heading font-bold text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" /> Professional Summary
              </h3>
              <p className="mb-4">
                I am <span className="text-white font-medium">Naveen S Gawadi</span>, a Computer Science Engineering student specializing in <strong className="text-sky-300 font-semibold">Artificial Intelligence and Machine Learning</strong> at AJ Institute of Engineering and Technology (VTU), based in Bangalore, Karnataka.
              </p>
              <p className="mb-4">
                My technical journey blends structured algorithmic principles with practical product development. In web engineering, I built and deployed <span className="text-white font-medium">Digital Mirror</span>, a full-stack habit tracking application powered by React.js and Firebase Firestore, integrating real-time snapshot synchronization and competitive leaderboards.
              </p>
              <p>
                In the embedded systems domain, I collaborated with a six-member team to create the <span className="text-white font-medium">Sensored Handicapped Stick</span>—an assistive IoT device utilizing ultrasonic sensors, Arduino Uno, and custom C threshold logic to protect visually impaired users from collisions.
              </p>
            </div>

            {/* Spoken Languages & Attributes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  <Globe className="w-4 h-4 text-sky-400" /> Spoken Languages
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-800/80 border border-slate-700/80 text-slate-200 font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  <Award className="w-4 h-4 text-indigo-400" /> Academic Standing
                </div>
                <p className="text-xs text-slate-300">
                  <span className="font-semibold text-white">VTU Undergraduate (2024–2028)</span>
                  <br />
                  Current CGPA: <span className="text-emerald-400 font-bold">7.3 / 10</span>
                </p>
              </div>
            </div>

          </div>

          {/* Three Core Pillars Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 px-1 font-semibold">
              Core Engineering Focus
            </h3>
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 group hover:bg-slate-900/90"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-heading font-semibold text-white group-hover:text-sky-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
