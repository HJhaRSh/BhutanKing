"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import { Send, Terminal } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import Image from "next/image";

export default function ContactPage() {
  const sectors = [
    "Agriculture & Natural Resources",
    "Textiles & Fashion",
    "Hospitality & Tourism",
    "Infrastructure & Smart Cities",
    "Education & Training",
    "Trade & Distribution"
  ];

  return (
    <div className="relative overflow-x-hidden pt-20 bg-brand-darkNavy min-h-screen">
      {/* Dynamic Backgrounds */}
      <ParticleBackground />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A05908_1px,transparent_1px),linear-gradient(to_bottom,#C5A05908_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_20%,transparent_100%)] z-0 pointer-events-none" />
      <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />

      {/* HERO */}
      <section className="py-32 container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center px-4 py-2 border border-brand-gold/20 bg-brand-gold/5 mb-8">
            <Terminal className="w-4 h-4 text-brand-gold mr-3" />
            <span className="text-[10px] font-sans font-bold text-brand-gold uppercase tracking-[0.2em]">Secure Connection</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
            Let&apos;s Build Bhutan&apos;s <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-[#D4AF37] to-white italic font-light">AI Future</span> Together.
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Initialize the transformation journey. Connect with the Dataviv architecture team today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
          
          {/* FORM */}
          <div className="lg:col-span-3">
            <GlassCard className="p-8 md:p-12 border-brand-gold/10 bg-brand-navy/80 backdrop-blur-2xl relative overflow-hidden group" hoverEffect={false}>
              {/* Form scanning line effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse" />
              
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-2xl font-display font-bold text-white">Transmission Feed</h3>
                <div className="flex space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/30" />
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/30" />
                </div>
              </div>
              
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative group/input">
                    <label className="block text-[10px] font-sans font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 group-focus-within/input:text-brand-gold transition-colors">Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors rounded-none placeholder-white/10" placeholder="John Doe" />
                  </div>
                  <div className="relative group/input">
                    <label className="block text-[10px] font-sans font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 group-focus-within/input:text-brand-gold transition-colors">Organisation</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors rounded-none placeholder-white/10" placeholder="Dralha Group" />
                  </div>
                </div>
                
                <div className="relative group/input">
                  <label className="block text-[10px] font-sans font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 group-focus-within/input:text-brand-gold transition-colors">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors rounded-none placeholder-white/10" placeholder="john@example.com" />
                </div>

                <div className="relative group/input">
                  <label className="block text-[10px] font-sans font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 group-focus-within/input:text-brand-gold transition-colors">Sector of Interest</label>
                  <select className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-gray-400 focus:outline-none focus:text-white focus:border-brand-gold transition-colors appearance-none rounded-none cursor-pointer">
                    <option value="" disabled selected>Select a target sector</option>
                    {sectors.map(s => (
                      <option key={s} value={s} className="bg-brand-navy text-white">{s}</option>
                    ))}
                  </select>
                  <div className="absolute right-0 bottom-4 pointer-events-none border-l border-b border-gray-500 w-2 h-2 transform -rotate-45" />
                </div>

                <div className="relative group/input">
                  <label className="block text-[10px] font-sans font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 group-focus-within/input:text-brand-gold transition-colors">Message</label>
                  <textarea rows={5} className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors resize-none rounded-none placeholder-white/10" placeholder="Outline your AI transformation goals..." />
                </div>

                <button type="submit" className="w-full py-6 bg-white text-brand-navy font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-none hover:bg-brand-gold hover:text-white transition-all duration-500 flex items-center justify-center mt-8 group/btn relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Transmit Securely <Send className="ml-4 w-4 h-4 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform duration-500" />
                  </span>
                  <div className="absolute inset-0 bg-brand-gold transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 ease-out z-0" />
                </button>
              </form>
            </GlassCard>
          </div>

          {/* INFO & TECH SPECS */}
          <div className="lg:col-span-2 space-y-8">
            <GlassCard className="p-10 border-brand-gold/20 bg-brand-navy relative overflow-hidden" hoverEffect={false}>
              {/* Decorative grid in card */}
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-multiply pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-8">
                  <div className="relative w-40 h-16 mb-10">
                    <Image src="/dralha-dataviv-logo-v2.png" alt="Dataviv Logo" fill className="object-contain" priority />
                  </div>
                  <div className="text-right">
                    <div className="text-[8px] font-mono text-brand-gold uppercase tracking-[0.2em] mb-1">Status</div>
                    <div className="text-[10px] font-sans font-bold text-white uppercase tracking-widest flex items-center justify-end">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse" /> Listening
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-display font-bold text-white mb-2">Dataviv Technologies</h3>
                <p className="text-brand-gold font-sans text-[10px] uppercase tracking-[0.3em] mb-12">Intelligence Core</p>
                
                <div className="space-y-10">
                  <div className="group">
                    <div className="flex items-center text-[9px] font-sans font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">
                      <Terminal className="w-3 h-3 mr-2 text-brand-navy/40 group-hover:text-brand-gold transition-colors" /> Network Gateway
                    </div>
                    <a href="https://dataviv.in" target="_blank" rel="noreferrer" className="text-white hover:text-brand-gold transition-colors text-xl font-light block border-l-2 border-white/10 hover:border-brand-gold pl-4 py-1">dataviv.in</a>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center text-[9px] font-sans font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">
                      <Send className="w-3 h-3 mr-2 text-brand-navy/40 group-hover:text-brand-gold transition-colors" /> Direct Uplink
                    </div>
                    <a href="mailto:contact@dataviv.in" className="text-white hover:text-brand-gold transition-colors text-xl font-light block border-l-2 border-white/10 hover:border-brand-gold pl-4 py-1">contact@dataviv.in</a>
                  </div>
                </div>
              </div>
            </GlassCard>

            <div className="p-8 border border-white/5 bg-white/5 flex items-center justify-between">
              <span className="text-[9px] font-sans font-bold text-gray-500 uppercase tracking-[0.3em]">Encryption</span>
              <span className="text-[10px] font-mono text-brand-gold">AES-256 ACTIVE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
