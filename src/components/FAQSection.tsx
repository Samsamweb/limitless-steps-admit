import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the guarantee work?",
    a: "Your student selects their top 5 colleges. If they are not admitted to at least one, you do not pay. The guarantee requires the student to follow the agreed timeline, meet deadlines, and complete all required steps.",
  },
  {
    q: 'What counts as "top 5 colleges of your choice"?',
    a: "The Top 5 list is finalized together during the School List + Fit phase. We ensure the list is ambitious but realistic, combining reaches and strong targets.",
  },
  {
    q: "What if my student changes their list?",
    a: "List adjustments are natural and expected. Changes are made collaboratively, and the guarantee applies to the final agreed-upon list.",
  },
  {
    q: "How often do you meet?",
    a: "As often as needed. There are no caps on meetings. Most students meet 1–3 times per week during peak periods, with flexibility year-round.",
  },
  {
    q: "How does unlimited essay editing work?",
    a: "Every draft is reviewed and returned with detailed feedback. Students can revise and resubmit as many times as needed until the essay is submission-ready.",
  },
  {
    q: "Do you help with interviews?",
    a: "Yes. We provide mock interviews, question banks, and storytelling practice tailored to each student and school.",
  },
  {
    q: "Do you help with extracurricular descriptions and activity framing?",
    a: "Absolutely. We help frame activities, write Common App descriptions, and ensure the full application tells a cohesive story.",
  },
  {
    q: "When should we apply to work together?",
    a: "Ideally by spring of junior year for the best outcomes. However, we accept students on a rolling basis depending on availability.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-crimson-light">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-primary/10 rounded-xl px-6">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
