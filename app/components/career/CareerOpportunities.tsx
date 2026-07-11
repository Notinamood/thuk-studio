"use client";

import JobCard from "./JobCard";

export default function CareerOpportunities() {
  return (
    <section className="relative z-10 px-6 sm:px-[8vw] pb-24 sm:pb-32 lg:pb-40">
      {/* SECTION HEADER */}
      <div className="mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white drop-shadow-[0_5px_18px_rgba(0,0,0,0.45)]">
          OPEN OPPORTUNITIES
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
          Explore our current openings below.
        </p>
      </div>

      {/* RESPONSIVE TWO-COLUMN LAYOUT ON DESKTOP, ONE COLUMN ON MOBILE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        <JobCard
          image="/assets/kapda_lab.jpeg"
          badge="Hiring"
          title="Campus Ambassador Program"
          subtitle="Kapda Lab · 2026–27"
          description="Become the face of Kolkata's streetwear movement."
          sectionHeading="What You'll Do"
          bulletPoints={[
            "Represent Kapda Lab in your college",
            "Build a campus streetwear community",
            "Promote new drops & launches",
            "Drive sales through your network",
            "Contribute to events & campaigns",
            "Grow with an emerging fashion brand",
          ]}
          footerInfo="Kolkata Colleges"
          buttonText="Apply Now →"
          direction="left"
          visualVariant="film"
          onApply={() => {
            window.location.href =
              "https://kapdalab.com/pages/work";
          }}
        />

        <JobCard
          image="/assets/calcutta_nerdsjpeg.jpeg"
          badge="Community"
          title="Calcutta Nerds"
          subtitle="Builder's Community"
          description="A community of dreamers, builders, hackers, and engineers creating the future together in Kolkata."
          sectionHeading="Why Join?"
          bulletPoints={[
            "Meet ambitious builders & creators",
            "Build real-world projects together",
            "Exchange ideas & technical knowledge",
            "Collaborate on startups & side projects",
            "Attend community meetups & hack sessions",
            "Grow with Kolkata's builder ecosystem",
          ]}
          footerInfo="Kolkata, India · Open Community · Free to Join"
          buttonText="Join Community →"
          direction="right"
          visualVariant="engineering"
          onApply={() => {
            window.location.href =
              "https://docs.google.com/forms/d/e/1FAIpQLSeZ86zcIwFude7ur20fIH8jl6Mndkqd32XF8OuCekGrakvEfQ/viewform";
          }}
        />
      </div>
    </section>
  );
}
