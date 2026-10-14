import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Exact generated image paths from tool output
const MANUFACTURING_IMG = '/src/assets/images/carousel_manufacturing_1791992557630.jpg';
const SALES_IMG = '/src/assets/images/carousel_sales_1791992557032.jpg';
const RETAIL_IMG = '/src/assets/images/carousel_retail_1791992557657.jpg';

interface CapabilitySlide {
  id: string;
  industry: string;
  bannerTitle: string;
  description: string;
  imageSrc: string;
  altText: string;
}

const SLIDES: CapabilitySlide[] = [
  {
    id: 'manufacturing',
    industry: 'PASSENGER MOBILITY',
    bannerTitle: 'Everyday urban ride coordination.',
    description:
      "Three cities each present their own traffic corridors and fleet demands. The old approach was unmetered hails and long rank queues. Ridership coordinates across every rider, motorcycle, and car to match pickups in minutes, with clear fare estimates before booking. An available driver in Nyarugenge or Musanze is matched instantly.",
    imageSrc: MANUFACTURING_IMG,
    altText: 'Urban mobility fleet coordination across motorcycles and passenger cars',
  },
  {
    id: 'sales',
    industry: 'FLEET OPERATIONS',
    bannerTitle: 'Verified drivers & vehicle management.',
    description:
      'Top vehicle owners manage fleets with verified safety records and transparent earnings. Ridership tracks every inspection, driver license, and trip completion, surfaces vehicle performance, and automates daily payouts. Drivers and owners operate with confidence.',
    imageSrc: SALES_IMG,
    altText: 'Verified driver registry and commercial vehicle fleet operations dashboard',
  },
  {
    id: 'retail',
    industry: 'LOGISTICS & CARGO',
    bannerTitle: 'Cross-city logistics & delivery.',
    description:
      'Packages moving between Kigali, Rubavu, and Musanze frequently face delays with no visibility. Ridership links parcel delivery, vehicle trunk space, pickup schedules, and live route telemetry across corridors, then coordinates real-time dispatch with full custody tracking.',
    imageSrc: RETAIL_IMG,
    altText: 'Cross-corridor express delivery and regional logistics dispatch',
  },
];

export function ThreeThingsSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-advance carousel every 5.5 seconds unless hovered or paused
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered]);

  const currentSlide = SLIDES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section className="w-full pt-28 pb-32 border-t border-[#E6E3DC] bg-[#FAF8F5] select-none">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= 1. SECTION HEADLINE ================= */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-[-0.035em] text-[#1A1816] leading-[1.1] select-text">
            Three things Ridership<br />
            can do.
          </h2>
        </div>

        {/* ================= 2. AUTO SLIDE CAROUSEL ================= */}
        <div
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Top Industry Tabs & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            {/* Industry Pill Selector */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] shrink-0" />
              <div className="flex items-center gap-2">
                {SLIDES.map((slide, idx) => {
                  const isActive = currentIndex === idx;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`text-xs font-mono tracking-widest uppercase transition-all px-2.5 py-1 rounded cursor-pointer ${
                        isActive
                          ? 'bg-neutral-900 text-white font-bold'
                          : 'text-neutral-500 hover:text-neutral-900 bg-transparent'
                      }`}
                    >
                      {slide.industry}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows & Auto-play Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-1.5 rounded-md text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
                aria-label={isAutoPlaying ? 'Pause carousel' : 'Play carousel'}
                title={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-md border border-[#DCD9D0] bg-white text-neutral-800 hover:bg-neutral-100 transition-all cursor-pointer shadow-2xs"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-md border border-[#DCD9D0] bg-white text-neutral-800 hover:bg-neutral-100 transition-all cursor-pointer shadow-2xs"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Slide Card */}
          <div className="bg-white border border-[#E6E3DC] rounded-xl overflow-hidden shadow-xs transition-all">
            {/* Image Viewport with Centered White Banner */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/9.2] bg-neutral-900 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={currentSlide.imageSrc}
                    alt={currentSlide.altText}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Dark subtle vignette to emphasize banner */}
                  <div className="absolute inset-0 bg-black/15 pointer-events-none" />

                  {/* Centered White Banner Title (Signature aesthetic from design) */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.4 }}
                      className="bg-white px-6 sm:px-8 py-3.5 sm:py-4 shadow-lg border border-neutral-100 max-w-xl text-center"
                    >
                      <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-[#1A1816] leading-tight select-text">
                        {currentSlide.bannerTitle}
                      </h3>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Body Copy */}
            <div className="p-6 sm:p-10 bg-[#FAF8F5]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSlide.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg sm:text-[19.5px] leading-relaxed text-[#55524B] font-normal tracking-[-0.01em] select-text"
                >
                  {currentSlide.description}
                </motion.p>
              </AnimatePresence>

              {/* Progress indicators along the bottom */}
              <div className="mt-8 pt-6 border-t border-[#E6E3DC] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1 rounded-full transition-all cursor-pointer ${
                        currentIndex === idx ? 'w-8 bg-[#8B5CF6]' : 'w-2 bg-[#D5D1C7] hover:bg-neutral-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="text-xs font-mono text-neutral-400">
                  <span className="text-neutral-900 font-bold">0{currentIndex + 1}</span> / 0{SLIDES.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
