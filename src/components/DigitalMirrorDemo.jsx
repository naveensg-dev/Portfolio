import React, { useState } from 'react';
import { Flame, Trophy, RefreshCw, CheckCircle2, Sparkles, Activity } from 'lucide-react';

export default function DigitalMirrorDemo() {
  // 14-day interactive habit history
  const [days, setDays] = useState([
    { day: 'Day 1', completed: true },
    { day: 'Day 2', completed: true },
    { day: 'Day 3', completed: false },
    { day: 'Day 4', completed: true },
    { day: 'Day 5', completed: true },
    { day: 'Day 6', completed: true },
    { day: 'Day 7', completed: true },
    { day: 'Day 8', completed: true },
    { day: 'Day 9', completed: true },
    { day: 'Day 10', completed: false },
    { day: 'Day 11', completed: true },
    { day: 'Day 12', completed: true },
    { day: 'Day 13', completed: true },
    { day: 'Day 14', completed: true },
  ]);

  const toggleDay = (index) => {
    setDays((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], completed: !updated[index].completed };
      return updated;
    });
  };

  // Calculate current active streak ending at today (Day 14)
  const currentStreak = (() => {
    let count = 0;
    for (let i = days.length - 1; i >= 0; i--) {
      if (days[i].completed) {
        count++;
      } else {
        break;
      }
    }
    return count;
  })();

  const totalCompleted = days.filter((d) => d.completed).length;
  const completionRate = Math.round((totalCompleted / days.length) * 100);

  const resetAll = () => {
    setDays((prev) => prev.map((d) => ({ ...d, completed: false })));
  };

  const markAll = () => {
    setDays((prev) => prev.map((d) => ({ ...d, completed: true })));
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 md:p-6 backdrop-blur-sm shadow-xl relative overflow-hidden group">
      {/* Subtle top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                Digital Mirror — Live Streak Engine
              </h4>
              <span className="px-2 py-0.5 text-[10px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Interactive Simulator
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Interactive demo of the Firestore streak calculation logic. Tap any cell to test.
            </p>
          </div>
        </div>

        {/* Quick controls */}
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={resetAll}
            className="px-2.5 py-1 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
            title="Clear all days"
          >
            Clear
          </button>
          <button
            onClick={markAll}
            className="px-2.5 py-1 text-amber-300 hover:text-amber-200 rounded-md bg-amber-500/10 border border-amber-500/30 transition-colors"
            title="Mark all completed"
          >
            Mark All
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center">
          <span className="text-[11px] uppercase tracking-wider text-slate-400 flex items-center justify-center gap-1">
            <Flame className="w-3.5 h-3.5 text-amber-400" /> Active Streak
          </span>
          <p className="text-xl md:text-2xl font-bold text-amber-400 mt-0.5">
            {currentStreak} <span className="text-xs font-normal text-slate-400">days</span>
          </p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center">
          <span className="text-[11px] uppercase tracking-wider text-slate-400 flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Completed
          </span>
          <p className="text-xl md:text-2xl font-bold text-sky-400 mt-0.5">
            {totalCompleted} <span className="text-xs font-normal text-slate-400">/ 14</span>
          </p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center">
          <span className="text-[11px] uppercase tracking-wider text-slate-400 flex items-center justify-center gap-1">
            <Trophy className="w-3.5 h-3.5 text-indigo-400" /> Consistency
          </span>
          <p className="text-xl md:text-2xl font-bold text-indigo-400 mt-0.5">
            {completionRate}%
          </p>
        </div>
      </div>

      {/* 14 Day Grid */}
      <div>
        <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
          <span>Past 14 Days</span>
          <span className="text-slate-500">Today &rarr;</span>
        </div>
        <div className="grid grid-cols-7 sm:grid-cols-14 gap-2">
          {days.map((item, idx) => (
            <button
              key={idx}
              onClick={() => toggleDay(idx)}
              aria-label={`Toggle ${item.day}`}
              className={`group/btn relative aspect-square rounded-lg flex flex-col items-center justify-center border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                item.completed
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-sm shadow-amber-500/20 scale-[0.98]'
                  : 'bg-slate-950/60 border-slate-800 text-slate-500 hover:border-slate-700 hover:bg-slate-800/50'
              }`}
            >
              <span className="text-[10px] font-mono font-medium">
                D{idx + 1}
              </span>
              <span
                className={`w-1.5 h-1.5 rounded-full mt-0.5 transition-colors ${
                  item.completed ? 'bg-amber-400 ring-2 ring-amber-400/30' : 'bg-slate-700'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Footnote */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Gamified habits with real-time Firestore listeners
        </span>
        <span className="text-slate-500 font-mono text-[11px]">
          onSnapshot() &bull; Vercel CI/CD
        </span>
      </div>
    </div>
  );
}
