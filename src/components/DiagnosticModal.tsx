import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowRight, ArrowLeft, MessageSquare, Mail, Copy, CheckCheck } from 'lucide-react';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
  initialProgram?: string;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  isOpen,
  onClose,
  initialSubject,
  initialProgram,
}) => {
  const [step, setStep] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Keyboard navigation: Escape key closes modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Form State
  const [level, setLevel] = useState<'A-Level' | 'GCSE'>('A-Level');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(() =>
    initialSubject ? [initialSubject] : []
  );
  const [cognitiveBlocker, setCognitiveBlocker] = useState<string>('derivation');
  const [currentGrade, setCurrentGrade] = useState<string>('B');
  const [targetGrade, setTargetGrade] = useState<string>('A*');
  const [examBoard, setExamBoard] = useState<string>('Edexcel');
  const [program, setProgram] = useState<string>(() =>
    initialProgram || 'A-Level 1-on-1 Mastery (£29.99/hr)'
  );

  // Contact State
  const [name, setName] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  if (!isOpen) return null;

  const toggleSubject = (sub: string) => {
    if (selectedSubjects.includes(sub)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== sub));
    } else {
      setSelectedSubjects([...selectedSubjects, sub]);
    }
  };

  const blockers = [
    {
      id: 'derivation',
      title: 'First-Principles Derivation',
      desc: 'Struggle with unfamiliar synoptic questions that demand mathematical proofs from axioms.',
    },
    {
      id: 'markscheme',
      title: 'Examiner Mark Scheme Precision',
      desc: 'Know the concepts well, but consistently drop marks due to missing exact keyword definitions.',
    },
    {
      id: 'speed',
      title: 'Exam Speed & Time Pressure',
      desc: 'Run out of time on long calculations or Level 5 essay evaluation questions.',
    },
    {
      id: 'retention',
      title: 'Forgetting Curve Decay',
      desc: 'Understand topics during lessons, but forget core proofs and formulas 3 weeks later.',
    },
  ];

  const getDiagnosticSummary = () => {
    const blockerObj = blockers.find((b) => b.id === cognitiveBlocker);
    return `MacroStudyHub Diagnostic Profile:
Level: ${level}
Subjects: ${selectedSubjects.length > 0 ? selectedSubjects.join(', ') : 'None specified'}
Current Grade: ${currentGrade} -> Target Grade: ${targetGrade}
Exam Board: ${examBoard}
Primary Blocker: ${blockerObj?.title || cognitiveBlocker}
Preferred Program: ${program}
Student/Parent: ${name || 'N/A'}
Contact Phone: ${whatsapp || 'N/A'}
Email: ${email || 'N/A'}
Notes: ${notes || 'None'}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getDiagnosticSummary());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Musa, I just completed the MacroStudyHub Diagnostic Assessment:\n\n${getDiagnosticSummary()}\n\nLooking forward to securing a diagnostic evaluation.`
    );
    // WhatsApp direct link
    window.open(`https://wa.me/447864082298?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:musa@macrostudyhub.com?subject=MacroStudyHub Diagnostic: ${name} (${level})&body=${encodeURIComponent(
      getDiagnosticSummary()
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm bg-slate-900/10 cursor-pointer"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      
      {/* MODAL CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="bg-white border border-slate-200/90 rounded-3xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[92vh] overflow-y-auto flex flex-col justify-between cursor-default"
      >
        
        {/* TOP BAR & CLOSE BUTTON */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider">
                DIAGNOSTIC ENGINE // STEP {step} OF 4
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* PROGRESS BAR */}
          <div className="w-full h-1 bg-slate-100 rounded-full mb-6 overflow-hidden">
            <motion.div
              className="h-full bg-blue-600 rounded-full"
              initial={{ width: '25%' }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {submitted && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
              Diagnostic summary dispatched! Musa Ahmed will review and confirm within 24 hours.
            </div>
          )}

          {/* STEP 1: ACADEMIC LEVEL & SUBJECTS */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-1">
                  Select Academic Level & Target Subjects
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Choose the academic tier and subjects requiring derivation and retention coaching.
                </p>
              </div>

              {/* LEVEL SWITCHER */}
              <div className="grid grid-cols-2 gap-3">
                {(['A-Level', 'GCSE'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => {
                      setLevel(lvl);
                      setSelectedSubjects([]);
                    }}
                    className={`py-3 rounded-xl font-bold text-sm border transition-all cursor-pointer ${
                      level === lvl
                        ? 'bg-blue-50 border-blue-400 text-blue-700 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {lvl} Cohort
                  </button>
                ))}
              </div>

              {/* SUBJECT SELECTOR */}
              <div className="space-y-2">
                <label className="block text-xs font-mono text-slate-500 uppercase font-semibold">
                  Available {level} Modules (Select one or more):
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {(level === 'A-Level'
                    ? [
                        'A-Level Mathematics',
                        'A-Level Physics',
                        'A-Level Computer Science',
                        'A-Level Economics',
                      ]
                    : [
                        'GCSE Higher Mathematics',
                        'GCSE Chemistry',
                        'GCSE Physics',
                        'GCSE Biology',
                        'GCSE Computer Science',
                        'GCSE English Language',
                      ]
                  ).map((sub) => {
                    const isSelected = selectedSubjects.includes(sub);
                    return (
                      <button
                        key={sub}
                        type="button"
                        onClick={() => toggleSubject(sub)}
                        className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50/80 border-blue-300 text-blue-900 font-semibold'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{sub}</span>
                        {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: COGNITIVE BLOCKER */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-1">
                  Identify Cognitive Blocker
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  What is currently preventing you from securing an A* or Grade 9?
                </p>
              </div>

              <div className="space-y-3">
                {blockers.map((b) => {
                  const isSelected = cognitiveBlocker === b.id;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setCognitiveBlocker(b.id)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-50/70 border-blue-400 ring-1 ring-blue-300 shadow-xs'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-bold text-sm ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}>
                          {b.title}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-blue-600" />}
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {b.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: CURRENT STANDING VS TARGET */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-1">
                  Grade Delta & Exam Board
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Quantify the gap between your current mock performance and target grade.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* CURRENT GRADE */}
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase font-semibold mb-2">
                    Current Mock Grade:
                  </label>
                  <select
                    value={currentGrade}
                    onChange={(e) => setCurrentGrade(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white font-mono text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    {level === 'A-Level' ? (
                      <>
                        <option value="A">Grade A (Consolidation to A*)</option>
                        <option value="B">Grade B (Near Threshold)</option>
                        <option value="C">Grade C (Syllabus Blockers)</option>
                        <option value="D/E">Grade D or E (Foundational Reset)</option>
                      </>
                    ) : (
                      <>
                        <option value="8">Grade 8 (Push to Grade 9)</option>
                        <option value="7">Grade 7</option>
                        <option value="6">Grade 6</option>
                        <option value="5">Grade 5 or Below</option>
                      </>
                    )}
                  </select>
                </div>

                {/* TARGET GRADE */}
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase font-semibold mb-2">
                    Target Goal:
                  </label>
                  <select
                    value={targetGrade}
                    onChange={(e) => setTargetGrade(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white font-mono text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    {level === 'A-Level' ? (
                      <>
                        <option value="A*">Grade A* (Top 1% Mastery)</option>
                        <option value="A">Grade A (Solid Russell Group)</option>
                      </>
                    ) : (
                      <>
                        <option value="9">Grade 9 (Highest Tier)</option>
                        <option value="8">Grade 8</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* EXAM BOARD */}
              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase font-semibold mb-2">
                  Target Exam Board:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['Edexcel', 'OCR A', 'AQA', 'CIE'].map((board) => (
                    <button
                      key={board}
                      type="button"
                      onClick={() => setExamBoard(board)}
                      className={`py-2.5 rounded-xl border text-xs font-mono font-medium transition-all cursor-pointer ${
                        examBoard === board
                          ? 'bg-blue-50 border-blue-400 text-blue-700 font-bold'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {board}
                    </button>
                  ))}
                </div>
              </div>

              {/* PROGRAM PREFERENCE */}
              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase font-semibold mb-2">
                  Tuition Program:
                </label>
                <select
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  <option value="A-Level 1-on-1 Mastery (£29.99/hr)">A-Level 1-on-1 Mastery (£29.99/hr)</option>
                  <option value="Pre-Y13 Summer Crash Course (£34.99 intensive)">Pre-Y13 Summer Crash Course (£34.99 intensive)</option>
                  <option value="GCSE 1-on-1 Mastery (£24.99/hr)">GCSE 1-on-1 Mastery (£24.99/hr)</option>
                  <option value="A-Level Group Cohort (£19.99/hr)">A-Level Group Cohort (£19.99/hr)</option>
                  <option value="GCSE Group Cohort (£14.99/hr)">GCSE Group Cohort (£14.99/hr)</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 4: DIAGNOSTIC PROFILE & FRICTIONLESS HANDOFF */}
          {step === 4 && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-1">
                  Personalized Trajectory Synthesis
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Your diagnostic profile is generated. Connect directly with founder Musa Ahmed to confirm placement.
                </p>
              </div>

              {/* GENERATED DIAGNOSTIC SUMMARY CARD */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between text-blue-700 font-bold">
                  <span>[DIAGNOSTIC SYNTHESIS]</span>
                  <span>PREDICTION: {targetGrade} CANDIDATE</span>
                </div>
                <div className="text-slate-700">
                  • Trajectory: {level} ({selectedSubjects.join(', ') || 'General'}) • Board: {examBoard}
                </div>
                <div className="text-slate-700">
                  • Delta Target: {currentGrade} ➔ {targetGrade} • Strategy: First-Principles & Spaced Recall
                </div>
                <div className="text-slate-600 text-[11px] pt-1 border-t border-slate-200/60">
                  Program: {program}
                </div>
              </div>

              {/* CONTACT INPUTS */}
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase font-semibold mb-1">
                      Student / Parent Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase font-semibold mb-1">
                      WhatsApp / Phone:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07123 456789"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase font-semibold mb-1">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. parent@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase font-semibold mb-1">
                    Specific Topic Struggles (Optional):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Simple Harmonic Motion, Calculus, Big-O notation"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* ACTION HANDOFF BUTTONS */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp to Musa (Fastest Response)</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                  >
                    {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM STEP NAVIGATION */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Step</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm shadow-xs cursor-pointer transition-all"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <span className="font-mono text-xs text-slate-400">
              [INTAKE VERIFICATION ACTIVE]
            </span>
          )}
        </div>

      </motion.div>
    </div>
  );
};
