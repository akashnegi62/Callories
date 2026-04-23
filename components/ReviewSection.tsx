"use client";

import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

// Dummy data 
const reviewsData = [
  {
    id: 1,
    beforeImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&auto=format&fit=crop",
    title: "THE GRIND CHANGED MY LIFE!",
    text: '"The Grind has changed my life! The Grind brought about the biggest mental and physical change in my life. I weighed 87 kg. In 8 weeks I lost 10 kg, and eventually in 2023 even 20 kg. I am incredibly happy and proud of the result!"',
    author: "Donna",
    rating: 5,
  },
  {
    id: 2,
    beforeImg: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop",
    title: "I WAS FIT IN 8 WEEKS!",
    text: '"The guidance is really top-notch! The customized schedules and quick responses have helped me tremendously. I feel much fitter now, and running is so much easier. Mentally, I have also become much stronger and gained a lot more perseverance!"',
    author: "Kay",
    rating: 5,
  },
  {
    id: 3,
    beforeImg: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1574680077505-ef9964d51b38?q=80&w=400&auto=format&fit=crop",
    title: "EXCEEDED EXPECTATIONS",
    text: '"I never thought I could achieve these results while still eating the foods I love. The 1-on-1 coaching kept me accountable every single day. Highly recommend to anyone ready to make a real change."',
    author: "Sarah",
    rating: 5,
  }
];

export default function ReviewSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden font-sans relative">
      
      {/* Hide scrollbar styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Header Area */}
      <div className="max-w-[1400px] mx-auto px-6 mb-16 relative flex flex-col items-center">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 bg-red-600 rounded-full"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">
            Reviews
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-center leading-[0.9] text-zinc-100">
          Not our words.<br />
          But theirs
        </h2>

        {/* Trustpilot Badge - Hidden on very small screens, placed absolute right on larger screens */}
        <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 items-center gap-4">
          <span className="text-sm font-bold tracking-wide">Trustpilot</span>
          <div className="w-14 h-14 rounded-full border-2 border-red-600 flex items-center justify-center text-lg font-bold">
            8.5
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Carousel */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto px-6 pb-12 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing">
        {reviewsData.map((review) => (
          <React.Fragment key={review.id}>
            
            {/* 1. Image Card (Split Before/After) */}
            <div className="shrink-0 w-[85vw] sm:w-[320px] md:w-[400px] aspect-4/5 rounded-4xl overflow-hidden flex gap-1 snap-center bg-[#0a0a0a]">
              {/* Before Image Container */}
              <div className="w-1/2 h-full relative">
                <Image 
                  src={review.beforeImg} 
                  alt={`${review.author} before`} 
                  fill 
                  className="object-cover grayscale-20" 
                />
              </div>
              {/* After Image Container */}
              <div className="w-1/2 h-full relative">
                <Image 
                  src={review.afterImg} 
                  alt={`${review.author} after`} 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>

            {/* 2. Text Review Card */}
            <div className="shrink-0 w-[85vw] sm:w-[320px] md:w-[400px] aspect-4/5 rounded-4xl bg-[#EAEAEA] text-zinc-950 p-8 md:p-10 flex flex-col snap-center">
              
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
                {review.title}
              </h3>
              
              {/* Star Rating */}
              <div className="flex gap-1.5 mb-6 text-red-600">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-xl" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-sm md:text-base font-medium leading-relaxed text-zinc-800 mb-auto">
                {review.text}
              </p>
              
              {/* Author */}
              <p className="text-sm font-bold text-zinc-950 mt-6">
                {review.author}
              </p>
              
            </div>

          </React.Fragment>
        ))}
      </div>

    </section>
  );
}