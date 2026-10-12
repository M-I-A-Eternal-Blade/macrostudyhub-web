import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Activity } from 'lucide-react';

export const GradeTrajectory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeWeek, setActiveWeek] = useState<number>(12);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const pathProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const grayProgress = useTransform(scrollYProgress, [0.08, 0.75], [0, 1]);
  const grayOpacity = useTransform(scrollYProgress, [0.2, 0.9], [0.85, 0.35]);

  const milestones = [
    {
      week: 0,
      label: 'Week 0',
      title: 'Diagnostic Baseline',
      macroRetention: 52,
      standardRetention: 52,
      macroDesc: 'Surgical diagnostic identifies knowledge gaps and misconceptions in pure mechanics and calculus.',
      standardDesc: 'Initial tutor assigns generic past paper without conceptual error diagnosis.',
    },
    {
      week: 3,
      label: 'Week 3',
      title: 'First-Principles Consolidation',
      macroRetention: 76,
      standardRetention: 48,
      macroDesc: 'AS foundations derived from first principles. Active recall deck reinforcement prevents early decay.',
      standardDesc: 'Initial tutor session remembered briefly, but decays to <50% within 5 days.',
    },
    {
      week: 6,
      label: 'Week 6',
      title: 'Mid-Term Spaced Review',
      macroRetention: 86,
      standardRetention: 42,
      macroDesc: 'Third spaced review interval. Synoptic links established between thermodynamics, fields, and calculus.',
      standardDesc: 'Passive re-reading of school notes. Student struggles on unfamiliar synoptic questions.',
    },
    {
      week: 9,
      label: 'Week 9',
      title: 'Surgical Mark-Scheme Drill',
      macroRetention: 91,
      standardRetention: 38,
      macroDesc: 'Direct mark-scheme keyword drilling. Elimination of examiner trap penalties.',
      standardDesc: 'Student memorizes mark schemes without understanding axiomatic roots.',
    },
    {
      week: 12,
      label: 'Week 12',
      title: 'A* Examination Execution',
      macroRetention: 94,
      standardRetention: 34,
      macroDesc: '94% retention locked into long-term memory. A* grade secured under timed exam pressure.',
      standardDesc: 'Severe retention decay. Student repeats rote errors and settles for Grade C/B.',
    },
  ];

  const currentMilestone = milestones.find(m => m.week === activeWeek) || milestones[4];

  return (
    <section 
      id="retention" 
      ref={containerRef} 
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/60 relative overflow-hidden"
    >
      
      {/* BACKGROUND ACCENT GLOW */}
      <div 
        className="radial-glow-light w-[600px] h-[600px] bg-blue-50/70 top-20 right-[-150px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-semibold uppercase tracking-wider">
            [04 // THE ZERO-DECAY TRAJECTORY]
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0f172a]">
            Empirical Retention Engine
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Compare MacroStudyHub's active-recall spaced repetition against the rapid forgetting curve of standard reactive tutoring.
          </p>
        </div>

        {/* MAIN INTERACTIVE VISUALIZATION CARD */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* CHART CONTROLS & LEGEND */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-1 rounded-full bg-blue-600" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  MacroStudyHub (Zero-Decay Recall)
                </span>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                  A* Trajectory
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-0.5 bg-slate-400 border-b border-dashed border-slate-400" />
                <span className="text-xs sm:text-sm text-slate-500 font-medium">
                  Standard Reactive Tutoring (Forgetting Curve)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
              <Activity className="w-3.5 h-3.5 text-blue-600" />
              <span>CLICK MILESTONES TO INSPECT</span>
            </div>
          </div>

          {/* ACCESSIBLE MILESTONE SWITCHER PILLS */}
          <div className="flex flex-wrap items-center gap-2">
            {milestones.map((m) => (
              <button
                key={m.week}
                onClick={() => setActiveWeek(m.week)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeWeek === m.week
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {m.label}: {m.macroRetention}%
              </button>
            ))}
          </div>

          {/* SVG DATA VISUALIZATION */}
          <div className="relative w-full aspect-[16/8] sm:aspect-[16/7] max-h-[380px] bg-slate-50/40 rounded-2xl p-4 sm:p-6 border border-slate-200/60 overflow-visible">
            
            <svg className="w-full h-full overflow-visible" viewBox="0 0 800 300">
              <defs>
                {/* SAPPHIRE / CYAN LINEAR GRADIENT */}
                <linearGradient id="sapphireCyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1d4ed8" />
                  <stop offset="60%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>

                {/* SOFT AREA FILL GRADIENT */}
                <linearGradient id="areaGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* HORIZONTAL GRID LINES & Y-AXIS LABELS */}
              {[
                { val: '100%', y: 25 },
                { val: '80%', y: 80 },
                { val: '60%', y: 135 },
                { val: '40%', y: 190 },
                { val: '20%', y: 245 },
              ].map((grid, i) => (
                <g key={i}>
                  <line x1="60" y1={grid.y} x2="760" y2={grid.y} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y={grid.y + 4} fill="#94a3b8" fontSize="11" fontFamily="monospace">{grid.val}</text>
                </g>
              ))}

              {/* VERTICAL GRID LINES FOR WEEKS (CLICKABLE MILESTONES) */}
              {[
                { week: 'W0', x: 80, num: 0 },
                { week: 'W3', x: 240, num: 3 },
                { week: 'W6', x: 400, num: 6 },
                { week: 'W9', x: 560, num: 9 },
                { week: 'W12', x: 720, num: 12 },
              ].map((w) => (
                <g 
                  key={w.week} 
                  className="cursor-pointer"
                  onClick={() => setActiveWeek(w.num)}
                >
                  <line x1={w.x} y1="20" x2={w.x} y2="260" stroke={activeWeek === w.num ? "#93c5fd" : "#f1f5f9"} strokeWidth={activeWeek === w.num ? 1.5 : 1} />
                  <text 
                    x={w.x - 10} 
                    y="280" 
                    fill={activeWeek === w.num ? "#1d4ed8" : "#64748b"} 
                    fontSize="12" 
                    fontFamily="monospace" 
                    fontWeight={activeWeek === w.num ? "bold" : "600"}
                  >
                    {w.week}
                  </text>
                </g>
              ))}

              {/* STANDARD REACTIVE TUTORING LINE (FLAT, FADING GRAY LINE) */}
              <motion.path
                d="M 80 155 Q 160 140, 240 165 T 400 185 T 560 195 T 720 205"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeDasharray="6 6"
                style={{ pathLength: grayProgress, opacity: grayOpacity }}
              />

              {/* MACROSTUDYHUB A* GRADE TRAJECTORY CURVE (SAPPHIRE / CYAN AREA GLOW) */}
              <motion.path
                d="M 80 155 Q 160 110, 240 90 T 400 65 T 560 50 T 720 40 L 720 260 L 80 260 Z"
                fill="url(#areaGlow)"
                style={{ opacity: pathProgress }}
              />

              {/* MAIN TRAJECTORY PATH (SCROLL-DRIVEN SVG PATH DRAWING) */}
              <motion.path
                d="M 80 155 Q 160 110, 240 90 T 400 65 T 560 50 T 720 40"
                fill="none"
                stroke="url(#sapphireCyanGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength: pathProgress }}
              />

              {/* INTERACTIVE DATA POINTS ALONG MACROSTUDYHUB CURVE */}
              {[
                { week: 0, x: 80, y: 155, ret: '52%' },
                { week: 3, x: 240, y: 90, ret: '76%' },
                { week: 6, x: 400, y: 65, ret: '86%' },
                { week: 9, x: 560, y: 50, ret: '91%' },
                { week: 12, x: 720, y: 40, ret: '94%' },
              ].map((pt) => {
                const isSelected = activeWeek === pt.week;
                return (
                  <g 
                    key={pt.week} 
                    className="cursor-pointer"
                    onClick={() => setActiveWeek(pt.week)}
                  >
                    {isSelected && (
                      <circle cx={pt.x} cy={pt.y} r="12" fill="#1d4ed8" fillOpacity="0.2" className="animate-pulse" />
                    )}
                    <circle 
                      cx={pt.x} 
                      cy={pt.y} 
                      r={isSelected ? "6" : "5"} 
                      fill="#ffffff" 
                      stroke="#1d4ed8" 
                      strokeWidth="3" 
                    />
                    <text 
                      x={pt.x - 14} 
                      y={pt.y - 12} 
                      fill="#0f172a" 
                      fontSize="11" 
                      fontFamily="monospace" 
                      fontWeight="bold"
                    >
                      {pt.ret}
                    </text>
                  </g>
                );
              })}

              {/* STANDARD TUTORING END POINT */}
              <circle cx="720" cy="205" r="4" fill="#94a3b8" />
              <text x="730" y="210" fill="#94a3b8" fontSize="11" fontFamily="monospace">34% (Decayed)</text>

            </svg>

          </div>

          {/* ACTIVE MILESTONE INSPECTION PANEL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            
            {/* MACROSTUDYHUB METRIC CARD */}
            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-blue-700 uppercase">
                  MacroStudyHub: {currentMilestone.label}
                </span>
                <span className="font-mono text-base font-extrabold text-blue-700">
                  {currentMilestone.macroRetention}% Retention
                </span>
              </div>
              <div className="font-semibold text-slate-900 text-sm">
                {currentMilestone.title}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentMilestone.macroDesc}
              </p>
            </div>

            {/* REACTIVE TUTORING METRIC CARD */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-slate-500 uppercase">
                  Standard Tutoring: {currentMilestone.label}
                </span>
                <span className="font-mono text-base font-bold text-slate-500">
                  {currentMilestone.standardRetention}% Retention
                </span>
              </div>
              <div className="font-semibold text-slate-700 text-sm">
                Passive Forgetting Curve
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {currentMilestone.standardDesc}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
