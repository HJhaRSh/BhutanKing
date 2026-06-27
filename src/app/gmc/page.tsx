"use client";
import AuroraLayer from "@/components/AuroraLayer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Crown, Star, Building2, Briefcase, MapPin, Globe2, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverCard } from "@/components/animations/HoverCard";
import { CountUp } from "@/components/animations/CountUp";

export default function GMCPage() {
  return (
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white">
        <AuroraLayer />
      
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden border-b border-brand-orchid/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black/90 to-brand-saffron/20 z-10" />
          <Image src="/gmc/hero.png" alt="GMC Residences" fill className="object-cover opacity-50 mix-blend-screen" priority />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-brand-saffron pb-4 inline-block">
              Real Estate · Gelephu Mindfulness City
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display leading-[1] mb-6">
              The Dralha <span className="text-brand-saffron">GMC Residences.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 font-medium text-brand-white/70">
              Luxury Serviced Apartments in His Majesty's Visionary City
            </p>
            
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-brand-saffron text-brand-black rounded-full shadow-lg shadow-brand-saffron/20">
              <Crown className="w-5 h-5" />
              <span className="text-sm font-bold tracking-widest uppercase">
                Breaking Ground Imminently
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-display mb-8 leading-tight">
              A City Like <br /> No Other.
            </h2>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-8">
              Gelephu Mindfulness City (GMC) is a Special Administrative Region spanning 2,500 sq km in southern Bhutan, established under Royal Charter by His Majesty the King — masterfully fusing international business, modern technology, and mindful living.
            </p>
            
            <div className="space-y-4 text-brand-white/50 font-medium">
              <div className="flex items-center gap-6 border-b border-brand-orchid/20 pb-4">
                <span className="text-xs tracking-widest uppercase">Location</span>
                <span className="text-brand-white italic transition-colors">Gelephu Mindfulness City</span>
              </div>
              <div className="flex items-center gap-6 border-b border-brand-orchid/20 pb-4">
                <span className="text-xs tracking-widest uppercase">Mail</span>
                <a href="mailto:info@bhutanking.com" className="text-brand-white hover:text-brand-saffron transition-colors">info@bhutanking.com</a>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs tracking-widest uppercase">Tel</span>
                <a href="tel:+97505252284" className="text-brand-white hover:text-brand-saffron transition-colors">+975 05 2522 84</a>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid grid-cols-2 gap-4">
            <HoverCard colorClass="bg-brand-vibrantOrange" gradientClass="from-brand-vibrantOrange/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantOrange">
                <CountUp end={2500} duration={1.5} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Sq Km SAR</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantBlue" gradientClass="from-brand-vibrantBlue/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantBlue">
                1
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Royal Charter</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantPink" gradientClass="from-brand-vibrantPink/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantPink">
                <CountUp end={100} duration={1.5} />
                <span className="text-2xl ml-1">%</span>
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Mindful</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantGreen" gradientClass="from-brand-vibrantGreen/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantGreen">
                <CountUp end={1} duration={2} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-saffron font-bold group-hover:text-brand-black font-bold uppercase transition-colors">Vision</span>
            </HoverCard>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY / PRODUCTS */}
      <section className="w-full bg-creative-light text-brand-black py-16 md:py-32 border-b border-brand-saffron/20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display">The Proposition.</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="columns-1 md:columns-3 gap-6 space-y-6 mb-20">
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square group">
              <Image src="/gmc/living.png" alt="World-Class Living" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5] group">
              <Image src="/gmc/demographics.png" alt="Premium Demographics" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square group">
              <Image src="/gmc/value.png" alt="Future-Proof Value" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="grid md:grid-cols-2 gap-12 border-t border-brand-saffron/20 pt-12">
            <div className="flex flex-col items-start pr-8 md:border-r border-brand-saffron/20">
              <Crown className="w-8 h-8 mb-6 text-brand-saffron" />
              <h3 className="text-3xl font-display mb-4">World-Class Living</h3>
              <p className="text-brand-black/70 leading-relaxed text-lg">
                High-standard luxury serviced apartments designed for the discerning global citizen requiring uncompromising quality.
              </p>
            </div>
            <div className="flex flex-col items-start md:pl-8">
              <Globe2 className="w-8 h-8 mb-6 text-brand-saffron" />
              <h3 className="text-3xl font-display mb-4">Premium Demographics</h3>
              <p className="text-brand-black/70 leading-relaxed text-lg">
                Catering exclusively to international professionals, expatriates, and elite visitors to the GMC.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURE 1: A Global Magnet */}
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal className="order-2 md:order-1 relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-saffron/10 group">
             <Image src="/gmc/magnet.png" alt="A Global Magnet" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="order-1 md:order-2">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-saffron">The Opportunity</h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8">A Global Magnet</h2>
            <p className="text-brand-white/70 text-lg leading-relaxed">
              As the world turns its attention to the GMC, the demand for premium, international-standard accommodations is skyrocketing. The city is drawing expatriates, corporate partners, international investors, and high-end tourists who require uncompromising quality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURE 2: Premium Demographic */}
      <section className="w-full py-16 md:py-32 border-b border-brand-orchid/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-white/50">Target Audience</h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8">Premium Demographics</h2>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-12">
              Our residences are strategically positioned to capitalize on the city's exponential growth and cater to the upper echelon of GMC's new residents.
            </p>
            
            <div className="space-y-6 border-l border-brand-orchid/20 pl-8">
              <div className="flex items-center gap-4 text-lg">
                <Briefcase className="w-6 h-6 text-brand-saffron" />
                <span>Expatriates & Executives</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <Globe2 className="w-6 h-6 text-brand-saffron" />
                <span>International Investors</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <Star className="w-6 h-6 text-brand-saffron" />
                <span>High-End Tourists</span>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-orchid/10 group">
             <Image src="/gmc/demographics.png" alt="Premium Demographics" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* FEATURE 3: Future-Proof Value */}
      <section className="w-full bg-creative-light text-brand-black py-16 md:py-32 border-b border-brand-saffron/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal delay={0.2} className="order-2 md:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-black/20 group">
             <Image src="/gmc/value.png" alt="Future-Proof Value" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </ScrollReveal>
          <ScrollReveal className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8">Future-Proof Value</h2>
            <p className="text-brand-black/70 text-lg leading-relaxed mb-12">
              With the GMC poised to become a major economic and cultural hub, early real estate developments offer immense potential for value appreciation and steady, lucrative yields.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="px-6 py-3 border border-brand-black text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-black/30">Capital Appreciation</motion.span>
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="px-6 py-3 border border-brand-black text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-black/30">Stable Yields</motion.span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FUTURE PLANS */}
      <section className="w-full py-16 md:py-32 relative overflow-hidden">
        {/* Background gradient for this section to make it pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black to-brand-saffron/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-24">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-saffron">Development Roadmap</h3>
            <h2 className="text-4xl md:text-6xl font-display">Project Stages.</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid md:grid-cols-4 gap-8 pt-8">
            <HoverCard colorClass="bg-brand-saffron" gradientClass="from-brand-saffron/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-saffron transition-colors duration-500">01</span>
              <p className="text-xl font-display text-brand-white">Strategic Land Allocation</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-vibrantBlue" gradientClass="from-brand-vibrantBlue/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantBlue transition-colors duration-500">02</span>
              <p className="text-xl font-display text-brand-white">Design & Masterplanning</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-orchid" gradientClass="from-brand-orchid/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-orchid transition-colors duration-500">03</span>
              <p className="text-xl font-display text-brand-white">Premium Construction</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-forestGreen" gradientClass="from-brand-forestGreen/20 to-transparent" className="p-12 border border-brand-orchid/20 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-forestGreen transition-colors duration-500">04</span>
              <p className="text-xl font-display text-brand-white">Launch & Operations</p>
            </HoverCard>
          </ScrollReveal>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="w-full py-16 md:py-32 border-t border-brand-orchid/20 text-center bg-brand-saffron text-brand-black">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-12">Intelligent Real Estate.</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link href="/ai-partnership" className="px-10 py-5 border-2 border-brand-black text-brand-black font-bold tracking-widest uppercase text-sm hover:bg-brand-black hover:text-brand-white transition-colors rounded-full">
            AI Transformation Plan
          </Link>
        </div>
      </section>

    </div>
  );
}