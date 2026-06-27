import Link from "next/link";
import AuroraLayer from "@/components/AuroraLayer";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t-2 border-brand-saffron/30 relative overflow-hidden group/footer">
      {/* Subtle bottom glow that reacts to footer hover */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-4xl h-[200px] bg-brand-saffron/5 blur-[100px] group-hover/footer:bg-brand-saffron/10 transition-colors duration-700 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 text-left">
          
          {/* Column 1: Logo & Vision */}
          <div className="lg:col-span-3 flex flex-col items-start justify-start">
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <img src="/logo-transparent.png" alt="Dralha Logo" className="w-14 h-14 object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col">
                <span className="font-display text-4xl tracking-wide text-brand-white group-hover:text-green-500 transition-colors duration-500 leading-none mb-1">
                  DRALHA
                </span>
                <span className="text-xs tracking-[0.2em] text-brand-white/50 uppercase font-medium leading-none mt-1">
                  Group of Industries
                </span>
              </div>
            </Link>
            <p className="text-brand-white/50 text-sm font-medium uppercase tracking-widest mb-4">
              Est. 1988
            </p>
            <p className="mt-4 text-brand-white font-sans text-sm leading-relaxed border-l-2 border-brand-saffron/40 pl-4 py-1">
              Aligned with His Majesty the King's <br />
              <span className="flex items-center gap-2 mt-1">Vision for a Sustainable Bhutan <img src="/Flag_of_Bhutan.svg.png" alt="Bhutan Flag" className="w-[21px] h-[14px] object-cover shadow-[0_0_8px_rgba(255,255,255,0.1)] rounded-none" /></span>
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-6 flex flex-col items-start justify-start lg:pl-8 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 w-full">
              <div className="flex flex-col">
                <h4 className="text-brand-white font-display text-xl mb-6 tracking-wide">Company</h4>
                <div className="flex flex-col space-y-4">
                  <Link href="/about" className="text-brand-white/50 hover:text-brand-saffron transition-colors text-sm font-medium tracking-wide">About</Link>
                  <Link href="/leadership" className="text-brand-white/50 hover:text-brand-saffron transition-colors text-sm font-medium tracking-wide">Leadership</Link>
                  <Link href="/milestones" className="text-brand-white/50 hover:text-brand-saffron transition-colors text-sm font-medium tracking-wide">Milestones</Link>
                  <Link href="/contact" className="text-brand-white/50 hover:text-brand-saffron transition-colors text-sm font-medium tracking-wide">Contact</Link>
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-brand-white font-display text-xl mb-6 tracking-wide">Businesses</h4>
                <div className="flex flex-col space-y-4">
                  <Link href="/hotel" className="text-brand-white/50 hover:text-brand-dragonRed transition-colors text-sm font-medium tracking-wide">Hotel Dralha</Link>
                  <Link href="/mill" className="text-brand-white/50 hover:text-brand-saffron transition-colors text-sm font-medium tracking-wide">Flour Mill</Link>
                  <Link href="/napkin" className="text-brand-white/50 hover:text-brand-skyBlue transition-colors text-sm font-medium tracking-wide">Napkin Factory</Link>
                  <Link href="/bamboo" className="text-brand-white/50 hover:text-brand-forestGreen transition-colors text-sm font-medium tracking-wide">Bamboo Rev.</Link>
                  <Link href="/agribusiness" className="text-brand-white/50 hover:text-brand-forestGreen transition-colors text-sm font-medium tracking-wide">Agribusiness</Link>
                  <Link href="/gmc" className="text-brand-white/50 hover:text-brand-saffron transition-colors text-sm font-medium tracking-wide">GMC Apts</Link>
                </div>
              </div>
              <div className="flex flex-col col-span-2 md:col-span-1">
                <h4 className="text-brand-white font-display text-xl mb-6 tracking-wide">Partners</h4>
                <div className="flex flex-col space-y-4">
                  <a href="https://indiancst.in/courses.php" target="_blank" rel="noopener noreferrer" className="text-brand-white/50 hover:text-brand-saffron transition-colors text-sm font-medium tracking-wide">
                    Indian CST
                  </a>
                  <a href="https://fanaindia.in/demand.html" target="_blank" rel="noopener noreferrer" className="text-brand-white/50 hover:text-brand-saffron transition-colors text-sm font-medium tracking-wide">
                    Bhutan Requirements
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-start mt-6 lg:mt-0">
            <h4 className="text-brand-white font-display text-xl mb-6 tracking-wide">Contact</h4>
            <div className="space-y-6 md:text-right">
              <div>
                <h5 className="text-brand-white text-sm font-bold mb-2 uppercase tracking-wider">Dralha Head Office</h5>
                <p className="text-brand-white/50 text-sm hover:text-brand-white transition-colors cursor-default">+975 05 2522 84</p>
                <p className="text-brand-white/50 text-sm hover:text-brand-white transition-colors cursor-default">+975 17 6373 84</p>
                <a href="mailto:dralhaflourmill@gmail.com" className="block text-brand-saffron/80 text-sm mt-1 hover:text-brand-saffron transition-colors">dralhaflourmill@gmail.com</a>
              </div>
              <div>
                <h5 className="text-brand-white text-sm font-bold mb-2 uppercase tracking-wider">Hotel Dralha</h5>
                <p className="text-brand-white/50 text-sm hover:text-brand-white transition-colors cursor-default">+975 2341 414</p>
                <a href="mailto:info@hoteldralha.com" className="block text-brand-dragonRed/80 text-sm mt-1 hover:text-brand-dragonRed transition-colors">info@hoteldralha.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-brand-saffron/20 bg-brand-black relative z-10 overflow-hidden">
        {/* Subtle Bhutanese glow instead of Aurora */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dragonRed/5 via-brand-saffron/5 to-brand-gold/5" />
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-brand-white/50 font-light tracking-wide relative z-10">
          <span className="mb-4 md:mb-0">&copy; {currentYear} Dralha Group of Industries. Phuentsholing, Bhutan.</span>
          <span>All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
