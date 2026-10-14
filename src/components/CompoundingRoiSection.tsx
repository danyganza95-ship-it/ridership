import React, { useState } from 'react';

interface ProjectMilestone {
  id: string;
  label: string;
  effortPercent: number;
  valueMultiplier: string;
  description: string;
}

const MILESTONES: ProjectMilestone[] = [
  {
    id: '01',
    label: 'PHASE 01',
    effortPercent: 100,
    valueMultiplier: '1.0x',
    description: 'Driver onboarding, vehicle inspections, and initial Kigali pilot corridors.',
  },
  {
    id: '02',
    label: 'PHASE 02',
    effortPercent: 65,
    valueMultiplier: '1.8x',
    description: 'Expands across commercial hubs; rider wallet adoption and motorcycle fleet scaling.',
  },
  {
    id: '03',
    label: 'PHASE 03',
    effortPercent: 38,
    valueMultiplier: '3.4x',
    description: 'Inflection threshold: cross-city routes connect Kigali, Rubavu, and Musanze with automated dispatch.',
  },
  {
    id: '04',
    label: 'PHASE 04',
    effortPercent: 18,
    valueMultiplier: '6.2x',
    description: 'Instant package delivery and shared mobility routes backed by verified driver network.',
  },
  {
    id: '05',
    label: 'PHASE 05',
    effortPercent: 5,
    valueMultiplier: '12.5x',
    description: 'Full regional logistics network with minimal coordination overhead. Real-time fleet efficiency.',
  },
];

export function CompoundingRoiSection() {
  const [activeProject, setActiveProject] = useState<string>('03');
  const activeMilestone = MILESTONES.find((m) => m.id === activeProject) || MILESTONES[2];

  return (
    <section className="w-full py-20 lg:py-32 border-t border-[#E6E3DC] bg-[#FAF8F5] select-none">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ================= LEFT COLUMN: HEADLINE & NARRATIVE ================= */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-[-0.035em] leading-[1.08] select-text">
              <span className="text-[#59554E]">The first journey</span>
              <br />
              <span className="text-[#59554E]">pays for itself.</span>
              <br />
              <span className="text-[#1A1816]">Every ride compounds value.</span>
            </h2>

            <p className="mt-8 text-lg sm:text-[19px] leading-relaxed text-[#5F5C55] max-w-md font-normal tracking-[-0.01em] select-text">
              Verify the driver, register the vehicle, set fair tariffs, guarantee
              safety. Coordinate once on Ridership and every journey runs seamlessly.
            </p>

            {/* Dynamic Milestone Insight Pill */}
            <div className="mt-8 p-4 rounded-xl bg-white border border-[#E6E3DC] shadow-2xs max-w-md transition-all">
              <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                <span className="font-semibold text-neutral-900">
                  {activeMilestone.label}
                </span>
                <span className="text-[#7C3AED] font-bold">
                  {activeMilestone.valueMultiplier} Value / Effort
                </span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                {activeMilestone.description}
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: ROI COMPOUNDING CURVES ================= */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Legend at Top */}
            <div className="flex items-center justify-end gap-8 mb-6 text-xs font-medium text-neutral-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6B665E]" />
                <span className="tracking-tight">Effort per Route</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
                <span className="tracking-tight">Value per Journey</span>
              </div>
            </div>

            {/* SVG Chart Graphic */}
            <div className="relative w-full">
              <svg
                viewBox="0 0 650 330"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto overflow-visible"
                role="img"
                aria-label="Coordination effort decay vs network value compounding curves across 5 operational phases"
              >
                <defs>
                  {/* Arrowhead marker for Effort (Gray) */}
                  <marker
                    id="arrow-effort"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#6B665E" />
                  </marker>

                  {/* Arrowhead marker for Value (Purple) */}
                  <marker
                    id="arrow-value"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#7C3AED" />
                  </marker>
                </defs>

                {/* Vertical Background Grid Lines (19 fine tick rules) */}
                {Array.from({ length: 19 }).map((_, i) => {
                  const x = 30 + i * 32.5;
                  return (
                    <line
                      key={`grid-${i}`}
                      x1={x}
                      y1={20}
                      x2={x}
                      y2={250}
                      stroke="#EAE7DF"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Curve 1: Effort per Project (Decaying from top-left to bottom-right) */}
                {/* Starts at (30, 30), curves down towards (615, 240) */}
                <path
                  d="M 30 30 C 130 32, 280 140, 610 240"
                  stroke="#6B665E"
                  strokeWidth="1.6"
                  fill="none"
                  markerEnd="url(#arrow-effort)"
                />

                {/* Curve 2: Value per Unit Effort (Ascending exponentially from bottom-left to top-right) */}
                {/* Starts at (30, 240), curves up towards (615, 30) */}
                <path
                  d="M 30 240 C 260 235, 430 170, 610 30"
                  stroke="#7C3AED"
                  strokeWidth="1.8"
                  fill="none"
                  markerEnd="url(#arrow-value)"
                />

                {/* Subtle Inflection Point Cross Indicator */}
                <circle cx="340" cy="180" r="3.5" fill="#7C3AED" stroke="#FAF8F5" strokeWidth="2" />

                {/* Interactive Milestone Hover Zones */}
                {MILESTONES.map((m, idx) => {
                  const startX = 30 + idx * 118;
                  const isHovered = activeProject === m.id;
                  return (
                    <g
                      key={`zone-${m.id}`}
                      className="cursor-pointer group"
                      onMouseEnter={() => setActiveProject(m.id)}
                    >
                      {/* Transparent Hit Zone */}
                      <rect
                        x={startX}
                        y={10}
                        width={110}
                        height={250}
                        fill={isHovered ? '#7C3AED' : 'transparent'}
                        opacity={isHovered ? 0.03 : 0}
                        rx="4"
                      />

                      {/* Bottom Bracket Guide Line: [───] */}
                      <path
                        d={`M ${startX + 5} 275 L ${startX + 5} 282 L ${startX + 105} 282 L ${startX + 105} 275`}
                        stroke={isHovered ? '#7C3AED' : '#C7C2B6'}
                        strokeWidth="1.2"
                        fill="none"
                      />

                      {/* Project Label below bracket */}
                      <text
                        x={startX + 55}
                        y="305"
                        textAnchor="middle"
                        className={`font-mono text-[11px] tracking-wider uppercase transition-colors select-none ${
                          isHovered ? 'fill-[#7C3AED] font-bold' : 'fill-[#8F8B81]'
                        }`}
                      >
                        {m.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
