"use client";

import { motion } from "framer-motion";
import AuroraLayer from "@/components/AuroraLayer";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverCard } from "@/components/animations/HoverCard";

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex flex-col items-center justify-center text-center border-b border-brand-saffron/20 pt-20 overflow-hidden bg-brand-black">
        {/* Majestic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: "url('/hotel/Hotel%20Reception.jpg')", backgroundAttachment: "fixed" }}
        />
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/80" />
        
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase mb-6 text-brand-saffron drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Connect
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-[1.1] mb-6 font-bold drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-saffron to-brand-gold">Talk.</span>
          </h1>
          <p className="text-xl md:text-3xl font-medium text-brand-white/80 leading-relaxed drop-shadow-lg">
            Get in touch with Dralha Group of Industries
          </p>
        </motion.div>
      </section>

      {/* TWO COLUMN LAYOUT */}
      <section className="w-full bg-brand-black py-32 relative z-10 overflow-hidden border-b border-brand-saffron/20">

        {/* Subtle Ambient Depth */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[100%] bg-brand-white rounded-full blur-[160px] opacity-[0.03]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 relative z-10">
          
          {/* Left - Contact Form (Minimalist) */}
          <ScrollReveal delay={0.2}>
            <div className="mb-16">
              <h3 className="text-5xl font-display text-brand-white mb-4">Send a Message</h3>
              <p className="text-brand-white/50 text-xl font-medium">We'd love to hear from you. Fill out the form below.</p>
            </div>
            
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="relative">
                  <label className="text-xs font-bold text-brand-white/40 uppercase tracking-widest block mb-2">Your Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-brand-white/20 pb-4 text-brand-white focus:outline-none focus:border-brand-saffron transition-colors text-xl placeholder-brand-white/20" placeholder="John Doe" />
                </div>
                <div className="relative">
                  <label className="text-xs font-bold text-brand-white/40 uppercase tracking-widest block mb-2">Organisation</label>
                  <input type="text" className="w-full bg-transparent border-b border-brand-white/20 pb-4 text-brand-white focus:outline-none focus:border-brand-saffron transition-colors text-xl placeholder-brand-white/20" placeholder="Company Name" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="relative">
                  <label className="text-xs font-bold text-brand-white/40 uppercase tracking-widest block mb-2">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-brand-white/20 pb-4 text-brand-white focus:outline-none focus:border-brand-saffron transition-colors text-xl placeholder-brand-white/20" placeholder="john@example.com" />
                </div>
                <div className="relative">
                  <label className="text-xs font-bold text-brand-white/40 uppercase tracking-widest block mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-transparent border-b border-brand-white/20 pb-4 text-brand-white focus:outline-none focus:border-brand-saffron transition-colors text-xl placeholder-brand-white/20" placeholder="+975 ..." />
                </div>
              </div>

              <div className="relative">
                <label className="text-xs font-bold text-brand-white/40 uppercase tracking-widest block mb-2">Topic of Interest</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-brand-white/20 pb-4 text-brand-white focus:outline-none focus:border-brand-saffron transition-colors text-xl appearance-none cursor-pointer">
                    <option className="bg-brand-black text-brand-white">General Inquiry</option>
                    <option className="bg-brand-black text-brand-white">Hotel Dralha</option>
                    <option className="bg-brand-black text-brand-white">Flour Mill</option>
                    <option className="bg-brand-black text-brand-white">Napkin Factory</option>
                    <option className="bg-brand-black text-brand-white">Bamboo Revolution</option>
                    <option className="bg-brand-black text-brand-white">Agribusiness</option>
                    <option className="bg-brand-black text-brand-white">GMC Apartments</option>
                    <option className="bg-brand-black text-brand-white">AI Partnership</option>
                    <option className="bg-brand-black text-brand-white">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none text-brand-white/30 pb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="text-xs font-bold text-brand-white/40 uppercase tracking-widest block mb-2">Your Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-brand-white/20 pb-4 text-brand-white focus:outline-none focus:border-brand-saffron transition-colors text-xl resize-none placeholder-brand-white/20" placeholder="How can we help you today?"></textarea>
              </div>

              <button className="py-4 px-12 bg-brand-white text-brand-black hover:bg-brand-saffron hover:text-brand-white font-bold tracking-[0.2em] uppercase text-sm rounded-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,140,0,0.4)]">
                Submit Inquiry
              </button>
            </form>
          </ScrollReveal>

          {/* Right - Contact Info (Typographic) */}
          <ScrollReveal delay={0.4} className="space-y-16 lg:pl-20 border-t lg:border-t-0 lg:border-l border-brand-white/10 pt-16 lg:pt-0">
            <div className="mb-12">
              <h3 className="text-5xl font-display text-brand-white mb-4">Direct Contacts</h3>
              <p className="text-brand-white/50 text-xl font-medium">Reach out to our specific divisions.</p>
            </div>

            {/* Location 1 */}
            <div className="group relative">
              <h4 className="text-3xl font-display text-brand-white mb-2 transition-colors duration-500 group-hover:text-brand-saffron">Dralha Head Office</h4>
              <p className="text-brand-saffron/80 text-xs tracking-widest uppercase mb-6 font-bold">Industrial Estate, Phuentsholing</p>
              
              <div className="flex flex-col gap-3 text-brand-white/70 text-lg font-medium">
                <p className="flex items-center gap-6 transition-colors duration-500 group-hover:text-brand-white">
                  <span className="w-6 h-[2px] bg-brand-saffron/30 transition-all duration-500 group-hover:w-10 group-hover:bg-brand-saffron" /> +975 05 2522 84  /  +975 17 6373 84
                </p>
                <p className="flex items-center gap-6 transition-colors duration-500 group-hover:text-brand-white">
                  <span className="w-6 h-[2px] bg-brand-saffron/30 transition-all duration-500 group-hover:w-10 group-hover:bg-brand-saffron" /> dralhaflourmill@gmail.com
                </p>
              </div>
            </div>

            {/* Location 2 */}
            <div className="group relative">
              <h4 className="text-3xl font-display text-brand-white mb-2 transition-colors duration-500 group-hover:text-brand-dragonRed">Hotel Dralha</h4>
              <p className="text-brand-dragonRed/80 text-xs tracking-widest uppercase mb-6 font-bold">Olakha, Thimphu</p>
              
              <div className="flex flex-col gap-3 text-brand-white/70 text-lg font-medium">
                <p className="flex items-center gap-6 transition-colors duration-500 group-hover:text-brand-white">
                  <span className="w-6 h-[2px] bg-brand-dragonRed/30 transition-all duration-500 group-hover:w-10 group-hover:bg-brand-dragonRed" /> +975 2341 414  /  +975 1799 9896
                </p>
                <p className="flex items-center gap-6 transition-colors duration-500 group-hover:text-brand-white">
                  <span className="w-6 h-[2px] bg-brand-dragonRed/30 transition-all duration-500 group-hover:w-10 group-hover:bg-brand-dragonRed" /> info@hoteldralha.com
                </p>
                <a href="https://hoteldralha.com" target="_blank" rel="noreferrer" className="flex items-center gap-6 transition-colors duration-500 group-hover:text-brand-white">
                  <span className="w-6 h-[2px] bg-brand-dragonRed/30 transition-all duration-500 group-hover:w-10 group-hover:bg-brand-dragonRed" /> hoteldralha.com
                </a>
              </div>
            </div>

            {/* Location 3 */}
            <div className="group relative">
              <h4 className="text-3xl font-display text-brand-white mb-2 transition-colors duration-500 group-hover:text-brand-vibrantBlue">AI Partnership</h4>
              <p className="text-brand-vibrantBlue/80 text-xs tracking-widest uppercase mb-6 font-bold">Dataviv Technologies</p>
              
              <div className="flex flex-col gap-3 text-brand-white/70 text-lg font-medium">
                <a href="https://dataviv.in" target="_blank" rel="noreferrer" className="flex items-center gap-6 transition-colors duration-500 group-hover:text-brand-white">
                  <span className="w-6 h-[2px] bg-brand-vibrantBlue/30 transition-all duration-500 group-hover:w-10 group-hover:bg-brand-vibrantBlue" /> dataviv.in
                </a>
              </div>
            </div>

          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}