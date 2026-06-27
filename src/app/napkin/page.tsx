"use client";
import AuroraLayer from "@/components/AuroraLayer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Factory, Box, ShieldCheck, MapPin, Map, Package, Leaf, Award, Building, Eye, Sunset, GlassWater, Activity, PackageSearch } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverCard } from "@/components/animations/HoverCard";
import { CountUp } from "@/components/animations/CountUp";

export default function NapkinPage() {
  return (
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white">
        <AuroraLayer />
      
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden border-b border-brand-orchid/20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/napkin/hero-bg.png"
            alt="Napkin Factory"
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
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-brand-orchid pb-4 inline-block">
              Manufacturing · Est. 2009
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display leading-[1] mb-6">
              Napkin <span className="text-brand-orchid">Factory.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 font-medium text-brand-white/70">
              Bhutan's Leading Tissue & Hygiene Products Manufacturer
            </p>
            
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orchid text-brand-white rounded-full shadow-lg shadow-brand-orchid/20">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-bold tracking-widest uppercase text-brand-white">
                Essential Hygiene Across Bhutan
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
              From Cottage to <br /> Commercial Scale.
            </h2>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-8">
              Established in 2009, the Dralha Napkin Factory began as a cottage industry and has rapidly grown to commercial scale to meet domestic demand. Currently operating within the Dralha Flour Mill premises, we provide essential hygiene products across Bhutan.
            </p>
            
            <div className="space-y-4 text-brand-white/50 font-medium">
              <div className="flex items-center gap-6 border-b border-brand-orchid/20 pb-4">
                <span className="text-xs tracking-widest uppercase">Location</span>
                <span className="text-brand-white italic transition-colors">Dralha Flour Mill Premises</span>
              </div>
              <div className="flex items-center gap-6 border-b border-brand-orchid/20 pb-4">
                <span className="text-xs tracking-widest uppercase">Mail</span>
                <a href="mailto:info@bhutanking.com" className="text-brand-white hover:text-brand-orchid transition-colors">info@bhutanking.com</a>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs tracking-widest uppercase">Tel</span>
                <a href="tel:+97505252284" className="text-brand-white hover:text-brand-orchid transition-colors">+975 05 2522 84</a>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid grid-cols-2 gap-4">
            <HoverCard colorClass="bg-brand-vibrantOrange" gradientClass="from-brand-vibrantOrange/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantOrange">
                <CountUp end={2009} duration={1.5} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Established</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantBlue" gradientClass="from-brand-vibrantBlue/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantBlue">
                <CountUp end={3} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Core Products</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantPink" gradientClass="from-brand-vibrantPink/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantPink">
                <CountUp end={2} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Planned Lines</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantGreen" gradientClass="from-brand-vibrantGreen/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantGreen">
                <CountUp end={100} duration={2} />
                <span className="text-2xl ml-1">%</span>
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Domestic</span>
            </HoverCard>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY / PRODUCTS */}
      <section className="w-full bg-creative-light text-brand-black py-16 md:py-32 border-b border-brand-saffron/20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display">Our Products.</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="columns-1 md:columns-3 gap-6 space-y-6 mb-20">
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square group">
              <Image src="/napkin/1.jpeg" alt="Table Napkins" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5] group">
              <Image src="/napkin/2.jpeg" alt="Toilet Paper Rolls" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square group">
              <Image src="/napkin/3.jpeg" alt="Facial Tissues" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="grid md:grid-cols-2 gap-12 border-t border-brand-saffron/20 pt-12">
            <div className="flex flex-col items-start pr-8 md:border-r border-brand-saffron/20">
              <Package className="w-8 h-8 mb-6 text-brand-orchid" />
              <h3 className="text-3xl font-display mb-4">Table & Toilet Rolls</h3>
              <p className="text-brand-black/70 leading-relaxed text-lg">
                Available in multiple varieties for everyday and premium use. Designed to offer superior comfort, quality, and absorption.
              </p>
            </div>
            <div className="flex flex-col items-start md:pl-8">
              <Leaf className="w-8 h-8 mb-6 text-brand-orchid" />
              <h3 className="text-3xl font-display mb-4">Facial Tissues</h3>
              <p className="text-brand-black/70 leading-relaxed text-lg">
                Soft, durable, and gentle on the skin. Specially formulated for delicate use while maintaining high strength and quality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURE 1: Planned Products */}
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal className="order-2 md:order-1 relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-orchid/10">
             <Image src="/napkin/11.jpeg" alt="Planned Products" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="order-1 md:order-2">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-orchid">Upcoming Additions</h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8">Kitchen Rolls & M-Fold</h2>
            <p className="text-brand-white/70 text-lg leading-relaxed">
              We are expanding our lines to include highly absorbent Kitchen Rolls for culinary use, and M-Fold Hard Paper designed specifically for institutional and hospital use.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURE 2: Customers */}
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-white/50">Market Reach</h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8">Our Customers</h2>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-12">
              Serving diverse segments across the nation. We are a trusted supplier ensuring consistent quality and availability for businesses and homes.
            </p>
            
            <div className="space-y-6 border-l border-brand-orchid/20 pl-8">
              <div className="flex items-center gap-4 text-lg">
                <Building className="w-6 h-6 text-brand-orchid" />
                <span>Hotels & Resorts</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <PackageSearch className="w-6 h-6 text-brand-orchid" />
                <span>Retail & Supermarkets</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <Factory className="w-6 h-6 text-brand-orchid" />
                <span>Commercial Establishments</span>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-orchid/10">
             <Image src="/napkin/12.jpeg" alt="Market Reach" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* FEATURE 3: Facility */}
      <section className="w-full bg-creative-light text-brand-black py-16 md:py-32 border-b border-brand-saffron/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal delay={0.2} className="order-2 md:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-black/20">
             <Image src="/napkin/13.jpeg" alt="Facility Showcase" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </ScrollReveal>
          <ScrollReveal className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8">Facility Showcase</h2>
            <p className="text-brand-black/70 text-lg leading-relaxed mb-12">
              A glimpse into our manufacturing and distribution. We maintain a high standard of hygiene and efficiency across all operations to ensure safe, reliable product output.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="px-6 py-3 border border-brand-black text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-black/30">Manufacturing</motion.span>
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="px-6 py-3 border border-brand-black text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-black/30">Distribution</motion.span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FUTURE PLANS */}
      <section className="w-full py-16 md:py-32 relative overflow-hidden">
        {/* Background gradient for this section to make it pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black to-brand-orchid/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-24">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-orchid">Ambitious Journey</h3>
            <h2 className="text-4xl md:text-6xl font-display">Modernization Program.</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid md:grid-cols-4 gap-8 pt-8">
            <HoverCard colorClass="bg-brand-orchid" gradientClass="from-brand-orchid/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-orchid transition-colors duration-500">01</span>
              <p className="text-xl font-display text-brand-white">Increase Production Capacity</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-vibrantBlue" gradientClass="from-brand-vibrantBlue/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantBlue transition-colors duration-500">02</span>
              <p className="text-xl font-display text-brand-white">State-of-the-art Machinery</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-vibrantOrange" gradientClass="from-brand-vibrantOrange/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantOrange transition-colors duration-500">03</span>
              <p className="text-xl font-display text-brand-white">Hospital Standards (M-Fold)</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-vibrantGreen" gradientClass="from-brand-vibrantGreen/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantGreen transition-colors duration-500">04</span>
              <p className="text-xl font-display text-brand-white">Culinary Kitchen Rolls Expansion</p>
            </HoverCard>
          </ScrollReveal>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="w-full py-16 md:py-32 border-t border-brand-orchid/20 text-center bg-brand-orchid text-brand-white">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-12">Intelligent Manufacturing.</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link href="/ai-partnership" className="px-10 py-5 border-2 border-brand-white text-brand-white font-bold tracking-widest uppercase text-sm hover:bg-brand-white hover:text-brand-orchid transition-colors rounded-full">
            AI Transformation Plan
          </Link>
        </div>
      </section>

    </div>
  );
}