import Image from "next/image";
import Link from "next/link";
import DynamicDarkBackground from "./DynamicDarkBackground";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-darkNavy border-t border-white/5 relative overflow-hidden">
      <DynamicDarkBackground />
      <div className="container mx-auto px-8 py-32 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-3 gap-16 text-left">
          
          {/* Column 1: Logo & Presented To */}
          <div className="flex flex-col items-start justify-start">
            <Link href="/" className="block relative w-48 h-12 md:w-56 md:h-14 group mb-10">
              <Image 
                src="/dralha-dataviv-logo-v2.png" 
                alt="Dralha x Dataviv Logo" 
                fill 
                className="object-contain object-left opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
              />
            </Link>
            <div className="inline-flex items-center px-4 py-2 border border-brand-gold/20 bg-brand-gold/5">
              <span className="text-[10px] font-sans font-bold text-brand-gold uppercase tracking-[0.2em]">Presented to His Majesty</span>
            </div>
            <p className="mt-4 text-white font-display text-2xl tracking-wide max-w-xs leading-relaxed">
              The King of Bhutan
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start justify-start">
            <h4 className="text-white font-bold mb-8 tracking-[0.2em] text-[10px] uppercase">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Dralha Group", "Dataviv Technologies", "The Transformation", "Contact"].map(name => (
                <li key={name}>
                  <Link href={name === "Home" ? "/" : `/${name.split(' ')[0].toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Dataviv Info */}
          <div className="flex flex-col items-start md:items-end justify-start">
            <h4 className="text-white font-bold mb-8 tracking-[0.2em] text-[10px] uppercase">Platform</h4>
            <a href="https://dataviv.in" target="_blank" rel="noreferrer" className="text-xl font-display font-bold text-gray-300 hover:text-white transition-colors mb-6">
              dataviv.in
            </a>
            <div className="px-3 py-1 border border-white/10 text-gray-400 text-[10px] tracking-[0.2em] uppercase rounded">
              BE FUTURE PROOF
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/5 bg-black relative z-10">
        <div className="container mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-light uppercase tracking-[0.2em]">
          <span className="mb-4 md:mb-0">&copy; {currentYear} Dataviv Technologies.</span>
          <span>All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
