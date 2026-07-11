"use client";

export default function MovingStrip() {

  const items = [
    "AI FILMS",
    "AD CONTENT",
    "AGENTIC AI PRODUCTS",
    "BRAND STORYTELLING",
    "ADULT E-LEARNING",
    "PRODUCT VIDEOS",
    "SOCIAL MEDIA CAMPAIGNS",
    "INSTRUCTIONAL DESIGN",
    "MARKETING CREATIVES",
    "SOCIAL MEDIA CAMPAIGNS",
  ];

  return (

    <section id = "moving-strips"  className="relative overflow-hidden border-y border-white/10 bg-black/20 py-6 backdrop-blur-md">

      <div className="moving-strip flex whitespace-nowrap">

        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="mx-8 flex items-center text-sm font-bold uppercase tracking-[0.25em] text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
          >
            <span>{item}</span>

            <span className="ml-8 text-orange-400">/</span>
          </div>
        ))}

      </div>

    </section>

  );
}