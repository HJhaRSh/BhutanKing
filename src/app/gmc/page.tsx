"use client";

import { motion } from "framer-motion";
import AuroraLayer from "@/components/AuroraLayer";
import { Crown, Star, Building2, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function GMCPage() {
  return (
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white">
        <AuroraLayer />
        <AuroraLayer />
      
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden border-b border-brand-orchid/20">

        {/* Bhutan Aurora Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Saffron glow — top right */}
          <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(255,149,0,0.15) 0%, transparent 65%)' }} />
          {/* Dragon red glow — centre */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(232,41,28,0.10) 0%, transparent 65%)' }} />
          {/* Orchid glow — bottom left */}
          <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(200,80,192,0.12) 0%, transparent 65%)' }} />
        </div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black to-brand-saffron/20" />
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full relative z-10 text-center mt-12 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase mb-6 text-brand-saffron">
              REAL ESTATE · GELEPHU MINDFULNESS CITY
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display leading-[1.1] mb-6 font-light tracking-tight">
              The Dralha <br/><span className="font-bold text-vibrant-gradient">GMC Residences</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium text-brand-white/70 max-w-2xl mx-auto">
              Luxury Serviced Apartments in His Majesty's Visionary City
            </p>
          </motion.div>
        </div>
      </section>

      {/* GMC EXPLAINER */}
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20 relative z-20 bg-creative-light text-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="relative pt-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-brand-black text-brand-saffron text-xs uppercase tracking-widest flex items-center gap-2 rounded-full shadow-lg shadow-brand-saffron/20">
        <AuroraLayer />
        <AuroraLayer />
               <Crown className="w-4 h-4" /> Context
            </div>
            <p className="text-3xl md:text-5xl leading-tight text-center font-display">
              "Gelephu Mindfulness City (GMC) is a Special Administrative Region spanning <span className="text-brand-saffron">2,500 sq km</span> in southern Bhutan, established under Royal Charter by His Majesty the King — masterfully fusing international business, modern technology, and mindful living."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* THE OPPORTUNITY */}
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-display mb-8">A Global Magnet.</h2>
            <p className="text-brand-white/70 text-xl leading-relaxed mb-8">
              As the world turns its attention to the GMC, the demand for premium, international-standard accommodations is skyrocketing. The city is drawing expatriates, corporate partners, international investors, and high-end tourists who require uncompromising quality.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="flex flex-col gap-8 border-l border-brand-orchid/20 pl-12">
            <div className="flex flex-col">
              <span className="text-4xl md:text-6xl lg:text-7xl font-display text-brand-saffron mb-2">2,500<span className="text-3xl ml-1">sq km</span></span>
              <span className="text-sm font-bold tracking-[0.2em] text-brand-white/70 uppercase">Total Size</span>
            </div>
            <div className="flex flex-col border-t border-brand-orchid/20 pt-8">
              <span className="text-4xl md:text-6xl lg:text-7xl font-display text-brand-orchid mb-2">SAR</span>
              <span className="text-sm font-bold tracking-[0.2em] text-brand-white/70 uppercase">Special Admin Region</span>
            </div>
            <div className="flex flex-col border-t border-brand-orchid/20 pt-8">
              <span className="text-4xl md:text-6xl lg:text-7xl font-display text-brand-forestGreen mb-2">Royal Charter</span>
              <span className="text-sm font-bold tracking-[0.2em] text-brand-white/70 uppercase">Established by His Majesty</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* THE DRALHA PROPOSITION */}
      <section className="w-full py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-6">The Dralha Proposition.</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center border-t-2 border-brand-saffron pt-12 group">
              <Building2 className="w-16 h-16 text-brand-saffron mb-8 stroke-1 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-display mb-4">World-Class Living</h3>
              <p className="text-brand-white/70 text-lg">
                High-standard luxury serviced apartments designed for the discerning global citizen.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center border-t-2 border-brand-orchid pt-12 group">
              <Briefcase className="w-16 h-16 text-brand-orchid mb-8 stroke-1 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-display mb-4">Premium Demographics</h3>
              <p className="text-brand-white/70 text-lg">
                Catering to international professionals, expatriates, and elite visitors to the GMC.
              </p>
            </div>

            <div className="flex flex-col items-center text-center border-t-2 border-brand-forestGreen pt-12 group">
              <Star className="w-16 h-16 text-brand-forestGreen mb-8 stroke-1 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-display mb-4">Future-Proof Value</h3>
              <p className="text-brand-white/70 text-lg">
                Strategically positioned to capitalize on the city's exponential growth.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STATUS BANNER */}
      <section className="w-full bg-brand-saffron py-12 text-center shadow-2xl shadow-brand-saffron/20">
        <h3 className="text-brand-black text-2xl md:text-3xl font-display font-bold uppercase">
          Breaking Ground Imminently
        </h3>
      </section>

    </div>
  );
}