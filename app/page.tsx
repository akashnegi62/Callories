import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import OfferSection from "@/components/OfferSection";
import ReviewSection from "@/components/ReviewSection";
import PricingSection from "@/components/PricingSection";
import TrialSection from "@/components/TrialSection";

function Page() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <OfferSection />
      <ReviewSection />
      <PricingSection />
      <TrialSection />
    </main>
  );
}

export default Page;
