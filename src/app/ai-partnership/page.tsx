"use client";

import { motion } from "framer-motion";
import { CheckCircle, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

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
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden border-b border-brand-white/20">
        {/* Background Network Animation */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00FF88" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {[...Array(20)].map((_, i) => (
              <motion.circle
                key={i}
                r="2"
                fill="#00FF88"
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
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase mb-6 text-brand-vibrantGreen">
              THE FUTURE OF DRALHA
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display leading-[1.1] mb-6 font-bold">
              Powered by <span className="text-brand-vibrantGreen">Dataviv AI OS.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-brand-white/80 max-w-3xl mx-auto leading-relaxed">
              How artificial intelligence will transform every Dralha business — from flour mill to hotel, from bamboo to agribusiness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DATAVIV INTRO STRIP */}
      <section className="w-full max-w-6xl mx-auto px-6 -mt-20 relative z-20">
        <ScrollReveal className="bg-brand-black border border-brand-white/10 border-l-4 border-l-brand-vibrantGreen p-10 flex flex-col md:flex-row items-center gap-12 shadow-2xl shadow-brand-vibrantGreen/10 hover:shadow-brand-vibrantGreen/30 hover:border-brand-vibrantGreen/50 transition-all duration-500">
          <div className="flex-1 border-b md:border-b-0 md:border-r border-brand-white/10 pb-8 md:pb-0 md:pr-12">
            <div className="relative h-16 w-64 mb-6">
              <Image 
                src="/dataviv logo.jpeg" 
                alt="Dataviv Technologies" 
                fill 
                className="object-contain object-left invert opacity-90 mix-blend-screen brightness-200 contrast-125" 
              />
            </div>
            <p className="text-brand-vibrantGreen text-sm tracking-widest uppercase mb-6 font-bold">Be Future Proof</p>
            <p className="text-brand-white/70 leading-relaxed text-lg">
              Dataviv makes intelligent technology systems. Their core team holds MS in Artificial Intelligence from Stanford University, with research under Andrew Ng, founder of Google Brain.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-4 text-brand-white/80 text-lg">
              <CheckCircle className="text-brand-vibrantGreen w-6 h-6 flex-shrink-0" />
              <span>Stanford AI Pedigree</span>
            </div>
            <div className="flex items-center gap-4 text-brand-white/80 text-lg">
              <CheckCircle className="text-brand-vibrantGreen w-6 h-6 flex-shrink-0" />
              <span>Turnkey Delivery</span>
            </div>
            <div className="flex items-center gap-4 text-brand-white/80 text-lg">
              <CheckCircle className="text-brand-vibrantGreen w-6 h-6 flex-shrink-0" />
              <span>Best-in-Class Support</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* WHAT IS DATAVIV AI OS */}
      <section className="w-full py-32 border-b border-brand-white/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <ScrollReveal>
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase mb-4 text-brand-vibrantGreen">THE PLATFORM</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-display text-brand-white mb-6">DATAVIV AI OS</h3>
            <p className="text-xl text-brand-vibrantGreen mb-8">The Operating System for Artificial Intelligence</p>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-12">
              Just as a computer needs an operating system — DATAVIV AI OS is the operating system that runs AI across your entire organisation. One platform. One place. Full control.
            </p>
            
            <div className="flex flex-col lg:flex-row items-center gap-4 text-sm font-bold uppercase tracking-wider text-brand-white mt-12 w-full">
              <motion.div 
                onHoverStart={() => setActiveLayer(0)} onHoverEnd={() => setActiveLayer(null)}
                className={`px-6 py-4 border rounded cursor-pointer transition-all duration-300 ${activeLayer === 0 ? 'border-brand-white bg-brand-white/20 shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105' : activeLayer === null ? 'border-brand-white/20 bg-brand-white/5' : 'border-brand-white/10 bg-transparent opacity-50'}`}
              >
                Collect Data
              </motion.div>
              <ChevronRight className={`w-5 h-5 hidden lg:block transition-opacity duration-300 ${activeLayer === 1 ? 'text-brand-vibrantGreen opacity-100' : 'text-brand-white/20'}`} />
              <motion.div 
                onHoverStart={() => setActiveLayer(1)} onHoverEnd={() => setActiveLayer(null)}
                className={`px-6 py-4 border rounded cursor-pointer transition-all duration-300 ${activeLayer === 1 ? 'border-brand-vibrantGreen bg-brand-vibrantGreen/20 text-brand-vibrantGreen shadow-[0_0_15px_rgba(0,255,136,0.5)] scale-105' : activeLayer === null ? 'border-brand-vibrantGreen/50 bg-brand-vibrantGreen/10 text-brand-vibrantGreen' : 'border-brand-white/10 text-brand-white/30 bg-transparent opacity-50'}`}
              >
                AI Analysis
              </motion.div>
              <ChevronRight className={`w-5 h-5 hidden lg:block transition-opacity duration-300 ${activeLayer === 2 ? 'text-brand-vibrantBlue opacity-100' : 'text-brand-white/20'}`} />
              <motion.div 
                onHoverStart={() => setActiveLayer(2)} onHoverEnd={() => setActiveLayer(null)}
                className={`px-6 py-4 border rounded cursor-pointer transition-all duration-300 ${activeLayer === 2 ? 'border-brand-vibrantBlue bg-brand-vibrantBlue/20 text-brand-vibrantBlue shadow-[0_0_15px_rgba(0,229,255,0.5)] scale-105' : activeLayer === null ? 'border-brand-vibrantBlue/50 bg-brand-vibrantBlue/10 text-brand-vibrantBlue' : 'border-brand-white/10 text-brand-white/30 bg-transparent opacity-50'}`}
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
                  fill={activeLayer === 1 ? "rgba(0, 255, 136, 0.3)" : activeLayer === null ? "rgba(0, 255, 136, 0.1)" : "rgba(0, 255, 136, 0.02)"} 
                  stroke={activeLayer === 1 || activeLayer === null ? "#00FF88" : "#114422"} 
                  strokeWidth="2"
                  animate={{ y: activeLayer === 1 ? -10 : 0, scale: activeLayer === 1 ? 1.02 : 1 }}
                  style={{ transformOrigin: "200px 130px" }}
                />
                <motion.text animate={{ y: activeLayer === 1 ? -10 : 0 }} x="200" y="140" fill={activeLayer === 1 || activeLayer === null ? "#00FF88" : "#114422"} textAnchor="middle" fontSize="14" fontWeight="bold" letterSpacing="2">AI LAYER</motion.text>
                <motion.text animate={{ y: activeLayer === 1 ? -10 : 0 }} x="200" y="155" fill={activeLayer === 1 || activeLayer === null ? "rgba(0, 255, 136, 0.7)" : "rgba(0, 255, 136, 0.2)"} textAnchor="middle" fontSize="10">Analyses, Finds Insights</motion.text>
              </g>

              {/* Top / App Layer */}
              <g onMouseEnter={() => setActiveLayer(2)} onMouseLeave={() => setActiveLayer(null)} className="transition-all duration-300 outline-none">
                <motion.path d="M 180 80 L 220 80 L 200 30 Z" 
                  fill={activeLayer === 2 ? "rgba(0, 229, 255, 0.5)" : activeLayer === null ? "rgba(0, 229, 255, 0.2)" : "rgba(0, 229, 255, 0.05)"} 
                  stroke={activeLayer === 2 || activeLayer === null ? "#00E5FF" : "#003344"} 
                  strokeWidth="2"
                  animate={{ y: activeLayer === 2 ? -15 : 0, scale: activeLayer === 2 ? 1.05 : 1 }}
                  style={{ transformOrigin: "200px 55px" }}
                />
                <motion.text animate={{ y: activeLayer === 2 ? -15 : 0 }} x="200" y="70" fill={activeLayer === 2 || activeLayer === null ? "#00E5FF" : "#003344"} textAnchor="middle" fontSize="12" fontWeight="bold">APP LAYER</motion.text>
              </g>
            </svg>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTOR TRANSFORMATIONS */}
      <section className="w-full py-32 border-b border-brand-white/20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-display mb-6">Sector Transformations.</h2>
          </ScrollReveal>

          <div className="flex flex-col border-t border-brand-white/10">
            {sectors.map((sector, i) => {
              const isHovered = hoveredIndex === i;
              return (
                <div 
                  key={sector.id} 
                  className="relative w-full border-b border-brand-white/10 transition-all duration-700 ease-in-out cursor-pointer overflow-hidden group"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ height: isHovered ? "450px" : "120px" }}
                >
                  {/* Background Image */}
                  <div 
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${isHovered ? 'opacity-90 scale-105' : 'opacity-0 scale-100'}`}
                    style={{ backgroundImage: `url('${sector.image}')`, filter: 'grayscale(0%)' }}
                  />
                  {/* Gradient Overlay for Readability */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/70 to-transparent transition-opacity duration-700 ${isHovered ? 'opacity-90' : 'opacity-100'}`} />

                  {/* Content Wrapper */}
                  <div className="relative z-10 w-full h-full flex flex-col px-8">
                    
                    {/* Header Row - Fixed Height 120px */}
                    <div className="h-[120px] flex items-center justify-between w-full">
                      <div className="flex items-center gap-12 flex-1">
                        <span className={`text-2xl font-bold transition-colors duration-500 ${isHovered ? sector.textClass : 'text-brand-white/30'}`}>{sector.id}</span>
                        <div className="flex items-center gap-12 flex-1">
                          <h3 className={`text-4xl md:text-5xl font-display transition-colors duration-500 min-w-[280px] ${isHovered ? 'text-brand-white' : 'text-brand-white/70'}`}>{sector.title}</h3>
                          <p className={`hidden lg:block text-sm tracking-widest uppercase transition-colors duration-500 ${isHovered ? 'text-brand-white/70' : 'text-brand-white/50'}`}>{sector.subtitle}</p>
                        </div>
                      </div>
                      <div className={`text-xs md:text-sm tracking-widest font-bold uppercase transition-colors duration-500 text-right ${isHovered ? sector.textClass : 'text-brand-white/30'}`}>
                        {sector.est}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <div className={`flex flex-col md:flex-row gap-12 transition-all duration-700 ease-in-out pb-8 ${isHovered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                      {/* Today */}
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-brand-white/40 mb-6 pb-2 border-b border-brand-white/10">Today — Without AI</h4>
                        <ul className="space-y-4 text-brand-white/60 text-lg">
                          {sector.today.map((item, idx) => (
                            <li key={idx} className="flex gap-3"><span>✕</span> {item}</li>
                          ))}
                        </ul>
                      </div>
                      {/* Tomorrow */}
                      <div className="flex-1">
                        <h4 className={`text-xl font-bold ${sector.textClass} mb-6 pb-2 border-b ${sector.borderClass}/30`}>Tomorrow — With Dataviv AI OS</h4>
                        <ul className="space-y-4 text-brand-white text-lg">
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
      <section className="w-full py-32 border-b border-brand-white/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <div className="text-6xl md:text-8xl font-display text-brand-vibrantGreen mb-4"><CountUp end={6} duration={2} /></div>
            <p className="text-brand-white/70 font-medium">Dralha Divisions Transformed</p>
          </div>
          <div>
            <div className="text-6xl md:text-8xl font-display text-brand-vibrantPink mb-4"><CountUp end={12} duration={2.5} />+</div>
            <p className="text-brand-white/70 font-medium">AI Modules Deployed</p>
          </div>
          <div>
            <div className="text-6xl md:text-8xl font-display text-brand-vibrantBlue mb-4"><CountUp end={1} duration={1} /></div>
            <p className="text-brand-white/70 font-medium">Unified Intelligence Platform</p>
          </div>
          <div>
            <div className="text-6xl md:text-8xl font-display text-brand-vibrantOrange mb-4">∞</div>
            <p className="text-brand-white/70 font-medium">ROI Potential</p>
          </div>
        </div>
      </section>

      {/* CLOSING VISION STATEMENT */}
      <section className="w-full bg-brand-vibrantGreen py-32 flex flex-col items-center text-center text-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-display mb-10 leading-tight">
            "Bhutan has always led the world in Gross National Happiness. With DATAVIV AI OS, Dralha Group will lead Bhutan into Gross National Intelligence."
          </h2>
          <p className="font-bold tracking-widest uppercase">— Dralha × Dataviv Partnership, 2025</p>
          
          <div className="mt-16">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-black text-brand-vibrantGreen font-bold hover:bg-transparent hover:text-brand-black border-2 border-brand-black transition-colors rounded-full">
              Get In Touch <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}