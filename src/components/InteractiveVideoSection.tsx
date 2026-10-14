import React, { useState, useEffect, useRef } from 'react';
import { ZaroLogo } from './Logos';
import { Play, Pause, RotateCcw, ShieldCheck, ShieldAlert, FileCheck, Check, X, Lock } from 'lucide-react';

const KELLY_AVATAR = '/src/assets/images/card_license_everyone_1791986993350.jpg';

type VideoStage = 'allowed' | 'blocked' | 'audited';

interface StageConfig {
  id: VideoStage;
  label: string;
  requestText: string;
  statusText: string;
  responseText: string;
  detail: string;
  badgeType: 'success' | 'danger' | 'info';
}

const STAGES: StageConfig[] = [
  {
    id: 'allowed',
    label: 'Allowed.',
    requestText: "Book motorcycle ride from Kigali Heights to Kimironko Market",
    statusText: 'Verifying rider balance and nearby drivers...',
    responseText: "Ride confirmed. Estimated fare RWF 1,200 deducted from wallet. Driver Jean-Paul dispatched (TVS Moto, 3 mins away).",
    detail: 'Automated dispatch verified sufficient rider wallet balance and driver valid license and insurance.',
    badgeType: 'success',
  },
  {
    id: 'blocked',
    label: 'Blocked.',
    requestText: "Accept trip with expired vehicle inspection certificate",
    statusText: 'Checking driver verification...',
    responseText: "Blocked by Safety Protocol #08: Vehicle inspection expired. Driver account temporarily restricted from dispatch.",
    detail: 'Attempted pickup prevented before dispatching rider. Automated notification sent to driver support desk.',
    badgeType: 'danger',
  },
  {
    id: 'audited',
    label: 'Audited.',
    requestText: "Generate trip compliance and fare audit for Musanze weekend routes",
    statusText: 'Compiling trip ledger...',
    responseText: "Audit trace verified: 480 trips completed, 0 fare discrepancies, 100% verified route telemetry.",
    detail: 'Every trip is recorded with GPS coordinates, fare calculation, rider confirmation, and driver credentials.',
    badgeType: 'info',
  },
];

