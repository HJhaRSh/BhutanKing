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
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&q=80",
    "/hotel/Hotel Reception.jpg",
    "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

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
      
      <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-[#2D533A] text-brand-white">
        {/* Vibrant Bhutanese Aurora Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-[10%] top-[-10%] w-[50%] h-[80%] bg-brand-saffron rounded-full blur-[140px] opacity-20" />
          <div className="absolute right-[-10%] top-[20%] w-[40%] h-[60%] bg-brand-dragonRed rounded-full blur-[140px] opacity-15" />
          <div className="absolute left-[30%] bottom-[-20%] w-[40%] h-[60%] bg-brand-gold rounded-full blur-[120px] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col items-start py-20 pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase mb-6 text-brand-saffron">
                Established 1988 · Phuentsholing, Bhutan
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl lg:text-[5.5rem] font-display leading-[1.05] mb-8 font-bold tracking-tight text-brand-white">
                Building<br />
                Bhutan's<br />
                Future.
              </h1>
              <p className="text-lg mb-10 max-w-lg leading-relaxed text-brand-white/80 font-medium">
                Dralha Group of Industries is Bhutan's diversified conglomerate spanning hospitality, food manufacturing, sustainable agriculture, and real estate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mt-4">
                <Link href="#portfolio" className="group relative inline-flex items-center justify-center px-10 py-5 bg-flag-gradient text-brand-white font-bold uppercase tracking-[0.2em] text-xs hover:shadow-lg hover:shadow-brand-saffron/40 transition-all duration-500 overflow-hidden rounded-full">
                  <span className="relative z-10">Explore Portfolio</span>
                </Link>
                <Link href="/about" className="group inline-flex items-center justify-center px-10 py-5 border-2 border-brand-saffron text-brand-saffron font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-saffron hover:text-[#2D533A] transition-all duration-500 rounded-full">
                  Our Story <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="hidden md:flex justify-end h-[600px] relative">
             {heroImages.map((img, idx) => (
               <div 
                 key={img}
                 className={`absolute inset-y-4 right-0 w-full bg-cover bg-center rounded-[40px] shadow-[0_30px_60px_-15px_rgba(255,45,26,0.3)] border-2 border-brand-saffron/20 transition-opacity duration-1000 ease-in-out ${currentHeroImage === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                 style={{ backgroundImage: `url('${img}')` }}
               />
             ))}
             {/* Small floating badge */}
             <div className="absolute bottom-12 -left-8 z-20 bg-brand-white/95 backdrop-blur-md p-6 rounded-3xl shadow-[0_20px_40px_-10px_rgba(255,140,0,0.2)] border-2 border-brand-saffron/30 flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center">
                 <span className="text-brand-dragonRed font-bold text-xl">3</span>
               </div>
               <div>
                 <p className="text-brand-black font-bold text-sm tracking-wide">Decades of</p>
                 <p className="text-brand-saffron text-[10px] tracking-[0.2em] uppercase font-bold">Excellence</p>
               </div>
             </div>
          </div>

        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-[1px] h-12 bg-brand-saffron/50 mb-4" />
          <ChevronDown className="w-6 h-6 text-brand-dragonRed" />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="w-full bg-brand-black text-brand-white border-y border-brand-saffron/20 py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-dragonRed/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-16 text-center relative z-10">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center justify-center border-brand-white/10 md:border-r last:border-0 cursor-default"
          >
            <span className="font-display font-bold text-4xl md:text-6xl mb-2 text-brand-gold group-hover:text-brand-saffron transition-colors duration-500 drop-shadow-[0_0_15px_rgba(255,208,0,0.3)]">
              <CountUp end={36} duration={2} />
            </span>
            <span className="text-xs tracking-[0.2em] font-bold text-brand-white/50 uppercase group-hover:text-brand-white transition-colors duration-500">Years</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center justify-center border-brand-white/10 md:border-r last:border-0 cursor-default"
          >
            <span className="font-display font-bold text-4xl md:text-6xl mb-2 text-brand-dragonRed group-hover:text-brand-saffron transition-colors duration-500 drop-shadow-[0_0_15px_rgba(255,45,26,0.3)]">
              <CountUp end={6} duration={2} />+
            </span>
            <span className="text-xs tracking-[0.2em] font-bold text-brand-white/50 uppercase group-hover:text-brand-white transition-colors duration-500">Divisions</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center justify-center border-brand-white/10 md:border-r last:border-0 cursor-default"
          >
            <span className="font-display font-bold text-4xl md:text-6xl mb-2 text-brand-forestGreen group-hover:text-brand-skyBlue transition-colors duration-500 drop-shadow-[0_0_15px_rgba(0,230,118,0.3)]">
              <CountUp end={100} duration={2} /><span className="text-3xl ml-1">MT</span>
            </span>
            <span className="text-xs tracking-[0.2em] font-bold text-brand-white/50 uppercase group-hover:text-brand-white transition-colors duration-500">Daily Capacity</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center justify-center cursor-default"
          >
            <span className="font-display font-bold text-4xl md:text-6xl mb-2 text-brand-skyBlue group-hover:text-brand-gold transition-colors duration-500 drop-shadow-[0_0_15px_rgba(0,212,255,0.3)]">
              <CountUp start={2000} end={2025} duration={2} />
            </span>
            <span className="text-xs tracking-[0.2em] font-bold text-brand-white/50 uppercase group-hover:text-brand-white transition-colors duration-500">SATA Winner</span>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO (NO CARDS) */}
      <section id="portfolio" className="relative w-full bg-[#E5DCC5] text-brand-black py-16 md:py-32 border-b border-brand-saffron/10 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] bg-brand-saffron rounded-full blur-[140px] opacity-[0.15] mix-blend-multiply" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[80%] bg-brand-dragonRed rounded-full blur-[160px] opacity-[0.1] mix-blend-multiply" />
          <div className="absolute top-[30%] left-[40%] w-[30%] h-[50%] bg-brand-gold rounded-full blur-[120px] opacity-[0.15] mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <h3 className="text-brand-saffron text-[11px] font-bold tracking-[0.4em] uppercase mb-4 pb-4">Our Portfolio</h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display leading-tight font-bold tracking-tight text-brand-black">Diversified<br/><span className="text-transparent bg-clip-text bg-vibrant-gradient drop-shadow-sm">Excellence.</span></h2>
          </div>

          <div className="flex flex-col border-t border-brand-saffron/20">
            {portfolioItems.map((biz, i) => {
              const isHovered = hoveredPortfolio === i;
              return (
                <div 
                  key={biz.title}
                  className="relative w-full border-b border-brand-saffron/20 transition-all duration-700 ease-in-out cursor-pointer overflow-hidden group"
                  onMouseEnter={() => setHoveredPortfolio(i)}
                  onMouseLeave={() => setHoveredPortfolio(null)}
                  style={{ height: isHovered ? "400px" : "120px" }}
                >
                  {/* Background Image */}
                  <div 
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                    style={{ backgroundImage: `url('${biz.image}')`, filter: 'grayscale(0%)' }}
                  />
                  {/* Gradient Overlay for Readability */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#E5DCC5]/95 via-[#E5DCC5]/10 to-transparent transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                  {/* Content Wrapper */}
                  <div className="relative z-10 w-full h-full flex flex-col px-6 md:px-12">
                    
                    {/* Header Row - Fixed Height 120px */}
                    <div className="h-[120px] flex items-center justify-between w-full">
                      <div className="flex items-center gap-8 md:gap-12 flex-1">
                        <span className={`text-2xl font-bold transition-colors duration-500 ${isHovered ? biz.color.replace('text-', 'text-') : 'text-brand-black/30'}`}>{biz.num}</span>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 flex-1">
                          <h3 className={`text-3xl md:text-5xl font-display font-bold transition-colors duration-500 min-w-0 md:min-w-[280px] ${isHovered ? 'text-brand-black' : 'text-brand-black/80'}`}>{biz.title}</h3>
                          <p className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${isHovered ? 'text-brand-black/80' : 'text-brand-black/40'}`}>{biz.desc}</p>
                        </div>
                      </div>
                      <div className={`hidden md:block text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 text-right ${isHovered ? biz.color.replace('text-', 'text-') : 'text-brand-black/30'}`}>
                        {biz.est}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <div className={`flex items-end pb-12 transition-all duration-700 ease-in-out h-full ${isHovered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                      <Link href={biz.link} className={`inline-flex items-center gap-4 px-10 py-5 border-2 transition-colors duration-300 rounded-full font-bold uppercase tracking-[0.2em] text-xs bg-brand-black hover:bg-brand-saffron hover:text-brand-white hover:border-brand-saffron ${biz.color.replace('text-', 'border-')} text-brand-white shadow-lg`}>
                        <span>Explore</span> <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY (VIBRANT RED) */}
      <section className="relative w-full bg-brand-dragonRed text-brand-white py-16 md:py-32 border-y border-brand-saffron/30 overflow-hidden">
        {/* Saffron/Gold Blobs Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-[20%] -top-[20%] w-[60%] h-[140%] bg-brand-saffron rounded-full blur-[140px] opacity-50" />
          <div className="absolute right-[10%] top-[-10%] w-[50%] h-[120%] bg-brand-gold rounded-full blur-[140px] opacity-40" />
          <div className="absolute left-[30%] bottom-[-20%] w-[40%] h-[80%] bg-brand-royalViolet rounded-full blur-[120px] opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
          <div className="relative">
            <span className="absolute -top-16 -left-12 text-[12rem] font-serif text-brand-saffron/30 leading-none select-none drop-shadow-md">"</span>
            <h3 className="font-display font-bold text-4xl md:text-[46px] leading-[1.15] relative z-10 tracking-tight text-brand-white drop-shadow-lg">
              In alignment with the vision of His Majesty the King and the national philosophy of Gross National Happiness.
            </h3>
          </div>
          <div className="flex flex-col space-y-8 pl-4">
            <div className="bg-brand-white p-8 rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] border-b-4 border-brand-saffron hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-brand-dragonRed">Sustainability</h4>
              <p className="text-brand-black/90 text-sm font-semibold leading-relaxed">Every business decision aligned with Bhutan's environmental principles.</p>
            </div>
            <div className="bg-brand-white p-8 rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] border-b-4 border-brand-saffron hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-brand-dragonRed">Excellence</h4>
              <p className="text-brand-black/90 text-sm font-semibold leading-relaxed">Award-winning quality across all hospitality and manufacturing divisions.</p>
            </div>
            <div className="bg-brand-white p-8 rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] border-b-4 border-brand-saffron hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-brand-dragonRed">Community</h4>
              <p className="text-brand-black/90 text-sm font-semibold leading-relaxed">Contributing to Bhutan's national economic growth and employment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI PARTNERSHIP */}
      <section className="w-full bg-brand-black text-brand-white py-16 md:py-32 border-t border-brand-saffron/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-skyBlue/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <h3 className="text-[11px] font-bold tracking-[0.4em] uppercase mb-6 text-brand-skyBlue pb-4 inline-block drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">The Future</h3>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 max-w-4xl tracking-tight text-brand-white">Powered by <span className="text-transparent bg-clip-text bg-aurora-gradient drop-shadow-[0_0_15px_rgba(224,64,251,0.4)]">Artificial Intelligence.</span></h2>
          <p className="text-brand-white/80 mb-12 max-w-2xl text-lg font-light leading-relaxed">
            Dralha Group has partnered with Dataviv Technologies to transform every division with the power of the DATAVIV AI OS.
          </p>
          <Link href="/ai-partnership" className="px-10 py-5 bg-aurora-gradient text-brand-white font-bold tracking-[0.2em] uppercase text-xs hover:shadow-[0_10px_40px_-10px_rgba(224,64,251,0.6)] transition-all duration-500 rounded-full mt-4">
            Discover the OS
          </Link>
        </div>
      </section>

      {/* PARTNERS & ASSOCIATIONS */}
      <section className="relative w-full bg-brand-white text-brand-black py-16 md:py-32 border-t border-brand-saffron/20 overflow-hidden">
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
              <a href="https://indiancst.in/courses.php" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase text-brand-dragonRed hover:text-brand-saffron transition-colors">
                View Educational Courses <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
