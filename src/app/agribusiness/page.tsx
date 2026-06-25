"use client";

import { motion } from "framer-motion";
import AuroraLayer from "@/components/AuroraLayer";
import { Sprout, Coffee, ArrowRight, TrendingUp, Ship, Cog } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function AgribusinessPage() {
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
           {/* Replace brown gradients with a dark vibrant background or just solid black with vibrant noise */}
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-black via-brand-black to-brand-forestGreen/10" />
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8 gap-8 border-b border-brand-orchid/20 pb-8">
               <Sprout className="w-16 h-16 text-brand-forestGreen" />
               <Coffee className="w-16 h-16 text-brand-dragonRed" />
            </div>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-brand-forestGreen mt-8">
              AGRICULTURE · CENTRAL BHUTAN
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display leading-[1] mb-8">
              Sustainable <span className="text-brand-forestGreen">Agribusiness.</span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-brand-white/70 max-w-3xl mx-auto">
              54 Acres of Premium Cash Crop Cultivation
            </p>
          </motion.div>
        </div>
      </section>

      {/* TWO CROPS */}
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="grid md:grid-cols-2 gap-12 md:gap-20">
            
            {/* Avocados */}
            <div className="flex flex-col items-start group">
              <Sprout className="w-20 h-20 text-brand-forestGreen mb-10 stroke-1 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-5xl font-display text-brand-white mb-6">Hass <span className="text-brand-forestGreen">Avocados.</span></h3>
              <p className="text-brand-white/70 text-xl leading-relaxed">
                Premium Hass variety cultivation on company-owned land in Central Bhutan. Targeting global luxury produce markets with sustainable, high-yield agricultural practices.
              </p>
            </div>

            {/* Coffee */}
            <div className="flex flex-col items-start group">
              <Coffee className="w-20 h-20 text-brand-dragonRed mb-10 stroke-1 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-5xl font-display text-brand-white mb-6">Arabica <span className="text-brand-dragonRed">Coffee.</span></h3>
              <p className="text-brand-white/70 text-xl leading-relaxed">
                High-grade Arabica beans grown in Bhutan's pristine highlands. Targeting specialty coffee's soaring global demand with unparalleled flavor profiles.
              </p>
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* INTEGRATED PIPELINE */}
      <section className="w-full py-16 md:py-32 bg-creative-light text-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-6">Integrated Value Chain.</h2>
            <p className="text-brand-black/70 text-xl max-w-2xl mx-auto">From seed to global markets.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex flex-col md:flex-row items-center justify-between gap-12 relative border-t border-brand-saffron/20 pt-20">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center w-full md:w-1/4 hover:scale-105 transition-transform duration-300">
              <Sprout className="w-16 h-16 text-brand-forestGreen mb-6 stroke-1" />
              <h4 className="text-3xl font-display mb-4">1. Cultivation</h4>
              <p className="text-lg text-brand-black/70">Advanced sustainable farming techniques</p>
            </div>

            <ArrowRight className="hidden md:block w-8 h-8 text-brand-black/30" />

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center w-full md:w-1/4 hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-16 h-16 text-brand-saffron mb-6 stroke-1" />
              <h4 className="text-3xl font-display mb-4">2. Harvest</h4>
              <p className="text-lg text-brand-black/70">World-class quality yields</p>
            </div>

            <ArrowRight className="hidden md:block w-8 h-8 text-brand-black/30" />

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center w-full md:w-1/4 hover:scale-105 transition-transform duration-300">
              <Cog className="w-16 h-16 text-brand-dragonRed mb-6 stroke-1" />
              <h4 className="text-3xl font-display mb-4">3. Processing</h4>
              <p className="text-lg text-brand-black/70">In-house state-of-the-art processing facilities</p>
            </div>

            <ArrowRight className="hidden md:block w-8 h-8 text-brand-black/30" />

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center w-full md:w-1/4">
              <Ship className="w-16 h-16 text-brand-orchid mb-6 stroke-1" />
              <h4 className="text-3xl font-display mb-4">4. Global Export</h4>
              <p className="text-lg text-brand-black/70">International premium markets</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}