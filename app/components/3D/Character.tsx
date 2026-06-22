"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group, Color } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SpiderMan() {

  const { scene } = useGLTF("/models/spiderman.glb");

  const modelRef = useRef<Group>(null);

  
  const rotationY = useRef(0);

  const targetRotation = useRef(0)

  const initialX = 4;

  const targetX = useRef(initialX);

  const currentX = useRef(initialX);

  const targetZ = useRef(0);

  const currentZ = useRef(0);


  const currentRotation = useRef(0);


   
  useEffect(() => {

  const handleScroll = () => {

    rotationY.current =
      -window.scrollY * 0.0015;

  };

  window.addEventListener(
    "scroll",
    handleScroll
  );

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );

}, []);


 
 useEffect(() => {

  const tl = gsap.timeline({

    scrollTrigger: {

      trigger: "body",

      start: "top top",

      end: "bottom bottom",

      scrub: 6,

    },

  });

 
  tl.to(targetX, {

    current: -8,

    duration: 1,

  });

  tl.to(targetZ, {

  current: 2,

  duration: 1,

}, "<");

  
  tl.to(targetX, {

    current: 7,

    duration: 1,

  });

  tl.to(targetZ, {

  current: -1,

  duration: 1,

}, "<");


  tl.to(targetX, {

    current: -6,

    duration: 1,

  });

  tl.to(targetZ, {

  current: 3,

  duration: 1,

}, "<");

}, []);
  


  useFrame((state) => {

    if (!modelRef.current) return;

  currentRotation.current +=
  (targetRotation.current - currentRotation.current) * 0.03;

  modelRef.current.rotation.y =
    currentRotation.current +
    rotationY.current;
  
  currentX.current +=
    (targetX.current - currentX.current) * 0.004;

    modelRef.current.position.x =
      currentX.current;
    
    currentZ.current +=
      (targetZ.current - currentZ.current) * 0.01;
    modelRef.current.position.z =
      currentZ.current;
   
    modelRef.current.position.y =
      -7.9 +
      Math.sin(
        state.clock.elapsedTime * 0.8
      ) * 0.15;

  });

  return (

    <primitive
      ref={modelRef}
      object={scene}
      scale={68}
    />

  );

}

function Scene() {

  useFrame((state) => {

    state.gl.setClearColor(
      new Color("black"),
      0
    );

    // CAMERA
    state.camera.position.x = 0;

    state.camera.position.y = 0;

    state.camera.position.z = 15;

    // LOOK TARGET
    state.camera.lookAt(
      0,
      -0.5,
      0
    );

  });

  return (

    <>

     
      <ambientLight intensity={0.25} />

      
      <directionalLight
        position={[5, 5, 5]}
        intensity={5}
        color={"#ffffff"}
      />

     
      <directionalLight
        position={[-5, 2, -5]}
        intensity={2.5}
        color={"#3b82f6"}
      />

      <pointLight
        position={[0, -2, 3]}
        intensity={8}
        color={"#ef4444"}
      />

      <SpiderMan />

    </>

  );

}

export default function Character() {

  return (

    <div id = "spiderman-layer" className="fixed inset-0 -z-10 pointer-events-none">

      <Canvas
        camera={{
          position: [0, 0, 15],
          fov: 45,
        }}
        gl={{
          alpha: true,
          antialias: true,
        }}
        style={{
          background: "transparent",
        }}
      >

        <Scene />

      </Canvas>

    </div>

  );

}

useGLTF.preload("/models/spiderman.glb");