import React from "react";
import { Brain, Cpu, Target, Repeat, PenTool, Sparkles, CheckCircle2 } from "lucide-react";

export const Pedagogy: React.FC = () => {
  const pillars = [
    {
      id: "01",
      title: "First-Principles Derivations",
      subtitle: "Synoptic Depth Over Rote Memorisation",
      icon: Brain,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-cyan-500/30",
      badgeColor: "text-cyan-400 bg-cyan-950/40 border-cyan-500/30",
      description:
        "Examiners deliberately craft novel multi-topic questions that defeat memorised formulas. We train students to derive mathematical identities, physical laws, and economic mechanisms from fundamental axioms so no exam curveball can disorient them.",
      highlights: [
        "Pure calculus derivation of kinematics & mechanics",
        "Physical intuition before applying formulas",
        "Algorithmic decomposition for Computer Science NEA"
      ]
    },
    {
      id: "02",
      title: "Zero-Decay Active Recall",
      subtitle: "Halting the Ebbinghaus Forgetting Curve",
      icon: Repeat,
      color: "from-cyan-500/20 to-emerald-500/20",
      borderColor: "border-emerald-500/30",
      badgeColor: "text-emerald-400 bg-emerald-950/40 border-emerald-500/30",
      description:
        "Students typically forget 60% of technical content within 14 days. Our proprietary Zero-Decay schedule integrates spaced retrieval prompts and interleaved topic problem sets, converting short-term familiarity into permanent exam-ready mastery.",
      highlights: [
        "Weekly interleaved active recall sheets",
        "Spaced intervals calibrated to topic difficulty",
        "Eliminates last-minute pre-exam cramming panic"
      ]
    },
    {
      id: "03",
      title: "Surgical Error Diagnostics",
      subtitle: "Quantitative Tracking of Every Mark Lost",
      icon: Target,
      color: "from-emerald-500/20 to-amber-500/20",
      borderColor: "border-amber-500/30",
      badgeColor: "text-amber-400 bg-amber-950/40 border-amber-500/30",
      description:
        "We track three core diagnostic metrics weekly: Homework Completion (HWC), Worksheet Accuracy (WSA), and Topic Struggles (TPS). We identify exact mark-scheme phrasing blindspots long before official mock examinations.",
      highlights: [
        "Mark scheme keyword precision training",
        "Real-time student diagnostic progress tracking",
        "Immediate remediation of high-friction micro-topics"
      ]
    },
    {
      id: "04",
      title: "AI Revision Vaults & reMarkable 2",
      subtitle: "Next-Generation Educational Technology",
      icon: Cpu,
      color: "from-blue-600/20 to-indigo-600/20",
      borderColor: "border-blue-500/30",
      badgeColor: "text-blue-400 bg-blue-950/40 border-blue-500/30",
      description:
        "Every student receives private, bespoke revision vaults powered by custom AI workflows, coupled with real-time digital problem derivation using reMarkable 2 e-ink tablets for high-clarity live working.",
      highlights: [
        "Private AI-indexed syllabus revision vaults",
        "Personalised Playwright-rendered qworksheets",
        "Live reMarkable 2 handwritten problem dissection"
      ]
    }
  ];

  return (
    <section id="methodology" className="relative py-24 px-4 sm:px-8 overflow-hidden bg-slate-950/50">
      <div className="radial-glow w-[500px] h-[500px] bg-cyan-600/10 -top-40 right-1/4" />
      <div className="radial-glow w-[400px] h-[400px] bg-blue-600/10 bottom-10 left-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Academic Mastery Framework</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            We Don't Just Tutor.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              We Re-engineer How Students Think.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Standard tuition is passive and reactive. MacroStudyHub is an intensive, analytical system built on cognitive science, rigorous derivations, and modern AI architectures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`glass-panel p-8 sm:p-10 rounded-3xl border ${pillar.borderColor} glass-card-hover relative overflow-hidden flex flex-col justify-between`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-20 pointer-events-none`}
                />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block">
                          Pillar {pillar.id}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-semibold">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-white/10">
                    {pillar.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>SYSTEM METRIC</span>
                  <span className="text-emerald-400 font-bold">100% EXAM-BOARD COMPLIANT</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300 shrink-0">
              <PenTool className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Live reMarkable 2 E-Ink Tablet Screen Sharing
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Zero clumsy mouse drawings. Every step is handwritten with fountain-pen clarity in real-time, exported directly into your student portal as searchable vector PDFs.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/15 text-xs font-mono text-cyan-300 font-bold">
              <span>● Ultra-Low Latency Feed</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
