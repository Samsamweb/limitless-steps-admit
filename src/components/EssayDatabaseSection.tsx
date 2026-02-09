import { BookOpen, FileText, Search, Star } from "lucide-react";

const metrics = [
  { icon: FileText, value: "1,000+", label: "Essay Examples" },
  { icon: Star, value: "15", label: "In-Depth Accepted Essays from Last Year" },
  { icon: Search, value: "Each", label: "Includes Detailed Analysis & Breakdown" },
];

export function EssayDatabaseSection() {
  return (
    <section id="essays" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <BookOpen className="h-10 w-10 text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            The Accepted Essay Database
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-4">
            A living, high-value library of previously accepted student essays with analysis: what worked, what didn't, and why. Your student never starts from a blank page.
          </p>
          <p className="text-sm text-accent font-semibold">
            Access included when you work with us.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
          {metrics.map((m) => (
            <div key={m.label} className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-6 text-center shadow-sm">
              <m.icon className="h-6 w-6 text-accent mx-auto mb-3" />
              <div className="font-display text-2xl font-bold text-primary-foreground mb-1">{m.value}</div>
              <div className="text-xs text-primary-foreground/70">{m.label}</div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground bg-background border border-primary/10 rounded-lg px-4 py-3 text-center max-w-lg mx-auto">
          Used for learning and structure. We prioritize original voice and authenticity.
        </p>
      </div>
    </section>
  );
}
