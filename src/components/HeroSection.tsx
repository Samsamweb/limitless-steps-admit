import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, GraduationCap, ShieldCheck, ChevronDown } from "lucide-react";
import harvardImg from "@/assets/harvard-campus.jpg";
import yaleImg from "@/assets/yale-campus.jpg";
import stanfordImg from "@/assets/stanford-campus.jpg";
import princetonImg from "@/assets/princeton-campus.jpg";

const campuses = [
  { name: "Harvard", img: harvardImg },
  { name: "Yale", img: yaleImg },
  { name: "Stanford", img: stanfordImg },
  { name: "Princeton", img: princetonImg },
];

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
              <span className="text-primary">Partnership</span>,{" "}
              Not a Program
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Unlimited meetings and unlimited essay editing with direct founder support.
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
                className="border-foreground/20 text-foreground hover:bg-secondary font-semibold px-8 py-6 text-base"
                onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
              >
                See How It Works
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

          {/* Right side — campus collage */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-display text-2xl font-bold text-foreground text-center mb-6">
              We Get Students In
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {campuses.map((campus) => (
                <div key={campus.name} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <img
                    src={campus.img}
                    alt={`${campus.name} University campus`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="font-display text-sm font-semibold text-background">{campus.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Single CTA under collage */}
            <div className="mt-4 text-center">
              <Button
                variant="outline"
                className="border-primary/30 text-primary hover:bg-crimson-light font-semibold"
                onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
              >
                See what families have to say
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
