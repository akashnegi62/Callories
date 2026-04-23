"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

const gridImages = [
  "/Img/offer.webp",
  "/img/play_img1.webp",
  "/img/play_img2.webp",
  "/img/play_img3.webp",
  "/img/play_img4.webp",
  "/img/play_img5.webp",
  "/img/play_img6.webp",
  "/img/callories_img1.webp",
  "/img/callories_img2.webp",
  "/img/callories_img3.webp",
  "/img/callories_img4.webp",
  "/img/process_img1.webp",
  "/img/process_img2.webp",
  "/img/process_img3.webp",
  "/img/process_img4.webp",
];

const SCATTER: Record<
  number,
  { x: number; y: number; rotate: number; scale: number }
> = {
  0: { x: -520, y: -260, rotate: -5, scale: 0.5 },
  1: { x: -200, y: -300, rotate: 3, scale: 0.4 },
  2: { x: 0, y: -340, rotate: -2, scale: 0.62 },
  3: { x: 200, y: -290, rotate: 4, scale: 0.38 },
  4: { x: 520, y: -260, rotate: -4, scale: 0.45 },
  5: { x: -520, y: 10, rotate: 4, scale: 0.58 },
  6: { x: -220, y: 30, rotate: -5, scale: 0.68 },
  8: { x: 220, y: 20, rotate: 5, scale: 0.7 },
  9: { x: 520, y: 0, rotate: -3, scale: 0.55 },
  10: { x: -520, y: 280, rotate: -6, scale: 0.48 },
  11: { x: -200, y: 300, rotate: 4, scale: 0.42 },
  12: { x: 0, y: 330, rotate: -3, scale: 0.58 },
  13: { x: 200, y: 295, rotate: 5, scale: 0.44 },
  14: { x: 520, y: 280, rotate: -5, scale: 0.5 },
};

function SurroundingCard({
  src,
  index,
  progress,
}: {
  src: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const { x: sx, y: sy, rotate: sr, scale: ss } = SCATTER[index];
  const x = useTransform(progress, [0.45, 0.92], [sx, 0]);
  const y = useTransform(progress, [0.45, 0.92], [sy, 0]);
  const rotate = useTransform(progress, [0.45, 0.92], [sr, 0]);
  const scale = useTransform(progress, [0.45, 0.92], [ss, 1]);

  return (
    <motion.div
      style={{ x, y, rotate, scale }}
      className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-300 will-change-transform"
    >
      <Image src={src} alt="" fill className="object-cover" sizes="20vw" />
    </motion.div>
  );
}

export default function OfferSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [scaleRange, setScaleRange] = useState([2.6, 2.6, 0.9]);

  // Responsive Scale Detection
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // 2. Logic for 3-tier scaling
      if ((width >= 768 && width < 1024) || (width >= 820 && width < 1280)) {
        // TABLET range
        setScaleRange([2.6, 2.6, 0.6]);
      } else {
        // MOBILE and DESKTOP
        setScaleRange([2.6, 2.6, 0.9]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Animations ──
  const heroY = useTransform(scrollYProgress, [0, 0.15], ["40vh", "0vh"]);
  const heroScale = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.92],
    scaleRange,
  );

  const gridVisible = useTransform(scrollYProgress, (v) =>
    v >= 0.44 ? "visible" : "hidden",
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[700vh] bg-[#E4E2DC] pb-20 md:pb-0 lg:pb-40 2xl:pb-0"
    >
      {/* Heading */}
      <div className="absolute top-0 w-full flex flex-col items-center pt-40 px-6 text-center z-50 pointer-events-none">
        <h1 className="font-black uppercase text-[#111] leading-[0.9] tracking-tight text-5xl md:text-7xl">
          Move. Play. Enjoy.
        </h1>
        <p className="mt-5 text-xl text-zinc-500 font-normal leading-relaxed">
          A weight-neutral program that builds sustainable habits, not quick
          fixes.
        </p>
      </div>

      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* --- GRID: Changed to 3 columns for mobile, 5 for desktop --- */}
        <motion.div
          style={{ visibility: gridVisible }}
          className="grid grid-cols-3 md:grid-cols-5 gap-3 w-full max-w-[1300px] px-8"
        >
          {gridImages.map((src, index) => {
            if (index === 7)
              return (
                <div
                  key={index}
                  className="relative aspect-square rounded-2xl invisible"
                  aria-hidden
                />
              );
            return (
              <SurroundingCard
                key={index}
                src={src}
                index={index}
                progress={scrollYProgress}
              />
            );
          })}
        </motion.div>

        {/* HERO CARD */}
        <motion.div
          className="absolute z-40 will-change-transform"
          style={{
            scale: heroScale,
            y: heroY,
            width: "clamp(100px, 28vw, 260px)",
            aspectRatio: "1 / 1",
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={gridImages[0]}
              alt="Hero"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 30vw, 260px"
            />

            <motion.div className="absolute inset-0 flex items-center justify-center p-3">
              <h2 className="text-white font-black uppercase text-center leading-[0.88] text-[clamp(1rem,2.2em,3rem)] tracking-[-0.02em]">
                What
                <br />
                We
                <br />
                Offer?
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
