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
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white overflow-x-hidden min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex flex-col items-center justify-center text-center border-b border-brand-saffron/20 pt-20 overflow-hidden bg-brand-black">
        {/* Majestic Background Image (Agri/Journey) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/agri.png')", backgroundAttachment: "fixed" }}
        />
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/80" />
        
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase mb-6 text-brand-saffron pb-4 inline-block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            History
          </h2>
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-display leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-brand-white to-brand-white/80 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            Our Journey.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-brand-white/70 max-w-3xl mx-auto">
            35+ Years of Building Bhutan
          </p>
        </motion.div>
      </section>

      {/* MILESTONES GRID */}
      <section className="w-full bg-creative-light py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.05} className="h-full">
                <div className="h-full p-8 flex flex-col justify-between items-start text-left bg-brand-white rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] border-b-4 border-brand-saffron hover:-translate-y-2 transition-transform duration-300 group">
                  <div className="w-full">
                    <div className="flex justify-between items-start mb-12 w-full">
                      <span className={`text-5xl font-display ${m.color} transition-opacity`}>
                        {m.year}
                      </span>
                      <Icon className={`w-8 h-8 stroke-1 ${m.color} transition-transform group-hover:scale-110`} />
                    </div>
                    <h3 className="text-2xl font-display mb-4 text-brand-black">
                      {m.title}
                    </h3>
                  </div>
                  <p className="text-brand-black/70 text-sm font-medium leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="w-full bg-brand-black text-brand-white py-32 mt-20 border-t border-brand-saffron/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-display mb-6">The Next 10–25 Years.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Manufacturing */}
            <div className="group relative h-[420px] rounded-[32px] overflow-hidden cursor-pointer shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(232,41,28,0.3)]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/mill/hero-bg.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl bg-brand-dragonRed/20 border border-brand-dragonRed/30 backdrop-blur-md flex items-center justify-center mb-6">
                  <Factory className="w-8 h-8 text-brand-dragonRed drop-shadow-[0_0_8px_rgba(232,41,28,0.8)]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-white leading-snug">Agri-Food Manufacturing Leadership</h3>
              </div>
            </div>

            {/* Card 2: Agriculture */}
            <div className="group relative h-[420px] rounded-[32px] overflow-hidden cursor-pointer shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(34,139,34,0.3)]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/agri.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl bg-brand-forestGreen/20 border border-brand-forestGreen/30 backdrop-blur-md flex items-center justify-center mb-6">
                  <Coffee className="w-8 h-8 text-brand-forestGreen drop-shadow-[0_0_8px_rgba(34,139,34,0.8)]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-white leading-snug">High-Value Cash Crop Agriculture</h3>
                <p className="text-brand-white/70 mt-3 font-medium">(54 acres, avocado + coffee)</p>
              </div>
            </div>

            {/* Card 3: Real Estate */}
            <div className="group relative h-[420px] rounded-[32px] overflow-hidden cursor-pointer shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(255,149,0,0.3)]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/dralha_heritage.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl bg-brand-saffron/20 border border-brand-saffron/30 backdrop-blur-md flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-brand-saffron drop-shadow-[0_0_8px_rgba(255,149,0,0.8)]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-white leading-snug">GMC Luxury Real Estate Development</h3>
              </div>
            </div>

            {/* Card 4: Hospitality */}
            <div className="group relative h-[420px] rounded-[32px] overflow-hidden cursor-pointer shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(200,80,192,0.3)]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/hotel/Hotel Room 2.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl bg-brand-orchid/20 border border-brand-orchid/30 backdrop-blur-md flex items-center justify-center mb-6">
                  <Bed className="w-8 h-8 text-brand-orchid drop-shadow-[0_0_8px_rgba(200,80,192,0.8)]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-white leading-snug">Premium Hospitality Chain Expansion</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}