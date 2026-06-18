"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center flex flex-col items-center" : ""}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-4xl md:text-6xl font-display font-bold text-inherit tracking-tight leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl font-light mt-6 max-w-3xl opacity-70"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "60px", opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.4, duration: 1 }}
        className={`h-[1px] bg-brand-gold mt-10 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
