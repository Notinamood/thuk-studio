"use client";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {

  return (

    <footer id="contact" className="relative z-20 mt-16 sm:mt-24 lg:mt-32 overflow-hidden border-t border-white/10 bg-black/40 px-6 sm:px-[8vw] py-16 sm:py-24 text-white backdrop-blur-xl">

      {/* TOP GLOW LINE */}
      <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-orange-500/40 to-transparent" />

      {/* BACKGROUND GLOW */}
      <div className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-3">

        {/* LEFT */}
        <div>

          {/* LOGO */}
          <div className="flex items-center gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl font-black text-black shadow-[0_0_40px_rgba(255,140,0,0.35)]">

              TH

            </div>

            <div>

              <h2 className="text-3xl font-black tracking-tight">

                THUK.Studio

              </h2>

              <p className="mt-1 text-sm uppercase tracking-[0.25em] text-orange-300/70">

                THE HUB OF UNLIMITED KREATIVITY

              </p>

            </div>

          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 sm:mt-10 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed text-white/60">

            THUK.Studio builds cinematic AI systems,
            premium visual storytelling,
            creative automation workflows,
            and scalable content experiences
            for modern brands and creators.

          </p>

        </div>

        {/* CENTER */}
        <div>

          <p className="mb-4 sm:mb-8 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">

            SERVICES

          </p>

          <div className="flex flex-wrap gap-4">

            {[
              "AI Filmmaking",
              "AI Ad Content",
              "Agentic AI Production",
              "Marketing Content",
              "Adult E-Learning",
              "Instructional Design",
            ].map((item, index) => (

              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/3 px-4 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold text-white/70 transition duration-300 hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-white"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div>

          <p className="mb-4 sm:mb-8 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">

            CONTACT

          </p>

          <div className="space-y-6">

            {/* PHONE */}
            <div className="flex items-center gap-5">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400">

                <Phone size={20} />

              </div>

              <p className="text-sm sm:text-base lg:text-lg text-white/70">

                +91 7439430174

              </p>

            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-5">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400">

                <Mail size={20} />

              </div>

              <p className="text-sm sm:text-base lg:text-lg text-white/70">

                hello@thuk.studio

              </p>

            </div>

            {/* ADDRESS */}
            <div className="flex items-center gap-5">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400">

                <MapPin size={20} />

              </div>

              <p className="text-sm sm:text-base lg:text-lg text-white/70">

                Kolkata, India

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="relative z-10 mt-12 lg:mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 text-center lg:flex-row">

        <p className="text-white/35">

          © 2026 THUK.Studio. All rights reserved.

        </p>

        <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.3em] text-white/20">

          DESIGNED FOR CINEMATIC AI STORYTELLING

        </p>

      </div>

    </footer>

  );

}