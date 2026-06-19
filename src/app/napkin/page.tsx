"use client";

import { motion } from "framer-motion";
import { Factory, Box, PackageSearch, Activity } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Image from "next/image";

export default function NapkinPage() {
  return (
    <div className="w-full flex flex-col items-center bg-creative-light text-brand-black">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[80vh] flex items-end pb-20 justify-start overflow-hidden border-b border-brand-black/20">
        <div className="absolute inset-0 z-0 bg-brand-white">
          <Image 
            src="/napkin/hero-bg.png"
            alt="Napkin Factory"
            fill
            className="object-cover opacity-60 mix-blend-multiply"
            priority
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-creative-light via-creative-light/70 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-brand-vibrantPurple pb-4 inline-block">
              Manufacturing · Est. 2009
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display leading-[1] mb-6">
              Napkin <span className="text-brand-vibrantPurple">Factory.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-brand-black/70">
              Bhutan's Leading Tissue & Hygiene Products Manufacturer
            </p>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="w-full py-32 border-b border-brand-black/20">
        <ScrollReveal className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display mb-8">From Cottage to Commercial Scale.</h2>
          <p className="text-brand-black/70 text-xl leading-relaxed">
            Established in 2009, the Dralha Napkin Factory began as a cottage industry and has rapidly grown to commercial scale to meet domestic demand. Currently operating within the Dralha Flour Mill premises, we provide essential hygiene products across Bhutan.
          </p>
        </ScrollReveal>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="w-full bg-brand-black text-brand-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-24 text-center">
            <h2 className="text-5xl md:text-7xl font-display">Our Products.</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="grid md:grid-cols-3 gap-x-12 gap-y-16 border-t border-brand-white/20 pt-16 mb-24">
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="relative w-full aspect-square mb-8 rounded-2xl overflow-hidden bg-brand-white/5 border border-brand-white/10 group-hover:border-brand-vibrantPurple transition-colors">
                <Image src="/napkin/1.jpeg" alt="Table Napkins" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-3xl font-display mb-4">Table Napkins</h3>
              <p className="text-brand-white/70 text-lg">Available in 2 varieties for everyday and premium use.</p>
            </div>
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="relative w-full aspect-square mb-8 rounded-2xl overflow-hidden bg-brand-white/5 border border-brand-white/10 group-hover:border-brand-vibrantBlue transition-colors">
                <Image src="/napkin/2.jpeg" alt="Toilet Paper Rolls" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-3xl font-display mb-4">Toilet Paper Rolls</h3>
              <p className="text-brand-white/70 text-lg">Available in 2 varieties, offering superior comfort and quality.</p>
            </div>
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="relative w-full aspect-square mb-8 rounded-2xl overflow-hidden bg-brand-white/5 border border-brand-white/10 group-hover:border-brand-vibrantPink transition-colors">
                <Image src="/napkin/3.jpeg" alt="Facial Tissues" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-3xl font-display mb-4">Facial Tissues</h3>
              <p className="text-brand-white/70 text-lg">Soft, durable, and gentle on the skin.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4} className="grid md:grid-cols-2 gap-x-12 gap-y-16 border-t border-brand-white/20 pt-16 border-dashed">
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <span className="text-xs tracking-widest text-brand-white/50 uppercase mb-4">Planned</span>
              <div className="relative w-full aspect-[16/9] mb-8 rounded-2xl overflow-hidden bg-brand-white/5 border border-brand-white/10 group-hover:border-brand-vibrantPurple transition-colors">
                <Image src="/napkin/11.jpeg" alt="Kitchen Rolls" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-3xl font-display mb-4">Kitchen Rolls</h3>
              <p className="text-brand-white/70 text-lg">Highly absorbent paper towels for culinary and home use.</p>
            </div>
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <span className="text-xs tracking-widest text-brand-white/50 uppercase mb-4">Planned</span>
              <div className="relative w-full aspect-[16/9] mb-8 rounded-2xl overflow-hidden bg-brand-white/5 border border-brand-white/10 group-hover:border-brand-vibrantPurple transition-colors">
                <Image src="/napkin/12.jpeg" alt="M-Fold Hard Paper" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-3xl font-display mb-4">M-Fold Hard Paper</h3>
              <p className="text-brand-white/70 text-lg">Designed for institutional and hospital use.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="w-full py-32 bg-brand-white/5 border-b border-brand-white/20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display mb-6">Facility Showcase.</h2>
            <p className="text-brand-white/70 text-lg">A glimpse into our manufacturing and distribution.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.2} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/napkin/13.jpeg" alt="Napkin Facility 1" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </ScrollReveal>
            <ScrollReveal delay={0.4} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/napkin/14.jpeg" alt="Napkin Facility 2" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CUSTOMERS SECTION */}
      <section className="w-full py-32 border-b border-brand-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display mb-6">Our Customers.</h2>
            <p className="text-brand-black/70 text-lg">Serving diverse segments across the nation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="py-12 border-t border-b border-brand-black/20 text-center">
              <h3 className="text-2xl font-display">Hotels & Resorts</h3>
            </div>
            <div className="py-12 border-t border-b border-brand-black/20 text-center">
              <h3 className="text-2xl font-display">Retail & Supermarkets</h3>
            </div>
            <div className="py-12 border-t border-b border-brand-black/20 text-center">
              <h3 className="text-2xl font-display">Commercial Establishments</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE PLANS */}
      <section className="w-full bg-brand-vibrantPurple text-brand-white py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Factory className="w-20 h-20 mx-auto mb-12 stroke-1" />
          <h2 className="text-5xl md:text-7xl font-display mb-10">Modernization Program.</h2>
          <p className="text-brand-white/70 text-xl leading-relaxed">
            We are embarking on an ambitious modernization journey to increase our production capacity. This includes integrating new, state-of-the-art machinery for facial tissues, kitchen rolls, and M-Fold hard paper tailored for hospital standards.
          </p>
        </div>
      </section>

    </div>
  );
}