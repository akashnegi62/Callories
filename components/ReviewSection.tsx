"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const reviewsData = [
  {
    id: 1,
    beforeImg: "/Img/process_img1.webp",
    afterImg: "/Img/process_img2.webp",
    videoUrl: "/hero-video.mp4",
  },
  {
    id: 2,
    beforeImg: "/Img/process_img3.webp",
    afterImg: "/Img/process_img4.webp",
    videoUrl: "/hero-video.mp4",
  },
  {
    id: 3,
    beforeImg: "/Img/callories_img1.webp",
    afterImg: "/Img/callories_img2.webp",
    videoUrl: "/hero-video.mp4",
  },
];

export default function ReviewSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Grab-to-scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- Button Scroll Logic ---
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  // --- Grab-to-Scroll Event Handlers ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    // Calculate initial click position and current scroll offset
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();

    // Calculate distance moved
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplier adjusts scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      id="results"
      className="py-24 bg-(--dark-bg) text-(--white-text) overflow-hidden font-sans relative"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />

      {/* Header Area */}
      <div className="max-w-[1400px] mx-auto px-6 mb-16 relative flex flex-col md:flex-row items-end justify-between gap-8">
        <div className="flex flex-col items-center md:items-start w-full">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-[FormulaBold] uppercase tracking-widest leading-[0.9] text-(--dark-text)">
            TRANSFORMATIONS
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 z-20">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-(--red) hover:border-(--red) transition-all duration-300"
            aria-label="Previous"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-(--red) hover:border-(--red) transition-all duration-300"
            aria-label="Next"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex gap-4 md:gap-5 lg:gap-6 overflow-x-auto px-6 pb-12 snap-x snap-mandatory hide-scrollbar select-none
          ${isDragging ? "cursor-grabbing scroll-auto" : "cursor-grab scroll-smooth"}`}
      >
        {reviewsData.map((review) => (
          <React.Fragment key={review.id}>
            {/* Image Card (Before/After) */}
            <div className="shrink-0 w-[85vw] sm:w-[320px] md:w-[350px] lg:w-[400px] aspect-4/5 rounded-4xl md:rounded-[2.5rem] overflow-hidden flex gap-1 snap-center bg-black/20 pointer-events-none">
              <div className="w-1/2 h-full relative">
                <Image
                  src={review.beforeImg}
                  alt={`before`}
                  fill
                  className="object-cover grayscale-30"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                    Before
                  </span>
                </div>
              </div>

              <div className="w-1/2 h-full relative">
                <Image
                  src={review.afterImg}
                  alt={`after`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-(--red) rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                    After
                  </span>
                </div>
              </div>
            </div>

            {/* VIDEO Review Card */}
            <div className="shrink-0 w-[85vw] sm:w-[320px] md:w-[350px] lg:w-[400px] aspect-4/5 rounded-4xl md:rounded-[2.5rem] bg-black overflow-hidden relative snap-center pointer-events-none">
              <video
                src={review.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="mt-12 px-6 flex justify-center text-center">
        <div className="max-w-3xl space-y-4">
          <p className="text-2xl md:text-3xl font-[FormulaBold] uppercase tracking-widest text-(--dark-text) leading-none">
            “Real people. Real Transformations.”
          </p>
          <p className="text-sm md:text-base font-[Helvetica] text-(--dark-text) opacity-70 tracking-wide uppercase">
            See how our members lost weight, gained strength, and stayed
            consistent.
          </p>
        </div>
      </div>
    </section>
  );
}