export function InteractiveVideoSection() {
  const [activeStage, setActiveStage] = useState<VideoStage>('allowed');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [showResponse, setShowResponse] = useState<boolean>(true);

  const currentStageConfig = STAGES.find((s) => s.id === activeStage) || STAGES[0];

  // Auto-play cycling mechanism simulating a live product video
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 6000; // 6 seconds per stage
    const stepInterval = 60; // 60ms progress updates

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Switch to next stage
          setActiveStage((current) => {
            if (current === 'allowed') return 'blocked';
            if (current === 'blocked') return 'audited';
            return 'allowed';
          });
          return 0;
        }
        return prev + (stepInterval / intervalTime) * 100;
      });
    }, stepInterval);

    return () => clearInterval(progressTimer);
  }, [isPlaying]);

  // Stage transition effect simulating verification delay
  useEffect(() => {
    setIsChecking(true);
    setShowResponse(false);

    const checkTimer = setTimeout(() => {
      setIsChecking(false);
      setShowResponse(true);
    }, 900);

    return () => clearTimeout(checkTimer);
  }, [activeStage]);

  const handleStageSelect = (stage: VideoStage) => {
    setActiveStage(stage);
    setProgress(0);
  };

  return (
    <section className="w-full bg-[#0D0B0A] text-white py-20 lg:py-28 relative overflow-hidden select-none">
      {/* Subtle background grid lines */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-3 border-x border-white">
          <div className="border-r border-white h-full" />
          <div className="border-r border-white h-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* ================= LEFT COLUMN: STAGES SELECTOR ================= */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            {STAGES.map((stage) => {
              const isActive = activeStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => handleStageSelect(stage.id)}
                  className="flex items-center gap-4 text-left transition-all duration-300 group cursor-pointer"
                >
                  {/* Square Bullet: active is bright white, inactive is dimmed */}
                  <span
                    className={`w-3.5 h-3.5 rounded-[2px] transition-all duration-300 shrink-0 ${
                      isActive
                        ? 'bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]'
                        : 'bg-[#2B2724] group-hover:bg-[#4A4540]'
                    }`}
                  />
                  <span
                    className={`text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight leading-none transition-colors duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-[#383430] group-hover:text-[#615C56]'
                    }`}
                  >
                    {stage.label}
                  </span>
                </button>
              );
            })}

            {/* Current Stage Explanation Note */}
            <div className="pt-6 border-t border-[#23201D] text-xs font-mono text-[#8C867E] max-w-sm">
              <span className="text-white font-semibold">Safety & Dispatch Guard:</span>{' '}
              {currentStageConfig.detail}
            </div>
          </div>

          {/* ================= CENTER / RIGHT: VIDEO DEVICE PLAYER ================= */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* The Video Device Viewport */}
            <div className="relative w-full max-w-[460px] aspect-[9/13] sm:aspect-[9/12] bg-[#D7D5CE] rounded-t-[44px] rounded-b-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden border border-[#524E48]">
              {/* Central Play/Pause Watermark Overlay (As shown in screenshot) */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 z-30 flex items-center justify-center bg-black/5 hover:bg-black/10 transition-colors cursor-pointer group"
                aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-neutral-900 shadow-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  {isPlaying ? (
                    <Pause className="w-6 h-6 fill-neutral-900 text-neutral-900" />
                  ) : (
                    <Play className="w-6 h-6 fill-neutral-900 text-neutral-900 ml-1" />
                  )}
                </div>
              </button>

              {/* Top Chat Flow Messages */}
              <div className="space-y-6 pt-6 relative z-10">
                {/* 1. Kelly R User Message */}
                <div className="flex items-start gap-3.5">
                  <img
                    src={KELLY_AVATAR}
                    alt="Aline M."
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-lg object-cover border border-neutral-400 shadow-xs shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-neutral-900">Aline M.</span>
                      <span className="text-xs text-neutral-500 font-mono">1 minute ago</span>
                    </div>
                    <div className="mt-1 text-sm font-medium text-neutral-800 leading-snug">
                      {currentStageConfig.requestText}
                    </div>
                  </div>
                </div>

                {/* 2. Zaro Policy Response Message */}
                <div className="flex items-start gap-3.5 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1816] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <ZaroLogo className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-neutral-900">Ridership</span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.2 rounded bg-neutral-300 text-neutral-800">
                        APP
                      </span>
                      <span className="text-xs text-neutral-500 font-mono">Just now</span>
                    </div>

                    {/* Status Spinner or Resolved Card */}
                    {isChecking ? (
                      <div className="mt-2 text-xs font-mono text-neutral-600 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
                        <span>{currentStageConfig.statusText}</span>
                      </div>
                    ) : showResponse ? (
                      <div className="mt-2 text-xs font-mono text-neutral-700 animate-in fade-in duration-300">
                        {currentStageConfig.id === 'allowed' && (
                          <div className="p-3 rounded-lg bg-emerald-100/70 border border-emerald-300 text-emerald-950 font-sans text-xs">
                            <div className="flex items-center gap-1.5 font-bold text-emerald-900 mb-0.5">
                              <Check className="w-3.5 h-3.5 text-emerald-700" />
                              <span>Allowed: Ride Dispatched</span>
                            </div>
                            <p className="mt-1 leading-relaxed text-[11.5px]">
                              {currentStageConfig.responseText}
                            </p>
                          </div>
                        )}

                        {currentStageConfig.id === 'blocked' && (
                          <div className="p-3 rounded-lg bg-rose-100/80 border border-rose-300 text-rose-950 font-sans text-xs">
                            <div className="flex items-center gap-1.5 font-bold text-rose-900 mb-0.5">
                              <Lock className="w-3.5 h-3.5 text-rose-700" />
                              <span>Blocked: Safety Verification</span>
                            </div>
                            <p className="mt-1 leading-relaxed text-[11.5px]">
                              {currentStageConfig.responseText}
                            </p>
                          </div>
                        )}

                        {currentStageConfig.id === 'audited' && (
                          <div className="p-3 rounded-lg bg-indigo-100/80 border border-indigo-300 text-indigo-950 font-sans text-xs">
                            <div className="flex items-center gap-1.5 font-bold text-indigo-900 mb-0.5">
                              <ShieldCheck className="w-3.5 h-3.5 text-indigo-700" />
                              <span>Audited: Trip Ledger Verified</span>
                            </div>
                            <p className="mt-1 leading-relaxed text-[11.5px]">
                              {currentStageConfig.responseText}
                            </p>
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Bottom Video Progress Scrub Bar */}
              <div className="relative z-20 pt-4 border-t border-neutral-400/40">
                <div className="w-full bg-neutral-400/50 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-neutral-900 h-full rounded-full transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-neutral-700">
                  <span>
                    Stage: <strong className="uppercase">{activeStage}</strong>
                  </span>
                  <span>{isPlaying ? 'Simulating live' : 'Paused'}</span>
                </div>
              </div>
            </div>

            {/* Video Controls Bar below the player */}
            <div className="mt-4 flex items-center gap-3 text-xs font-mono text-neutral-400">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1F1C1A] text-white hover:bg-[#2C2825] transition-colors"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
              <button
                onClick={() => {
                  setProgress(0);
                  setActiveStage('allowed');
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1F1C1A] text-white hover:bg-[#2C2825] transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Replay</span>
              </button>
              <span className="text-neutral-500 hidden sm:inline">
                Click Allowed / Blocked / Audited on left to inspect dispatch stages
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
