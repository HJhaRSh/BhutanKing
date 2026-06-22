"use client";

import { motion } from "framer-motion";
import AuroraLayer from "@/components/AuroraLayer";
import { Leaf, Users, Globe2, Sparkles, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function BambooPage() {
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
        {/* CSS Animation for B&W particles instead of gold */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-brand-forestGreen rounded-full"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
                opacity: Math.random() * 0.3,
                scale: Math.random() * 2,
              }}
              animate={{
                y: [null, Math.random() * -200],
                opacity: [null, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 mb-8 border-b border-brand-forestGreen/50 pb-2">
              <Sparkles className="w-4 h-4 text-brand-forestGreen" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-forestGreen">
                SUSTAINABILITY · COMING 2026–2027
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display leading-[1] mb-8">
              Bamboo <span className="text-brand-forestGreen">Revolution.</span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-brand-white/70 max-w-3xl mx-auto">
              Building Bhutan's Green Industrial Future
            </p>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="w-full bg-creative-light text-brand-black py-32 border-b border-brand-saffron/20">
        <ScrollReveal className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display mb-8">A Visionary Project in Samtse.</h2>
          <p className="text-brand-black/70 text-xl leading-relaxed">
            Located at the Dam Dum Industrial Estate in Samtse, this new venture utilizes Bhutan's abundant bamboo resources, supplemented by sourcing from West Bengal and Assam, India. We are establishing a comprehensive bamboo processing facility that will produce both industrial and consumer-grade products.
          </p>
        </ScrollReveal>
      </section>

      {/* THREE PILLARS */}
      <section className="w-full py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal delay={0.2} className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-start border-t-2 border-brand-forestGreen pt-12 group">
              <Leaf className="w-12 h-12 mb-8 stroke-1 text-brand-forestGreen group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-display mb-4">Sustainable Manufacturing</h3>
              <p className="text-brand-white/70 text-lg">
                Eco-friendly production aligned with Bhutan's conservation principles and gross national happiness.
              </p>
            </div>
            
            <div className="flex flex-col items-start border-t-2 border-brand-saffron pt-12 group">
              <Users className="w-12 h-12 mb-8 stroke-1 text-brand-saffron group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-display mb-4">Rural Livelihoods</h3>
              <p className="text-brand-white/70 text-lg">
                Supporting local communities across Bhutan through sustainable sourcing and employment opportunities.
              </p>
            </div>

            <div className="flex flex-col items-start border-t-2 border-brand-orchid pt-12 group">
              <Globe2 className="w-12 h-12 mb-8 stroke-1 text-brand-orchid group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-display mb-4">Export Potential</h3>
              <p className="text-brand-white/70 text-lg">
                Creating premium bamboo products destined for both regional and competitive global markets.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STATUS BAR */}
      <section className="w-full py-32 bg-creative-light text-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-y border-brand-black py-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col items-center text-center">
              <Clock className="w-16 h-16 mb-6 stroke-1 text-brand-forestGreen animate-pulse" />
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-brand-forestGreen">Project Stage</h3>
              <span className="text-3xl font-display bg-brand-forestGreen text-brand-black px-6 py-2 rounded-full shadow-lg shadow-brand-forestGreen/20">
                UNDER DEVELOPMENT
              </span>
            </div>
            
            <div className="h-px md:h-32 w-full md:w-px bg-brand-black/20" />
        <AuroraLayer />
        <AuroraLayer />
            
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-center md:text-left">Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-6 border-b border-brand-saffron/20 pb-4">
                  <span className="font-display text-4xl">2026</span>
                  <p className="text-xl">Site preparation begins</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-display text-4xl">2027</span>
                  <p className="text-xl">Plant completion target</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}