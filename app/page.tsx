"use client";
import Navbar from "@/app/components/layout/navbar";
import SmoothScroll from "@/app/components/SmoothScroll";
import BlackIntro from "@/app/components/intro/BlackIntro";
import HeroContent from "@/app/components/hero/herocontent";
import RevealLayer from "@/app/components/intro/RevealLayer";
import ServicesGrid from "@/app/components/section/NextExperience";
import MovingStrip from "@/app/components/section/MovingStrips";
import StatsShowcase from "@/app/components/section/StatsSection";
import AboutSection from "@/app/components/section/AboutSrction";
import ServiceSection from "@/app/components/section/ServiceSection";
import ShowcaseSection from "@/app/components/section/ShowcaseSection";
import TestimonialSection from "@/app/components/section/TestimonialSection";
import StartProjectSection from "@/app/components/section/StartProjectSection";
import ContactSection from "@/app/components/section/ContactSection";
import Character from "@/app/components/3D/Character";
import { SceneProvider } from "@/app/Context/SceneContext";
import { useEffect, useRef } from "react";



export default function Home() {
const orangeRef = useRef<HTMLDivElement>(null);
const redRef = useRef<HTMLDivElement>(null);
const centerRef = useRef<HTMLDivElement>(null);
useEffect(() => {

  const handleMouseMove = (e: MouseEvent) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 400;
    const y = (e.clientY / window.innerHeight - 0.5) * 400;

    if (orangeRef.current) {
      orangeRef.current.style.transform =
        `translate(${x}px, ${y}px)`;
    }

    if (redRef.current) {
      redRef.current.style.transform =
        `translate(${-x}px, ${-y}px)`;
    }

    if (centerRef.current) {
      centerRef.current.style.transform =
        `translate(-50%, -50%) translate(${x * 0.5}px, ${y * 0.5}px)`;
    }

  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => window.removeEventListener("mousemove", handleMouseMove);

}, []);
  return (

    <main className="relative overflow-hidden">
      <div className = "fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 opacity-[0.5]
                       bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
                       bg-size-[80px_80px]"></div>
        <div ref ={orangeRef} className="absolute right-[-10%] top-[-10%]">
          <div className="atmosphere-orange h-[700px] w-[700px] rounded-full bg-orange-500/40 blur-[220px]"></div>
        </div>
        <div ref={redRef} className="absolute left-[-10%] bottom-[-10%]">
          <div className="atmosphere-red h-[600px] w-[600px] rounded-full bg-red-600/30 blur-[220px]"></div>
        </div>
        <div ref={centerRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
         <div className="atmosphere-center h-[800px] w-[800px] rounded-full bg-orange-400/10 blur-[260px]"></div>

        </div>


      </div>
  
  <SceneProvider> 
     <BlackIntro />

     <SmoothScroll />

     <Character/>

     <Navbar />

     <HeroContent/>

     <MovingStrip/> 
     
     <RevealLayer/>
     
     <ServicesGrid/>
     
     <StatsShowcase/>

     <AboutSection/>

     <ServiceSection/>

     <ShowcaseSection/>

     <TestimonialSection/>

     <StartProjectSection/>

     <ContactSection/>
  
  </SceneProvider> 
     
    </main>

  );
}