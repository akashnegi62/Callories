"use client";

import React from "react";
import Image from "next/image";

const reviewsData = [
  {
    id: 1,
    beforeImg: "/Img/process_img1.webp",
    afterImg: "/Img/process_img2.webp",
    videoUrl: "/hero-video.mp4", // Add your video paths here
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
      <div className="max-w-[1400px] mx-auto px-6 mb-16 relative flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 bg-(--red) rounded-full animate-pulse"></span>
          <span className="text-xs font-[Helvetica] uppercase tracking-widest text-(--dark-text)">
            Real Results
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-[FormulaBold] uppercase tracking-widest text-center leading-[0.9] text-(--dark-text)">
          TRANSFORMATIONS
        </h2>
      </div>

      {/* Carousel */}
      <div className="flex gap-4 md:gap-5 lg:gap-6 overflow-x-auto px-6 pb-12 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing">
        {reviewsData.map((review) => (
          <React.Fragment key={review.id}>
            {/* 1. Image Card (Before/After) */}
            <div className="shrink-0 w-[85vw] sm:w-[320px] md:w-[350px] lg:w-[400px] aspect-4/5 rounded-4xl md:rounded-[2.5rem] overflow-hidden flex gap-1 snap-center bg-black/20">
              <div className="w-1/2 h-full relative group">
                <Image
                  src={review.beforeImg}
                  alt={`author before`}
                  fill
                  className="object-cover grayscale-30"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
                    Before
                  </span>
                </div>
              </div>

              <div className="w-1/2 h-full relative">
                <Image
                  src={review.afterImg}
                  alt={`author after`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-(--red) rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                    After
                  </span>
                </div>
              </div>
            </div>

            {/* 2. VIDEO Review Card */}
            <div className="shrink-0 w-[85vw] sm:w-[320px] md:w-[350px] lg:w-[400px] aspect-4/5 rounded-4xl md:rounded-[2.5rem] bg-black overflow-hidden relative group snap-center">
              <video
                src={review.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Overlay with Author Name */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8"></div>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Bottom Text Anchor */}
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
