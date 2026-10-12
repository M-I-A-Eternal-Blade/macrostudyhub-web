import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Atom, Layers, ShieldCheck } from 'lucide-react';
import { KatexMath } from './KatexMath';

interface HeroProps {
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      id: 0,
      title: 'Axiomatic Derivation',
      badge: 'STAGE_01 // FIRST PRINCIPLES',
      formula: 'm\\frac{d^2x}{dt^2} + kx = 0 \\implies x(t) = A\\cos(\\omega t + \\phi)',
      desc: 'No rote memorization. Every physical law and calculus theorem is proven from base axioms so unfamiliar synoptic questions become trivial.',
      icon: Atom,
      tag: 'OCR A / Edexcel Physics',
      metric: '100% Derivation Rigour',
    },
    {
      id: 1,
      title: 'Zero-Decay Recall',
      badge: 'STAGE_02 // MEMORY PROTOCOL',
      formula: 'R(t) = e^{-\\frac{t}{S}} \\quad \\text{with Spaced Repetition Reinforcement}',
      desc: 'Custom active recall sheets and spaced review cycles combat the forgetting curve, guaranteeing 94% retention across all 12 syllabus chapters.',
      icon: Layers,
      tag: 'Cognitive Science Engine',
      metric: '94% Synoptic Retention',
    },
    {
      id: 2,
      title: 'Surgical Mark Scheme Lock',
      badge: 'STAGE_03 // EXAM PRECISION',
      formula: '\\text{AO1: Knowledge} + \\text{AO2: Application} + \\text{AO3: Evaluation} \\equiv 100\\%',
      desc: 'Master the exact phrasing and examiner trap keywords that separate an A from an A*. Graded against raw exam board mark scheme keys.',
      icon: ShieldCheck,
      tag: 'AQA / Edexcel / OCR',
      metric: '0.0% Keyword Omission',
    },
  ];

  return (
    <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      
      {/* SOFT RADIAL GLOW IN CYAN / SAPPHIRE */}
      <div 
        className="radial-glow-light w-[720px] h-[720px] bg-blue-100/50 top-[-100px] left-1/2 -translate-x-1/2 pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(224, 242, 254, 0.6) 0%, rgba(219, 234, 254, 0.35) 45%, rgba(255, 255, 255, 0) 70%)' }}
      />
      <div 
        className="radial-glow-light w-[450px] h-[450px] bg-cyan-100/40 top-40 right-[-100px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP STATUS PILL */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-xs backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-slate-700 uppercase">
              Autumn 2026 Intake // 4 Seats Remaining // Founder Musa Ahmed (A*A*AAA)
            </span>
          </div>
        </motion.div>

        {/* CENTRAL HEADLINE & VALUE PROP */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0f172a] leading-[1.08]"
          >
            A-Level & GCSE Academic Mastery.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl font-semibold tracking-tight text-slate-600 max-w-3xl mx-auto"
          >
            First-Principles Derivation. Zero-Decay Recall. Surgical Diagnostics.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed pt-1"
          >
            We do not sell passive tutoring hours. Coached directly by a 4x Russell Group offer holder who recently conquered the exact OCR, AQA, and Edexcel STEM specifications, MacroStudyHub engineers an undeniable academic trajectory.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3.5 pt-4 pb-2"
          >
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>Begin Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#derivation"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm sm:text-base border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all"
            >
              <span>Explore Derivation Lab</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </motion.div>
        </div>

        {/* INTERACTIVE SAAS-STYLE DIAGRAM & FLOATING ABSTRACT GEOMETRIES */}
        <div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
          
          {/* FLOATING ABSTRACT GEOMETRY 1: ORBITAL COORDINATE RING (TOP RIGHT) */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              y: [0, -10, 0]
            }}
            transition={{ 
              rotate: { repeat: Infinity, duration: 40, ease: "linear" },
              y: { repeat: Infinity, duration: 7, ease: "easeInOut" }
            }}
            className="hidden sm:block absolute -top-12 -right-8 w-28 h-28 pointer-events-none opacity-40 z-0"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 3" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="#1d4ed8" strokeWidth="1.2" />
              <circle cx="50" cy="5" r="2.5" fill="#1d4ed8" />
              <circle cx="95" cy="50" r="2" fill="#06b6d4" />
              <line x1="50" y1="42" x2="50" y2="58" stroke="#0f172a" strokeWidth="1" />
              <line x1="42" y1="50" x2="58" y2="50" stroke="#0f172a" strokeWidth="1" />
            </svg>
          </motion.div>

          {/* FLOATING ABSTRACT GEOMETRY 2: VECTOR CROSSHAIR PRISM (BOTTOM LEFT) */}
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              rotate: [0, -90, 0]
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 },
              rotate: { repeat: Infinity, duration: 25, ease: "easeInOut" }
            }}
            className="hidden sm:block absolute -bottom-10 -left-8 w-20 h-20 pointer-events-none opacity-35 z-0"
          >
            <svg viewBox="0 0 80 80" className="w-full h-full">
              <polygon points="40,10 70,65 10,65" fill="none" stroke="#1d4ed8" strokeWidth="1.2" strokeDasharray="3 2" />
              <circle cx="40" cy="45" r="14" fill="none" stroke="#06b6d4" strokeWidth="1" />
              <line x1="40" y1="35" x2="40" y2="55" stroke="#1d4ed8" strokeWidth="1.5" />
              <line x1="30" y1="45" x2="50" y2="45" stroke="#1d4ed8" strokeWidth="1.5" />
            </svg>
          </motion.div>

          {/* FLOATING CARD LEFT: RUSSELL GROUP CREDENTIAL */}
          <motion.div 
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="hidden lg:flex absolute -left-12 top-10 z-20 items-center gap-3 bg-white/95 border border-slate-200/80 rounded-xl px-4 py-3 shadow-md backdrop-blur-md"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
              4x
            </div>
            <div>
              <div className="font-mono text-[10px] text-slate-400 tracking-wider uppercase font-semibold">Russell Group Offers</div>
              <div className="text-xs font-bold text-slate-800">Manchester • Edinburgh • Glasgow</div>
            </div>
          </motion.div>

          {/* FLOATING CARD RIGHT: EXAMINER PRECISION */}
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
            className="hidden lg:flex absolute -right-12 bottom-12 z-20 items-center gap-3 bg-white/95 border border-slate-200/80 rounded-xl px-4 py-3 shadow-md backdrop-blur-md"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">
              99%
            </div>
            <div>
              <div className="font-mono text-[10px] text-slate-400 tracking-wider uppercase font-semibold">Mark Scheme Key Align</div>
              <div className="text-xs font-bold text-slate-800">AQA • OCR A • Edexcel Verified</div>
            </div>
          </motion.div>

          {/* MAIN INTERACTIVE DIAGRAM CARD */}
          <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-sm p-5 sm:p-8 relative overflow-hidden">
            
            {/* CARD TOP TOOLBAR */}
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-slate-100 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <span className="ml-2 font-mono text-xs text-slate-400 font-medium">
                  cognitive_pipeline_architecture.ts
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>STATE: ACTIVE_SYNTHESIS</span>
              </div>
            </div>

            {/* THREE PIPELINE TABS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
              {stages.map((st, idx) => {
                const Icon = st.icon;
                const isActive = activeStage === idx;
                return (
                  <button
                    key={st.id}
                    onClick={() => setActiveStage(idx)}
                    className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-blue-50/60 border-blue-300/80 shadow-xs' 
                        : 'bg-slate-50/50 border-slate-200/60 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                        {st.badge}
                      </span>
                      <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                    </div>
                    <div className={`font-semibold text-sm ${isActive ? 'text-blue-900' : 'text-slate-800'}`}>
                      {st.title}
                    </div>
                    <div className="font-mono text-[11px] text-slate-500 mt-1">
                      {st.metric}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ACTIVE STAGE DISPLAY PANEL */}
            <motion.div 
              key={activeStage}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200/60">
                <div>
                  <span className="inline-block font-mono text-[10px] text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded font-semibold uppercase">
                    {stages[activeStage].tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#0f172a] mt-1">
                    {stages[activeStage].title}
                  </h3>
                </div>
                <div className="font-mono text-xs text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                  COGNITIVE EFFICIENCY: <span className="text-emerald-600 font-bold">99.8%</span>
                </div>
              </div>

              {/* EQUATION DISPLAY IN OXFORD BLUE */}
              <div className="my-6 py-5 px-4 bg-white border border-slate-200 rounded-xl overflow-x-auto text-center">
                <div className="text-[#0f172a] text-base sm:text-xl font-mono">
                  <KatexMath math={stages[activeStage].formula} block />
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {stages[activeStage].desc}
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
