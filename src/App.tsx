/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { TrueKnowledgeSection } from './components/TrueKnowledgeSection';
import { AttributedChatSection } from './components/AttributedChatSection';
import { ComplianceStatementSection } from './components/ComplianceStatementSection';
import { InteractiveVideoSection } from './components/InteractiveVideoSection';
import { CompoundingRoiSection } from './components/CompoundingRoiSection';
import { SecurityGovernanceSection } from './components/SecurityGovernanceSection';
import { ThreeThingsSection } from './components/ThreeThingsSection';
import { ConsultationModal, HowItWorksModal, SignInModal, SecurityModal } from './components/Modals';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [securityModalOpen, setSecurityModalOpen] = useState(false);
  const [activeSectionNotice, setActiveSectionNotice] = useState<string | null>(null);

  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === 'platform' || sectionId === 'architecture') {
      setHowItWorksOpen(true);
    } else if (sectionId === 'security') {
      setSecurityModalOpen(true);
    } else if (sectionId === 'why-zaro' || sectionId === 'why-ridership' || sectionId === 'perfect-knowledge' || sectionId === 'smart-mobility') {
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

      {/* 2. Hero Section with Headline & Isometric Mobility Diagram */}
      <main className="flex-1">
        <Hero
          onOpenConsultation={() => setConsultationOpen(true)}
          onOpenHowItWorks={() => setHowItWorksOpen(true)}
        />

        {/* 3. Proof Strip: "BUILT BY OPERATORS FROM" & "BACKED BY" */}
        <TrustBar />

        {/* 4. Problem Statement / Feature Grid: "You have already tried booking apps" */}
        <ProblemSection />

        {/* 5. Continuous Coordination: "Legacy dispatch tells you what was parked..." */}
        <TrueKnowledgeSection />

        {/* 6. Living Attributed Chat: "Why did this trip pickup delay occur..." */}
        <AttributedChatSection />

        {/* 7. Compliance & Audit Statement: "Inspect any trip behind your ride history..." */}
        <ComplianceStatementSection />

        {/* 8. Interactive Video Component: Allowed / Blocked / Audited */}
        <InteractiveVideoSection />

        {/* 9. Compounding Network Curves: "The first journey pays for itself..." */}
        <CompoundingRoiSection />

        {/* 10. Security & Governance: "Protected across every mile of your journey" */}
        <SecurityGovernanceSection onOpenSecurityModal={() => setSecurityModalOpen(true)} />

        {/* 11. Feature Intro & Carousel: "Three things Ridership can do." */}
        <ThreeThingsSection />
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
      <SecurityModal
        isOpen={securityModalOpen}
        onClose={() => setSecurityModalOpen(false)}
      />
    </div>
  );
}
