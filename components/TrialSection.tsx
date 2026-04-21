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
    <section className="bg-[#0a0b0b] text-white py-32 pb-48 px-6 md:px-12 font-sans overflow-hidden">
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
            GET THE <span className="text-[#e6000b]">RIGHT SYSTEM.</span>
          </motion.h2>
        </div>

        {/* --- Benefit 1: Image Left, Gray Circle Right --- */}
        <div className="flex flex-col md:flex-row items-center mb-40">
          <div className="relative w-full md:w-3/5 aspect-video overflow-hidden rounded-sm group">
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800"
              alt="Training"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <motion.div className="w-72 h-72 md:w-108 md:h-108 bg-[#1a1a1a]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="h-full w-full rounded-full bg-black border border-zinc-800 flex items-center justify-center p-12 text-center z-10 relative"
            >
              <motion.span
                variants={textReveal}
                className="text-sm md:text-base font-bold uppercase tracking-[0.2em] leading-tight"
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
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800"
              alt="Environment"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <motion.div className="w-72 h-72 md:w-108 md:h-108 bg-[#1a1a1a]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="h-full w-full rounded-full bg-black border border-zinc-800 flex items-center justify-center p-12 text-center z-10 relative"
            >
              <motion.span
                variants={textReveal}
                className="text-sm md:text-base font-bold uppercase tracking-[0.2em] leading-tight"
              >
                UNPARALLELED <br /> PERSONAL TRAINING
              </motion.span>
            </motion.div>
          </motion.div>
        </div>

        {/* --- Benefit 3: Gray Circle Left, Wide Image Right + CTA --- */}
        <div className="flex flex-col md:flex-row items-end gap-0 relative mb-20">
          <motion.div className="w-72 h-72 md:w-150 md:h-114 bg-[#1a1a1a]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="h-full w-full rounded-full bg-black border border-zinc-800 flex items-center justify-center p-12 text-center z-10 relative"
            >
              <motion.span
                variants={textReveal}
                className="text-sm md:text-base font-bold uppercase tracking-[0.2em] leading-tight"
              >
                UNPARALLELED <br /> PERSONAL TRAINING
              </motion.span>
            </motion.div>
          </motion.div>

          <div className="relative w-full md:w-4/5 aspect-video rounded-sm overflow-hidden bg-zinc-900 group">
            <Image
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200"
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
              className="w-32 h-32 md:w-40 md:h-40 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center text-center p-4 shadow-xl group"
            >
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest leading-tight group-hover:text-zinc-200 transition-colors">
                Talk to <br /> coach
              </span>
            </motion.button>

            {/* Orange Main Button: Start Free Trial */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-44 h-44 md:w-56 md:h-56 bg-[#e6000b] rounded-full flex items-center justify-center text-center p-6 shadow-[0_20px_50px_rgba(230,0,11,0.3)]"
            >
              <span className="text-sm md:text-lg font-black uppercase leading-tight tracking-tight">
                Start free <br /> trial [+]
              </span>
            </motion.button>
          </div>
        </div>

        {/* --- Footer Tagline --- */}
        <div className="mt-48 pb-5 border-b border-zinc-900">
          <p className="text-zinc-600 hover:text-[#e6000b] transition-colors duration-300 text-[12px] font-bold uppercase tracking-[0.4em] text-center md:text-left">
            Limited slots per batch to maintain quality
          </p>
        </div>
      </div>
    </section>
  );
}
