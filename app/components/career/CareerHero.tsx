"use client";

import { motion } from "framer-motion";

export default function CareerHero() {
  return (
    <section className="relative z-10 px-6 sm:px-[8vw] pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-28">
      <div className="max-w-4xl">
        {/* SMALL ORANGE LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
        >
          CAREERS
        </motion.p>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.05em] drop-shadow-[0_5px_18px_rgba(0,0,0,0.45)]"
        >
          JOIN THE HUB OF
          <br />
          UNLIMITED KREATIVITY.
        </motion.h1>

        {/* SUBTITLE */}
        
      </div>
    </section>
  );
}
