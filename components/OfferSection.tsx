"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const offerData = [
  {
    title: "General Fitness",
    sub: "Strength, conditioning & guided workouts",
    tag: "Burn calories without feeling like a workout",
    descPoints: ["Build muscle", "Improve endurance", "See real results"],
    img: "/Img/play_img6.webp",
  },
  {
    title: "Yoga",
    sub: "Stretch, recover, and build flexibility",
    tag: "Burn calories without feeling like a workout",
    descPoints: ["Feel lighter, calmer, and more balanced"],
    img: "/Img/play_img5.webp",
  },
  {
    title: "Zumba",
    sub: "Dance your way to fitness",
    tag: "Burn calories without feeling like a workout",
    descPoints: ["High-energy fun", "Burn serious calories"],
    img: "/Img/play_img1.webp",
  },
  {
    title: "Badminton",
    sub: "Fast-paced, addictive gameplay",
    tag: "Burn calories without feeling like a workout",
    descPoints: ["Cardio that doesn’t feel like cardio"],
    img: "/Img/offer_img2.webp",
  },
  {
    title: "Football",
    sub: "Team play with high intensity",
    tag: "Burn calories without feeling like a workout",

    descPoints: ["Build stamina, agility, and endurance"],
    img: "/Img/play_img4.webp",
  },
  {
    title: "Cricket",
    sub: "Familiar, social, and engaging",
    tag: "Burn calories without feeling like a workout",
    descPoints: ["Stay active while having fun"],
    img: "/Img/play_img2.webp",
  },
  {
    title: "Fitness Games",
    sub: "Circuits, relays & challenges",
    tag: "Burn calories without feeling like a workout",
    descPoints: ["Burn fat", "Playful competition", "High-intensity circuits"],
    img: "/Img/offer.webp",
  },
];

export default function OfferSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default first one open

  return (
    <section className="bg-(--dark-bg) py-20 md:py-32 px-4 md:px-6 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Header Area */}
      <div className="max-w-7xl mx-auto w-full mb-12 md:mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-[FormulaBold] uppercase text-(--dark-text) tracking-tight md:tracking-widest leading-none lg:-ml-15 text-center lg:text-left">
          Move.<span className="text-(--red)">Play.</span>Enjoy.
        </h2>
      </div>

      {/* --- RESPONSIVE EXPANDING ACCORDION --- */}
      <div className="flex flex-col lg:flex-row gap-3 w-full max-w-[1400px] h-[750px] md:h-[900px] lg:h-[550px]">
        {offerData.map((item, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              // Hover for Desktop, Click for Mobile/Tablet
              onMouseEnter={() => setExpandedIndex(index)}
              onClick={() => setExpandedIndex(index)}
              initial={false}
              animate={{
                flex: isExpanded ? 5 : 1,
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl bg-zinc-900 border border-white/5 shadow-2xl"
            >
              {/* Background Image */}
              <Image
                src={item.img}
                alt={item.title}
                fill
                className={`object-cover transition-all duration-700 ${
                  isExpanded
                    ? "scale-105 opacity-50 grayscale-0"
                    : "opacity-30 grayscale"
                }`}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent z-10" />

              {/* 1. TOP CONTENT: Title */}
              <div className="absolute top-5 left-5 md:top-8 md:left-8 z-20">
                <div
                  className={`
                    ${!isExpanded ? "lg:rotate-90 lg:origin-left lg:mt-24" : ""} 
                    transition-all duration-500
                  `}
                >
                  <h3
                    className={`font-[FormulaBold] uppercase tracking-widest text-white leading-none transition-all duration-500 ${
                      isExpanded
                        ? "text-2xl md:text-4xl lg:text-5xl"
                        : "text-lg md:text-xl lg:text-4xl whitespace-nowrap"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* 2. BOTTOM CONTENT: Detail */}
              <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8 z-20">
                <AnimatePresence mode="wait">
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "8vh", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2 md:space-y-3 pb-4">
                        <p className="text-white text-sm md:text-lg font-black uppercase tracking-widest leading-tight">
                          {item.sub}
                        </p>

                        <div className="flex items-center gap-2 md:gap-3">
                          <span className="w-1.5 h-1.5 bg-(--red) rounded-full shrink-0" />
                          <p className="text-(--dark-text) font-[Helvetica] tracking-widest text-[9px] md:text-xs uppercase font-bold leading-none">
                            {item.descPoints.join(", ")}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-white italic text-sm md:text-sm font-black uppercase tracking-widest leading-tight">
                            &quot;{item.tag}&quot;
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Marker logic - Hidden when expanded */}
                <motion.div
                  animate={{ opacity: isExpanded ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 md:w-30 h-[.5px] bg-white/20 rounded-full"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
