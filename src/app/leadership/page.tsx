"use client";

import { motion } from "framer-motion";

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
    <div className="w-full flex flex-col items-center bg-brand-black text-brand-white">
      
      {/* HERO SECTION */}
      <section className="w-full pt-40 pb-32 px-6 text-center border-b border-brand-white/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-brand-vibrantBlue pb-4 inline-block">
            Our People
          </h2>
          <h1 className="text-6xl md:text-8xl font-display leading-[1.1] mb-6">
            Leadership.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-brand-white/70 max-w-3xl mx-auto">
            The Team Behind Bhutan's Most Diversified Conglomerate
          </p>
        </motion.div>
      </section>

      {/* LEADERSHIP LIST */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex flex-col bg-[#0a0a0a] border border-brand-white/20 rounded-none p-10 group hover:bg-brand-white hover:border-brand-white transition-colors duration-500 shadow-2xl shadow-brand-black/50"
            >
              <div className="flex-grow flex flex-col items-start border-l-4 border-brand-vibrantBlue pl-6 mb-8">
                <span className="text-[10px] tracking-widest text-brand-vibrantPink uppercase font-bold mb-4">{leader.badge}</span>
                <h3 className="text-3xl font-display mb-2 text-brand-white group-hover:text-brand-black transition-colors duration-500">{leader.name}</h3>
                <p className="text-sm font-bold tracking-wider text-brand-vibrantBlue uppercase">{leader.title}</p>
              </div>

              <div className="flex flex-col flex-grow">
                <p className="text-brand-white/70 group-hover:text-brand-black/70 transition-colors duration-500 text-base leading-relaxed mb-8 flex-grow">
                  {leader.desc}
                </p>

                {(leader.email || leader.phone) && (
                  <div className="flex flex-col gap-4 pt-6 border-t border-brand-white/10 group-hover:border-brand-black/10 transition-colors duration-500 mt-auto">
                    {leader.email && (
                      <a href={`mailto:${leader.email}`} className="text-xs font-bold tracking-widest uppercase text-brand-white/50 group-hover:text-brand-black/50 hover:!text-brand-vibrantBlue transition-colors flex items-center gap-2">
                        <span>Email</span> <span className="lowercase font-normal text-brand-white/80 group-hover:text-brand-black/80 transition-colors">{leader.email}</span>
                      </a>
                    )}
                    {leader.phone && (
                      <a href={`tel:${leader.phone.replace(/\s+/g, '')}`} className="text-xs font-bold tracking-widest uppercase text-brand-white/50 group-hover:text-brand-black/50 hover:!text-brand-vibrantGreen transition-colors flex items-center gap-2">
                        <span>Call</span> <span className="font-normal text-brand-white/80 group-hover:text-brand-black/80 transition-colors">{leader.phone}</span>
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