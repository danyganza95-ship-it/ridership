import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Shield, GitPullRequest, Database } from 'lucide-react';
import { ZaroLogo } from './Logos';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 1. Consultation / "Talk to our team" Modal
export function ConsultationModal({ isOpen, onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '50-250',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', company: '', teamSize: '50-250', notes: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] border border-[#DCD9D0] rounded-xl shadow-2xl overflow-hidden p-6 sm:p-8">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-neutral-900 rounded-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
              Request Received
            </h3>
            <p className="mt-2 text-sm text-neutral-600 max-w-sm mx-auto">
              Our operations coordination team will review your mobility requirements and connect within 1 business day.
            </p>
            <div className="mt-6 p-4 rounded-lg bg-white border border-[#E6E3DC] text-left text-xs font-mono space-y-1 text-neutral-700">
              <div><strong className="text-neutral-500">Contact:</strong> {formData.email}</div>
              <div><strong className="text-neutral-500">Org:</strong> {formData.company || 'Enterprise'} ({formData.teamSize} members)</div>
              <div><strong className="text-neutral-500">Routing:</strong> Direct Operations Specialist Pairing</div>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 px-5 py-2.5 bg-[#1A1816] text-white rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ZaroLogo className="w-5 h-5 text-neutral-900" />
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-500">
                Direct Operations Access
              </span>
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
              Talk to our team
            </h2>
            <p className="text-sm text-neutral-600 mt-1 mb-6">
              Learn how Ridership coordinates riders, verified drivers, motorcycles, and cars across Kigali, Rubavu, and Musanze with transparent fares.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jean-Paul Mugisha"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md border border-[#D5D1C7] bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-800 transition-all placeholder:text-neutral-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="jeanpaul@fleet.rw"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md border border-[#D5D1C7] bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-800 transition-all placeholder:text-neutral-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-1">
                    Organization / Fleet
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Kigali Express Fleet"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#D5D1C7] bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-800 transition-all placeholder:text-neutral-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-1">
                    Fleet / Team Size
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#D5D1C7] bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-800 transition-all"
                  >
                    <option value="1-20">1 - 20 vehicles</option>
                    <option value="20-50">20 - 50 vehicles</option>
                    <option value="50-250">50 - 250 vehicles</option>
                    <option value="250-1000">250 - 1,000 vehicles</option>
                    <option value="1000+">1,000+ regional network</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-1">
                  Primary Mobility Need
                </label>
                <textarea
                  rows={2}
                  placeholder="E.g., Corporate rider commutes, intercity cargo dispatch Kigali-Rubavu, driver fleet onboarding..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md border border-[#D5D1C7] bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-800 transition-all placeholder:text-neutral-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#1A1816] text-white py-3 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer"
              >
                <span>Request Mobility Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

// 2. "See how it works" Modal
export function HowItWorksModal({ isOpen, onClose }: ModalProps) {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      title: '1. Request Trip & Fare Estimate',
      subtitle: 'Transparent booking before departure',
      desc: 'Riders select pickup and destination across Kigali, Rubavu, or Musanze. Ridership calculates transparent fares with zero arbitrary surges before matching.',
      icon: <GitPullRequest className="w-5 h-5 text-indigo-600" />,
      detail: 'Calculates route distance, traffic telemetry, and vehicle type (motorcycle or car).',
    },
    {
      title: '2. Verified Driver Matching',
      subtitle: 'Vetted drivers and inspected vehicles',
      desc: 'Every driver on Ridership is background-verified with active driving license, valid vehicle inspection, and registered ownership before accepting rides.',
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      detail: 'Real-time dispatch matches the closest available verified driver within minutes.',
    },
    {
      title: '3. Live Trip & Wallet Settlement',
      subtitle: 'Secure, auditable journey completion',
      desc: 'Trips are tracked end-to-end with live GPS coordinates, in-app emergency SOS protocols, and instant cashless wallet deductions upon arrival.',
      icon: <Sparkles className="w-5 h-5 text-purple-600" />,
      detail: 'Rider wallet balance is updated instantly with complete ride receipt and driver payout ledger.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#DCD9D0] rounded-xl shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-neutral-900 rounded-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <ZaroLogo className="w-5 h-5 text-neutral-900" />
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-500">
            Mobility Coordination Engine
          </span>
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
          How Ridership Works
        </h2>
        <p className="text-sm text-neutral-600 mt-1 mb-6">
          Traditional hailing leaves riders stranded and drivers unpaid. Ridership unifies trip requests, fare estimates, and fleet dispatch in real time.
        </p>

        {/* Step selector tabs */}
        <div className="grid grid-cols-3 gap-2 mb-6 p-1 bg-[#EFECE5] rounded-lg">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`py-2 px-3 text-xs font-medium rounded-md transition-all text-center ${
                activeStep === idx
                  ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Step 0{idx + 1}
            </button>
          ))}
        </div>

        {/* Step Content */}
        <div className="p-5 rounded-lg border border-[#E6E3DC] bg-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-md bg-[#FAF8F5] border border-[#E8E5DD]">
              {steps[activeStep].icon}
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900">
                {steps[activeStep].title}
              </h3>
              <p className="text-xs text-neutral-500">
                {steps[activeStep].subtitle}
              </p>
            </div>
          </div>
          <p className="text-sm text-neutral-700 leading-relaxed">
            {steps[activeStep].desc}
          </p>
          <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono">
            <span>Trip Guarantee:</span>
            <span className="text-neutral-900 font-medium">{steps[activeStep].detail}</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 2))}
            className="text-xs font-medium text-neutral-600 hover:text-neutral-900 cursor-pointer"
          >
            ← Previous stage
          </button>
          <button
            onClick={() => setActiveStep((prev) => (prev < 2 ? prev + 1 : 0))}
            className="text-xs font-medium text-neutral-900 hover:underline cursor-pointer flex items-center gap-1"
          >
            <span>Next stage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// 3. "Sign in" Modal
export function SignInModal({ isOpen, onClose }: ModalProps) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-[#FAF8F5] border border-[#DCD9D0] rounded-xl shadow-2xl p-6 sm:p-7">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-neutral-900 rounded-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-10 h-10 rounded-full bg-white border border-[#E6E3DC] flex items-center justify-center mx-auto mb-3 shadow-2xs">
            <ZaroLogo className="w-5 h-5 text-neutral-900" />
          </div>
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight font-brand uppercase">
            Sign in to RIDERSHIP
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Access your rider account, driver portal, or fleet management
          </p>
        </div>

        {sent ? (
          <div className="text-center py-4">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-sm font-semibold text-neutral-900">Magic Link Dispatched</div>
            <p className="text-xs text-neutral-500 mt-1">
              Check {email} for your secure sign-in token.
            </p>
            <button
              onClick={onClose}
              className="mt-5 w-full py-2 bg-[#1A1816] text-white rounded-md text-xs font-medium hover:bg-neutral-800"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {/* SSO Providers */}
            <button
              onClick={() => setSent(true)}
              className="w-full py-2.5 px-3 bg-white border border-[#D5D1C7] rounded-md text-xs font-medium text-neutral-800 hover:bg-neutral-50 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            <button
              onClick={() => setSent(true)}
              className="w-full py-2.5 px-3 bg-white border border-[#D5D1C7] rounded-md text-xs font-medium text-neutral-800 hover:bg-neutral-50 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Shield className="w-4 h-4 text-neutral-600" />
              <span>Sign in with Fleet SSO / Partner Login</span>
            </button>

            <div className="relative my-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E6E3DC]" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase font-mono">
                <span className="bg-[#FAF8F5] px-2 text-neutral-400">or account email</span>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
              className="space-y-3"
            >
              <input
                type="email"
                required
                placeholder="you@email.rw"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-[#D5D1C7] bg-white text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-800 placeholder:text-neutral-400"
              />
              <button
                type="submit"
                className="w-full py-2 bg-[#1A1816] text-white rounded-md text-xs font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Send Magic Link
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

// 4. "Explore Security" Modal
export function SecurityModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const securityPillars = [
    {
      title: 'Verified Drivers & Inspected Vehicles',
      desc: 'Every driver undergoes strict identity checks, background screening, and annual vehicle roadworthiness tests before taking trips.',
      tag: '100% VERIFIED DRIVERS',
    },
    {
      title: 'End-to-End Trip Tracking & Audit',
      desc: 'Every pickup, route detour, dropoff, and fare calculation is logged in real-time with continuous GPS telemetry.',
      tag: 'REAL-TIME GPS AUDIT',
    },
    {
      title: 'Secure Digital Wallet & Fares',
      desc: 'Transparent fares calculated upfront. Riders pay seamlessly from their wallet with zero cash disputes and instant driver settlements.',
      tag: 'INSTANT WALLET PAY',
    },
    {
      title: '24/7 Operations & Emergency SOS',
      desc: 'Real-time monitoring agents and one-tap in-app emergency SOS dispatch for immediate assistance across any journey.',
      tag: '24/7 MONITORING AGENTS',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#1C1917] border border-[#3E3A35] text-white rounded-2xl shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-white rounded-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#84BFCB]" />
          <span className="text-xs font-mono tracking-widest uppercase text-[#84BFCB]">
            Ridership Trust & Safety Architecture
          </span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Safety & Verification Across Every Journey
        </h2>
        <p className="text-xs sm:text-sm text-[#A8A29E] mt-1 mb-6">
          How Ridership delivers rider-first protection for passengers, drivers, and fleet operators.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {securityPillars.map((p, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#292524] border border-[#3E3A35] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#1C1917] text-[#84BFCB] border border-[#44403C]">
                  {p.tag}
                </span>
                <h3 className="text-sm font-semibold text-white mt-2 mb-1">
                  {p.title}
                </h3>
                <p className="text-xs text-[#A8A29E] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-[#3E3A35] flex items-center justify-between text-xs text-[#A8A29E] font-mono">
          <span>Operational Coverage: Kigali · Rubavu · Musanze | Safety-first mobility</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#84BFCB] text-[#0F172A] font-semibold rounded-md hover:bg-[#92CBD7] transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}

