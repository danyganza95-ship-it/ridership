import React from 'react';
import { ComparisonGraphic } from './ComparisonGraphic';

export function TrueKnowledgeSection() {
  return (
    <section className="w-full pt-20 pb-28 border-t border-[#E6E3DC] relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          {/* Section Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-[-0.035em] leading-[1.08] select-text">
            <span className="text-[#1A1816]">Legacy dispatch tells you what</span>
            <br />
            <span className="text-[#1A1816]">was parked. </span>
            <span className="text-[#59554E]">Ridership tells you what is moving.</span>
          </h2>

          {/* Subtitle / Paragraph */}
          <p className="mt-7 text-lg sm:text-[19px] leading-relaxed text-[#5E5B53] max-w-3xl font-normal tracking-[-0.01em]">
            Your trips coordinate in real time across active riders and verified drivers. Fare estimates are transparent, pickup
            updates are instant, and every journey is tracked end-to-end.
          </p>
        </div>

        {/* Comparison Graphic: Knowledge Graph vs Zaro */}
        <ComparisonGraphic />
      </div>
    </section>
  );
}
