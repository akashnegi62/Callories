"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";


export default function TrialSection() {
  const coachLink = process.env.NEXT_PUBLIC_COACH_LINK;
  const trialLink = process.env.NEXT_PUBLIC_TRIAL_LINK || "#pricing";

  return (
    <section className="bg-(--white-bg) text-(--white-text) py-32 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Main Heading --- */}
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[8rem] font-black uppercase leading-[0.85] tracking-tighter"
          >
            You don’t need motivation.
            <br />
            <span className="text-(--red) font-[FormulaBold] tracking-wider">
              You need the right environment. <br /> You need a system that
              actually works.
            </span>
          </motion.h2>
        </div>

        {/* --- Dual Button Container --- */}
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-start">
          {/* Talk to Coach */}
          <BigFillButton
            fillColor="bg-white"
            hoverTextColor="group-hover:text-black"
            className="border-zinc-800 w-full sm:w-auto"
            href={coachLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-xl md:text-2xl" />
            Talk to Coach
          </BigFillButton>

          {/* Start Free Trial */}
          <BigFillButton
            fillColor="bg-(--red)"
            hoverTextColor="group-hover:text-white"
            className="border-(--red) bg-(--red)/10 w-full sm:w-auto"
            href={trialLink}
          >
            Start Free Trial
          </BigFillButton>
        </div>
      </div>
    </section>
  );
}

/** Big Fill Button */
function BigFillButton({
  children,
  className = "",
  fillColor = "bg-white",
  hoverTextColor = "group-hover:text-black",
  href,
  target,
  rel,
}: {
  children: React.ReactNode;
  className?: string;
  fillColor?: string;
  hoverTextColor?: string;
  href?: string;
  target?: string;
  rel?: string;
}) {
  return (
    <motion.a
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden px-10 py-5 md:px-14 md:py-7 rounded-full border text-sm md:text-lg font-[Helvetica] font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-3 group z-10 cursor-pointer shadow-lg transition-transform duration-300 ${className}`}
      href={href}
      target={target}
      rel={rel}
    >
      <span
        className={`relative z-30 flex items-center gap-3 text-white transition-colors duration-300 ${hoverTextColor}`}
      >
        {children}
      </span>
      <motion.div
        variants={{ initial: { y: "100%" }, hover: { y: "0%" } }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute inset-0 z-20 ${fillColor}`}
      />
      <motion.div
        variants={{ initial: { y: "0%" }, hover: { y: "-100%" } }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-black z-10"
      />
    </motion.a>
  );
}
