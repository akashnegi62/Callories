"use client";

import React from "react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    duration: "1 Month",
    subtitle: "Not much preferred",
    price: "6,999",
    billing: "",
    subPrice: "/month",
    saveText: "",
    buttonText: "ENROLL NOW",
    isFeatured: false,
  },
  {
    duration: "3 Month",
    subtitle: "Best for visible transformation",
    price: "16,999",
    billing: "",
    subPrice: "Only ₹5,666/month",
    saveText: "Save ₹1,333",
    buttonText: "ENROLL NOW",
    isFeatured: true,
  },
  {
    duration: "6 Month",
    subtitle: "Best for long-term lifestyle change",
    price: "32,999",
    billing: "",
    subPrice: "Only ₹5,500/month",
    saveText: "Save ₹1,499",
    buttonText: "ENROLL NOW",
    isFeatured: false,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 bg-(--dark-bg) text-(--dark-text) px-6 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header - Cleaned up */}
        <div className="mb-20 text-center md:text-left">
          {/* Tablet optimization: md:text-5xl (Desktop stays 6xl) */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
            CHOOSE{" "}
            <span className="text-(--red) font-[FormulaBold] tracking-widest">
              YOUR POWER
            </span>{" "}
            PLAN
          </h2>
          <p className="text-(--dark-text) font-[Helvetica] max-w-md text-sm md:text-base mx-auto md:mx-0">
            Flexible memberships for all fitness levels with expert guidance and
            premium equipment.
          </p>
        </div>

        {/* Pricing Grid */}
        {/* Tablet optimization: md:gap-4 (Desktop stays gap-6) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              /* Tablet optimization: md:p-7 (Desktop stays p-10) */
              className="relative bg-zinc-900/50 border border-zinc-800 rounded-4xl p-8 md:p-7 lg:p-10 flex flex-col hover:border-zinc-700 transition-all group"
            >
              {/* --- Free Trial Badge --- */}
              {plan.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-(--red) text-white text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-[0.15em] whitespace-nowrap shadow-[0_0_20px_rgba(220,38,38,0.5)] border border-red-500">
                    Free Trial Available
                  </span>
                </div>
              )}

              {/* Price Section */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  {/* Tablet optimization: md:text-5xl (Desktop stays 6xl) */}
                  <span className="text-4xl md:text-5xl lg:text-6xl font-[FormulaBold] tracking-wider">
                    ₹{plan.price}
                  </span>
                  <span className="text-zinc-500 font-[Helvetica] uppercase text-xs tracking-widest">
                    {plan.billing}
                  </span>
                </div>
                <div className="mt-2 space-y-1">
                  {plan.subPrice && (
                    <p className="text-zinc-400 text-lg font-[Helvetica]">
                      {plan.subPrice}
                    </p>
                  )}
                  {plan.saveText && (
                    <p className="text-(--red) text-lg font-[Helvetica] uppercase tracking-widest">
                      {plan.saveText}
                    </p>
                  )}
                </div>
              </div>

              {/* Title Section */}
              <div className="mb-10">
                <h3 className="text-3xl font-[FormulaBold] uppercase tracking-wider mb-1">
                  {plan.duration}
                </h3>
                <p className="text-zinc-500 text-xs uppercase font-[Helvetica] tracking-wider">
                  {plan.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
