const testimonials = [
  // Class of 2030
  {
    quote: "Sam didn't just edit my essays — he helped me figure out who I am and how to tell my story. I couldn't have done it without him.",
    student: "Michelle T.",
    outcome: "Admitted to Yale University",
    classYear: "Class of 2030",
  },
  {
    quote: "We went through 12 drafts of my personal statement and every single revision made it stronger. He never rushed the process.",
    student: "Sharvay S.",
    outcome: "Admitted to UT Austin ECB Program",
    classYear: "Class of 2030",
  },
  {
    quote: "I felt completely lost before working with Sam, but his guidance, strategy, and dedication completely changed my trajectory.",
    student: "Linda K.",
    outcome: "Admitted to Princeton University",
    classYear: "Class of 2030",
  },
  {
    quote: "The essay database was a game-changer. Seeing what actually worked at top schools gave me a huge advantage before I even started writing.",
    student: "Henry H.",
    outcome: "Admitted to Cornell University",
    classYear: "Class of 2030",
  },
  // Class of 2029
  {
    quote: "Sam helped me find an angle I never would have thought of on my own. That's what set my application apart.",
    student: "Robert P.",
    outcome: "Admitted to Harvard University",
    classYear: "Class of 2029",
  },
  {
    quote: "I was skeptical at first, but Sam's process just works. He knew exactly what admissions officers were looking for.",
    student: "David H.",
    outcome: "Admitted to Columbia University",
    classYear: "Class of 2029",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            What Students Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.student} className="bg-primary-foreground rounded-xl p-6 flex flex-col shadow-lg">
              <blockquote className="text-foreground mb-6 flex-1 leading-relaxed italic">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.student}</p>
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
