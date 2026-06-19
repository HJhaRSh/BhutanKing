"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bed, Building, Award, GlassWater, Eye, Sunset, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverCard } from "@/components/animations/HoverCard";
import { CountUp } from "@/components/animations/CountUp";

export default function HotelPage() {
  return (
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden border-b border-brand-white/20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hotel/Hotel Reception.jpg"
            alt="Hotel Dralha Reception"
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-brand-vibrantPink pb-4 inline-block">
              Hospitality · Thimphu, Bhutan
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display leading-[1] mb-6">
              Hotel <span className="text-brand-vibrantBlue">Dralha.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 font-medium text-brand-white/70">
              3-Star Excellence in the Heart of Bhutan's Capital
            </p>
            
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-brand-vibrantPink text-brand-white rounded-full shadow-lg shadow-brand-vibrantPink/20">
              <Award className="w-5 h-5" />
              <span className="text-sm font-bold tracking-widest uppercase">
                SATA Award 2025 — Best City Hotel
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="w-full py-32 border-b border-brand-white/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-display mb-8 leading-tight">
              Bhutanese Warmth. <br /> Modern Comfort.
            </h2>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-8">
              Established in 2018, Hotel Dralha is a premier 3-star property located right in the heart of Thimphu. Offering 32 elegantly appointed rooms and 12 fully-equipped apartment suites, it perfectly caters to both business professionals and leisure travelers.
            </p>
            
            <div className="space-y-4 text-brand-white/50 font-medium">
              <div className="flex items-center gap-6 border-b border-brand-white/10 pb-4">
                <span className="text-xs tracking-widest uppercase">Web</span>
                <a href="https://hoteldralha.com" className="text-brand-white hover:text-brand-vibrantPink transition-colors">hoteldralha.com</a>
              </div>
              <div className="flex items-center gap-6 border-b border-brand-white/10 pb-4">
                <span className="text-xs tracking-widest uppercase">Mail</span>
                <a href="mailto:info@hoteldralha.com" className="text-brand-white hover:text-brand-vibrantPink transition-colors">info@hoteldralha.com</a>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs tracking-widest uppercase">Tel</span>
                <a href="tel:+9752341414" className="text-brand-white hover:text-brand-vibrantPink transition-colors">+975 2341 414</a>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid grid-cols-2 gap-4">
            <HoverCard colorClass="bg-brand-vibrantPink" gradientClass="from-brand-vibrantPink/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantPink">
                <CountUp end={32} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-black/50 group-hover:text-brand-black font-bold uppercase transition-colors">Rooms</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantBlue" gradientClass="from-brand-vibrantBlue/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantBlue">
                <CountUp end={12} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-black/50 group-hover:text-brand-black font-bold uppercase transition-colors">Suites</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantOrange" gradientClass="from-brand-vibrantOrange/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantOrange">
                <CountUp end={2018} duration={1.5} />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-black/50 group-hover:text-brand-black font-bold uppercase transition-colors">Est.</span>
            </HoverCard>
            <HoverCard colorClass="bg-brand-vibrantGreen" gradientClass="from-brand-vibrantGreen/10 to-transparent">
              <span className="text-5xl font-display mb-2 text-brand-vibrantGreen">
                <CountUp end={3} suffix="★" />
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-black/50 group-hover:text-brand-black font-bold uppercase transition-colors">Rating</span>
            </HoverCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ROOMS & ACCOMMODATIONS */}
      <section className="w-full bg-creative-light text-brand-black py-32 border-b border-brand-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-20">
            <h2 className="text-5xl md:text-7xl font-display">Accommodations.</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="columns-1 md:columns-3 gap-6 space-y-6 mb-20">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image src="/hotel/Hotel Room 2.jpg" alt="Hotel Room" width={800} height={600} className="w-full h-auto hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image src="/hotel/Hotel Dralha Room.jpg" alt="Hotel Suite" width={800} height={600} className="w-full h-auto hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image src="/hotel/Hotel Reception.jpg" alt="Hotel Details" width={800} height={600} className="w-full h-auto hover:scale-105 transition-transform duration-700" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="grid md:grid-cols-2 gap-12 border-t border-brand-black/20 pt-12">
            <div className="flex flex-col items-start pr-8 md:border-r border-brand-black/20">
              <Bed className="w-8 h-8 mb-6" />
              <h3 className="text-3xl font-display mb-4">Standard Rooms</h3>
              <p className="text-brand-black/70 leading-relaxed text-lg">
                Well-designed rooms with modern amenities for comfortable short stays. Perfect for business travelers and tourists exploring Thimphu.
              </p>
            </div>
            <div className="flex flex-col items-start md:pl-8">
              <Building className="w-8 h-8 mb-6" />
              <h3 className="text-3xl font-display mb-4">Apartment Suites</h3>
              <p className="text-brand-black/70 leading-relaxed text-lg">
                12 fully-equipped apartment units featuring complete kitchens and living areas, designed specifically for extended stays and family comfort.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DINING - THE LITTLE KITCHEN */}
      <section className="w-full py-32 border-b border-brand-white/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <ScrollReveal className="order-2 md:order-1 relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-vibrantOrange/10">
             <Image src="/hotel/Little Kitchen.jpg" alt="The Little Kitchen" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="order-1 md:order-2">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-vibrantOrange">Dining</h3>
            <h2 className="text-5xl md:text-7xl font-display mb-8">The Little Kitchen</h2>
            <p className="text-brand-white/70 text-lg leading-relaxed">
              An authentic Indian restaurant led by an experienced chef from India, offering a rich menu of Indian, Bhutanese, Indo-Chinese, and Continental cuisine. A favorite with hotel guests and Thimphu locals alike.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ROOFTOP - THE ATTIC */}
      <section className="w-full py-32 border-b border-brand-white/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-white/50">Rooftop Lounge</h3>
            <h2 className="text-5xl md:text-7xl font-display mb-8">The Attic</h2>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-12">
              Sip cocktails while taking in panoramic views of Thimphu and the iconic Buddha Dordenma statue. The Attic is Thimphu's most stylish rooftop destination.
            </p>
            
            <div className="space-y-6 border-l border-brand-white/20 pl-8">
              <div className="flex items-center gap-4 text-lg">
                <GlassWater className="w-6 h-6" />
                <span>Craft Cocktails</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <Eye className="w-6 h-6" />
                <span>Panoramic City Views</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <Sunset className="w-6 h-6" />
                <span>Buddha Dordenma Views</span>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-vibrantBlue/10">
             <Image src="/hotel/Attic Bar 2.jpg" alt="The Attic Bar" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* BUSINESS & EVENTS */}
      <section className="w-full bg-creative-light text-brand-black py-32 border-b border-brand-black/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <ScrollReveal delay={0.2} className="order-2 md:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-black/20">
             <Image src="/hotel/Hotel Reception.jpg" alt="Business & Events" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </ScrollReveal>
          <ScrollReveal className="order-1 md:order-2">
            <h2 className="text-5xl md:text-7xl font-display mb-8">Business & Events</h2>
            <p className="text-brand-black/70 text-lg leading-relaxed mb-12">
              Fully equipped conference facilities for corporate meetings, workshops, and professional events. Featuring modern audio-visual equipment and comfortable seating configurations.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="px-6 py-3 border border-brand-black text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-black/30">Corporate Meetings</motion.span>
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="px-6 py-3 border border-brand-black text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-black/30">Workshops</motion.span>
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="px-6 py-3 border border-brand-black text-sm uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-colors cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-black/30">Private Events</motion.span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FUTURE PLANS */}
      <section className="w-full py-32 relative overflow-hidden">
        {/* Background gradient for this section to make it pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black to-brand-vibrantPink/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-24">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-brand-vibrantPink">Vision 2030</h3>
            <h2 className="text-4xl md:text-6xl font-display">Growing With Bhutan's Tourism Ambition.</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid md:grid-cols-4 gap-8 pt-8">
            <HoverCard colorClass="bg-brand-vibrantPink" gradientClass="from-brand-vibrantPink/20 to-transparent" className="p-12 border border-brand-white/10 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantPink transition-colors duration-500">01</span>
              <p className="text-xl font-display text-brand-white">Upgrade to 4-Star property</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-vibrantBlue" gradientClass="from-brand-vibrantBlue/20 to-transparent" className="p-12 border border-brand-white/10 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantBlue transition-colors duration-500">02</span>
              <p className="text-xl font-display text-brand-white">Spa & Wellness facilities</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-vibrantOrange" gradientClass="from-brand-vibrantOrange/20 to-transparent" className="p-12 border border-brand-white/10 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantOrange transition-colors duration-500">03</span>
              <p className="text-xl font-display text-brand-white">Expand to Paro, Punakha, Phuentsholing & Bumthang</p>
            </HoverCard>
            
            <HoverCard colorClass="bg-brand-vibrantGreen" gradientClass="from-brand-vibrantGreen/20 to-transparent" className="p-12 border border-brand-white/10 !bg-brand-black/50 backdrop-blur-sm">
              <span className="font-display text-8xl mb-6 text-brand-white/20 group-hover:text-brand-vibrantGreen transition-colors duration-500">04</span>
              <p className="text-xl font-display text-brand-white">Flagship 5-Star luxury property</p>
            </HoverCard>
          </ScrollReveal>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="w-full py-32 border-t border-brand-white/20 text-center bg-brand-vibrantBlue text-brand-black">
        <h2 className="text-5xl md:text-7xl font-display mb-12">Experience Bhutan.</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="https://hoteldralha.com" target="_blank" rel="noreferrer" className="px-10 py-5 bg-brand-black text-brand-white font-bold tracking-widest uppercase text-sm hover:bg-brand-black/80 transition-colors rounded-full">
            Visit hoteldralha.com
          </a>
          <Link href="/ai-partnership" className="px-10 py-5 border-2 border-brand-black text-brand-black font-bold tracking-widest uppercase text-sm hover:bg-brand-black hover:text-brand-white transition-colors rounded-full">
            AI Transformation Plan
          </Link>
        </div>
      </section>

    </div>
  );
}