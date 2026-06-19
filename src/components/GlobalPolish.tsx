"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalPolish() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check session storage
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    
    if (!hasSeenIntro) {
      setLoading(true);
      sessionStorage.setItem("hasSeenIntro", "true");
      
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* LOADING SCREEN */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-brand-black flex flex-col items-center justify-center"
          >
            <motion.div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-display font-bold tracking-[0.2em] text-brand-white uppercase mb-4"
              >
                DRALHA
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-sm md:text-lg tracking-[0.4em] text-brand-white/50 uppercase"
              >
                Group of Industries
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
