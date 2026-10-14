import React from 'react';

// 1. Microsoft Fabric Logo (Teal/Green folded ribbon)
export function FabricLogo({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 2L9 6.5L4 11V2Z" fill="#00A389" />
      <path d="M4 7L11 11.5L6.5 14L4 11.5V7Z" fill="#008272" />
      <path d="M8 5.5L12 9L9 11.5L6.5 9L8 5.5Z" fill="#3CDBC0" />
    </svg>
  );
}

// 2. Snowflake Logo (Cyan Snowflake)
export function SnowflakeLogo({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#29B5E8" strokeWidth="2.4" strokeLinecap="round" className={className}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="3.34" y1="7" x2="20.66" y2="17" />
      <line x1="3.34" y1="17" x2="20.66" y2="7" />
      {/* Branch ticks */}
      <path d="M9.5 4.5L12 7L14.5 4.5" />
      <path d="M9.5 19.5L12 17L14.5 19.5" />
      <path d="M5.5 10.5L7.5 12.5L6 15" />
      <path d="M18.5 13.5L16.5 11.5L18 9" />
    </svg>
  );
}

// 3. Databricks Logo (Red/Orange stacked 3D layers)
export function DatabricksLogo({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF3621" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3L2 8.5L12 14L22 8.5L12 3Z" />
      <path d="M2 12.5L12 18L22 12.5" />
      <path d="M2 16.5L12 22L22 16.5" />
    </svg>
  );
}

// 4. Copilot Logo (Microsoft Copilot ribbon loop)
export function CopilotLogo({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M12 4C8.5 4 5.5 6.5 5.5 10C5.5 13 8 15 11 15H13C16 15 18.5 17 18.5 20"
        stroke="#0078D4"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M12 20C15.5 20 18.5 17.5 18.5 14C18.5 11 16 9 13 9H11C8 9 5.5 7 5.5 4"
        stroke="#EA4335"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 5. ChatGPT Logo (OpenAI spiral knot)
export function ChatGPTLogo({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-neutral-800`}>
      <path d="M20.5 9.5a5.5 5.5 0 0 0-4.5-4.4 5.5 5.5 0 0 0-7.3-2.1 5.5 5.5 0 0 0-4.7 4.7 5.5 5.5 0 0 0-2.1 7.3 5.5 5.5 0 0 0 4.7 4.7 5.5 5.5 0 0 0 7.3 2.1 5.5 5.5 0 0 0 4.7-4.7 5.5 5.5 0 0 0 1.9-7.6zm-8.5 9.5a4 4 0 0 1-2.8-1.2l1.6-1.6a2 2 0 0 0 2.4.4l1.1 1.9a4 4 0 0 1-2.3.5zm-5-3.5a4 4 0 0 1-.5-3l2.2.4a2 2 0 0 0 1.2 2.1l-1.1 1.9a4 4 0 0 1-1.8-1.4zm-.2-5.5a4 4 0 0 1 2.3-2l1.1 1.9a2 2 0 0 0-.4 2.4l-2.2-.4a4 4 0 0 1-.8-1.9zm6.2-3a4 4 0 0 1 2.8 1.2l-1.6 1.6a2 2 0 0 0-2.4-.4l-1.1-1.9a4 4 0 0 1 2.3-.5zm5 3.5a4 4 0 0 1 .5 3l-2.2-.4a2 2 0 0 0-1.2-2.1l1.1-1.9a4 4 0 0 1 1.8 1.4zm.2 5.5a4 4 0 0 1-2.3 2l-1.1-1.9a2 2 0 0 0 .4-2.4l2.2.4a4 4 0 0 1 .8 1.9z" />
    </svg>
  );
}

// 6. Gemini Logo (Google Gemini 4-point color spark)
export function GeminiLogo({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"
        fill="url(#gemini_grad)"
      />
      <defs>
        <linearGradient id="gemini_grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A73E8" />
          <stop offset="50%" stopColor="#8AB4F8" />
          <stop offset="100%" stopColor="#00A389" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 7. Glean Logo (Blue disc with search/knowledge mark)
export function GleanLogo({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="12" cy="12" r="10" fill="#2563EB" />
      <circle cx="11" cy="11" r="4.2" stroke="white" strokeWidth="2" />
      <line x1="14.2" y1="14.2" x2="17" y2="17" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// 8. Palantir Logo (Palantir circle ring with vertical stand)
export function PalantirLogo({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`${className} text-neutral-900`}>
      <circle cx="12" cy="10" r="6" />
      <line x1="12" y1="16" x2="12" y2="21" />
      <line x1="8" y1="21" x2="16" y2="21" />
    </svg>
  );
}

// 9. Sinequa Logo (Sinequa search polygon/ring)
export function SinequaLogo({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="4" width="14" height="14" rx="3" />
      <line x1="14" y1="14" x2="20" y2="20" />
    </svg>
  );
}
