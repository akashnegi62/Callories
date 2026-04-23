"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(0);

  // --- 1. Timer Logic (0 to 100) ---
  useEffect(() => {
    const duration = 2000; // Total time in ms
    const intervalTime = 20;
    const totalSteps = duration / intervalTime;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Trigger the exit movement after a tiny delay for visual impact
          setTimeout(() => {
            onComplete();
          }, 200);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      // --- 2. THE MOVE TO TOP ANIMATION ---
      initial={{ y: 0 }}
      exit={{
        y: "-100%", // Moves the entire container to the top
        transition: {
          duration: 0.9,
          ease: [0.87, 0, 0.13, 1], // Custom "shutter" easing
        },
      }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-(--dark-bg) overflow-hidden"
    >
      {/* 3. Number Display [ 87 ] */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center text-white"
      >
        <div className="flex items-center gap-6 md:gap-10">
          {/* Left Bracket */}
          <span className="text-8xl md:text-[14rem] font-light leading-none select-none">
            [
          </span>

          {/* Running Number */}
          <div className="mt-10 md:mt-20 lg:mt-22 2xl:mt-20 text-8xl md:text-[14rem] font-[Formula] leading-none tabular-nums min-w-[2.2ch] text-center">
            {Math.floor(count)}
          </div>

          {/* Right Bracket */}
          <span className="text-8xl md:text-[14rem] font-light leading-none select-none">
            ]
          </span>
        </div>
      </motion.div>

      {/* Decorative Brand Text (Bottom center) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        className="absolute bottom-12 text-white font-[Helvetica] uppercase tracking-[0.5em] text-sm"
      >
        Loading Callories
      </motion.div>
    </motion.div>
  );
}
