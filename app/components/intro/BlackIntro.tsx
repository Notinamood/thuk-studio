"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BlackIntro() {

  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    console.log("BLACK INTRO MOUNTED");

    gsap.to(introRef.current, {
      opacity: 0,
      delay: 1,
      duration: 0.5,
      pointerEvents:"none",
      display:"none",
      ease: "linear",
    });

  }, []);

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-10000 bg-black "
    />
  );
}