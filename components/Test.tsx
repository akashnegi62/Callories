"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

const gridImages = [
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574680077505-ef9964d51b38?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop",
  "/assets/center-image.jpg",
  "https://images.unsplash.com/photo-1526506115366-5121b6441221?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=600&auto=format&fit=crop",
];

// ... SCATTER Record remains the same ...
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
  const [scaleRange, setScaleRange] = useState([2.6, 2.6, 1.0]);

  // Responsive Scale Detection
  useEffect(() => {
    const handleResize = () => {
      // For Tablet/Mobile (anything under 1024px)
      if (window.innerWidth < 1024) {
        setScaleRange([2.6, 2.6, 0.6]);
      } else {
        setScaleRange([2.6, 2.6, 1.0]);
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

  // Animations
  const heroY = useTransform(scrollYProgress, [0, 0.15], ["20vh", "0vh"]);
  const heroScale = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.92],
    scaleRange,
  );
  const gridVisible = useTransform(scrollYProgress, (v) =>
    v >= 0.44 ? "visible" : "hidden",
  );

  return (
    <section ref={containerRef} className="relative h-[700vh] bg-[#E4E2DC]">
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
        {/* GRID */}
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
          className="absolute z-40 will-change-transform rounded-2xl overflow-hidden shadow-2xl"
          style={{
            scale: heroScale,
            y: heroY,
            // Calculate base width: 1/3 of grid area for tablet, 1/5 for desktop
            width: "calc((min(1300px, 100vw) - 80px) / 3)",
          }}
        >
          {/* Desktop Width Override wrapper */}
          <div className="md:w-[calc((min(1300px,100vw)-100px)/5)] w-full h-full relative aspect-square">
            <Image
              src={gridImages[7]}
              alt="Hero"
              fill
              className="object-cover grayscale-25"
              priority
              sizes="(max-width: 1024px) 33vw, 20vw"
            />

            <motion.div className="absolute inset-0 flex items-center justify-center p-3">
              <h2 className="text-white font-black uppercase text-center leading-[0.88] text-[clamp(1rem,2.2em,3rem)] tracking-[-0.02em] mix-blend-overlay">
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
