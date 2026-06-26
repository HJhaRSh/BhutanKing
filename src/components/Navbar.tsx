"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const BUSINESSES = [
  { name: "Hotel Dralha", href: "/hotel" },
  { name: "Dralha Flour Mill", href: "/mill" },
  { name: "Dralha Napkin Factory", href: "/napkin" },
  { name: "Bamboo Revolution", href: "/bamboo" },
  { name: "Agribusiness", href: "/agribusiness" },
  { name: "GMC Serviced Apartments", href: "/gmc" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[80px] flex items-center border-b",
          scrolled ? "bg-brand-black/95 backdrop-blur-md border-brand-orchid/20 shadow-xl shadow-brand-saffron/30" : "bg-brand-black/80 backdrop-blur-xl border-b border-brand-orchid/20"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo-transparent.png" alt="Dralha Logo" className="w-12 h-12 object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-display font-bold text-3xl tracking-tight text-brand-white group-hover:text-green-500 transition-colors duration-300 leading-none">
                  DRALHA
                </span>
                <img src="/Flag_of_Bhutan.svg.png" alt="Bhutan Flag" className="w-[30px] h-[20px] object-cover shadow-[0_0_8px_rgba(255,255,255,0.2)] rounded-none" />
              </div>
              <span className="text-[0.6rem] tracking-[0.3em] text-brand-saffron uppercase font-medium leading-none">
                Group of Industries
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-wider">
            <Link href="/about" className={clsx("transition-colors hover:text-brand-saffron", pathname === "/about" ? "text-brand-saffron" : "text-brand-white")}>
              About
            </Link>

            <div 
              className="relative py-6"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className={clsx("flex items-center transition-colors hover:text-brand-orchid", BUSINESSES.some(b => b.href === pathname) ? "text-brand-orchid" : "text-brand-white")}>
                Our Businesses <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-72 bg-brand-black border border-brand-orchid/20 shadow-2xl py-4 rounded-xl overflow-hidden"
                  >
                    {BUSINESSES.map((biz) => (
                      <Link 
                        key={biz.name} 
                        href={biz.href}
                        className={clsx(
                          "block px-6 py-3 hover:bg-gradient-to-br from-brand-gray/80 to-brand-royalViolet/10 border border-brand-orchid/20 hover:border-brand-saffron/60 shadow-lg shadow-brand-royalViolet/10 relative overflow-hidden transition-colors text-sm",
                          pathname === biz.href ? "text-brand-forestGreen bg-gradient-to-br from-brand-gray/80 to-brand-royalViolet/10 border border-brand-orchid/20 hover:border-brand-saffron/60 shadow-lg shadow-brand-royalViolet/10 relative overflow-hidden font-bold" : "text-brand-white/80 font-medium"
                        )}
                        onClick={() => setDropdownOpen(false)}
                      >
                        {biz.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/leadership" className={clsx("transition-colors hover:text-brand-forestGreen", pathname === "/leadership" ? "text-brand-forestGreen" : "text-brand-white")}>
              Leadership
            </Link>
            <Link href="/milestones" className={clsx("transition-colors hover:text-brand-dragonRed", pathname === "/milestones" ? "text-brand-dragonRed" : "text-brand-white")}>
              Milestones
            </Link>
            <Link href="/ai-partnership" className={clsx("transition-colors hover:text-brand-saffron", pathname === "/ai-partnership" ? "text-brand-saffron" : "text-brand-white")}>
              AI Partnership
            </Link>
            <Link href="/contact" className={clsx("px-5 py-2 border border-brand-orchid/20 rounded-full transition-all hover:border-brand-saffron hover:text-brand-saffron", pathname === "/contact" ? "border-brand-saffron text-brand-saffron" : "text-brand-white")}>
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-white hover:text-brand-saffron transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-black flex flex-col items-center justify-center border-l border-brand-orchid/20"
          >
            <button 
              className="absolute top-6 right-6 text-brand-white hover:text-brand-orchid transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-10 h-10" />
            </button>
            <div className="flex flex-col items-center space-y-8 font-display font-bold text-3xl tracking-tight text-brand-white">
              <Link href="/" className="hover:text-vibrant-gradient" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/about" className="hover:text-brand-saffron" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <div className="flex flex-col items-center space-y-4">
                <span className="text-brand-white/50 text-xs tracking-[0.3em] uppercase">Our Businesses</span>
                {BUSINESSES.map((biz) => (
                  <Link key={biz.name} href={biz.href} className="text-2xl hover:text-brand-orchid" onClick={() => setMobileMenuOpen(false)}>{biz.name}</Link>
                ))}
              </div>
              <Link href="/leadership" className="hover:text-brand-forestGreen" onClick={() => setMobileMenuOpen(false)}>Leadership</Link>
              <Link href="/milestones" className="hover:text-brand-dragonRed" onClick={() => setMobileMenuOpen(false)}>Milestones</Link>
              <Link href="/ai-partnership" className="hover:text-brand-saffron" onClick={() => setMobileMenuOpen(false)}>AI Partnership</Link>
              <Link href="/contact" className="hover:text-brand-white" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
