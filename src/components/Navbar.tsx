"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "The Vision", href: "/" },
  { name: "Dralha Group", href: "/dralha" },
  { name: "Dataviv", href: "/dataviv" },
  { name: "Transformation", href: "/transformation" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-brand-navy border-b border-white/5 py-4" : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-8 max-w-7xl flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="block relative w-40 h-10 md:w-48 md:h-12 group">
              <Image 
                src="/dralha-dataviv-logo-v2.png" 
                alt="Dralha x Dataviv Logo" 
                fill 
                className="object-contain object-left transition-opacity duration-300 group-hover:opacity-80" 
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-[10px] font-bold tracking-[0.2em] uppercase group"
                >
                  <span className={`transition-colors duration-300 ${isActive ? "text-brand-gold" : "text-gray-400 group-hover:text-white"}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-3 left-0 right-0 h-[1px] bg-brand-gold"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-brand-darkNavy/95 backdrop-blur-xl flex flex-col"
          >
            <div className="p-6 flex justify-end">
              <button
                className="text-white p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-2xl font-display font-bold uppercase tracking-widest ${
                    pathname === link.href ? "text-brand-gold" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
