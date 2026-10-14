import React from 'react';

// Exact Zaro Cluster Mark from the header and top isometric layer
export function ZaroLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zaro logo"
    >
      {/* Central hub */}
      <circle cx="20" cy="20" r="4.2" fill="currentColor" />
      {/* 6 primary satellites arranged symmetrically in a ring */}
      <circle cx="20" cy="8.5" r="3.2" fill="currentColor" />
      <circle cx="30" cy="14.25" r="3.2" fill="currentColor" />
      <circle cx="30" cy="25.75" r="3.2" fill="currentColor" />
      <circle cx="20" cy="31.5" r="3.2" fill="currentColor" />
      <circle cx="10" cy="25.75" r="3.2" fill="currentColor" />
      <circle cx="10" cy="14.25" r="3.2" fill="currentColor" />
      {/* Micro accent satellite dots */}
      <circle cx="20" cy="2.5" r="1.6" fill="currentColor" opacity="0.8" />
      <circle cx="35" cy="11.5" r="1.6" fill="currentColor" opacity="0.8" />
      <circle cx="35" cy="28.5" r="1.6" fill="currentColor" opacity="0.8" />
      <circle cx="20" cy="37.5" r="1.6" fill="currentColor" opacity="0.8" />
      <circle cx="5" cy="28.5" r="1.6" fill="currentColor" opacity="0.8" />
      <circle cx="5" cy="11.5" r="1.6" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

// Convergence Logo (Triquetra braided loops + wordmark)
export function ConvergenceLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-neutral-800 shrink-0"
      >
        {/* Celtic triquetra braided knot */}
        <path d="M12 2.5C7.5 10 5 13.5 5 16.5a7 7 0 0 0 14 0c0-3-2.5-6.5-7-14Z" />
        <path d="M4.5 17.5C10 13 13.5 10.5 16.5 10.5a7 7 0 0 1 0 14c-3 0-6.5-2.5-12-7Z" />
        <path d="M19.5 17.5C14 13 10.5 10.5 7.5 10.5a7 7 0 0 0 0 14c3 0 6.5-2.5 12-7Z" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-[15px] font-semibold tracking-tight text-neutral-900 leading-none">
          Convergence
        </span>
        <span className="text-[8.5px] font-mono tracking-wider text-neutral-500 uppercase mt-1">
          Acquired by Salesforce
        </span>
      </div>
    </div>
  );
}

// PolyAI Logo (Patterned dot star + wordmark)
export function PolyAILogo({ className = 'h-7' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-neutral-900 shrink-0"
      >
        {/* Central dot */}
        <circle cx="14" cy="14" r="2.2" fill="currentColor" />
        {/* Outer orbital nodes in cross/star formation */}
        <circle cx="14" cy="6" r="1.6" fill="currentColor" />
        <circle cx="14" cy="22" r="1.6" fill="currentColor" />
        <circle cx="6" cy="14" r="1.6" fill="currentColor" />
        <circle cx="22" cy="14" r="1.6" fill="currentColor" />
        <circle cx="8" cy="8" r="1.4" fill="currentColor" />
        <circle cx="20" cy="8" r="1.4" fill="currentColor" />
        <circle cx="8" cy="20" r="1.4" fill="currentColor" />
        <circle cx="20" cy="20" r="1.4" fill="currentColor" />
      </svg>
      <span className="text-[17px] font-semibold tracking-tight text-neutral-900">
        PolyAI
      </span>
    </div>
  );
}

// Salesforce Logo (Classic cloud symbol)
export function SalesforceLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 120 84"
        fill="currentColor"
        className="h-6 w-auto text-neutral-800"
      >
        <path d="M48.8 15.3c5.6-7.8 14.8-12.8 25.1-12.8 15.6 0 28.5 11.5 30.7 26.5 4.8 2.3 8.3 7 9.2 12.6 6.8 2.2 11.6 8.5 11.6 15.9 0 9.3-7.5 16.8-16.8 16.8H21.5C9.6 74.3 0 64.7 0 52.8c0-10.4 7.4-19.1 17.3-21.1 2.5-9.8 11.4-17.1 22-17.1 3.4 0 6.6.8 9.5 2.2v-1.5z" />
        {/* Slanted 'salesforce' stylized inside cloud */}
        <text
          x="60"
          y="49"
          textAnchor="middle"
          fontSize="17"
          fontStyle="italic"
          fontWeight="700"
          fontFamily="serif"
          fill="#FAF8F5"
        >
          salesforce
        </text>
      </svg>
    </div>
  );
}

// Hugging Face Logo (Warm hugging face emoji vector)
export function HuggingFaceLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="text-xl leading-none select-none" role="img" aria-label="Hugging Face">
        🤗
      </span>
      <span className="text-[16px] font-bold tracking-tight text-neutral-900">
        Hugging Face
      </span>
    </div>
  );
}
