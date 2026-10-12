import React, { useState } from 'react';
import { ArrowRight, Menu, X, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuiz }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Credentials', href: '#credentials' },
    { name: 'Derivation Lab', href: '#derivation' },
    { name: 'Retention Curve', href: '#retention' },
    { name: 'Subjects', href: '#subjects' },
    { name: 'Tuition & Pricing', href: '#pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/75 backdrop-blur-md border-b border-slate-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* LOGO & BRAND */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <BookOpen className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight text-[#0f172a] flex items-center gap-1.5">
              MacroStudyHub
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600" />
            </span>
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider -mt-1 hidden sm:block">
              Academic Mastery
            </span>
          </div>
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-[#0f172a] tracking-tight transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* ACTIONS & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 border border-slate-200/60 text-slate-600 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Autumn 2026: 4 Seats</span>
          </div>

          <button
            onClick={onOpenQuiz}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>Begin Diagnostic</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* MOBILE HAMBURGER TOGGLE */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenQuiz}
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium cursor-pointer"
          >
            Diagnostic
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1.5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <div className="text-xs font-mono text-slate-500 py-1">
              Cohort Status: 4 Seats Remaining
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium text-center shadow-xs cursor-pointer"
            >
              Begin Diagnostic Evaluation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
