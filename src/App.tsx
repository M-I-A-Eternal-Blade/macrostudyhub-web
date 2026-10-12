import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredentialsVault } from './components/CredentialsVault';
import { DerivationLab } from './components/DerivationLab';
import { GradeTrajectory } from './components/GradeTrajectory';
import { SubjectDirectory } from './components/SubjectDirectory';
import { Pricing } from './components/Pricing';
import { DiagnosticModal } from './components/DiagnosticModal';
import { Footer } from './components/Footer';
import { ArrowUp, Flame, Sparkles } from 'lucide-react';

export function App() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<string | undefined>(undefined);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth luxury inertia scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const reqId = requestAnimationFrame(raf);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      cancelAnimationFrame(reqId);
      lenis.destroy();
      lenisRef.current = null;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock background scroll when modal is active
  useEffect(() => {
    if (isDiagnosticOpen) {
      document.body.style.overflow = 'hidden';
      lenisRef.current?.stop();
    } else {
      document.body.style.overflow = '';
      lenisRef.current?.start();
    }
  }, [isDiagnosticOpen]);

  const openDiagnostic = (subjectOrProgram?: string) => {
    if (subjectOrProgram) {
      if (subjectOrProgram.includes('£') || subjectOrProgram.includes('Course') || subjectOrProgram.includes('Mastery')) {
        setSelectedProgram(subjectOrProgram);
      } else {
        setSelectedSubject(subjectOrProgram);
      }
    }
    setIsDiagnosticOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans antialiased relative">
      
      {/* PERSISTENT LIGHT FROSTED GLASS HEADER */}
      <Navbar onOpenQuiz={() => openDiagnostic()} />

      {/* EXACT 6-SECTION SCROLL SEQUENCE */}
      <main>
        {/* SECTION 1: CLEAN SAAS HERO */}
        <Hero onOpenQuiz={() => openDiagnostic()} />

        {/* SECTION 2: THE CREDENTIALS VAULT (LIGHT BENTO GRID) */}
        <CredentialsVault />

        {/* SECTION 3: INTERACTIVE DERIVATION LAB (STICKY SCROLL SCENE) */}
        <DerivationLab />

        {/* SECTION 4: THE ZERO-DECAY TRAJECTORY */}
        <GradeTrajectory />

        {/* SECTION 5: SUBJECT DIRECTORY */}
        <SubjectDirectory onOpenQuiz={(sub) => openDiagnostic(sub)} />

        {/* SECTION 6: CONVERSION & THE DIAGNOSTIC ENGINE */}
        <Pricing onOpenQuiz={(prog) => openDiagnostic(prog)} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* DIAGNOSTIC MODAL (4-STEP INTERACTIVE WIZARD) */}
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        initialSubject={selectedSubject}
        initialProgram={selectedProgram}
      />

      {/* FLOATING ACTION PILL WITH QUICK CTA */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-950 hover:border-slate-400 shadow-md backdrop-blur-lg transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <button
          type="button"
          onClick={() => openDiagnostic()}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Flame className="w-4 h-4 text-amber-300 fill-current" />
          <span>Apply (4 Seats Left)</span>
          <Sparkles className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}

export default App;
