"use client";

import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Sprout } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden border-b border-brand-white/10 pt-20">
        <div className="absolute inset-0 bg-brand-vibrantBlue/5 blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-display mb-6 text-brand-white">Our Legacy.</h1>
          <p className="text-xl md:text-2xl text-brand-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Since 1988, Dralha Group of Industries has been a cornerstone of Bhutan's economic and sustainable development.
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="w-full py-32 bg-creative-light text-brand-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-vibrantBlue">The Beginning</h2>
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
              className="relative bg-brand-white p-10 rounded-3xl border border-brand-black/5 shadow-2xl shadow-brand-black/5 flex flex-col items-center justify-center text-center group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-vibrantBlue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-vibrantBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <span className="text-5xl md:text-6xl font-display text-brand-vibrantBlue mb-3 relative z-10">1988</span>
              <span className="text-[0.65rem] md:text-xs uppercase tracking-widest text-brand-black/40 font-bold relative z-10 group-hover:text-brand-black transition-colors duration-300">Year Founded</span>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-brand-white p-10 rounded-3xl border border-brand-black/5 shadow-2xl shadow-brand-black/5 flex flex-col items-center justify-center text-center group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-vibrantPink transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-vibrantPink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <span className="text-5xl md:text-6xl font-display text-brand-vibrantPink mb-3 relative z-10">6+</span>
              <span className="text-[0.65rem] md:text-xs uppercase tracking-widest text-brand-black/40 font-bold relative z-10 group-hover:text-brand-black transition-colors duration-300">Major Divisions</span>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-brand-white p-10 rounded-3xl border border-brand-black/5 shadow-2xl shadow-brand-black/5 flex flex-col items-center justify-center text-center group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-vibrantGreen transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-vibrantGreen/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <span className="text-5xl md:text-6xl font-display text-brand-vibrantGreen mb-3 relative z-10">100<span className="text-2xl md:text-3xl ml-1">MT</span></span>
              <span className="text-[0.65rem] md:text-xs uppercase tracking-widest text-brand-black/40 font-bold relative z-10 group-hover:text-brand-black transition-colors duration-300">Daily Capacity</span>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-brand-white p-10 rounded-3xl border border-brand-black/5 shadow-2xl shadow-brand-black/5 flex flex-col items-center justify-center text-center group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-vibrantOrange transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-vibrantOrange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <span className="text-5xl md:text-6xl font-display text-brand-vibrantOrange mb-3 relative z-10">2025</span>
              <span className="text-[0.65rem] md:text-xs uppercase tracking-widest text-brand-black/40 font-bold relative z-10 group-hover:text-brand-black transition-colors duration-300">SATA Winner</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="w-full py-32 bg-brand-black text-brand-white border-y border-brand-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display">Our Core Values.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            
            <div className="p-10 border border-brand-white/10 rounded-2xl bg-brand-white/5 hover:border-brand-vibrantBlue/50 transition-colors group">
              <Compass className="w-12 h-12 text-brand-white/20 group-hover:text-brand-vibrantBlue transition-colors mb-6" />
              <h3 className="text-2xl font-display mb-4">Visionary Leadership</h3>
              <p className="text-brand-white/50 leading-relaxed">
                Guided by the principles of Gross National Happiness, we prioritize the well-being of our community, our employees, and the nation in every business decision we make.
              </p>
            </div>

            <div className="p-10 border border-brand-white/10 rounded-2xl bg-brand-white/5 hover:border-brand-vibrantGreen/50 transition-colors group">
              <Sprout className="w-12 h-12 text-brand-white/20 group-hover:text-brand-vibrantGreen transition-colors mb-6" />
              <h3 className="text-2xl font-display mb-4">Sustainable Innovation</h3>
              <p className="text-brand-white/50 leading-relaxed">
                From pioneering bamboo cultivation to building modern, eco-friendly agribusiness pipelines, we believe that true innovation must exist in harmony with nature.
              </p>
            </div>

            <div className="p-10 border border-brand-white/10 rounded-2xl bg-brand-white/5 hover:border-brand-vibrantPink/50 transition-colors group">
              <ShieldCheck className="w-12 h-12 text-brand-white/20 group-hover:text-brand-vibrantPink transition-colors mb-6" />
              <h3 className="text-2xl font-display mb-4">Uncompromising Quality</h3>
              <p className="text-brand-white/50 leading-relaxed">
                Whether it's award-winning hospitality at Hotel Dralha or high-grade outputs from the Dralha Flour Mill, we never compromise on the quality of our deliverables.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="w-full py-32 bg-creative-light text-brand-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-display mb-8">Explore Our Impact.</h2>
          <p className="text-xl text-brand-black/70 mb-12">
            Discover how our 6 diversified divisions are shaping the future of industry in Bhutan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/" className="px-10 py-5 bg-brand-black text-brand-white font-bold tracking-widest uppercase text-sm hover:bg-brand-vibrantBlue hover:text-brand-black transition-colors rounded-full flex items-center gap-2">
              View Businesses <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="px-10 py-5 border-2 border-brand-black text-brand-black font-bold tracking-widest uppercase text-sm hover:bg-brand-black hover:text-brand-white transition-colors rounded-full">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}