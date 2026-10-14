import React, { useState } from 'react';
import { MessageSquare, ChevronRight, Folder } from 'lucide-react';
import { ZaroLogo } from './Logos';

// Slack 4-color logo
function SlackIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52-2.523c0-1.394 1.127-2.524 2.52-2.524h2.522v2.524c0 1.393-1.128 2.523-2.522 2.523z" fill="#E01E5A" />
      <path d="M8.834 15.165c1.394 0 2.521 1.13 2.521 2.523v6.312A2.528 2.528 0 0 1 8.834 26.52c-1.393 0-2.521-1.127-2.521-2.52v-6.312c0-1.394 1.128-2.523 2.521-2.523z" fill="#E01E5A" />
      <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52C6.313 1.128 7.44 0 8.834 0c1.393 0 2.521 1.128 2.521 2.522v2.52H8.834z" fill="#36C5F0" />
      <path d="M8.834 8.834c0 1.393 1.128 2.521 2.521 2.521h6.313A2.528 2.528 0 0 0 20.19 8.834c0-1.394-1.128-2.521-2.521-2.521H11.355c-1.393 0-2.521 1.127-2.521 2.521z" fill="#36C5F0" />
      <path d="M18.958 8.834a2.528 2.528 0 0 1 2.521 2.521c0 1.394-1.128 2.521-2.521 2.521h-2.522V11.355c0-1.393 1.127-2.521 2.522-2.521z" fill="#2EB67D" />
      <path d="M15.166 8.834c-1.394 0-2.521-1.128-2.521-2.521V0a2.528 2.528 0 0 1 2.521-2.521c1.393 0 2.521 1.127 2.521 2.52v6.313c0 1.393-1.128 2.521-2.521 2.521z" fill="#2EB67D" />
      <path d="M15.166 18.958a2.528 2.528 0 0 1 2.521 2.52c0 1.395-1.128 2.522-2.521 2.522h-2.521v-2.522c0-1.393 1.127-2.52 2.521-2.52z" fill="#ECB22E" />
      <path d="M15.166 15.165c0-1.393-1.128-2.521-2.521-2.521H6.332A2.528 2.528 0 0 0 3.81 15.165c0 1.394 1.128 2.522 2.522 2.522h6.313c1.393 0 2.521-1.128 2.521-2.522z" fill="#ECB22E" />
    </svg>
  );
}

// Granola Logo (Green spiral AI meeting notes mark)
function GranolaIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#2E7D32" />
      <path
        d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12"
        stroke="#E8F5E9"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2" fill="#E8F5E9" />
    </svg>
  );
}

// Gmail 4-color M logo
function GmailIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path fill="#4285F4" d="M2.5 19.5h4v-9l-4-3v12z" />
      <path fill="#34A853" d="M17.5 19.5h4v-12l-4 3v9z" />
      <path fill="#EA4335" d="M17.5 7.5L12 11.5 6.5 7.5V4.5l5.5 4 5.5-4v3z" />
      <path fill="#FBBC05" d="M2.5 7.5l4 3V4.5L3.8 2.4C3 1.8 2.5 2.5 2.5 3.3v4.2z" />
      <path fill="#C5221F" d="M21.5 7.5l-4 3V4.5l2.7-2.1c.8-.6 1.3.1 1.3.9v4.2z" />
    </svg>
  );
}

// Salesforce Cloud Logo
function SalesforceMini({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#00A1E0" className={className}>
      <path d="M9.8 4.5a5.2 5.2 0 0 1 4.5 2.6 4.7 4.7 0 0 1 4.8 4.6c0 .3 0 .6-.1.9A4.1 4.1 0 0 1 22 16.3c0 2.3-1.9 4.2-4.2 4.2H6.4A5.4 5.4 0 0 1 1 15.1c0-2.6 1.9-4.8 4.4-5.3a5.4 5.4 0 0 1 4.4-5.3z" />
    </svg>
  );
}

interface SourceDetail {
  id: string;
  name: string;
  icon: React.ReactNode;
  filePath: string;
  lastWrittenBy: string;
  when: string;
  preview: string;
}

