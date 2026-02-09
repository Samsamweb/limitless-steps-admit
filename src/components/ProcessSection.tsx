import { Compass, FileText, School, PenTool, Mic } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Initial Strategy Meeting",
    items: ["Find your niche", "Major exploration and positioning", "Define strengths, spikes, and narrative direction"],
  },
  {
    icon: FileText,
    title: "Personal Statement Brainstorm",
    items: ["Structured brainstorming", "Multiple concept testing", "Outline and voice alignment"],
  },
  {
    icon: School,
    title: "School List + Fit",
    items: ["Build best-fit list by academics, values, and opportunity", "Identify reaches/targets/likelies", "Finalize Top 5 colleges for the guarantee"],
  },
  {
    icon: PenTool,
    title: "Execution Phase",
    items: ["Personal statement drafting + revisions", "Supplemental essays strategy and writing", "Extracurricular framing and descriptions", "Recommendation strategy guidance", "Narrative consistency across every section"],
  },
  {
    icon: Mic,
    title: "Interview + Final Submissions",
    items: ["Mock interviews and storytelling practice", "Final review of full application package", "Submission planning and deadline management"],
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-crimson-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What We Build Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A 5-step process designed for depth, not speed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`bg-background border border-primary/10 rounded-xl p-6 flex flex-col ${
                i === 3 || i === 4 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <step.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary-foreground bg-primary px-2 py-0.5 rounded-full">Step {i + 1}</span>
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <ul className="space-y-1.5 flex-1">
                {step.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
