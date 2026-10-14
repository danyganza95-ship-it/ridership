import React from 'react';
import { ConvergenceLogo, PolyAILogo, SalesforceLogo, HuggingFaceLogo } from './Logos';

export function TrustBar() {
  return (
    <div className="w-full border-t border-[#E6E3DC] mt-16 pt-7 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: BUILT BY THE TEAM FROM */}
          <div className="lg:col-span-8 lg:border-r lg:border-[#E6E3DC] lg:pr-8">
            <div className="text-[11px] font-mono tracking-widest text-[#8F8B81] uppercase mb-3 select-none">
              BUILT BY THE TEAM FROM
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* Card 1: Convergence */}
              <div className="border border-dashed border-[#D5D1C7] rounded-md px-5 py-3.5 flex items-center justify-center bg-white/40 hover:bg-white hover:border-neutral-400 transition-all duration-200">
                <ConvergenceLogo />
              </div>

              {/* Card 2: PolyAI */}
              <div className="border border-dashed border-[#D5D1C7] rounded-md px-5 py-3.5 flex items-center justify-center bg-white/40 hover:bg-white hover:border-neutral-400 transition-all duration-200">
                <PolyAILogo />
              </div>

              {/* Card 3: Salesforce */}
              <div className="border border-dashed border-[#D5D1C7] rounded-md px-5 py-3.5 flex items-center justify-center bg-white/40 hover:bg-white hover:border-neutral-400 transition-all duration-200">
                <SalesforceLogo />
              </div>
            </div>
          </div>

          {/* Right Column: BACKED BY */}
          <div className="lg:col-span-4">
            <div className="text-[11px] font-mono tracking-widest text-[#8F8B81] uppercase mb-3 select-none">
              BACKED BY
            </div>
            <div className="w-full">
              {/* Card 4: Hugging Face */}
              <div className="border border-dashed border-[#D5D1C7] rounded-md px-5 py-3.5 flex items-center justify-center bg-white/40 hover:bg-white hover:border-neutral-400 transition-all duration-200">
                <HuggingFaceLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
