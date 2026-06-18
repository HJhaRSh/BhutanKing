"use client";

import ParticleBackground from "./ParticleBackground";

interface DynamicDarkBackgroundProps {
  showParticles?: boolean;
}

export default function DynamicDarkBackground({ showParticles = false }: DynamicDarkBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {showParticles && <ParticleBackground />}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A05906_1px,transparent_1px),linear-gradient(to_bottom,#C5A05906_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_20%,transparent_100%)] z-0" />
      <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-brand-gold/[0.04] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0" />
    </div>
  );
}
