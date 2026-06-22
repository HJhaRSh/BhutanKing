import React from 'react';

export default function AuroraLayer() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Saffron blast — top right */}
      <div className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full animate-pulse"
           style={{ background: 'radial-gradient(circle, rgba(255,140,0,0.30) 0%, rgba(255,45,26,0.15) 40%, transparent 65%)', animationDuration: '4s' }} />
      {/* Orchid blast — bottom left */}
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full animate-pulse"
           style={{ background: 'radial-gradient(circle, rgba(224,64,251,0.28) 0%, rgba(124,77,255,0.18) 40%, transparent 65%)', animationDuration: '6s' }} />
      {/* Sky blue burst — centre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
           style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 60%)' }} />
      {/* Dragon red streak — top left */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full"
           style={{ background: 'radial-gradient(circle, rgba(255,45,26,0.20) 0%, transparent 60%)' }} />
    </div>
  );
}
