"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Personalized for You.",
    points: [
      "Body composition analysis & progress tracking",
      "Personal dietician plan",
      "1:1 mindset & psychology support",
    ],
    imageUrl: "/Img/offer_img1.webp",
    imageTag: "1-on-1 coaching",
  },
  {
    title: "Play",
    points: [
      "Badminton, football, cricket, yoga, zumba & fun fitness games",
      "Burn calories without feeling like a workout",
    ],
    imageUrl: "/Img/offer_img2.webp",
    imageTag: "Active Play",
  },
  {
    title: "Train",
    points: [
      "Structured fitness, strength & expert coaching",
      "Designed for real, visible results",
    ],
    imageUrl: "/Img/offer_img3.webp",
    imageTag: "Pro Training",
  },
  {
    title: "Belong",
    points: [
      "A supportive community, events & group energy",
      "Stay consistent because you’re not doing it alone",
    ],
    imageUrl: "/Img/offer_img4.webp",
    imageTag: "Lifelong Support",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="activities"
      className="py-32 bg-(--dark-bg) text-(--dark-text) px-6 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* --- NEW HEADING --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 md:mb-32"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] max-w-4xl">
            Meet Callories -{" "}
            <span className="text-(--red) font-[FormulaBold] tracking-wider">
              A smarter, more enjoyable way to get fit
            </span>{" "}
            — combining play, science, and community
          </h2>
        </motion.div>

        <div className="space-y-40 md:space-y-64">
          {solutions.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between gap-16 md:gap-32 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* --- Text Side --- */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-1/2 space-y-10"
                >
                  {/* High-Impact Title */}
                  <h3 className="text-5xl md:text-7xl font-[FormulaBold] uppercase tracking-wide leading-[0.9] max-w-md">
                    {item.title}
                  </h3>

                  {/* List of Points (Always Left Aligned) */}
                  <div className="flex flex-col gap-6">
                    {item.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-4">
                        <span className="w-2 h-2 bg-(--red) rounded-full mt-2 shrink-0" />
                        <span className="text-sm md:text-base font-bold uppercase tracking-widest leading-snug max-w-sm">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* --- Image Side --- */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-1/2 relative group"
                >
                  <div className="relative aspect-4/5 md:aspect-4/5 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Top Pill Tag */}
                    <div className="absolute top-8 left-8">
                      <div className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                        {item.imageTag}
                      </div>
                    </div>

                    {/* Branding SVG Overlay */}
                    <div className="absolute -bottom-6 -right-6 pointer-events-none">
                      <svg width="180" height="180" viewBox="0 0 100 100">
                        <circle
                          cx="40"
                          cy="60"
                          r="25"
                          stroke="#e73139"
                          strokeWidth="1"
                          fill="none"
                        />
                        <circle
                          cx="60"
                          cy="40"
                          r="25"
                          stroke="#e73139"
                          strokeWidth="1"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
