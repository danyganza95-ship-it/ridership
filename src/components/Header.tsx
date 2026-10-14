import React, { useState, useRef, useEffect } from 'react';
import { ZaroLogo } from './Logos';
import { ChevronDown, ArrowRight, Menu, X, BookOpen, ShieldCheck, Cpu, GitBranch, Users } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenSignIn: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export function Header({ onOpenConsultation, onOpenSignIn, onNavigateSection }: HeaderProps) {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full border-b border-transparent relative z-30">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-8">
        {/* Left: Brand Wordmark + Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="/"
            className="flex items-center gap-2.5 text-[#1A1816] hover:opacity-90 transition-opacity"
            aria-label="RIDERSHIP Home"
          >
            <ZaroLogo className="w-6 h-6 text-[#1A1816]" />
            <span className="font-brand text-2xl font-black tracking-tight text-[#1A1816] uppercase">
              RIDERSHIP
            </span>
          </a>
        </div>

        {/* Center / Nav Links (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-7 text-[14.5px] font-medium text-neutral-800"
          aria-label="Main Navigation"
        >
          <a
            href="#why-zaro"
            onClick={(e) => {
              e.preventDefault();
              onNavigateSection?.('why-zaro');
            }}
            className="hover:text-black transition-colors whitespace-nowrap shrink-0"
          >
            Why Ridership
          </a>
          <a
            href="#platform"
            onClick={(e) => {
              e.preventDefault();
              onNavigateSection?.('platform');
            }}
            className="hover:text-black transition-colors whitespace-nowrap shrink-0"
          >
            Platform
          </a>
          <a
            href="#perfect-knowledge"
            onClick={(e) => {
              e.preventDefault();
              onNavigateSection?.('perfect-knowledge');
            }}
            className="hover:text-black transition-colors whitespace-nowrap shrink-0"
          >
            Smart Mobility
          </a>
          <a
            href="#security"
            onClick={(e) => {
              e.preventDefault();
              onNavigateSection?.('security');
            }}
            className="hover:text-black transition-colors whitespace-nowrap shrink-0"
          >
            Safety
          </a>

          {/* Resources with chevron dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              onMouseEnter={() => setResourcesOpen(true)}
              className="flex items-center gap-1.5 hover:text-black transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1"
              aria-expanded={resourcesOpen}
            >
              <span>Resources</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-neutral-500 transition-transform duration-200 ${
                  resourcesOpen ? 'rotate-180 text-black' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {resourcesOpen && (
              <div
                onMouseLeave={() => setResourcesOpen(false)}
                className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-neutral-200/80 p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                <a
                  href="#architecture"
                  onClick={(e) => {
                    e.preventDefault();
                    setResourcesOpen(false);
                    onNavigateSection?.('architecture');
                  }}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-50 transition-colors group"
                >
                  <Cpu className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-neutral-900">
                      Dispatch Engine
                    </div>
                    <div className="text-[11px] text-neutral-500 leading-tight mt-0.5">
                      Real-time trip matching & routing architecture
                    </div>
                  </div>
                </a>

                <a
                  href="#security-doc"
                  onClick={(e) => {
                    e.preventDefault();
                    setResourcesOpen(false);
                    onNavigateSection?.('security');
                  }}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-50 transition-colors group"
                >
                  <ShieldCheck className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-neutral-900">
                      Rider & Driver Safety
                    </div>
                    <div className="text-[11px] text-neutral-500 leading-tight mt-0.5">
                      Verified drivers, SOS alerts & vehicle checks
                    </div>
                  </div>
                </a>

                <a
                  href="#integrations"
                  onClick={(e) => {
                    e.preventDefault();
                    setResourcesOpen(false);
                    onNavigateSection?.('integrations');
                  }}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-50 transition-colors group"
                >
                  <GitBranch className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-neutral-900">
                      Fleet & Partner APIs
                    </div>
                    <div className="text-[11px] text-neutral-500 leading-tight mt-0.5">
                      Driver telemetry, payments, and fleet management
                    </div>
                  </div>
                </a>

                <a
                  href="#case-studies"
                  onClick={(e) => {
                    e.preventDefault();
                    setResourcesOpen(false);
                    onNavigateSection?.('case-studies');
                  }}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-50 transition-colors group"
                >
                  <Users className="w-4 h-4 text-neutral-500 group-hover:text-neutral-900 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-neutral-900">
                      Rider & Operator Stories
                    </div>
                    <div className="text-[11px] text-neutral-500 leading-tight mt-0.5">
                      How riders and fleets move with Ridership
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Right: Sign in & Primary CTA */}
        <div className="hidden md:flex items-center gap-6 shrink-0">
          <button
            onClick={onOpenSignIn}
            className="text-[14.5px] font-medium text-neutral-800 hover:text-black transition-colors whitespace-nowrap cursor-pointer"
          >
            Sign in
          </button>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-[#1A1816] text-white px-4 py-2.5 rounded-md text-[14px] font-medium hover:bg-black transition-colors shadow-xs cursor-pointer whitespace-nowrap"
          >
            <span>Talk to our team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-800 hover:text-black focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E6E3DC] px-6 py-5 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-neutral-800">
            <a
              href="#why-zaro"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateSection?.('why-zaro');
              }}
              className="py-1 hover:text-black"
            >
              Why Ridership
            </a>
            <a
              href="#platform"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateSection?.('platform');
              }}
              className="py-1 hover:text-black"
            >
              Platform
            </a>
            <a
              href="#perfect-knowledge"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateSection?.('perfect-knowledge');
              }}
              className="py-1 hover:text-black"
            >
              Smart Mobility
            </a>
            <a
              href="#security"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateSection?.('security');
              }}
              className="py-1 hover:text-black"
            >
              Safety
            </a>
          </nav>
          <div className="pt-3 border-t border-[#E6E3DC] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignIn();
              }}
              className="w-full text-center py-2 text-sm font-medium text-neutral-800 hover:text-black"
            >
              Sign in
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#1A1816] text-white py-2.5 rounded-md text-sm font-medium hover:bg-black"
            >
              <span>Talk to our team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
