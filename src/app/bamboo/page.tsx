"use client";
import AuroraLayer from "@/components/AuroraLayer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Users, Globe2, Sparkles, Clock, ShieldCheck, MapPin, Factory, Package } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverCard } from "@/components/animations/HoverCard";
import { CountUp } from "@/components/animations/CountUp";

export default function BambooPage() {
  return (
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white">
        <AuroraLayer />
      
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden border-b border-brand-orchid/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-black/40 z-10" />
          <Image 
            src="/bamboo/hero-bg.png"
            alt="Bamboo Revolution"
            fill
            className="object-cover opacity-60 mix-blend-screen"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-brand-forestGreen pb-4 inline-block">
              Sustainability · Coming 2026–2027
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display leading-[1] mb-6">
              Bamboo <span className="text-brand-forestGreen">Revolution.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 font-medium text-brand-white/70">
              Building Bhutan's Green Industrial Future
            </p>
            
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-brand-forestGreen text-brand-black rounded-full shadow-lg shadow-brand-forestGreen/20">
              <Clock className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-bold tracking-widest uppercase">
                Project Stage: Under Development
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-display mb-8 leading-tight">
              A Visionary Project <br /> in Samtse.
            </h2>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-8">
              Located at the Dam Dum Industrial Estate in Samtse, this new venture utilizes Bhutan's abundant bamboo resources, supplemented by sourcing from West Bengal and Assam, India. We are establishing a comprehensive bamboo processing facility that will produce both industrial and consumer-grade products.
            </p>
            
            <div className="space-y-4 text-brand-white/50 font-medium">
              <div className="flex items-center gap-6 border-b border-brand-orchid/20 pb-4">
                <span className="text-xs tracking-widest uppercase">Location</span>
                <span className="text-brand-white italic transition-colors">Dam Dum Industrial Estate, Samtse</span>
              </div>
              <div className="flex items-center gap-6 border-b border-brand-orchid/20 pb-4">
                <span className="text-xs tracking-widest uppercase">Mail</span>
                <a href="mailto:info@bhutanking.com" className="text-brand-white hover:text-brand-forestGreen transition-colors">info@bhutanking.com</a>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs tracking-widest uppercase">Tel</span>
                <a href="tel:+97505252284" className="text-brand-white hover:text-brand-forestGreen transition-colors">+975 05 2522 84</a>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid grid-cols-2 gap-4">
            <HoverCard colorClass="bg-brand-vibrantOrange" gradientClass="from-brand-vibrantOrange/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantOrange">
                <CountUp end={2026} duration={1.5} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Site Prep</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantBlue" gradientClass="from-brand-vibrantBlue/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantBlue">
                <CountUp end={2027} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Completion</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantPink" gradientClass="from-brand-vibrantPink/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantPink">
                <CountUp end={100} duration={1.5} />
                <span className="text-2xl ml-1">%</span>
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Sustainable</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantGreen" gradientClass="from-brand-vibrantGreen/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantGreen">
                <CountUp end={3} duration={2} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Core Pillars</span>
            </HoverCard>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY / PRODUCTS */}
      <section className="w-full bg-creative-light text-brand-black py-16 md:py-32 border-b border-brand-saffron/20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display">Our Materials.</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="columns-1 md:columns-3 gap-6 space-y-6 mb-20">
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square group">
              <Image src="/bamboo/raw.png" alt="Raw Bamboo" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5] group">
              <Image src="/bamboo/product.png" alt="Bamboo Products" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square group">
              <Image src="/bamboo/factory.png" alt="Bamboo Factory" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="grid md:grid-cols-2 gap-12 border-t border-brand-saffron/20 pt-12">
            <div className="flex flex-col items-start pr-8 md:border-r border-brand-saffron/20">
              <Leaf className="w-8 h-8 mb-6 text-brand-forestGreen" />
              <h3 className="text-3xl font-display mb-4">Raw Sourcing</h3>
              <p className="text-brand-black/70 leading-relaxed text-lg">
                Sourcing sustainable bamboo from the rich forests of Bhutan, supplemented by quality materials from West Bengal and Assam, ensuring consistent supply.
              </p>
            </div>
            <div className="flex flex-col items-start md:pl-8">
              <Package className="w-8 h-8 mb-6 text-brand-forestGreen" />
              <h3 className="text-3xl font-display mb-4">Final Products</h3>
              <p className="text-brand-black/70 leading-relaxed text-lg">
                Creating both high-end consumer goods and essential industrial-grade materials built for longevity and ecological harmony.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURE 1: Sustainable Manufacturing */}
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal className="order-2 md:order-1 relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-forestGreen/10 group">
             <Image src="/bamboo/factory.png" alt="Sustainable Manufacturing" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="order-1 md:order-2">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-forestGreen">Pillar 1</h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8">Sustainable Manufacturing</h2>
            <p className="text-brand-white/70 text-lg leading-relaxed">
              Eco-friendly production aligned with Bhutan's conservation principles and gross national happiness. We are dedicated to zero-waste operations and sustainable harvesting.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURE 2: Rural Livelihoods */}
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-white/50">Pillar 2</h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8">Rural Livelihoods</h2>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-12">
              Supporting local communities across Bhutan through sustainable sourcing and employment opportunities.
            </p>
            
            <div className="space-y-6 border-l border-brand-orchid/20 pl-8">
              <div className="flex items-center gap-4 text-lg">
                <Users className="w-6 h-6 text-brand-forestGreen" />
                <span>Community Employment</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <ShieldCheck className="w-6 h-6 text-brand-forestGreen" />
                <span>Fair Trade Sourcing</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <MapPin className="w-6 h-6 text-brand-forestGreen" />
                <span>Regional Development</span>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-forestGreen/10 group">
             <Image src="/bamboo/raw.png" alt="Rural Livelihoods" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* FEATURE 3: Export Potential */}
      <section className="w-full bg-creative-light text-brand-black py-16 md:py-32 border-b border-brand-saffron/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal delay={0.2} className="order-2 md:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-black/20 bg-gradient-to-br from-brand-white to-brand-forestGreen/10 flex items-center justify-center">
             <Globe2 className="w-32 h-32 text-brand-forestGreen/50 hover:scale-105 transition-transform duration-700" />
          </ScrollReveal>
          <ScrollReveal className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8">Export Potential</h2>
            <p className="text-brand-black/70 text-lg leading-relaxed mb-12">
              Creating premium bamboo products destined for both regional and competitive global markets. We are positioning Bhutan as a premier supplier of eco-friendly industrial materials.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="px-6 py-3 border border-brand-black text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-black/30">Regional</motion.span>
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="px-6 py-3 border border-brand-black text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-black/30">Global Markets</motion.span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FUTURE PLANS */}
      <section className="w-full py-16 md:py-32 relative overflow-hidden">
        {/* Background gradient for this section to make it pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black to-brand-forestGreen/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-24">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-forestGreen">Project Timeline</h3>
            <h2 className="text-4xl md:text-6xl font-display">Development Roadmap.</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid md:grid-cols-4 gap-8 pt-8">
            <HoverCard colorClass="bg-brand-forestGreen" gradientClass="from-brand-forestGreen/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-forestGreen transition-colors duration-500">01</span>
              <p className="text-xl font-display text-brand-white">2026: Site Preparation Begins</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-vibrantBlue" gradientClass="from-brand-vibrantBlue/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantBlue transition-colors duration-500">02</span>
              <p className="text-xl font-display text-brand-white">Facility Construction</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-vibrantOrange" gradientClass="from-brand-vibrantOrange/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantOrange transition-colors duration-500">03</span>
              <p className="text-xl font-display text-brand-white">2027: Plant Completion Target</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-vibrantGreen" gradientClass="from-brand-vibrantGreen/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantGreen transition-colors duration-500">04</span>
              <p className="text-xl font-display text-brand-white">Full Scale Export Operations</p>
            </HoverCard>
          </ScrollReveal>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="w-full py-16 md:py-32 border-t border-brand-orchid/20 text-center bg-brand-forestGreen text-brand-white">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-12">Intelligent Manufacturing.</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link href="/ai-partnership" className="px-10 py-5 border-2 border-brand-white text-brand-white font-bold tracking-widest uppercase text-sm hover:bg-brand-white hover:text-brand-forestGreen transition-colors rounded-full">
            AI Transformation Plan
          </Link>
        </div>
      </section>

    </div>
  );
}