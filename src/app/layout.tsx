import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalPolish from "@/components/GlobalPolish";

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit" 
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk" 
});

export const metadata: Metadata = {
  title: "Dralha Group of Industries",
  description: "Bhutan's diversified conglomerate spanning hospitality, food manufacturing, sustainable agriculture, and real estate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} font-sans bg-brand-black text-brand-white antialiased selection:bg-brand-saffron selection:text-white relative`}>
        {/* Subtle noise texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
        
        <GlobalPolish />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
