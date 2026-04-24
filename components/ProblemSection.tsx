"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const problems = [
  {
    id: 1,
    eyebrow: "MOTIVATION",
    title: "You start strong… then lose motivation",
    img: "/Img/callories_img1.webp",
  },
  {
    id: 2,
    eyebrow: "ROUTINE",
    title: "Workouts feel boring and repetitive",
    img: "/Img/callories_img2.webp",
  },
  {
    id: 3,
    eyebrow: "NUTRITION",
    title: "Diets are too strict to follow long term",
    img: "/Img/callories_img3.webp",
  },
  {
    id: 4,
    eyebrow: "SUPPORT",
    title: "No one keeps you truly accountable",
    img: "/Img/callories_img4.webp",
  },
  {
    id: 5,
    eyebrow: "OUTCOME",
    title: "No results quickly, so you give up",
    img: "/Img/motivation_img1.webp",
  },
];

export default function ProblemSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // --- Auto Swipe ---
  useEffect(() => {
    const timer = setInterval(() => {
      // eslint-disable-next-line react-hooks/immutability
      nextStep();
    }, 2000);
    return () => clearInterval(timer);
  }, [index]);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % problems.length);
  };

  const getVisibleIndices = () => {
    const prev = (index - 1 + problems.length) % problems.length;
    const next = (index + 1) % problems.length;
    return { prev, active: index, next };
  };

  const { prev, active, next } = getVisibleIndices();
  const visibleItems = [
    { ...problems[prev], pos: "prev" },
    { ...problems[active], pos: "active" },
    { ...problems[next], pos: "next" },
  ];

  return (
    <section className="bg-(--white-bg) py-24 md:py-32 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* --- Heading --- */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-(--white-text) leading-[0.85]">
            Why Most People <br />
            <span className="text-(--red) text-5xl md:text-7xl lg:text-8xl font-[FormulaBold] tracking-widest">
              Fail at Fitness
            </span>
          </h2>
        </div>

        {/* --- Carousel Display --- */}
        <div className="relative flex justify-center items-center h-[450px] md:h-[550px] w-full">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleItems.map((item) => {
              const isCenter = item.pos === "active";

              return (
                <motion.div
                  key={`${item.id}-${item.pos}`}
                  initial={{
                    opacity: 0,
                    x:
                      item.pos === "next"
                        ? 300
                        : item.pos === "prev"
                          ? -300
                          : 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: isCenter ? 1 : 0.3,
                    x:
                      item.pos === "next"
                        ? "110%"
                        : item.pos === "prev"
                          ? "-110%"
                          : "0%",
                    scale: isCenter ? 1.1 : 0.85,
                    zIndex: isCenter ? 20 : 10,
                  }}
                  exit={{
                    opacity: 0,
                    x: item.pos === "active" ? (direction > 0 ? -300 : 300) : 0,
                    scale: 0.8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                  }}
                  className={`absolute w-[85%] md:w-[400px] aspect-3/4 rounded-[2.5rem] overflow-hidden border border-black/5 shadow-2xl
                    ${item.pos === "prev" ? "hidden lg:block" : ""}
                    ${item.pos === "next" ? "hidden lg:block" : ""}
                  `}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover grayscale-40"
                  />

                  {/* Bottom Text Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                    <span className="text-(--red) text-[15px] font-black uppercase tracking-[0.3em] mb-2">
                      {item.eyebrow}
                    </span>
                    <h3 className="text-white text-xl md:text-4xl font-[FormulaBold] tracking-widest uppercase leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* --- Pagination Dots --- */}
        <div className="flex justify-center gap-3 mt-12 md:mt-20">
          {problems.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === index ? "w-12 bg-(--red)" : "w-3 bg-black/10"
              }`}
            />
          ))}
        </div>

        {/* --- Bottom Footer Quote --- */}
        <div className="mt-20 text-center px-4">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-[Helvetica] text-zinc-500 max-w-4xl mx-auto leading-tight italic">
            “So you quit. That’s exactly where{" "}
            <span className="text-(--red) font-[FormulaBold] tracking-widest">
              Callories
            </span>{" "}
            changes the game.”
          </h1>
        </div>
      </div>
    </section>
  );
}
