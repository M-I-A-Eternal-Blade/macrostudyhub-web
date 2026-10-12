import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Atom, Terminal, TrendingUp, FlaskConical, Compass, ArrowRight } from 'lucide-react';

interface SubjectDirectoryProps {
  onOpenQuiz: (subject?: string) => void;
}

export const SubjectDirectory: React.FC<SubjectDirectoryProps> = ({ onOpenQuiz }) => {
  const [hoveredSubject, setHoveredSubject] = useState<string | null>(null);

  const aLevelSubjects = [
    {
      id: 'a-maths',
      name: 'A-Level Mathematics',
      tier: 'A-Level',
      boards: 'Edexcel • OCR A • AQA',
      icon: BookOpen,
      iconColor: 'text-blue-600 bg-blue-50 border-blue-200',
      summary: 'Pure Calculus, Parametric Integration, Hypothesis Testing, and Kinematics.',
      tags: [
        '[EDEXCEL: Ch 11-12 Integration by Parts & Substitution]',
        '[STATS: Large Data Set ONS Hypothesis Testing]',
        '[MECH: Variable Acceleration & Moments]',
      ],
    },
    {
      id: 'a-physics',
      name: 'A-Level Physics',
      tier: 'A-Level',
      boards: 'OCR A • AQA • Edexcel',
      icon: Atom,
      iconColor: 'text-cyan-600 bg-cyan-50 border-cyan-200',
      summary: 'Simple Harmonic Motion, Gravitational & Electric Fields, Capacitors, and Quantum Physics.',
      tags: [
        '[OCR A: Module 5 Newtonian World & Astrophysics]',
        '[AQA: Turning Points in Physics & Paper 3 Practical]',
        '[EDEXCEL: Core Physics II Wave-Particle Duality]',
      ],
    },
    {
      id: 'a-cs',
      name: 'A-Level Computer Science',
      tier: 'A-Level',
      boards: 'AQA • OCR • CIE',
      icon: Terminal,
      iconColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      summary: 'Big-O Algorithmic Complexity, Dynamic Data Structures, Assembly LMC, and Boolean Proofs.',
      tags: [
        '[AQA: Paper 1 Dijkstra, A*, Binary Heap Tracing]',
        '[OCR: Component 01 Von Neumann & Pipelining]',
        '[THEORY: Halting Problem & Turing Completeness]',
      ],
    },
    {
      id: 'a-econ',
      name: 'A-Level Economics',
      tier: 'A-Level',
      boards: 'Edexcel • AQA • OCR',
      icon: TrendingUp,
      iconColor: 'text-amber-600 bg-amber-50 border-amber-200',
      summary: 'Micro Market Failure, Oligopoly Game Theory, Macro Monetary/Fiscal Policy, and Global Trade.',
      tags: [
        '[EDEXCEL: Theme 3 Business Behaviour & Contestability]',
        '[EVAL: Level 5 Chain of Reasoning Writing Framework]',
        '[MACRO: AD/AS Phillips Curve & Stagflation]',
      ],
    },
  ];

  const gcseSubjects = [
    {
      id: 'g-maths',
      name: 'GCSE Higher Mathematics',
      tier: 'GCSE (Grades 8-9 Track)',
      boards: 'Edexcel • AQA',
      icon: Compass,
      iconColor: 'text-blue-600 bg-blue-50 border-blue-200',
      summary: 'Non-Calculator Deductive Proofs, Vector Geometry, Circle Theorems, and Iterative Functions.',
      tags: [
        '[EDEXCEL HIGHER: Simultaneous Non-Linear Equations]',
        '[PROOF: Algebraic Deductive Proofs & Vectors]',
        '[GRADE 9 BOUNDARY: 78%+ Scaled Accuracy]',
      ],
    },
    {
      id: 'g-science',
      name: 'GCSE Triple Science',
      tier: 'GCSE (Chemistry, Physics, Biology)',
      boards: 'AQA • Edexcel',
      icon: FlaskConical,
      iconColor: 'text-cyan-600 bg-cyan-50 border-cyan-200',
      summary: 'Quantitative Chemistry Moles (n=m/Mr), Physics Energy & Waves, Cell Biology and Genetics.',
      tags: [
        '[CHEM: Mole Calculations (n = m/Mr, V = 24n)]',
        '[PHYSICS: Required Practicals 1-10 Diagnostic]',
        '[BIO: Inheritance & Punnett Square Synoptics]',
      ],
    },
    {
      id: 'g-cs',
      name: 'GCSE Computer Science',
      tier: 'GCSE',
      boards: 'AQA • OCR',
      icon: Terminal,
      iconColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      summary: 'Python Problem Solving, Algorithm Tracing Tables, Logic Gates, and Cyber Security.',
      tags: [
        '[AQA 8525: Paper 1 Algorithm Tracing Tables]',
        '[DATA: Binary, Hexadecimal, ASCII / Unicode]',
        '[SYSTEMS: TCP/IP Stack & Network Protocols]',
      ],
    },
    {
      id: 'g-eng',
      name: 'GCSE English Language',
      tier: 'GCSE',
      boards: 'AQA • Edexcel',
      icon: BookOpen,
      iconColor: 'text-amber-600 bg-amber-50 border-amber-200',
      summary: 'Paper 1 & 2 Analytical Architecture, 20-Mark Evaluative Questions, and Persuasive Rhetoric.',
      tags: [
        '[AQA ENG: Q4 20-Mark Evaluative Strategy]',
        '[RHETORIC: Persuasive Structural Devices]',
        '[GRADE 9: Sophisticated Vocabulary & Syntax]',
      ],
    },
  ];

  return (
    <section id="subjects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-semibold uppercase tracking-wider">
            [05 // SPECIALIZED SUBJECT DIRECTORY]
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0f172a]">
            Curriculum Map & Subject Directory
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A tight 2-tier bento grid separating our rigorous A-Level programs from our high-aiming GCSE foundational tracks. Hover any subject to inspect live syllabus module keys.
          </p>
        </div>

        {/* TIER 1: A-LEVEL PROGRAMS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <h3 className="text-lg sm:text-xl font-bold text-[#0f172a]">
                Tier 1: A-Level Mastery (Years 12–13)
              </h3>
            </div>
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
              Target: A / A* Grades
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aLevelSubjects.map((sub) => {
              const Icon = sub.icon;
              const isHovered = hoveredSubject === sub.id;
              return (
                <motion.div
                  key={sub.id}
                  onMouseEnter={() => setHoveredSubject(sub.id)}
                  onMouseLeave={() => setHoveredSubject(null)}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className={`bg-white rounded-2xl p-6 border transition-all flex flex-col justify-between cursor-pointer ${
                    isHovered
                      ? 'border-blue-300 shadow-md ring-1 ring-blue-100'
                      : 'border-slate-200/80 shadow-xs'
                  }`}
                  onClick={() => onOpenQuiz(sub.name)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${sub.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[11px] text-slate-400">
                        {sub.boards}
                      </span>
                    </div>

                    <h4 className="font-bold text-base text-[#0f172a] mb-2">
                      {sub.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {sub.summary}
                    </p>
                  </div>

                  {/* HIDDEN MODULE TAGS IN GEIST MONO (REVEALED ON HOVER VIA SPRING PHYSICS) */}
                  <div>
                    <motion.div
                      initial={false}
                      animate={{ 
                        opacity: isHovered ? 1 : 0, 
                        height: isHovered ? 'auto' : 0,
                        marginTop: isHovered ? 8 : 0,
                      }}
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2.5 border-t border-slate-100 space-y-1.5">
                        <div className="font-mono text-[9px] text-blue-600 font-semibold tracking-wider uppercase">
                          Syllabus Modules:
                        </div>
                        {sub.tags.map((tag, idx) => (
                          <div
                            key={idx}
                            className="font-mono text-[10px] text-slate-600 truncate bg-slate-50 px-2 py-1 rounded border border-slate-100"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <div className="mt-3 flex items-center justify-between text-xs font-semibold text-blue-600 pt-2 border-t border-slate-100/60">
                      <span>Begin Diagnostic</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* TIER 2: GCSE PROGRAMS */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <h3 className="text-lg sm:text-xl font-bold text-[#0f172a]">
                Tier 2: GCSE Foundation & Higher (Years 10–11)
              </h3>
            </div>
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
              Target: Grades 8 & 9
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {gcseSubjects.map((sub) => {
              const Icon = sub.icon;
              const isHovered = hoveredSubject === sub.id;
              return (
                <motion.div
                  key={sub.id}
                  onMouseEnter={() => setHoveredSubject(sub.id)}
                  onMouseLeave={() => setHoveredSubject(null)}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className={`bg-white rounded-2xl p-6 border transition-all flex flex-col justify-between cursor-pointer ${
                    isHovered
                      ? 'border-emerald-300 shadow-md ring-1 ring-emerald-100'
                      : 'border-slate-200/80 shadow-xs'
                  }`}
                  onClick={() => onOpenQuiz(sub.name)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${sub.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[11px] text-slate-400">
                        {sub.boards}
                      </span>
                    </div>

                    <h4 className="font-bold text-base text-[#0f172a] mb-2">
                      {sub.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {sub.summary}
                    </p>
                  </div>

                  {/* HIDDEN MODULE TAGS IN GEIST MONO (REVEALED ON HOVER VIA SPRING PHYSICS) */}
                  <div>
                    <motion.div
                      initial={false}
                      animate={{ 
                        opacity: isHovered ? 1 : 0, 
                        height: isHovered ? 'auto' : 0,
                        marginTop: isHovered ? 8 : 0,
                      }}
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2.5 border-t border-slate-100 space-y-1.5">
                        <div className="font-mono text-[9px] text-emerald-600 font-semibold tracking-wider uppercase">
                          Syllabus Modules:
                        </div>
                        {sub.tags.map((tag, idx) => (
                          <div
                            key={idx}
                            className="font-mono text-[10px] text-slate-600 truncate bg-slate-50 px-2 py-1 rounded border border-slate-100"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <div className="mt-3 flex items-center justify-between text-xs font-semibold text-emerald-600 pt-2 border-t border-slate-100/60">
                      <span>Begin Diagnostic</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
