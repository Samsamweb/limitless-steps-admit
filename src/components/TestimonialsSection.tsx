const testimonials = [
  // Class of 2030
  {
    quote: "Samuel was always available. When our daughter needed help at 10pm the night before a deadline, he was there.",
    parent: "Michelle T.",
    outcome: "Student admitted to Yale University",
    classYear: "Class of 2030",
  },
  {
    quote: "Unlimited edits changed everything. The personal statement went through 12 drafts and each one was better than the last.",
    parent: "James L.",
    outcome: "Student admitted to Columbia University",
    classYear: "Class of 2030",
  },
  {
    quote: "We never felt alone in the process. Every question was answered, every concern addressed.",
    parent: "Linda K.",
    outcome: "Student admitted to Princeton University",
    classYear: "Class of 2030",
  },
  // Class of 2029
  {
    quote: "Strategy and execution, not vague advice. Samuel helped my son find a unique angle that made all the difference.",
    parent: "Robert P.",
    outcome: "Student admitted to Harvard University",
    classYear: "Class of 2029",
  },
  {
    quote: "The essay database gave my daughter real examples to learn from. She understood what worked before she started writing.",
    parent: "Karen M.",
    outcome: "Student admitted to Stanford University",
    classYear: "Class of 2029",
  },
  {
    quote: "Worth every penny. The guarantee showed confidence, and they delivered on their promise.",
    parent: "David H.",
    outcome: "Student admitted to UPenn",
    classYear: "Class of 2029",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            What Families Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.parent} className="bg-primary-foreground rounded-xl p-6 flex flex-col shadow-lg">
              <blockquote className="text-foreground mb-6 flex-1 leading-relaxed italic">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.parent}</p>
                <p className="text-xs text-primary font-medium mt-1">{t.outcome}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.classYear}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
