import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="bg-crimson-light border border-primary/10 rounded-2xl p-10 md:p-14 max-w-4xl mx-auto text-center">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Acceptance Guarantee
          </h2>
          <p className="text-lg text-foreground mb-4">
            Your student chooses their top 5 colleges. If they do not get into at least one, <strong className="text-primary">you don't pay</strong>.
          </p>
          <p className="text-muted-foreground mb-8">
            This guarantee is only possible because we work with a limited number of students and provide unlimited access.
          </p>
          <div className="bg-background/60 rounded-lg p-6 text-sm text-muted-foreground text-left max-w-lg mx-auto">
            <p className="font-medium text-foreground mb-2">Fair Terms</p>
            <p>
              Guarantee applies when the student follows the agreed timeline, meets deadlines, and completes required steps. College list is finalized together to ensure it is a realistic fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
