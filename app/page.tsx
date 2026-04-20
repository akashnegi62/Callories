import React from "react";
import Hero from "@/components/Hero"; // Adjust this import path depending on where your Hero.tsx is located
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";

function Page() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <ProblemSection />
      <SolutionSection />
    </main>
  );
}

export default Page;
