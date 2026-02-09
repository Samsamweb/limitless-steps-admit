import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Check, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const miniTestimonials = [
  { quote: "Samuel was always available when we needed him.", name: "Michelle T.", outcome: "Yale" },
  { quote: "Unlimited edits changed everything for us.", name: "James L.", outcome: "Columbia" },
  { quote: "We never felt alone in the process.", name: "Linda K.", outcome: "Princeton" },
];

const miniFaqs = [
  { q: "How does the guarantee work?", a: "Your student picks their top 5. If they don't get into at least one, you don't pay." },
  { q: "How many students do you accept?", a: "Only 20 per year to ensure quality and availability." },
  { q: "When should we apply?", a: "Ideally by spring of junior year, but we accept on a rolling basis." },
];

export default function Apply() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Application Received", description: "We will respond soon regarding next steps." });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="section-padding pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-crimson-light text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                8 spots remaining
              </div>

              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Apply to Work With Cambridge College Consulting
              </h1>

              <p className="text-muted-foreground mb-8">
                We accept only 20 students per year. Application required. Selective acceptance.
              </p>

              {/* Value props */}
              <div className="space-y-3 mb-10">
                {["Unlimited meetings and essay editing", "Direct founder support", "Top 5 college acceptance guarantee", "95% success rate"].map((v) => (
                  <div key={v} className="flex items-center gap-3 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {v}
                  </div>
                ))}
              </div>

              {/* Mini testimonials */}
              <div className="space-y-4 mb-10">
                <h3 className="font-display text-lg font-semibold text-foreground">What Families Say</h3>
                {miniTestimonials.map((t) => (
                  <div key={t.name} className="bg-warm-white rounded-lg p-4 text-sm">
                    <p className="text-foreground mb-2">"{t.quote}"</p>
                    <p className="text-muted-foreground text-xs">{t.name} · {t.outcome}</p>
                  </div>
                ))}
              </div>

              {/* Guarantee badge */}
              <div className="flex items-center gap-3 bg-crimson-light rounded-lg p-4">
                <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                <p className="text-sm text-foreground">
                  <strong>Acceptance Guarantee:</strong> If your student doesn't get into a top 5 choice, you don't pay.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {submitted ? (
                <div className="bg-warm-white rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-crimson-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">Application Received</h2>
                  <p className="text-muted-foreground">We will respond soon regarding next steps.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-warm-white rounded-2xl p-8 space-y-5">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-2">Student Application</h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="studentName">Student Name *</Label>
                      <Input id="studentName" required placeholder="First Last" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="parentName">Parent Name *</Label>
                      <Input id="parentName" required placeholder="First Last" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required placeholder="you@email.com" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" type="tel" required placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="gradYear">Graduation Year *</Label>
                      <Input id="gradYear" required placeholder="2026" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="gpa">GPA / Test Scores</Label>
                      <Input id="gpa" placeholder="Optional" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="major">Intended Major Interests</Label>
                    <Input id="major" placeholder="e.g., Computer Science, Economics" />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="topSchools">Current Top Schools</Label>
                    <Input id="topSchools" placeholder="e.g., Harvard, Stanford, MIT" />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="obstacle">Biggest obstacle right now *</Label>
                    <Textarea id="obstacle" required placeholder="Tell us briefly..." rows={3} />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="whyUnlimited">Why does unlimited support matter to you?</Label>
                    <Textarea id="whyUnlimited" placeholder="Optional" rows={3} />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="availability">Availability for intro call *</Label>
                    <Input id="availability" required placeholder="e.g., Weekday evenings, Saturday mornings" />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-crimson-dark font-semibold py-6 text-base">
                    Submit Application <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}

              {/* Mini FAQ */}
              {!submitted && (
                <div className="mt-8 space-y-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">Quick Answers</h3>
                  {miniFaqs.map((f) => (
                    <div key={f.q} className="text-sm">
                      <p className="font-medium text-foreground">{f.q}</p>
                      <p className="text-muted-foreground">{f.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
