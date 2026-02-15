import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ApplyCtaSection() {
  return (
    <section id="apply" className="section-padding bg-foreground text-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Apply to Work With Cambridge Academic Consulting
        </h2>
        <p className="text-lg opacity-80 mb-2">
          We accept only 20 students per year. 8 spots remaining.
        </p>
        <p className="text-sm opacity-60 mb-8">
          Application required. Selective acceptance.
        </p>
        <Link to="/apply">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-crimson-dark font-semibold px-10 py-6 text-base">
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
