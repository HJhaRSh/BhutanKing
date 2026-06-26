"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, CheckCircle2, Database, Cpu, Zap, Eye, Shield, Layers, Radio, BarChart2, Package, Wifi, Sparkles, Lock, Shirt, Globe, Heart, Wheat, Building2, GraduationCap, Network, Leaf, HeartPulse, Truck, Factory, Trees, Sprout } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DynamicDarkBackground from "@/components/DynamicDarkBackground";
import NeuralCanvas from "@/components/NeuralCanvas";
import GlitchText from "@/components/GlitchText";
import { CountUp } from "@/components/animations/CountUp";

const sectors = [
  {
    id: 1,
    icon: Heart,
    name: "Hotel Dralha",
    image: "/dralha-businesses/hotel_dralha.png",
    color: "from-blue-500 to-indigo-900",
    today: [
      "Manual check-ins",
      "Generic guest experiences",
      "Reactive maintenance",
      "High energy consumption"
    ],
    future: [
      "AI Concierge Chatbot: Multi-lingual ChatGPT-powered guest service",
      "Smart Room IoT: Automated lighting and climate control",
      "Predictive Analytics: Anticipating peak seasons and staff needs",
      "Facial Recognition: Seamless and secure check-in experience",
      "Energy Optimization: AI-driven power savings"
    ],
    badge: "Smart Devices + NLP Chatbots + Data Science"
  },
  {
    id: 2,
    icon: Factory,
    name: "Flour Mill",
    image: "/dralha-businesses/flour_mill.png",
    color: "from-orange-500 to-red-900",
    today: [
      "Manual quality checks",
      "Inefficient energy use",
      "Downtime from machinery faults",
      "Inconsistent milling output"
    ],
    future: [
      "Computer Vision: High-speed grain quality and defect control",
      "Predictive Maintenance: IoT sensors predict machinery failures",
      "IoT Energy Optimization: Smart power usage across the mill",
      "Automated Sorting: Robotic systems for packing and sorting",
      "Yield Tracking: Real-time dashboard for production metrics"
    ],
    badge: "Computer Vision + IoT Smart Devices + Analytics"
  },
  {
    id: 3,
    icon: Package,
    name: "Napkin Factory",
    image: "/dralha-businesses/napkin_factory.png",
    color: "from-fuchsia-500 to-purple-900",
    today: [
      "Manual defect detection",
      "Inaccurate inventory tracking",
      "High material waste",
      "Slow production feedback loops"
    ],
    future: [
      "AI Quality Control: CV cameras detect paper defects instantly",
      "Automated Packaging: Robotic arms handle packing and stacking",
      "Supply Chain Intelligence: Real-time inventory and logistics",
      "Waste Reduction ML: Algorithms optimize raw material usage",
      "Demand Forecasting: AI predicts required production volume"
    ],
    badge: "Computer Vision + Robotics + Data Science"
  },
  {
    id: 4,
    icon: Trees,
    name: "Bamboo Revolution",
    image: "/dralha-businesses/bamboo_revolution.png",
    color: "from-green-500 to-emerald-900",
    today: [
      "Manual sorting of bamboo",
      "Weather-dependent processing",
      "Traditional logistics",
      "Inconsistent material grading"
    ],
    future: [
      "AI Sorting & Grading: CV ensures perfect bamboo selection",
      "Smart Curing: IoT climate-controlled processing",
      "Drone Harvesting: Aerial monitoring of bamboo forests",
      "Sustainable Tracking: Blockchain verification of eco-materials",
      "Supply Chain ML: Optimized global distribution"
    ],
    badge: "Computer Vision + IoT + Drone Tech"
  },
  {
    id: 5,
    icon: Building2,
    name: "GMC Serviced Apartments",
    image: "/dralha-businesses/gmc_apartments.png",
    color: "from-cyan-400 to-blue-900",
    today: [
      "Standard security",
      "High utility bills",
      "Basic tenant services",
      "Manual facility management"
    ],
    future: [
      "Smart Building IoT: Automated HVAC and smart lighting",
      "AI Security Surveillance: Real-time anomaly detection",
      "Tenant App: Virtual concierge for all resident needs",
      "Automated Maintenance: Predictive alerts for plumbing/electrical",
      "Smart Access: Keyless entry using mobile credentials"
    ],
    badge: "Smart Building IoT + CV Security + App Integration"
  },
  {
    id: 6,
    icon: Sprout,
    name: "Agribusiness",
    image: "/dralha-businesses/agribusiness.png",
    color: "from-yellow-400 to-amber-900",
    today: [
      "Manual crop monitoring",
      "Weather-dependent yields",
      "Guesswork in soil health",
      "Traditional irrigation"
    ],
    future: [
      "Drone Crop Spraying: Precision automated agriculture",
      "AI Soil Analysis: IoT sensors monitor nutrient levels",
      "Yield Prediction ML: Forecasting harvest based on climate data",
      "Automated Irrigation: Smart water management systems",
      "Pest Detection CV: Early warning systems for crop diseases"
    ],
    badge: "Drone Tech + IoT Smart Farm + ML Analytics"
  }
];

