import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import OfferSection from "@/components/OfferSection";
import ReviewSection from "@/components/ReviewSection";
import PricingSection from "@/components/PricingSection";

function Page() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <OfferSection />
      <ReviewSection />
      <PricingSection />
    </main>
  );
}

export default Page;
