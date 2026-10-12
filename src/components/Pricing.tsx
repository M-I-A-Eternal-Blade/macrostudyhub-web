import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Flame, Users } from 'lucide-react';

interface PricingProps {
  onOpenQuiz: (program?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenQuiz }) => {
  const tiers = [
    {
      id: 'a-level',
      name: 'A-Level 1-on-1 Mastery',
      price: '£29.99',
      unit: '/ hour',
      target: 'Years 12–13 • A* & A Grade Target',
      description: 'Personalized, diagnostic-driven academic mastery session directly with founder Musa Ahmed.',
      features: [
        'Live first-principles derivations on reMarkable 2',
        'Bespoke Zero-Decay active recall sheets post-session',
        'Direct WhatsApp question desk for mark-scheme queries',
        'Weekly graded homework with surgical error diagnostics',
        'Full OCR A, AQA, Edexcel past-paper question vaults',
      ],
      cta: 'Begin Diagnostic',
      highlight: false,
      badge: 'FLAGSHIP MASTERY',
    },
    {
      id: 'summer-crash',
      name: 'Pre-Y13 Summer Crash Course',
      price: '£34.99',
      unit: '/ intensive course',
      target: 'Rising Y13 Students • Summer Slip Prevention',
      description: '6-week intensive bridging program resolving the 40% retention slip before school reopens.',
      features: [
        '3 × 90-minute live masterclass modules (4.5 hrs total)',
        'AS-Level consolidation & early Year 13 calculus bridging',
        'Derivation packs for harmonic motion, fields & kinematics',
        'Active recall deck vault & baseline mock exam grading',
        'Guaranteed academic head-start for September Year 13',
      ],
      cta: 'Reserve Summer Seat',
      highlight: true,
      badge: 'MOST HIGH-YIELD // 4 SEATS LEFT',
    },
    {
      id: 'gcse',
      name: 'GCSE 1-on-1 Mastery',
      price: '£24.99',
      unit: '/ hour',
      target: 'Years 10–11 • Grade 8–9 Foundation',
      description: 'Structured 1-on-1 coaching by a straight 9/8s mentor across Triple Science, Maths, and Core.',
      features: [
        'Direct coaching from a Russell Group offer holder',
        'Higher Mathematics, Triple Science, CS & English',
        'Exam board mark-scheme keyword training',
        'Weekly parent WhatsApp progress and accuracy updates',
        'Targeted stepping-stone worksheets to lock Grade 9s',
      ],
      cta: 'Begin Diagnostic',
      highlight: false,
      badge: 'GCSE FOUNDATION',
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/60 relative overflow-hidden">
      
      {/* SOFT RADIAL ACCENT GLOW */}
      <div 
        className="radial-glow-light w-[700px] h-[700px] bg-blue-50/60 top-10 left-1/2 -translate-x-1/2 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-semibold uppercase tracking-wider">
            [06 // CONVERSION & THE DIAGNOSTIC ENGINE]
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0f172a]">
            Transparent, High-Rigour Tuition
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            No long-term contracts. No opaque agency surcharges. Every session is booked on merit and diagnosed individually.
          </p>
        </div>

        {/* PRICING TIERS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between relative transition-all ${
                tier.highlight
                  ? 'bg-white border-2 border-emerald-500 shadow-lg ring-4 ring-emerald-50'
                  : 'bg-white border border-slate-200/85 shadow-sm hover:shadow-md'
              }`}
            >
              {/* TOP BADGE */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                      tier.highlight
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-slate-100 text-slate-700 border border-slate-200/60'
                    }`}
                  >
                    {tier.badge}
                  </span>
                  {tier.highlight && (
                    <Flame className="w-5 h-5 text-emerald-500 fill-emerald-500" />
                  )}
                </div>

                <h3 className="text-2xl font-bold text-[#0f172a] mb-1">
                  {tier.name}
                </h3>

                <div className="font-mono text-xs text-slate-500 mb-6">
                  {tier.target}
                </div>

                {/* PRICE NUMBER */}
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a]">
                    {tier.price}
                  </span>
                  <span className="font-mono text-xs text-slate-500 font-medium">
                    {tier.unit}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* FEATURE LIST */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-emerald-600" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ACTION BUTTON */}
              <div>
                <button
                  onClick={() => onOpenQuiz(tier.name)}
                  className={`w-full py-3.5 px-5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    tier.highlight
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs hover:shadow'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center mt-3 font-mono text-[11px] text-slate-400">
                  BACS Bank Transfer • Direct Founder Delivery
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GROUP COHORTS CALLOUT CARD */}
        <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-left">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="font-mono text-xs font-bold text-blue-700 uppercase">
                Group Masterclass Cohorts Available
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-[#0f172a]">
              A-Level Group Sessions at £19.99/hr • GCSE Group Sessions at £14.99/hr
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              High-intensity collaborative groups capped at 4 students per cohort. Diagnostic evaluation required before admission.
            </p>
          </div>

          <button
            onClick={() => onOpenQuiz('Group Masterclass Cohort')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#0f172a] font-medium text-xs sm:text-sm border border-slate-200 shadow-xs cursor-pointer"
          >
            Inquire Group Cohort
          </button>
        </div>

      </div>
    </section>
  );
};
