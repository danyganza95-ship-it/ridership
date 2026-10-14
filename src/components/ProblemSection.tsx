import React, { useState } from 'react';
import {
  FabricLogo,
  SnowflakeLogo,
  DatabricksLogo,
  CopilotLogo,
  ChatGPTLogo,
  GeminiLogo,
  GleanLogo,
  PalantirLogo,
  SinequaLogo,
} from './TechLogos';

// Exact generated image paths from tool output
const DATA_WAREHOUSE_IMG = '/src/assets/images/card_data_warehouse_1791986991893.jpg';
const LICENSE_EVERYONE_IMG = '/src/assets/images/card_license_everyone_1791986993350.jpg';
const KNOWLEDGE_GRAPH_IMG = '/src/assets/images/card_knowledge_graph_1791986992281.jpg';

interface TechChip {
  name: string;
  icon: React.ReactNode;
}

interface ProblemCardData {
  number: string;
  badgeTitle: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  techs: TechChip[];
  imageSrc: string;
  altText: string;
  fallbackBg: string;
}

const CARDS: ProblemCardData[] = [
  {
    number: '01',
    badgeTitle: 'The data warehouse.',
    headlineLine1: 'Solved the numbers.',
    headlineLine2: 'Not the knowledge.',
    description:
      'It made structured data queryable. Most of what your company knows was never in a table.',
    techs: [
      { name: 'Fabric', icon: <FabricLogo /> },
      { name: 'Snowflake', icon: <SnowflakeLogo /> },
      { name: 'Databricks', icon: <DatabricksLogo /> },
    ],
    imageSrc: DATA_WAREHOUSE_IMG,
    altText: 'Minimalist 3D architectural folders representing data warehouse storage',
    fallbackBg: 'from-slate-700 via-slate-800 to-slate-900',
  },
  {
    number: '02',
    badgeTitle: 'A license for everyone.',
    headlineLine1: 'An assistant for everyone.',
    headlineLine2: 'A memory for no one.',
    description:
      'The right first move. It gave every person an assistant and the company no shared memory.',
    techs: [
      { name: 'Copilot', icon: <CopilotLogo /> },
      { name: 'ChatGPT', icon: <ChatGPTLogo /> },
      { name: 'Gemini', icon: <GeminiLogo /> },
    ],
    imageSrc: LICENSE_EVERYONE_IMG,
    altText: 'Team member working diligently with laptop and notes in workspace',
    fallbackBg: 'from-amber-900/60 via-stone-800 to-stone-900',
  },
  {
    number: '03',
    badgeTitle: 'A knowledge graph.',
    headlineLine1: 'Built once.',
    headlineLine2: 'True on the day it shipped.',
    description:
      'It reads from a snapshot and never writes back, so it is out of date until someone rebuilds it.',
    techs: [
      { name: 'Glean', icon: <GleanLogo /> },
      { name: 'Palantir', icon: <PalantirLogo /> },
      { name: 'Sinequa', icon: <SinequaLogo /> },
    ],
    imageSrc: KNOWLEDGE_GRAPH_IMG,
    altText: 'Topological 3D point cloud landscape representing brittle knowledge graphs',
    fallbackBg: 'from-blue-900 via-indigo-950 to-black',
  },
];

export function ProblemSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <section className="w-full pt-16 pb-28 border-t border-[#E6E3DC] relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-[-0.03em] text-[#1A1816] leading-[1.07] select-text">
            You have already bought the<br />
            AI. It cannot read your business.
          </h2>
        </div>

        {/* 3-Column Card Grid with architectural hairline dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {CARDS.map((card) => {
            const hasError = imageErrors[card.number];

            return (
              <div
                key={card.number}
                className="group flex flex-col justify-between cursor-default"
              >
                <div>
                  {/* Image Container with Folder-Tab Angle Chamfer Notch at Top Right */}
                  <div
                    className="relative w-full aspect-[1.12/1] overflow-hidden bg-[#1A1816] transition-all duration-300"
                    style={{
                      // Exact folder-tab chamfer cut at top-right
                      clipPath: 'polygon(0 0, 72% 0, 84% 34px, 100% 34px, 100% 100%, 0 100%)',
                    }}
                  >
                    {/* Fallback container if image fails or loading */}
                    {hasError ? (
                      <div className={`w-full h-full bg-gradient-to-br ${card.fallbackBg} flex items-center justify-center p-6 text-white`}>
                        <span className="font-mono text-sm tracking-wider opacity-75">
                          [{card.number}] {card.badgeTitle}
                        </span>
                      </div>
                    ) : (
                      <img
                        src={card.imageSrc}
                        alt={card.altText}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setImageErrors((prev) => ({ ...prev, [card.number]: true }))
                        }
                        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                    )}

                    {/* Measured Dark Gradient Scrim to ensure crisp contrast on top badge */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/15 to-transparent pointer-events-none" />

                    {/* Top-Left Card Tag: [01] The data warehouse. */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2.5 select-none">
                      <span className="border border-white/60 px-1 py-0.5 rounded-[1px] font-mono text-[10.5px] font-semibold text-white tracking-wider leading-none flex items-center justify-center">
                        {card.number}
                      </span>
                      <span className="text-[15.5px] font-semibold text-white tracking-tight leading-none drop-shadow-xs">
                        {card.badgeTitle}
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom Description with Hairline Left Accent Divider */}
                  <div className="mt-5 pt-1 border-l border-[#E2DFD6] pl-4 flex flex-col">
                    <h3 className="text-xl sm:text-[22px] font-semibold text-[#1A1816] tracking-tight leading-snug">
                      {card.headlineLine1}
                    </h3>
                    <p className="text-xl sm:text-[22px] font-semibold text-[#1A1816] tracking-tight leading-snug">
                      {card.headlineLine2}
                    </p>

                    {/* Sub-description copy */}
                    <p className="mt-3 text-[14.5px] sm:text-[15px] leading-relaxed text-[#625E56] font-normal tracking-[-0.01em]">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Tech Chips / Badges Row (Below in red in screenshot) */}
                <div className="mt-6 border-l border-[#E2DFD6] pl-4 pt-1 flex flex-wrap items-center gap-2 select-none">
                  {card.techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#DCD9D0] text-[13px] font-medium text-neutral-800 hover:bg-white hover:border-neutral-400 transition-all shadow-2xs"
                    >
                      <span className="shrink-0 flex items-center justify-center">
                        {tech.icon}
                      </span>
                      <span className="tracking-tight">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