export default function DatavivPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSector, setHoveredSector] = useState(0);

  const products = [
    { num: "01", name: "Medical Image Detection", desc: "AI diagnosis from X-rays & scans", category: "Perception", icon: Heart },
    { num: "02", name: "Smart Camera Computer Vision", desc: "CCTV intelligence, attendance, occupancy analytics", category: "Perception", icon: Eye },
    { num: "03", name: "Smart Mirrors", desc: "AR try-on for fashion & retail", category: "Perception", icon: Sparkles },
    { num: "04", name: "AR/VR/MR Experiences", desc: "Virtual walkthroughs & training", category: "Perception", icon: Layers },
    { num: "05", name: "Audio, Text & Gesture AI", desc: "Chatbots, voice systems, NLP", category: "Intelligence", icon: Radio },
    { num: "06", name: "Asset & Inventory Tracking", desc: "RFID, barcode, location intelligence", category: "Infrastructure", icon: Package },
    { num: "07", name: "Smart Devices & IoT", desc: "Wearables, smart farm automation", category: "Infrastructure", icon: Wifi },
    { num: "08", name: "Data Science & ML", desc: "Recommendation systems, predictive modeling", category: "Intelligence", icon: BarChart2 },
    { num: "09", name: "Custom Solutions", desc: "Ecommerce, large-scale government apps", category: "Infrastructure", icon: Globe },
    { num: "10", name: "System Integrations", desc: "CRM, HRMS, inventory automation", category: "Infrastructure", icon: Layers },
    { num: "11", name: "Online Security", desc: "Blockchain, penetration testing, HIPPA compliance", category: "Intelligence", icon: Lock },
    { num: "12", name: "AI in Fashion & Textiles", desc: "Computer vision quality control, trend prediction", category: "Perception", icon: Shirt },
  ];

  const industries = [
    { name: "Healthcare", icon: Heart }, 
    { name: "Fashion", icon: Shirt }, 
    { name: "Agriculture", icon: Wheat }, 
    { name: "Smart Cities", icon: Building2 }, 
    { name: "Government", icon: Shield }, 
    { name: "Defence", icon: Shield },
    { name: "Education", icon: Layers }, 
    { name: "Finance", icon: BarChart2 }, 
    { name: "Manufacturing", icon: Cpu }, 
    { name: "Retail", icon: Package }, 
    { name: "Real Estate", icon: Building2 }, 
    { name: "Hospitality", icon: Sparkles }
  ];

  const filteredProducts = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="relative overflow-x-hidden pt-20">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black py-20">
        <NeuralCanvas />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] z-0 pointer-events-none" />
        <div className="absolute inset-0 border-x border-white/5 w-full max-w-7xl mx-auto z-0 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 z-0 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center pointer-events-none">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex justify-center mb-10 pointer-events-auto">
            <Image src="/dataviv%20logo.jpeg" alt="Dataviv" width={200} height={80} className="object-contain rounded-lg drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" priority />
          </motion.div>
          <div className="mb-8">
            <GlitchText />
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed mb-12">
            India's AI-First Technology Company — Built at Stanford, Deployed Globally.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="flex flex-col items-center justify-center mb-16 pointer-events-auto">
            <a 
              href="https://frontend.Instavivai.com/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(255,208,0,0.4)] transition-all duration-500 overflow-hidden rounded-full"
            >
              <span className="relative z-10 flex items-center gap-3">
                Instavivai AI Portal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </a>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-4 font-bold">Powered by Sister Company Instaviv</span>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap justify-center gap-4 mb-16 pointer-events-auto">
            {["AI", "AR/VR", "IoT", "Cloud", "Computer Vision", "NLP"].map((badge) => (
              <span key={badge} className="px-6 py-2 border border-white/10 bg-white/5 rounded-none text-gray-400 font-sans text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-colors cursor-pointer">
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Stats Row */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 mx-auto max-w-4xl pointer-events-auto mt-12">
            <div className="flex flex-col items-center group cursor-default">
              <div className="flex items-center text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-gold via-yellow-200 to-brand-goldLight mb-4 drop-shadow-[0_0_25px_rgba(255,208,0,0.4)] group-hover:scale-105 transition-transform duration-700">
                <CountUp end={12} duration={2} />
              </div>
              <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 font-bold group-hover:text-white transition-colors duration-500">AI Domains</span>
            </div>
            
            <div className="flex flex-col items-center group cursor-default">
              <div className="flex items-center text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-gold via-yellow-200 to-brand-goldLight mb-4 drop-shadow-[0_0_25px_rgba(255,208,0,0.4)] group-hover:scale-105 transition-transform duration-700 pr-2">
                <CountUp end={100} duration={2.5} /><span className="text-5xl md:text-7xl text-brand-gold">+</span>
              </div>
              <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 font-bold group-hover:text-white transition-colors duration-500">Global Deployments</span>
            </div>
            
            <div className="flex flex-col items-center group cursor-default">
              <div className="flex items-center text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-gold via-yellow-200 to-brand-goldLight mb-4 drop-shadow-[0_0_25px_rgba(255,208,0,0.4)] group-hover:scale-105 transition-transform duration-700">
                <CountUp end={4} duration={1.5} />
              </div>
              <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 font-bold group-hover:text-white transition-colors duration-500">Continents</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PEDIGREE SECTION */}
      <section className="py-16 md:py-32 bg-brand-darkNavy border-y border-white/5 relative overflow-hidden">
        <DynamicDarkBackground />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeading title="Why Trust Dataviv?" centered />
                   <div className="grid md:grid-cols-3 gap-8 mt-16 md:mt-24">
            {[
              { num: "TRST-01", title: "Stanford Roots", desc: "Our core team holds MS in Artificial Intelligence from Stanford University, with research under Andrew Ng, founder of Google Brain and Chief Scientist at Baidu.", back: "Trained under Andrew Ng · Google Brain · Stanford AI Lab", icon: GraduationCap },
              { num: "TRST-02", title: "Global Experience", desc: "Early team members worked at Coursera (Billion-dollar Edtech) and Earnin (Fintech), supporting growth and product at scale.", back: "Coursera · Earnin · Billion-dollar scale products", icon: Globe },
              { num: "TRST-03", title: "Investment Network", desc: "Associated with Stanford Angels, supporting early-stage companies across investment rounds globally.", back: "Stanford Angels Network · Global Investment Pipeline", icon: Network }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
                className="group relative h-[420px] flex flex-col bg-brand-navy hover:bg-white border border-white/5 hover:border-white overflow-hidden transition-colors duration-500 cursor-default"
              >
                {/* Border glowing wrapper & backdrop */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)] opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-0" />

                {/* Scanning line effect */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-gold shadow-[0_0_15px_rgba(255,208,0,0.8)] -translate-y-[10px] group-hover:animate-scan z-10 opacity-0 group-hover:opacity-100" />
                
                {/* Inner Content */}
                <div className="relative z-20 flex flex-col h-full p-8 md:p-10">
                  
                  {/* Top Header */}
                  <div className="flex justify-between items-center border-b border-white/10 group-hover:border-brand-navy/10 pb-6 mb-8 transition-colors duration-500">
                    <div className="flex items-center space-x-3 bg-black/40 group-hover:bg-brand-navy/5 px-3 py-1.5 border border-white/5 group-hover:border-brand-navy/10 rounded-full transition-colors duration-500">
                       <div className="w-1.5 h-1.5 bg-brand-gold group-hover:bg-brand-navy shadow-[0_0_10px_rgba(255,208,0,1)] group-hover:shadow-none animate-pulse rounded-full transition-colors duration-500" />
                       <span className="font-mono text-[9px] text-brand-gold group-hover:text-brand-navy tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-all duration-500">SYS // {item.num}</span>
                    </div>
                    <item.icon className="w-6 h-6 text-white/20 group-hover:text-brand-navy transition-colors duration-500" />
                  </div>

                  {/* Body Content */}
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-brand-navy mb-4 transition-colors duration-500 tracking-tight">{item.title}</h3>
                  
                  <p className="text-sm text-gray-400 group-hover:text-brand-navy/70 font-light leading-relaxed mb-auto transition-colors duration-500">
                    {item.desc}
                  </p>

                  {/* Terminal Reveal Box */}
                  <div className="mt-8 pt-6 relative before:absolute before:top-0 before:left-0 before:w-12 before:h-px before:bg-brand-gold/30 group-hover:before:bg-brand-navy/20 group-hover:before:w-full before:transition-all before:duration-700">
                     <div className="text-[9px] uppercase font-mono tracking-[0.3em] text-brand-gold/50 group-hover:text-brand-navy/40 mb-3 flex items-center transition-colors duration-500">
                       <ArrowRight className="w-3 h-3 mr-2" /> Output Core
                     </div>
                     <p className="text-white group-hover:text-brand-navy text-sm md:text-base font-bold tracking-wide leading-tight transition-colors duration-500">
                       {item.back}
                     </p>
                  </div>
                </div>
                
                {/* Cyberpunk corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-brand-gold/20 group-hover:border-brand-navy transition-colors duration-500" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-brand-gold/20 group-hover:border-brand-navy transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-brand-gold/20 group-hover:border-brand-navy transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-brand-gold/20 group-hover:border-brand-navy transition-colors duration-500" />
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-6 md:gap-16">
            {["Timely Delivery", "Best in Class Support", "Turnkey Project Delivery"].map((trust) => (
              <div key={trust} className="flex items-center text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                <CheckCircle2 className="w-4 h-4 text-brand-gold mr-3" />
                {trust}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATAVIV AI OS */}
      <section className="py-16 md:py-32 bg-brand-cream border-y border-brand-sand relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-brand-gold text-[10px] font-sans font-bold uppercase tracking-[0.2em] mb-6">Flagship Platform</div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-brand-navy mb-4 leading-tight tracking-tight">
                DATAVIV AI OS
              </h2>
              <h3 className="text-2xl text-brand-navy/70 font-light mb-8">
                The Operating System for Artificial Intelligence
              </h3>
              <p className="text-lg text-brand-darkNavy/70 leading-relaxed mb-12">
                Just as your computer needs an operating system to run — DATAVIV AI OS is the operating system that runs AI for your entire organisation. One platform. One place. Full control.
              </p>

              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-navy/10 before:to-transparent">
                {[
                  { title: "Data Ingestion Layer", desc: "Integrate diverse structured & unstructured data streams across the enterprise.", icon: "Database" },
                  { title: "Neural Processing", desc: "Proprietary LLMs and machine learning models process, analyze, and learn.", icon: "Cpu" },
                  { title: "Actionable Intelligence", desc: "Deliver automated, intelligent outcomes directly into operational workflows.", icon: "Zap" }
                ].map((step, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    key={step.title} 
                    className="relative flex items-start group bg-white/50 hover:bg-white p-6 border border-brand-sand/50 hover:border-brand-gold/50 transition-all duration-500 rounded-sm"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-none border border-brand-navy/10 bg-brand-cream flex items-center justify-center text-brand-gold font-sans font-bold text-xs group-hover:border-brand-gold transition-colors duration-500 z-10 relative">
                      0{idx + 1}
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="text-brand-navy font-sans tracking-[0.1em] font-bold uppercase text-xs mb-2 flex items-center justify-between">
                        {step.title}
                        <ArrowRight className="w-4 h-4 text-brand-navy/30 group-hover:text-brand-gold transition-colors duration-300" />
                      </div>
                      <div className="text-brand-darkNavy/70 font-light text-sm leading-relaxed">{step.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: 3D Stack + Terminal */}
            <div className="flex flex-col items-center relative">
              {/* Upward Particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-[2px] h-[2px] bg-brand-navy/30 rounded-full animate-floatUp"
                    style={{ 
                      left: `${Math.random() * 100}%`, 
                      animationDelay: `${Math.random() * 10}s`,
                      animationDuration: `${5 + Math.random() * 10}s`
                    }} 
                  />
                ))}
              </div>

              {/* AI OS Architecture Schematic - Continuous Flow */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full max-w-xl relative font-mono mt-12 mb-16"
              >
                <div className="relative z-10 flex flex-col items-center">
                  
                  {/* DATA LAYER */}
                  <div className="w-full flex justify-between relative gap-4">
                     {/* Horizontal Flow Bus */}
                     <div className="absolute top-1/2 left-[10%] right-[10%] h-[6px] bg-[#02010A] border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.9),0_2px_8px_rgba(0,0,0,0.1)] -translate-y-1/2 z-0 overflow-hidden rounded-full">
                        <div className="absolute inset-y-0 left-0 w-[50%]" style={{ animation: 'flowRight 2.5s linear infinite', background: 'linear-gradient(to right, transparent, rgba(0, 212, 255, 1), transparent)' }} />
                     </div>
                     
                     {[
                       { icon: Database, label: "Lakehouse", sub: "Petabyte Scale" },
                       { icon: Radio, label: "IoT Streams", sub: "Real-time" },
                       { icon: Globe, label: "Web Hooks", sub: "10k req/s" }
                     ].map((item, i) => (
                       <div key={i} className="relative z-10 bg-gradient-to-b from-[#050315] to-[#02010A] border border-[#00D4FF]/30 p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-[#00D4FF] hover:shadow-[0_10px_40px_rgba(0,212,255,0.2)] transition-all group flex-1 overflow-hidden">
                         <div className="absolute inset-0 bg-[#00D4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                         <item.icon className="w-6 h-6 text-[#00D4FF] mb-3 drop-shadow-[0_0_12px_rgba(0,212,255,0.9)]" />
                         <span className="text-[10px] text-white tracking-widest uppercase font-bold relative z-10 drop-shadow-md">{item.label}</span>
                         <span className="text-[8px] text-[#00D4FF]/80 mt-1 tracking-wider relative z-10">{item.sub}</span>
                       </div>
                     ))}
                  </div>

                  {/* DOWNWARD PIPELINE */}
                  <div className="flex flex-col items-center my-3 relative z-0">
                     <div className="h-12 w-[6px] bg-[#02010A] border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.9),0_2px_8px_rgba(0,0,0,0.1)] relative overflow-hidden rounded-full">
                        <div className="absolute top-0 left-0 w-full h-[60%]" style={{ animation: 'flowDown 1.5s linear infinite', background: 'linear-gradient(to bottom, transparent, rgba(0, 212, 255, 1), transparent)' }} />
                     </div>
                     <ArrowRight className="w-5 h-5 text-[#00D4FF] rotate-90 mt-1 drop-shadow-[0_0_10px_rgba(0,212,255,0.8)] animate-pulse" />
                  </div>

                  {/* KERNEL LAYER */}
                  <div className="w-full bg-[#02010A] border border-brand-gold/30 p-1.5 rounded-2xl relative shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-10">
                    <div className="absolute inset-0 bg-brand-gold/10 blur-xl rounded-2xl pointer-events-none" />
                    
                    <div className="bg-gradient-to-br from-[#0a0715] to-[#02010A] border border-brand-gold/20 p-8 rounded-xl relative overflow-hidden flex flex-col items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                       {/* Spinning technical rings */}
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] aspect-square border-[1px] border-brand-gold/10 rounded-full animate-[spin_15s_linear_infinite] pointer-events-none" />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] aspect-square border-[2px] border-dashed border-brand-gold/20 rounded-full animate-[spin_10s_linear_infinite_reverse] pointer-events-none" />
                       
                       <Cpu className="w-14 h-14 text-brand-gold mb-4 relative z-10 drop-shadow-[0_0_25px_rgba(255,208,0,1)]" />
                       
                       <div className="flex flex-col items-center relative z-10 mb-6">
                         <span className="text-brand-gold font-bold text-2xl tracking-[0.3em] uppercase drop-shadow-[0_0_15px_rgba(255,208,0,0.6)]">Neural Kernel</span>
                         <span className="text-white/60 text-xs tracking-[0.2em] mt-2 uppercase font-medium">Central Inference Engine</span>
                       </div>
                       
                       <div className="w-full flex justify-between gap-4 relative z-10">
                         {["Computer Vision", "NLP & LLM", "Predictive AI"].map((tech, idx) => (
                           <div key={tech} className="flex-1 bg-gradient-to-b from-[#0a0715] to-[#02010A] border border-brand-gold/30 px-3 py-4 rounded-lg text-center shadow-[0_5px_15px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden">
                              <div className="absolute inset-0 bg-brand-gold/5 animate-pulse" style={{animationDuration: `${2 + (idx * 0.5)}s`}} />
                              <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest relative z-10 drop-shadow-md">{tech}</span>
                           </div>
                         ))}
                       </div>
                    </div>
                  </div>

                  {/* DOWNWARD PIPELINE */}
                  <div className="flex flex-col items-center my-3 relative z-0">
                     <div className="h-12 w-[6px] bg-[#02010A] border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.9),0_2px_8px_rgba(0,0,0,0.1)] relative overflow-hidden rounded-full">
                        <div className="absolute top-0 left-0 w-full h-[60%]" style={{ animation: 'flowDown 1.5s linear infinite 0.75s', background: 'linear-gradient(to bottom, transparent, rgba(224, 64, 251, 1), transparent)' }} />
                     </div>
                     <ArrowRight className="w-5 h-5 text-[#E040FB] rotate-90 mt-1 drop-shadow-[0_0_10px_rgba(224,64,251,0.8)] animate-pulse" />
                  </div>

                  {/* APP LAYER */}
                  <div className="w-full flex justify-between gap-6 relative">
                     {/* Horizontal Flow Bus */}
                     <div className="absolute top-1/2 left-[20%] right-[20%] h-[6px] bg-[#02010A] border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.9),0_2px_8px_rgba(0,0,0,0.1)] -translate-y-1/2 z-0 overflow-hidden rounded-full">
                        <div className="absolute inset-y-0 left-0 w-[50%]" style={{ animation: 'flowRight 2.5s linear infinite reverse', background: 'linear-gradient(to right, transparent, rgba(224, 64, 251, 1), transparent)' }} />
                     </div>

                     {[
                       { icon: BarChart2, label: "Smart Dashboards", sub: "Executive Insights" },
                       { icon: Zap, label: "Auto Actions", sub: "Trigger Systems" }
                     ].map((item, i) => (
                       <div key={i} className="relative z-10 bg-gradient-to-b from-[#050315] to-[#02010A] border border-[#E040FB]/30 p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-[#E040FB] hover:shadow-[0_10px_40px_rgba(224,64,251,0.2)] transition-all group flex-1 overflow-hidden">
                         <div className="absolute inset-0 bg-[#E040FB]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                         <item.icon className="w-8 h-8 text-[#E040FB] mb-3 drop-shadow-[0_0_12px_rgba(224,64,251,0.9)]" />
                         <span className="text-xs text-white tracking-widest uppercase font-bold relative z-10 drop-shadow-md">{item.label}</span>
                         <span className="text-[9px] text-[#E040FB]/80 mt-1 tracking-wider relative z-10">{item.sub}</span>
                       </div>
                     ))}
                  </div>

                </div>
              </motion.div>

              {/* Terminal Block */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-md bg-black border border-white/10 rounded-none shadow-2xl z-10"
              >
                <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="ml-4 text-[10px] text-gray-500 font-mono">dataviv_os — ai_inference.sh</div>
                </div>
                <div className="p-6 font-mono text-xs md:text-sm text-green-400/90 h-[220px] overflow-hidden flex flex-col space-y-2 relative">
                  <div className="terminal-line" style={{animationDelay: "0s"}}>$ connecting to Bhutan data lake...</div>
                  <div className="terminal-line" style={{animationDelay: "1s"}}>&gt; ingesting 14,200 records ████████ 100%</div>
                  <div className="terminal-line text-white/80" style={{animationDelay: "2.5s"}}>$ running crop yield prediction model...</div>
                  <div className="terminal-line text-brand-gold" style={{animationDelay: "3.5s"}}>&gt; accuracy: 94.7% | confidence: HIGH</div>
                  <div className="terminal-line text-white/80" style={{animationDelay: "5s"}}>$ generating smart city dashboard...</div>
                  <div className="terminal-line text-brand-gold" style={{animationDelay: "6s"}}>&gt; 3 anomalies detected in Thimphu grid</div>
                  <div className="terminal-line" style={{animationDelay: "7.5s"}}>$ ready.<span className="animate-pulse">_</span></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* INDUSTRIES SERVED (DUAL MARQUEE) */}
      <section className="py-16 bg-brand-darkNavy overflow-hidden border-y border-brand-glassLight relative">
        <DynamicDarkBackground />
        <div className="container mx-auto px-6 mb-12 relative z-10">
          <h3 className="text-center text-gray-400 font-bold uppercase tracking-widest text-sm">AI for Every Industry</h3>
        </div>
        
        {/* Row 1: Scroll Left */}
        <div className="relative flex overflow-hidden mb-8 group">
          <div className="animate-marquee whitespace-nowrap flex space-x-16 items-center group-hover:[animation-play-state:paused]">
            {industries.map((ind, i) => (
              <div key={ind.name + i} className="flex items-center space-x-4 mx-8">
                <ind.icon className="w-8 h-8 text-brand-gold/60" />
                <span className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">
                  {ind.name}
                </span>
              </div>
            ))}
            {industries.map((ind, i) => (
              <div key={ind.name + "_dup" + i} className="flex items-center space-x-4 mx-8">
                <ind.icon className="w-8 h-8 text-brand-gold/60" />
                <span className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scroll Right */}
        <div className="relative flex overflow-hidden group">
          <div className="animate-marqueeRight whitespace-nowrap flex space-x-16 items-center group-hover:[animation-play-state:paused]">
            {[...industries].reverse().map((ind, i) => (
              <div key={ind.name + "rev" + i} className="flex items-center space-x-4 mx-8">
                <ind.icon className="w-8 h-8 text-brand-gold/60" />
                <span className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">
                  {ind.name}
                </span>
              </div>
            ))}
            {[...industries].reverse().map((ind, i) => (
              <div key={ind.name + "_dup_rev" + i} className="flex items-center space-x-4 mx-8">
                <ind.icon className="w-8 h-8 text-brand-gold/60" />
                <span className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Bhutan x Dataviv Partnership Map */}
      <section className="py-24 md:py-32 bg-brand-cream relative border-b border-brand-navy/10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6 leading-tight">
              DATAVIV AI OS doesn't just add technology — it becomes the <span className="text-brand-gold">intelligence layer</span> across every Dralha business.
            </h2>
            <p className="text-gray-600 font-sans tracking-widest uppercase text-sm">Here is exactly how:</p>
          </div>
          
          <div className="mt-16 md:mt-24 flex flex-col lg:flex-row h-auto lg:h-[700px] w-full max-w-[1400px] mx-auto gap-4 lg:gap-2">
            {sectors.map((sector, idx) => {
              const isExpanded = hoveredSector === idx;
              return (
                <div 
                  key={sector.name}
                  onMouseEnter={() => setHoveredSector(idx)}
                  className={`relative group rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-brand-navy/10 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-row cursor-pointer ${isExpanded ? 'lg:w-[70%] w-full h-[600px] lg:h-full cursor-default' : 'lg:w-[6%] w-full h-[80px] lg:h-full lg:hover:w-[8%]'}`}
                >
                  {/* IMAGE SECTION */}
                  <div className={`relative h-full overflow-hidden shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isExpanded ? 'w-full lg:w-[35%]' : 'w-full lg:w-full'}`}>
                    <Image src={sector.image} alt={sector.name} fill className={`object-cover transition-transform duration-1000 group-hover:scale-105 ${sector.name === 'Agribusiness' ? 'object-left' : 'object-center'}`} />
                    
                    {/* Gradient Overlays */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-700 ${isExpanded ? 'opacity-90' : 'opacity-70'}`} />
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-black/80 transition-opacity duration-700 hidden lg:block ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />
                    <div className={`absolute inset-0 bg-black/50 transition-opacity duration-700 lg:block ${isExpanded ? 'opacity-0' : 'opacity-100 group-hover:opacity-60'}`} />

                    {/* Collapsed State Title (Vertical) */}
                    <div className={`absolute inset-0 flex flex-col items-center justify-end pb-10 transition-all duration-700 ${isExpanded ? 'opacity-0 pointer-events-none translate-y-10 hidden lg:flex' : 'opacity-100 translate-y-0 hidden lg:flex'}`}>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/20">
                        <sector.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 flex flex-col justify-end">
                        <h3 className="text-xl font-display font-bold text-white whitespace-nowrap -rotate-90 origin-bottom mb-24 tracking-widest uppercase">
                          {sector.name}
                        </h3>
                      </div>
                    </div>

                    {/* Expanded State Title */}
                    <div className={`absolute bottom-10 left-8 right-8 z-10 transition-all duration-700 transform ${isExpanded ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-10 opacity-0 pointer-events-none hidden lg:block'}`}>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${sector.color} shadow-[0_0_20px_rgba(255,255,255,0.2)]`}>
                        <sector.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-2 leading-tight">
                        {sector.name}
                      </h3>
                    </div>
                  </div>

                  {/* CONTENT SECTION */}
                  <div className={`flex flex-col md:flex-row bg-white relative z-10 overflow-hidden transition-all duration-700 h-full ease-[cubic-bezier(0.25,1,0.5,1)] ${isExpanded ? 'w-full lg:w-[65%] opacity-100 translate-x-0' : 'w-0 opacity-0 translate-x-20'}`}>
                    <div className="w-full min-w-0 md:min-w-[500px] flex flex-col md:flex-row h-full overflow-y-auto md:overflow-visible">
                      {/* LEFT: Today */}
                      <div className="w-full md:w-[45%] p-8 border-b md:border-b-0 md:border-r border-brand-navy/10 bg-brand-cream/40 relative h-full flex flex-col justify-center shrink-0 md:shrink">
                        <div className="text-brand-navy/60 font-sans font-bold uppercase tracking-[0.2em] text-[10px] mb-8 flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3" />
                          Today
                        </div>
                        <ul className="space-y-6">
                          {sector.today.map((item, i) => (
                            <li key={i} className="text-brand-navy/70 flex items-start text-sm">
                              <span className="text-red-500/70 mr-4 font-mono">✕</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* RIGHT: With AI */}
                      <div className="w-full md:w-[55%] p-8 relative h-full flex flex-col justify-center bg-white shrink-0 md:shrink">
                        <div className={`absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-[100px] opacity-10 bg-gradient-to-br ${sector.color} transition-opacity duration-700 pointer-events-none`} />

                        <div className="relative z-10">
                          <div className="text-brand-gold font-sans font-bold uppercase tracking-[0.2em] text-[10px] mb-8 flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-3" />
                            With Dataviv AI OS
                          </div>
                          
                          <div className="grid gap-y-6 mb-10">
                            {sector.future.map((item, i) => {
                              const [title, desc] = item.split(": ");
                              return (
                                <div key={i} className="flex items-start">
                                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5 mr-4" />
                                  <div>
                                    <span className="text-brand-navy font-bold block mb-1 text-sm">{title}</span>
                                    {desc && <span className="text-brand-navy/70 font-light text-xs leading-relaxed">{desc}</span>}
                                  </div>
                                </div>
                              )
                            })}
                          </div>

                          <div className="inline-flex items-center px-4 py-2 border border-brand-navy/10 text-brand-navy/60 text-[10px] font-sans tracking-[0.2em] uppercase bg-brand-navy/5 backdrop-blur-sm">
                            <span className="font-bold mr-2 text-brand-navy">MODULES:</span> {sector.badge}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>



      {/* Styles & Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marqueeRight {
          animation: marqueeRight 30s linear infinite;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        @keyframes floatUp {
          0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-20vh) scale(1.5); opacity: 0; }
        }
        .animate-floatUp {
          animation-name: floatUp;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(420px); opacity: 0; }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }

        @keyframes flowDown {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        @keyframes flowRight {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }

        .terminal-line {
          opacity: 0;
          animation: typeIn 10s steps(40, end) infinite;
          white-space: nowrap;
          overflow: hidden;
        }
        @keyframes typeIn {
          0%, 10% { opacity: 0; max-width: 0; }
          11%, 90% { opacity: 1; max-width: 100%; }
          100% { opacity: 0; max-width: 0; }
        }

        /* Glitch Effect */
        .glitch-active {
          animation: glitch-anim 0.5s infinite;
        }
        .glitch-active::before,
        .glitch-active::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
        }
        .glitch-active::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim-2 0.5s infinite linear alternate-reverse;
        }
        .glitch-active::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim-3 0.5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip-path: inset(80% 0 0 0); transform: translate(-2px, 2px); }
          20% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -2px); }
          40% { clip-path: inset(40% 0 20% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
          80% { clip-path: inset(15% 0 70% 0); transform: translate(-2px, 2px); }
          100% { clip-path: inset(50% 0 30% 0); transform: translate(2px, -2px); }
        }
        @keyframes glitch-anim-2 {
          0% { clip: rect(65px, 9999px, 100px, 0); }
          20% { clip: rect(2px, 9999px, 44px, 0); }
          40% { clip: rect(78px, 9999px, 12px, 0); }
          60% { clip: rect(10px, 9999px, 89px, 0); }
          80% { clip: rect(56px, 9999px, 34px, 0); }
          100% { clip: rect(98px, 9999px, 78px, 0); }
        }
        @keyframes glitch-anim-3 {
          0% { clip: rect(12px, 9999px, 67px, 0); }
          20% { clip: rect(89px, 9999px, 23px, 0); }
          40% { clip: rect(34px, 9999px, 98px, 0); }
          60% { clip: rect(76px, 9999px, 45px, 0); }
          80% { clip: rect(9px, 9999px, 87px, 0); }
          100% { clip: rect(54px, 9999px, 12px, 0); }
        }
      `}} />
    </div>
  );
}
