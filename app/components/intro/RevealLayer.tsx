"use client";
import Character from "@/app/components/3D/Character";  

import { useRef } from "react";

export default function RevealLayer() {

  const layerRef = useRef<HTMLDivElement>(null);

  return (

  <div
    ref={layerRef}
    className="relative h-screen w-full overflow-hidden"
  >
    <Character/>  
  </div>

  );
}