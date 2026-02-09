import { TrendingUp, Users, Trophy } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Students Served" },
  { icon: TrendingUp, value: "95%", label: "Success Rate" },
  { icon: Trophy, value: "14+", label: "Students Admitted to Top 10 Schools" },
];

export function ResultsSection() {
  return (
    <section id="results" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Proven Results
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Our students don't just apply — they get in. Here's the proof.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-primary-foreground/10 border border-primary-foreground/20 rounded-2xl p-10">
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-accent" />
              <div className="font-display text-6xl font-bold mb-3">{stat.value}</div>
              <div className="text-sm text-primary-foreground/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
