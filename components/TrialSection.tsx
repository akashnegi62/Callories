"use client";

import React from "react";
import { motion } from "framer-motion";


export default function TrialSection() {
  return (
    <section className="bg-(--white-bg) text-(--white-text) py-32 pb-48 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Main Heading --- */}
        <div className="mb-32">
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
        <div className="flex items-center gap-6 justify-center">
          {/* Gray Small Button: Talk to Coach */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-32 h-32  md:w-30 md:h-30 lg:w-40 lg:h-40 2xl:w-40 2xl:h-40 bg-(--dark-bg) rounded-full flex items-center justify-center text-center p-4 shadow-xl group"
          >
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest leading-tight text-(--white-bg) group-hover:text-(--red) transition-colors">
              Talk to <br /> coach
            </span>
          </motion.button>

          {/* Orange Main Button: Start Free Trial */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-44 h-44 md:w-40 md:h-40 lg:w-56 lg:h-56 2xl:w-56 2xl:h-56 bg-(--red) rounded-full flex items-center justify-center text-center p-6 shadow-[0_20px_50px_rgba(230,0,11,0.3)]"
          >
            <span className="text-sm md:text-lg text-(--dark-text) font-black uppercase leading-tight tracking-tight">
              Start free <br /> trial [+]
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
