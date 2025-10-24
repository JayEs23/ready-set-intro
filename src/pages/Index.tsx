import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import SolutionOverview from "@/components/SolutionOverview";
import UseCases from "@/components/UseCases";
import Architecture from "@/components/Architecture";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <UseCases />
      <Architecture />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
