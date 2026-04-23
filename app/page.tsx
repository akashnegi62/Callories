"use client";

import { useEffect, useState} from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { AnimatePresence } from "framer-motion";

// components
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import OfferSection from "@/components/OfferSection";
import ReviewSection from "@/components/ReviewSection";
import PricingSection from "@/components/PricingSection";
import TrialSection from "@/components/TrialSection";
import CalloriesWorkSection from "@/components/CalloriesWorkSection";
import PlanDietSection from "@/components/PlanDietSection";
import Footer from "@/components/Footer";

function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only initialize Lenis after the loader has finished
    if (!loading) {
      const lenis = new Lenis({
        lerp: 0.1, // Adjusted for a slightly smoother "premium" feel
        wheelMultiplier: 1,
        gestureOrientation: "vertical",
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [loading]);

  return (
    <>
      {/* 1. Preloader Overlay */}
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* 2. Main Site Content */}
      <main
        className={`min-h-screen w-full transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}
      >
        <Header/>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <CalloriesWorkSection />
        <PlanDietSection />
        <OfferSection />
        <ReviewSection />
        <PricingSection />
        <TrialSection />
        <Footer />
      </main>
    </>
  );
}

export default Page;
