import { Clock, MessageSquare, Lightbulb, Zap } from "lucide-react";

const points = [
  { icon: Clock, text: "Unlimited meetings with flexible scheduling" },
  { icon: MessageSquare, text: "Unlimited essay edits and rewrites until submission" },
  { icon: Lightbulb, text: "On-demand brainstorming when a student gets stuck" },
  { icon: Zap, text: "Fast feedback loops to maintain momentum" },
];

export function UnlimitedSupportSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Unlimited Means Unlimited
          </h2>
          <p className="text-muted-foreground text-lg">
            Admissions timelines are unpredictable. Support should not be capped.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {points.map((p) => (
            <div key={p.text} className="flex gap-4 items-start bg-warm-white rounded-xl p-6">
              <p.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground">{p.text}</span>
            </div>
          ))}
        </div>

        <div className="bg-gold-light border border-gold/20 rounded-xl p-6 max-w-lg">
          <p className="text-sm font-medium text-foreground mb-1">Response Standard</p>
          <p className="text-sm text-muted-foreground">
            Most students receive feedback within 24–48 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
