"use client";
import AuroraLayer from "@/components/AuroraLayer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sprout, Coffee, MapPin, Globe2, Leaf, Award, Building, Eye, Sunset, GlassWater, TrendingUp, Cog, Ship } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverCard } from "@/components/animations/HoverCard";
import { CountUp } from "@/components/animations/CountUp";

export default function AgribusinessPage() {
  return (
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white">
        <AuroraLayer />
      
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden border-b border-brand-orchid/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black/80 to-brand-forestGreen/30 z-10" />
          <Image src="/agribusiness/hero.png" alt="Sustainable Agribusiness" fill className="object-cover opacity-60 mix-blend-screen" priority />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-brand-forestGreen pb-4 inline-block">
              Agriculture · Central Bhutan
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display leading-[1] mb-6">
              Sustainable <span className="text-brand-forestGreen">Agribusiness.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 font-medium text-brand-white/70">
              54 Acres of Premium Cash Crop Cultivation
            </p>
            
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-brand-forestGreen text-brand-black rounded-full shadow-lg shadow-brand-forestGreen/20">
              <Sprout className="w-5 h-5" />
              <span className="text-sm font-bold tracking-widest uppercase">
                Premium Luxury Produce
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
              A Legacy of Quality <br /> and Sustainability.
            </h2>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-8">
              Cultivating 54 Acres of Premium Cash Crops on company-owned land in Central Bhutan. We focus on sustainable, high-yield agricultural practices targeting global luxury produce markets, combining traditional values with modern agricultural science.
            </p>
            
            <div className="space-y-4 text-brand-white/50 font-medium">
              <div className="flex items-center gap-6 border-b border-brand-orchid/20 pb-4">
                <span className="text-xs tracking-widest uppercase">Location</span>
                <span className="text-brand-white italic transition-colors">Central Bhutan</span>
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
                <CountUp end={54} duration={1.5} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Acres</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantBlue" gradientClass="from-brand-vibrantBlue/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantBlue">
                <CountUp end={2} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Core Crops</span>
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
                <CountUp end={2026} duration={2} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Target Harvest</span>
            </HoverCard>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY / PRODUCTS */}
      <section className="w-full bg-creative-light text-brand-black py-16 md:py-32 border-b border-brand-saffron/20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display">Premium Produce.</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="columns-1 md:columns-3 gap-6 space-y-6 mb-20">
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square group">
              <Image src="/agribusiness/avocado.png" alt="Hass Avocados" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5] group">
              <Image src="/agribusiness/coffee.png" alt="Arabica Coffee" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square group">
              <Image src="/agribusiness/chain.png" alt="Global Supply Chain" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="grid md:grid-cols-2 gap-12 border-t border-brand-saffron/20 pt-12">
            <div className="flex flex-col items-start pr-8 md:border-r border-brand-saffron/20">
              <Sprout className="w-8 h-8 mb-6 text-brand-forestGreen" />
              <h3 className="text-3xl font-display mb-4">Hass Avocados</h3>
              <p className="text-brand-black/70 leading-relaxed text-lg">
                Premium Hass variety cultivation targeting global luxury produce markets with sustainable, high-yield agricultural practices.
              </p>
            </div>
            <div className="flex flex-col items-start md:pl-8">
              <Coffee className="w-8 h-8 mb-6 text-brand-dragonRed" />
              <h3 className="text-3xl font-display mb-4">Arabica Coffee</h3>
              <p className="text-brand-black/70 leading-relaxed text-lg">
                High-grade Arabica beans grown in Bhutan's pristine highlands, targeting specialty coffee's soaring global demand with unparalleled flavor profiles.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURE 1: Avocados */}
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal className="order-2 md:order-1 relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-forestGreen/10 group">
             <Image src="/agribusiness/avocado.png" alt="Hass Avocados" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="order-1 md:order-2">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-forestGreen">Core Crop 1</h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8">Hass Avocados</h2>
            <p className="text-brand-white/70 text-lg leading-relaxed">
              Premium Hass variety cultivation on company-owned land in Central Bhutan. Targeting global luxury produce markets with sustainable, high-yield agricultural practices.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURE 2: Coffee */}
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-white/50">Core Crop 2</h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8">Arabica Coffee</h2>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-12">
              High-grade Arabica beans grown in Bhutan's pristine highlands. Targeting specialty coffee's soaring global demand with unparalleled flavor profiles.
            </p>
            
            <div className="space-y-6 border-l border-brand-orchid/20 pl-8">
              <div className="flex items-center gap-4 text-lg">
                <Coffee className="w-6 h-6 text-brand-dragonRed" />
                <span>Pristine Highlands</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <Award className="w-6 h-6 text-brand-dragonRed" />
                <span>Specialty Grade</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <Globe2 className="w-6 h-6 text-brand-dragonRed" />
                <span>Global Demand</span>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-dragonRed/10 group">
             <Image src="/agribusiness/coffee.png" alt="Arabica Coffee" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* FEATURE 3: Integrated Chain */}
      <section className="w-full bg-creative-light text-brand-black py-16 md:py-32 border-b border-brand-saffron/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal delay={0.2} className="order-2 md:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-black/20 bg-gradient-to-br from-brand-gray/50 to-brand-white flex items-center justify-center">
             <Ship className="w-32 h-32 text-brand-black/20 hover:scale-105 transition-transform duration-700" />
          </ScrollReveal>
          <ScrollReveal className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8">Integrated Value Chain</h2>
            <p className="text-brand-black/70 text-lg leading-relaxed mb-12">
              From seed to global markets, we manage the entire lifecycle to ensure exceptional quality at every step, reducing our ecological footprint while maximizing economic output.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="px-6 py-3 border border-brand-black text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-black/30">End-to-End Control</motion.span>
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="px-6 py-3 border border-brand-black text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-black/30">Global Export</motion.span>
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
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-forestGreen">Development Roadmap</h3>
            <h2 className="text-4xl md:text-6xl font-display">Integrated Pipeline.</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid md:grid-cols-4 gap-8 pt-8">
            <HoverCard colorClass="bg-brand-forestGreen" gradientClass="from-brand-forestGreen/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-forestGreen transition-colors duration-500">01</span>
              <p className="text-xl font-display text-brand-white">Cultivation: Advanced Sustainable Farming</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-vibrantBlue" gradientClass="from-brand-vibrantBlue/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantBlue transition-colors duration-500">02</span>
              <p className="text-xl font-display text-brand-white">Harvest: World-Class Quality Yields</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-dragonRed" gradientClass="from-brand-dragonRed/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-dragonRed transition-colors duration-500">03</span>
              <p className="text-xl font-display text-brand-white">Processing: State-of-the-Art Facilities</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-vibrantGreen" gradientClass="from-brand-vibrantGreen/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantGreen transition-colors duration-500">04</span>
              <p className="text-xl font-display text-brand-white">Global Export: Premium International Markets</p>
            </HoverCard>
          </ScrollReveal>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="w-full py-16 md:py-32 border-t border-brand-orchid/20 text-center bg-brand-forestGreen text-brand-black">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-12">Intelligent Agriculture.</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link href="/ai-partnership" className="px-10 py-5 border-2 border-brand-black text-brand-black font-bold tracking-widest uppercase text-sm hover:bg-brand-black hover:text-brand-white transition-colors rounded-full">
            AI Transformation Plan
          </Link>
        </div>
      </section>

    </div>
  );
}