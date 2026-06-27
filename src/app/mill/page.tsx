"use client";
import AuroraLayer from "@/components/AuroraLayer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wheat, Box, ShieldCheck, MapPin, Map, Factory, Package, Leaf, Award, Building, Eye, Sunset, GlassWater } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverCard } from "@/components/animations/HoverCard";
import { CountUp } from "@/components/animations/CountUp";

export default function MillPage() {
  return (
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white">
        <AuroraLayer />
      
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden border-b border-brand-orchid/20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/mill/hero-bg.png"
            alt="Dralha Flour Mill"
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
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-brand-vibrantOrange pb-4 inline-block">
              Food Manufacturing · Bhutan's First
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display leading-[1] mb-6">
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
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-display mb-8 leading-tight">
              A Legacy of Quality <br /> and Trust.
            </h2>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-8">
              Established in 1988, Dralha Flour Mill stands as the pioneering and sole flour mill in Bhutan. Starting with an original capacity of 60 Tons Per Day (TPD), we successfully expanded to 100 TPD in 2010 to meet the growing demands of our nation.
            </p>
            
            <div className="space-y-4 text-brand-white/50 font-medium">
              <div className="flex items-center gap-6 border-b border-brand-orchid/20 pb-4">
                <span className="text-xs tracking-widest uppercase">Update</span>
                <span className="text-brand-white italic transition-colors">Relocating to Dam Dum Samtse in 2026.</span>
              </div>
              <div className="flex items-center gap-6 border-b border-brand-orchid/20 pb-4">
                <span className="text-xs tracking-widest uppercase">Mail</span>
                <a href="mailto:dralhaflourmill@gmail.com" className="text-brand-white hover:text-brand-vibrantOrange transition-colors">dralhaflourmill@gmail.com</a>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs tracking-widest uppercase">Tel</span>
                <a href="tel:+97505252284" className="text-brand-white hover:text-brand-vibrantOrange transition-colors">+975 05 2522 84</a>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid grid-cols-2 gap-4">
            <HoverCard colorClass="bg-brand-vibrantOrange" gradientClass="from-brand-vibrantOrange/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantOrange">
                <CountUp end={1988} duration={1.5} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Founded</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantBlue" gradientClass="from-brand-vibrantBlue/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantBlue">
                <CountUp end={100} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Capacity MT</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantPink" gradientClass="from-brand-vibrantPink/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantPink">
                <CountUp end={2010} duration={1.5} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Expanded</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantGreen" gradientClass="from-brand-vibrantGreen/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantGreen">
                <CountUp end={1.4} duration={2} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Acres (New)</span>
            </HoverCard>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY / PRODUCTS */}
      <section className="w-full bg-creative-light text-brand-black py-16 md:py-32 border-b border-brand-saffron/20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display">Core Products.</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="columns-1 md:columns-3 gap-6 space-y-6 mb-20">
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square group">
              <Image src="/mill/atta.png" alt="Atta and Maida" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5] group">
              <Image src="/mill/suji.png" alt="Suji and Wheat Bran" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square group">
              <Image src="/mill/wheat.png" alt="Wheat Fields" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="grid md:grid-cols-2 gap-12 border-t border-brand-saffron/20 pt-12">
            <div className="flex flex-col items-start pr-8 md:border-r border-brand-saffron/20">
              <Wheat className="w-8 h-8 mb-6" />
              <h3 className="text-3xl font-display mb-4">Atta & Maida</h3>
              <p className="text-brand-black/70 leading-relaxed text-lg">
                Stone-ground whole wheat for traditional cooking and healthy diets, alongside fine-milled refined flour perfect for baking, pastries, and confectionery.
              </p>
            </div>
            <div className="flex flex-col items-start md:pl-8">
              <Leaf className="w-8 h-8 mb-6" />
              <h3 className="text-3xl font-display mb-4">Suji & Wheat Bran</h3>
              <p className="text-brand-black/70 leading-relaxed text-lg">
                Coarsely milled semolina ideal for traditional desserts, plus high-fiber, nutritious by-product for health-conscious consumers and animal feed.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURE 1: Sourcing & Cleaning */}
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal className="order-2 md:order-1 relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-vibrantOrange/10 group">
             <Image src="/mill/wheat.png" alt="Sourcing & Cleaning" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="order-1 md:order-2">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-vibrantOrange">Process 1 & 2</h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8">Sourcing & Cleaning</h2>
            <p className="text-brand-white/70 text-lg leading-relaxed">
              Premium quality wheat sourced from the best fields in Bihar & West Bengal, India. We ensure meticulous preparation and cleaning of wheat kernels for absolute purity before milling.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURE 2: Grinding & Packaging */}
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-white/50">Process 3 & 4</h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8">Grinding & Packaging</h2>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-12">
              Specialized roller systems for precise milling, preserving nutritional value. Careful processing, quality control, and secure retail packaging ensure fresh delivery.
            </p>
            
            <div className="space-y-6 border-l border-brand-orchid/20 pl-8">
              <div className="flex items-center gap-4 text-lg">
                <Factory className="w-6 h-6" />
                <span>Specialized Milling</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <ShieldCheck className="w-6 h-6" />
                <span>Quality Control</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <Package className="w-6 h-6" />
                <span>Retail Packaging</span>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-vibrantBlue/10 group">
             <Image src="/mill/factory.png" alt="Grinding & Packaging" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* FEATURE 3: Markets */}
      <section className="w-full bg-creative-light text-brand-black py-16 md:py-32 border-b border-brand-saffron/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal delay={0.2} className="order-2 md:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-black/20 group">
             <Image src="/mill/export.png" alt="Export Markets" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </ScrollReveal>
          <ScrollReveal className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8">Our Markets</h2>
            <p className="text-brand-black/70 text-lg leading-relaxed mb-12">
              Sole flour supplier to Bhutan's national market, ensuring food security. We also have strong export relationships with extensive Indian markets and a rapidly growing regional export presence supplying quality flour products to Bangladesh.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="px-6 py-3 border border-brand-black text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-black/30">Domestic (Bhutan)</motion.span>
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="px-6 py-3 border border-brand-black text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-black/30">Exports (India)</motion.span>
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="px-6 py-3 border border-brand-black text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-black/30">Exports (Bangladesh)</motion.span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FUTURE PLANS */}
      <section className="w-full py-16 md:py-32 relative overflow-hidden">
        {/* Background gradient for this section to make it pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black to-brand-vibrantOrange/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-24">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-vibrantOrange">Strategic Expansion</h3>
            <h2 className="text-4xl md:text-6xl font-display">Future Lines.</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid md:grid-cols-4 gap-8 pt-8">
            <HoverCard colorClass="bg-brand-vibrantPink" gradientClass="from-brand-vibrantPink/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantPink transition-colors duration-500">01</span>
              <p className="text-xl font-display text-brand-white">Wheat-Based Cookies & Biscuits</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-vibrantBlue" gradientClass="from-brand-vibrantBlue/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantBlue transition-colors duration-500">02</span>
              <p className="text-xl font-display text-brand-white">Healthy Cereal Products</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-vibrantOrange" gradientClass="from-brand-vibrantOrange/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantOrange transition-colors duration-500">03</span>
              <p className="text-xl font-display text-brand-white">Bread Manufacturing Unit</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-vibrantGreen" gradientClass="from-brand-vibrantGreen/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantGreen transition-colors duration-500">04</span>
              <p className="text-xl font-display text-brand-white">Noodle Production Facility</p>
            </HoverCard>
          </ScrollReveal>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="w-full py-16 md:py-32 border-t border-brand-orchid/20 text-center bg-brand-vibrantOrange text-brand-black">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-12">Intelligent Manufacturing.</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link href="/ai-partnership" className="px-10 py-5 border-2 border-brand-black text-brand-black font-bold tracking-widest uppercase text-sm hover:bg-brand-black hover:text-brand-white transition-colors rounded-full">
            AI Transformation Plan
          </Link>
        </div>
      </section>

    </div>
  );
}