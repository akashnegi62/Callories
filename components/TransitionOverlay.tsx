"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TransitionOverlay({
  isVisible,
}: {
  isVisible: boolean;
}) {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: isVisible ? "0%" : "-100%" }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-9999 bg-(--red) flex items-center justify-center"
    >
      <h2 className="text-white font-[FormulaBold] text-4xl uppercase tracking-tighter">
        Moving to Section...
      </h2>
    </motion.div>
  );
}
