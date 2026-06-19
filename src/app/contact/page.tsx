"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverCard } from "@/components/animations/HoverCard";

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white min-h-screen">
      
      {/* HERO SECTION */}
      <section className="w-full h-[50vh] flex flex-col justify-center items-center text-center pt-20 px-6 border-b border-brand-white/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-brand-vibrantBlue pb-4 inline-block">
            Connect
          </h2>
          <h1 className="text-6xl md:text-8xl font-display leading-[1.1] mb-4">
            Let's <span className="text-brand-vibrantBlue">Talk.</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-brand-white/70">
            Get in touch with Dralha Group of Industries
          </p>
        </motion.div>
      </section>

      {/* TWO COLUMN LAYOUT */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-20">
          
          {/* Left - Contact Form */}
          <ScrollReveal delay={0.2} className="p-12 border border-brand-white/20 rounded-2xl bg-brand-white/5 hover:border-brand-vibrantBlue/50 transition-colors duration-500">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-white/70">Name</label>
                  <input type="text" className="w-full bg-brand-black border border-brand-white/20 rounded-lg px-4 py-3 text-brand-white focus:outline-none focus:border-brand-vibrantBlue transition-colors" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-white/70">Organisation</label>
                  <input type="text" className="w-full bg-brand-black border border-brand-white/20 rounded-lg px-4 py-3 text-brand-white focus:outline-none focus:border-brand-vibrantBlue transition-colors" placeholder="Company name" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-white/70">Email</label>
                  <input type="email" className="w-full bg-brand-black border border-brand-white/20 rounded-lg px-4 py-3 text-brand-white focus:outline-none focus:border-brand-vibrantBlue transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-white/70">Phone</label>
                  <input type="tel" className="w-full bg-brand-black border border-brand-white/20 rounded-lg px-4 py-3 text-brand-white focus:outline-none focus:border-brand-vibrantBlue transition-colors" placeholder="+975 ..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-white/70">Subject</label>
                <select className="w-full bg-brand-black border border-brand-white/20 rounded-lg px-4 py-3 text-brand-white focus:outline-none focus:border-brand-vibrantBlue transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Hotel Dralha</option>
                  <option>Flour Mill</option>
                  <option>Napkin Factory</option>
                  <option>Bamboo Revolution</option>
                  <option>Agribusiness</option>
                  <option>GMC Apartments</option>
                  <option>AI Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-white/70">Message</label>
                <textarea rows={5} className="w-full bg-brand-black border border-brand-white/20 rounded-lg px-4 py-3 text-brand-white focus:outline-none focus:border-brand-vibrantBlue transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button className="w-full bg-brand-vibrantBlue text-brand-black font-bold py-4 rounded-full hover:bg-brand-white transition-colors shadow-lg shadow-brand-vibrantBlue/20">
                Send Message
              </button>
            </form>
          </ScrollReveal>

          {/* Right - Contact Cards */}
          <ScrollReveal delay={0.4} className="space-y-8">
            {/* Card 1 */}
            <motion.div whileHover={{ y: -5, scale: 1.02 }} className="p-10 border-l-4 border-l-brand-vibrantBlue border border-brand-white/10 rounded-r-2xl bg-brand-white/5 shadow-2xl shadow-brand-black/50 hover:bg-brand-white/10 transition-colors">
              <h3 className="text-3xl font-display text-brand-white mb-6">Dralha Head Office</h3>
              <div className="space-y-4 text-brand-white/80 text-lg">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-brand-vibrantBlue mt-1" />
                  <div>
                    <p>+975 05 2522 84</p>
                    <p>+975 17 6373 84</p>
                    <p>+975 1760 6237</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-brand-vibrantBlue" />
                  <p>dralhaflourmill@gmail.com</p>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-vibrantBlue mt-1" />
                  <p>Industrial Estate,<br/>Phuentsholing, Bhutan</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div whileHover={{ y: -5, scale: 1.02 }} className="p-10 border-l-4 border-l-brand-vibrantPink border border-brand-white/10 rounded-r-2xl bg-brand-white/5 shadow-2xl shadow-brand-black/50 hover:bg-brand-white/10 transition-colors">
              <h3 className="text-3xl font-display text-brand-white mb-6">Hotel Dralha</h3>
              <div className="space-y-4 text-brand-white/80 text-lg">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-brand-vibrantPink mt-1" />
                  <div>
                    <p>+975 2341 414</p>
                    <p>+975 1799 9896</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-brand-vibrantPink" />
                  <p>info@hoteldralha.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <ExternalLink className="w-6 h-6 text-brand-vibrantPink" />
                  <a href="https://hoteldralha.com" target="_blank" rel="noreferrer" className="hover:text-brand-vibrantPink transition-colors">hoteldralha.com</a>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-vibrantPink mt-1" />
                  <p>Olakha, Thimphu, Bhutan</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div whileHover={{ y: -5, scale: 1.02 }} className="p-10 border-l-4 border-l-brand-vibrantGreen border border-brand-white/10 rounded-r-2xl bg-brand-white/5 shadow-2xl shadow-brand-black/50 hover:bg-brand-white/10 transition-colors">
              <p className="text-brand-vibrantGreen text-xs tracking-widest uppercase mb-2 font-bold">Be Future Proof</p>
              <h3 className="text-3xl font-display text-brand-white mb-4">AI Partnership — Dataviv Technologies</h3>
              <p className="text-brand-white/70 mb-6 text-lg">Interested in transforming Dralha's businesses with AI?</p>
              <div className="flex items-center gap-4 text-brand-white/80 text-lg">
                <ExternalLink className="w-6 h-6 text-brand-vibrantGreen" />
                <a href="https://dataviv.in" target="_blank" rel="noreferrer" className="hover:text-brand-vibrantGreen transition-colors">dataviv.in</a>
              </div>
            </motion.div>

          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}