import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CampusCollageSection } from "@/components/CampusCollageSection";
import { WhyWeWinSection } from "@/components/WhyWeWinSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ResultsSection } from "@/components/ResultsSection";
import { EssayDatabaseSection } from "@/components/EssayDatabaseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ApplyCtaSection } from "@/components/ApplyCtaSection";
import { FAQSection } from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CampusCollageSection />
      <WhyWeWinSection />
      <ProcessSection />
      <EssayDatabaseSection />
      <ResultsSection />
      <TestimonialsSection />
      <FAQSection />
      <ApplyCtaSection />
      <Footer />
    </div>
  );
};

export default Index;
