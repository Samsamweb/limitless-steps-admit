import { Compass, FileText, School, PenTool, Mic, Mail } from "lucide-react";

const steps = [
  {
    icon: School,
    title: "School List + Guarantee",
    items: [
      "Build best-fit list by academics, values, and opportunity",
      "Identify reaches, targets, and likelies",
      "Finalize Top 5 colleges for the acceptance guarantee",
    ],
  },
  {
    icon: Compass,
    title: "Initial Strategy Meeting",
    items: [
      "Find your niche",
      "Major exploration and positioning",
      "Define strengths, spikes, and narrative direction",
    ],
  },
  {
    icon: FileText,
    title: "Personal Statement Brainstorm",
    items: [
      "Structured brainstorming",
      "Multiple concept testing",
      "Outline and voice alignment",
    ],
  },
  {
    icon: PenTool,
    title: "Essay Writing + Execution",
    items: [
      "Personal statement drafting and revisions",
      "Supplemental essays strategy and writing",
      "Extracurricular framing and descriptions",
    ],
  },
  {
    icon: Mic,
    title: "Interview + Final Submissions",
    items: [
      "Recommendation strategy guidance",
      "Mock interviews and storytelling practice",
      "Final review and submission planning",
    ],
  },
  {
    icon: Mail,
    title: "Post-Submission Strategy",
    items: [
      "Letters of Continued Interest",
      "Waitlist strategy and positioning",
      "Post-submission follow-ups and updates",
    ],
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
            A 6-step process designed for depth, not speed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-background border border-primary/10 rounded-xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <step.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary-foreground bg-primary px-2 py-0.5 rounded-full">
                    Step {i + 1}
                  </span>
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <ul className="space-y-2 flex-1">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="text-primary shrink-0">·</span>
                    <span>{item}</span>
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
