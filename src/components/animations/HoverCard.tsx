"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  colorClass?: string; // e.g. "bg-brand-vibrantBlue"
  gradientClass?: string; // e.g. "from-brand-vibrantBlue/5 to-transparent"
}

export function HoverCard({ 
  children, 
  className = "", 
  colorClass = "bg-brand-vibrantBlue", 
  gradientClass = "from-brand-vibrantBlue/5 to-transparent" 
}: HoverCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      className={clsx(
        "relative bg-brand-white p-10 rounded-3xl border border-brand-black/5 shadow-2xl shadow-brand-black/5 flex flex-col items-center justify-center text-center group overflow-hidden",
        className
      )}
    >
      <div className={clsx("absolute top-0 left-0 w-full h-1.5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500", colorClass)} />
      <div className={clsx("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none", gradientClass)} />
      {children}
    </motion.div>
  );
}
