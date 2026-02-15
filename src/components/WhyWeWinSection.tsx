import { Check, X } from "lucide-react";

const typical = [
  "2–4 meetings per month",
  "Capped edits",
  "Delayed feedback",
  "Generic templates",
];

const cambridge = [
  "Unlimited meetings",
  "Unlimited essay editing",
  "Rapid iteration",
  "Fully personalized positioning",
];

export function WhyWeWinSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Time Is the Difference
          </h2>
          <p className="text-primary-foreground/75 text-lg">
            There is no secret formula. The biggest advantage is consistent time, availability, and real collaboration. Most consultants cap meetings and edits. We do not.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Typical */}
          <div className="bg-primary-foreground/10 border border-primary-foreground/15 rounded-xl p-8">
            <h3 className="font-display text-xl font-semibold text-primary-foreground/60 mb-6">Typical Consulting</h3>
            <ul className="space-y-4">
              {typical.map((item) => (
                <li key={item} className="flex items-start gap-3 text-primary-foreground/60">
                  <X className="h-5 w-5 text-primary-foreground/30 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cambridge */}
          <div className="bg-primary-foreground text-foreground border-2 border-primary-foreground rounded-xl p-8 relative">
            <div className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Our Approach
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Cambridge Academic Consulting</h3>
            <ul className="space-y-4">
              {cambridge.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
