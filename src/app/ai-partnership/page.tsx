"use client";
import AuroraLayer from "@/components/AuroraLayer";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronRight, Brain, Rocket, Headset } from "lucide-react";

// For counting up stats
const CountUp = ({ end, duration }: { end: number, duration: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const sectors = [
  {
    id: "01",
    title: "Hotel Dralha",
    subtitle: "3-Star award-winning hospitality in Thimphu",
    est: "EST. 2018",
    image: "/hotel/Hotel Reception.jpg",
    today: ["Manual check-ins", "Generic guest experience", "No demand forecasting", "Limited personalization"],
    tomorrow: ["AI Concierge Chatbot", "Smart Camera Analytics", "Demand Forecasting", "Personalized Recommendations"],
    textClass: "text-brand-vibrantPink",
    borderClass: "border-brand-vibrantPink",
  },
  {
    id: "02",
    title: "Dralha Flour Mill",
    subtitle: "Bhutan's pioneer flour mill, 100 MT/day",
    est: "EST. 1988",
    image: "/mill/hero-bg.png",
    today: ["Manual quality checks", "Reactive maintenance", "No predictive analytics", "Manual inventory"],
    tomorrow: ["Computer Vision Quality Control", "Predictive Maintenance", "Inventory Intelligence", "Demand Forecasting"],
    textClass: "text-brand-vibrantOrange",
    borderClass: "border-brand-vibrantOrange",
  },
  {
    id: "03",
    title: "Napkin Factory",
    subtitle: "Tissue & hygiene products for Bhutan",
    est: "EST. 2009",
    image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?q=80&w=2000&auto=format&fit=crop",
    today: ["Manual production monitoring", "Reactive defect detection", "Manual distribution tracking"],
    tomorrow: ["Automated Defect Detection", "Production Optimization", "Smart Distribution Tracking", "Customer Analytics"],
    textClass: "text-brand-vibrantPurple",
    borderClass: "border-brand-vibrantPurple",
  },
  {
    id: "04",
    title: "Bamboo Revolution",
    subtitle: "Sustainable bamboo processing",
    est: "COMING 2026",
    image: "/bamboo.png",
    today: ["Traditional processing", "Manual sorting", "No market intelligence"],
    tomorrow: ["AI-Powered Processing Lines", "Market Intelligence", "Export Optimization", "Sustainability Monitoring"],
    textClass: "text-brand-vibrantGreen",
    borderClass: "border-brand-vibrantGreen",
  },
  {
    id: "05",
    title: "Agribusiness",
    subtitle: "Avocado & Arabica coffee, 54 acres",
    est: "LAUNCHING SOON",
    image: "/agri.png",
    today: ["Traditional farming", "Weather-dependent yields", "Manual monitoring across 54 acres"],
    tomorrow: ["Drone-Based Crop Monitoring", "Precision Irrigation", "Yield Prediction", "Market Price Intelligence"],
    textClass: "text-brand-vibrantGreen",
    borderClass: "border-brand-vibrantGreen",
  },
  {
    id: "06",
    title: "GMC Apartments",
    subtitle: "Luxury Real Estate Development",
    est: "UPCOMING",
    image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=2000&auto=format&fit=crop",
    today: ["Traditional property management", "Manual tenant services", "No predictive maintenance"],
    tomorrow: ["Smart Building Management", "AI Tenant Experience App", "Predictive Maintenance", "Security & Surveillance"],
    textClass: "text-brand-vibrantBlue",
    borderClass: "border-brand-vibrantBlue",
  }
];

export default function AIPartnershipPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[80vh] flex flex-col justify-center items-center overflow-hidden border-b border-brand-saffron/20">
        
        {/* Majestic Fully Wide Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-[80%_center] md:bg-right bg-no-repeat opacity-60 mix-blend-lighten"
          style={{ backgroundImage: "url('/ai.jpg')" }}
        />
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50 z-0" />
        
        {/* Background Network Animation */}
        <div className="absolute inset-0 z-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FF9500" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {[...Array(20)].map((_, i) => (
              <motion.circle
                key={i}
                r="2"
                fill="#FF9500"
                initial={{
                  cx: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                  cy: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
                  opacity: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  cx: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                  cy: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-start text-left">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase mb-4 text-brand-saffron drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              THE FUTURE OF DRALHA
            </h2>
            <h1 className="text-6xl lg:text-7xl font-display leading-[1.1] mb-6 font-bold drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
              Powered by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-saffron to-brand-gold">Dataviv AI OS.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-brand-white/80 leading-relaxed drop-shadow-lg pr-4">
              How artificial intelligence will transform every Dralha business — from flour mill to hotel, from bamboo to agribusiness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DATAVIV INTRO SECTION */}
      <section className="w-full bg-brand-white py-32 relative z-20 overflow-hidden border-b border-brand-saffron/20 shadow-2xl">
        {/* Vibrant Bhutanese Blobs Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -right-[20%] -bottom-[20%] w-[60%] h-[140%] bg-brand-dragonRed rounded-full blur-[140px] opacity-10" />
          <div className="absolute left-[10%] top-[-10%] w-[50%] h-[120%] bg-brand-saffron rounded-full blur-[140px] opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="flex-1 border-b md:border-b-0 md:border-r border-brand-black/10 pb-12 md:pb-0 md:pr-16">
              <div className="relative h-28 w-80 mb-8">
                <Image 
                  src="/dataviv logo.jpeg" 
                  alt="Dataviv Technologies" 
                  fill 
                  className="object-contain object-left mix-blend-multiply brightness-105" 
                />
              </div>
              <p className="text-brand-saffron text-sm tracking-widest uppercase mb-6 font-bold">Be Future Proof</p>
              <p className="text-brand-black/80 leading-relaxed text-xl font-medium">
                Dataviv makes intelligent technology systems. Their core team holds MS in Artificial Intelligence from Stanford University, with research under Andrew Ng, founder of Google Brain.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-10">
              <div className="flex items-center gap-6 text-brand-black text-2xl font-bold transition-transform duration-500 hover:translate-x-4">
                <div className="p-5 rounded-2xl bg-brand-saffron/10 border border-brand-saffron/30 flex items-center justify-center shadow-lg shadow-brand-saffron/10">
                  <Brain className="text-brand-saffron w-8 h-8 flex-shrink-0 drop-shadow-[0_2px_4px_rgba(255,149,0,0.5)]" />
                </div>
                <span>Stanford AI Pedigree</span>
              </div>
              <div className="flex items-center gap-6 text-brand-black text-2xl font-bold transition-transform duration-500 hover:translate-x-4">
                <div className="p-5 rounded-2xl bg-brand-dragonRed/10 border border-brand-dragonRed/30 flex items-center justify-center shadow-lg shadow-brand-dragonRed/10">
                  <Rocket className="text-brand-dragonRed w-8 h-8 flex-shrink-0 drop-shadow-[0_2px_4px_rgba(232,41,28,0.5)]" />
                </div>
                <span>Turnkey Delivery</span>
              </div>
              <div className="flex items-center gap-6 text-brand-black text-2xl font-bold transition-transform duration-500 hover:translate-x-4">
                <div className="p-5 rounded-2xl bg-brand-vibrantBlue/10 border border-brand-vibrantBlue/30 flex items-center justify-center shadow-lg shadow-brand-vibrantBlue/10">
                  <Headset className="text-brand-vibrantBlue w-8 h-8 flex-shrink-0 drop-shadow-[0_2px_4px_rgba(0,122,255,0.5)]" />
                </div>
                <span>Best-in-Class Support</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT IS DATAVIV AI OS */}
      <section className="w-full py-32 border-b border-brand-saffron/20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <ScrollReveal>
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase mb-4 text-brand-saffron">THE PLATFORM</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-display text-brand-white mb-6">DATAVIV AI OS</h3>
            <p className="text-xl text-brand-gold mb-8 font-medium">The Operating System for Artificial Intelligence</p>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-12 font-medium">
              Just as a computer needs an operating system — DATAVIV AI OS is the operating system that runs AI across your entire organisation. One platform. One place. Full control.
            </p>
            
            <div className="flex flex-col lg:flex-row items-center gap-4 text-sm font-bold uppercase tracking-wider text-brand-white mt-12 w-full">
              <motion.div 
                onHoverStart={() => setActiveLayer(0)} onHoverEnd={() => setActiveLayer(null)}
                className={`px-6 py-4 border rounded-xl cursor-pointer transition-all duration-300 ${activeLayer === 0 ? 'border-brand-white bg-brand-white/20 shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105' : activeLayer === null ? 'border-brand-saffron/30 bg-brand-white/5' : 'border-brand-saffron/10 text-brand-white/30 bg-transparent opacity-50'}`}
              >
                Collect Data
              </motion.div>
              <ChevronRight className={`w-5 h-5 hidden lg:block transition-opacity duration-300 ${activeLayer === 1 ? 'text-brand-saffron opacity-100' : 'text-brand-white/20'}`} />
              <motion.div 
                onHoverStart={() => setActiveLayer(1)} onHoverEnd={() => setActiveLayer(null)}
                className={`px-6 py-4 border rounded-xl cursor-pointer transition-all duration-300 ${activeLayer === 1 ? 'border-brand-saffron bg-brand-saffron/20 text-brand-saffron shadow-[0_0_15px_rgba(255,149,0,0.5)] scale-105' : activeLayer === null ? 'border-brand-saffron/50 bg-brand-saffron/10 text-brand-saffron' : 'border-brand-saffron/10 text-brand-white/30 bg-transparent opacity-50'}`}
              >
                AI Analysis
              </motion.div>
              <ChevronRight className={`w-5 h-5 hidden lg:block transition-opacity duration-300 ${activeLayer === 2 ? 'text-brand-dragonRed opacity-100' : 'text-brand-white/20'}`} />
              <motion.div 
                onHoverStart={() => setActiveLayer(2)} onHoverEnd={() => setActiveLayer(null)}
                className={`px-6 py-4 border rounded-xl cursor-pointer transition-all duration-300 ${activeLayer === 2 ? 'border-brand-dragonRed bg-brand-dragonRed/20 text-brand-dragonRed shadow-[0_0_15px_rgba(232,41,28,0.5)] scale-105' : activeLayer === null ? 'border-brand-dragonRed/50 bg-brand-dragonRed/10 text-brand-dragonRed' : 'border-brand-saffron/10 text-brand-white/30 bg-transparent opacity-50'}`}
              >
                Insights & Actions
              </motion.div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="flex justify-center">
            {/* Pyramid SVG */}
            <svg width="400" height="300" viewBox="0 0 400 300" className="w-full max-w-[280px] md:max-w-md cursor-pointer overflow-visible">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#050505', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1A1A1A', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              
              {/* Base / Data Layer */}
              <g onMouseEnter={() => setActiveLayer(0)} onMouseLeave={() => setActiveLayer(null)} className="transition-all duration-300 outline-none">
                <motion.path d="M 50 250 L 350 250 L 300 180 L 100 180 Z" 
                  fill={activeLayer === 0 ? "rgba(255,255,255,0.1)" : activeLayer === null ? "url(#grad1)" : "rgba(255,255,255,0.02)"} 
                  stroke={activeLayer === 0 ? "#FFF" : activeLayer === null ? "#555" : "#222"} 
                  strokeWidth="2"
                  animate={{ y: activeLayer === 0 ? -5 : 0, scale: activeLayer === 0 ? 1.02 : 1 }}
                  style={{ transformOrigin: "200px 215px" }}
                />
                <motion.text animate={{ y: activeLayer === 0 ? -5 : 0 }} x="200" y="225" fill={activeLayer === 0 || activeLayer === null ? "#FFF" : "#444"} textAnchor="middle" fontSize="14" fontWeight="bold" letterSpacing="2">DATA LAYER</motion.text>
                <motion.text animate={{ y: activeLayer === 0 ? -5 : 0 }} x="200" y="240" fill={activeLayer === 0 || activeLayer === null ? "#AAA" : "#333"} textAnchor="middle" fontSize="10">Collects & Stores Information</motion.text>
              </g>

              {/* Middle / AI Layer */}
              <g onMouseEnter={() => setActiveLayer(1)} onMouseLeave={() => setActiveLayer(null)} className="transition-all duration-300 outline-none">
                <motion.path d="M 110 170 L 290 170 L 230 90 L 170 90 Z" 
                  fill={activeLayer === 1 ? "rgba(255, 149, 0, 0.3)" : activeLayer === null ? "rgba(255, 149, 0, 0.1)" : "rgba(255, 149, 0, 0.02)"} 
                  stroke={activeLayer === 1 || activeLayer === null ? "#FF9500" : "#442200"} 
                  strokeWidth="2"
                  animate={{ y: activeLayer === 1 ? -10 : 0, scale: activeLayer === 1 ? 1.02 : 1 }}
                  style={{ transformOrigin: "200px 130px" }}
                />
                <motion.text animate={{ y: activeLayer === 1 ? -10 : 0 }} x="200" y="140" fill={activeLayer === 1 || activeLayer === null ? "#FF9500" : "#442200"} textAnchor="middle" fontSize="14" fontWeight="bold" letterSpacing="2">AI LAYER</motion.text>
                <motion.text animate={{ y: activeLayer === 1 ? -10 : 0 }} x="200" y="155" fill={activeLayer === 1 || activeLayer === null ? "rgba(255, 149, 0, 0.7)" : "rgba(255, 149, 0, 0.2)"} textAnchor="middle" fontSize="10">Analyses, Finds Insights</motion.text>
              </g>

              {/* Top / App Layer */}
              <g onMouseEnter={() => setActiveLayer(2)} onMouseLeave={() => setActiveLayer(null)} className="transition-all duration-300 outline-none">
                <motion.path d="M 180 80 L 220 80 L 200 30 Z" 
                  fill={activeLayer === 2 ? "rgba(232, 41, 28, 0.5)" : activeLayer === null ? "rgba(232, 41, 28, 0.2)" : "rgba(232, 41, 28, 0.05)"} 
                  stroke={activeLayer === 2 || activeLayer === null ? "#E8291C" : "#440000"} 
                  strokeWidth="2"
                  animate={{ y: activeLayer === 2 ? -15 : 0, scale: activeLayer === 2 ? 1.05 : 1 }}
                  style={{ transformOrigin: "200px 55px" }}
                />
                <motion.text animate={{ y: activeLayer === 2 ? -15 : 0 }} x="200" y="70" fill={activeLayer === 2 || activeLayer === null ? "#E8291C" : "#440000"} textAnchor="middle" fontSize="12" fontWeight="bold">APP LAYER</motion.text>
              </g>
            </svg>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTOR TRANSFORMATIONS */}
      <section className="w-full bg-brand-white text-brand-black py-32 border-b border-brand-saffron/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-display mb-6 text-brand-black">Sector Transformations.</h2>
          </ScrollReveal>

          <div className="flex flex-col border-t border-brand-saffron/20">
            {sectors.map((sector, i) => {
              const isHovered = hoveredIndex === i;
              return (
                <div 
                  key={sector.id} 
                  className="relative w-full border-b border-brand-saffron/20 transition-all duration-700 ease-in-out cursor-pointer overflow-hidden group"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ height: isHovered ? "450px" : "120px" }}
                >
                  {/* Background Image */}
                  <div 
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                    style={{ backgroundImage: `url('${sector.image}')` }}
                  />
                  {/* Gradient Overlay for Readability */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-brand-white/95 via-brand-white/40 to-transparent transition-opacity duration-700 ${isHovered ? 'opacity-80' : 'opacity-100'}`} />

                  {/* Content Wrapper */}
                  <div className="relative z-10 w-full h-full flex flex-col px-8">
                    
                    {/* Header Row - Fixed Height 120px */}
                    <div className="h-[120px] flex items-center justify-between w-full">
                      <div className="flex items-center gap-8 md:gap-12 flex-1">
                        <span className={`text-2xl font-bold transition-colors duration-500 ${isHovered ? sector.textClass : 'text-brand-black/30'}`}>{sector.id}</span>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 flex-1">
                          <h3 className={`text-3xl md:text-5xl font-display font-bold transition-colors duration-500 min-w-[280px] ${isHovered ? 'text-brand-black' : 'text-brand-black/80'}`}>{sector.title}</h3>
                          <p className={`hidden lg:block text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${isHovered ? 'text-brand-black/80' : 'text-brand-black/40'}`}>{sector.subtitle}</p>
                        </div>
                      </div>
                      <div className={`hidden md:block text-[10px] md:text-sm tracking-widest font-bold uppercase transition-colors duration-500 text-right ${isHovered ? sector.textClass : 'text-brand-black/30'}`}>
                        {sector.est}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <div className={`flex flex-col md:flex-row gap-8 transition-all duration-700 ease-in-out pb-8 ${isHovered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                      {/* Today */}
                      <div className="flex-1 bg-brand-white/80 backdrop-blur-md p-8 rounded-3xl border border-brand-black/5 shadow-xl">
                        <h4 className="text-xl font-bold text-brand-black/60 mb-6 pb-4 border-b border-brand-black/10">Today — Without AI</h4>
                        <ul className="space-y-4 text-brand-black/80 text-lg">
                          {sector.today.map((item, idx) => (
                            <li key={idx} className="flex gap-3"><span className="text-brand-dragonRed font-bold">✕</span> {item}</li>
                          ))}
                        </ul>
                      </div>
                      {/* Tomorrow */}
                      <div className="flex-1 bg-brand-black/80 backdrop-blur-xl p-8 rounded-3xl border border-brand-white/10 shadow-2xl">
                        <h4 className={`text-xl font-bold ${sector.textClass} mb-6 pb-4 border-b border-brand-white/10`}>Tomorrow — With Dataviv AI OS</h4>
                        <ul className="space-y-4 text-brand-white text-lg font-medium">
                          {sector.tomorrow.map((item, idx) => (
                            <li key={idx} className="flex gap-3"><CheckCircle className={`w-6 h-6 ${sector.textClass} flex-shrink-0`} /> {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="w-full bg-brand-black text-brand-white py-32 border-b border-brand-saffron/20 relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-vibrantBlue/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-16 text-center relative z-10">
          <motion.div whileHover={{ scale: 1.05 }} className="group flex flex-col items-center justify-center border-brand-white/10 md:border-r last:border-0 cursor-default">
            <div className="text-6xl md:text-8xl font-display text-brand-vibrantGreen mb-4 drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]"><CountUp end={6} duration={2} /></div>
            <p className="text-xs tracking-[0.2em] font-bold text-brand-white/50 uppercase group-hover:text-brand-white transition-colors duration-500">Dralha Divisions Transformed</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="group flex flex-col items-center justify-center border-brand-white/10 md:border-r last:border-0 cursor-default">
            <div className="text-6xl md:text-8xl font-display text-brand-vibrantPink mb-4 drop-shadow-[0_0_15px_rgba(255,0,128,0.3)]"><CountUp end={12} duration={2.5} />+</div>
            <p className="text-xs tracking-[0.2em] font-bold text-brand-white/50 uppercase group-hover:text-brand-white transition-colors duration-500">AI Modules Deployed</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="group flex flex-col items-center justify-center border-brand-white/10 md:border-r last:border-0 cursor-default">
            <div className="text-6xl md:text-8xl font-display text-brand-vibrantBlue mb-4 drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]"><CountUp end={1} duration={1} /></div>
            <p className="text-xs tracking-[0.2em] font-bold text-brand-white/50 uppercase group-hover:text-brand-white transition-colors duration-500">Unified Intelligence Platform</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="group flex flex-col items-center justify-center cursor-default">
            <div className="text-6xl md:text-8xl font-display text-brand-vibrantOrange mb-4 drop-shadow-[0_0_15px_rgba(255,140,0,0.3)]">∞</div>
            <p className="text-xs tracking-[0.2em] font-bold text-brand-white/50 uppercase group-hover:text-brand-white transition-colors duration-500">ROI Potential</p>
          </motion.div>
        </div>
      </section>

      {/* CLOSING VISION STATEMENT */}
      <section className="w-full bg-flag-gradient py-32 flex flex-col items-center text-center text-brand-white relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-display mb-10 leading-tight">
            "Bhutan has always led the world in Gross National Happiness. With DATAVIV AI OS, Dralha Group will lead Bhutan into Gross National Intelligence."
          </h2>
          <p className="font-bold tracking-widest uppercase text-brand-gold">— Dralha × Dataviv Partnership, 2026</p>
          
          <div className="mt-16">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-white text-brand-black font-bold hover:bg-transparent hover:text-brand-white border-2 border-brand-white transition-colors rounded-full">
              Get In Touch <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}