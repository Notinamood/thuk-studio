"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Film } from "lucide-react";
import Image from "next/image";

export interface JobCardProps {
  title: string;
  description: string;
  direction: "left" | "right";
  visualVariant: "film" | "engineering";
  onApply?: () => void;
  image?: string;
  badge?: string;
  subtitle?: string;
  sectionHeading?: string;
  bulletPoints?: string[];
  footerInfo?: string;
  buttonText?: string;
}

export default function JobCard({
  title,
  description,
  direction,
  visualVariant,
  onApply,
  image,
  badge,
  subtitle,
  sectionHeading,
  bulletPoints,
  footerInfo,
  buttonText,
}: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 18,
      }}
      className="group relative flex flex-col overflow-hidden rounded-[32px] border border-orange-500/25 bg-black/40 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/60 hover:shadow-[0_20px_50px_rgba(255,140,0,0.18)] min-h-[580px] sm:min-h-[640px]"
    >
      {/* ORANGE GLOW INTENSIFIES ON HOVER */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5 opacity-30 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0" />

      {/* LARGE IMAGE PLACEHOLDER (60% OF CARD HEIGHT) */}
      <div className="relative h-[60%] min-h-[320px] sm:min-h-[380px] w-full overflow-hidden border-b border-white/10 bg-gradient-to-br from-neutral-950 via-black to-neutral-900">
        {badge && (
          <div className="absolute top-5 left-5 z-20 rounded-full border border-orange-500/40 bg-black/75 px-4 py-1.5 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              {badge}
            </span>
          </div>
        )}

        {image ? (
          <div className="absolute inset-0 h-full w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
            {/* ABSTRACT CINEMATIC GRID BACKGROUND */}
            <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-size-[40px_40px]" />

            {/* AMBIENT ORANGE GLOW ORB */}
            <div className="absolute h-48 w-48 rounded-full bg-orange-500/25 blur-[70px] transition-all duration-500 group-hover:scale-125 group-hover:bg-orange-500/40" />

            {/* CINEMATIC ICON / VISUAL GRAPHIC */}
            <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl border border-orange-500/30 bg-orange-500/10 text-orange-400 shadow-[0_0_30px_rgba(255,140,0,0.25)] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
              {visualVariant === "film" ? (
                <Film className="h-10 w-10" />
              ) : (
                <Code2 className="h-10 w-10" />
              )}
            </div>
          </div>
        )}

        {/* BOTTOM GRADIENT FADE */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 to-transparent pointer-events-none z-10" />
      </div>

      {/* CARD CONTENT (40% OF CARD HEIGHT) */}
      <div className="relative z-10 flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-orange-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              {subtitle}
            </p>
          )}

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            {description}
          </p>

          {sectionHeading && bulletPoints && (
            <div className="mt-6 border-t border-white/10 pt-5">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
                {sectionHeading}
              </h4>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-white/80">
                {bulletPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 leading-snug"
                  >
                    <span className="text-orange-400 font-bold select-none">
                      •
                    </span>
                    <span>{point.replace(/^[•\-\*]\s*/, "")}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          {footerInfo && (
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-white/60">
              {footerInfo}
            </p>
          )}
          <button
            onClick={onApply}
            className="flex items-center gap-3 rounded-full border border-orange-500/40 bg-orange-500/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-300 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-500 group-hover:text-black cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
          >
            <span>{buttonText || "APPLY NOW"}</span>
            {!buttonText?.includes("→") && (
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
