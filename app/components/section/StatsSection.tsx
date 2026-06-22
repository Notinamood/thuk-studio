"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10x",
    title: "Faster Content Production",
    desc: "THUK helps companies move from idea to final content faster using AI-powered workflows for scripts, storyboards, visuals, videos, ads, and campaigns.",
  },

  {
    number: "360°",
    title: "Creative Content Support",
    desc: "From AI films and product ads to social media creatives and brand storytelling, we provide complete content solutions under one studio.",
  },

  {
    number: "24/7",
    title: "Agentic AI Workflow",
    desc: "We build personalized AI production systems that support companies with content ideas, ad hooks, campaign concepts, and brand-specific creative outputs anytime.",
  },
];

export default function StatsShowcase() {

  return (

    <section
      id="stats-showcase"
      className="relative min-h-screen overflow-hidden px-6 sm:px-[8vw] py-20 md:py-32 lg:py-40 text-white"
    >

      {/* MAIN LAYOUT */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen items-center gap-12 lg:gap-20">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full lg:max-w-2xl"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-400">
            WHY THUK
          </p>

          <h2 className="text-4xl sm:text-6xl lg:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.06em]">

            CREATE
            <br />
            FASTER.
            <br />
            SCALE
            <br />
            SMARTER.

          </h2>

          <p className="mt-6 sm:mt-10 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/70">

            THUK.Studio combines cinematic storytelling,
            AI production systems, marketing strategy,
            and intelligent automation to help modern
            brands create content at scale.

          </p>

        </motion.div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-auto lg:ml-auto flex flex-col gap-6 lg:gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="w-full max-w-[520px] rounded-[32px] border border-white/10 bg-white/3 p-6 sm:p-10 backdrop-blur-xl"
            >

              {/* NUMBER */}
              <h3 className="text-5xl sm:text-7xl lg:text-[96px] font-black leading-none tracking-[-0.06em] text-orange-400">

                {item.number}

              </h3>

              {/* TITLE */}
              <h4 className="mt-5 text-xl sm:text-2xl lg:text-3xl font-bold">

                {item.title}

              </h4>

              {/* DESC */}
              <p className="mt-3 sm:mt-5 text-sm sm:text-base leading-relaxed text-white/70">

                {item.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}