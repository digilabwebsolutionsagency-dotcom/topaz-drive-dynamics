import { ArrowUpRight, Network, Route, Weight } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const SERVICES = [
  {
    icon: Network,
    title: "Transportation Management & Freight Brokerage",
    text: "End-to-end load dispatch and route optimization supported by industry-leading transport management technologies.",
  },
  {
    icon: Weight,
    title: "Specialized & Abnormal Load Transport",
    text: "Capable of transporting anything from consumer goods and food products to massive construction materials and abnormal loads.",
  },
  {
    icon: Route,
    title: "Dedicated Contract Carriage (DCC)",
    text: "Tailored logistics solutions ensuring your shipments reach their destination on time and intact, every single run.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 surface-dark py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Our Services</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
            Comprehensive Logistics & Freight Solutions
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <button
              key={s.title}
              onClick={() => scrollToSection("contact")}
              className="group glass-card rounded-xl p-7 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-lg bg-[image:var(--gradient-gold)] text-gold-foreground">
                  <s.icon className="size-6" />
                </span>
                <span className="font-display text-3xl text-white/15">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-xl uppercase leading-snug tracking-wide">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{s.text}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                Request this service
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
