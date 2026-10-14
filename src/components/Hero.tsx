import React from 'react';
import { ArrowRight } from 'lucide-react';
import { KnowledgeDiagram } from './KnowledgeDiagram';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenHowItWorks: () => void;
}

export function Hero({ onOpenConsultation, onOpenHowItWorks }: HeroProps) {
  return (
    <section className="relative pt-6 pb-6 lg:pt-12 lg:pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Value Prop & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Display Headline */}
            <h1 className="text-6xl sm:text-7xl lg:text-[84px] font-bold tracking-[-0.035em] text-[#1A1816] leading-[1.01] select-text">
              Smarter<br />
              mobility<br />
              is here.
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="mt-7 text-lg sm:text-[19.5px] leading-relaxed text-[#5F5C55] max-w-[480px] font-normal tracking-[-0.01em]">
              A rider-first platform connecting verified drivers, transparent fares,
              and live trip tracking across Kigali, Rubavu, and Musanze.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              {/* Primary CTA */}
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 bg-[#1A1816] text-white px-5 py-3 rounded-md text-[14.5px] font-medium hover:bg-neutral-800 transition-all shadow-xs cursor-pointer active:scale-[0.99]"
              >
                <span>Talk to our team</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onOpenHowItWorks}
                className="inline-flex items-center bg-white border border-[#D5D1C7] text-[#1A1816] px-5 py-3 rounded-md text-[14.5px] font-medium hover:bg-[#F7F5F0] hover:border-neutral-400 transition-all shadow-2xs cursor-pointer active:scale-[0.99]"
              >
                <span>See how it works</span>
              </button>
            </div>
          </div>

          {/* Right Column: Isometric 3D Visualization */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <KnowledgeDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
