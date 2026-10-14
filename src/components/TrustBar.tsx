import React, { useState, useEffect } from 'react';
import {
  SpiroLogo,
  AmpersandLogo,
  SafeBodaLogo,
  BasiGoLogo,
  HuggingFaceLogo,
} from './Logos';

interface LogoItem {
  id: string;
  name: string;
  component: React.ReactNode;
}

interface LogoRotatorBoxProps {
  logos: LogoItem[];
  intervalMs?: number;
  initialDelayMs?: number;
}

function LogoRotatorBox({ logos, intervalMs = 3600, initialDelayMs = 0 }: LogoRotatorBoxProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || logos.length <= 1) return;

    let timer: NodeJS.Timeout;
    const initialTimer = setTimeout(() => {
      timer = setInterval(() => {
        triggerFlip();
      }, intervalMs);
    }, initialDelayMs);

    return () => {
      clearTimeout(initialTimer);
      if (timer) clearInterval(timer);
    };
  }, [isHovered, activeIndex, intervalMs, initialDelayMs, logos.length]);

  const triggerFlip = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % logos.length);
      setIsFlipping(false);
    }, 280);
  };

  const handleManualSelect = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (index === activeIndex || isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsFlipping(false);
    }, 280);
  };

  const currentLogo = logos[activeIndex];

  return (
    <div
      onClick={triggerFlip}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden border border-dashed border-[#D5D1C7] rounded-md px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-center bg-white/50 hover:bg-white hover:border-neutral-400 transition-all duration-300 min-h-[98px] sm:min-h-[110px] cursor-pointer group shadow-[0_1px_3px_rgba(0,0,0,0.02)] select-none"
      title="Click to switch operator"
      style={{ perspective: '900px' }}
    >
      {/* Dynamic FLIP / Morph Logo Container */}
      <div
        className="w-full flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: isFlipping
            ? 'rotateX(80deg) translateY(-8px) scale(0.92)'
            : 'rotateX(0deg) translateY(0) scale(1)',
          opacity: isFlipping ? 0 : 1,
          filter: isFlipping ? 'blur(3px)' : 'blur(0px)',
          transformOrigin: '50% 50%',
        }}
      >
        {currentLogo.component}
      </div>

      {/* Subtle Rotator Indicator Pill & Dots */}
      <div className="absolute bottom-2 right-3 flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-tight text-[#8F8B81] hidden sm:inline-block">
          {activeIndex + 1}/{logos.length}
        </span>
        <div className="flex items-center gap-1">
          {logos.map((logo, idx) => (
            <button
              key={logo.id}
              onClick={(e) => handleManualSelect(idx, e)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-4 bg-neutral-800'
                  : 'w-1.5 bg-[#D5D1C7] hover:bg-neutral-400'
              }`}
              aria-label={`Switch to ${logo.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TrustBar() {
  // Rectangle 1: Spiro & Ampersand
  const rectangle1Logos: LogoItem[] = [
    {
      id: 'spiro',
      name: 'Spiro',
      component: <SpiroLogo />,
    },
    {
      id: 'ampersand',
      name: 'Ampersand',
      component: <AmpersandLogo />,
    },
  ];

  // Rectangle 2: SafeBoda & BasiGo
  const rectangle2Logos: LogoItem[] = [
    {
      id: 'safeboda',
      name: 'SafeBoda',
      component: <SafeBodaLogo />,
    },
    {
      id: 'basigo',
      name: 'BasiGo',
      component: <BasiGoLogo />,
    },
  ];

  return (
    <div className="w-full border-t border-[#E6E3DC] mt-16 pt-7 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: BUILT BY OPERATORS FROM */}
          <div className="lg:col-span-8 lg:border-r lg:border-[#E6E3DC] lg:pr-8">
            <div className="flex items-center justify-between mb-3 select-none">
              <div className="text-[11px] font-mono tracking-widest text-[#8F8B81] uppercase">
                BUILT BY OPERATORS FROM
              </div>
              <div className="text-[10px] font-mono text-[#8F8B81]/80 hidden sm:block">
                Auto-rotates • Click to toggle
              </div>
            </div>
            
            {/* 2 Rectangles for the 4 logos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Rectangle 1: Spiro & Ampersand (FLIP / Morphing Rotator) */}
              <LogoRotatorBox
                logos={rectangle1Logos}
                intervalMs={3600}
                initialDelayMs={0}
              />

              {/* Rectangle 2: SafeBoda & BasiGo (Staggered FLIP / Morphing Rotator) */}
              <LogoRotatorBox
                logos={rectangle2Logos}
                intervalMs={3600}
                initialDelayMs={1800}
              />
            </div>
          </div>

          {/* Right Column: BACKED BY */}
          <div className="lg:col-span-4">
            <div className="text-[11px] font-mono tracking-widest text-[#8F8B81] uppercase mb-3 select-none">
              BACKED BY
            </div>
            <div className="w-full">
              {/* Card: Hugging Face */}
              <div className="border border-dashed border-[#D5D1C7] rounded-md px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-center bg-white/40 hover:bg-white hover:border-neutral-400 transition-all duration-200 min-h-[98px] sm:min-h-[110px]">
                <HuggingFaceLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
