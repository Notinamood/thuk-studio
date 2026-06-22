"use client";

import { motion } from "framer-motion";

const reviews = [

  {
    review:
      "THUK.Studio helped us turn a basic idea into a sharp AI-powered brand video. The process was fast, creative, and highly professional.",
    name: "Naveen S.",
    role: "Career Launch Founder",
  },

  {
    review:
      "Their ad content and campaign direction gave our brand a completely fresh visual identity. The execution felt modern and cinematic.",
    name: "Rahul K.",
    role: "Startup Founder",
  },

  {
    review:
      "The team simplified complex educational content into engaging visual learning systems. Everything felt structured and premium.",
    name: "Ananya R.",
    role: "Training Consultant",
  },

];

export default function ReviewsSection() {

  return (

    <section
      id="reviews"
      className="relative z-20 px-6 sm:px-[8vw] py-20 md:py-32 lg:py-40 text-white"
    >

      {/* TOP CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl"
      >

        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-400">

          TRUSTED EXPERIENCE

        </p>

        <h2 className="text-4xl sm:text-6xl lg:text-[7vw] font-black leading-[0.9] tracking-[-0.06em]">

          BUILT FOR
          <br />
          MODERN TEAMS
          <br />
          WITH AMBITION.

        </h2>

        <p className="mt-6 sm:mt-10 max-w-3xl text-sm sm:text-base lg:text-xl leading-relaxed text-white/65">

          THUK.Studio collaborates with founders,
          educators, creators, and modern businesses
          to build cinematic AI experiences,
          scalable content systems, and high-impact
          creative production.

        </p>

      </motion.div>

      {/* REVIEWS */}
      <div className="mt-12 lg:mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {reviews.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/3 p-6 sm:p-10 backdrop-blur-xl"
          >

            {/* HOVER GLOW */}
            <div className="absolute inset-0 bg-orange-500/0 opacity-0 transition duration-700 group-hover:bg-orange-500/10 group-hover:opacity-100" />

            {/* BIG QUOTE */}
            <div className="absolute right-6 top-4 text-6xl sm:text-8xl font-black text-white/4">

              “

            </div>

            {/* REVIEW */}
            <p className="relative z-10 text-sm sm:text-base lg:text-lg leading-relaxed text-white/75">

              {item.review}

            </p>

            {/* LINE */}
            <div className="mt-6 sm:mt-10 h-px w-full bg-white/10" />

            {/* USER */}
            <div className="mt-4 sm:mt-8">

              <h4 className="text-lg sm:text-xl font-bold">

                {item.name}

              </h4>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-orange-300/80">

                {item.role}

              </p>

            </div>

          </motion.div>

        ))}

      </div>

      {/* BOTTOM ATMOSPHERIC TEXT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.4,
        }}
        viewport={{ once: true }}
        className="mt-16 sm:mt-24 lg:mt-32 text-center"
      >

        <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.45em] text-white/30">

          CINEMATIC AI SYSTEMS • CREATIVE AUTOMATION • VISUAL STORYTELLING

        </p>

      </motion.div>

    </section>

  );

}