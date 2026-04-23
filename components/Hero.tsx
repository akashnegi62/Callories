"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
  });

  /* ───────── BACKGROUND ───────── */
  const bgColor = useTransform(smooth, [0, 1], ["#041513", "#dededa"]);
  /* ───────── VIDEO ───────── */
  const videoWidth = useTransform(smooth, [0, 0.8], ["46%", "100%"]);
  const videoHeight = useTransform(smooth, [0, 0.8], ["60%", "100%"]);
  const videoRadius = useTransform(smooth, [0, 0.5], ["8px", "0px"]);
  const videoY = useTransform(smooth, [0, 1], ["0%", "0%"]);
  const vidoScale = useTransform(smooth, [0, 1], [1, 1.2]);

  /* ───────── UI ───────── */
  const overlayOpacity = useTransform(smooth, [0.5, 0.8], [1, 0]);
  const gridOpacity = useTransform(smooth, [0, 0.4], [0.15, 0.03]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden isolate">
        {/* Background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: bgColor }}
        />

        {/* Grid */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ opacity: gridOpacity }}
        >
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>

        {/* ───────── VIDEO ───────── */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <motion.div
            className="relative overflow-hidden"
            style={{
              width: videoWidth,
              height: videoHeight,
              borderRadius: videoRadius,
              y: videoY,
              scale: vidoScale,
            }}
          >
            {/* grid overlay inside video */}
            <div
              className="absolute inset-0 z-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* corner brackets */}
            {[
              "top-2 left-2 border-t-2 border-l-2",
              "top-2 right-2 border-t-2 border-r-2",
              "bottom-2 left-2 border-b-2 border-l-2",
              "bottom-2 right-2 border-b-2 border-r-2",
            ].map((cls, i) => (
              <div
                key={i}
                className={`absolute w-6 h-6 border-white/60 z-20 ${cls}`}
              />
            ))}

            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src="/hero-video.mp4"
            />
          </motion.div>
        </div>

        {/* ───────── MOVING TEXT (NOW WORKS) ───────── */}
        <div className="absolute inset-0 z-30 flex items-center overflow-hidden pointer-events-none select-none">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="hero-text mx-[3vw] font-black"
                style={{
                  fontSize: "clamp(5rem, 18vw, 22rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.85,
                  color: "#ffffff",
                  mixBlendMode: "difference",
                }}
              >
                Get Fit Together
              </span>
            ))}
          </motion.div>
        </div>

        {/* ───────── GHOST TEXT ───────── */}
        <div className="absolute inset-0 z-10 pointer-events-none select-none">
          <div className="absolute top-20 lg:top-[4%] 2xl:top-[8%] left-[4%] text-white/20 font-bold text-[clamp(2rem,5vw,4rem)] lg:text-5xl  2xl:text-[clamp(2rem,5vw,4rem)] leading-[1.1] tracking-tight">
            Build <br /> Your Strength{" "}
          </div>

          <div className="absolute bottom-20 lg:bottom-[4%] 2xl:bottom-[12%] right-[2%] text-white/20 font-bold text-[clamp(2rem,5vw,4rem)] lg:text-5xl  2xl:text-[clamp(2rem,5vw,4rem)] leading-[1.1] tracking-tight">
            Play More, <br /> See Real Results
          </div>
        </div>

        {/* ───────── UI ───────── */}
        <motion.div
          className="absolute bottom-0 lg:-bottom-5 2xl:bottom-0 left-0 right-0 z-40 flex gap-10 md:gap-0 lg:gap-0 2xl:gap-0 justify-between px-6 lg:px-14 2xl:px-20 pb-8"
          style={{ opacity: overlayOpacity }}
        >
          <div className="flex items-center gap-3 text-white/60 text-xs tracking-widest">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            >
              <FiArrowDown size={16} />
            </motion.div>
            SCROLL MORE
          </div>

          <div className="text-white/40 text-xs 2xl:text-sm">
            Trusted by 1000+ members across Smash2play venues.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
