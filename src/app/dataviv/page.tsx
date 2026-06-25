"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, CheckCircle2, Database, Cpu, Zap } from "lucide-react";
import Link from "next/link";
import DynamicDarkBackground from "@/components/DynamicDarkBackground";

export default function DatavivPage() {
  const products = [
    { num: "01", name: "Medical Image Detection", desc: "AI diagnosis from X-rays & scans" },
    { num: "02", name: "Smart Camera Computer Vision", desc: "CCTV intelligence, attendance, occupancy analytics" },
    { num: "03", name: "Smart Mirrors", desc: "AR try-on for fashion & retail" },
    { num: "04", name: "AR/VR/MR Experiences", desc: "Virtual walkthroughs & training" },
    { num: "05", name: "Audio, Text & Gesture AI", desc: "Chatbots, voice systems, NLP" },
    { num: "06", name: "Asset & Inventory Tracking", desc: "RFID, barcode, location intelligence" },
    { num: "07", name: "Smart Devices & IoT", desc: "Wearables, smart farm automation" },
    { num: "08", name: "Data Science & ML", desc: "Recommendation systems, predictive modeling" },
    { num: "09", name: "Custom Solutions", desc: "Ecommerce, large-scale government apps" },
    { num: "10", name: "System Integrations", desc: "CRM, HRMS, inventory automation" },
    { num: "11", name: "Online Security", desc: "Blockchain, penetration testing, HIPPA compliance" },
    { num: "12", name: "AI in Fashion & Textiles", desc: "Computer vision quality control, trend prediction" },
  ];

  const industries = [
    "Healthcare", "Fashion", "Agriculture", "Smart Cities", "Government", "Defence",
    "Education", "Finance", "Manufacturing", "Retail", "Real Estate", "Hospitality"
  ];

  return (
    <div className="relative overflow-x-hidden pt-20">
      {/* HERO */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-black">
        {/* Dark background with animated neural network SVG */}
        <DynamicDarkBackground showParticles={true} />
        {/* Minimal architectural noise */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] z-0" />
        <div className="absolute inset-0 border-x border-white/5 w-full max-w-7xl mx-auto z-0" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 z-0" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-block mb-10 text-gray-500 tracking-[0.3em] text-xs font-semibold uppercase">
            Be Future Proof
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-8 tracking-tight">
            Dataviv Technologies.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed mb-16">
            India&apos;s AI-First Technology Company — Built at Stanford, Deployed Globally.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap justify-center gap-4">
            {["AI", "AR/VR", "IoT", "Cloud", "Computer Vision", "NLP"].map((badge) => (
              <span key={badge} className="px-6 py-2 border border-white/10 bg-white/5 rounded-none text-gray-400 font-sans text-xs tracking-[0.2em] uppercase">
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PEDIGREE SECTION */}
      <section className="py-16 md:py-32 bg-brand-darkNavy border-y border-white/5 relative overflow-hidden">
        <DynamicDarkBackground />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeading title="Why Trust Dataviv?" centered />
          
          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 mt-12 md:mt-24">
            {[
              { num: "TRST-01", title: "Stanford Roots", desc: "Our core team holds MS in Artificial Intelligence from Stanford University, with research under Andrew Ng, founder of Google Brain and Chief Scientist at Baidu." },
              { num: "TRST-02", title: "Global Experience", desc: "Early team members worked at Coursera (Billion-dollar Edtech) and Earnin (Fintech), supporting growth and product at scale." },
              { num: "TRST-03", title: "Investment Network", desc: "Associated with Stanford Angels, supporting early-stage companies across investment rounds globally." }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="h-[450px] flex flex-col p-12 bg-brand-navy group hover:bg-white transition-colors duration-500 cursor-pointer"
              >
                <div className="font-sans font-bold text-[10px] tracking-[0.3em] text-gray-600 group-hover:text-brand-navy/40 transition-colors duration-500 uppercase mb-auto">
                  {item.num}
                </div>
                
                <div className="mt-12">
                  <h3 className="text-3xl font-display font-bold text-brand-gold group-hover:text-brand-navy transition-colors duration-500 mb-6">{item.title}</h3>
                  <div className="w-12 h-[1px] bg-white/10 mb-6 group-hover:bg-brand-navy/20 transition-colors duration-500" />
                  <p className="text-gray-400 group-hover:text-brand-navy/70 transition-colors duration-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
            {["Timely Delivery", "Best in Class Support", "Turnkey Project Delivery"].map((trust) => (
              <div key={trust} className="flex items-center text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                <CheckCircle2 className="w-4 h-4 text-brand-gold mr-3" />
                {trust}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATAVIV AI OS (CONTRAST THEME) */}
      <section className="py-16 md:py-32 bg-brand-cream border-y border-brand-sand relative">
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-brand-gold text-[10px] font-sans font-bold uppercase tracking-[0.2em] mb-6">Flagship Platform</div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-brand-navy mb-4 leading-tight tracking-tight">
                DATAVIV AI OS
              </h2>
              <h3 className="text-2xl text-brand-navy/70 font-light mb-8">
                The Operating System for Artificial Intelligence
              </h3>
              <p className="text-lg text-brand-darkNavy/70 leading-relaxed mb-12">
                Just as your computer needs an operating system to run — DATAVIV AI OS is the operating system that runs AI for your entire organisation. One platform. One place. Full control.
              </p>

              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-navy/10 before:to-transparent">
                {[
                  { title: "Data Ingestion Layer", desc: "Integrate diverse structured & unstructured data streams across the enterprise.", icon: "Database" },
                  { title: "Neural Processing", desc: "Proprietary LLMs and machine learning models process, analyze, and learn.", icon: "Cpu" },
                  { title: "Actionable Intelligence", desc: "Deliver automated, intelligent outcomes directly into operational workflows.", icon: "Zap" }
                ].map((step, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    key={step.title} 
                    className="relative flex items-start group bg-white/50 hover:bg-white p-6 border border-brand-sand/50 hover:border-brand-gold/50 transition-all duration-500 rounded-sm"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-none border border-brand-navy/10 bg-brand-cream flex items-center justify-center text-brand-gold font-sans font-bold text-xs group-hover:border-brand-gold transition-colors duration-500 z-10 relative">
                      0{idx + 1}
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="text-brand-navy font-sans tracking-[0.1em] font-bold uppercase text-xs mb-2 flex items-center justify-between">
                        {step.title}
                        <ArrowRight className="w-4 h-4 text-brand-navy/30 group-hover:text-brand-gold transition-colors duration-300" />
                      </div>
                      <div className="text-brand-darkNavy/70 font-light text-sm leading-relaxed">{step.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 3D Isometric Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex justify-center items-center perspective-[2000px] mt-16 md:mt-0"
            >
              <motion.div 
                initial={{ rotateX: 65, rotateZ: -45 }}
                className="relative w-full max-w-[320px] aspect-square [transform-style:preserve-3d] group"
              >
                {/* DATA LAYER - Bottom */}
                <motion.div 
                  initial={{ z: -140 }}
                  animate={{ z: -120 }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="absolute inset-0 bg-brand-navy/95 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col items-center justify-center [transform-style:preserve-3d] rounded-2xl"
                >
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay rounded-2xl" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/50 blur-3xl rounded-full" />
                  
                  {/* Floating Content */}
                  <div className="relative flex flex-col items-center justify-center [transform:translateZ(50px)] drop-shadow-2xl">
                    <Database className="w-12 h-12 text-white/50 mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                    <span className="text-white font-sans font-bold text-xl uppercase tracking-[0.3em]">Data Layer</span>
                    <span className="text-brand-gold/60 font-sans text-xs tracking-widest mt-3">Unified Lakehouse</span>
                  </div>
                </motion.div>

                {/* AI LAYER - Middle */}
                <motion.div 
                  initial={{ z: 0 }}
                  animate={{ z: 20 }}
                  transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="absolute inset-0 bg-brand-cream/90 border border-brand-gold/40 shadow-[0_30px_60px_rgba(0,0,0,0.2)] backdrop-blur-2xl flex flex-col items-center justify-center [transform-style:preserve-3d] rounded-2xl"
                >
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-multiply rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 via-transparent to-transparent rounded-2xl" />
                  
                  {/* Floating Content */}
                  <div className="relative flex flex-col items-center justify-center [transform:translateZ(50px)] drop-shadow-2xl">
                    <Cpu className="w-12 h-12 text-brand-gold mb-6 drop-shadow-[0_0_15px_rgba(197,160,89,0.4)]" />
                    <span className="text-brand-navy font-sans font-bold text-xl uppercase tracking-[0.3em]">AI Engine</span>
                    <span className="text-brand-navy/50 font-sans text-xs tracking-widest mt-3">Neural Processing</span>
                  </div>
                </motion.div>

                {/* APP LAYER - Top */}
                <motion.div 
                  initial={{ z: 140 }}
                  animate={{ z: 160 }}
                  transition={{ duration: 2.5, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="absolute inset-0 bg-brand-darkNavy/95 border border-brand-gold/60 shadow-[0_40px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col items-center justify-center [transform-style:preserve-3d] rounded-2xl"
                >
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/10 to-transparent rounded-2xl" />
                  <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-brand-gold/20 blur-[50px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                  
                  {/* Floating Content */}
                  <div className="relative flex flex-col items-center justify-center [transform:translateZ(50px)] drop-shadow-2xl">
                    <Zap className="w-12 h-12 text-brand-gold mb-6 drop-shadow-[0_0_20px_rgba(197,160,89,0.5)]" />
                    <span className="text-white font-sans font-bold text-xl uppercase tracking-[0.3em]">App Layer</span>
                    <span className="text-brand-gold/80 font-sans text-xs tracking-widest mt-3">Actionable Output</span>
                  </div>
                </motion.div>

                {/* Glowing Core / Laser Beam */}
                <div className="absolute left-1/2 top-1/2 w-[4px] h-[340px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-brand-gold/50 via-white to-brand-gold/50 [transform:translateZ(0px)_rotateX(90deg)] shadow-[0_0_25px_rgba(212,175,55,1)] opacity-70 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="absolute left-1/2 top-1/2 w-[24px] h-[340px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-brand-gold/40 via-brand-gold/30 to-brand-gold/10 blur-md [transform:translateZ(0px)_rotateX(90deg)] opacity-40 group-hover:opacity-100 transition-opacity duration-1000" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="py-16 md:py-32 container mx-auto px-6 max-w-7xl">
        <SectionHeading title="What Dataviv Builds" centered />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 mt-12 md:mt-24">
          {products.map((prod, idx) => (
            <motion.div 
              key={prod.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="group relative h-[300px] flex flex-col p-10 bg-brand-navy hover:bg-white transition-colors duration-500 cursor-pointer"
            >
              <div className="text-sm font-sans font-bold tracking-[0.3em] text-gray-600 group-hover:text-brand-navy/30 transition-colors duration-500 mb-auto">
                {prod.num}
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-display font-bold text-white mb-4 pr-4 group-hover:text-brand-navy transition-colors duration-500">{prod.name}</h4>
                <p className="text-[10px] font-sans font-bold tracking-[0.2em] leading-relaxed text-brand-gold group-hover:text-brand-navy/70 uppercase transition-colors duration-500">{prod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="py-16 bg-brand-darkNavy overflow-hidden border-y border-brand-glassLight relative">
        <DynamicDarkBackground />
        <div className="container mx-auto px-6 mb-8 relative z-10">
          <h3 className="text-center text-gray-400 font-bold uppercase tracking-widest text-sm">AI for Every Industry</h3>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex space-x-16 items-center">
            {industries.map(ind => (
              <span key={ind} className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 mx-8">
                {ind}
              </span>
            ))}
            {industries.map(ind => (
              <span key={ind + "_dup"} className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 mx-8">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 bg-black border-t border-white/5 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-16 tracking-tight leading-tight">
            Ready to see how Dataviv transforms Dralha Group?
          </h2>
          <Link href="/transformation" className="inline-flex items-center px-10 py-5 bg-white text-black font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-none hover:bg-brand-gold transition-colors duration-500 group">
            View the Transformation Plan <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>
      </section>

      {/* Add Marquee utilities */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .rotate-x-\\[20deg\\] {
          transform: rotateX(20deg);
        }
      `}} />
    </div>
  );
}
