"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaFaceSmile,
  FaUserGear,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa6";

const whyData = [
  {
    icon: <FaFaceSmile />,
    title: "Fun-first workouts",
    desc: " You don’t quit.",
  },
  {
    icon: <FaUserGear />,
    title: "Personalized plans",
    desc: "You see results.",
  },
  {
    icon: <FaUsers />,
    title: "Community support",
    desc: "You stay consistent.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Expert guidance",
    desc: "You do it right.",
  },
];

export default function WhyWorksSection() {
  return (
    <section className="py-24 bg-(--dark-bg) px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="mb-20 text-left md:text-left lg:text-center 2xl:text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[1.2] text-(--dark-text)">
            Why Callories <br />
            <span className="text-(--red) font-[FormulaBold] tracking-widest">
              Works
            </span>
          </h2>
        </div>

        {/* --- Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-4xl bg-zinc-900/50 border border-zinc-800 hover:border-(--red)/50 transition-all duration-500 flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-2xl text-(--red) mb-8 group-hover:scale-110 group-hover:bg-(--red) group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl text-(--dark-text) font-[FormulaBold] uppercase tracking-wider mb-4 leading-none">
                {item.title}
              </h3>

              <p className="text-(--dark-text) font-[Helvetica] text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Decorative Line */}
              <div className="mt-auto pt-8">
                <div className="w-0 group-hover:w-full h-px bg-(--red) transition-all duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
