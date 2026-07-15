"use client";
import { useScene } from "@/app/Context/SceneContext";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Libre_Baskerville } from "next/font/google";
import Image from "next/image";
import { Menu, X } from "lucide-react";
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export default function Navbar() {

  const { setScene } = useScene();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const goToSection = (id: string) => {

    if (pathname !== "/") {
      setMenuOpen(false);
      router.push(id === "home" ? "/" : `/#${id}`);
      return;
    }

    const section =
      document.getElementById(id);

    if (!section) {
      console.log(`Section ${id} not found`);
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);

  };

  return (

    <>

      {/* TOP BAR */}
      <nav className="fixed top-0 left-0 z-100 w-full px-5 pt-0 pb-2 sm:px-8 sm:pt-0 sm:pb-4">

        <div className="flex items-center justify-between">

          <button
            onClick={() => {
              if (pathname === "/") {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              } else {
                router.push("/");
              }
            }}
            className="cursor-pointer transition hover:scale-105"
          >

            <Image
             src="/assets/logoF.jpeg"
  alt="THUK Studio"
  width={160}
  height={40}
  priority
  className="
    w-[145px]
    sm:w-[170px]
    lg:w-[195px]
    mt-1
    sm:mt-2
    lg:mt-2
    object-contain
    transition-transform
    duration-300
    hover:scale-105
  "
/>

          </button>

          <button
            onClick={() => {setMenuOpen(true); setScene("menu");}}
            className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] hover:scale-105 transition p-2"
            style={{ cursor: "pointer" }}
            aria-label="Open Menu"
          >

            <span className="hidden lg:block text-lg sm:text-2xl font-black uppercase tracking-[0.2em]">
              MENU
            </span>
            <span className="block lg:hidden">
              <Menu className="h-7 w-7 sm:h-8 sm:w-8" />
            </span>

          </button>

        </div>

      </nav>

      {/* MENU */}
      {menuOpen && (

        <div className="fixed inset-0 z-9999 overflow-hidden bg-[#050505]">
          {/* GRID */}
        <div
          className="
          absolute
          inset-0
          opacity-[0.06]
          pointer-events-none
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-size-[120px_120px]
          "
        />

        {/* ORANGE GLOW */}
        <div
          className="
          absolute
          right-[-15%]
          top-[-15%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-orange-500/15
          blur-[220px]
          pointer-events-none
          "
        />

        {/* RED GLOW */}
        <div
          className="
          absolute
          left-[-15%]
          bottom-[-15%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-red-500/10
          blur-[220px]
          pointer-events-none
          "
        />

          <button
            onClick={() => {setMenuOpen(false); setScene("home");}}
            className="
            absolute
            right-6
            top-6
            sm:right-10
            sm:top-10
            z-50
            text-white
            cursor-pointer
            hover:scale-105 transition
            p-2
          "
            aria-label="Close Menu"
          >

            <span className="hidden lg:block text-2xl font-black">
              CLOSE
            </span>
            <span className="block lg:hidden">
              <X className="h-7 w-7 sm:h-8 sm:w-8" />
            </span>

          </button>

          <div className="relative z-10 flex h-full flex-col justify-center gap-4 sm:gap-6 pl-8 sm:pl-16 lg:pl-24 font-poppins">

            <button
              onClick={() => goToSection("home")}
              className="text-left text-3xl sm:text-4xl lg:text-5xl font-black text-white hover:text-orange-400 hover:scale-105 transition"
              style={{ cursor: "pointer" }}
            >
              HOME
            </button>

            <button
              onClick={() => goToSection("about")}
              className="text-left text-3xl sm:text-4xl lg:text-5xl font-black text-white hover:text-orange-400 hover:scale-105 transition"
              style={{ cursor: "pointer" }}
            >
              ABOUT
            </button>

            <button
              onClick={() => goToSection("services")}
              className="text-left text-3xl sm:text-4xl lg:text-5xl font-black text-white hover:text-orange-400 hover:scale-105 transition"
              style={{ cursor: "pointer" }}
            >
              SERVICES
            </button>

            <button
              onClick={() => goToSection("showcase")}
              className="text-left text-3xl sm:text-4xl lg:text-5xl font-black text-white hover:text-orange-400 hover:scale-105 transition"
              style={{ cursor: "pointer" }}
            >
              SHOWCASE
            </button>

            <button
              onClick={() => goToSection("reviews")}
              className="text-left text-3xl sm:text-4xl lg:text-5xl font-black text-white hover:text-orange-400 hover:scale-105 transition"
              style={{ cursor: "pointer" }}
            >
              REVIEWS
            </button>

            <button
              onClick={() => goToSection("project")}
              className="text-left text-3xl sm:text-4xl lg:text-5xl font-black text-white hover:text-orange-400 hover:scale-105 transition"
              style={{ cursor: "pointer" }}
            >
              START A PROJECT
            </button>

            <button
              onClick={() => {
                setMenuOpen(false);
                router.push("/career");
              }}
              className="text-left text-3xl sm:text-4xl lg:text-5xl font-black text-white hover:text-orange-400 hover:scale-105 transition"
              style={{ cursor: "pointer" }}
            >
              CAREER
            </button>
            
            <button
              onClick={() => goToSection("contact")}
              className="text-left text-3xl sm:text-4xl lg:text-5xl font-black text-white hover:text-orange-400 hover:scale-105 transition"
              style={{ cursor: "pointer" }}
            >
              CONTACT
            </button>
       

          </div>

        </div>

      )}

    </>

  );

}