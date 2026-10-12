import React from 'react';
import { BookOpen, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* TOP ROW: BRAND & NAVIGATION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-bold text-xl tracking-tight text-[#0f172a]">
                MacroStudyHub
              </span>
            </div>
            
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              The high-rigour academic mastery platform for A-Level and GCSE students targeting A* and Grade 9s in STEM and core disciplines.
            </p>

            <div className="font-mono text-xs text-slate-500 pt-1">
              Founder & Sole Owner: <span className="font-semibold text-slate-800">Musa Ahmed</span> (A*A*AAA, 4x Russell Group Offers)
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Architecture
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#credentials" className="hover:text-blue-600 transition-colors">Founder Vault</a></li>
                <li><a href="#derivation" className="hover:text-blue-600 transition-colors">Derivation Lab</a></li>
                <li><a href="#retention" className="hover:text-blue-600 transition-colors">Retention Curve</a></li>
                <li><a href="#subjects" className="hover:text-blue-600 transition-colors">Subject Directory</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Curriculum
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#subjects" className="hover:text-blue-600 transition-colors">A-Level Mathematics</a></li>
                <li><a href="#subjects" className="hover:text-blue-600 transition-colors">A-Level Physics</a></li>
                <li><a href="#subjects" className="hover:text-blue-600 transition-colors">A-Level Computer Science</a></li>
                <li><a href="#subjects" className="hover:text-blue-600 transition-colors">GCSE Triple Science</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Tuition & Fees
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#pricing" className="hover:text-blue-600 transition-colors">A-Level 1-on-1 (£29.99/hr)</a></li>
                <li><a href="#pricing" className="hover:text-blue-600 transition-colors">Pre-Y13 Summer (£34.99)</a></li>
                <li><a href="#pricing" className="hover:text-blue-600 transition-colors">GCSE 1-on-1 (£24.99/hr)</a></li>
                <li><a href="#pricing" className="hover:text-blue-600 transition-colors">Group Masterclasses</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT & METADATA */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} MacroStudyHub. All rights reserved. First-Principles Academic Pedagogy.
          </div>

          <div className="flex items-center gap-4">
            <span>[BURNLEY, UK // TOP 1% STEM MASTERY]</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
