import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SecurityGovernanceSectionProps {
  onOpenSecurityModal?: () => void;
}

export function SecurityGovernanceSection({ onOpenSecurityModal }: SecurityGovernanceSectionProps) {
  return (
    <section className="w-full bg-[#FAF8F5] pt-12 pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Folder-Tab Chamfered Container */}
        <div
          className="relative w-full bg-[#1C1917] rounded-3xl p-8 sm:p-14 lg:p-16 text-white overflow-hidden shadow-2xl"
          style={{
            // Signature folder-tab cutout at top
            clipPath: 'polygon(0 0, 30% 0, 36% 36px, 100% 36px, 100% 100%, 0 100%)',
          }}
        >
          {/* Subtle Technical Grid Lines across the background */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '42px 42px',
            }}
          />

          <div className="relative z-10 max-w-3xl">
            {/* Top Tab Micro-header */}
            <div className="text-xs sm:text-[13px] font-semibold text-white tracking-wide uppercase mb-8 sm:mb-12 select-none">
              Safety & Governance
            </div>

            {/* Bold Display Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-bold tracking-[-0.035em] leading-[1.04] select-text">
              <span className="text-white">Protected across every</span>
              <br />
              <span className="text-[#9E988F]">mile of your journey.</span>
            </h2>

            {/* Body Prose */}
            <p className="mt-8 text-base sm:text-[17.5px] leading-relaxed text-[#9E988F] max-w-xl font-normal tracking-[-0.01em] select-text">
              Ridership protects riders, drivers, vehicles, and payments
              across one unified platform. Drivers are verified, trips are monitored,
              and every ride leaves an auditable safety trail.
            </p>

            {/* CTA Action Button */}
            <div className="mt-9">
              <button
                onClick={onOpenSecurityModal}
                className="inline-flex items-center gap-2.5 bg-[#84BFCB] hover:bg-[#92CBD7] text-[#0F172A] font-semibold px-5 py-3 rounded-md text-sm transition-all shadow-sm cursor-pointer active:scale-[0.99]"
              >
                <span>Explore Safety</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
