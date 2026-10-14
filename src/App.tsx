/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { ConsultationModal, HowItWorksModal, SignInModal } from './components/Modals';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [activeSectionNotice, setActiveSectionNotice] = useState<string | null>(null);

  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === 'platform' || sectionId === 'architecture') {
      setHowItWorksOpen(true);
    } else if (sectionId === 'security') {
      setActiveSectionNotice('Security & SOC 2 compliance documentation is available via technical consultation.');
      setTimeout(() => setActiveSectionNotice(null), 4000);
    } else if (sectionId === 'why-zaro' || sectionId === 'perfect-knowledge') {
      // Scroll smoothly to hero headline
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setHowItWorksOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1816] flex flex-col justify-between selection:bg-[#EAE5DC] selection:text-[#1A1816]">
      {/* Optional feedback banner for section triggers */}
      {activeSectionNotice && (
        <div className="bg-[#1A1816] text-[#FAF8F5] text-xs font-mono py-2 px-4 text-center sticky top-0 z-50 animate-in fade-in">
          {activeSectionNotice}
        </div>
      )}

      {/* 1. Header Navigation Bar */}
      <Header
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenSignIn={() => setSignInOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* 2. Hero Section with Headline & Isometric Knowledge Diagram */}
      <main className="flex-1">
        <Hero
          onOpenConsultation={() => setConsultationOpen(true)}
          onOpenHowItWorks={() => setHowItWorksOpen(true)}
        />

        {/* 3. Proof Strip: "BUILT BY THE TEAM FROM" & "BACKED BY" */}
        <TrustBar />

        {/* 4. Problem Statement / Feature Grid: "You have already bought the AI" */}
        <ProblemSection />
      </main>

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
      <HowItWorksModal
        isOpen={howItWorksOpen}
        onClose={() => setHowItWorksOpen(false)}
      />
      <SignInModal
        isOpen={signInOpen}
        onClose={() => setSignInOpen(false)}
      />
    </div>
  );
}
