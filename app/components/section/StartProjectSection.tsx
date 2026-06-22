"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function StartProjectSection() {

  return (

    <section
      id="project"
      className="relative z-20 px-4 sm:px-[8vw] py-20 md:py-32 lg:py-40 text-white"
    >

      {/* MAIN CONTAINER */}
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/0.03 backdrop-blur-xl">

        {/* GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,140,0,0.18),transparent_45%)]" />

        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-10 p-6 sm:p-10 lg:p-16"
          >

            <p className="mb-6 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">

              START A PROJECT

            </p>

            <h2 className="text-4xl sm:text-6xl lg:text-[6vw] font-black leading-[0.92] tracking-[-0.06em]">

              Have an idea ?
              <br />
              Let&apos;s SPIT it into
              <br />
              Reality. Let us take
              <br />
              care of the rest!

            </h2>

            <p className="mt-6 sm:mt-10 max-w-xl text-sm sm:text-base lg:text-xl leading-relaxed text-white/65">

              Whether you need AI films,
              cinematic ads, content systems,
              agentic AI workflows, or learning
              experiences — THUK.Studio helps
              transform ideas into scalable,
              high-impact creative execution.

            </p>

            {/* CONTACT INFO */}
            <div className="mt-8 sm:mt-16 space-y-4 sm:space-y-5">

              {/* PHONE */}
              <div className="flex items-center gap-3 sm:gap-5 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400">

                  <Phone size={24} />

                </div>

                <div>

                  <p className="text-sm uppercase tracking-[0.2em] text-white/40">

                    PHONE

                  </p>

                  <h4 className="mt-1 text-sm sm:text-lg lg:text-xl font-semibold">

                    +91 7439430174

                  </h4>

                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3 sm:gap-5 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400">

                  <Mail size={24} />

                </div>

                <div>

                  <p className="text-sm uppercase tracking-[0.2em] text-white/40">

                    EMAIL

                  </p>

                  <h4 className="mt-1 text-sm sm:text-lg lg:text-xl font-semibold">

                    hello@thuk.studio

                  </h4>

                </div>

              </div>

              {/* ADDRESS */}
              <div className="flex items-center gap-3 sm:gap-5 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400">

                  <MapPin size={24} />

                </div>

                <div>

                  <p className="text-sm uppercase tracking-[0.2em] text-white/40">

                    ADDRESS

                  </p>

                  <h4 className="mt-1 text-sm sm:text-lg lg:text-xl font-semibold">

                    Kolkata, India

                  </h4>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-10 p-6 sm:p-10 lg:p-16"
          >

            <div className="rounded-[32px] border border-white/10 bg-black/30 p-6 sm:p-10 backdrop-blur-2xl">

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-white/70">

                    Name

                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="h-14 sm:h-16 w-full rounded-2xl border border-white/10 bg-black/60 px-4 sm:px-6 text-base sm:text-lg outline-none transition focus:border-orange-400 focus:bg-black"
                  />

                </div>

                <div>

                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-white/70">

                    Email

                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="h-14 sm:h-16 w-full rounded-2xl border border-white/10 bg-black/60 px-4 sm:px-6 text-base sm:text-lg outline-none transition focus:border-orange-400 focus:bg-black"
                  />

                </div>

              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-white/70">

                    Phone

                  </label>

                  <input
                    type="text"
                    placeholder="Your phone number"
                    className="h-14 sm:h-16 w-full rounded-2xl border border-white/10 bg-black/60 px-4 sm:px-6 text-base sm:text-lg outline-none transition focus:border-orange-400 focus:bg-black"
                  />

                </div>

                <div>

                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-white/70">

                    Project Type

                  </label>

                  <select className="h-14 sm:h-16 w-full rounded-2xl border border-white/10 bg-black/60 px-4 sm:px-6 text-base sm:text-lg outline-none transition focus:border-orange-400">

                    <option>AI Film</option>
                    <option>AI Ad Content</option>
                    <option>Agentic AI Workflow</option>
                    <option>Learning System</option>
                    <option>Brand Content</option>

                  </select>

                </div>

              </div>

              <div className="mt-6">

                <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-white/70">

                  Project Brief

                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-2xl border border-white/10 bg-black/60 p-4 sm:p-6 text-base sm:text-lg outline-none transition focus:border-orange-400 focus:bg-black"
                />

              </div>

              {/* BUTTON */}
              <button className="mt-8 flex h-14 sm:h-16 w-full items-center justify-center rounded-2xl bg-orange-500 text-lg sm:text-xl font-bold text-black transition duration-300 hover:scale-[1.02] hover:bg-orange-400">

                Start Project

              </button>

              {/* BOTTOM TEXT */}
              <p className="mt-6 text-center text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.2em] text-white/30">

                CINEMATIC STORYTELLING • AI SYSTEMS • CREATIVE EXECUTION

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );

}