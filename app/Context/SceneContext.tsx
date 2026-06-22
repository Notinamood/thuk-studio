"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

export type SceneType =
  | "menu"
  | "home"
  | "about"
  | "services"
  | "showcase"
  | "reviews"
  | "project"
  | "contact";

interface SceneContextType {
  scene: SceneType;
  setScene: React.Dispatch<React.SetStateAction<SceneType>>;
}

const SceneContext = createContext<SceneContextType | null>(null);

export function SceneProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [scene, setScene] =
    useState<SceneType>("home");

  return (
    <SceneContext.Provider
      value={{ scene, setScene }}
    >
      {children}
    </SceneContext.Provider>
  );
}

export function useScene() {

  const context = useContext(SceneContext);

  if (!context) {
    throw new Error(
      "useScene must be used inside SceneProvider"
    );
  }

  return context;
}