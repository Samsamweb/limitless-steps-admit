import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { WhyWeWinSection } from "@/components/WhyWeWinSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ResultsSection } from "@/components/ResultsSection";
import { EssayDatabaseSection } from "@/components/EssayDatabaseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FounderSection } from "@/components/FounderSection";
import { ApplyCtaSection } from "@/components/ApplyCtaSection";
import { FAQSection } from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhyWeWinSection />
      <ProcessSection />
      <ResultsSection />
      <EssayDatabaseSection />
      <TestimonialsSection />
      <FounderSection />
      <FAQSection />
      <ApplyCtaSection />
      <Footer />
    </div>
  );
};

export default Index;
