"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, Leaf, Shirt, Building2, Cpu, GraduationCap, HeartPulse, ArrowRight, Truck } from "lucide-react";
import DynamicDarkBackground from "@/components/DynamicDarkBackground";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";

// Custom hook for counting up
const CountUp = ({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(easeOut * to));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [to, duration]);

  return <span>{count}{suffix}</span>;
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Auto-rotating cards logic
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const rotatingCards = [
    { title: "Agriculture", ai: "Smart Farming", desc: "Predictive yields, precision irrigation, and supply chain optimization powered by Dataviv AI." },
    { title: "Textiles", ai: "AI Quality Control", desc: "Computer vision for defect detection and generative AI for modern Bhutanese fashion patterns." },
    { title: "Hospitality", ai: "Personalized Guest AI", desc: "Hyper-personalized guest experiences and intelligent energy management for luxury resorts." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % rotatingCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [rotatingCards.length]);

  return (
    <div className="relative overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-brand-darkNavy">
        <DynamicDarkBackground showParticles={true} />

        <motion.div 
          className="container mx-auto px-6 relative z-10 text-center"
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 rounded-full border border-brand-gold/30 bg-brand-navy/50 backdrop-blur-md"
          >
            <span className="text-brand-gold tracking-widest text-sm font-semibold uppercase">
              A Royal Partnership for the Future
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8"
          >
            Empowering Bhutan <br className="hidden md:block" />
            <span className="italic font-light text-brand-gold">
              With Artificial Intelligence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed text-balance"
          >
            Dataviv Technologies brings world-class AI to transform Dralha Group&apos;s businesses — 
            from agriculture to hospitality, from textiles to smart infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/dralha" className="group relative px-8 py-4 bg-white text-black font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-none overflow-hidden transition-all hover:bg-brand-gold">
              <span className="relative flex items-center">
                Explore Dralha Group <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </span>
            </Link>
            <Link href="/dataviv" className="group px-8 py-4 bg-transparent border border-white/20 text-white font-sans text-xs tracking-[0.2em] uppercase rounded-none hover:border-white transition-all duration-500">
              <span className="flex items-center">
                See the Platform
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="text-brand-gold w-8 h-8 opacity-70" />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section className="relative z-20 -mt-10 mx-6 md:mx-auto max-w-7xl">
        <GlassCard className="py-8 px-6 md:px-12" hoverEffect={false}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-glassLight">
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-display font-bold text-brand-gold mb-2">
                <CountUp to={12} suffix="+" />
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Industries Transformed</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-display font-bold text-brand-green mb-2">Stanford</div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Pedigree AI Team</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                <CountUp to={1} />
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Unified AI Platform</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-display font-bold text-brand-gold mb-2">∞</div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Possibilities for Bhutan</div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* WHAT THIS IS SECTION (CONTRAST THEME) */}
      <section className="py-32 relative bg-brand-cream text-brand-navy border-y border-brand-sand">
        {/* Subtle noise over cream */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-multiply z-0 pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="One Partnership. Infinite Potential."
                subtitle="Dralha Group is Bhutan's leading conglomerate spanning multiple sectors. Dataviv Technologies is India's cutting-edge AI company with Stanford AI roots."
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg mt-8"
              >
                <p className="text-brand-darkNavy leading-relaxed font-light">
                  Together, this partnership will make Bhutan a model for AI-powered national development. 
                  By integrating Dataviv&apos;s advanced AI OS across Dralha&apos;s diverse portfolio, we are building 
                  intelligent, sustainable, and scalable solutions that preserve Bhutan&apos;s rich heritage while 
                  embracing the future.
                </p>
              </motion.div>
            </div>
            
            {/* Rotating Cards */}
            <div className="relative h-[400px] flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {rotatingCards.map((card, index) => (
                  index === activeCardIndex && (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, scale: 1.1, y: -50, filter: "blur(10px)" }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                      className="absolute w-full max-w-md"
                    >
                      <GlassCard className="p-12 border-brand-sand shadow-2xl bg-white text-brand-navy" hoverEffect={false}>
                        <div className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-4">
                          {card.title} <ArrowRight className="inline w-4 h-4 mx-2" /> {card.ai}
                        </div>
                        <h3 className="text-3xl font-display font-bold text-brand-navy mb-6 leading-tight">
                          Reimagining {card.title} with Intelligence
                        </h3>
                        <p className="text-brand-darkNavy/70 font-light text-lg leading-relaxed">
                          {card.desc}
                        </p>
                        <div className="mt-8 flex justify-end">
                          <Cpu className="text-brand-navy/10 w-12 h-12" />
                        </div>
                      </GlassCard>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
              
              {/* Indicators */}
              <div className="absolute -bottom-8 flex space-x-3">
                {rotatingCards.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveCardIndex(idx)}
                    className={`h-[1px] transition-all duration-700 ${idx === activeCardIndex ? "w-12 bg-brand-gold" : "w-4 bg-brand-navy/20 hover:bg-brand-navy/50"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS PREVIEW */}
      <section className="py-32 bg-brand-darkNavy border-t border-white/5 relative overflow-hidden">
        <DynamicDarkBackground />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-20">
          <SectionHeading title="Dralha's Empire, Supercharged by AI." subtitle="Transforming six core sectors with the Dataviv AI OS." />
        </div>

        {/* Horizontal Scroll Area */}
        <div className="w-full overflow-x-auto pb-16 px-6 hide-scrollbar cursor-grab active:cursor-grabbing">
          <div className="flex gap-px bg-white/5 border border-white/5 w-max mx-auto px-0">
            {[
              { name: "Agriculture", icon: Leaf, num: "01", desc: "Precision yields & automated supply chains" },
              { name: "Textiles", icon: Shirt, num: "02", desc: "Defect detection & pattern generation" },
              { name: "Hospitality", icon: HeartPulse, num: "03", desc: "Hyper-personalized guest experiences" },
              { name: "Infrastructure", icon: Building2, num: "04", desc: "Predictive maintenance & smart energy" },
              { name: "Education", icon: GraduationCap, num: "05", desc: "Adaptive learning pathways" },
              { name: "Logistics", icon: Truck, num: "06", desc: "Real-time tracking & route optimization" },
            ].map((sector, idx) => (
              <motion.div 
                key={sector.name} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="w-80 h-[450px] flex flex-col p-10 bg-brand-navy group hover:bg-brand-gold transition-colors duration-500 relative"
              >
                {/* Number */}
                <div className="font-sans font-bold text-[10px] tracking-[0.3em] text-gray-600 group-hover:text-brand-navy/40 transition-colors duration-500 uppercase">
                  Sector {sector.num}
                </div>
                
                {/* Icon */}
                <div className="mt-12 mb-auto">
                  <sector.icon className="w-8 h-8 text-brand-gold group-hover:text-brand-navy transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <div>
                  <h4 className="text-3xl font-display font-bold text-white mb-6 group-hover:text-brand-navy transition-colors duration-500 leading-tight pr-4">
                    {sector.name}
                  </h4>
                  <div className="w-12 h-[1px] bg-white/10 mb-6 group-hover:bg-brand-navy/20 transition-colors duration-500" />
                  <p className="text-sm font-light text-gray-500 group-hover:text-brand-navy/70 transition-colors duration-500 leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DATAVIV INTRO STRIP (CONTRAST THEME) */}
      <section className="py-24 bg-brand-cream border-t border-brand-sand">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-5 relative border border-brand-sand bg-white shadow-xl">
            
            <div className="md:col-span-2 p-12 flex flex-col justify-center border-r border-brand-sand">
              <div className="font-display font-bold text-3xl text-brand-navy mb-2">Dataviv Technologies</div>
              <div className="text-brand-gold font-mono uppercase tracking-widest text-sm">Be Future Proof</div>
            </div>
            
            <div className="md:col-span-3 p-12 flex flex-col justify-center bg-brand-cream/30">
              <p className="text-2xl md:text-3xl font-light text-brand-navy/70 leading-relaxed mb-8">
                Dataviv makes intelligent technology systems. <br />
                <span className="font-medium text-brand-navy">We help organisations use AI in a simple way.</span>
              </p>
              <div>
                <Link href="/dataviv" className="inline-flex items-center text-brand-gold font-bold tracking-[0.2em] uppercase text-xs hover:text-brand-navy transition-colors">
                  Meet Dataviv <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add hide-scrollbar utility locally */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
