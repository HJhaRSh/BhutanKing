"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Leaf, Shirt, HeartPulse, Building2, GraduationCap, Truck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import DynamicDarkBackground from "@/components/DynamicDarkBackground";

export default function TransformationPage() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const sectors = [
    {
      id: 1,
      icon: Leaf,
      name: "Agriculture & Natural Resources",
      today: [
        "Manual crop monitoring",
        "Weather-dependent yields",
        "No data on soil health",
        "Supply chain guesswork"
      ],
      future: [
        "Smart Farm Automation: Voice/gesture enabled IoT sensors on farms",
        "Crop Disease Detection: Computer vision cameras identify plant disease early",
        "Yield Prediction: ML models forecast harvest quantities",
        "Supply Chain Intelligence: Real-time inventory and distribution tracking",
        "Self-Driving Tractors + Drone Spray Optimization"
      ],
      badge: "Smart Devices + Computer Vision + Data Science"
    },
    {
      id: 2,
      icon: Shirt,
      name: "Textiles & Fashion",
      today: [
        "Manual quality inspection",
        "No trend forecasting",
        "Limited customisation",
        "Slow production feedback loops"
      ],
      future: [
        "AI Quality Control: Computer vision cameras detect fabric defects in real-time",
        "Trend Prediction: AI algorithms forecast upcoming fashion trends from global data",
        "Smart Manufacturing: Automated production lines with reduced human error",
        "Customer Personalization: AI-driven recommendations for buyers",
        "Smart Mirrors for retail: AR try-on experience for customers",
        "Image Processing for precise garment sizing"
      ],
      badge: "Computer Vision + Generative AI + Smart Mirrors"
    },
    {
      id: 3,
      icon: HeartPulse,
      name: "Hospitality & Tourism",
      today: [
        "Generic guest experiences",
        "Manual check-ins",
        "No predictive demand planning",
        "Limited personalization"
      ],
      future: [
        "AI Concierge Chatbot: Multi-lingual ChatGPT-powered guest service",
        "Smart Camera Analytics: Occupancy heatmaps, queue management, staff efficiency tracking",
        "Personalized Recommendations: AI suggests activities based on guest profile",
        "Demand Forecasting: ML predicts peak seasons for better resource allocation",
        "AR/VR Tourism Experiences: Virtual previews of Bhutan destinations"
      ],
      badge: "NLP Chatbots + Computer Vision + AR/VR"
    },
    {
      id: 4,
      icon: Building2,
      name: "Infrastructure & Smart Cities",
      today: [
        "Manual monitoring of utilities",
        "No predictive maintenance",
        "Reactive rather than proactive management"
      ],
      future: [
        "Smart Traffic & Utilities: AI manages traffic, power, water infrastructure",
        "Predictive Maintenance: AI predicts equipment failures before they happen",
        "Asset Tracking: RFID/GPS tracks all infrastructure assets in real-time",
        "Security & Surveillance: Smart CCTV with real-time threat detection",
        "Blockchain Security: Secure digital infrastructure protection"
      ],
      badge: "IoT Smart Devices + Asset Tracking + Smart Camera CV"
    },
    {
      id: 5,
      icon: GraduationCap,
      name: "Education & Training",
      today: [
        "One-size-fits-all curriculum",
        "Manual assessment",
        "No learning analytics"
      ],
      future: [
        "Personalized Learning: AI adapts content to each student's pace",
        "Automated Assessment: AI evaluates assignments instantly",
        "Learning Gap Detection: Identifies where students struggle, recommends paths",
        "VR Classrooms: Immersive educational experiences via VR",
        "Institutional Analytics: Dashboard for administrators on outcomes"
      ],
      badge: "NLP + AR/VR + Data Science"
    },
    {
      id: 6,
      icon: Truck,
      name: "Trade & Distribution",
      today: [
        "Manual inventory",
        "Delayed logistics",
        "No demand forecasting",
        "Paper-based processes"
      ],
      future: [
        "Inventory Intelligence: Real-time RFID tracking across warehouses",
        "Demand Forecasting: ML predicts what products are needed where and when",
        "CRM + Marketing Automation: AI-powered customer management system",
        "Financial Fraud Detection: Real-time anomaly detection in transactions",
        "Ecommerce Platform: AI-powered digital commerce for Bhutanese products"
      ],
      badge: "Inventory Tracking + Data Science + Custom Solutions"
    }
  ];

  return (
    <div className="relative overflow-x-hidden pt-20">
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-navy">
        <DynamicDarkBackground showParticles={true} />
        
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            transition={{ duration: 1.2, ease: "easeOut" }} 
            className="relative w-16 h-16 md:w-24 md:h-24 mb-8"
          >
            <Image 
              src="/dralha-dataviv-logo-v2.png" 
              alt="Logo" 
              fill 
              className="object-contain rounded-sm"
              priority
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} 
            className="text-6xl md:text-9xl font-display font-bold text-white mb-6 tracking-tight"
          >
            Dralha <span className="font-light italic text-white/50">×</span> Dataviv
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }} 
            className="text-xl md:text-3xl text-gray-400 font-light mb-16 max-w-4xl"
          >
            A Sector-by-Sector AI Transformation Plan for Bhutan.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.8 }} 
            className="px-8 py-4 border border-white/10 bg-white/5"
          >
            <span className="text-xs font-sans tracking-[0.2em] text-gray-300 uppercase font-bold">
              6 Sectors. 1 Platform. Infinite Impact.
            </span>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 container mx-auto px-6 max-w-4xl text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl text-gray-300 font-light leading-relaxed"
        >
          DATAVIV AI OS doesn&apos;t just add technology — it becomes the intelligence layer across every Dralha business. <span className="text-white font-bold">Here is exactly how:</span>
        </motion.p>
      </section>

      {/* SECTOR TRANSFORMATION CARDS */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-7xl space-y-16">
          {sectors.map((sector) => (
            <motion.div 
              key={sector.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col lg:flex-row border border-white/5 bg-brand-darkNavy group"
            >
              {/* LEFT: Today */}
              <div className="lg:w-1/3 p-12 bg-brand-navy border-r border-white/5 relative transition-colors duration-500">
                <div className="text-gray-500 font-sans font-bold uppercase tracking-[0.2em] text-[10px] mb-8 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-900 mr-3" />
                  Today
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center">
                  {sector.name}
                </h3>
                <ul className="space-y-6">
                  {sector.today.map((item, i) => (
                    <li key={i} className="text-gray-500 flex items-start text-sm">
                      <span className="text-red-900/50 mr-4 font-mono">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT: With AI */}
              <div className="lg:w-2/3 p-12 relative overflow-hidden transition-colors duration-500 hover:bg-white cursor-pointer group/right">
                <div className="relative z-10 h-full flex flex-col">
                  <div className="text-brand-gold font-sans font-bold uppercase tracking-[0.2em] text-[10px] mb-8 flex items-center group-hover/right:text-brand-navy">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-3 group-hover/right:bg-brand-navy transition-colors duration-500" />
                    With Dataviv AI OS
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
                    {sector.future.map((item, i) => {
                      const [title, desc] = item.split(": ");
                      return (
                        <div key={i} className="flex items-start">
                          <CheckCircleIcon className="w-4 h-4 text-brand-gold shrink-0 mt-1 mr-4 group-hover/right:text-brand-navy transition-colors duration-500" />
                          <div>
                            <span className="text-white font-bold block mb-2 text-sm group-hover/right:text-brand-navy transition-colors duration-500">{title}</span>
                            {desc && <span className="text-gray-400 font-light text-xs leading-relaxed group-hover/right:text-brand-navy/70 transition-colors duration-500">{desc}</span>}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="inline-flex items-center px-4 py-2 border border-white/10 text-gray-400 text-[10px] font-sans tracking-[0.2em] uppercase mt-auto self-start group-hover/right:border-brand-navy/20 group-hover/right:text-brand-navy/70 transition-colors duration-500">
                    <span className="font-bold mr-2 text-white group-hover/right:text-brand-navy transition-colors duration-500">MODULES:</span> {sector.badge}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* THE AI OS IN ACTION (Hexagonal Ecosystem Diagram) */}
      <section className="py-32 border-y border-brand-sand bg-brand-cream text-brand-navy overflow-hidden relative min-h-[900px]">
        {/* Dynamic Background Elements */}
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B0F1908_1px,transparent_1px),linear-gradient(to_bottom,#0B0F1908_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
        
        {/* Blurred Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

        {/* Large Static Radar Rings */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 border border-brand-navy/5 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 border border-brand-navy-[0.03] border-dashed rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[1600px] h-[1600px] -translate-x-1/2 -translate-y-1/2 border border-brand-navy/[0.02] rounded-full pointer-events-none" />

        {/* Scrolling Watermark */}
        <div className="absolute top-20 -left-20 text-[200px] font-display font-bold text-brand-navy/[0.02] whitespace-nowrap pointer-events-none select-none tracking-tighter">
          DATAVIV AI OS DATAVIV AI OS
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 pointer-events-none mb-12">
          <SectionHeading title="One Platform Connecting It All" centered />
        </div>

        <div className="relative w-full h-[700px] flex items-center justify-center">
          
          {/* Center Hub */}
          <div className="absolute w-[240px] h-[240px] bg-white shadow-2xl border border-brand-sand z-30 flex flex-col items-center justify-center cursor-default rounded-sm overflow-hidden group">
            {/* Background Details */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-multiply pointer-events-none z-0" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(11,15,25,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(11,15,25,0.02)_1px,transparent_1px)] bg-[size:10px_10px] z-0" />
            
            {/* Animated Scanner Line */}
            <motion.div 
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[2px] bg-brand-gold/30 shadow-[0_0_10px_#C5A059] z-10"
            />

            {/* Corner Tech Accents */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-brand-navy/20 z-10" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-brand-navy/20 z-10" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-brand-navy/20 z-10" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-brand-navy/20 z-10" />

            {/* Tiny Readouts */}
            <div className="absolute top-4 left-4 text-[7px] font-mono text-brand-navy/30 z-10 uppercase tracking-widest">SYS.ONLINE</div>
            <div className="absolute bottom-4 right-4 text-[7px] font-mono text-brand-gold z-10 uppercase tracking-widest">SYNCING</div>

            <span className="text-brand-gold font-sans font-bold tracking-[0.4em] uppercase text-[10px] mb-4 z-10">CORE</span>
            <span className="text-brand-navy font-display font-bold text-3xl text-center leading-tight z-10 relative">
              DATAVIV<br/>AI OS
            </span>
            
            {/* Subtle glow underneath */}
            <div className="absolute inset-0 bg-brand-gold/5 blur-2xl -z-10" />
          </div>

          {/* Hexagonal Nodes */}
          {sectors.map((sector, idx) => {
            const angle = (idx * 60) * (Math.PI / 180);
            const radius = 340; // Exact distance from center to node centers
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isActive = activeNode === sector.id;

            return (
              <div 
                key={sector.id} 
                className="absolute top-1/2 left-1/2"
                style={{ transform: 'translate(-50%, -50%)' }} // Center the container exactly at 50/50
              >
                {/* SVG Connection Line */}
                {/* We draw the line from the absolute center (0,0) to the node's position (x,y) */}
                <svg className="absolute overflow-visible pointer-events-none z-0" style={{ top: 0, left: 0 }}>
                  {/* Base Line */}
                  <line 
                    x1="0" y1="0" 
                    x2={x} y2={y} 
                    stroke={isActive ? "#C5A059" : "#0B0F19"} 
                    strokeWidth={isActive ? "2" : "0.5"} 
                    strokeOpacity={isActive ? "0.3" : "0.1"} 
                    className="transition-all duration-500"
                  />
                  {/* Flowing Data Line */}
                  <motion.line 
                    x1="0" y1="0" 
                    x2={x} y2={y} 
                    stroke={isActive ? "#C5A059" : "#0B0F19"} 
                    strokeWidth={isActive ? "2" : "1"} 
                    strokeOpacity={isActive ? "0.8" : "0.2"} 
                    strokeDasharray="4 8"
                    animate={{ strokeDashoffset: isActive ? [0, -24] : [0, -12] }}
                    transition={{ duration: isActive ? 1 : 2, repeat: Infinity, ease: "linear" }}
                    className="transition-all duration-500"
                  />
                </svg>

                {/* Node Container */}
                <div 
                  className={`absolute flex flex-col items-center justify-center cursor-pointer transition-all duration-500 shadow-sm overflow-hidden group ${isActive ? 'bg-white border-brand-gold scale-105 shadow-xl z-50' : 'bg-[#FAFAFA] border border-brand-sand hover:bg-white hover:scale-105 z-20'}`}
                  style={{ 
                    width: '180px', 
                    height: '180px',
                    left: `${x}px`, 
                    top: `${y}px`,
                    transform: 'translate(-50%, -50%)' // Align node's own center to x,y
                  }}
                  onMouseEnter={() => setActiveNode(sector.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-multiply pointer-events-none z-0" />
                  
                  {/* Top border highlight */}
                  <div className={`absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 transition-opacity duration-500 z-10 ${isActive ? 'opacity-100' : 'group-hover:opacity-100'}`} />
                  
                  {/* Tech status label */}
                  <div className={`absolute top-3 left-3 text-[6px] font-mono tracking-[0.2em] uppercase transition-colors duration-500 z-10 ${isActive ? 'text-brand-gold' : 'text-brand-navy/30'}`}>
                    LINK.ESTABLISHED
                  </div>

                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-all duration-500 z-10 ${isActive ? 'bg-brand-navy text-brand-gold' : 'bg-brand-cream border border-brand-sand text-brand-navy/40 group-hover:text-brand-navy'}`}>
                    <sector.icon className="w-4 h-4" />
                  </div>
                  
                  {/* Title */}
                  <span className={`text-[10px] font-sans font-bold uppercase text-center px-4 tracking-[0.2em] transition-colors z-10 ${isActive ? 'text-brand-navy' : 'text-brand-navy/60 group-hover:text-brand-navy'}`}>
                    {sector.name}
                  </span>
                  
                  {/* Interactive expanded detail (Slides up on hover) */}
                  <div className={`absolute inset-0 bg-brand-navy p-6 flex flex-col items-center justify-center text-center transition-all duration-500 transform z-20 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <span className="text-brand-gold font-sans font-bold text-[8px] tracking-[0.2em] uppercase mb-1">Target Integration</span>
                    <span className="text-white text-[11px] font-light leading-relaxed mb-4">
                      {sector.future[0].split(': ')[0]}
                    </span>
                    <span className="text-brand-navy/50 text-[7px] font-mono uppercase bg-brand-gold/10 px-2 py-1 rounded-sm">
                      {sector.badge.split('+')[0].substring(0, 15)}...
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="py-32 bg-brand-navy border-b border-white/5 relative overflow-hidden">
        <DynamicDarkBackground />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
            <StatBox number="6" label="Sectors Transformed" />
            <StatBox number="12+" label="AI Modules Deployed" />
            <StatBox number="1" label="Unified Intelligence Platform" />
            <StatBox number="∞" label="ROI Potential" />
          </div>
        </div>
      </section>

      {/* ROYAL VISION STATEMENT */}
      <section className="py-40 bg-brand-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-multiply pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-16 leading-tight tracking-tight">
            &ldquo;Bhutan has always led the world in measuring Gross National Happiness. With AI, Dralha Group will lead Bhutan into measuring — and maximising — <span className="text-white">Gross National Intelligence.</span>&rdquo;
          </h2>
          <p className="text-xs font-sans font-bold text-black/70 tracking-[0.3em] uppercase">
            — Dataviv Technologies, in service of Bhutan&apos;s Vision 2030
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-16 tracking-tight">
          Ready to begin the transformation?
        </h2>
        <Link href="/contact" className="inline-flex items-center px-10 py-5 bg-white text-black font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-none hover:bg-brand-gold transition-colors duration-500 group">
          Contact Dataviv <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
        </Link>
      </section>

      {/* Clean styles */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Empty */
      `}} />
    </div>
  );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function StatBox({ number, label }: { number: string, label: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-10 h-[300px] bg-brand-navy flex flex-col items-center justify-center group hover:bg-white transition-colors duration-500 cursor-pointer"
    >
      <div className="text-6xl md:text-8xl font-display font-bold text-white mb-6 group-hover:text-brand-navy transition-colors duration-500">{number}</div>
      <div className="w-8 h-[1px] bg-white/20 mb-6 group-hover:bg-brand-navy/20 transition-colors duration-500" />
      <div className="text-[10px] font-sans font-bold text-gray-500 group-hover:text-brand-navy/70 uppercase tracking-[0.2em] text-center px-4">{label}</div>
    </motion.div>
  );
}
