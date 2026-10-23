import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#06090f] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Summary */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-white text-base">
                Naveen S Gawadi
              </span>
              <span className="text-slate-500 font-mono text-[11px]">&bull; Portfolio</span>
            </div>
            <p className="text-slate-400 text-xs">
              Computer Science Engineering (AI &amp; ML) &bull; AJIET, VTU &bull; Bangalore, India
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:text-white hover:border-slate-700 transition-all hover:scale-105"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:text-sky-400 hover:border-slate-700 transition-all hover:scale-105"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Naveen"
              className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:text-sky-400 hover:border-slate-700 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:text-sky-400 hover:border-slate-700 transition-all hover:scale-105 ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Naveen S Gawadi. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-mono">
            Designed &amp; Built with React.js &bull; Tailwind CSS &bull; Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
