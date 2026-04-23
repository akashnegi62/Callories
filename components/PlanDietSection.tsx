"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import {
  FaTruckFast,
  FaUtensils,
  FaScaleBalanced,
  FaClock,
  FaMagnifyingGlassChart,
  FaSliders,
  FaPersonRunning,
  FaChartLine,
} from "react-icons/fa6";

const whatYouGet = [
  { icon: <FaUtensils />, text: "Meals designed per your personal diet plan" },
  {
    icon: <FaScaleBalanced />,
    text: "Fresh, healthy & portion-controlled food",
  },
  { icon: <FaTruckFast />, text: "Cooked to support fat loss or muscle gain" },
  { icon: <FaClock />, text: "Saves time and removes food confusion" },
];

const howItWorks = [
  {
    step: "01",
    title: "Assess",
    desc: "Understand your body, lifestyle & goals",
    pillText: "Body comp + expert consult",
    icon: <FaMagnifyingGlassChart />,
  },
  {
    step: "02",
    title: "Personalize",
    desc: "Get your custom plan",
    pillText: "Diet + fitness + mindset",
    icon: <FaSliders />,
  },
  {
    step: "03",
    title: "Play & Train",
    desc: "Show up, move, and enjoy the process",
    pillText: "Sports + yoga + zumba",
    icon: <FaPersonRunning />,
  },
  {
    step: "04",
    title: "Track & Transform",
    desc: "Stay consistent and see real results",
    pillText: "Weekly tracking + progress",
    icon: <FaChartLine />,
  },
];

export default function PlanDietSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // -- Train Line Animation Logic --
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 40%", "end 60%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-white font-sans overflow-hidden">
      {/* --- HERO SECTION --- */}
      <div className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-black">
              We Don’t Just Plan Your Diet. <br />
              <span className="text-[#FF5A22]">We Deliver It</span>
            </h2>
            <p className="text-xl font-bold text-zinc-900 uppercase tracking-tight">
              Too Busy and Struggling to Follow Your Diet? We’ll Handle It.
            </p>
            <p className="text-zinc-500 max-w-lg leading-relaxed">
              With Callories, you don’t have to think about what to eat — we
              prepare and deliver meals designed specifically for your biology
              and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whatYouGet.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 group cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-[#FF5A22] group-hover:bg-[#FF5A22] group-hover:text-white transition-colors duration-300 shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm font-bold text-zinc-800 uppercase leading-tight">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF5A22] text-white font-black uppercase tracking-widest px-10 py-5 rounded-full shadow-xl"
            >
              Join Meal Program
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1000"
            alt="Healthy Delivery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p className="text-zinc-900 font-bold uppercase italic text-sm md:text-base">
              &quot;This is the easiest way to stay on track — without relying
              on willpower.&quot;
            </p>
          </div>
        </motion.div>
      </div>

      {/* --- HOW IT WORKS: ZIG-ZAG SNAKE --- */}
      <div className="bg-black py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#FF5A22] text-xs font-black uppercase tracking-[0.4em] mb-4 block"
            >
              The Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white"
            >
              How It Works
            </motion.h2>
          </div>

          <div ref={timelineRef} className="relative">
            {/* --- Static Track Line --- */}
            <div className="absolute top-0 bottom-0 left-[39px] lg:left-1/2 w-[2px] bg-zinc-800 lg:-translate-x-1/2" />

            {/* --- Animated Train Line --- */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-[39px] lg:left-1/2 w-[2px] bg-[#FF5A22] origin-top z-10 lg:-translate-x-1/2"
            />

            <div className="space-y-24 lg:space-y-0">
              {howItWorks.map((item, idx) => {
                // Parity Logic: 0 & 2 = Left | 1 & 3 = Right
                const isRight = idx % 2 !== 0;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isRight ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`relative flex items-start w-full lg:h-[280px]
                      ${isRight ? "lg:flex-row" : "lg:flex-row-reverse"}
                    `}
                  >
                    {/* Circle (Station) */}
                    <div className="shrink-0 relative z-20 mt-1 lg:mt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                      <div className="w-20 h-20 rounded-full bg-zinc-950 border-4 border-zinc-800 flex items-center justify-center text-2xl font-black text-white group-hover:border-[#FF5A22] shadow-2xl">
                        {idx + 1}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-[#FF5A22]/20 blur-xl animate-pulse" />
                    </div>

                    {/* Content (Zig-Zag) */}
                    <div
                      className={`flex flex-col gap-3 pl-8 lg:pl-0 lg:w-1/2 
                      ${isRight ? "lg:pl-20 text-left items-start" : "lg:pr-20 text-right items-end"}
                    `}
                    >
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mt-4 lg:mt-0">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-[300px]">
                        {item.desc}
                      </p>

                      {/* Interactive Pill Tag */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="mt-4 flex items-center gap-3 px-5 py-3 rounded-full bg-zinc-900/50 border border-zinc-800 cursor-default"
                      >
                        <span className="text-[#FF5A22] text-lg shrink-0">
                          {item.icon}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                          {item.pillText}
                        </span>
                      </motion.div>
                    </div>

                    {/* Empty Space for Zig-Zag */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