const SOURCES: SourceDetail[] = [
  {
    id: 'telemetry',
    name: 'Fleet GPS',
    icon: <SalesforceMini className="w-4 h-4" />,
    filePath: '/trips/kigali-nyabugogo-route.log',
    lastWrittenBy: 'GPS TELEMETRY',
    when: '14:22 CAT',
    preview: 'Route update: Nyabugogo diversion active, +3.2km adjusted segment.',
  },
  {
    id: 'dispatch',
    name: 'Dispatch Ops',
    icon: <SlackIcon className="w-3.5 h-3.5" />,
    filePath: '/dispatch/rider-eta-update.json',
    lastWrittenBy: 'DISPATCH AGENT',
    when: '14:23 CAT',
    preview: 'Automated alert: Rider ETA refreshed to 4 mins with live coordinate stream.',
  },
  {
    id: 'driver',
    name: 'Driver App',
    icon: <GranolaIcon className="w-3.5 h-3.5" />,
    filePath: '/drivers/rw-kig-moto-104.md',
    lastWrittenBy: 'VERIFIED DRIVER',
    when: '14:21 CAT',
    preview: 'Status: Accepted pickup request, helmet ready, passenger confirmation verified.',
  },
  {
    id: 'support',
    name: 'Rider Support',
    icon: <GmailIcon className="w-3.5 h-3.5" />,
    filePath: '/tickets/corridor-traffic-log.eml',
    lastWrittenBy: 'SUPPORT AGENT',
    when: '14:24 CAT',
    preview: 'Rider confirmed on board via in-app PIN validation. Trip status: In Transit.',
  },
  {
    id: 'fare',
    name: 'Fare Engine',
    icon: <Folder className="w-3.5 h-3.5 text-cyan-600" />,
    filePath: '/tariffs/kigali-rubavu-standards.pdf',
    lastWrittenBy: 'FARE ENGINE',
    when: '01 APR',
    preview: 'Standard Fare Policy: Guaranteed transparent rates with zero hidden surge spikes.',
  },
];

export function AttributedChatSection() {
  const [activeSourceId, setActiveSourceId] = useState<string>('telemetry');
  const activeSource = SOURCES.find((s) => s.id === activeSourceId) || SOURCES[0];

  return (
    <section className="w-full pt-16 pb-28 border-t border-[#E6E3DC] relative bg-[#FAF8F5] overflow-hidden">
      {/* Subtle Dot Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.45] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#CFCAC0 1.1px, transparent 1.1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Application Window / Chat Container */}
        <div className="bg-white rounded-3xl border border-[#E6E3DC] shadow-sm p-6 sm:p-12 transition-all">
          {/* Header / Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-500 mb-8 select-none">
            <MessageSquare className="w-4 h-4 text-neutral-400" />
            <span>Chat</span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-700 font-semibold">Trip Operations</span>
          </div>

          {/* User Query Bubble (Right-aligned) */}
          <div className="flex justify-end my-8">
            <div className="bg-[#F4F2EC] rounded-2xl px-6 py-4 max-w-lg shadow-2xs">
              <p className="text-[15.5px] sm:text-[17px] font-medium text-[#1A1816] tracking-tight leading-normal select-text">
                Why did this trip pickup delay occur along the Kigali–Nyabugogo corridor?
              </p>
            </div>
          </div>

          {/* Zaro Attributed Response (Left-aligned) */}
          <div className="flex items-start gap-4 mt-6">
            {/* Zaro Emblem Avatar */}
            <div className="w-9 h-9 rounded-xl bg-[#1A1816] text-white flex items-center justify-center shrink-0 mt-1 shadow-2xs">
              <ZaroLogo className="w-5 h-5 text-white" />
            </div>

            {/* Answer Content & Sources */}
            <div className="flex-1 max-w-2xl">
              <h4 className="text-lg sm:text-[19px] font-medium text-[#1A1816] leading-snug tracking-tight select-text">
                Driver was re-routed around road maintenance near Nyabugogo Market.<br />
                Rider was notified with an updated 4-minute estimated arrival.
              </h4>

              {/* Sources Section */}
              <div className="mt-6">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2.5 select-none">
                  Sources:
                </div>

                {/* Source Pill Chips */}
                <div className="flex flex-wrap items-center gap-2">
                  {SOURCES.map((source) => {
                    const isSelected = activeSource.id === source.id;
                    return (
                      <button
                        key={source.id}
                        onClick={() => setActiveSourceId(source.id)}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#EAE6DD] text-neutral-900 border border-[#D5D1C6] shadow-2xs'
                            : 'bg-[#F2EFE9] text-neutral-700 hover:bg-[#EAE6DD] border border-transparent'
                        }`}
                      >
                        <span className="shrink-0">{source.icon}</span>
                        <span className="font-semibold">{source.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Attributable File Source Card */}
                <div className="mt-4 p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E2D9] shadow-2xs max-w-sm animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 font-mono text-xs font-medium text-neutral-800">
                    <span className="shrink-0">{activeSource.icon}</span>
                    <span className="truncate">{activeSource.filePath}</span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#ECE9E0] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                    <div>
                      <div>LAST WRITTEN BY</div>
                      <div>WHEN</div>
                    </div>
                    <div className="text-right font-medium text-neutral-800">
                      <div>{activeSource.lastWrittenBy}</div>
                      <div>{activeSource.when}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
