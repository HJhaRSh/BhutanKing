"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wheat, Box, ShieldCheck, MapPin, Map, Factory, Package, Leaf } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverCard } from "@/components/animations/HoverCard";
import { CountUp } from "@/components/animations/CountUp";

export default function MillPage() {
  return (
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden border-b border-brand-white/20">
        <div className="absolute inset-0 z-0 bg-brand-black">
          <Image 
            src="/mill/hero-bg.png"
            alt="Dralha Flour Mill"
            fill
            className="object-cover opacity-60 mix-blend-screen"
            priority
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-brand-vibrantOrange pb-4 inline-block">
              Food Manufacturing · Bhutan's First
            </h2>
            <h1 className="text-6xl md:text-8xl font-display leading-[1] mb-6">
              Dralha Flour <span className="text-brand-vibrantOrange">Mill.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 font-medium text-brand-white/70">
              Feeding Bhutan Since 1988
            </p>
            
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-brand-vibrantOrange text-brand-black rounded-full shadow-lg shadow-brand-vibrantOrange/20">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-bold tracking-widest uppercase">
                Bhutan's Only Flour Mill — 100 MT/Day
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="w-full py-32 border-b border-brand-white/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-display mb-8 leading-tight">
              A Legacy of Quality and Trust.
            </h2>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-6">
              Established in 1988, Dralha Flour Mill stands as the pioneering and sole flour mill in Bhutan. Starting with an original capacity of 60 Tons Per Day (TPD), we successfully expanded to 100 TPD in 2010 to meet the growing demands of our nation.
            </p>
            <p className="text-brand-white/70 text-lg leading-relaxed border-l border-brand-white/20 pl-6 mt-8 italic">
              Currently located in the Phuentsholing Industrial Estate, we are preparing for a major strategic relocation in June 2026 to Dam Dum Samtse.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid grid-cols-2 gap-4">
            <HoverCard colorClass="bg-brand-vibrantOrange" gradientClass="from-brand-vibrantOrange/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantOrange">
                <CountUp end={1988} duration={1.5} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-black/50 group-hover:text-brand-black font-bold uppercase transition-colors">Founded</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantBlue" gradientClass="from-brand-vibrantBlue/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantBlue">
                <CountUp end={100} />
                <span className="text-2xl ml-1">MT</span>
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-black/50 group-hover:text-brand-black font-bold uppercase transition-colors">Capacity</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantPink" gradientClass="from-brand-vibrantPink/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantPink">
                <CountUp end={2010} duration={1.5} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-black/50 group-hover:text-brand-black font-bold uppercase transition-colors">Expanded</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantGreen" gradientClass="from-brand-vibrantGreen/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantGreen">
                <CountUp end={1.4} duration={2} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-black/50 group-hover:text-brand-black font-bold uppercase transition-colors">Acres (New)</span>
            </HoverCard>
          </ScrollReveal>
        </div>
      </section>

      {/* RELOCATION NEWS */}
      <section className="w-full bg-creative-light text-brand-black py-24 border-b border-brand-black/20">
        <ScrollReveal className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-8 flex items-center justify-center gap-4">
            <MapPin className="w-6 h-6" /> Relocation Update — June 2026
          </h3>
          <p className="text-3xl md:text-5xl font-display leading-tight">
            Relocating to the new Dam Dum Industrial Estate, Samtse — a strategic 1.4-acre facility on the Indian border.
          </p>
        </ScrollReveal>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="w-full py-32 border-b border-brand-white/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 text-center">
            <h2 className="text-5xl md:text-7xl font-display">Our Core Products.</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-x-12 gap-y-16">
            <div className="flex flex-col items-center text-center border-t border-brand-white/20 pt-12">
              <Wheat className="w-16 h-16 mb-8 stroke-1" />
              <h3 className="font-display text-4xl mb-4">Atta</h3>
              <span className="text-xs tracking-widest uppercase mb-6 text-brand-white/50">Whole Wheat Flour</span>
              <p className="text-brand-white/70 text-lg leading-relaxed">Stone-ground whole wheat for traditional cooking and healthy diets.</p>
            </div>
            
            <div className="flex flex-col items-center text-center border-t border-brand-white/20 pt-12">
              <Box className="w-16 h-16 mb-8 stroke-1" />
              <h3 className="font-display text-4xl mb-4">Maida</h3>
              <span className="text-xs tracking-widest uppercase mb-6 text-brand-white/50">Refined Flour</span>
              <p className="text-brand-white/70 text-lg leading-relaxed">Fine-milled refined flour perfect for baking, pastries, and confectionery.</p>
            </div>

            <div className="flex flex-col items-center text-center border-t border-brand-white/20 pt-12">
              <Wheat className="w-16 h-16 mb-8 stroke-1 transform rotate-45" />
              <h3 className="font-display text-4xl mb-4">Suji</h3>
              <span className="text-xs tracking-widest uppercase mb-6 text-brand-white/50">Semolina</span>
              <p className="text-brand-white/70 text-lg leading-relaxed">Coarsely milled semolina ideal for traditional desserts and savory dishes.</p>
            </div>

            <div className="flex flex-col items-center text-center border-t border-brand-white/20 pt-12">
              <Leaf className="w-16 h-16 mb-8 stroke-1" />
              <h3 className="font-display text-4xl mb-4">Wheat Bran</h3>
              <span className="text-xs tracking-widest uppercase mb-6 text-brand-white/50">Nutritious By-Product</span>
              <p className="text-brand-white/70 text-lg leading-relaxed">High-fiber, nutritious by-product for health-conscious consumers and animal feed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="w-full bg-creative-light text-brand-black py-32 border-b border-brand-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 text-center">
            <h2 className="text-5xl md:text-7xl font-display">From Wheat to Table.</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            <div className="flex flex-col items-start border-l border-brand-black/20 pl-8">
              <Map className="w-12 h-12 mb-6 stroke-1" />
              <h4 className="font-display text-3xl mb-4">1. Sourcing</h4>
              <p className="text-brand-black/70 text-lg leading-relaxed">Premium quality wheat sourced from the best fields in Bihar & West Bengal, India.</p>
            </div>

            <div className="flex flex-col items-start border-l border-brand-black/20 pl-8">
              <ShieldCheck className="w-12 h-12 mb-6 stroke-1" />
              <h4 className="font-display text-3xl mb-4">2. Cleaning & Tempering</h4>
              <p className="text-brand-black/70 text-lg leading-relaxed">Meticulous preparation and cleaning of wheat kernels to ensure absolute purity.</p>
            </div>

            <div className="flex flex-col items-start border-l border-brand-black/20 pl-8">
              <Factory className="w-12 h-12 mb-6 stroke-1" />
              <h4 className="font-display text-3xl mb-4">3. Grinding</h4>
              <p className="text-brand-black/70 text-lg leading-relaxed">Specialized roller systems for precise milling, preserving nutritional value.</p>
            </div>

            <div className="flex flex-col items-start border-l border-brand-black/20 pl-8">
              <Package className="w-12 h-12 mb-6 stroke-1" />
              <h4 className="font-display text-3xl mb-4">4. Packaging</h4>
              <p className="text-brand-black/70 text-lg leading-relaxed">Careful processing, quality control, and secure retail packaging for delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section className="w-full py-32 border-b border-brand-white/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="border border-brand-white/10 bg-brand-white/5 rounded-2xl p-12 text-center hover:border-brand-vibrantOrange/50 transition-colors duration-300">
            <span className="text-7xl mb-8 block">🇧🇹</span>
            <h4 className="font-display text-3xl mb-4">Domestic Market</h4>
            <p className="text-brand-white/70 text-lg">Sole flour supplier to Bhutan's national market, ensuring food security.</p>
          </div>
          <div className="border border-brand-white/10 bg-brand-white/5 rounded-2xl p-12 text-center hover:border-brand-vibrantBlue/50 transition-colors duration-300">
            <span className="text-7xl mb-8 block">🇮🇳</span>
            <h4 className="font-display text-3xl mb-4">India Exports</h4>
            <p className="text-brand-white/70 text-lg">Strong export relationships with extensive Indian markets across the border.</p>
          </div>
          <div className="border border-brand-white/10 bg-brand-white/5 rounded-2xl p-12 text-center hover:border-brand-vibrantGreen/50 transition-colors duration-300">
            <span className="text-7xl mb-8 block">🇧🇩</span>
            <h4 className="font-display text-3xl mb-4">Bangladesh</h4>
            <p className="text-brand-white/70 text-lg">A rapidly growing regional export presence supplying quality flour products.</p>
          </div>
        </div>
      </section>

      {/* FUTURE PLANS */}
      <section className="w-full bg-creative-light text-brand-black py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-black/50 border-b border-brand-black/20 pb-4 inline-block">Strategic Expansion</h3>
            <h2 className="text-5xl md:text-7xl font-display">Future Lines.</h2>
          </div>

          <div className="flex flex-col border-t border-brand-black/20">
            {[
              { num: "01", title: "Wheat-Based Cookies & Biscuits", desc: "Premium baked goods utilizing our own high-quality milled flour." },
              { num: "02", title: "Healthy Cereal Products", desc: "Nutritious breakfast cereals catering to health-conscious consumers." },
              { num: "03", title: "Bread Manufacturing Unit", desc: "Large-scale commercial bakery for fresh daily bread production." },
              { num: "04", title: "Noodle Production Facility", desc: "Instant and fresh noodle manufacturing using our refined flour." },
              { num: "05", title: "Increased Overall Capacity", desc: "Scaling up operations at the new Samtse facility to meet regional demands." }
            ].map((plan) => (
              <div key={plan.num} className="border-b border-brand-black/20 py-8 flex flex-col md:flex-row md:items-center justify-between group">
                <div className="flex items-center gap-8 md:w-2/3 mb-4 md:mb-0">
                  <span className="text-2xl font-display text-brand-black/30 group-hover:text-brand-black transition-colors">{plan.num}</span>
                  <h4 className="text-3xl md:text-5xl font-display">{plan.title}</h4>
                </div>
                <div className="md:w-1/3 text-lg text-brand-black/70">
                  {plan.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="w-full bg-brand-vibrantOrange text-brand-black py-32 border-t border-brand-white/20 text-center">
        <h2 className="text-5xl md:text-7xl font-display mb-12">Intelligent Manufacturing.</h2>
        <Link href="/ai-partnership" className="inline-block px-10 py-5 border-2 border-brand-black text-brand-black font-bold tracking-widest uppercase text-sm hover:bg-brand-black hover:text-brand-vibrantOrange transition-colors rounded-full">
          AI Transformation Plan
        </Link>
      </section>

    </div>
  );
}