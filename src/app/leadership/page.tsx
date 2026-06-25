"use client";

import { motion } from "framer-motion";
import AuroraLayer from "@/components/AuroraLayer";

const leaders = [
  {
    name: "Ashi Deki Choden Wangchuck",
    title: "Managing Director",
    desc: "Provides strategic leadership and oversees overall operations. Has guided Dralha's growth since 1999. Eldest daughter of Her Royal Highness Princess Choeki Wangmo Wangchuck.",
    badge: "Since 1999",
    initials: "DC",
    email: "",
    phone: ""
  },
  {
    name: "Mr. S.K. Tarafdar",
    title: "Chief Financial Officer",
    desc: "40+ years of finance experience. Associated with Dralha since its inception in 1988. Oversees budgeting, planning and risk.",
    badge: "Since 1988",
    initials: "SK",
    email: "s.ktarafdar@yahoo.in",
    phone: "+91 95938 70602"
  },
  {
    name: "Mr. Shamsher Alam",
    title: "Marketing & Sales Manager",
    desc: "Leads brand development, market expansion, and client relationships across all Dralha divisions.",
    badge: "Sales & Marketing",
    initials: "SA",
    email: "shamsher.islam@gmail.com",
    phone: "+91 93333 33887"
  },
  {
    name: "Mr. Meyo Rabsel Namgyel",
    title: "Deputy Director",
    desc: "Supports operational management and strategic planning. Graduate of Regent's College London — Graphic Design. Leads creative direction and branding.",
    badge: "Operations & Creative",
    initials: "MR",
    email: "meyorabsel@gmail.com",
    phone: "+975 7720 9073"
  },
  {
    name: "Mr. Ricksel Namgyel",
    title: "Assistant Director",
    desc: "Master's in Business Innovation (MBI), Bangkok University. Oversees operational efficiency and project coordination.",
    badge: "Strategy & Operations",
    initials: "RN",
    email: "ricksel.namgyel@gmail.com",
    phone: ""
  }
];

export default function LeadershipPage() {
  return (
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex flex-col items-center justify-center text-center border-b border-brand-saffron/20 pt-20 overflow-hidden bg-brand-black">
        {/* Majestic Fully Wide Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: "url('/leadership.jpeg')", backgroundAttachment: "fixed" }}
        />
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/80" />
        
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase mb-6 text-brand-saffron pb-4 inline-block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Our People
          </h2>
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-display leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-brand-white to-brand-white/80 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            Leadership.
          </h1>
          <p className="text-xl md:text-3xl font-medium text-brand-white/90 max-w-3xl mx-auto drop-shadow-lg">
            The Visionaries Behind Bhutan's Most Diversified Conglomerate
          </p>
        </motion.div>
      </section>

      {/* LEADERSHIP LIST */}
      <section className="w-full bg-creative-light py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex flex-col bg-brand-black/80 backdrop-blur-xl border border-brand-saffron/30 rounded-3xl p-10 group hover:border-brand-saffron hover:bg-brand-black/95 transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(255,140,0,0.2)]"
            >
              <div className="flex-grow flex flex-col items-start border-l-4 border-brand-saffron pl-6 mb-8 transition-colors duration-500 group-hover:border-brand-dragonRed">
                <span className="text-[10px] tracking-widest text-brand-saffron uppercase font-bold mb-4">{leader.badge}</span>
                <h3 className="text-3xl font-display mb-2 text-brand-white transition-colors duration-500">{leader.name}</h3>
                <p className="text-sm font-bold tracking-wider text-brand-white/70 uppercase">{leader.title}</p>
              </div>

              <div className="flex flex-col flex-grow">
                <p className="text-brand-white/70 text-base leading-relaxed mb-8 flex-grow font-medium">
                  {leader.desc}
                </p>

                {(leader.email || leader.phone) && (
                  <div className="flex flex-col gap-4 pt-6 border-t border-brand-saffron/20 transition-colors duration-500 mt-auto">
                    {leader.email && (
                      <a href={`mailto:${leader.email}`} className="text-xs font-bold tracking-widest uppercase text-brand-white/50 hover:!text-brand-saffron transition-colors flex items-center gap-2">
                        <span>Email</span> <span className="lowercase font-normal text-brand-white/80">{leader.email}</span>
                      </a>
                    )}
                    {leader.phone && (
                      <a href={`tel:${leader.phone.replace(/\s+/g, '')}`} className="text-xs font-bold tracking-widest uppercase text-brand-white/50 hover:!text-brand-saffron transition-colors flex items-center gap-2">
                        <span>Call</span> <span className="font-normal text-brand-white/80">{leader.phone}</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}