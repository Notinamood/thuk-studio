"use client";

import { motion } from "framer-motion";

const projects = [

  {
    title: "AI Film Production",
    category: "Cinematic AI Storytelling",
    desc: "AI-powered cinematic storytelling systems for brands, campaigns, and creators.",
    image: "/showcase/showcase1.jpg",
  },

  {
    title: "Agentic AI Dashboard",
    category: "AI Workflow System",
    desc: "Custom AI production systems that automate campaign ideation, scripts, visuals, and workflows.",
    image: "/showcase/showcase2.jpg",
  },

  {
    title: "Luxury Product Campaign",
    category: "Commercial Visual Direction",
    desc: "Premium ad campaigns blending cinematic lighting, AI visuals, and modern brand storytelling.",
    image: "/showcase/showcase3.jpg",
  },

];

export default function ShowcaseSection() {

  return (

    <section
      id="showcase"
      className="relative px-6 sm:px-[8vw] py-20 md:py-32 lg:py-40 text-white"
    >

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl"
      >

        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-400">
          SHOWCASE
        </p>

        <h2 className="text-4xl sm:text-6xl lg:text-[7vw] font-black leading-[0.9] tracking-[-0.06em]">

          CREATIVE
          <br />
          SYSTEMS
          <br />
          IN MOTION.

        </h2>

        <p className="mt-6 sm:mt-10 max-w-3xl text-sm sm:text-base lg:text-xl leading-relaxed text-white/70">

          A glimpse into the cinematic AI workflows,
          visual systems, campaign structures, and
          production experiences built by THUK.Studio.

        </p>

      </motion.div>

      {/* PROJECTS */}
      <div className="mt-16 sm:mt-24 lg:mt-32 flex flex-col gap-16 sm:gap-28 lg:gap-40">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className={`group grid items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2 ${
              index % 2 !== 0 ? "lg:grid-flow-dense" : ""
            }`}
          >

            {/* IMAGE */}
            <div
              className={`relative overflow-hidden rounded-[24px] sm:rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl ${
                index % 2 !== 0 ? "lg:col-start-2" : ""
              }`}
            >

              {/* GLOW */}
              <div className="absolute inset-0 bg-orange-500/10 opacity-0 transition duration-700 group-hover:opacity-100" />

              <img
                className="h-[300px] sm:h-[400px] lg:h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            {/* CONTENT */}
            <div
              className={`${
                index % 2 !== 0 ? "lg:col-start-1" : ""
              }`}
            >

              <p className="text-sm uppercase tracking-[0.3em] text-orange-400">

                {project.category}

              </p>

              <h3 className="mt-3 sm:mt-5 text-2xl sm:text-4xl lg:text-5xl font-black leading-tight">

                {project.title}

              </h3>

              <p className="mt-4 sm:mt-6 lg:mt-8 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/70">

                {project.desc}

              </p>

              <button className="mt-6 sm:mt-8 lg:mt-10 rounded-full border border-white/15 px-8 py-4 transition duration-500 hover:border-orange-400 hover:bg-orange-500 hover:text-black">

                View Project

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

}