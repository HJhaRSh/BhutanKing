"use client";
import AuroraLayer from "@/components/AuroraLayer";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const CountUp = ({ end, duration, start = 0 }: { end: number, duration: number, start?: number }) => {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
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
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [inView, end, duration, start]);

  return <span ref={ref}>{count}</span>;
};

export default function Home() {
  const [hoveredPortfolio, setHoveredPortfolio] = useState<number | null>(null);

  const portfolioItems = [
    { num: "01", title: "Hotel Dralha", desc: "3-Star award-winning hospitality in Thimphu", est: "Est. 2018", link: "/hotel", image: "/hotel/Hotel Reception.jpg", color: "text-brand-vibrantPink" },
    { num: "02", title: "Dralha Flour Mill", desc: "Bhutan's pioneer flour mill, 100 MT/day", est: "Est. 1988", link: "/mill", image: "/mill/hero-bg.png", color: "text-brand-vibrantOrange" },
    { num: "03", title: "Napkin Factory", desc: "Tissue & hygiene products for Bhutan", est: "Est. 2009", link: "/napkin", image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?q=80&w=2000&auto=format&fit=crop", color: "text-brand-vibrantPurple" },
    { num: "04", title: "Bamboo Rev.", desc: "Sustainable bamboo processing", est: "Coming 2026", link: "/bamboo", image: "/bamboo.png", color: "text-brand-vibrantGreen" },
    { num: "05", title: "Agribusiness", desc: "Avocado & Arabica coffee, 54 acres", est: "Launching Soon", link: "/agribusiness", image: "/agri.png", color: "text-brand-vibrantGreen" },
    { num: "06", title: "GMC Apts", desc: "Luxury living in Gelephu Mindfulness City", est: "Upcoming", link: "/gmc", image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=2000&auto=format&fit=crop", color: "text-brand-vibrantBlue" }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-brand-black">
        <AuroraLayer />
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-creative-light text-brand-black">
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col items-start py-20 pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-brand-saffron font-bold">
                Established 1988 · Phuentsholing, Bhutan
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-display leading-[0.9] mb-8 font-medium">
                Building<br />
                Bhutan's<br />
                Future.
              </h1>
              <p className="text-lg mb-10 max-w-lg leading-relaxed text-brand-black/70">
                Dralha Group of Industries is Bhutan's diversified conglomerate spanning hospitality, food manufacturing, sustainable agriculture, and real estate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mt-4">
                <Link href="#portfolio" className="group relative inline-flex items-center justify-center px-8 py-4 bg-brand-vibrantBlue text-brand-black font-bold uppercase tracking-widest text-sm hover:bg-brand-white transition-all duration-300 overflow-hidden rounded-full">
                  <span className="relative z-10">Explore Portfolio</span>
                </Link>
                <Link href="/about" className="group inline-flex items-center justify-center px-8 py-4 border border-brand-black text-brand-black font-bold uppercase tracking-widest text-sm hover:bg-brand-black hover:text-brand-vibrantBlue transition-all duration-300 rounded-full">
                  Our Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="hidden md:block h-full border-l border-brand-saffron/20 relative">
             <div className="absolute inset-y-10 inset-x-10 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-2xl shadow-2xl shadow-brand-vibrantBlue/20" />
          </div>

        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-[1px] h-12 bg-brand-black/20 mb-4" />
        <AuroraLayer />
          <ChevronDown className="w-6 h-6 text-brand-black" />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="w-full bg-brand-black text-brand-white border-y border-brand-orchid/20 py-24 relative overflow-hidden">
        <AuroraLayer />
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-vibrantBlue/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-16 text-center relative z-10">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center justify-center border-brand-orchid/20 md:border-r last:border-0 cursor-default"
          >
            <span className="font-display text-6xl mb-2 group-hover:text-brand-vibrantBlue transition-colors duration-500">
              <CountUp start={1900} end={1988} duration={2} />
            </span>
            <span className="text-xs tracking-[0.2em] text-brand-white/50 uppercase group-hover:text-brand-white transition-colors duration-500">Established</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center justify-center border-brand-orchid/20 md:border-r last:border-0 cursor-default"
          >
            <span className="font-display text-6xl mb-2 group-hover:text-brand-vibrantPink transition-colors duration-500">
              <CountUp end={6} duration={2} />+
            </span>
            <span className="text-xs tracking-[0.2em] text-brand-white/50 uppercase group-hover:text-brand-white transition-colors duration-500">Divisions</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center justify-center border-brand-orchid/20 md:border-r last:border-0 cursor-default"
          >
            <span className="font-display text-6xl mb-2 group-hover:text-brand-vibrantGreen transition-colors duration-500">
              <CountUp end={100} duration={2} /><span className="text-3xl ml-1">MT</span>
            </span>
            <span className="text-xs tracking-[0.2em] text-brand-white/50 uppercase group-hover:text-brand-white transition-colors duration-500">Daily Capacity</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center justify-center cursor-default"
          >
            <span className="font-display text-6xl mb-2 group-hover:text-brand-vibrantOrange transition-colors duration-500">
              <CountUp start={2000} end={2025} duration={2} />
            </span>
            <span className="text-xs tracking-[0.2em] text-brand-white/50 uppercase group-hover:text-brand-white transition-colors duration-500">SATA Winner</span>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO (NO CARDS) */}
      <section id="portfolio" className="w-full bg-brand-black text-brand-white py-32">
        <AuroraLayer />
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h3 className="text-brand-vibrantBlue text-xs font-bold tracking-[0.3em] uppercase mb-4 pb-4">Our Portfolio</h3>
            <h2 className="text-5xl md:text-7xl font-display leading-tight">Diversified<br/><span className="text-vibrant-gradient">Excellence.</span></h2>
          </div>

          <div className="flex flex-col border-t border-brand-orchid/20">
            {portfolioItems.map((biz, i) => {
              const isHovered = hoveredPortfolio === i;
              return (
                <div 
                  key={biz.title}
                  className="relative w-full border-b border-brand-orchid/20 transition-all duration-700 ease-in-out cursor-pointer overflow-hidden group"
                  onMouseEnter={() => setHoveredPortfolio(i)}
                  onMouseLeave={() => setHoveredPortfolio(null)}
                  style={{ height: isHovered ? "400px" : "120px" }}
                >
                  {/* Background Image */}
                  <div 
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${isHovered ? 'opacity-90 scale-105' : 'opacity-0 scale-100'}`}
                    style={{ backgroundImage: `url('${biz.image}')`, filter: 'grayscale(0%)' }}
                  />
                  {/* Gradient Overlay for Readability */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/70 to-transparent transition-opacity duration-700 ${isHovered ? 'opacity-90' : 'opacity-100'}`} />

                  {/* Content Wrapper */}
                  <div className="relative z-10 w-full h-full flex flex-col px-6 md:px-12">
                    
                    {/* Header Row - Fixed Height 120px */}
                    <div className="h-[120px] flex items-center justify-between w-full">
                      <div className="flex items-center gap-8 md:gap-12 flex-1">
                        <span className={`text-2xl font-bold transition-colors duration-500 ${isHovered ? biz.color : 'text-brand-white/30'}`}>{biz.num}</span>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 flex-1">
                          <h3 className={`text-3xl md:text-5xl font-display transition-colors duration-500 min-w-[280px] ${isHovered ? 'text-brand-white' : 'text-brand-white/80'}`}>{biz.title}</h3>
                          <p className={`text-sm tracking-widest uppercase transition-colors duration-500 ${isHovered ? 'text-brand-white/80' : 'text-brand-white/50'}`}>{biz.desc}</p>
                        </div>
                      </div>
                      <div className={`hidden md:block text-xs tracking-widest font-bold uppercase transition-colors duration-500 text-right ${isHovered ? biz.color : 'text-brand-white/30'}`}>
                        {biz.est}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <div className={`flex items-end pb-12 transition-all duration-700 ease-in-out h-full ${isHovered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                      <Link href={biz.link} className={`inline-flex items-center gap-4 px-8 py-4 border-2 transition-colors duration-300 rounded-full font-bold uppercase tracking-widest text-sm bg-brand-black hover:bg-brand-white hover:text-brand-black hover:border-brand-white ${biz.color.replace('text-', 'border-')}`}>
                        <span className={biz.color}>Explore</span> <ArrowRight className={`w-5 h-5 ${biz.color}`} />
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY (WHITE) */}
      <section className="w-full bg-creative-light text-brand-black py-32 border-y border-brand-saffron/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <span className="absolute -top-10 -left-10 text-[10rem] font-display text-brand-black/5 leading-none">"</span>
            <h3 className="font-display text-4xl md:text-5xl leading-[1.2] relative z-10">
              In alignment with the vision of His Majesty the King and the national philosophy of Gross National Happiness.
            </h3>
          </div>
          <div className="flex flex-col space-y-12 border-l border-brand-saffron/20 pl-10">
            <div>
              <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-2">Sustainability</h4>
              <p className="text-brand-black/70">Every business decision aligned with Bhutan's environmental principles.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-2">Excellence</h4>
              <p className="text-brand-black/70">Award-winning quality across all hospitality and manufacturing divisions.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-2">Community</h4>
              <p className="text-brand-black/70">Contributing to Bhutan's national economic growth and employment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI PARTNERSHIP */}
      <section className="w-full bg-brand-black text-brand-white py-32">
        <AuroraLayer />
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-brand-vibrantPink pb-4 inline-block">The Future</h3>
          <h2 className="text-5xl md:text-7xl font-display mb-8 max-w-4xl">Powered by <span className="text-brand-vibrantBlue">Artificial Intelligence.</span></h2>
          <p className="text-brand-white/70 mb-12 max-w-2xl text-lg">
            Dralha Group has partnered with Dataviv Technologies to transform every division with the power of the DATAVIV AI OS.
          </p>
          <Link href="/ai-partnership" className="px-10 py-5 bg-brand-vibrantBlue text-brand-black font-bold tracking-widest uppercase text-sm hover:bg-brand-white transition-colors rounded-full shadow-lg shadow-brand-vibrantBlue/20 mt-4">
            Discover the OS
          </Link>
        </div>
      </section>

      {/* PARTNERS & ASSOCIATIONS */}
      <section className="w-full bg-brand-black text-brand-white py-20 border-t border-brand-orchid/20 relative overflow-hidden">
        <AuroraLayer />
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand-saffron mb-16">
            Partners &amp; Associations
          </p>
          <div className="flex flex-col items-center gap-6 group cursor-default">
            <div className="relative bg-white rounded-2xl p-2 shadow-lg shadow-brand-royalViolet/10 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="absolute inset-0 rounded-2xl bg-brand-skyBlue/20 blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/partner_logo.jpeg"
                alt="Indian Centre For Social Transformation — A Public Charitable Trust (Regd.)"
                width={300}
                height={300}
                className="w-40 h-auto object-contain rounded-xl relative z-10"
              />
            </div>
            <div>
              <p className="text-brand-white/90 font-display text-xl group-hover:text-brand-white transition-colors">Indian Centre For Social Transformation</p>
              <p className="text-brand-white/40 text-xs tracking-widest uppercase mt-1 group-hover:text-brand-saffron transition-colors">A Public Charitable Trust (Regd.)</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
