import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, GraduationCap, ShieldCheck } from "lucide-react";
import founderPhoto from "@/assets/founder-headshot-new.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side — copy */}
          <div>
            {/* Exclusivity badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-crimson-light text-primary text-sm font-medium mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Only 20 students per year · 8 spots remaining
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              College Admissions as a{" "}
              <span className="text-primary">Partnership</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Unlimited meetings and unlimited essay editing.
            </p>

            {/* Guarantee integrated */}
            <div className="flex items-start gap-3 bg-crimson-light border border-primary/10 rounded-xl px-5 py-4 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-base font-semibold text-foreground">
                  <span className="text-primary">Acceptance Guarantee:</span> If your student does not get into one of their top 5 colleges, you don't pay.
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  College list finalized together. Fair terms apply.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/apply">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-crimson-dark font-semibold px-8 py-6 text-base">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary text-primary-foreground hover:bg-crimson-dark font-semibold px-8 py-6 text-base"
                onClick={() => document.getElementById("founder")?.scrollIntoView({ behavior: "smooth" })}
              >
                Meet the Coach
              </Button>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                <span>50+ students served</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4 text-accent" />
                <span>95% success rate</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>Harvard, Yale, Princeton, Stanford + more</span>
              </div>
            </div>

            {/* Spots counter */}
            <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-medium text-foreground">8 / 20 spots remaining</span>
              </div>
              <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "60%" }} />
              </div>
            </div>
          </div>

          {/* Right side — Meet the Founder */}
          <div className="animate-fade-in flex flex-col items-center bg-card border border-border/50 rounded-2xl p-8 shadow-lg" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-display text-2xl font-bold text-foreground text-center mb-5">
              Meet Your Coach
            </h3>

            <div className="shrink-0 w-48 h-72 rounded-3xl overflow-hidden shadow-xl border-2 border-primary/10 mb-5">
              <img
                src={founderPhoto}
                alt="Samuel Jacobowitz, founder of Cambridge Academic Consulting"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h4 className="font-display text-xl font-semibold text-foreground mb-1">Samuel Jacobowitz</h4>
            <p className="text-primary text-sm font-medium mb-4">Harvard University</p>
            <ul className="space-y-1.5 text-muted-foreground text-sm mb-5 text-center max-w-sm">
              <li>Studying Economics & Government at Harvard</li>
              <li>Admitted to Harvard, Yale, Princeton & Columbia Scholars Program</li>
              <li>50+ students served · 95% success rate</li>
            </ul>

            <blockquote className="border-l-2 border-primary pl-4 text-foreground italic text-sm max-w-sm mb-6">
              "I built Cambridge Academic Consulting to give students what most services cannot: time, partnership, and constant support."
            </blockquote>

            <Link to="/apply" className="w-full max-w-xs">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-crimson-dark">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
