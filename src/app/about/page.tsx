"use client";

import Link from "next/link";
import Image from "next/image";
import AuroraLayer from "@/components/AuroraLayer";
import { ArrowRight, Compass, ShieldCheck, Sprout } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center bg-[#FDFBF7] text-[#1A1A1A]">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b border-brand-saffron/20 pt-20 bg-brand-black">
        {/* Majestic Bhutanese Background Image (Heritage) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: "url('/dralha_heritage.png')", backgroundAttachment: "fixed" }}
        />
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/80" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="text-6xl md:text-7xl lg:text-9xl font-display mb-8 text-transparent bg-clip-text bg-gradient-to-b from-brand-white to-brand-white/70 font-bold tracking-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
          >
            Our Legacy.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-3xl text-brand-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg"
          >
            Since 1988, Dralha Group of Industries has been a cornerstone of Bhutan's economic and sustainable development.
          </motion.p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="w-full py-32 bg-brand-white text-brand-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-saffron">The Beginning</h2>
            <h3 className="text-5xl md:text-6xl font-display mb-8">Decades of Excellence.</h3>
            <div className="space-y-6 text-brand-black/70 text-lg leading-relaxed">
              <p>
                Established in 1988, the Dralha Group of Industries began with a simple mission: to provide high-quality goods and services while deeply respecting the pristine environment and culture of Bhutan.
              </p>
              <p>
                Over the past three decades, we have grown from a local enterprise into a highly diversified conglomerate. Today, our operations span across hospitality, large-scale food manufacturing, sustainable agriculture, and premium real estate.
              </p>
              <p>
                Every division of Dralha operates under the same core philosophy—delivering unparalleled quality while remaining steadfastly aligned with His Majesty the King's vision for a sustainable and prosperous Bhutan.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-brand-white p-10 rounded-3xl border border-brand-black/5 shadow-2xl shadow-brand-royalViolet/15 flex flex-col items-center justify-center text-center group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-saffron transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-saffron/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <span className="text-5xl md:text-6xl font-display text-brand-saffron mb-3 relative z-10">1988</span>
              <span className="text-[0.65rem] md:text-xs uppercase tracking-widest text-brand-black/40 font-bold relative z-10 group-hover:text-brand-black transition-colors duration-300">Year Founded</span>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-brand-white p-10 rounded-3xl border border-brand-black/5 shadow-2xl shadow-brand-royalViolet/15 flex flex-col items-center justify-center text-center group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-orchid transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orchid/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <span className="text-5xl md:text-6xl font-display text-brand-orchid mb-3 relative z-10">6+</span>
              <span className="text-[0.65rem] md:text-xs uppercase tracking-widest text-brand-black/40 font-bold relative z-10 group-hover:text-brand-black transition-colors duration-300">Major Divisions</span>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-brand-white p-10 rounded-3xl border border-brand-black/5 shadow-2xl shadow-brand-royalViolet/15 flex flex-col items-center justify-center text-center group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-forestGreen transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-forestGreen/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <span className="text-5xl md:text-6xl font-display text-brand-forestGreen mb-3 relative z-10">100<span className="text-2xl md:text-3xl ml-1">MT</span></span>
              <span className="text-[0.65rem] md:text-xs uppercase tracking-widest text-brand-black/40 font-bold relative z-10 group-hover:text-brand-black transition-colors duration-300">Daily Capacity</span>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-brand-white p-10 rounded-3xl border border-brand-black/5 shadow-2xl shadow-brand-royalViolet/15 flex flex-col items-center justify-center text-center group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-dragonRed transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-dragonRed/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <span className="text-5xl md:text-6xl font-display text-brand-dragonRed mb-3 relative z-10">2025</span>
              <span className="text-[0.65rem] md:text-xs uppercase tracking-widest text-brand-black/40 font-bold relative z-10 group-hover:text-brand-black transition-colors duration-300">SATA Winner</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="w-full py-32 bg-brand-black text-brand-white border-y border-brand-saffron/20 relative overflow-hidden">
        {/* Vibrant Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-[20%] top-[10%] w-[40%] h-[80%] bg-brand-saffron rounded-full blur-[160px] opacity-10" />
          <div className="absolute right-[10%] bottom-[10%] w-[50%] h-[60%] bg-brand-dragonRed rounded-full blur-[160px] opacity-10" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-brand-white">Our Core Values.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Card 1 */}
            <div className="p-12 border border-brand-white/10 rounded-[40px] bg-[#0c0c0c]/80 backdrop-blur-xl shadow-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:border-brand-saffron/50 group hover:shadow-[0_30px_60px_-15px_rgba(255,140,0,0.3)] cursor-default">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-saffron/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-brand-saffron/10 border border-brand-saffron/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-saffron/20 transition-all duration-500 shadow-inner">
                  <Compass className="w-10 h-10 text-brand-saffron" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-6 text-brand-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-gold group-hover:to-brand-saffron transition-all duration-500">Visionary Leadership</h3>
                <p className="text-brand-white/70 leading-relaxed font-medium text-lg">
                  Guided by the principles of Gross National Happiness, we prioritize the well-being of our community, our employees, and the nation in every business decision we make.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-12 border border-brand-white/10 rounded-[40px] bg-[#0c0c0c]/80 backdrop-blur-xl shadow-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:border-brand-forestGreen/50 group hover:shadow-[0_30px_60px_-15px_rgba(0,230,118,0.2)] cursor-default">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-forestGreen/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-brand-forestGreen/10 border border-brand-forestGreen/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-forestGreen/20 transition-all duration-500 shadow-inner">
                  <Sprout className="w-10 h-10 text-brand-forestGreen" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-6 text-brand-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-forestGreen group-hover:to-brand-vibrantGreen transition-all duration-500">Sustainable Innovation</h3>
                <p className="text-brand-white/70 leading-relaxed font-medium text-lg">
                  From pioneering bamboo cultivation to building modern, eco-friendly agribusiness pipelines, we believe that true innovation must exist in harmony with nature.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-12 border border-brand-white/10 rounded-[40px] bg-[#0c0c0c]/80 backdrop-blur-xl shadow-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:border-brand-dragonRed/50 group hover:shadow-[0_30px_60px_-15px_rgba(232,41,28,0.3)] cursor-default">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-dragonRed/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-brand-dragonRed/10 border border-brand-dragonRed/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-dragonRed/20 transition-all duration-500 shadow-inner">
                  <ShieldCheck className="w-10 h-10 text-brand-dragonRed" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-6 text-brand-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-dragonRed group-hover:to-brand-orchid transition-all duration-500">Uncompromising Quality</h3>
                <p className="text-brand-white/70 leading-relaxed font-medium text-lg">
                  Whether it's award-winning hospitality at Hotel Dralha or high-grade outputs from the Dralha Flour Mill, we never compromise on the quality of our deliverables.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PARTNERS & ASSOCIATIONS */}
      <section className="relative w-full bg-brand-white text-brand-black py-32 border-t border-brand-saffron/20 overflow-hidden">
        {/* Vibrant Bhutanese Blobs Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-[20%] -bottom-[20%] w-[60%] h-[140%] bg-brand-dragonRed rounded-full blur-[140px] opacity-10" />
          <div className="absolute left-[10%] top-[-10%] w-[50%] h-[120%] bg-brand-saffron rounded-full blur-[140px] opacity-15" />
          <div className="absolute right-[30%] top-[-20%] w-[40%] h-[80%] bg-brand-gold rounded-full blur-[100px] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-center relative z-10">
          {/* LEFT: Logo */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-white rounded-[40px] p-8 shadow-[0_30px_60px_-15px_rgba(255,140,0,0.15)] border-2 border-brand-saffron/20 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center transform transition-transform hover:scale-105 duration-500">
              <Image
                src="/partner_logo.jpeg"
                alt="Indian Centre For Social Transformation"
                width={260}
                height={260}
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
          
          {/* RIGHT: Info */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-[11px] font-bold tracking-[0.4em] uppercase text-brand-dragonRed">Partners & Associations</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-brand-black">
              Indian Centre For<br />
              <span className="text-brand-saffron">Social Transformation</span>
            </h2>
            <p className="text-lg text-brand-black/80 font-medium leading-relaxed max-w-md">
              We are proud to partner with the Indian Centre for Social Transformation, working together to build sustainable, high-impact community initiatives across the region.
            </p>
            <div className="pt-4">
              <Link href="#" className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase text-brand-dragonRed hover:text-brand-saffron transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="w-full py-32 bg-flag-gradient text-brand-white text-center">
        <div className="max-w-4xl mx-auto px-6 drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8">Explore Our Impact.</h2>
          <p className="text-xl text-brand-white/90 mb-12 font-medium">
            Discover how our 6 diversified divisions are shaping the future of industry in Bhutan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/" className="px-10 py-5 bg-brand-black text-brand-white font-bold tracking-[0.2em] uppercase text-xs hover:bg-brand-white hover:text-brand-black transition-colors rounded-full flex items-center gap-2 shadow-xl">
              View Businesses <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="px-10 py-5 border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-dragonRed font-bold tracking-[0.2em] uppercase text-xs transition-colors rounded-full shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}