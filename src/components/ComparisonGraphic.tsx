import React, { useState, useEffect } from 'react';
import { ZaroLogo } from './Logos';
import {
  TrendingUp,
  Code,
  BookOpen,
  FileText,
  Hexagon,
  Calendar,
  Layers,
} from 'lucide-react';

// Notion SVG Logo
function NotionIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.093-.373L17.873 2.15c-.466-.373-1.12-.653-2.148-.56L2.64 2.617c-.373.047-.466.327-.327.56l2.146 1.031zm1.354 3.733v12.27c0 .7.373 1.026 1.213 1.026.7 0 1.26-.046 2.8-.14 1.4-.093 1.82-.466 1.82-1.353V8.407c0-.793-.42-1.073-1.4-.98L5.813 7.94zm9.333-.653c-.327 0-.56.187-.56.56v11.85c0 .374.233.56.56.56.327 0 .56-.186.56-.56V7.848c0-.373-.233-.56-.56-.56zm-1.866.56v11.85c0 .7.373 1.026 1.213 1.026.7 0 1.26-.046 2.8-.14 1.4-.093 1.82-.466 1.82-1.353V8.407c0-.793-.42-1.073-1.4-.98l-4.433.513z" />
    </svg>
  );
}

// Salesforce mini cloud icon
function MiniSalesforceIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#00A1E0" className={className}>
      <path d="M9.8 4.5a5.2 5.2 0 0 1 4.5 2.6 4.7 4.7 0 0 1 4.8 4.6c0 .3 0 .6-.1.9A4.1 4.1 0 0 1 22 16.3c0 2.3-1.9 4.2-4.2 4.2H6.4A5.4 5.4 0 0 1 1 15.1c0-2.6 1.9-4.8 4.4-5.3a5.4 5.4 0 0 1 4.4-5.3z" />
    </svg>
  );
}

