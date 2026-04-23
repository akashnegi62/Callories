"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
// components
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import OfferSection from "@/components/OfferSection";
import ReviewSection from "@/components/ReviewSection";
import PricingSection from "@/components/PricingSection";
import TrialSection from "@/components/TrialSection";
import CalloriesWorkSection from "@/components/CalloriesWorkSection";
import PlanDietSection from "@/components/PlanDietSection";

function Page() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.2,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <CalloriesWorkSection />
      <PlanDietSection />
      <OfferSection />
      <ReviewSection />
      <PricingSection />
      <TrialSection />
    </main>
  );
}

export default Page;
