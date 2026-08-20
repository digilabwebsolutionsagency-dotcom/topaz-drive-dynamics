import { ArrowRight, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-fleet.jpg";
import { scrollToSection } from "@/lib/scroll";

const STATS = [
  { value: "10+", label: "Years Industry Experience" },
  { value: "8 Yrs", label: "Average Customer Retention" },
  { value: "100%", label: "Namibia & SADC Coverage" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-charcoal">
      <img
        src={heroImg}
        alt="Scania freight trucks and Caterpillar earthmoving equipment working on a Namibian site"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,oklch(0.17_0.035_264/0.94),oklch(0.17_0.035_264/0.7)_55%,oklch(0.17_0.035_264/0.35))]" />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-40 sm:pt-48 lg:pb-28 lg:pt-56">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/85">
            <span className="size-2 rounded-full bg-success" />
            Windhoek, Namibia · Available Now
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Fulfill All Your Logistics &{" "}
            <span className="text-gradient-gold">Heavy Plant Hire</span> Needs Across Namibia & SADC
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            A one-stop facility providing over a decade of reliable freight transport, heavy
            equipment hire, and supply chain management.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="xl" onClick={() => scrollToSection("contact")}>
              Request Equipment / Quote <ArrowRight />
            </Button>
            <Button variant="outlineLight" size="xl" onClick={() => scrollToSection("fleet")}>
              <Truck /> Explore Fleet
            </Button>
          </div>
        </div>

        <dl className="mt-16 grid gap-4 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="glass-card rounded-lg px-6 py-5">
              <dt className="font-display text-3xl font-bold text-gold sm:text-4xl">{s.value}</dt>
              <dd className="mt-1 text-sm text-white/70">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
