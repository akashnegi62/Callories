"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const textReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

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
            DITCH MOTIVATION.
            <br />
            GET THE{" "}
            <span className="text-(--red) font-[FormulaBold] tracking-wider">
              RIGHT <br /> SYSTEM.
            </span>
          </motion.h2>
        </div>

        {/* --- Benefit 1: Image Left, Gray Circle Right --- */}
        <div className="flex flex-col md:flex-row items-center mb-40">
          <div className="relative w-full md:w-3/5 aspect-video overflow-hidden rounded-sm group">
            <Image
              src="/Img/motivation_Img1.webp"
              alt="Training"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <motion.div className="w-72 h-72 md:w-55 md:h-55 lg:w-100 lg:h-100 2xl:w-108 2xl:h-108 bg-(--dark-bg)">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="h-full w-full rounded-full bg-black border border-zinc-800 flex items-center justify-center p-12 text-center z-10 relative"
            >
              <motion.span
                variants={textReveal}
                className="text-sm md:text-lg text-(--dark-text) font-[FormulaBold] uppercase tracking-[0.5em] leading-tight"
              >
                UNPARALLELED <br /> PERSONAL TRAINING
              </motion.span>
            </motion.div>
          </motion.div>
        </div>

        {/* --- Benefit 2: Image Right, Gray Circle Left --- */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-40">
          <div className="relative w-full md:w-3/5 aspect-video overflow-hidden rounded-sm group">
            <Image
              src="/Img/motivation_Img2.webp"
              alt="Environment"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <motion.div className="w-72 h-72 md:w-55 md:h-55 lg:w-100 lg:h-100 2xl:w-108 2xl:h-108 bg-(--dark-bg)">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="h-full w-full rounded-full bg-black border border-zinc-800 flex items-center justify-center p-12 text-center z-10 relative"
            >
              <motion.span
                variants={textReveal}
                className="text-sm md:text-base text-(--dark-text) font-[FormulaBold] uppercase tracking-[0.5em] leading-tight"
              >
                UNPARALLELED <br /> PERSONAL TRAINING
              </motion.span>
            </motion.div>
          </motion.div>
        </div>

        {/* --- Benefit 3: Gray Circle Left, Wide Image Right + CTA --- */}
        <div className="flex flex-col md:flex-row items-end gap-0 relative mb-20">
          <motion.div className="w-72 h-72 md:w-60 md:h-60 lg:w-132 lg:h-108 2xl:w-150 2xl:h-114 bg-(--dark-bg)">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="h-full w-full rounded-full bg-black border border-zinc-800 flex items-center justify-center p-12 text-center z-10 relative"
            >
              <motion.span
                variants={textReveal}
                className="text-sm md:text-base text-(--dark-text) font-[FormulaBold] uppercase tracking-[0.5em] leading-tight"
              >
                UNPARALLELED <br /> PERSONAL TRAINING
              </motion.span>
            </motion.div>
          </motion.div>

          <div className="relative w-full md:w-4/5 aspect-video rounded-sm overflow-hidden bg-zinc-900 group">
            <Image
              src="/Img/motivation_Img3.webp"
              alt="Luxury"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>

          {/* --- Dual Button Container --- */}
          <div className="absolute -bottom-24 right-0 md:right-10 flex items-center gap-6 z-30">
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

        {/* --- Footer Tagline --- */}
        <div className="mt-48 pb-5 border-b border-zinc-900">
          <p className="text-zinc-600 hover:text-(--red) transition-colors duration-300 text-[12px] font-bold uppercase tracking-[0.4em] text-center md:text-left">
            Limited slots per batch to maintain quality
          </p>
        </div>
      </div>
    </section>
  );
}
