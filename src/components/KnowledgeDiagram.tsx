import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type TimePoint = 'now' | 'last_month' | '2_months_ago' | '6_months_ago';

interface LayerInfo {
  title: string;
  tag: string;
  desc: string;
  stats: string;
}

export function KnowledgeDiagram() {
  const [activeTime, setActiveTime] = useState<TimePoint>('now');
  const [hoveredLayer, setHoveredLayer] = useState<'top' | 'middle' | 'bottom' | null>(null);

  const layerData: Record<'top' | 'middle' | 'bottom', LayerInfo> = {
    top: {
      title: 'Current Attributable Knowledge',
      tag: 'STATE: LIVE',
      desc: 'One perpetually synchronized source of truth, rewritten dynamically as changes occur.',
      stats: '100% Attributable · 0 Stale Docs',
    },
    middle: {
      title: 'Autonomous Workstream Ingestion',
      tag: 'STREAM: ACTIVE',
      desc: 'Code diffs, CRM events, customer tickets, and engineering tasks re-grounding the model.',
      stats: '94.2 events/min · Continuous Reconciliation',
    },
    bottom: {
      title: 'Foundational Enterprise Base',
      tag: 'BASE: VERIFIED',
      desc: 'Underlying operational graph recording immutable business semantics and schemas.',
      stats: 'Historical Lineage · Cryptographically Audited',
    },
  };

  // Timeline points definition with Y-positions on the SVG timeline
  const timePoints: { id: TimePoint; label: string; y: number }[] = [
    { id: 'now', label: 'NOW', y: 135 },
    { id: 'last_month', label: 'LAST MONTH', y: 205 },
    { id: '2_months_ago', label: '2 MONTHS AGO', y: 285 },
    { id: '6_months_ago', label: '6 MONTHS AGO', y: 375 },
  ];

  // Active timepoint y-coordinate
  const activeY = timePoints.find((t) => t.id === activeTime)?.y ?? 135;

  return (
    <div className="relative w-full max-w-[640px] mx-auto select-none">
      <svg
        viewBox="0 0 620 490"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible filter drop-shadow-xs"
        role="img"
        aria-label="Isometric diagram of Zaro knowledge model with time travel axis"
      >
        <defs>
          {/* Subtle gradients for layers */}
          <linearGradient id="topPlaneGradient" x1="160" y1="120" x2="440" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#C084FC" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="midPlaneGradient" x1="160" y1="190" x2="440" y2="310" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.06" />
            <stop offset="50%" stopColor="#34D399" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ECFDF5" stopOpacity="0.04" />
          </linearGradient>

          <linearGradient id="glowGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* ---------------- 1. OUTER ISOMETRIC BOUNDING CUBE ---------------- */}
        {/* Top diamond */}
        <polygon
          points="300,90 450,150 300,210 150,150"
          stroke="#D8B4FE"
          strokeWidth="1.1"
          strokeDasharray="2.5 2.5"
          fill="none"
          opacity="0.85"
        />

        {/* Vertical cube pillars */}
        <line x1="150" y1="150" x2="150" y2="325" stroke="#C4B5FD" strokeWidth="1.2" opacity="0.75" />
        <line x1="450" y1="150" x2="450" y2="325" stroke="#C4B5FD" strokeWidth="1.2" opacity="0.75" />
        <line x1="300" y1="90" x2="300" y2="265" stroke="#DDD6FE" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="300" y1="210" x2="300" y2="385" stroke="#C4B5FD" strokeWidth="1.2" opacity="0.8" />

        {/* Bottom diamond */}
        <polygon
          points="300,265 450,325 300,385 150,325"
          stroke="#C4B5FD"
          strokeWidth="1.1"
          fill="none"
          opacity="0.75"
        />

        {/* ---------------- 2. BOTTOM LAYER: SOLID BASE SLAB ---------------- */}
        <g
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setHoveredLayer('bottom')}
          onMouseLeave={() => setHoveredLayer(null)}
          opacity={hoveredLayer && hoveredLayer !== 'bottom' ? 0.45 : 1}
        >
          {/* Base slab extruded 3D bevels */}
          {/* Left extrusion bevel */}
          <polygon
            points="160,305 300,360 300,378 160,323"
            fill="#DDD8CE"
            stroke="#CFC9BE"
            strokeWidth="0.8"
          />
          {/* Right extrusion bevel */}
          <polygon
            points="300,360 440,305 440,323 300,378"
            fill="#D3CDC2"
            stroke="#C7C0B4"
            strokeWidth="0.8"
          />
          {/* Top surface face of base slab */}
          <polygon
            points="300,250 440,305 300,360 160,305"
            fill="#ECE8E1"
            stroke="#DCD7CE"
            strokeWidth="1"
          />

          {/* Dotted grid on top of base slab */}
          {[-60, -30, 0, 30, 60].map((dx, i) =>
            [-30, -15, 0, 15, 30].map((dy, j) => {
              // Isometric projection of regular grid
              const isoX = 300 + (dx - dy) * 1.05;
              const isoY = 305 + (dx + dy) * 0.42;
              return (
                <circle
                  key={`base-dot-${i}-${j}`}
                  cx={isoX}
                  cy={isoY}
                  r="1.2"
                  fill="#B3ADA1"
                  opacity="0.65"
                />
              );
            })
          )}
        </g>

        {/* ---------------- 3. MIDDLE LAYER: WORK REWRITE STREAM ---------------- */}
        <g
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setHoveredLayer('middle')}
          onMouseLeave={() => setHoveredLayer(null)}
          opacity={hoveredLayer && hoveredLayer !== 'middle' ? 0.45 : 1}
        >
          {/* Wireframe plane */}
          <polygon
            points="300,185 440,240 300,295 160,240"
            fill="url(#midPlaneGradient)"
            stroke="#A7F3D0"
            strokeWidth="0.9"
            strokeDasharray="2 2"
          />

          {/* Green / emerald data nodes scattered across work plane */}
          {[
            { x: 300, y: 240, r: 2.2, color: '#059669' },
            { x: 260, y: 232, r: 1.8, color: '#10B981' },
            { x: 340, y: 248, r: 1.9, color: '#059669' },
            { x: 230, y: 242, r: 1.6, color: '#34D399' },
            { x: 370, y: 238, r: 1.7, color: '#10B981' },
            { x: 285, y: 220, r: 1.6, color: '#10B981' },
            { x: 315, y: 260, r: 2.0, color: '#047857' },
            { x: 300, y: 215, r: 1.7, color: '#34D399' },
            { x: 300, y: 265, r: 1.5, color: '#10B981' },
            { x: 245, y: 255, r: 1.6, color: '#059669' },
            { x: 355, y: 225, r: 1.8, color: '#34D399' },
            { x: 210, y: 235, r: 1.5, color: '#10B981' },
            { x: 390, y: 245, r: 1.6, color: '#059669' },
            { x: 275, y: 245, r: 1.5, color: '#34D399' },
            { x: 325, y: 235, r: 1.5, color: '#10B981' },
          ].map((dot, idx) => (
            <g key={`mid-dot-${idx}`}>
              {/* Subtle diamond shape or circle */}
              <circle cx={dot.x} cy={dot.y} r={dot.r} fill={dot.color} opacity="0.85" />
              {/* Connecting fine hairs between nearby points */}
              {idx % 3 === 0 && (
                <line
                  x1={dot.x}
                  y1={dot.y}
                  x2={dot.x + 18}
                  y2={dot.y + 7}
                  stroke="#6EE7B7"
                  strokeWidth="0.6"
                  opacity="0.45"
                />
              )}
            </g>
          ))}
        </g>

        {/* ---------------- 4. TOP LAYER: CURRENT STATE / "NOW" ---------------- */}
        <g
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setHoveredLayer('top')}
          onMouseLeave={() => setHoveredLayer(null)}
          opacity={hoveredLayer && hoveredLayer !== 'top' ? 0.45 : 1}
        >
          {/* Top Plane Outline & Fill */}
          <polygon
            points="300,120 440,175 300,230 160,175"
            fill="url(#topPlaneGradient)"
            stroke="#C4B5FD"
            strokeWidth="1.2"
          />

          {/* Central Zaro cluster mark on top plane */}
          {/* Center core */}
          <circle cx="300" cy="175" r="3.8" fill="#7C3AED" />
          {/* Orbital cluster nodes */}
          <circle cx="300" cy="165" r="2.8" fill="#8B5CF6" />
          <circle cx="310" cy="170" r="2.8" fill="#8B5CF6" />
          <circle cx="310" cy="180" r="2.8" fill="#8B5CF6" />
          <circle cx="300" cy="185" r="2.8" fill="#8B5CF6" />
          <circle cx="290" cy="180" r="2.8" fill="#8B5CF6" />
          <circle cx="290" cy="170" r="2.8" fill="#8B5CF6" />

          {/* Outer diamond constellation around the center */}
          {[
            { x: 300, y: 148, r: 1.8, c: '#A78BFA' },
            { x: 300, y: 202, r: 1.8, c: '#A78BFA' },
            { x: 260, y: 165, r: 1.8, c: '#C4B5FD' },
            { x: 340, y: 185, r: 1.8, c: '#C4B5FD' },
            { x: 240, y: 172, r: 1.6, c: '#8B5CF6' },
            { x: 360, y: 178, r: 1.6, c: '#8B5CF6' },
            { x: 280, y: 145, r: 1.6, c: '#DDD6FE' },
            { x: 320, y: 205, r: 1.6, c: '#DDD6FE' },
            { x: 325, y: 155, r: 1.7, c: '#A78BFA' },
            { x: 275, y: 195, r: 1.7, c: '#A78BFA' },
            { x: 220, y: 175, r: 1.5, c: '#A78BFA' },
            { x: 380, y: 175, r: 1.5, c: '#A78BFA' },
            { x: 300, y: 135, r: 1.5, c: '#C4B5FD' },
            { x: 300, y: 215, r: 1.5, c: '#C4B5FD' },
            { x: 345, y: 168, r: 1.6, c: '#8B5CF6' },
            { x: 255, y: 182, r: 1.6, c: '#8B5CF6' },
          ].map((node, i) => (
            <circle
              key={`top-node-${i}`}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.c}
              opacity="0.9"
            />
          ))}

          {/* Isometric coordinate grid lines connecting top points */}
          <line x1="260" y1="165" x2="340" y2="185" stroke="#C4B5FD" strokeWidth="0.6" strokeDasharray="1.5 1.5" opacity="0.6" />
          <line x1="280" y1="145" x2="320" y2="205" stroke="#C4B5FD" strokeWidth="0.6" strokeDasharray="1.5 1.5" opacity="0.6" />
        </g>

        {/* ---------------- 5. CONNECTING LINE FROM TOP LAYER TO TIMELINE ---------------- */}
        {/* Horizontal connector from cube to timeline */}
        <line
          x1="450"
          y1="195"
          x2="500"
          y2="195"
          stroke="#C4B5FD"
          strokeWidth="1.2"
          opacity="0.85"
        />

        {/* ---------------- 6. VERTICAL TIMELINE AXIS (RIGHT) ---------------- */}
        <g className="timeline-axis">
          {/* Vertical axis line */}
          <line
            x1="500"
            y1="135"
            x2="500"
            y2="395"
            stroke="#D8B4FE"
            strokeWidth="1.2"
          />

          {/* Detailed ticks all along the vertical line */}
          {Array.from({ length: 27 }).map((_, idx) => {
            const tickY = 135 + idx * 10;
            const isMajor = idx % 7 === 0;
            return (
              <line
                key={`tick-${idx}`}
                x1={500}
                y1={tickY}
                x2={isMajor ? 508 : 505}
                y2={tickY}
                stroke={isMajor ? '#A78BFA' : '#DDD6FE'}
                strokeWidth={isMajor ? 1.2 : 0.8}
              />
            );
          })}

          {/* Interactive selection indicator on timeline */}
          <motion.circle
            animate={{ cy: activeY }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            cx="500"
            cy="135"
            r="3.5"
            fill="#7C3AED"
            stroke="#EDE9FE"
            strokeWidth="1.5"
          />

          {/* "NOW" top indicator pill badge */}
          <g
            className="cursor-pointer"
            onClick={() => setActiveTime('now')}
          >
            {/* The vertical connector stem for the NOW pill */}
            <rect
              x="497"
              y="125"
              width="6"
              height="20"
              rx="3"
              fill="#EDE9FE"
            />
            {/* Pill text container */}
            <rect
              x="515"
              y="126"
              width="36"
              height="18"
              rx="4"
              fill={activeTime === 'now' ? '#DDD6FE' : '#EDE9FE'}
              stroke="#C4B5FD"
              strokeWidth="0.8"
              className="transition-colors"
            />
            <text
              x="533"
              y="139"
              textAnchor="middle"
              className="font-mono text-[10px] font-bold fill-[#6D28D9] tracking-wider select-none"
            >
              NOW
            </text>
          </g>

          {/* "LAST MONTH" tick label */}
          <g
            className="cursor-pointer group"
            onClick={() => setActiveTime('last_month')}
          >
            <text
              x="515"
              y="209"
              className={`font-mono text-[9px] tracking-widest uppercase transition-colors select-none ${
                activeTime === 'last_month'
                  ? 'fill-[#6D28D9] font-bold'
                  : 'fill-[#9C988F] group-hover:fill-neutral-900'
              }`}
            >
              LAST MONTH
            </text>
          </g>

          {/* "2 MONTHS AGO" tick label */}
          <g
            className="cursor-pointer group"
            onClick={() => setActiveTime('2_months_ago')}
          >
            <text
              x="515"
              y="289"
              className={`font-mono text-[9px] tracking-widest uppercase transition-colors select-none ${
                activeTime === '2_months_ago'
                  ? 'fill-[#6D28D9] font-bold'
                  : 'fill-[#9C988F] group-hover:fill-neutral-900'
              }`}
            >
              2 MONTHS AGO
            </text>
          </g>

          {/* "6 MONTHS AGO" tick label */}
          <g
            className="cursor-pointer group"
            onClick={() => setActiveTime('6_months_ago')}
          >
            <text
              x="515"
              y="379"
              className={`font-mono text-[9px] tracking-widest uppercase transition-colors select-none ${
                activeTime === '6_months_ago'
                  ? 'fill-[#6D28D9] font-bold'
                  : 'fill-[#9C988F] group-hover:fill-neutral-900'
              }`}
            >
              6 MONTHS AGO
            </text>
          </g>
        </g>
      </svg>

      {/* Layer detail inspection tooltip / status bar */}
      <div className="mt-2 min-h-[56px] px-4 py-2.5 rounded-lg border border-[#E7E4DC] bg-[#FAF8F5]/90 backdrop-blur-xs flex items-center justify-between transition-all">
        {hoveredLayer ? (
          <div className="flex items-center justify-between w-full">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-neutral-900">
                  {layerData[hoveredLayer].title}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-200/60 text-neutral-700">
                  {layerData[hoveredLayer].tag}
                </span>
              </div>
              <p className="text-[11px] text-neutral-600 mt-0.5">
                {layerData[hoveredLayer].desc}
              </p>
            </div>
            <span className="text-[10px] font-mono text-neutral-500 whitespace-nowrap ml-4">
              {layerData[hoveredLayer].stats}
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full text-xs text-neutral-500">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
              <span className="font-mono text-[11px] tracking-tight">
                Timeline: <strong className="text-neutral-900 uppercase">{activeTime.replace(/_/g, ' ')}</strong>
              </span>
              <span className="text-neutral-400">·</span>
              <span className="text-[11px]">Hover any isometric plane to inspect architectural layer</span>
            </span>
            <span className="font-mono text-[10px] text-neutral-400 hidden sm:inline">
              Attributable Graph
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
