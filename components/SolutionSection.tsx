"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const solutions = [
  {
    eyebrow: "Personalized for You",
    title: "Real Guidance, No Empty Promises",
    description:
      "At Callories, we look beyond standard plans or quick fixes. Your personal coach is by your side 24/7 and helps you with a nutrition and training plan that is truly tailored to your goals, body, and lifestyle.",
    imageUrl: "/img/offer_img1.webp",
    imageTag: "1-on-1 coaching",
  },
  {
    eyebrow: "Play",
    title: "Movement should feel like play",
    description:
      "Forget the treadmill grind. We integrate badminton, football, and functional games to ensure you're burning calories while having genuine fun. Consistency comes naturally when you actually look forward to your sessions.",
    imageUrl: "/img/offer_img2.webp",
    imageTag: "Active Play",
  },
  {
    eyebrow: "Train",
    title: "Push your limits with intent",
    description:
      "Our training philosophy is built on science and expert coaching. We provide the structure you need to see visible strength gains and aesthetic results without wasting time on ineffective routines.",
    imageUrl: "/img/offer_img3.webp",
    imageTag: "Pro Training",
  },
  {
    eyebrow: "Sustain",
    title: "Sustain your progress for life",
    description:
      "We don't just help you get in shape—we help you stay in shape. With ongoing support, accountability, and a community that keeps you motivated, you'll maintain your results and keep progressing long after you hit your initial goals.",
    imageUrl: "/img/offer_img4.webp",
    imageTag: "Lifelong Support",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-32 bg-(--dark-bg) text-(--dark-text) px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-40">
          {solutions.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-16 md:gap-24 items-center ${!isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* --- Text Side --- */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 space-y-8"
                >
                  {/* Eyebrow Tag with Red Dot */}
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-(--red) rounded-full animate-pulse" />
                    <span className="text-xs font-[Helvetica] uppercase tracking-widest">
                      {item.eyebrow}
                    </span>
                  </div>

                  {/* High-Impact Condensed Title */}
                  <h3 className="text-5xl md:text-7xl font-[FormulaBold] uppercase tracking-wide leading-[0.9] max-w-md">
                    {item.title}
                  </h3>

                  {/* Paragraph Description */}
                  <p className="text-lg leading-relaxed max-w-lg font-[Helvetica]">
                    {item.description}
                  </p>
                </motion.div>

                {/* --- Image Side --- */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 relative w-full group"
                >
                  <div className="relative aspect-4/5 md:aspect-5/6 rounded-4xl overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Top Pill Tag */}
                    <div className="absolute top-6 left-6">
                      <div className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider">
                        {item.imageTag}
                      </div>
                    </div>

                    {/* Bottom Circle SVG Overlay */}
                    <div className="absolute -bottom-4 -right-4 pointer-events-none">
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 100 100"
                        className="opacity-80"
                      >
                        <circle
                          cx="40"
                          cy="60"
                          r="25"
                          stroke="#e73139"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle
                          cx="60"
                          cy="40"
                          r="25"
                          stroke="#e73139"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
