"use client";

import { motion } from "framer-motion";
import {
  Film,
  Monitor,
  Megaphone,
  Bot,
  BookOpen,
} from "lucide-react";

export default function ServicesSection() {

  return (

    <section
      id="services"
      className="relative px-6 sm:px-[7vw] py-20 md:py-32 lg:py-40 text-white"
    >

      
      <div className="max-w-6xl">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="inline-block rounded-full border border-orange-500/20 bg-orange-500/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400"
        >
          SERVICES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-10 max-w-5xl text-4xl sm:text-6xl lg:text-[7vw] font-black uppercase leading-[0.9] tracking-[-0.06em]"
        >

          Our Services

        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="mt-8 max-w-4xl text-sm sm:text-base lg:text-xl leading-relaxed text-white/70"
        >

          We create content for brands, businesses,
          creators, educators, and teams that want
          to communicate better, move faster,
          and scale smarter.

        </motion.p>

      </div>

      
      <div className="mt-24 space-y-8">

        
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">

          
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 sm:p-10 backdrop-blur-xl transition duration-700 hover:-translate-y-2 hover:border-orange-400/40 hover:shadow-[0_0_80px_rgba(255,120,0,0.12)]"
          >

            <div className="absolute inset-0 animate-[pulse_8s_ease-in-out_infinite] bg-[radial-gradient(circle_at_top_left,rgba(255,140,0,0.18),transparent_55%)] opacity-0 transition duration-700 group-hover:opacity-100" />
            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">

                  <Film size={30} />

                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">

                  SERVICE 01

                </p>

              </div>

              <h3 className="mt-6 sm:mt-10 text-3xl sm:text-5xl lg:text-6xl font-black leading-none transition duration-500 group-hover:translate-x-2">

                AI Filmmaking

              </h3>

              <p className="mt-4 sm:mt-6 lg:mt-8 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/70">

                Cinematic AI-powered films,
                product videos, visual storytelling,
                launch campaigns, branded reels,
                and premium content systems.

              </p>

              <div className="mt-6 sm:mt-12 grid grid-cols-2 gap-5 text-xs sm:text-sm lg:text-base text-white/75">

                <div className="space-y-4">

                  <p>• Scripts</p>
                  <p>• Storyboards</p>
                  <p>• Cinematic reels</p>

                </div>

                <div className="space-y-4">

                  <p>• AI visuals</p>
                  <p>• Brand storytelling</p>
                  <p>• Final edits</p>

                </div>

              </div>

            </div>

          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 sm:p-10 backdrop-blur-xl transition duration-700 hover:-translate-y-2 hover:border-orange-400/40 hover:shadow-[0_0_80px_rgba(255,120,0,0.12)]">

            <div className="absolute inset-0 animate-[pulse_8s_ease-in-out_infinite] bg-[radial-gradient(circle_at_top_left,rgba(255,140,0,0.18),transparent_55%)] opacity-0 transition duration-700 group-hover:opacity-100" />

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">

                  <Monitor size={30} />

                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">

                  SERVICE 02

                </p>

              </div>

              <h3 className="mt-6 sm:mt-10 text-3xl sm:text-5xl lg:text-6xl font-black leading-none transition duration-500 group-hover:translate-x-2">

                AI Ad Content

              </h3>

              <p className="mt-4 sm:mt-6 lg:mt-8 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/70">

                High-converting ad creatives,
                launch campaigns, product ads,
                platform-native content,
                and marketing assets.

              </p>

              <div className="mt-6 sm:mt-12 grid grid-cols-2 gap-5 text-xs sm:text-sm lg:text-base text-white/75">

                <div className="space-y-4">

                  <p>• Product ads</p>
                  <p>• Hook ideas</p>
                  <p>• Reels</p>

                </div>

                <div className="space-y-4">

                  <p>• Social campaigns</p>
                  <p>• Launch creatives</p>
                  <p>• Ad systems</p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[0.9fr_1.1fr]">

          
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 sm:p-10 backdrop-blur-xl transition duration-700 hover:-translate-y-2 hover:border-orange-400/40 hover:shadow-[0_0_80px_rgba(255,120,0,0.12)]"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">

                <Megaphone size={30} />

              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">

                SERVICE 03

              </p>

            </div>

            <h3 className="mt-6 sm:mt-10 text-3xl sm:text-5xl lg:text-6xl font-black leading-none transition duration-500 group-hover:translate-x-2">

              Marketing Systems

            </h3>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-white/70">

              Content ecosystems,
              storytelling systems,
              campaign strategy,
              and scalable brand presence.

            </p>

          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 sm:p-10 backdrop-blur-xl transition duration-700 hover:-translate-y-2 hover:border-orange-400/40 hover:shadow-[0_0_80px_rgba(255,120,0,0.12)]"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">

                <Bot size={30} />

              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">

                SERVICE 04

              </p>

            </div>

            <h3 className="mt-6 sm:mt-10 text-3xl sm:text-5xl lg:text-6xl font-black leading-none transition duration-500 group-hover:translate-x-2">

              Agentic AI
              <br />
              Production

            </h3>

            <p className="mt-4 sm:mt-6 lg:mt-8 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/70">

              Personalized AI production
              workflows designed around
              company goals, audiences,
              products, and brand systems.

            </p>

          </motion.div>

        </div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 sm:p-10 backdrop-blur-xl transition duration-700 hover:-translate-y-2 hover:border-orange-400/40 hover:shadow-[0_0_80px_rgba(255,120,0,0.12)]"
        >

          <div className="absolute inset-0 animate-[pulse_8s_ease-in-out_infinite] bg-[radial-gradient(circle_at_top_left,rgba(255,140,0,0.18),transparent_55%)] opacity-0 transition duration-700 group-hover:opacity-100" />
          <div className="relative z-10 flex flex-col gap-6 xl:gap-10 xl:flex-row xl:items-center xl:justify-between">

            <div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">

                <BookOpen size={30} />

              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">

                SERVICE 05

              </p>

              <h3 className="mt-6 sm:mt-10 text-3xl sm:text-5xl lg:text-6xl font-black leading-none transition duration-500 group-hover:translate-x-2">

                Adult Learning
                <br />
                Experiences

              </h3>

            </div>

            <div className="max-w-2xl">

              <p className="text-sm sm:text-base lg:text-xl leading-relaxed text-white/70">

                AI-assisted learning systems,
                instructional design,
                onboarding experiences,
                corporate learning,
                and cinematic educational content.

              </p>

              <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-5 text-xs sm:text-sm lg:text-base text-white/75">

                <div className="space-y-4">

                  <p>• Training modules</p>
                  <p>• Course scripts</p>
                  <p>• Onboarding systems</p>

                </div>

                <div className="space-y-4">

                  <p>• Instructional videos</p>
                  <p>• Learning storyboards</p>
                  <p>• Microlearning content</p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}