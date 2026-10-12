import React, { useState } from "react";
import { Send, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, HelpCircle, Clock } from "lucide-react";

export const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const subject = "Weekend Tuition Consultation";
  const [slotPreference, setSlotPreference] = useState<string>("Saturday 3:00 PM – 4:30 PM");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "When do live sessions take place?",
      a: "Live sessions run exclusively on Saturday and Sunday between 3:00 PM and 9:00 PM. This schedule guarantees Musa's undivided analytical focus for every student."
    },
    {
      q: "How do online sessions run technically?",
      a: "Sessions take place over high-definition Zoom or private Discord voice/video rooms. Musa shares a real-time, low-latency live feed of his reMarkable 2 e-ink tablet, handwriting every mathematical proof and diagram with fountain-pen clarity. Notes are exported immediately as searchable vector PDFs into the student portal."
    },
    {
      q: "Which exam boards and syllabuses are covered?",
      a: "For A-Level: Mathematics (Pure & Applied), Physics (OCR A, AQA, Edexcel), Computer Science (AQA, OCR), and Economics (Edexcel A, AQA). For GCSE: Higher Maths, Triple Science (Chemistry, Physics, Biology), Computer Science, and English Language across AQA, Edexcel, and OCR."
    },
    {
      q: "How does MacroStudyHub support homeschoolers?",
      a: "We provide structured full-syllabus sequencing, exam technique for independent candidates, and practical endorsement preparation."
    },
    {
      q: "What payment methods are accepted?",
      a: "We prioritize zero-fee Direct Bank Transfer (BACS) for monthly billing to keep student rates as competitive as possible. Invoiced monthly with no long-term tie-ins."
    },
    {
      q: "What is your teaching methodology?",
      a: "First-principles derivations rather than static formula memorisation, reinforced with weekly Zero-Decay recall sheets and past paper keyword mark-scheme analysis."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const payload = {
      access_key: "46d34617-4199-43b6-b72a-240dbeabf8be",
      subject: `MacroStudyHub Direct Inquiry: ${subject} from ${name} (${phone})`,
      name: name,
      email: email,
      phone: phone,
      inquiry_subject: subject,
      preferred_weekend_slot: slotPreference,
      message: message,
      submitted_at: new Date().toISOString()
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg("Submission error. Please check your phone number and email.");
      }
    } catch {
      setErrorMsg("Network error. Please try again in a few moments.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-8 overflow-hidden bg-slate-950">
      <div className="radial-glow w-[500px] h-[500px] bg-blue-700/10 top-1/4 right-10" />
      <div className="radial-glow w-[400px] h-[400px] bg-cyan-600/10 bottom-10 left-10" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* FAQ SECTION */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 uppercase">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Everything You Need to Know</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Clear answers regarding lesson mechanics, weekend scheduling, exam boards, and pricing.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-cyan-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* DIRECT CONSULTATION FORM & PROTOCOL */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: CONSULTATION PROTOCOL & SAFEGUARDING */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">
                  Direct Founder Contact
                </span>
                <h3 className="text-2xl font-black text-white mt-1">Book an Admissions Call</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Parents and students are invited to submit their contact details below. Musa Ahmed personally reviews each submission and provides a direct consultation call to discuss syllabus blockers and lock in a weekend slot.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-3 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 text-cyan-300 font-bold">
                  <Clock className="w-4 h-4" />
                  <span>Teaching Window: Saturday & Sunday</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Anytime from 3:00 PM to 9:00 PM UK Time.
                </p>
                <div className="flex items-center gap-2 text-emerald-400 font-bold pt-2 border-t border-white/5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>DBS Certified & Full Safeguarding Standards</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 to-slate-900 border border-blue-500/20 text-xs text-slate-300 space-y-2">
              <span className="font-mono font-bold text-cyan-300 uppercase block">Confidentiality Guarantee</span>
              <p>
                Your submission is routed securely to Musa Ahmed’s primary encrypted mailbox. We never sell, distribute, or share client details.
              </p>
            </div>
          </div>

          {/* RIGHT: DIRECT EMAIL SUBMISSION FORM */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="h-14 w-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-white">Inquiry Received by Musa</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                  Thank you for reaching out. Musa will review your inquiry and call your phone number directly to discuss your weekend timetable.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-mono text-cyan-400 border border-cyan-500/30 hover:bg-cyan-950/40 mt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">
                    Direct Inquiry
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">Send a Message to Musa</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Have specific questions or need a custom weekend schedule?
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Imran Khan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07123 456789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-white text-xs font-mono focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Preferred Weekend Window
                    </label>
                    <select
                      value={slotPreference}
                      onChange={(e) => setSlotPreference(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-900 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Saturday 3:00 PM – 4:30 PM">Saturday 3:00 PM – 4:30 PM</option>
                      <option value="Saturday 5:00 PM – 6:30 PM">Saturday 5:00 PM – 6:30 PM</option>
                      <option value="Saturday 7:00 PM – 8:30 PM">Saturday 7:00 PM – 8:30 PM</option>
                      <option value="Sunday 3:00 PM – 4:30 PM">Sunday 3:00 PM – 4:30 PM</option>
                      <option value="Sunday 5:00 PM – 6:30 PM">Sunday 5:00 PM – 6:30 PM</option>
                      <option value="Sunday 7:00 PM – 8:30 PM">Sunday 7:00 PM – 8:30 PM</option>
                      <option value="Flexible (between Sat/Sun 3-9 PM)">Flexible (between Sat/Sun 3-9 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    Message / Questions *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details on the student's exam board (e.g. Edexcel Maths, OCR Physics) and current grades..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs font-mono text-rose-400">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full text-xs font-mono font-bold text-slate-950 bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-400 hover:opacity-95 disabled:opacity-50 flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 mt-2"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message to Musa...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Email to Musa</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
