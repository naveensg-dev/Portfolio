import React from 'react';
import { ArrowDown, Mail, Github, Linkedin, MapPin, Sparkles, Code2, Cpu, Terminal } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';
import DigitalMirrorDemo from './DigitalMirrorDemo';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status & Location Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {personalInfo.status}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="font-mono text-xs sm:text-sm text-sky-400 tracking-wider uppercase font-semibold mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Hello, World &bull; I am
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-indigo-500 mt-2">
                {personalInfo.role}
              </h2>
            </div>

            {/* Bio summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Computer Science Engineering student specializing in <strong className="text-white font-medium">Artificial Intelligence &amp; Machine Learning</strong> at AJ Institute of Engineering and Technology, VTU. Passionate about engineering high-performance web applications, data-driven systems, and hardware-assisted assistive devices.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm shadow-lg shadow-sky-500/25 active:scale-95 transition-all duration-200"
              >
                <Code2 className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700/80 hover:border-slate-600 active:scale-95 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                  title="View GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-sky-400 border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                  title="View LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              {stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                  <div className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-sky-400 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Live Interactive Demo from Digital Mirror Project */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative card frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 blur-md opacity-75"></div>
              
              <div className="relative space-y-4">
                {/* Tech Highlights Badge */}
                <div className="flex items-center justify-between text-xs px-2 text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-sky-400">
                    <Sparkles className="w-3.5 h-3.5" /> Featured Build Preview
                  </span>
                  <span>React &bull; Firebase &bull; Vercel</span>
                </div>

                {/* Digital Mirror Demo Card */}
                <DigitalMirrorDemo />

                {/* Small hardware callout badge */}
                <div className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-sm flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Sensored Handicapped Stick</p>
                      <p className="text-[11px] text-slate-400">Arduino Uno &bull; Ultrasonic Proximity System</p>
                    </div>
                  </div>
                  <a
                    href="#projects"
                    className="text-xs text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1 hover:underline"
                  >
                    Details &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
