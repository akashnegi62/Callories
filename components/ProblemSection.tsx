"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";

// data
const problems = [
  {
    id: 1,
    eyebrow: "MOTIVATION",
    darkText: "You start strong…",
    lightText: "then lose motivation",
    video: "/hero-video.mp4",
    bgImage: "/assets/wireframe-1.png",
  },
  {
    id: 2,
    eyebrow: "ROUTINE",
    darkText: "Workouts feel",
    lightText: "boring and repetitive",
    video: "/hero-video1.mp4",
    bgImage: "/assets/wireframe-2.png",
  },
  {
    id: 3,
    eyebrow: "NUTRITION",
    darkText: "Diets are too",
    lightText: "strict to follow",
    video: "/hero-video.mp4",
    bgImage: "/assets/wireframe-3.png",
  },
  {
    id: 4,
    eyebrow: "SUPPORT",
    darkText: "No one keeps you",
    lightText: "accountable",
    video: "/hero-video2.mp4",
    bgImage: "/assets/wireframe-4.png",
  },
  {
    id: 5,
    eyebrow: "OUTCOME",
    darkText: "No results —",
    lightText: "so you give up",
    video: "/hero-video.mp4",
    bgImage: "/assets/wireframe-5.png",
  },
];

export default function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      Math.floor(latest * problems.length),
      problems.length - 1,
    );
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  const activeData = problems[activeIndex];

  return (
    // Increased height to 700vh for smoother, longer scroll transitions
    <section
      ref={containerRef}
      className="relative bg-[#E6E6E6] text-zinc-950 min-h-[700vh] font-sans pb-50"
    >
      {/* Texture overlay (Optional) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/stardust.png")',
        }}
      ></div>

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between px-4 py-12 md:py-16">
        {/* Upper Heading */}
        <div className="w-full text-center px-4 shrink-0 z-20">
          <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-black uppercase tracking-tighter text-zinc-950 leading-[0.85] max-w-5xl mx-auto drop-shadow-sm">
            Why Most People
            <br />
            Fail at Fitness
          </h2>
        </div>

        {/* Video Container */}
        <div className="w-[80%] h-[25vh] md:h-[70vh] shrink-0 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`video-${activeData.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100%", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full relative overflow-hidden bg-black shadow-xl"
            >
              <video
                src={activeData.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-80"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Single Card Container - Recreated based on your new elegant screenshot */}
        <div className="relative w-85 md:w-95 h-105 md:h-115 shrink-0 z-20 -mt-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={`card-${activeData.id}`}
              initial={{ opacity: 0, x: 200, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -200, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Card UI */}
              <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-10 flex flex-col relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-full h-full overflow-hidden">
                {/* Small Header (e.g. PRODUCTION) */}
                <span className="text-[11px] md:text-xs uppercase text-zinc-400 tracking-[0.2em] font-semibold mb-6 z-10">
                  {activeData.eyebrow}
                </span>

                {/* Large Elegant Two-Tone Text */}
                <h3 className="text-3xl md:text-[2.5rem] font-serif leading-[1.1] tracking-tight z-10">
                  <span className="text-zinc-900">{activeData.darkText}</span>
                  <br />
                  <span className="text-zinc-400">{activeData.lightText}</span>
                </h3>

                {/* Isometric Background Image */}
                <div className="absolute bottom-4 right-4 w-[90%] h-[55%] z-0 pointer-events-none">
                  <Image
                    src={activeData.bgImage}
                    alt="Illustration"
                    fill
                    className="object-contain object-bottom right-0 opacity-90"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Line */}
        <div className="w-full text-center px-4 shrink-0 mt-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium text-zinc-800 max-w-5xl mx-auto leading-tight tracking-tight">
            “So you quit. That’s exactly where Callories changes the game.”
          </h1>
        </div>
      </div>
    </section>
  );
}
