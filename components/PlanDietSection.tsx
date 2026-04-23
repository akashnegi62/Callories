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

  // -- Scroll logic for the "Train" line animation --
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
    <section className="bg-(--white-bg) font-sans overflow-hidden">
      {/* --- DIET SECTION --- */}
      <div className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-(--white-text)">
              We Don’t Just Plan Your Diet. <br />
              <span className="text-(--red)">We Deliver It</span>
            </h2>
            <p className="text-2xl font-[FormulaBold] text-(--white-text) uppercase tracking-wider">
              Too Busy and Struggling to Follow Your Diet? We’ll Handle It.
            </p>
            <p className="text-(--white-text) font-[Helvetica] max-w-lg leading-relaxed">
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
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-(--red) group-hover:text-white transition-colors duration-300 shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm font-[Helvetica] text-(--white-text) uppercase leading-tight">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-(--red) text-(--dark-text) font-black uppercase tracking-widest px-10 py-5 rounded-full shadow-xl"
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
            src="/Img/diet_img1.webp"
            alt="Healthy Delivery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute bottom-8 left-8 right-8 bg-(--white-bg) backdrop-blur-md p-6 rounded-2xl border border-zinc-100 shadow-lg">
            <p className="text-(--white-text) font-[Helvetica] uppercase italic text-sm md:text-base">
              &quot;This is the easiest way to stay on track — without relying
              on willpower.&quot;
            </p>
          </div>
        </motion.div>
      </div>

      {/* --- HOW IT WORKS --- */}
      <div className="bg-(--white-bg) py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-(--red) text-xs font-[Helvetica] uppercase tracking-[0.4em] mb-4 block"
            >
              The Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-(--white-text)"
            >
              How It Works
            </motion.h2>
          </div>

          <div ref={timelineRef} className="relative">
            {/* --- Static Track Line (Lighter for White Theme) --- */}
            <div className="absolute top-0 bottom-0 left-[39px] lg:left-1/2 w-[2px] bg-(--dark-bg) lg:-translate-x-1/2" />

            {/* --- Animated Train Line --- */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-[39px] lg:left-1/2 w-[2px] bg-(--red) origin-top z-10 lg:-translate-x-1/2"
            />

            <div className="space-y-24 lg:space-y-0">
              {howItWorks.map((item, idx) => {
                // Parity Logic: 1 & 3 = Right (Personalize & Transform)
                const isRight = idx % 2 !== 0;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`relative flex items-start w-full lg:h-[300px] group
                      ${isRight ? "lg:flex-row" : "lg:flex-row-reverse"}
                    `}
                  >
                    {/* Circle (Station) */}
                    <div className="shrink-0 relative z-20 mt-1 lg:mt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                      <div className="w-20 h-20 rounded-full bg-(--white-bg) border-4 border-(--white-bg) flex items-center justify-center text-2xl font-black text-(--white-text) group-hover:border-(--red) group-hover:text-(--red) shadow-xl transition-all duration-500">
                        {idx + 1}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-(--red)/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content (Zig-Zag) */}
                    <div
                      className={`flex flex-col gap-3 pl-8 lg:pl-0 lg:w-1/2 
                      ${isRight ? "lg:pl-20 text-left items-start" : "lg:pr-20 text-right items-end"}
                    `}
                    >
                      <h3 className="text-2xl md:text-5xl font-[FormulaBold] uppercase tracking-wider text-(--white-text) mt-4 lg:mt-0 transition-colors group-hover:text-(--red)">
                        {item.title}
                      </h3>
                      <p className="text-(--white-text) font-[Helvetica] text-sm md:text-lg leading-relaxed max-w-[320px]">
                        {item.desc}
                      </p>

                      {/* Pill Tag (Updated for White Theme) */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="mt-6 flex items-center gap-3 px-6 py-3 rounded-full bg-(--white-bg) border border-(--white-bg) shadow-sm hover:border-(--red)/40 transition-all cursor-default"
                      >
                        <span className="text-(--red) text-xl shrink-0">
                          {item.icon}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-(--white-text)">
                          {item.pillText}
                        </span>
                      </motion.div>
                    </div>

                    {/* Spacer for Zig-Zag */}
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
