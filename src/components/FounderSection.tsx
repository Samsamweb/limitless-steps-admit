import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import founderPhoto from "@/assets/founder-headshot-new.png";

export function FounderSection() {
  return (
    <section id="founder" className="section-padding bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-10 text-center">
            Meet the Founder
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="shrink-0 w-48 h-72 rounded-3xl overflow-hidden mx-auto md:mx-0 shadow-xl border-2 border-primary/10">
              <img
                src={founderPhoto}
                alt="Samuel Jacobowitz, founder of Cambridge College Consulting"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Samuel Jacobowitz</h3>
              <ul className="space-y-2 text-muted-foreground text-sm mb-6">
                <li>• Studying Economics and Government at Harvard University with a minor in Education Studies</li>
                <li>• Admitted to Harvard, Yale, Princeton, and the Columbia Scholars Program</li>
                <li>• Author of <em>"A Sound Investment: The Value of Music Education"</em></li>
                <li>• Worked with 50+ students with a 95% success rate</li>
                <li>• Students admitted to Yale, Columbia, Harvard, Princeton, Stanford, and nearly all Ivy League schools</li>
              </ul>

              <blockquote className="border-l-2 border-primary pl-4 text-foreground italic mb-6">
                "I built Cambridge College Consulting to give students what most services cannot: time, partnership, and constant support."
              </blockquote>

              <Link to="/apply">
                <Button className="bg-primary text-primary-foreground hover:bg-crimson-dark">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
