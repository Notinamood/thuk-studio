"use client";

import { motion } from "framer-motion";


export default function HeroContent() {
  const ScrollToSection = (id:string)=>{
    document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"})
  }


  return (
    <section id="home" className="relative h-screen overflow-hidden text-white">

      {/* CENTER SPLIT TEXT */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none overflow-hidden">

        {/* TH */}
        <motion.h1
          initial={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: -500,
            opacity: 0,
            scale: 0.8,
          }}
          transition={{
            duration: 2,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.5,
          }}
          className="absolute text-[100px] sm:text-[150px] lg:text-[220px] font-black tracking-tight"
        >
          TH
        </motion.h1>

        {/* UK */}
        <motion.h1
          initial={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: 500,
            opacity: 0,
            scale: 0.8,
          }}
          transition={{
            duration: 2,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.5,
          }}
          className="absolute text-[100px] sm:text-[150px] lg:text-[220px] font-black tracking-tight"
        >
          UK
        </motion.h1>

      </div>
      {/* MAIN CONTENT */}
      <div className="relative z-10 flex h-full items-center lg:items-stretch">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 2,
            duration: 1.2,
          }}
          className="flex w-full lg:w-1/2 flex-col justify-center px-6 sm:px-12 lg:px-24"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-orange-400">
            THE HUB OF UNLIMITED KREATIVITY
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
            AI-Powered Creative Systems
          </h2>

          <p className="mt-6 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/70">
            THUK.Studio helps brands, companies, creators,
            and educators turn ideas into high-quality
            AI-powered films, ad content, marketing assets,
            agentic AI workflows, and adult learning experiences.
          </p>

          <div className="mt-10 flex gap-5">
            <button onClick={()=>{ScrollToSection("project")}} className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black hover:scale-105 transition">
              Start Project
            </button>

            <button onClick={()=>{ScrollToSection("showcase")}} className="rounded-full border border-white/20 px-8 py-4 hover:bg-white/10 transition">
              Explore Work
            </button>
          </div>
        </motion.div>

        
        
      </div>

      {/* BOTTOM GRADIENT */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-linear-to-tfrom-black to-transparent" />
    </section>
  );
}