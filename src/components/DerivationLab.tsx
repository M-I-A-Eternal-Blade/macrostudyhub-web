import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion';
import { AlertTriangle, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { KatexMath } from './KatexMath';

export const DerivationLab: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for roughly 300vh sticky scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate current active step based on scroll progress (0, 1, 2, 3)
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      if (latest < 0.25) setActiveStep(0);
      else if (latest < 0.50) setActiveStep(1);
      else if (latest < 0.75) setActiveStep(2);
      else setActiveStep(3);
    });
  }, [scrollYProgress]);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Step Derivation Data
  const steps = [
    {
      stepNumber: '01',
      title: 'The Restoring Force Axiom',
      stage: 'AXIOMATIC FOUNDATION',
      katexPrimary: 'F = -kx \\implies m\\frac{d^2x}{dt^2} = -kx \\implies \\frac{d^2x}{dt^2} + \\left(\\frac{k}{m}\\right)x = 0',
      katexSecondary: '\\omega^2 \\equiv \\frac{k}{m} \\quad \\implies \\quad \\ddot{x} + \\omega^2 x = 0',
      diagramType: 'spring',
      trapType: 'gold',
      trapTitle: 'EXAMINER TRAP // OCR A & Edexcel P1',
      trapBody: '62% of students drop Mark 2 by defining Simple Harmonic Motion as “acceleration proportional to displacement” without stating: “and directed towards the equilibrium position”. The negative sign denotes this vector direction.',
    },
    {
      stepNumber: '02',
      title: 'Second-Order ODE Analytical Proof',
      stage: 'HARMONIC SOLUTION',
      katexPrimary: 'r^2 + \\omega^2 = 0 \\implies r = \\pm i\\omega \\implies x(t) = C_1 e^{i\\omega t} + C_2 e^{-i\\omega t}',
      katexSecondary: 'x(t) = A\\cos(\\omega t + \\phi) \\quad \\text{where } \\omega = 2\\pi f = \\frac{2\\pi}{T} \\implies T = 2\\pi\\sqrt{\\frac{m}{k}}',
      diagramType: 'wave',
      trapType: 'emerald',
      trapTitle: 'SYNOPTIC SPEED SHORTCUT // A* Mark Scheme',
      trapBody: 'Phase constant φ must always be calculated in radians. If boundary conditions begin at maximum positive displacement (x(0) = A), then φ = 0 immediately.',
    },
    {
      stepNumber: '03',
      title: 'Velocity & Acceleration Phasor Derivation',
      stage: 'DIFFERENTIAL PHASORS',
      katexPrimary: 'v(t) = \\frac{dx}{dt} = -\\omega A\\sin(\\omega t + \\phi) \\quad \\implies \\quad v_{\\max} = \\omega A',
      katexSecondary: 'a(t) = \\frac{dv}{dt} = -\\omega^2 A\\cos(\\omega t + \\phi) = -\\omega^2 x(t) \\quad \\implies \\quad a_{\\max} = \\omega^2 A',
      diagramType: 'phasor',
      trapType: 'gold',
      trapTitle: 'EXAMINER TRAP // AQA & Edexcel Mechanics',
      trapBody: 'Never apply SUVAT formulas (v = u + at) to Simple Harmonic Motion! Acceleration is continuously variable. Full marks require direct application of a = -ω²x or v = ±ω√(A² - x²).',
    },
    {
      stepNumber: '04',
      title: 'Conservation of Mechanical Energy Invariant',
      stage: 'ENERGY INVARIANT PROOF',
      katexPrimary: 'E_k = \\frac{1}{2}m v^2 = \\frac{1}{2}k A^2 \\sin^2(\\omega t + \\phi), \\quad E_p = \\frac{1}{2}k x^2 = \\frac{1}{2}k A^2 \\cos^2(\\omega t + \\phi)',
      katexSecondary: 'E_{\\text{total}} = E_k + E_p = \\frac{1}{2}k A^2 \\left[\\sin^2(\\dots) + \\cos^2(\\dots)\\right] \\equiv \\frac{1}{2}k A^2 = \\text{Constant}',
      diagramType: 'energy',
      trapType: 'emerald',
      trapTitle: 'CRITICAL VALUE IDENTIFIER // Level 5 Evaluative Proof',
      trapBody: 'At x = ±A / √2, kinetic energy exactly equals potential energy (Ek = Ep = 1/4 kA²). Remembering this critical coordinate solves 4-mark multiple choice questions in 10 seconds.',
    },
  ];

  // Diagram rendering per step
  const renderStepDiagram = (diagramType: string) => {
    switch (diagramType) {
      case 'spring':
        // STEP 1: Hooke's Law & Restoring Force Oscillator (Spring-Mass System)
        return (
          <svg className="w-full max-w-lg h-24 sm:h-28 overflow-visible" viewBox="0 0 460 110">
            {/* Wall & Ceiling Mount */}
            <line x1="40" y1="20" x2="40" y2="90" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
            {[-10, 0, 10, 20, 30, 40, 50].map((y) => (
              <line key={y} x1="30" y1={y + 35} x2="40" y2={y + 25} stroke="#cbd5e1" strokeWidth="2" />
            ))}

            {/* Equilibrium Center Axis */}
            <line x1="220" y1="15" x2="220" y2="95" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="224" y="25" fill="#64748b" fontSize="10" fontFamily="monospace" fontWeight="600">x = 0 (Equilibrium)</text>

            {/* Animated Spring Coil in Oxford Blue */}
            <motion.path
              key={`spring-coil-${activeStep}`}
              d="M 40 55 L 70 55 Q 85 30, 100 55 T 130 55 T 160 55 T 190 55 T 220 55 T 250 55 T 280 55 L 300 55"
              fill="none"
              stroke="#0f172a"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            />

            {/* Mass Block m */}
            <motion.rect
              key={`mass-block-${activeStep}`}
              x="300"
              y="30"
              width="50"
              height="50"
              rx="6"
              fill="#ffffff"
              stroke="#1d4ed8"
              strokeWidth="2.5"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
            <text x="320" y="60" fill="#1d4ed8" fontSize="14" fontFamily="monospace" fontWeight="bold">m</text>

            {/* Displacement Vector +x */}
            <motion.g
              key={`disp-vec-${activeStep}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <line x1="220" y1="95" x2="325" y2="95" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrow-cyan)" />
              <text x="250" y="107" fill="#0891b2" fontSize="11" fontFamily="monospace" fontWeight="bold">Displacement: +x →</text>
            </motion.g>

            {/* Restoring Force Vector F = -kx (Pointing toward equilibrium) */}
            <motion.g
              key={`force-vec-${activeStep}`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <line x1="300" y1="40" x2="230" y2="40" stroke="#f59e0b" strokeWidth="2.5" />
              <polygon points="228,40 236,36 236,44" fill="#f59e0b" />
              <text x="232" y="32" fill="#d97706" fontSize="11" fontFamily="monospace" fontWeight="bold">F = -kx (Restoring)</text>
            </motion.g>
          </svg>
        );

      case 'wave':
        // STEP 2: Harmonic Solution Cosine Wave Trajectory
        return (
          <svg className="w-full max-w-lg h-24 sm:h-28 overflow-visible" viewBox="0 0 460 110">
            {/* Grid Coordinates & Axes */}
            <line x1="30" y1="55" x2="430" y2="55" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="50" y1="15" x2="50" y2="95" stroke="#cbd5e1" strokeWidth="2" />
            <text x="435" y="58" fill="#94a3b8" fontSize="10" fontFamily="monospace">t</text>
            <text x="42" y="14" fill="#0f172a" fontSize="11" fontFamily="monospace" fontWeight="bold">x(t)</text>

            {/* Amplitude Boundaries +A and -A */}
            <line x1="50" y1="20" x2="430" y2="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="50" y1="90" x2="430" y2="90" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
            <text x="24" y="24" fill="#06b6d4" fontSize="10" fontFamily="monospace" fontWeight="bold">+A</text>
            <text x="24" y="94" fill="#06b6d4" fontSize="10" fontFamily="monospace" fontWeight="bold">-A</text>

            {/* Harmonic Wave Trajectory Drawn in Oxford Blue */}
            <motion.path
              key={`wave-path-${activeStep}`}
              d="M 50 20 Q 95 20, 140 55 T 230 90 T 320 55 T 410 20"
              fill="none"
              stroke="#0f172a"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            />

            {/* Period Indicator T = 2pi/omega */}
            <line x1="50" y1="102" x2="410" y2="102" stroke="#1d4ed8" strokeWidth="1.5" />
            <circle cx="50" cy="102" r="2.5" fill="#1d4ed8" />
            <circle cx="410" cy="102" r="2.5" fill="#1d4ed8" />
            <text x="200" y="100" fill="#1d4ed8" fontSize="10" fontFamily="monospace" fontWeight="bold">Period T = 2π√(m/k)</text>

            {/* Node markers */}
            <circle cx="50" cy="20" r="4" fill="#1d4ed8" />
            <circle cx="230" cy="90" r="4" fill="#06b6d4" />
            <circle cx="410" cy="20" r="4" fill="#1d4ed8" />
          </svg>
        );

      case 'phasor':
        // STEP 3: Kinematic Phasors (x(t), v(t) lead by pi/2, a(t) anti-phase)
        return (
          <svg className="w-full max-w-lg h-24 sm:h-28 overflow-visible" viewBox="0 0 460 110">
            {/* Center Time Axis */}
            <line x1="30" y1="55" x2="430" y2="55" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="50" y1="15" x2="50" y2="95" stroke="#cbd5e1" strokeWidth="2" />
            <text x="435" y="58" fill="#94a3b8" fontSize="10" fontFamily="monospace">t</text>

            {/* Curve 1: Displacement x(t) = A cos(wt) in Oxford Blue */}
            <motion.path
              key={`phasor-x-${activeStep}`}
              d="M 50 25 Q 95 25, 140 55 T 230 85 T 320 55 T 410 25"
              fill="none"
              stroke="#0f172a"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            />

            {/* Curve 2: Velocity v(t) = -wA sin(wt) in Royal Sapphire (pi/2 lead) */}
            <motion.path
              key={`phasor-v-${activeStep}`}
              d="M 50 55 Q 95 85, 140 85 T 230 55 T 320 25 T 410 55"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2"
              strokeDasharray="5 3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
            />

            {/* Curve 3: Acceleration a(t) = -w^2 x(t) in Cyan Ocean Glow (anti-phase) */}
            <motion.path
              key={`phasor-a-${activeStep}`}
              d="M 50 85 Q 95 85, 140 55 T 230 25 T 320 55 T 410 85"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeInOut" }}
            />

            {/* Legend Labels */}
            <g transform="translate(60, 10)">
              <line x1="0" y1="0" x2="18" y2="0" stroke="#0f172a" strokeWidth="2.5" />
              <text x="24" y="3" fill="#0f172a" fontSize="9" fontFamily="monospace" fontWeight="bold">x(t) [Displacement]</text>

              <line x1="140" y1="0" x2="158" y2="0" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="4 2" />
              <text x="164" y="3" fill="#1d4ed8" fontSize="9" fontFamily="monospace" fontWeight="bold">v(t) [π/2 Lead]</text>

              <line x1="260" y1="0" x2="278" y2="0" stroke="#06b6d4" strokeWidth="2" />
              <text x="284" y="3" fill="#0891b2" fontSize="9" fontFamily="monospace" fontWeight="bold">a(t) = -ω²x [Anti-Phase π]</text>
            </g>
          </svg>
        );

      case 'energy':
      default:
        // STEP 4: Energy Invariant (Ek + Ep = 1/2 kA^2 Constant)
        return (
          <svg className="w-full max-w-lg h-24 sm:h-28 overflow-visible" viewBox="0 0 460 110">
            {/* Displacement Axis & Energy Axis */}
            <line x1="40" y1="95" x2="420" y2="95" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="230" y1="15" x2="230" y2="105" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="425" y="98" fill="#94a3b8" fontSize="10" fontFamily="monospace">x</text>
            <text x="220" y="108" fill="#64748b" fontSize="9" fontFamily="monospace">x=0</text>
            <text x="80" y="108" fill="#64748b" fontSize="9" fontFamily="monospace">-A</text>
            <text x="375" y="108" fill="#64748b" fontSize="9" fontFamily="monospace">+A</text>

            {/* Total Energy Constant Line in Gold Accent */}
            <motion.line
              key={`e-total-${activeStep}`}
              x1="90"
              y1="25"
              x2="370"
              y2="25"
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeDasharray="6 3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6 }}
            />
            <text x="378" y="28" fill="#d97706" fontSize="9" fontFamily="monospace" fontWeight="bold">E_total = 1/2 kA²</text>

            {/* Potential Energy Ep Parabola (concave up, peak at +/- A) in Sapphire */}
            <motion.path
              key={`e-potential-${activeStep}`}
              d="M 90 25 Q 230 95, 370 25"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeInOut" }}
            />

            {/* Kinetic Energy Ek Parabola (concave down, peak at x=0) in Cyan */}
            <motion.path
              key={`e-kinetic-${activeStep}`}
              d="M 90 95 Q 230 25, 370 95"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
            />

            {/* Critical Intersection Points at x = +/- A / sqrt(2) where Ek = Ep */}
            <circle cx="160" cy="60" r="4" fill="#10b981" />
            <circle cx="300" cy="60" r="4" fill="#10b981" />
            <text x="135" y="55" fill="#059669" fontSize="8.5" fontFamily="monospace" fontWeight="bold">Ek = Ep = 1/4 kA²</text>
            <text x="275" y="55" fill="#059669" fontSize="8.5" fontFamily="monospace" fontWeight="bold">x = ±A/√2</text>
          </svg>
        );
    }
  };

  const scrollToStep = (index: number) => {
    if (!containerRef.current) return;
    const scrollableRange = containerRef.current.offsetHeight - window.innerHeight;
    const targetY = containerRef.current.offsetTop + (index / 3) * scrollableRange;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
    setActiveStep(index);
  };

  const currentStep = steps[activeStep];

  return (
    <section 
      id="derivation" 
      ref={containerRef} 
      className="relative h-[300vh] bg-white border-t border-slate-200/60"
    >
      
      {/* STICKY FULL-VIEWPORT SCRATCHPAD SCENE */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 overflow-hidden">
        
        {/* SECTION HEADER & CONTEXT PILL */}
        <div className="text-center max-w-3xl mx-auto mb-2 sm:mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-[11px] font-semibold uppercase tracking-wider mb-1">
            [03 // INTERACTIVE DERIVATION LAB]
          </div>
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-[#0f172a]">
            First-Principles Derivation Lab
          </h2>
          <p className="text-xs text-slate-500 hidden sm:block">
            Scroll to scrub through live mathematical whiteboard derivations. Notice how examiner traps resolve in real-time.
          </p>
        </div>

        {/* STEP SCRUBBER PILLS */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-3">
          {steps.map((s, idx) => (
            <button
              key={s.stepNumber}
              onClick={() => scrollToStep(idx)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Step {s.stepNumber}
            </button>
          ))}
          <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400 pl-3">
            <Activity className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            <span>SCRUB: {Math.round(((activeStep + 1) / 4) * 100)}%</span>
          </div>
        </div>

        {/* ELEGANT DIGITAL WHITEBOARD SCRATCHPAD */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full max-w-4xl bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 relative overflow-hidden flex flex-col justify-between"
          style={{
            backgroundImage: 'radial-gradient(circle, #cbd5e1 1.2px, transparent 1.2px)',
            backgroundSize: '24px 24px',
          }}
        >
          
          {/* WHITEBOARD HEADER TOOLBAR */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="font-mono text-xs font-bold text-[#0f172a]">
                DIGITAL WHITEBOARD // reMarkable 2 Vector Simulation
              </span>
            </div>
            <div className="font-mono text-xs text-slate-500 hidden sm:block">
              SAMPLING: 240Hz • SUB-PIXEL INK
            </div>
          </div>

          {/* PARALLAX CONTAINER FOR MATH CONTENT */}
          <motion.div
            style={{ x: springX, y: springY }}
            className="py-2 sm:py-3 space-y-3"
          >
            
            {/* STEP TITLE & SUBTITLE */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="font-mono text-[11px] text-blue-600 font-semibold uppercase tracking-wider">
                  [{currentStep.stage}]
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0f172a]">
                  Step {currentStep.stepNumber}: {currentStep.title}
                </h3>
              </div>
              <div className="font-mono text-[11px] text-slate-500 bg-slate-100/90 border border-slate-200 px-2.5 py-0.5 rounded-md">
                TOPIC: Simple Harmonic Motion
              </div>
            </div>

            {/* KATEX WHITEBOARD RENDERING (OXFORD BLUE) WITH RESOLVE REVEAL */}
            <motion.div 
              key={`math-block-${activeStep}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-white/95 border border-slate-200/90 rounded-xl p-3 sm:p-4 shadow-xs space-y-2"
            >
              <div className="overflow-x-auto text-center py-1">
                <div className="text-[#0f172a] text-base sm:text-xl font-semibold">
                  <KatexMath math={currentStep.katexPrimary} block />
                </div>
              </div>

              <div className="overflow-x-auto text-center border-t border-slate-100 pt-2">
                <div className="text-blue-900 text-xs sm:text-base font-mono">
                  <KatexMath math={currentStep.katexSecondary} block />
                </div>
              </div>
            </motion.div>

            {/* DYNAMIC SVG LINE-DRAWING DIAGRAM IN OXFORD BLUE / SAPPHIRE / CYAN */}
            <div className="bg-white/90 border border-slate-200/80 rounded-xl p-2 sm:p-3 flex items-center justify-center min-h-[100px]">
              {renderStepDiagram(currentStep.diagramType)}
            </div>

            {/* SPRING-PHYSICS EXAMINER TRAP ALERT BADGE */}
            <motion.div
              key={`trap-badge-${activeStep}`}
              initial={{ scale: 0.95, opacity: 0, y: 8 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 450, damping: 22, delay: 0.15 }}
              className={`p-3 sm:p-3.5 rounded-xl border flex items-start gap-2.5 shadow-xs ${
                currentStep.trapType === 'gold'
                  ? 'bg-amber-50/80 border-amber-200 text-amber-950'
                  : 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
              }`}
            >
              {currentStep.trapType === 'gold' ? (
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              )}
              <div className="space-y-0.5 text-left">
                <div className="font-mono text-[11px] font-bold uppercase tracking-wider">
                  {currentStep.trapTitle}
                </div>
                <div className="text-xs leading-relaxed">
                  {currentStep.trapBody}
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* WHITEBOARD FOOTER */}
          <div className="flex items-center justify-between pt-2.5 border-t border-slate-200/70 text-xs font-mono text-slate-500">
            <div>
              PROOF {currentStep.stepNumber} / 04 RESOLVED
            </div>
            <div className="flex items-center gap-1.5 text-blue-600 font-semibold">
              <span>Next: {activeStep < 3 ? `Step 0${activeStep + 2}` : 'Zero-Decay Engine'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
