"use client";

import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const reviewsData = [
  {
    id: 1,
    beforeImg: "/Img/process_img1.webp",
    afterImg: "/Img/process_img2.webp",
    title: "THE GRIND CHANGED MY LIFE!",
    text: '"The Grind has changed my life! The Grind brought about the biggest mental and physical change in my life. I weighed 87 kg. In 8 weeks I lost 10 kg, and eventually in 2023 even 20 kg. I am incredibly happy and proud of the result!"',
    author: "Donna",
    rating: 5,
  },
  {
    id: 2,
    beforeImg: "/Img/process_img3.webp",
    afterImg: "/Img/process_img4.webp",
    title: "I WAS FIT IN 8 WEEKS!",
    text: '"The guidance is really top-notch! The customized schedules and quick responses have helped me tremendously. I feel much fitter now, and running is so much easier. Mentally, I have also become much stronger and gained a lot more perseverance!"',
    author: "Kay",
    rating: 5,
  },
  {
    id: 3,
    beforeImg: "/Img/callories_img1.webp",
    afterImg: "/Img/callories_img2.webp",
    title: "EXCEEDED EXPECTATIONS",
    text: '"I never thought I could achieve these results while still eating the foods I love. The 1-on-1 coaching kept me accountable every single day. Highly recommend to anyone ready to make a real change."',
    author: "Sarah",
    rating: 5,
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

      {/* Header Area (Unchanged) */}
      <div className="max-w-[1400px] mx-auto px-6 mb-16 relative flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 bg-(--red) rounded-full"></span>
          <span className="text-xs font-[Helvetica] uppercase tracking-widest text-(--dark-text)">
            Reviews
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-center leading-[0.9] text-(--dark-text)">
          Not our words.
          <br />
          But theirs
        </h2>
        {/* ... Trustpilot hidden lg:flex ... */}
      </div>

      {/* Carousel */}
      <div className="flex gap-4 md:gap-5 lg:gap-6 overflow-x-auto px-6 pb-12 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing">
        {reviewsData.map((review) => (
          <React.Fragment key={review.id}>
            {/* 1. Image Card with Tags */}
            <div className="shrink-0 w-[85vw] sm:w-[320px] md:w-[350px] lg:w-[400px] aspect-4/5 rounded-4xl md:rounded-[2.5rem] overflow-hidden flex gap-1 snap-center bg-(--dark-bg)">
              {/* Before Image Container */}
              <div className="w-1/2 h-full relative group">
                <Image
                  src={review.beforeImg}
                  alt={`${review.author} before`}
                  fill
                  className="object-cover grayscale-20"
                />
                {/* BEFORE TAG */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
                    Before
                  </span>
                </div>
              </div>

              {/* After Image Container */}
              <div className="w-1/2 h-full relative">
                <Image
                  src={review.afterImg}
                  alt={`${review.author} after`}
                  fill
                  className="object-cover"
                />
                {/* AFTER TAG */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-(--red) rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                    After
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Text Review Card (Unchanged) */}
            <div className="shrink-0 w-[85vw] sm:w-[320px] md:w-[350px] lg:w-[400px] aspect-4/5 rounded-4xl md:rounded-[2.5rem] bg-(--white-bg) text-(--white-text) p-8 md:p-9 lg:p-10 flex flex-col snap-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-[FormulaBold] uppercase tracking-wider leading-[0.9] mb-4">
                {review.title}
              </h3>
              <div className="flex gap-1.5 mb-6 text-(--red)">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-lg md:text-xl" />
                ))}
              </div>
              <p className="text-sm lg:text-base font-[Helvetica] leading-relaxed mb-auto text-(--white-text)">
                {review.text}
              </p>
              <p className="text-xl font-[FormulaBold] text-(--white-text) mt-6">
                {review.author}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
