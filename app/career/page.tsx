"use client";

import Navbar from "@/app/components/layout/navbar";
import AtmosphereBackground from "@/app/components/background/AtmosphereBackground";
import { SceneProvider } from "@/app/Context/SceneContext";
import CareerHero from "@/app/components/career/CareerHero";
import CareerOpportunities from "@/app/components/career/CareerOpportunities";
import ContactSection from "@/app/components/section/ContactSection";

export default function CareerPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <AtmosphereBackground />

      <SceneProvider>
        <Navbar />
        <CareerHero />
        <CareerOpportunities />
        <ContactSection />
      </SceneProvider>
    </main>
  );
}
