"use client";

import { motion } from "framer-motion";
import {
  Film,
  Monitor,
  Bot,
  BookOpen,
} from "lucide-react";

const services = [
  {
    icon: Film,
    title: "AI Films",
    desc: "Cinematic AI-powered films, product videos, brand stories, visual explainers, and reels.",
  },

  {
    icon: Monitor,
    title: "AI Ad Content",
    desc: "Short-form ad creatives, campaign hooks, product ads, launch videos, and platform-ready content.",
  },

  {
    icon: Bot,
    title: "Agentic AI Production",
    desc: "Personalized AI production workflows for companies, built around their brand voice and goals.",
  },

  {
    icon: BookOpen,
    title: "Learning Systems",
    desc: "Adult learning modules, instructional videos, corporate training systems, and educational experiences.",
  },
];

export default function ServicesGrid() {

  return (

    <section className="relative min-h-screen overflow-hidden px-6 sm:px-[8vw] py-20 md:py-32 lg:py-40 text-white">

      {/* HUGE BG TEXT */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">

        <h1 className="select-none text-[20vw] font-black uppercase tracking-[-0.08em] text-white/3">
          SYSTEMS
        </h1>

      </div>

      {/* MAIN LAYOUT */}
      <div className="relative z-10 w-full lg:w-[48%] lg:ml-auto flex flex-col">

        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-400">
            WHAT WE CREATE
          </p>

          <h2 className="text-4xl sm:text-6xl lg:text-[5vw] font-black uppercase leading-[0.9] tracking-[-0.06em]">

            ONE STUDIO.
            <br />
            MULTIPLE
            <br />
            AI SYSTEMS.

          </h2>

          <p className="mt-6 sm:mt-10 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/70">

            THUK.Studio combines cinematic storytelling,
            AI filmmaking, marketing systems, agentic AI,
            and educational experiences into one connected
            creative ecosystem.

          </p>

        </motion.div>

        {/* STACKED CARDS */}
        <div className="mt-12 lg:mt-24 flex flex-col gap-6 lg:gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group rounded-[32px] border border-white/10 bg-white/3 p-6 sm:p-10 backdrop-blur-xl transition duration-500 hover:border-orange-400/30 hover:bg-white/5"
              >

                {/* TOP */}
                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">

                    <Icon size={30} />

                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">

                    {service.title}

                  </h3>

                </div>

                {/* DESCRIPTION */}
                <p className="mt-4 sm:mt-6 lg:mt-8 max-w-xl text-sm sm:text-base leading-relaxed text-white/70">

                  {service.desc}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );

}