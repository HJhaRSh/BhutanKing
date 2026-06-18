"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { ArrowRight, Leaf, Shirt, Building2, GraduationCap, HeartPulse, Truck } from "lucide-react";
import Link from "next/link";
import DynamicDarkBackground from "@/components/DynamicDarkBackground";

export default function DralhaPage() {
  const managementTeam = [
    {
      name: "Ashi Deki Choden Wangchuck",
      title: "Managing Director",
      desc: "Provides strategic leadership and oversees the overall operations of Dralha Group.",
      bio: "Since joining the Group in 1999, she has guided its growth and development while ensuring operations align with sustainable practices inspired by Gross National Happiness."
    },
    {
      name: "Mr. S.K. Tarafdar",
      title: "Chief Financial Officer",
      desc: "Oversees financial management, budgeting, financial planning, and risk oversight.",
      bio: "With over 40 years of experience, he has strengthened the Group's financial position since its inception in 1988."
    },
    {
      name: "Mr. Shamsher Alam",
      title: "Marketing & Sales Manager",
      desc: "Leads the company's marketing and sales functions, focusing on brand development.",
      bio: "Oversees the sales team, manages client relationships, and aligns sales strategies with the Group's broader objectives."
    },
    {
      name: "Mr. Meyo Rabsel Namgyel",
      title: "Deputy Director",
      desc: "Supports operational management and strategic planning.",
      bio: "A graduate of Regent's College London in Graphic Design, he also leads the company's creative direction and branding."
    },
    {
      name: "Mr. Ricksel Namgyel",
      title: "Assistant Director",
      desc: "Supports senior management in overseeing operations and coordinating key projects.",
      bio: "Holds a master's degree in Business Innovation from Bangkok University and ensures operational efficiency across departments."
    }
  ];

  const sectors = [
    {
      icon: Leaf,
      name: "Agriculture & Natural Resources",
      desc: "Bhutan's fertile lands, sustainably managed",
      ai: "Precision Farming & Yield Prediction"
    },
    {
      icon: Shirt,
      name: "Textiles & Handloom",
      desc: "Traditional crafts at industrial scale",
      ai: "Computer Vision Quality Control"
    },
    {
      icon: HeartPulse,
      name: "Hospitality & Tourism",
      desc: "Welcoming the world to the Last Shangri-La",
      ai: "Personalized Guest Experiences"
    },
    {
      icon: Building2,
      name: "Infrastructure & Construction",
      desc: "Building tomorrow's Bhutan",
      ai: "Smart Energy Management"
    },
    {
      icon: GraduationCap,
      name: "Education & Training",
      desc: "Investing in Bhutan's human capital",
      ai: "Adaptive Learning Pathways"
    },
    {
      icon: Truck,
      name: "Trade & Distribution",
      desc: "Connecting Bhutan to regional markets",
      ai: "Supply Chain Optimization"
    }
  ];

  const challenges = [
    { title: "Data Fragmentation", desc: "Decisions made without unified data insights" },
    { title: "Manual Operations", desc: "High labour dependency across sectors" },
    { title: "Quality Control", desc: "Inconsistent product quality in textiles & agri" },
    { title: "Customer Intelligence", desc: "Limited understanding of visitor/buyer patterns" },
    { title: "Supply Chain Gaps", desc: "Inefficiencies from farm to market" },
  ];

  return (
    <div className="relative overflow-x-hidden pt-20">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-brand-navy">
        <DynamicDarkBackground showParticles={true} />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-block mb-10 text-gray-500 tracking-[0.3em] text-xs font-semibold uppercase">
            The Kingdom&apos;s Conglomerate
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-6xl md:text-8xl font-display font-bold text-white mb-8 tracking-tight">
            Dralha Group.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            A cornerstone of Bhutan&apos;s economy — built on heritage, ready for the future.
          </motion.p>
        </div>
      </section>

      {/* WHO IS DRALHA (CONTRAST THEME) */}
      <section className="py-32 bg-brand-cream text-brand-navy border-y border-brand-sand">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative h-[500px] w-full rounded-none border border-brand-sand bg-brand-navy flex items-center justify-center overflow-hidden">
              <Image 
                src="/dralha_heritage.png"
                alt="Bhutanese Architectural Heritage"
                fill
                className="object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-navy/10 hover:bg-transparent transition-colors duration-700 pointer-events-none" />
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay pointer-events-none" />
            </motion.div>
          <div>
            <SectionHeading title="Rooted in Gross National Happiness." />
            <p className="text-lg md:text-xl text-brand-darkNavy/70 font-light leading-relaxed mt-8">
              Dralha Group is one of Bhutan&apos;s leading diversified business groups, with operations spanning agriculture, natural resources, hospitality, textiles, and infrastructure.
            </p>
            <p className="text-lg md:text-xl text-brand-darkNavy/70 font-light leading-relaxed mt-6">
              Rooted in Bhutan&apos;s values of Gross National Happiness, Dralha is now positioned to lead the nation into a new era of intelligent, data-driven growth.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* MANAGEMENT TEAM (CONTRAST THEME) */}
      <section className="py-32 bg-brand-cream text-brand-navy border-b border-brand-sand">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading title="Leadership That Drives Bhutan Forward" centered />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
            {managementTeam.map((member, idx) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col h-[500px] p-10 bg-white border border-brand-sand group hover:bg-brand-navy transition-colors duration-500 cursor-pointer relative overflow-hidden shadow-lg"
              >
                {/* Background Letter */}
                <div className="absolute -right-4 -top-10 text-[200px] font-display font-bold text-brand-sand/50 group-hover:text-brand-gold/10 transition-colors duration-500 pointer-events-none select-none">
                  {member.name.charAt(0)}
                </div>

                <div className="font-sans font-bold text-[10px] tracking-[0.3em] text-brand-navy/40 group-hover:text-brand-gold/50 transition-colors duration-500 uppercase mb-auto">
                  Member 0{idx + 1}
                </div>

                <div className="relative z-10 mt-12">
                  <h3 className="text-2xl font-display font-bold text-brand-navy group-hover:text-white transition-colors duration-500 mb-2">{member.name}</h3>
                  <p className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-6">{member.title}</p>
                  <div className="w-8 h-[1px] bg-brand-sand group-hover:bg-white/20 transition-colors duration-500 mb-6" />
                  <p className="text-brand-darkNavy/70 group-hover:text-gray-300 transition-colors duration-500 text-sm font-light leading-relaxed mb-4">{member.desc}</p>
                  <p className="text-brand-navy/40 group-hover:text-gray-500 transition-colors duration-500 text-xs font-light leading-relaxed pt-6 border-t border-brand-sand group-hover:border-white/10">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT BUSINESS SECTORS */}
      <section className="py-32 bg-brand-darkNavy border-t border-white/5 relative overflow-hidden">
        <DynamicDarkBackground />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeading title="Dralha's Portfolio Today" centered />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 mt-24">
            {sectors.map((sector, idx) => (
              <div 
                key={sector.name} 
                className="h-[400px] flex flex-col p-10 bg-brand-navy group hover:bg-white transition-colors duration-500 relative cursor-pointer"
              >
                <div className="font-sans font-bold text-[10px] tracking-[0.3em] text-gray-600 group-hover:text-brand-navy/40 transition-colors duration-500 uppercase mb-auto">
                  Sector 0{idx + 1}
                </div>
                
                <div className="mt-12">
                  <sector.icon className="w-8 h-8 text-brand-gold group-hover:text-brand-navy transition-colors duration-500 mb-6" strokeWidth={1.5} />
                  <h3 className="text-3xl font-display font-bold text-white mb-6 group-hover:text-brand-navy transition-colors duration-500 leading-tight pr-4">{sector.name}</h3>
                  <div className="w-12 h-[1px] bg-white/10 mb-6 group-hover:bg-brand-navy/20 transition-colors duration-500" />
                  <p className="text-sm font-light text-gray-500 group-hover:text-brand-navy/70 transition-colors duration-500 leading-relaxed mb-8">{sector.desc}</p>
                  
                  <div className="inline-flex items-center text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-gold group-hover:text-brand-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    AI Target: {sector.ai} <ArrowRight className="ml-2 w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES SECTION */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHeading title="Where Dralha Can Grow" centered subtitle="Operational hurdles scaling across the conglomerate." />
          
          <div className="mt-24 grid md:grid-cols-3 gap-4">
            {challenges.map((challenge, idx) => (
              <motion.div 
                key={challenge.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 border border-white/5 bg-brand-darkNavy flex flex-col group hover:bg-white/5 hover:border-brand-gold/50 transition-all duration-500 cursor-pointer ${
                  idx === 0 || idx === 3 ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <div className="flex items-center justify-between mb-16">
                  <span className="text-brand-gold/50 font-sans tracking-[0.2em] font-bold text-[10px] group-hover:text-brand-gold transition-colors duration-500 uppercase">
                    SYS_ERR_0{idx + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-brand-gold/20 group-hover:bg-brand-gold group-hover:shadow-[0_0_10px_#C5A059] transition-all duration-500" />
                </div>
                
                <h4 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-brand-gold transition-colors duration-500">
                  {challenge.title}
                </h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed mt-auto max-w-sm">
                  {challenge.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE OPPORTUNITY BANNER */}
      <section className="bg-brand-gold border-t border-white/5">
        <div className="container mx-auto px-6 py-32 text-center">
          <h2 className="text-3xl md:text-6xl font-display font-bold text-black mb-12 max-w-4xl mx-auto leading-tight tracking-tight">
            Every challenge above has an AI solution. <br />
            <span className="font-light italic text-black/70">And Dataviv has built it.</span>
          </h2>
          <Link href="/transformation" className="inline-flex items-center px-10 py-5 bg-black text-white text-xs tracking-[0.2em] uppercase font-bold rounded-none hover:bg-brand-navy transition-colors duration-300 group">
            See the Transformation Plan <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Add 3D utilities */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </div>
  );
}