export function ComparisonGraphic() {
  const [secondsAgo, setSecondsAgo] = useState(3);

  // Subtle real-time seconds ticker for living feel
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsAgo((prev) => (prev >= 18 ? 3 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mt-14 border border-[#E6E3DC] rounded-2xl p-3 sm:p-4 bg-white/40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        {/* ================= LEFT PANEL: KNOWLEDGE GRAPH (STALE) ================= */}
        <div className="bg-[#EBE8E1] rounded-xl p-6 sm:p-9 flex flex-col justify-between">
          <div>
            {/* Top Tag Badges */}
            <div className="flex items-center gap-2 select-none">
              <span className="px-2.5 py-0.5 rounded-full border border-neutral-300/80 bg-white/70 text-xs font-medium text-neutral-700">
                Static Fleet Dispatch
              </span>
              <span className="px-2.5 py-0.5 rounded-full border border-orange-300/80 bg-orange-50 text-xs font-semibold text-orange-800 flex items-center gap-1.5">
                <Hexagon className="w-3 h-3 fill-orange-600 text-orange-600" />
                <span>Stale</span>
              </span>
            </div>

            {/* Headline & Subtitle */}
            <h3 className="text-2xl sm:text-[28px] font-bold text-[#1A1816] tracking-tight leading-snug mt-5">
              Static fleet lists are updated once.
            </h3>
            <p className="text-[15px] sm:text-base text-[#66635C] mt-2 mb-8 font-normal">
              Accurate on the morning of print.
            </p>
          </div>

          {/* Inner Floating Card */}
          <div className="bg-[#F6F5F0] rounded-2xl p-6 sm:p-7 border border-[#DFDBD1] shadow-2xs">
            {/* Top Metric */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-base sm:text-[17px] font-medium text-[#1A1816]">
                Active availability:
              </span>
              <span className="border border-dashed border-neutral-400 font-bold px-2.5 py-0.5 text-base sm:text-lg text-neutral-900 rounded-md font-mono">
                41%
              </span>
            </div>

            {/* File Rows List */}
            <div className="space-y-3">
              {/* Row 1 */}
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#D5D1C7] bg-white text-xs font-mono text-neutral-800 shadow-2xs">
                  <span className="p-0.5 rounded bg-emerald-100 text-emerald-800">
                    <TrendingUp className="w-3 h-3" />
                  </span>
                  <span>kigali-central-ranks.csv</span>
                </div>
                <span className="font-mono text-xs tracking-wider text-neutral-400 uppercase">
                  JAN 2026
                </span>
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#D5D1C7] bg-white text-xs font-mono text-neutral-800 shadow-2xs">
                  <span className="p-0.5 rounded bg-purple-100 text-purple-700">
                    <Code className="w-3 h-3" />
                  </span>
                  <span>rubavu-moto-rates.pdf</span>
                </div>
                <span className="font-mono text-xs tracking-wider text-neutral-400 uppercase">
                  JAN 2026
                </span>
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#D5D1C7] bg-white text-xs font-mono text-neutral-800 shadow-2xs">
                  <span className="p-0.5 rounded bg-cyan-100 text-cyan-800">
                    <BookOpen className="w-3 h-3" />
                  </span>
                  <span>musanze-tourist-cabs.txt</span>
                </div>
                <span className="font-mono text-xs tracking-wider text-neutral-400 uppercase">
                  JAN 2026
                </span>
              </div>

              {/* Row 4 (Fading / Stale) */}
              <div className="flex items-center justify-between gap-3 opacity-45">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#E0DCD2] bg-white/70 text-xs font-mono text-neutral-700">
                  <FileText className="w-3 h-3 text-neutral-400" />
                  <span>driver-duty-roster.csv</span>
                </div>
                <span className="font-mono text-xs tracking-wider text-neutral-400 uppercase">
                  JAN 2026
                </span>
              </div>

              {/* Row 5 (Heavily Faded) */}
              <div className="flex items-center justify-between gap-3 opacity-25">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#E0DCD2] bg-white/50 text-xs font-mono text-neutral-600">
                  <FileText className="w-3 h-3 text-neutral-400" />
                  <span>station-shifts.log</span>
                </div>
                <span className="font-mono text-xs tracking-wider text-neutral-400 uppercase">
                  JAN 2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT PANEL: ZARO (DYNAMIC) ================= */}
        <div className="bg-[#E7E2FA] rounded-xl p-6 sm:p-9 flex flex-col justify-between relative overflow-visible">
          {/* Overlapping Floating App Badges at Top Right */}
          <div className="absolute -top-3 right-16 z-20 w-12 h-12 bg-white rounded-2xl shadow-md border border-purple-100 flex items-center justify-center">
            <ZaroLogo className="w-6 h-6 text-neutral-900" />
          </div>
          <div className="absolute top-7 right-4 z-20 w-12 h-12 bg-white rounded-2xl shadow-md border border-purple-100 flex items-center justify-center">
            <NotionIcon className="w-6 h-6 text-neutral-900" />
          </div>

          <div>
            {/* Top Tag Badges */}
            <div className="flex items-center gap-2 select-none">
              <span className="px-2.5 py-0.5 rounded-full border border-purple-200/80 bg-white/80 text-xs font-semibold text-neutral-900 flex items-center gap-1.5 shadow-2xs">
                <ZaroLogo className="w-3 h-3 text-neutral-900" />
                <span>Ridership</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full border border-emerald-200/80 bg-white/80 text-xs font-medium text-neutral-800 flex items-center gap-1.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live</span>
              </span>
            </div>

            {/* Headline & Subtitle */}
            <h3 className="text-2xl sm:text-[28px] font-bold text-[#1A1816] tracking-tight leading-snug mt-5">
              Ridership coordinates dynamically.
            </h3>
            <p className="text-[15px] sm:text-base text-[#66635C] mt-2 mb-8 font-normal">
              Synchronized with every moving trip.
            </p>
          </div>

          {/* Inner Floating Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-purple-100 shadow-sm relative z-10">
            {/* Top Metric */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-base sm:text-[17px] font-medium text-[#1A1816]">
                Active availability:
              </span>
              <span className="bg-[#DDD6FE] text-[#5B21B6] font-bold px-3 py-0.5 text-base sm:text-lg rounded-md font-mono">
                99%
              </span>
            </div>

            {/* Live File Rows List */}
            <div className="space-y-3">
              {/* Row 1 */}
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#DCD9D0] bg-[#FAF8F5] text-xs font-mono text-neutral-800 shadow-2xs">
                  <span className="p-0.5 rounded bg-emerald-100 text-emerald-800">
                    <Calendar className="w-3 h-3" />
                  </span>
                  <span>kigali-nyarugenge-dispatch.gps</span>
                </div>
                <span className="font-mono text-xs tracking-wider text-neutral-500 uppercase">
                  {secondsAgo}S AGO
                </span>
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#DCD9D0] bg-[#FAF8F5] text-xs font-mono text-neutral-800 shadow-2xs">
                  <span className="p-0.5 rounded bg-neutral-100 text-neutral-900">
                    <NotionIcon className="w-3 h-3" />
                  </span>
                  <span>rubavu-moto-border.live</span>
                </div>
                <span className="font-mono text-xs tracking-wider text-neutral-500 uppercase">
                  {secondsAgo + 3}S AGO
                </span>
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#DCD9D0] bg-[#FAF8F5] text-xs font-mono text-neutral-800 shadow-2xs">
                  <span className="p-0.5 rounded bg-blue-100 text-blue-700">
                    <Layers className="w-3 h-3" />
                  </span>
                  <span>musanze-kinigi-fare.live</span>
                </div>
                <span className="font-mono text-xs tracking-wider text-neutral-500 uppercase">
                  {secondsAgo + 6}S AGO
                </span>
              </div>

              {/* Row 4 */}
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#DCD9D0] bg-[#FAF8F5] text-xs font-mono text-neutral-800 shadow-2xs">
                  <span className="p-0.5 rounded bg-sky-100 text-sky-800">
                    <MiniSalesforceIcon className="w-3 h-3" />
                  </span>
                  <span>rider-wallet-reconciliation.sync</span>
                </div>
                <span className="font-mono text-xs tracking-wider text-neutral-500 uppercase">
                  {secondsAgo + 9}S AGO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
