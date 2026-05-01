"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBatteryQuarter,
  FaClockRotateLeft,
  FaAppleWhole,
  FaHandshakeAngle,
  FaChartLine,
} from "react-icons/fa6";

const problems = [
  {
    id: 1,
    icon: <FaBatteryQuarter />,
    eyebrow: "MOTIVATION",
    title: "You start strong… then lose motivation",
  },
  {
    id: 2,
    icon: <FaClockRotateLeft />,
    eyebrow: "ROUTINE",
    title: "Workouts feel boring and repetitive",
  },
  {
    id: 3,
    icon: <FaAppleWhole />,
    eyebrow: "NUTRITION",
    title: "Diets are too strict to follow long term",
  },
  {
    id: 4,
    icon: <FaHandshakeAngle />,
    eyebrow: "SUPPORT",
    title: "No one keeps you truly accountable",
  },
  {
    id: 5,
    icon: <FaChartLine />,
    eyebrow: "OUTCOME",
    title: "No results quickly, so you give up",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-(--white-bg) py-24 md:py-32 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-(--white-text) leading-[0.85]">
            Why Most People <br />
            <span className="text-(--red) text-5xl md:text-7xl lg:text-8xl font-[FormulaBold] tracking-widest">
              Fail at Fitness
            </span>
          </h2>
        </div>

        {/* --- Grid Section --- */}
        {/* Using a 3-column grid that handles the 5 items elegantly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group p-10 rounded-[2.5rem] bg-(--dark-bg) hover:border-(--red)/50 transition-all duration-500 flex flex-col h-full shadow-2xl"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center text-3xl text-(--red) mb-10 group-hover:scale-110 group-hover:bg-(--red) group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              {/* Eyebrow (Small Title) */}
              <span className="text-(--red) text-xs font-black uppercase tracking-[0.4em] mb-4">
                {item.eyebrow}
              </span>

              {/* Main Text Content */}
              <h3 className="text-2xl md:text-3xl text-white font-[FormulaBold] uppercase tracking-widest leading-tight mb-6">
                {item.title}
              </h3>

              {/* Bottom Decorative Line (Reference Design) */}
              <div className="mt-auto pt-8">
                <div className="w-12 group-hover:w-full h-px bg-(--red) transition-all duration-700 opacity-50 group-hover:opacity-100"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Bottom Footer Quote --- */}
        <div className="mt-24 text-center px-4">
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
