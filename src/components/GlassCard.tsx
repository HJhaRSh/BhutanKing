"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export default function GlassCard({ children, className, hoverEffect = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "relative overflow-hidden bg-brand-darkNavy border border-white/5 p-8",
        hoverEffect && "transition-colors duration-700 hover:border-brand-gold/40 group",
        className
      )}
    >
      {/* Subtle noise texture over card */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('/noise.png')] pointer-events-none" />
      
      {hoverEffect && (
        <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
      )}
      
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}
