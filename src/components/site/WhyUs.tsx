import { Check } from "lucide-react";

const REASONS = [
  {
    title: "Proven 10-Year Track Record",
    text: "A decade of operational excellence and unbroken financial stability behind every contract we sign.",
  },
  {
    title: "8-Year Average Engagement",
    text: "Customer relationships that run nearly three times the industry average retention period.",
  },
  {
    title: "Principle-Driven Leadership",
    text: "Built on honesty, service and a relentless commitment to continuous improvement.",
  },
  {
    title: "Multi-Industry Best Practices",
    text: "Servicing industrial, consumer goods, construction and healthcare supply chains.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="scroll-mt-28 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
            Why Choose Topaz Transport?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                <Check className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg uppercase tracking-wide">{r.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
