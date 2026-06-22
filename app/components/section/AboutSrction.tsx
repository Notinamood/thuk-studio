"use client";

import { motion } from "framer-motion";

const uspCards = [
  {
    id: "USP 01",
    title: "AI-First Creative Speed",
    desc: "We reduce the time from idea to final content using AI-powered workflows for scripts, visuals, ads, videos, and campaigns.",
  },

  {
    id: "USP 02",
    title: "Brand-Personalized Production",
    desc: "We do not create generic AI content. Every output is designed around the company’s brand voice, audience, product, and marketing goals.",
  },

  {
    id: "USP 03",
    title: "One Studio, Multiple Outputs",
    desc: "From AI films and ad creatives to social media content, agentic AI workflows, and training modules, THUK helps companies build all major content formats under one creative system.",
  },
];

export default function AboutSection() {

  return (

    <section
      id="about"
      className="relative min-h-screen overflow-hidden px-6 sm:px-[8vw] py-20 md:py-32 lg:py-40 text-white"
    >

      {/* MAIN LAYOUT */}
      <div className="relative z-10 grid grid-cols-1 gap-20 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="mb-6 inline-block rounded-full border border-orange-400/20 bg-orange-500/10 px-5 py-2 text-sm uppercase tracking-[0.25em] text-orange-400">

            ABOUT

          </p>

          <h2 className="text-4xl sm:text-6xl lg:text-[6vw] font-black uppercase leading-[0.9] tracking-[-0.06em]">

            About
            <br />
            THUK.Studio

          </h2>

          <div className="mt-6 sm:mt-12 space-y-6 sm:space-y-10 text-sm sm:text-base lg:text-lg leading-relaxed text-white/70">

            <p>

              THUK.Studio is an AI-powered creative studio
              created to transform how content is imagined,
              designed, and produced.

            </p>

            <p>

              We believe great content starts with a powerful idea,
              but execution should not be slow, expensive,
              or complicated. That is why we use AI-assisted
              workflows to help brands move from idea to final
              output with speed, creativity, and consistency.

            </p>

            <p>

              Our work combines storytelling, AI filmmaking,
              visual design, marketing strategy, content production,
              agentic AI systems, and instructional design.
              Whether we are creating an AI film,
              a product ad, a campaign, a brand content system,
              or an e-learning module,
              our goal is to create content that is clear,
              engaging, scalable, and memorable.

            </p>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8">

          {uspCards.map((card, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/10 bg-white/3 p-6 sm:p-10 backdrop-blur-xl"
            >

              {/* USP ID */}
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">

                {card.id}

              </p>

              {/* TITLE */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">

                {card.title}

              </h3>

              {/* DESC */}
              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-white/70">

                {card.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}