"use client";

import { motion } from "framer-motion";
import AuroraLayer from "@/components/AuroraLayer";
import { Factory, Bed, Box, Package, Award, Building, Sprout, Building2, Coffee, Store } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverCard } from "@/components/animations/HoverCard";

const milestones = [
  { year: "1988", title: "Establishment of Dralha Flour Mill", desc: "Bhutan's first flour mill.", icon: Factory, color: "text-brand-dragonRed" },
  { year: "2009", title: "Launch of Dralha Napkin Factory", desc: "Established to meet growing domestic demand.", icon: Box, color: "text-brand-orchid" },
  { year: "2010", title: "Modernization of Flour Mill", desc: "Capacity expanded from 60 MT to 100 MT/day.", icon: Building, color: "text-brand-dragonRed" },
  { year: "2015", title: "Toilet Paper Production", desc: "Introduction of toilet paper production at Napkin Factory.", icon: Package, color: "text-brand-saffron" },
  { year: "2016", title: "New Machinery Installed", desc: "New napkin machinery installed, reducing production time.", icon: Factory, color: "text-brand-orchid" },
  { year: "2018", title: "Hotel Dralha Opens", desc: "Achieves 3-star certification in Thimphu.", icon: Bed, color: "text-brand-orchid" },
  { year: "2019", title: "Packaging Unit Established", desc: "For Atta and Maida (900g, 1kg, 5kg retail).", icon: Store, color: "text-brand-dragonRed" },
  { year: "2020", title: "Efficiency Improvements", desc: "New toilet roll production machine installed.", icon: Package, color: "text-brand-saffron" },
  { year: "2021", title: "Hotel Dralha Expands", desc: "12 new units added, rooftop bar & conference facility.", icon: Bed, color: "text-brand-orchid" },
  { year: "2025", title: "SATA Award Winner", desc: "Best City Hotel Under 40 Rooms.", icon: Award, color: "text-brand-orchid" },
  { year: "2026", title: "Relocation", desc: "Flour Mill & Napkin Factory relocation to Dam Dum Industrial Estate, Samtse.", icon: Building2, color: "text-brand-saffron" },
  { year: "2026-27", title: "Bamboo Revolution", desc: "Plant completion projected for green industrial future.", icon: Sprout, color: "text-brand-forestGreen" },
];

export default function MilestonesPage() {
  return (
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white overflow-x-hidden">
        <AuroraLayer />
        <AuroraLayer />
      
      {/* HERO SECTION */}
      <section className="w-full pt-40 pb-32 px-6 text-center border-b border-brand-orchid/20">

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-brand-saffron pb-4 inline-block">
            History
          </h2>
          <h1 className="text-6xl md:text-8xl font-display leading-[1.1] mb-6">
            Our Journey.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-brand-white/70 max-w-3xl mx-auto">
            35+ Years of Building Bhutan
          </p>
        </motion.div>
      </section>

      {/* MILESTONES GRID */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.05} className="h-full">
                <HoverCard className="h-full p-8 flex flex-col justify-between !items-start text-left border-brand-saffron/20 hover:border-brand-black/30 group">
                  <div>
                    <div className="flex justify-between items-start mb-12 w-full">
                      <span className={`text-5xl font-display ${m.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                        {m.year}
                      </span>
                      <Icon className={`w-8 h-8 stroke-1 ${m.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                    </div>
                    <h3 className="text-2xl font-display mb-4 text-brand-black group-hover:text-brand-black transition-colors">
                      {m.title}
                    </h3>
                  </div>
                  <p className="text-brand-black/70 text-sm leading-relaxed group-hover:text-brand-black transition-colors">
                    {m.desc}
                  </p>
                </HoverCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="w-full bg-creative-light text-brand-black py-32 mt-20 border-t border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-display mb-6">The Next 10–25 Years.</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            <div className="flex flex-col items-center text-center border-t-2 border-brand-dragonRed pt-12 group">
              <Factory className="w-16 h-16 text-brand-dragonRed mb-8 stroke-1 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-display font-bold">Agri-Food Manufacturing Leadership</h3>
            </div>
            <div className="flex flex-col items-center text-center border-t-2 border-brand-forestGreen pt-12 group">
              <Coffee className="w-16 h-16 text-brand-forestGreen mb-8 stroke-1 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-display font-bold">High-Value Cash Crop Agriculture</h3>
              <p className="text-sm text-brand-black/70 mt-4">(54 acres, avocado + coffee)</p>
            </div>
            <div className="flex flex-col items-center text-center border-t-2 border-brand-saffron pt-12 group">
              <Building2 className="w-16 h-16 text-brand-saffron mb-8 stroke-1 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-display font-bold">GMC Luxury Real Estate Development</h3>
            </div>
            <div className="flex flex-col items-center text-center border-t-2 border-brand-orchid pt-12 group">
              <Bed className="w-16 h-16 text-brand-orchid mb-8 stroke-1 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-display font-bold">Premium Hospitality Chain Expansion</h3>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}